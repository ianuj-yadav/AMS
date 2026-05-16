content = """# AWSPro - College Attendance Management System (CAMS)

The College Attendance Management System (CAMS), internally branded as AWSPro, is a comprehensive web-based application designed to streamline and automate the attendance tracking process in educational institutions. Traditional attendance management systems often rely on manual marking and paper-based records, which are time-consuming and prone to human error. This project modernizes the workflow by presenting an innovative digital solution that enables real-time attendance marking, automated QR-based check-ins, and robust data visualization.

## ✨ Key Features

* **Administrator Authentication:** Secure signup and login portal allowing verified administrators to manage attendance, oversee departments, and control system access.
* **Comprehensive Student Roster:** A centralized dashboard to enroll new students, allocate them to specific classes and subjects, and manage their academic profiles with unique roll numbers.
* **Real-time Attendance Marking:** Allows faculty to manually toggle student presence via an intuitive, glassmorphism-styled interface that filters by date, class, and subject.
* **Student QR Kiosk & Photo Verification:** Admins can generate a dynamic, session-specific QR code. Students use the self-service kiosk to select their profile, scan the QR using their device's camera, and capture a photo to confirm their identity and log their attendance.
* **Interactive Analytics Dashboard:** Provides visually appealing Bar and Line charts tracking weekly attendance trends, overall student engagement levels, and real-time daily insights (Present vs. Absent ratios).
* **Lightweight Data Persistence:** Stores application state—including user credentials, student lists, subject enrollments, and historical attendance data—in an efficient, centralized JSON file without requiring a heavy external database.

---

## 🛠️ Technology Stack

### Frontend
* **Core:** React 19, TypeScript, and Vite for fast, optimized builds.
* **Styling:** Tailwind CSS v4 alongside custom CSS for modern, responsive glassmorphism UI designs.
* **Routing:** React Router v7 for seamless client-side navigation between the Hub, Dashboard, and Analytics pages.
* **Data Visualization:** Recharts for rendering interactive graphs.
* **Media & Hardware:** `qrious` for rendering QR codes and `jsqr` for processing webcam video streams.

### Backend & Tooling
* **Server Core:** Node.js with Express.js handling RESTful API requests.
* **Storage:** File-system based JSON storage (`data.json`) acting as the primary database.
* **Security:** Configured with Cross-Origin Resource Sharing (CORS) and built-in UUID generation for unique record identification.
* **Documentation:** Auxiliary scripts in both Node.js (`docx` library) and Python (`python-docx`) to auto-generate `.docx` project reports.

---

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 or higher recommended)
* npm

### Installation & Execution

1.  **Clone the repository:**
    ```
```text?code_stdout&code_event_index=2
README.md created successfully

```bash
    git clone [https://github.com/your-username/awspro-ams.git](https://github.com/your-username/awspro-ams.git)
    cd awspro-ams
    ```

2.  **Install dependencies:**
    Navigate to the root directory and install packages for both frontend and backend environments.
    ```bash
    npm install
    ```

3.  **Start the Backend Server:**
    The Express server operates on port 4000 and handles all API operations.
    ```bash
    npm run start # or npm run dev for nodemon
    ```

4.  **Start the Frontend Development Server:**
    Open a new terminal window, ensure you are in the frontend directory, and run Vite.
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`. 

---

## 📡 REST API Reference

The backend provides several core endpoints for data manipulation and retrieval:

* **Authentication:**
    * `POST /api/auth/signup`: Registers a new administrator.
    * `POST /api/auth/login`: Authenticates an administrator and grants access.
* **State Management:**
    * `GET /api/state`: Retrieves the complete application state (classes, subjects, students, enrollments).
* **Entity Operations:**
    * `POST /api/students`: Adds a new student record and handles subject auto-enrollment.
    * `DELETE /api/students/:id`: Removes a student and cleans up their historical attendance.
    * `POST /api/classes` & `DELETE /api/classes/:id`: Manages academic classes.
    * `POST /api/subjects` & `DELETE /api/subjects/:id`: Manages academic subjects.
* **Attendance Logging:**
    * `POST /api/attendance/mark`: Toggles manual present/absent status for a student.
    * `POST /api/check-in/photo`: Validates a QR scan and saves a base64 photo capture alongside the check-in timestamp.

---

## 📄 Automated Report Generation

The project includes built-in scripts to generate formal documentation detailing the system's abstract, methodology, literature study, and performance evaluation.

To generate the Microsoft Word (`.docx`) report, run either of the following commands from the `scripts/` directory:

```bash
# Using Node.js
node scripts/generate_report.js

# Using Python
python scripts/generate_report.py
