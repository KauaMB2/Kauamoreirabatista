import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Comments } from "./components/Comments";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills/>
      <Projects />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
