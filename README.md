<div align="center">

# 🚀 AWSPro CAMS  
## 🎓 College Attendance Management System

### A smart, modern, QR-powered attendance management platform for colleges, schools, and universities.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Frontend-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Dev_Server-646CFF?style=for-the-badge&logo=vite&logoColor=white)

<br />

### 📌 Real-time Attendance • QR Check-ins • Photo Verification • Analytics Dashboard • DOCX Reports

</div>

---

## ✨ About The Project

**AWSPro CAMS** is a full-stack digital attendance management system designed to modernize how educational institutions manage attendance.

Instead of using outdated paper registers, AWSPro CAMS provides a fast, secure, and interactive attendance workflow where faculty can manage classes, students can check in using QR codes, and administrators can monitor attendance insights through analytics dashboards.

This project is built for:

- 🏫 Schools
- 🎓 Colleges
- 🏛️ Universities
- 👨‍🏫 Faculty members
- 👩‍🎓 Students
- 🧑‍💼 Administrators

---

## 🔥 Why AWSPro CAMS?

Traditional attendance systems are slow, error-prone, and difficult to analyze.

AWSPro CAMS solves this by offering:

- ⚡ Fast digital attendance marking
- 📷 Webcam-based photo verification
- 📱 QR-based student check-ins
- 📊 Visual analytics and weekly trends
- 🧾 Automatic report generation
- 🗂️ JSON-based persistent storage
- 🔐 Secure login and signup system

---

## 📚 Table of Contents

- [✨ About The Project](#-about-the-project)
- [🔥 Why AWSPro CAMS?](#-why-awspro-cams)
- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation](#️-installation)
- [▶️ Usage](#️-usage)
- [🔄 Workflow](#-workflow)
- [🌐 API Endpoints](#-api-endpoints)
- [⚙️ Configuration](#️-configuration)
- [🧾 Report Generation](#-report-generation)
- [🧪 Example Use Case](#-example-use-case)
- [🚧 Future Scope](#-future-scope)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🚀 Features

### 🔐 Authentication System

- Secure login and signup
- Faculty/Admin authentication
- Session management
- Protected application access

---

### 👨‍🎓 Student Management

- Add new students
- Edit student details
- Delete student records
- Assign students to classes
- Manage subject-wise student data

---

### 🧑‍🏫 Attendance Dashboard

- Real-time attendance tracking
- Present/Absent toggle system
- Class-wise attendance management
- Attendance filtering
- Easy dashboard-based control

---

### 📱 QR-Based Check-In

- Dynamic QR code generation
- Student self check-in support
- Webcam-based QR scanning
- Fast attendance logging
- Reduced manual effort for faculty

---

### 📷 Photo Verification

- Webcam image capture
- Identity verification during check-in
- Secure attendance validation
- Helps prevent proxy attendance

---

### 📊 Analytics Dashboard

- Weekly attendance trends
- Student participation insights
- Interactive charts using Recharts
- Visual attendance reports
- Better decision-making for faculty and admins

---

### 🧾 Report Generation

- Automatic attendance report generation
- DOCX export support
- Node.js report generator
- Python report generator
- Useful for documentation and institutional records

---

## 🛠️ Tech Stack

### 🎨 Frontend

| Technology | Purpose |
|---|---|
| React 19 | UI development |
| TypeScript | Type-safe frontend logic |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| React Router DOM v7 | Routing |
| Recharts | Analytics charts |
| jsQR | QR code scanning |
| Qrious | QR code generation |
| Vite | Frontend build tool |

---

### 🧠 Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Backend API server |

---

### 🗄️ Database

| Storage | Purpose |
|---|---|
| `data.json` | JSON-based persistent storage |

---

### 🧰 Tools

| Tool | Purpose |
|---|---|
| Python | Report generation |
| python-docx | DOCX report creation |
| docx | Node.js DOCX generation |
| Git | Version control |
| GitHub | Repository hosting |

---

## ⚙️ Installation

### 1️⃣ Clone The Repository

\`\`\`bash
git clone https://github.com/ianuj-yadav/awspro-ams.git
\`\`\`

---

### 2️⃣ Navigate To The Project Folder

\`\`\`bash
cd awspro-ams
\`\`\`

---

### 3️⃣ Install All Dependencies

\`\`\`bash
npm run install-all
\`\`\`

---

### Manual Installation

#### Install Frontend Dependencies

\`\`\`bash
cd frontend
npm install
\`\`\`

#### Install Backend Dependencies

\`\`\`bash
cd ../backend
npm install
\`\`\`

---

## ▶️ Usage

### Start The Development Servers

From the root directory, run:

\`\`\`bash
npm run dev
\`\`\`

---

### Frontend URL

\`\`\`text
http://localhost:5173
\`\`\`

---

### Backend URL

\`\`\`text
http://localhost:4000
\`\`\`

---

## 🔄 Workflow

\`\`\`text
Admin / Faculty Login
        ↓
Register Students, Classes & Subjects
        ↓
Create Attendance Session
        ↓
Generate Dynamic QR Code
        ↓
Student Scans QR Code
        ↓
Webcam Captures Student Photo
        ↓
Attendance Payload Sent To Backend
        ↓
Data Stored In data.json
        ↓
Analytics Dashboard Updates
\`\`\`

---

## 🌐 API Endpoints

### 🔐 Authentication

#### Login

\`\`\`http
POST /api/auth/login
\`\`\`

---

### 👨‍🎓 Students

#### Add Student

\`\`\`http
POST /api/students
\`\`\`

---

### 🧑‍🏫 Attendance

#### Mark Attendance

\`\`\`http
POST /api/attendance/mark
\`\`\`

---

### 📷 QR Photo Check-In

#### Photo-Based Check-In

\`\`\`http
POST /api/check-in/photo
\`\`\`

---

### 🗄️ State

#### Fetch Database State

\`\`\`http
GET /api/state
\`\`\`

---

## ⚙️ Configuration

### Vite Proxy Configuration

The frontend uses a Vite proxy to forward API requests to the backend server.

\`\`\`js
server: {
  proxy: {
    '/api': 'http://localhost:4000',
  },
}
\`\`\`

Make sure the backend is running at:

\`\`\`text
http://localhost:4000
\`\`\`

---

## 🧾 Report Generation

AWSPro CAMS supports attendance report generation using both Node.js and Python scripts.

### Available Report Scripts

\`\`\`bash
scripts/generate_report.js
scripts/generate_report.py
\`\`\`

---

### Python Dependency

If using the Python report generator, install:

\`\`\`bash
pip install python-docx
\`\`\`

---

## 🧪 Example Use Case

Imagine a faculty member wants to take attendance for a Computer Science lecture.

1. Faculty logs into AWSPro CAMS.
2. Faculty selects the class, subject, and date.
3. The system generates a unique QR code.
4. Students scan the QR code using the webcam scanner.
5. The system captures the student's image for verification.
6. Attendance is saved automatically.
7. Faculty views attendance analytics instantly.

Result:

- No paper registers
- No manual counting
- Less proxy attendance
- Faster reporting
- Better attendance insights

---

## 🚧 Future Scope

Planned improvements include:

- 🧬 Biometric authentication
- 🤖 AI-based attendance prediction
- 📱 Mobile application support
- 🏫 Student Information System integration
- 🌍 Multi-language support
- ⛓️ Blockchain-based attendance security
- 📧 Email attendance reports
- 📥 CSV/PDF export support
- 🔔 Attendance alerts and notifications

---

## 🤝 Contributing

Contributions are welcome.

If you want to improve this project, follow these steps:

### 1️⃣ Fork The Repository

Click the **Fork** button on the repository page.

### 2️⃣ Create A Feature Branch

\`\`\`bash
git checkout -b feature-name
\`\`\`

### 3️⃣ Commit Your Changes

\`\`\`bash
git commit -m "Added new feature"
\`\`\`

### 4️⃣ Push To Your Branch

\`\`\`bash
git push origin feature-name
\`\`\`

### 5️⃣ Create A Pull Request

Open a pull request and describe your changes.

---

## 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project according to the license terms.

---

## 👨‍💻 Author

<div align="center">

### Anuj Yadav


[![GitHub](https://img.shields.io/badge/GitHub-ianuj--yadav-181717?style=for-the-badge&logo=github)](https://github.com/ianuj-yadav)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-anuj--yadav07-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/anuj-yadav07)

</div>

---

<div align="center">

## ⭐ Show Your Support

If you like this project, consider giving it a star on GitHub.

</div>
