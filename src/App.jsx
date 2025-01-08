import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRouter";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/dashboard";
import Balance from "./pages/balance";
import Expenses from "./pages/expenses";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import React from "react";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    if (!isLoggedIn) return <Navigate to="/login" />;
    return children;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot",
      element: <ForgotPassword />,
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <Balance />
        </RequireAuth>
      ),
    },
    {
      path: "/expenses",
      element: (
        <RequireAuth>
          <Expenses />
        </RequireAuth>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
