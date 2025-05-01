import './App.css';

function App() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <img src="/images/headshot.jpg" alt="Headshot" className="headshot" />

      {/*Introduction */}
      <p>My name is Arik Hollerbach, I am a computer engineer at University graduating in May 2025.
        I have a broad range of experience including ASIC design, firmware development, and computer vision training and implementation.
        I am currently looking for a career in embedded systems design or digital design.</p>

      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of project 1.</p>
        <img src="/images/project1.jpg" alt="Project 1" />
        <iframe src="https://www.youtube.com/embed/VIDEO_ID" width="560" height="315" title="Project 1 Video"></iframe>
      </div>
      {/* Add more projects */}
      <h2>Gallery</h2>
      <div className="gallery">
        <img src="/images/photo1.jpg" alt="Photo 1" />
        {/* Add more images */}
      </div>
    </div>
  );
}

export default App;