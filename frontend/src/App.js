import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <h1>BODI</h1>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
