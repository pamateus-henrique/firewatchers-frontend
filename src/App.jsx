import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Login,
  Register,
  HomeLayout,
  Error,
  Landing,
  Dashboard,
  Home,
  DeclareIncident,
  IncidentDetails,
  EditIncident,
  Incidents,
} from "./pages";

import { action as LoginAction } from "./pages/Login";
import { action as RegisterAction } from "./pages/Register";
import { action as CreateIncidentAction } from "./pages/DeclareIncident";

import { loader as IncidentsLoader } from "./pages/Home";

import { loader as EditIncidentLoader } from "./pages/EditIncident";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: RegisterAction,
      },
      {
        path: "login",
        element: <Login />,
        action: LoginAction,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { index: true, element: <Home />, loader: IncidentsLoader },
          {
            path: "create-incident",
            element: <DeclareIncident />,
            action: CreateIncidentAction,
          },
          {
            path: "incidents",
            element: <Incidents />,
          },
          {
            path: "incidents/:id",
            element: <IncidentDetails />,
          },
          {
            path: "edit-incident/:id",
            element: <EditIncident />,
            loader: EditIncidentLoader,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
