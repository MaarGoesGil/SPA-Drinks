import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>About</h1>
          <p>
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
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>{" "}
              - The javascript framework used.
            </li>
            <li>
              <a
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>{" "}
              - A javascript library for managing application state.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-router-dom"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Router
              </a>{" "}
              - A javascript library for routing.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/axios"
                target="_blank"
                rel="noopener noreferrer"
              >
                Axios
              </a>{" "}
              - A javascript library for making HTTP requests.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-bootstrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Bootstrap
              </a>{" "}
              - A javascript library for creating Bootstrap components.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-router-bootstrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Router Bootstrap
              </a>{" "}
              - A javascript library for creating Bootstrap components.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-fontawesome"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Fontawesome
              </a>{" "}
              - A javascript library for creating Fontawesome components.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-bootstrap-table"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Bootstrap Table
              </a>{" "}
              - A javascript library for creating Bootstrap Table components.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-bootstrap-table-next"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Bootstrap Table Next
              </a>{" "}
              - A javascript library for creating Bootstrap Table components.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-bootstrap-table2-filter"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Bootstrap Table2 Filter
              </a>{" "}
              - A javascript library for creating Bootstrap Table2 Filter
              components.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-bootstrap-table2-paginator"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Bootstrap Table2 Paginator
              </a>{" "}
              - A javascript library for creating Bootstrap Table2 Paginator
              components.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-bootstrap-table2-toolkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Bootstrap Table2 Toolkit
              </a>{" "}
              - A javascript library for creating Bootstrap Table2 Toolkit
              components.
            </li>
          </ul>
          <p>Create your own drinks and share it with your friends.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
