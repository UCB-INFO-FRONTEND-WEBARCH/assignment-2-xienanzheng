# React Task Manager

## Overview

This is a React application for managing tasks, converted from a static HTML/CSS version. It demonstrates core React concepts including component-based architecture, state management with `useState`, props for data flow, event handling, and controlled components.

## Features

### Core Features

-   **Component Structure**: Organized into `App`, `TaskList`, `TaskItem`, `TaskForm`, and `TaskCounter` components.
-   **Add Task**: Users can add new tasks via a form input.
-   **Complete Task**: Tasks can be marked as complete/incomplete by clicking a checkbox.
-   **Delete Task**: Tasks can be removed from the list.
-   **Task Counter**: Displays the total number of tasks, completed tasks, and active tasks.

### Enhanced Feature: Task Filtering

-   **Filter Buttons**: Displays "All", "Active", and "Completed" filter buttons.
-   **Dynamic Filtering**: Tasks are filtered based on the selected completion status.
-   **Active Filter Highlight**: The currently active filter button is visually highlighted.
-   **Counter Updates**: The task counter reflects the tasks visible in the filtered view.

## Technical Details

-   **React Fundamentals**: Utilizes `useState` for state management, props for communication between components, and event handlers for user interactions.
-   **Data Structure**: Each task is an object with `id`, `text`, and `completed` properties.
-   **Styling**: Basic styling is applied using `App.css` and `index.css` to provide a clean and functional user interface.

## Getting Started

To run this project locally:

1.  **Clone the repository** (if applicable, otherwise navigate to the project directory).
2.  **Navigate to the project directory**:
    ```bash
    cd task-manager-react
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    ```

    The application will be running at `http://localhost:5173`.

## Project Structure

```
task-manager-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── TaskList.jsx
        ├── TaskItem.jsx
        ├── TaskForm.jsx
        └── TaskCounter.jsx
```

## Reflection: React vs. Vanilla JavaScript

Converting the task manager from vanilla JavaScript to React highlighted several key advantages of a component-based framework. In vanilla JavaScript, managing the DOM directly for every change (adding, deleting, updating tasks) can quickly become complex and error-prone, especially as the application scales. React's declarative approach, where you describe the desired UI state and let React handle the DOM updates, significantly simplifies development. The `useState` hook, for instance, provides a clear and concise way to manage application state, automatically re-rendering components when state changes, which eliminates much of the manual DOM manipulation required in vanilla JS.

Furthermore, React's component-based architecture promotes reusability and maintainability. Each part of the UI, like `TaskForm` or `TaskItem`, is encapsulated, making it easier to understand, test, and update independently. Passing data and functions via props establishes a clear data flow, reducing the likelihood of unexpected side effects. While vanilla JavaScript offers ultimate control and a deeper understanding of browser mechanics, React provides a powerful abstraction that streamlines the development of interactive user interfaces, making it a more efficient choice for complex applications.