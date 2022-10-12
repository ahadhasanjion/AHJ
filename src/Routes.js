import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import Blog from "./Components/Blog/Blog";
import Statistic from "./Components/Statistic/Statistic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      {
        path: "/",

        element: <Home></Home>,
      },

      {
        path: "Home",

        element: <Home></Home>,
      },
      {
        path: "statistics",
        element: <Statistic></Statistic>,
      },
      
      {
        path: "Blog",

        element: <Blog></Blog>,
      },
      {
        path: "quiz/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
    ],
  },
]);
export default router;
