const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const DATA_FILE = path.resolve(__dirname, 'data.json');
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, '..', 'frontend')));

async function loadData() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return { students: [], attendance: {} };
  }
}

async function saveData(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

app.get('/api/state', async (req, res) => {
  const data = await loadData();
  // Don't send user passwords to the frontend
  const safeData = { ...data };
  if (safeData.users) {
    safeData.users = safeData.users.map(u => ({ id: u.id, email: u.email, name: u.name, department: u.department }));
  }
  res.json(safeData);
});

// Authentication Endpoints
app.post('/api/auth/signup', async (req, res) => {
  const { name, department, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  const data = await loadData();
  if (!data.users) data.users = [];

  const exists = data.users.some(u => u.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    return res.status(409).json({ error: 'Email already exists.' });
  }

  const user = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    name,
    department,
    email,
    password // In a real app, hash this!
  };

  data.users.push(user);
  await saveData(data);
  
  res.status(201).json({ message: 'User created successfully', user: { id: user.id, name: user.name, email: user.email } });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const data = await loadData();
  if (!data.users) data.users = [];

  const user = data.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  res.json({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email, department: user.department } });
});

app.post('/api/students', async (req, res) => {
  const { name, rollNumber, course, class: classId, subjects } = req.body;

  if (!name || !rollNumber || !course || !classId) {
    return res.status(400).json({ error: 'Missing required student details.' });
  }

  const data = await loadData();
  const exists = data.students.some(
    (student) => student.rollNumber.toLowerCase() === rollNumber.toLowerCase()
  );

  if (exists) {
    return res.status(409).json({ error: 'Roll number already exists.' });
  }

  const student = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    name,
    rollNumber,
    course,
    class: classId
  };

  data.students.push(student);
  
  // Add subject enrollments if provided
  if (Array.isArray(subjects) && subjects.length > 0) {
    if (!data.enrollments) data.enrollments = {};
    data.enrollments[student.id] = subjects;
  }
  
  await saveData(data);
  res.status(201).json(student);
});

app.delete('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  const data = await loadData();
  const removed = data.students.filter((student) => student.id !== id);

  if (removed.length === data.students.length) {
    return res.status(404).json({ error: 'Student not found.' });
  }

  data.students = removed;
  Object.keys(data.attendance).forEach((date) => {
    delete data.attendance[date]?.[id];
  });

  await saveData(data);
  res.json({ deleted: true });
});

app.post('/api/attendance', async (req, res) => {
  const { date, attendance } = req.body;

  if (!date || typeof attendance !== 'object' || attendance === null) {
    return res.status(400).json({ error: 'Missing date or attendance data.' });
  }

  const data = await loadData();
  if (!data.attendance) data.attendance = {};
  if (!data.attendance[date]) data.attendance[date] = {};
  data.attendance[date] = {
    ...data.attendance[date],
    ...attendance
  };
  await saveData(data);
  res.json({ date, attendance: data.attendance[date] });
});

app.post('/api/attendance/mark', async (req, res) => {
  const { date, subject, studentId, present } = req.body;

  if (!date || !subject || !studentId || typeof present !== 'boolean') {
    return res.status(400).json({ error: 'Missing attendance mark details.' });
  }

  const data = await loadData();
  if (!data.attendance) data.attendance = {};
  if (!data.attendance[date]) data.attendance[date] = {};
  if (!data.attendance[date][subject]) data.attendance[date][subject] = {};
  data.attendance[date][subject][studentId] = present;
  await saveData(data);
  res.json({ date, subject, studentId, present });
});

app.get('/api/subjects', async (req, res) => {
  const data = await loadData();
  res.json(data.subjects || []);
});

app.get('/api/classes', async (req, res) => {
  const data = await loadData();
  res.json(data.classes || []);
});

app.post('/api/subjects', async (req, res) => {
  const { name, teacher } = req.body;

  if (!name || !teacher) {
    return res.status(400).json({ error: 'Missing subject name or teacher name.' });
  }

  const data = await loadData();
  if (!Array.isArray(data.subjects)) {
    data.subjects = [];
  }

  const subject = {
    id: `sub-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    name,
    teacher
  };

  data.subjects.push(subject);
  await saveData(data);
  res.status(201).json(subject);
});

app.delete('/api/subjects/:id', async (req, res) => {
  const { id } = req.params;
  const data = await loadData();

  if (!Array.isArray(data.subjects)) {
    return res.status(404).json({ error: 'Subject not found.' });
  }

  const filtered = data.subjects.filter((s) => s.id !== id);

  if (filtered.length === data.subjects.length) {
    return res.status(404).json({ error: 'Subject not found.' });
  }

  data.subjects = filtered;
  
  // Clean up attendance records for this subject
  Object.keys(data.attendance).forEach((date) => {
    delete data.attendance[date]?.[id];
  });

  await saveData(data);
  res.json({ deleted: true });
});

app.post('/api/classes', async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Missing class name.' });
  }

  const data = await loadData();
  if (!Array.isArray(data.classes)) {
    data.classes = [];
  }

  const classItem = {
    id: `class-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    name
  };

  data.classes.push(classItem);
  await saveData(data);
  res.status(201).json(classItem);
});

app.delete('/api/classes/:id', async (req, res) => {
  const { id } = req.params;
  const data = await loadData();

  if (!Array.isArray(data.classes)) {
    return res.status(404).json({ error: 'Class not found.' });
  }

  const filtered = data.classes.filter((c) => c.id !== id);

  if (filtered.length === data.classes.length) {
    return res.status(404).json({ error: 'Class not found.' });
  }

  // Don't allow deleting a class that has students
  const hasStudents = data.students.some((s) => s.class === id);
  if (hasStudents) {
    return res.status(409).json({ error: 'Cannot delete a class that has students. Move or delete students first.' });
  }

  data.classes = filtered;
  await saveData(data);
  res.json({ deleted: true });
});

app.post('/api/check-in/photo', async (req, res) => {
  try {
    const { studentId, photo, date } = req.body;

    if (!studentId || !photo || !date) {
      return res.status(400).json({ error: 'Missing studentId, photo, or date.' });
    }

    const data = await loadData();
    if (!data.checkins) data.checkins = {};
    if (!data.checkins[date]) data.checkins[date] = {};
    
    data.checkins[date][studentId] = {
      photo,
      timestamp: new Date().toISOString()
    };

    // Also mark as present in general attendance for that date if applicable
    if (!data.attendance) data.attendance = {};
    if (!data.attendance[date]) data.attendance[date] = {};
    // Find a default subject or just mark as overall present
    const firstSubjectId = data.subjects && data.subjects.length > 0 ? data.subjects[0].id : 'general';
    if (!data.attendance[date][firstSubjectId]) data.attendance[date][firstSubjectId] = {};
    data.attendance[date][firstSubjectId][studentId] = true;

    await saveData(data);
    res.json({ success: true });
  } catch (err) {
    console.error('Error saving check-in photo:', err);
    res.status(500).json({ error: 'Internal server error while saving photo.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Attendance backend running on http://localhost:${PORT}`);
});
