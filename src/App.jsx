// import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/js/MyLayout/ErrorPage/ErrorPage";
import MyLayout from "./components/js/MyLayout/MyLayout";
import NoPage from "./redux-form-components/NoPage/NoPage";
import UserForm from "./redux-form-components/UserForm/UserForm";
import * as React from "react";
import LoginForm from "./typeScript/LoginForm/LoginForm";
import Contact from "./components/js/Dummy/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BasicExampleOfUseContext from "./react-methods/hooks/useContext/BasicExampleOfUseContext";
import ContextModulePattern from "./DesignPatterns/ContextModulePattern/Components/ContextModulePattern";
import UseEffectExercise1 from "./react-methods/hooks/useEffect/UseEffectExercise1";
import UseEffectExercise2 from "./react-methods/hooks/useEffect/UseEffectExercise2";
import UseEffectExercise3 from "./react-methods/hooks/useEffect/UseEffectExercise3";
import UseEffectExercise4 from "./react-methods/hooks/useEffect/UseEffectExercise4";
import ListOfComponent from "./ListOfComponent";
import Posts from "./react-methods/hooks/useEffect/Posts";

const listOfComponents = [
  {
    path: "posts",
    element: <Posts />,
  },
  {
    path: "list/BasicExampleOfUseContext",
    element: <BasicExampleOfUseContext />,
  },
  {
    path: "list/ContextModulePattern",
    element: <ContextModulePattern />,
  },
  {
    path: "list/UseEffectExercise1",
    element: <UseEffectExercise1 />,
  },
  {
    path: "UseEffectExercise2",
    element: <UseEffectExercise2 />,
  },
  {
    path: "list/UseEffectExercise3",
    element: <UseEffectExercise3 />,
  },
  {
    path: "list/UseEffectExercise4",
    element: <UseEffectExercise4 />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "list", element: <ListOfComponent list={listOfComponents} /> },
      ...listOfComponents,
    ],
  },
]);

const App = () => {
  return (
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
  );
};

export default App;
