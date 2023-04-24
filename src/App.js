import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Routes, Route, Link,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Video from './components/Video';
import Audio from './components/Audio';
import VideoPlay from './components/VideoPlay';
import AudioPlayer from './AudioPlayer';
import tracks from './tracks';
import Login from './Login';
import Signup from './Signup';
function App() {
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
                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
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
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path="video" element={<Video/>}/>
        <Route path="audio" element={<Audio/>}/>
        {/* <Route path="Contact" element={<Contact/>}/> */}
        <Route path="home/VideoPlay" element={<VideoPlay/>}></Route>
        <Route path="home/AudioPlayer" element={<AudioPlayer tracks={tracks}/>}></Route>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  );
}

export default App;
