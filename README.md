# FastAPI + React.js FullStack Starter Project

This project provides a starter template for developing full-stack web applications using FastAPI for the backend and React.js for the frontend. It includes Docker configurations for containerization and orchestration of the application components.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to simplify the setup process for building full-stack web applications by providing a pre-configured environment with Docker for containerizing the backend, frontend, and database components. It uses FastAPI, a modern, fast (high-performance), web framework for building APIs with Python, and React.js, a JavaScript library for building user interfaces.

## Features

- **FastAPI Backend**: FastAPI provides a highly performant and easy-to-use framework for building APIs with Python.
- **React.js Frontend**: React.js allows for efficient and modular development of interactive user interfaces.
- **PostgreSQL Database**: PostgreSQL is used as the database management system, providing reliability and robustness for data storage.
- **Nginx Reverse Proxy**: Nginx serves as a reverse proxy to route requests to the appropriate backend or frontend service.
- **pgAdmin for Database Management**: pgAdmin is included for managing the PostgreSQL database through a web interface.

## Installation

To set up and run the project locally, follow these steps:

```bash
git clone <repository_url>
cd <project_directory>
```

2. Install Docker and Docker Compose if not already installed. Refer to the official Docker documentation for installation instructions: [Docker](https://docs.docker.com/get-docker/)

3. Update environment variables (if necessary):
   
   - Update database credentials and other configurations in the environments variables of container.

4. Build and start the Docker containers:

   ```bash
   docker-compose up --build
   ```

5. Access the application at:
   
   - Frontend: [http://localhost:8000](http://localhost:8000)
   - pgAdmin: [http://localhost:8888](http://localhost:8888)

## Usage

Once the containers are up and running, you can start developing your application:

- **Backend Development**:
  - Place your FastAPI application code in the `backend` directory.
  - Any changes made to the backend code will automatically trigger the container to rebuild and restart.

- **Frontend Development**:
  - Place your React.js application code in the `frontend` directory.
  - Any changes made to the frontend code will automatically trigger the container to rebuild and restart.

- **Database Management**:
  - Access pgAdmin at [http://localhost:8888](http://localhost:8888) to manage your PostgreSQL database.
  - Use the provided credentials (`PGADMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD`) to log in.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
