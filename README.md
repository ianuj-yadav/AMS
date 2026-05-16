# AWSPro - College Attendance Management System (CAMS)

A modern full-stack attendance management system for educational institutions, featuring real-time attendance marking, QR-based student check-ins, photo verification, and interactive analytics dashboards.

AWSPro CAMS replaces traditional paper-based attendance systems with a secure, fast, and digital solution for administrators, faculty members, and students.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Workflow](#workflow)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Report Generation](#report-generation)
- [Future Scope](#future-scope)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## About the Project

AWSPro CAMS is a smart attendance management platform designed for schools, colleges, and universities.

The system allows:

- Faculty members to manage attendance digitally
- Students to check into classes using QR codes
- Administrators to monitor attendance trends through analytics dashboards
- Institutions to reduce manual attendance errors and paperwork

The platform includes authentication, attendance dashboards, QR-based check-ins, webcam-based photo verification, analytics, and report generation.

---

## Features

### Authentication System

- Secure login and signup
- Faculty/Admin authentication
- Session management

### Student Management

- Add new students
- Edit student records
- Delete students
- Assign students to classes and subjects

### Attendance Dashboard

- Real-time attendance tracking
- Present/Absent toggle system
- Attendance filtering
- Class-wise attendance management

### QR-Based Check-In

- Dynamic QR code generation
- Student self check-in system
- Webcam QR scanner
- Fast attendance logging

### Photo Verification

- Webcam image capture
- Identity verification during check-in
- Secure attendance validation

### Analytics Dashboard

- Attendance trend visualization
- Weekly analytics
- Interactive charts using Recharts
- Student participation insights

### Report Generation

- Automatic attendance report generation
- DOCX export support
- Node.js and Python-based report generators

---

## Tech Stack

### Frontend

- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Router DOM v7
- Recharts
- jsQR
- Qrious
- Vite

### Backend

- Node.js
- Express.js

### Database

- JSON-based persistent storage using `data.json`

### Tools

- Python
- python-docx
- docx
- Git
- GitHub

---

## Project Structure

\`\`\`bash
awspro-ams/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Signup.tsx
│   │   │   ├── Analytics.tsx
│   │   │   └── Profile.tsx
│   │   │
│   │   ├── AttendanceSystem.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── index.html
│   └── vite.config.ts
│
├── backend/
│   ├── server.js
│   └── data.json
│
├── scripts/
│   ├── generate_report.js
│   └── generate_report.py
│
├── package.json
└── README.md
\`\`\`

---

## Installation

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/ianuj-yadav/awspro-ams.git
\`\`\`

### 2. Navigate to the Project Folder

\`\`\`bash
cd awspro-ams
\`\`\`

### 3. Install Dependencies

Install all dependencies using:

\`\`\`bash
npm run install-all
\`\`\`

Or install frontend and backend dependencies manually:

\`\`\`bash
cd frontend
npm install
\`\`\`

\`\`\`bash
cd ../backend
npm install
\`\`\`

---

## Usage

### Start Development Servers

From the root directory, run:

\`\`\`bash
npm run dev
\`\`\`

### Frontend

\`\`\`text
http://localhost:5173
\`\`\`

### Backend

\`\`\`text
http://localhost:4000
\`\`\`

### Basic Usage Flow

1. Open the frontend application in your browser.
2. Login or signup as an administrator/faculty member.
3. Access the attendance dashboard.
4. Manage students, subjects, and classes.
5. Generate QR codes for attendance sessions.
6. Students scan QR codes using the webcam kiosk.
7. Attendance is recorded with photo verification.
8. View analytics and attendance insights.

---

## Workflow

### 1. Administrator Configuration

- Admin logs into the system.
- Students, classes, and subjects are registered.

### 2. Session Creation

Faculty selects:

- Class
- Subject
- Date

The system then generates a unique QR code for the attendance session.

### 3. Student Check-In

- Student selects their profile.
- Student scans the QR code using the webcam scanner.

### 4. Verification

- Webcam captures the student image.
- Frontend sends the attendance payload to the backend.

### 5. Data Storage

- Backend stores attendance records in `data.json`.

### 6. Analytics

- Dashboard fetches attendance data.
- Recharts visualizes attendance trends and participation insights.

---

## API Endpoints

### Authentication

#### Login

\`\`\`http
POST /api/auth/login
\`\`\`

---

### Students

#### Add Student

\`\`\`http
POST /api/students
\`\`\`

---

### Attendance

#### Mark Attendance

\`\`\`http
POST /api/attendance/mark
\`\`\`

---

### QR Check-In

#### Photo-Based Check-In

\`\`\`http
POST /api/check-in/photo
\`\`\`

---

### State

#### Fetch Database State

\`\`\`http
GET /api/state
\`\`\`

---

## Configuration

### Vite Proxy Configuration

The frontend uses a Vite proxy to forward API requests to the backend server.

\`\`\`js
server: {
  proxy: {
    '/api': 'http://localhost:4000',
  },
}
\`\`\`

Make sure the backend server is running on:

\`\`\`text
http://localhost:4000
\`\`\`

---

## Report Generation

The project supports attendance report generation using both Node.js and Python scripts.

### Available Scripts

\`\`\`bash
scripts/generate_report.js
scripts/generate_report.py
\`\`\`

### Python Dependency

If using the Python report generator, install:

\`\`\`bash
pip install python-docx
\`\`\`

---

## Future Scope

Planned improvements include:

- Biometric authentication
- AI-based attendance prediction
- Mobile application support
- Student Information System integration
- Multi-language support
- Blockchain-based attendance security

---

## Contributing

Contributions are welcome.

### Steps to Contribute

1. Fork the repository.
2. Create a feature branch.

\`\`\`bash
git checkout -b feature-name
\`\`\`

3. Commit your changes.

\`\`\`bash
git commit -m "Added new feature"
\`\`\`

4. Push your changes.

\`\`\`bash
git push origin feature-name
\`\`\`

5. Create a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Author

**Anuj Yadav**

- GitHub: https://github.com/ianuj-yadav
- LinkedIn: https://linkedin.com/in/anuj-yadav07
