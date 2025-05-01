import './App.css';

function App() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <img src="/images/headshot.jpg" alt="Headshot" className="headshot" />

      {/*Introduction */}
      <p>My name is Arik Hollerbach, I am a computer engineer at University graduating in May 2025.
        I have a broad range of experience including ASIC design, firmware development, and computer vision training and implementation.
        After I graduate, I am excited to keep learning and working on projects on my own.
        Some of the topics I want to focus on are bayesian statistics, wireless communications, options trading, and hardware security.
        Outside of my classwork and personal projects I enjoy pickleball, hiking, fishing, surfing, and golfing. 
        I am also a diehard Auburn and Notre Dame fan, and I enjoy watching my teams play football, baseball, and lacrosse.</p>

      <h2>Projects</h2>
      <div className="project">
        <h3>Drone Defense Sentry</h3>
        <p>This project was my project for  my senior design course. For this project, I worked with a group of 6 people to design a sentry that recognizes drones in the air, 
          locks on to them, and confirms a hit using LIFI by displaying the duty cycle of our LED array. Working on this project gave me valuable experience in working with a team,
          implementing topics that I learned in class, and troubleshooting hardware and software issues. What made this project so special to me was that I would not have been
          able to complete it on my own. 
        </p>
        <img src="/deathnote/GroupPicCamera.JPG" alt="Group picture at our senior design showcase." />
        <figcaption>Group picture at our senior design showcase.</figcaption>
        <iframe src="/deathnote/ShowcaseFlight.mp4" width="560" height="315" title="Video of the sentry tracking the drone"></iframe>
        <figcaption>Video of the sentry tracking the drone</figcaption>
      </div>
    </div>
  );
}

export default App;