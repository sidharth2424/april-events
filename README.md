# April Events - Event Management Web Platform


![April Events Banner](frontend/public/homepage.png)

April Events is a full-stack event management platform where users can register, submit event requirements, and track event status. Admins can view, filter, manage, and update events via a secure dashboard. The website is responsive and optimized for both desktop and mobile users.
(⚠️ This is a demo version created for academic and portfolio purposes)

---

### 🌐 Live Demo

👉 [Visit April Events Website](https://april-events.netlify.app/)


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

<details>
<summary>Click to expand</summary>

```plaintext
april-events/
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   ├── aprileventslogo.jpeg
│   │   └── hero.jpg
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── EventForm.js
│   │   │   ├── AdminLogin.js
│   │   │   ├── AdminDashboard.js
│   │   │   ├── UserLogin.js
│   │   │   └── UserRegister.js
│   │   └── App.js
│   └── package.json
│
├── .gitignore
├── README.md
└── .env (Not included in repo)


Developed with 💚 by Sidharth M


