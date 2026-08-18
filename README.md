# Todo API

A simple RESTful Todo API built with Node.js and Express, containerized with Docker.

## Project Overview

This project is a small CRUD (Create, Read, Update, Delete) API that lets you manage a list of todo items. It stores data in memory (no database), and supports creating, listing, updating, and deleting todos through standard HTTP endpoints. The app is fully containerized using Docker for consistent, portable deployment.

## Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for building the REST API
- **Docker** – Containerization
- **Docker Hub** – Image hosting/registry

## Project Structure

todo-api/
├── index.js           # Main application file (server + routes)
├── package.json        # Project metadata and dependencies
├── package-lock.json    # Locked dependency versions
├── Dockerfile          # Instructions to build the Docker image
├── .dockerignore        # Files excluded from the Docker build context
├── .gitignore          # Files excluded from Git tracking
└── README.md           # This file

## Prerequisites

- Node.js (v18 or higher) – only needed to run the app locally without Docker
- Docker Desktop – needed to build/run the containerized version

## How to Run the Project Locally (without Docker)

1. Clone the repository:
   git clone https://github.com/youssefahmed16009528/todo-api.git
   cd todo-api
2. Install dependencies:
   npm install
3. Start the server:
   node index.js
4. The API will be available at http://localhost:3000

## How to Build the Docker Image

From the project root (where the Dockerfile is located), run:
docker build -t todo-api .

## How to Run the Docker Container

docker run -d -p 3000:3000 --name todo-container todo-api

The API will then be available at http://localhost:3000.

To stop and remove the container:
docker stop todo-container
docker rm todo-container

## Docker Hub Image

The image is publicly available at:
https://hub.docker.com/r/youssef0ahmed/todo-api

Pull it directly with:
docker pull youssef0ahmed/todo-api:latest

## API Endpoints

| Method | Endpoint       | Description             |
|--------|----------------|--------------------------|
| GET    | /todos         | Get all todos            |
| GET    | /todos/:id     | Get a single todo by ID  |
| POST   | /todos         | Create a new todo        |
| PUT    | /todos/:id     | Update an existing todo  |
| DELETE | /todos/:id     | Delete a todo            |

### Example: Create a Todo

curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Docker"}'