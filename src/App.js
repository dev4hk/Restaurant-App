import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <>
      <Nav />
      <DataProvider>
        <Main />
      </DataProvider>
      <Footer />
    </>
  );
}

export default App;
