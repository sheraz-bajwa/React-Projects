import './App.css';
import MyComponent1 from './component/component1';
import Text1 from './component/Text';

function App() {
  return (
    <>
      <div className="main">
        {/* <Navbar /> */}

        <section className="firstSection">
          <div className="left">
            <Text1/>
          </div>
          <div className="right">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              //className="profile-pic"
            />
          </div>
        </section>
        <center>
          <MyComponent1/></center>
        
      </div>
    </>
  );
}

export default App;
