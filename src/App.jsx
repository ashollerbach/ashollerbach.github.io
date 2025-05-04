import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/capstone" element={<Capstone />} />
            <Route path="/projects/wordle" element={<Wordle />} />
            <Route path="/projects/aes" element={<AES />} />
            <Route path="/projects/starfall" element={<Starfall />} />
            <Route path="/projects/eagle-scout" element={<EagleScout />} />
          </Routes>
        </main>
        <nav className="sidebar">
          <h2>Projects</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects/capstone">Capstone</Link></li>
            <li><Link to="/projects/wordle">Wordle</Link></li>
            <li><Link to="/projects/aes">AES</Link></li>
            <li><Link to="/projects/starfall">Starfall</Link></li>
            <li><Link to="/projects/eagle-scout">Eagle Scout</Link></li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <img src="/images/headshot.jpg" alt="Headshot" className="headshot" />
      <p>
        My name is Arik Hollerbach, I am a computer engineer at Auburn University graduating in May 2025.
        I have a broad range of experience including ASIC design, firmware development, and computer vision training and implementation.
        After I graduate, I am excited to keep learning and working on projects on my own.
        Some of the topics I want to focus on are bayesian statistics, wireless communications, options trading, and hardware security.
        Outside of my classwork and personal projects I enjoy pickleball, hiking, fishing, surfing, and golfing.
        I am also a diehard Auburn and Notre Dame fan, and I enjoy watching my teams play football, baseball, and lacrosse.
      </p>
      <div className="social-links">
        <a href="https://github.com/ashollerbach" target="_blank" rel="noopener noreferrer">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-logo" />
        </a>
        <a href="https://linkedin.com/in/ashollerbach" target="_blank" rel="noopener noreferrer">
          <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn" className="social-logo" />
        </a>
      </div>
    </div>
  );
}

function Capstone() {
  return (
    <div className="container">
      <h2>Drone Defense Sentry</h2>
      <p>
        This project was my senior design course project. I worked with a group of 6 to design a sentry that recognizes drones in the air,
        locks onto them, and confirms a hit using LIFI by displaying the duty cycle of our LED array. It provided valuable experience in teamwork,
        applying classroom knowledge, and troubleshooting hardware/software issues. The project was special because it required collaboration to succeed.
      </p>
      <img src="/deathnote/GroupPicCamera.JPG" alt="Group picture at our senior design showcase" className="project-image" />
      <figcaption>Group picture at our senior design showcase.</figcaption>
      <video width="560" height="315" controls>
        <source src="/deathnote/ShowcaseFlight.mp4" type="video/mp4" />
      </video>
      <video width="560" height="315" controls>
        <source src="/deathnote/SentryTracking.mp4" type="video/mp4" />
      </video>
      <figcaption>Videos of the sentry tracking the drone</figcaption>
    </div>
  );
}

function Wordle() {
  return (
    <div className="container">
      <h2>Wordle</h2>
      <p>Details about the Wordle project will go here.</p>
    </div>
  );
}

function AES() {
  return (
    <div className="container">
      <h2>AES</h2>
      <p>Details about the AES project will go here.</p>
    </div>
  );
}

function Starfall() {
  return (
    <div className="container">
      <h2>Starfall</h2>
      <p>Details about the Starfall project will go here.</p>
    </div>
  );
}

function EagleScout() {
  return (
    <div className="container">
      <h2>Eagle Scout Project</h2>
      <p>Details about the Eagle Scout project will go here.</p>
    </div>
  );
}

export default App;