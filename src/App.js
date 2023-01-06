import React from "react";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="nav">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
          </div>

          <div id="header">
            <h3>Hi, my name is</h3>
            <h1>Ana Carolina Bortolini de Magalhães</h1>
            <h4>
              I'm a Bachelor of Architecture and Urbanism, currently studying
              Web Development at Trybe
            </h4>
          </div>

          <div id="about">
            <h1>Skills</h1>
            <div>
              <h3>Currently Learning</h3>
              <ul>
                <li>TypeScript</li>
              </ul>
              <h3>My Skills</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>React</li>
                <li>Redux</li>
                <li>Docker</li>
                <li>MySQL</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>

          <div id="project">
            <h1>Projects</h1>
          </div>

          <div id="contact">
            <h1>Contact me</h1>
            <form
              action="mailto:info@example.com"
              method="get"
              enctype="text/plain"
              className="forms"
            >
              <div>
                <label for="email">
                  Email:
                  <input type="text" name="email" id="email" />
                </label>
              </div>
              <div>
                <input type="submit" name="submit" value="Send" />
              </div>
            </form>
          </div>

          <div id="footer">
            <h3>Siga me</h3>
            <a
              className="linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/ana-carolina-bortolini-de-magalh%C3%A3es-51504a171/"
              rel="noreferrer"
            >
              linkedin
            </a>
            <a
              className="github"
              target="_blank"
              href="https://github.com/aninhabort"
              rel="noreferrer"
            >
              Github
            </a>

            <p>
              Copyright ©2023 All rights reserved | This was made by{" "}
              <strong>Ana Carolina</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
