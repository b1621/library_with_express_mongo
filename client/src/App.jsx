import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <ToastContainer />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<Signup />} />
          {/*  <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
