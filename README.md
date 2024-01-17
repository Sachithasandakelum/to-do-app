# To-Do App


## Introduction - Back-End API

Welcome to the To-Do App! This application provides a comprehensive solution for managing tasks, allowing users to organize their to-do lists efficiently. The project consists of a back-end API built with Spring Web MVC and a front-end application developed using Angular.


### Technologies Used -  Back-End API

- **Spring Web MVC:** The back-end API is developed using the Spring framework, specifically the Spring Web MVC module. It provides a robust foundation for building web applications.

- **PostgreSQL Database:** PostgreSQL is employed as the relational database management system (RDBMS) for storing task data. The application uses the `postgresql` driver and HikariCP for efficient database connection pooling.

- **Hibernate Validator:** The Hibernate Validator is used for bean validation in the application, ensuring that the data sent to the API meets specified constraints.

- **HikariCP:** HikariCP is used for database connection pooling, optimizing the performance and efficiency of database connections.


### Handling Tasks

The API offers endpoints for creating, updating, and deleting tasks. Tasks are stored in a PostgreSQL database, and interactions with the API are formatted in JSON for ease of use.



## Introduction - Front End

Welcome to the front-end of the To-Do App! This Angular front-end application provides a user-friendly interface for interacting with the back-end API of the To-Do App. Users can create, update, delete tasks, and visualize their to-do list through this intuitive and responsive application.


## Technologies Used for front end

- **Angular:** The front-end is built using Angular, a powerful and widely used web application framework developed by Google. Angular provides a structured and modular approach to building dynamic web applications.

- **Firebase:** Firebase is utilized for authentication in the application. The authentication services from Firebase help secure the application and manage user access.

- **HttpClient:** Angular's HttpClientModule is used for making HTTP requests to the back-end API. It simplifies the process of fetching and sending data to the server.

- **ngx-toastr:** ngx-toastr is used for displaying notifications in the application. It provides a clean and customizable way to show success or error messages to users.

- **Angular Interceptors:** Interceptors are used to handle HTTP errors globally, enhancing error handling throughout the application.

- **Forms Module:** Angular's FormsModule is employed for handling forms in the application. It facilitates two-way data binding and form validation.

- **Angular Animations:** BrowserAnimationsModule is utilized for adding smooth animations to the application, enhancing the overall user experience.

## User Interface

The front-end provides a clean and interactive user interface, allowing users to manage their tasks efficiently. The application includes features such as task creation, updating task status, and deleting tasks. The UI is designed to be responsive and visually appealing.


## License

This project is licensed under the [MIT License](LICENSE.txt).

