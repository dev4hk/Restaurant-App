import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import About from "./routes/About";
import Menu from "./routes/Menu";
import OnlineOrder from "./routes/OnlineOrder";
import Login from "./routes/Login";
import Footer from "./components/Footer";
import BookingPage from "./routes/BookingPage";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
