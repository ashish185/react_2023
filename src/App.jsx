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
import Circle from './d3/Lesson1/Circle';
import ConnectedLine from "./d3/Lesson2/ConnectedLine";
import BarChartMain from "./d3/Lesson3/chatGpt/BarChartMain";
import Lesson3BarChart from "./d3/Lesson3/Lesson3BarChart";
import BarChartInteractive from "./d3/Lesson4_BasicInteractivity/BarChartInteractive";
import BarChartResponsive from "./d3/Lesson5_ResposiveBarChart/BarChartResponsive";
import BarChartResponsiveMain from "./d3/Lesson5_ResposiveBarChart/BarChartResponsiveMain";

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
  {
    path: "list/Circle",
    element: <Circle />,
  },
  {
    path: "list/ConnectedLine",
    element: <ConnectedLine />,
  },
  {
    path: "list/BarChartMain",
    element: <BarChartMain />,
  },
  {
    path: "list/Lesson3BarChart",
    element: <Lesson3BarChart />,
  },
  {
    path: "list/BarChartInteractive",
    element: <BarChartInteractive />,
  },
  {
    path: "list/BarChartResponsiveMain",
    element: <BarChartResponsiveMain />,
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
