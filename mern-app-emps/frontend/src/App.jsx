// import routing tools and components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import CreateEmp from "./components/CreateEmp";
import ListOfEmps from "./components/ListOfEmps";
import Employee from "./components/Employee";
import EditEmployee from "./components/EditEmployee";

// main app component
function App() {
  // define app routes
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "create-emp", element: <CreateEmp /> },
        { path: "list", element: <ListOfEmps /> },
        { path: "employee", element: <Employee /> },
        {path:"edit-employee", element:<EditEmployee />}
      ],
    },
  ]);

  // provide router to app
  return <RouterProvider router={routerObj} />;
}

export default App;
