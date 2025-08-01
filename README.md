# Social Networking Website

## Overview

A full-stack social networking platform built with the PERN stack (PostgreSQL, Express.js, React.js, Node.js).  
Features include user authentication, profile management, posting, commenting, likes, following, and dark mode.  
Images are uploaded directly to Cloudinary for fast and reliable media hosting.

---

## Tech Stack

- **Frontend:** React, SCSS, React Context, React Query, Axios
- **Backend:** Node.js, Express.js, JWT, dotenv
- **Database:** PostgreSQL
- **Image Hosting:** Cloudinary
- **Authentication:** JWT (stored in HTTP-only cookies)
- **State Management:** React Context API

---

## Features

- User registration and login (JWT-based authentication)
- Profile management (edit profile, upload profile/cover images)
- Create, edit, and delete posts with image uploads
- Like and comment on posts
- Responsive design with dark mode toggle
- Real-time UI updates using React Query

---

## Folder Structure

```
/
├── Client     # React frontend
├── Server     # Node.js backend
├── Resources     # SQL and screenshots
└── README.md
```
---

## Setup Instructions

### 1. Database

- Install PostgreSQL and pgAdmin.
- Create a new database.
- Import the provided SQL file from `/Resources/Social.sql` using pgAdmin.

### 2. Backend

```bash
cd Server
npm install
```

- Configure your database connection in `db.js`.
- Create a `.env` file in the `Server` folder with:
  ```
  JWT_SECRET=your_secret_key
  CLOUDINARY_CLOUD_NAME=your_cloud_name
  CLOUDINARY_API_KEY=your_api_key
  CLOUDINARY_API_SECRET=your_api_secret
  ```
- Start the backend:
  ```bash
  npm start
  ```

### 3. Frontend

```bash
cd Client
npm install
npm start
```

---

## Usage

- Register a new account or log in.
- Create posts with images (uploaded to Cloudinary).
- Like, comment, and follow other users.
- Edit your profile and switch between dark/light mode.

---

## Dark Mode

- Toggle dark mode from the navbar.
- Theme preference is managed via React Context and saved in localStorage.
- SCSS applies styles based on the current theme.

---

## Screenshots

![Home Page](/Resources/Screenshot-1.jpg)
![Profile Page](/Resources/Screenshot-2.jpg) 
<!-- Add more screenshots as needed-->

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes.
4. Push and open a pull request.

---

## License

This project is for educational purposes.

---
Happy coding! 🚀