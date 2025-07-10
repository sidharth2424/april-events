# 🎉 April Events - Event Management Web Platform

April Events is a full-stack event management platform where users can register, submit event requirements, and track event status. Admins can view, filter, manage, and update events via a secure dashboard. The website is responsive and optimized for both desktop and mobile users.

---

## 🚀 Features

### 👤 User Side
- User Registration & Login (with JWT authentication)
- Submit event requirements (event type, date, guests, location, etc.)
- Track event status via dashboard
- Responsive & elegant frontend with Playfair/Festive/Monoton fonts

### 🔐 Admin Side
- Admin login with password protection
- View all submitted events
- Filter/search events by status, name or email
- Update event status (Pending / Approved / Completed)
- Delete events
- Highlights events happening today

### 📱 Mobile-Friendly
- Desktop: Full navigation bar and layout
- Mobile: Hamburger menu with dropdown navigation
- Optimized layout with conditional rendering for mobile and desktop

---

## 🛠️ Tech Stack

| Frontend            | Backend         | Database     | Others                      |
|---------------------|-----------------|--------------|-----------------------------|
| React.js (w/ Tailwind CSS) | Node.js & Express | MongoDB (via Atlas) | JWT Auth, React Router, Lucide Icons |

---

## 📁 Folder Structure
april-events/
│
├── backend/ # Express backend with routes and models
├── frontend/ # React frontend with routing and components
│ ├── public/ # Public assets (logo, hero image)
│ ├── src/
│ │ ├── pages/ # Pages: HomePage, EventForm, AdminDashboard, etc.
│ │ └── App.js # Routing logic
├── .env # Environment variables
└── README.md # This file


Developed with 💚 by Sidharth M



Ask ChatGPT


