import React from "react";

export default function MyComponent1() {
  const imageUrl = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
  const flutter =
    "https://raw.githubusercontent.com/dnfield/flutter_svg/7d374d7107561cbd906d7c0ca26fef02cc01e7c8/example/assets/flutter_logo.svg?sanitize=true";
  const js =
    "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png";
  const python =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png";
  const react =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png";
  const Bootstrap =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png";
  const html =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png";
  const Css =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png";
    const wordpress =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1200px-Firebase_Logo.svg.png";

  return (
    <div>
      <div className="hell">
        <div className="circle">
          {/* <img
            src={imageUrl}
            alt="Profile"
            className="profile-pic"
          /> */}
        </div>
        <div className="text">
          <h1>Skills & Experiences</h1>
        </div>
        <div className="text">
          <p>
            With a robust skill set and extensive experience in my field, I
            consistently deliver exceptional results, demonstrating a high level
            of professionalism and expertise.
          </p>
        </div>
        <div className="center">
          <div className="circl">
            <img src={flutter} class="d-block w-100" alt="..." />{" "}
          </div>
          <div className="circl">
            <img src={react} class="d-block w-100" alt="..." />{" "}
          </div>
          <div className="circl">
            <img src={js} class="d-block w-100" alt="..." />{" "}
          </div>
          <div className="circl">
            <img src={python} class="d-block w-100" alt="..." />{" "}
          </div>
        </div>
        <div className="center">
          <div className="circl">
            <img src={html} class="d-block w-100" alt="..." />{" "}
          </div>
          <div className="circl">
            <img src={Css} class="d-block w-100" alt="..." />{" "}
          </div>
          <div className="circl">
            <img src={Bootstrap} class="d-block w-100" alt="..." />{" "}
          </div>
          <div className="circl">
            <img src={wordpress} class="d-block w-100" height={40} width={40} alt="..." />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
