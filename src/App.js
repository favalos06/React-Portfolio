import './App.css';
import portrait from './assets/img/recent-img.png'
import aboutMe from './assets/img/About Me.png'
import refactor from './assets/img/Refactor Homework.png'
import quiz from './assets/img/Quiz SS.png'
import recipe from './assets/img/Recipe SS.png'
import weather from './assets/img/Weather SS.png'
import noteTaker from './assets/img/NoteTaker SS.png'
import social from './assets/img/Social Media SS.png'
import textEditor from "./assets/img/Text Editor SS.png";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Beginner projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero-banner">
        <h1>Fernando Avalos Torres</h1>

        <img src={portrait} alt="Fernando" />
      </section>

      <main>
        <section className="" id="about">
          <h2>About myself</h2>
          <div>
            <p>
              Currently working as a compounding technician for a vinyl graphic
              company. Looking to expand my skills in web development. In 2022
              started attending an online bootcamp program at the University of
              california. It is a full stack codeing and programming course. I
              am looking forward to growing a new career path in the near
              future.
            </p>
            <p>
              On my free time I goto the gym for personal goals in fitness and I
              also watch Sunday Mass online to enhance my spirit.
            </p>
          </div>
        </section>

        <h2 id="projects">Beginner projects</h2>
        <section className="projects">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://favalos06.github.io/prework-about-me/"
          >
            <img src={aboutMe} alt="About Me Project" />
            <h3>About Me Site</h3>
            <p>Small Bio Site that talks about me</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://favalos06.github.io/01-refactor-homework/"
          >
            <img
              src={refactor}
              alt="Refactor Homework"
            />
            <h3>Refactor Homework</h3>
            <p>Homework assignment to refactor code</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://favalos06.github.io/04-Web-APIs-Code-Quiz/"
          >
            <img src={quiz} alt="About Me Project" />
            <h3>Horror Movie Quiz</h3>
            <p>Quiz that has a timer and tracks highscores</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://keeezy.github.io/Project-One/"
          >
            <img src={recipe} alt="About Me Project" />
            <h3>Recipe Generator</h3>
            <p>App that generates recipes by providing one ingredient</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://favalos06.github.io/06-Server-Side-APIs-Weather-Dashboard/"
          >
            <img src={weather} alt="Weather App" />
            <h3>Weather Application</h3>
            <p>
              Weather Application that provides weather data for current or
              searched cities
            </p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://express-note-taker-fa.herokuapp.com"
          >
            <img src={noteTaker} alt="Note Taker App" />
            <h3>Note Taker Application</h3>
            <p>
              Application that allows users to type up and record notes for
              later use.
            </p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mando-commerce.herokuapp.com/"
          >
            <img
              src={social}
              alt="Social Media Site"
            />
            <h3>Social Media Site</h3>
            <p>
              Social Media Site that allows users to view and share their own
              posts.
            </p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://limitless-reaches-68089.herokuapp.com/"
          >
            <img
              src={textEditor}
              alt="Online Text Editor"
            />
            <h3>Online Text Editor</h3>
            <p>Online text editor that can be installed for use offline.</p>
          </a>
        </section>
      </main>
      <footer id="contact">
        <div className="container">
          <h2>Contact Information</h2>
          <address>
            <a href="tel:+17147375523">714.737.5523</a>
            <a href="mailto:fernando.avalostorres91@gamil.com">
              fernado.avalostorres91@gmail.com
            </a>
            <a href="https://github.com/favalos06">Github</a>
          </address>
        </div>
      </footer>
    </div>
  );
}

export default App;
