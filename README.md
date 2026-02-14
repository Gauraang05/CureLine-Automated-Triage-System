# CureLine – Automated Triage System

🔗 **Live Application**  
https://cureline-automated-triage-system.onrender.com


## Overview

CureLine is a full-stack web application designed to simulate an automated emergency triage system. It evaluates patient clinical parameters and prioritizes cases based on severity, ensuring that critical patients receive immediate attention.
The system demonstrates real-world healthcare workflow simulation, modern full-stack development practices and production deployment using a scalable architecture.


## Problem Statement

In emergency environments, manual triage can be time-consuming and prone to delays. CureLine addresses this challenge by:
- Evaluating patient condition using clinical indicators
- Automatically assigning priority levels
- Maintaining a dynamic treatment queue
- Helping simulate efficient emergency response workflows


## Key Features

- Automated patient severity scoring
- Dynamic priority-based triage queue
- Add, update and manage patient queue
- RESTful API architecture
- Real-time UI updates
- Responsive and modern interface


## Getting Started (Local Setup)

### 1. Clone the Repository
git clone https://github.com/Gauraang05/CureLine-Automated-Triage-System.git
cd CureLine-Automated-Triage-System

### 2. Install Dependencies
npm install

### 3. Run in Development Mode
npm run dev

### 4. Open in browser
http://localhost:5000


## Environment Variables

Create a `.env` file (if required):
NODE_ENV=production
PORT=5000
DATABASE_URL=your_database_url


## Future Improvements

- User authentication and role-based access
- Real-time updates using WebSockets
- Analytics and reporting dashboard for staff
- Dynamic re-triage using IoT/Wearable devices
- Personalizations for different hospitals according to their available resources


## Deployment

The application is deployed on Render.
Live URL:  
https://cureline-automated-triage-system.onrender.com


## License

This project is licensed under the MIT License.
