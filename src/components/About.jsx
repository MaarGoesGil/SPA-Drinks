import React from "react";
import { Alert } from "react-bootstrap";

const About = () => { 
  const style = {
    color:'white',
  }
  return (
    <div style={{ height: "100vh" }}>
      <div
        className="container"
        style={{
          backdropFilter: "blur(10px)",
          border: "2px solid white",
          borderRadius: "5px",
        }}
      >
        <div className="row">
          <div className="col-md-12">
            <h1 style={style}>About</h1>
            <p style={style}>
              This is a SPA (single page application). It is a single page
              application that allows you to search for drinks and see all the
              info.
              <br />
              <br />
              It uses the following technologies:
              <br />
            </p>
            <ul>
              <li>
                <Alert variant="light">
                  <Alert.Link
                    style={{ textDecoration: "none", background: "none" }}
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React
                  </Alert.Link>{" "}
                  → The javascript framework used.
                </Alert>
              </li>
              <li>
                <Alert variant="light">
                  <Alert.Link
                    style={{ textDecoration: "none", background: "none" }}
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redux
                  </Alert.Link>{" "}
                  → A javascript library for managing application state.
                </Alert>
              </li>
              <li>
                <Alert variant="light">
                  <Alert.Link
                    style={{ textDecoration: "none", background: "none" }}
                    href="https://www.npmjs.com/package/react-router-dom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Router
                  </Alert.Link>{" "}
                  → A javascript library for routing.
                </Alert>
              </li>
              <li>
                <Alert variant="light">
                  <Alert.Link
                    style={{ textDecoration: "none", background: "none" }}
                    href="https://react-icons.github.io/react-icons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Icon
                  </Alert.Link>{" "}
                  → A javascript library for creating icons.
                </Alert>
              </li>
              <li>
                <Alert variant="light">
                  <Alert.Link
                    style={{ textDecoration: "none", background: "none" }}
                    href="https://www.npmjs.com/package/axios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Axios
                  </Alert.Link>{" "}
                  → A javascript library for making HTTP requests.
                </Alert>
              </li>
              <li>
                <Alert variant="light">
                  <Alert.Link
                    style={{ textDecoration: "none", background: "none" }}
                    href="https://www.npmjs.com/package/react-bootstrap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Bootstrap
                  </Alert.Link>{" "}
                  → A javascript library for creating Bootstrap components.
                </Alert>
              </li>
            </ul>
            <p style={style}>Create your own drinks and share it with your friends.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
