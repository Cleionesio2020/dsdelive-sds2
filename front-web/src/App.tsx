
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import '
import Router from "./routes"
import Footer from "./footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router/>
      <ToastContainer/>
      <Footer/>

    </div>
  );
}

export default App;
