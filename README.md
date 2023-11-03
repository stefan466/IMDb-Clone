# Full Stack Movie Database Application

This project was developed as part of the "Script Languages" course at the Computer Faculty. It combines a backend built in Node.js and a frontend developed in Vue.js. While the design of the frontend might not be the most aesthetic, it is highly functional and seamlessly integrates with the backend. The backend handles user authentication and authorization using JSON Web Tokens (JWT), and validation is implemented  both on the server-side and the client-side for data integrity and security.

## Backend Features

- **User Authentication**: The backend securely manages user registration and login, ensuring user data privacy.

- **User Authorization**: Based on roles and permissions, users can perform specific actions, securing the data.

- **Movie Management**: The backend handles movie creation, modification, and deletion, including details like title, director, release date, and genre.

- **Movie Search**: Backend provides search functionality, enabling users to find movies based on various criteria.

- **Movie Rating**: Users can rate and review movies, contributing to the movie database.

## Frontend Features

- **User Authentication**: The frontend handles user registration and login, interfacing with the backend for secure authentication.

- **User Authorization**: Based on their roles and permissions, users can perform specific actions, ensuring data security.

- **Movie Management**: Users can add, edit, and remove movies, providing details such as title, director, release date, and genre.

- **Movie Search**: The frontend enables users to search for movies using various criteria like title, genre, or release date.

- **Movie Rating**: Users can rate and review movies, contributing to the community.

- **Data Validation**: We've implemented robust validation on the client-side to ensure data accuracy and prevent vulnerabilities.

## Getting Started

### Backend (Node.js)

1. Clone the backend repository or download the code to your local environment.

2. Install the necessary dependencies using `npm install`.

3. Set up a MongoDB database and configure the database connection in the `config.js` file.

4. Start the server using `npm start`.

5. The backend will be accessible at [http://localhost:3000](http://localhost:3000).

6. The frontend will communicate with the backend through API endpoints, such as `/movies`, `/users`, and more.

### Frontend (Vue.js)

1. Clone the frontend repository or download the code to your local environment.

2. Install the necessary dependencies using `npm install`.

3. Configure the frontend to connect to your backend by specifying the API endpoint in the code.

4. Start the Vue.js development server using `npm run serve`.

5. The frontend will be accessible at [http://localhost:8080](http://localhost:8080).

6. Users can interact with the frontend to access the features and it communicates with the backend for data storage and retrieval.

