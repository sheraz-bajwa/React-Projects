import "./App.css";
import MyComponent1 from "./component/component1";
import Typewriter from "react-simple-typewriter";
import Text1 from "./component/Text";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import MyComponent2 from "./component/component2";
import myImage from './assets/profile.png';
import Skills from "./component/Skill";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <div className="main">
        <Navbar />

        <section className="firstSection">
          <div className="left">
            <Text1 />
          </div>
          <div className="right">
            <img
              src={myImage}
              alt="Profile"
              // className="profile-pic"
            />
          </div>
        </section>
        <hr className="divider" />
        <center>
          <h1 className="Heading"> 
            Projects
          </h1>
        </center>
        <Slider />
        <center>
          <MyComponent1/>
        </center>
        <center><h1 className="Heading"> 
            Skills
          </h1></center>
        <Skills/>
        <center>
          <MyComponent1/>
        </center>
      </div>
    <Footer/>
    </>
  );
}

export default App;
