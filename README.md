# Instagram CRUD Operations Project

## Overview

This project is a simple CRUD (Create, Read, Update, Delete) application for managing Instagram-like user profiles. Built with Node.js and Express, the application allows users to create, view, edit, and delete profiles. The views are rendered using EJS templates.

## Project Structure

```
.
├── index.js
├── node_modules/
├── package.json
├── package-lock.json
├── public/
│   ├── CSS/
│   └── JS/
└── views/
    ├── createAcc.ejs
    ├── Edit-Post.ejs
    ├── error.ejs
    ├── users.ejs
    └── visit.ejs
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunaldevelopers/Instagram-CRUD.git
   cd Instagram-CRUD
   ```

2. **Install dependencies**
   ```bash
   npm init && npm install express && npm install ejs && npm install method-override && npm install uuid
   ```

## Usage

1. **Start the server**
   ```bash
   node index.js
   ```
   The server will start on `http://localhost:8080`.

2. **Access the application**
   Open your browser and navigate to `http://localhost:8080/users` to see the list of users.

## Routes

- **GET `/users`**
  - Renders the list of all user profiles.
  
- **GET `/create`**
  - Renders the form to create a new user profile.

- **POST `/create`**
  - Creates a new user profile and redirects to the users list.

- **GET `/visit/:id`**
  - Displays the details of a specific user profile.

- **GET `/users/edit/:id`**
  - Renders the form to edit an existing user profile.

- **PATCH `/users/edit/:id`**
  - Updates the user profile with new information and redirects to the users list.

- **DELETE `/users/:id`**
  - Deletes a user profile and redirects to the users list.

- **Wildcard route `/*`**
  - Renders an error page for undefined routes.

## Views

- **createAcc.ejs**
  - Form to create a new user profile.

- **Edit-Post.ejs**
  - Form to edit an existing user profile.

- **error.ejs**
  - Error page for undefined routes or operations.

- **users.ejs**
  - List of all user profiles with options to visit, edit, or delete each profile.

- **visit.ejs**
  - Detailed view of a specific user profile.

## Dependencies

- `express`
- `ejs`
- `path`
- `uuid`
- `method-override`

## Contact

**Developer:** Kunal Kumar  
**Email:** globes24media@gmail.com

## License

This project is open-source and available under the [MIT License](LICENSE).