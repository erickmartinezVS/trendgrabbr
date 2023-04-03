import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Header } from "./components/header";
import { Footer } from "./components/footer";

import { Home } from "./routes/home";
import { Contact } from "./routes/contact";
import { Results } from "./routes/results";
import { Detail } from "./routes/detail";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const BasicLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BasicLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/results",
          element: <Results />,
        },
        {
          path: "/detail",
          element: <Detail />,
        },
      ],
    },
  ]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF9933",
        contrastText: "white",
      },
      secondary: {
        main: "#3F5469",
        contrastText: "white",
      },
      info: {
        main: "#0D9488",
        contrastText: "white",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
