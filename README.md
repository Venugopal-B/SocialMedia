# Full Stack Social Networking Website

## Overview
This is a Full Stack Social Networking Website built using the PERN stack (PostgreSQL, Express.js, React.js, Node.js). The project includes a client-server architecture with the frontend in `Project2` and the backend in `Projects`. It supports user authentication, profile management, posting, and social interactions.

## Folder Structure
- **Project2**: Contains the React.js frontend application.
- **Projects**: Contains the Node.js backend application.

## Prerequisites
Ensure you have the following installed on your machine:
- Node.js (which includes npm)
- PostgreSQL and pgAdmin (for managing your database)
- Visual Studio Code (or any preferred code editor)

## Getting Started

### Database Setup

1. **Install pgAdmin:**
   - Download and install pgAdmin from the official website: [pgAdmin Downloads](https://www.pgadmin.org/download/).

2. **Create a Database:**
   - Open pgAdmin and connect to your PostgreSQL server.
   - Create a new database for the project.

3. **Import SQL Source File:**
   - Download the SQL source file from the repository:
     - **[Download SQL Source File](/Resources/Social.sql)**
   - In pgAdmin, connect to your PostgreSQL server, and select the database you've created.
   - Open the Query Tool and load the SQL source file. Execute the script to set up your database schema and initial data.

4. **Configure Database Connection:**
   - Open the `db.js` file located in the `Projects` folder.
   - Update the file with your database details including `database name`, `username`, and `password`.

### Project Setup

1. **Download the Project:**
   - Clone or download the project repository to your local machine.

2. **Open the Project:**
   - Open the project directory in Visual Studio Code.

### Running the Client

1. **Navigate to the Client Directory:**
   - Open the terminal in Visual Studio Code.
   - Navigate to the `Project2` directory:
     ```bash
     cd Project2
     ```

2. **Install Dependencies:**
   - In the terminal, run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```

3. **Run the Client:**
   - To start the client development server, run:
     ```bash
     npm start
     ```

### Running the API

1. **Navigate to the API Directory:**
   - Open the terminal in Visual Studio Code.
   - Navigate to the `Projects` directory:
     ```bash
     cd Projects
     ```

2. **Install Dependencies:**
   - In the terminal, run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```

3. **Run the API:**
   - To start the API server, run:
     ```bash
     npm start
     ```

## Screenshots

Here are some screenshots illustrating the user interface and various features of the application:

### Screenshots 
![Home Page](/Resources/Screenshot1.jpg)

![User Profile](/Resources/Screenshot(170).jpg)

![User Profile](/Resources/Screenshot(171).jpg)

![User Profile](/Resources/Screenshot(172).jpg)

![User Profile](/Resources/Screenshot(173).jpg)

![User Profile](/Resources/Screenshot(174).jpg)

![User Profile](/Resources/Screenshot(175).jpg)

![User Profile](/Resources/Screenshot(176).jpg)

![User Profile](/Resources/Screenshot(177).jpg)

![User Profile](/Resources/Screenshot(178).jpg)

![User Profile](/Resources/Screenshot(179).jpg)

![User Profile](/Resources/Screenshot(180).jpg)

![User Profile](/Resources/Screenshot(181).jpg)

![User Profile](/Resources/Screenshot(182).jpg)

![User Profile](/Resources/Screenshot(183).jpg)

![User Profile](/Resources/Screenshot(184).jpg)

![User Profile](/Resources/Screenshot(185).jpg)

![User Profile](/Resources/Screenshot(186).jpg)

![User Profile](/Resources/Screenshot(187).jpg)




## Contributing

Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## Contact

For any questions or feedback, please reach out to the project maintainers.

---

Happy coding! 🚀
