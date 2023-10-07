import "./App.css";
import MyComponent1 from "./component/component1";
import Typewriter from "react-simple-typewriter";
import Text1 from "./component/Text";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import MyComponent2 from "./component/component2";

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
              src="https://scontent.fkhi24-1.fna.fbcdn.net/v/t39.30808-6/294284979_1682968532065314_3008928503889052420_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeH8LHxonjr8KqHfY4rpj9mWy1zCjzQaGdLLXMKPNBoZ0iSKM7hpvhi2iYOqVrhTZyxUFx_FVmPbUJ7drHmbO-k5&_nc_ohc=bNyMW064V4YAX_R9YLp&_nc_ht=scontent.fkhi24-1.fna&oh=00_AfB6mnEiWGN2tV7gCYnoes1egGpMLklZ2RUX9IuFWw_hXg&oe=65208FFF"
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </section>
        <hr className="divider" />
        <Slider />
        <center>
          <MyComponent1/>
        </center>
        <center>
          <MyComponent2/>
        </center>
        <center>
          <MyComponent1/>
        </center>
      </div>
    </>
  );
}

export default App;
