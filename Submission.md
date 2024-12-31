# Submission

## Tech Stack
- **Frontend Framework**: React
- **State Management**: React Context API
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## Design Choices
- **Component-Based Architecture**: The application is divided into reusable components such as `Navbar`, `Dashboard`, `TableView`, `KanbanView`, `CreateModal`, and `ViewModal`.
- **Context API for State Management**: Used to manage the state of deals across the application, providing a centralized state management solution.
- **Tailwind CSS for Styling**: Chosen for its utility-first approach, which allows for rapid and consistent styling across the application.
- **Drag-and-Drop Functionality**: Implemented in the `KanbanView` component to allow users to move deals between different stages.

## Known Limitations or Areas for Improvement
- **Error Handling**: Currently, there is minimal error handling. Adding more robust error handling and user feedback would improve the user experience.


- **Performance Optimization**: As the number of deals grows, performance optimizations may be required, especially in the `KanbanView` and `TableView` components.

- **Testing**: Unit tests are not currently included. Adding tests would help ensure the reliability of the codebase.

## Additional Features Implemented
- **Action buttons for each deal created**: Implemented the action buttons for viewing deal details in a modal, deleting deals, and editing deal details.