import { Route, Routes } from "react-router-dom";
import SignUp from "./components/ui/pages/SignUp";
import HomePage from "./components/ui/pages/HomePage";
import Login from "./components/ui/pages/Login";
import Transaction from "./components/ui/pages/Transaction";
import NotFound from "./components/ui/pages/NotFound";
import Header from "./components/ui/Header";

function App() {
  const authUser = true;
  return (
    <>
      {authUser && <Header />}
      {/* {authUser && <Header />} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/transaction/:id" element={<Transaction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
