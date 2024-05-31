# MERN Todo App

The MERN Todo App is a full-stack web application that allows users to efficiently manage their todos. It provides various features such as user authentication, signup, login, logout, profile management, password change, password reset, and CRUD operations for todos. The app consists of three sections: All Todos, Completed Todos, and Pending Todos, enabling users to organize their tasks effectively.


## Features

- **User Authentication:** Users can signup, login, and logout from the application.
- **Profile Management:** Users can update their profile information, including name and email.
- **Password Management:** Users can change their password and request a password reset if forgotten.
- **Todo Management:** Users can add, remove, and update their todos.
- **Todo Status:** Users can mark todos as completed or pending.
- **Todo Sections:** The app categorizes todos into All Todos, Completed Todos, and Pending Todos sections.
- **Extensibility:** The app is designed with extensibility in mind, making it easy to add new features in the future.
- **Page Not Found:** A custom 404 page is displayed when users try to access non-existent pages.

## Technologies Used

The MERN Todo App is built using the following technologies:

- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Password Encryption:** bcrypt
- **Other Dependencies:** cookie-parser, password-validator, cors

## API Endpoints

The app exposes the following API endpoints:

- `GET /check-auth`: Checks if the user is authenticated.
- `POST /signup`: Handles user signup.
- `POST /login`: Handles user login.
- `GET /logout`: Handles user logout.
- `GET /user`: Retrieves user information.
- `PUT /user/update`: Updates user profile.
- `DELETE /user/delete`: Deletes user account.
- `POST /addtodo`: Adds a new todo.
- `GET /todos`: Retrieves all todos.
- `GET /completedTodos`: Retrieves completed todos.
- `GET /pendingTodos`: Retrieves pending todos.
- `PUT /todo/updateStatus`: Updates todo status (completed or pending).
- `PUT /todo/update`: Updates todo.
- `DELETE /todo/delete`: Deletes todo.

## Usage

Follow these steps to run the MERN Todo App on your local machine:


1. Start the backend server:

   ```bash
   cd backend
   npm install
   # Add .env file (PORT=3000
   MONGO_URI=mongodb://localhost:27017/todo-app
   CLIENT_URL=http://localhost:5173
   SECRET=SECRET)
   npm start
   ```

2. Start the frontend server:

   ```bash
   cd client
   npm install
   # Add .env file (VITE_REACT_APP_API_KEY=http://localhost:3000)
   npm start
   ```

3. Access the app in your web browser:

   ```bash
   http://localhost:5173
   ```



