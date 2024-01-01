# Semester Project 
This is Our ICT Semester Project. It is an Book Store Web-Application Built on MEAN Stack.

## Table OF Content

- [Project Scope](#ProjectScope)
- [Demo](#demo)
- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Team](#team)


## Project Scope
- Responsive Web-Application
- Database for Easy Product Management
- Server To Handle Http Req/Res
- Services that Perform Data Manipulation

## Demo 

## Prerequisite

Before getting started with the project, ensure you have the following prerequisites:

- Node.js: Make sure Node.js is installed on your system.
- Angular CLI: Install the Angular CLI globally using the command `npm install -g @angular/cli`.
- <sub><sup><span style = "color:red">  **DISCLAIMER**  </span></sup></sub> Server is Necessary for the use of the application Since The database is stored Locally.
  Not Having The Database will Cuase the products to not display.

These prerequisites are essential for a smooth setup and development experience.

## Installation

1.Clone the repository:
  ```bash
  git clone https://github.com/Livox91/semsProj.git
  ```

2.Install Depedencies:
  ```bash
  cd semsProj
  npm install
  ```

3.Run Server:
 ```bash
ng serve
 ```

 Visit `http://localhost:4200/` in your browser.

## Usage

- Visit The HomePage To Browse Products.
- Click on the Product and you'll be redirected to a Product Page.
- Click the About Button on The Header or The at the Footer of the App to Redirect To the About Page.

## Folder Structure

The project directory is structured to enhance clarity and maintainability, following Angular best practices.

- **src:** Contains all the files related to the main application.

- **app:** Serves as the main component of the Angular application, housing child components and managing the overall structure.

- **core:** Contains essential components crucial for the application's functionality. This includes a component responsible for storing product data fetched from the server.

- **features:** Contains independent components such as `Main`, `About`, and `Products`. These components operate autonomously, contributing to the modularity and scalability of the application.

- **shared:** Includes components shared across the application, promoting consistency in design and user experience. Notable components in this directory are `Header` and `Footer`, as they are fundamental elements present on every page of the application.

## Team

- **231572-ZakiHaider**
- **231587-QasimMaajid**


