import React from "react"
import { Link } from "react-router-dom"

// export class Navbar extends Component         converting class to function
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ marginRight: "10px", marginLeft: "10px" }}>
            NewsApp
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" style={{ marginRight: "10px", marginLeft: "10px" }}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/business" style={{ marginRight: "10px", marginLeft: "10px" }}>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" style={{ marginRight: "10px", marginLeft: "10px" }}>
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general" style={{ marginRight: "10px", marginLeft: "10px" }}>
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" style={{ marginRight: "10px", marginLeft: "10px" }}>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" style={{ marginRight: "10px", marginLeft: "10px" }}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" style={{ marginRight: "10px", marginLeft: "10px" }}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" style={{ marginRight: "10px", marginLeft: "10px" }}>
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
