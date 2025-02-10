import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./components/ui/pages/SignUp";
import HomePage from "./components/ui/pages/HomePage";
import Login from "./components/ui/pages/Login";
import Transaction from "./components/ui/pages/Transaction";
import NotFound from "./components/ui/pages/NotFound";
import Header from "./components/ui/Header";
import { useQuery } from "@apollo/client";
import { GET_AUTH_USER } from "./graphql/queries/user.query.js";
import { Toaster } from "react-hot-toast";

function App() {
  const { loading, error, data } = useQuery(GET_AUTH_USER);
  console.log("loading", loading);
  console.log("Authenticated user", data);
  console.log("error", error);
  return (
    <>
      {data?.authUser && <Header />}
      {/* {authUser && <Header />} */}
      <Routes>
        <Route
          path="/"
          element={data.authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={data.authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={data.authUser ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/transaction/:id"
          element={data.authUser ? <Transaction /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
