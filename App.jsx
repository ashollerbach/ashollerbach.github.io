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
          <h2>My Projects</h2>
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
        I have a broad range of experience including ASIC design, firmware development, and AI and machine learning training and implementation.
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
        <a href="mailto:ashollerbach@gmail.com">
          <img src="https://www.google.com/a/cpanel/ashollerbach.com/images/logo-gmail.png" alt="Gmail" className="social-logo" />
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
      <video key="showcase" width="560" height="315" controls>
        <source src="/deathnote/ShowcaseFlight.mp4" type="video/mp4" />
        Your browser does not support the video tag or the file could not be loaded.
      </video>
      <figcaption>Showcase flight video</figcaption>
      <video key="sentry" width="560" height="315" controls>
        <source src="/deathnote/SentryTracking.mp4" type="video/mp4" />
        Your browser does not support the video tag or the file could not be loaded.
      </video>
      <figcaption>Sentry tracking video</figcaption>
    </div>
  );
}

function Wordle() {
  return (
    <div className="container">
      <h2>Wordle</h2>
      <p>
        This was my first ever software project.
        During my sophomore year of college, Worlde was blowing up online and 
        I decided to make a program that could solve the wordle. 
        I created an algorithm that finds the word that eliminates the most
        words from a selected word list. The program then takes a word that 
        the user inputs and removes invalid words from the list. To test this,
        I made a Monte Carlo simulation, and over large amounts of trails, generally 
        1,000 to 1,000,000, the program would sucessfully guess the correct word over 
        95% of the time. 
      </p>
    </div>
  );
}

function AES() {
  return (
    <div className="container">
      <h2>AES</h2>
      <p>This project was one of my projects for Hardware Security 1 & 2 (ELEC 5210 & ELEC 5290).
        It uses combinational logic to implement AES on an FPGA
        and uses UART to communicate with a PC.
        After implementing the AES algorithm in ECB mode, I was able to
        revise my implementation to encrypt in CTR mode. 
        In CTR mode the system encrypts a counter concatenated with a nonce and then XOR's
        that output with the plaintext. This helps significantly reduce the amount of computer
        hardware required to implement AES. Because AES is a very expensive algorithm, 
        implementing it in hardware can significantly reduce itspower consumption - 
        especially for large amounts of data.
      </p>
    </div>
  );
}

function Starfall() {
  return (
    <div className="container">
      <h2>Starfall</h2>
      <p>In 2024, I attended a hackathon. I worked in a group of 4 in order to develop
        a productivity app that contains a focus timer, a note taking feature that interfaces with 
        your IOS notes app, a calendar that syncs with your IOS calendar,
        and a feature that helps you keep track of your physical and mental health.
        Going into this, our group had no experience with IOS development,
        and two of had to rent Macbooks from the university. We stayed up all night
        working on this project (I ended up getting about an hour and a half of sleep
        on the Brown-Koppel basement floor). We were very happy with how well the app 
        worked, especially considering the lack of expereience we had. 
        </p>
    </div>
  );
}

function EagleScout() {
  return (
    <div className="container">
      <h2>Eagle Scout Project</h2>
      <p>One of the requirements of becoming an Eagle Scout is to complete an
        Eagle Scout project. My project was to wash and paint the Knights of Columbus
        hall in Needville, Texas. For my project, I organized a day where scouts carpooled
        an hour and a half to the hall. We spent the day powerwashing about 2,000 square feet of the 
        patio and painted the front side of the building with 3 layers of paint. We also repainted
        the benches, which gave the hall a brand new look. Organizing this project was a 
        great expereince for me. This was my first time leading a large group project. 
        I had to organize the logistics of the project, keep track of the costs, and 
        delegate tasks to scouts and adults. 
      </p>
    </div>
  );
}

export default App;