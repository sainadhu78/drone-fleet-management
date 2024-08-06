# Drone Fleet Management

## Project Overview

This project is an Angular application designed for managing a fleet of drones. It includes features for viewing drone details, managing maintenance, and more.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Required for building and running the Angular application.
- **Angular CLI**: Used for Angular-specific commands.
- **Docker**: To containerize and deploy the application.
- **Docker Compose**: For managing multi-container Docker applications.

## Installation and Setup

### Clone the Repository

**1.Clone the repository to your local machine:**
   
   `git clone  https://github.com/sainadhu78/drone-fleet-management.git`
   
   `cd drone-fleet-management`

**2.Install Dependencies**

  `npm install`

**3.Build the Angular Application**

  `npm run build`

**4.Running the Application**

  **Using Docker**  
  
  1.Build and Run Docker Containers
  
    `docker-compose up -d --build`
    
  2.Access the Application:
  Open your browser and navigate to `http://localhost:8080`

  **Without Docker**
  
  1.Serve the Application Locally
  
    `ng serve`
    `npx json-server json-server/users.json`
    
  2.Open Your Browser:
  Navigate to `http://localhost:4200` to view the application.
  

**5.Docker Setup**

  Ensure Docker and Docker Compose are installed on your system.
  
  The provided docker-compose.yml file sets up the Angular application and a mock JSON server for data handling.

**Building and Running with Docker**

  1.Build and Start Containers
  
    `docker-compose up -d --build`
    
  2.Stop Containers
  
    `docker-compose down`

    

## Further help

For any questions or issues, please contact:


Name: Sainadh Meka

Email: m.sainadh2001@gmail.com

GitHub: sainadhu78


# drone-fleet-management
Dashboard for the maintenance of drones.

