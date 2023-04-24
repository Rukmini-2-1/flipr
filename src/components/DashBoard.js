import React from 'react'
import {Link} from "react-router-dom";
const DashBoard = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Podcasts</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="video">Video Podcasts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="audio">Audio Podcasts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    </div>
  )
}

export default DashBoard
