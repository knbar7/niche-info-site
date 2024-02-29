import './App.css';
import logo from '../public/images/niche.png';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className="black-gradient"></div>
      <div className="header-band">
        <div className="header max-width">
          <div className="header-left">
            <img src={logo} alt="mbs logo" className='logo'/>
          </div>
          <div className='header-right'>
            <Link to={'learn'}>Learn Technique</Link>
            <a className='phone-absence' href="https://calendly.com/mbs-climbing">Schedule Coaching Session</a>
          </div>
        </div>
      </div> 
      <div className="action-block-top">
        <div className="relative-container">
          <div className="button-background button-background-top">
          </div>
          <a href="https://calendly.com/mbs-climbing">
            <button className='main-button'>Schedule Coaching Session</button>
          </a>
        </div>
      </div>
      <div className="phone-spacer"></div>
      <div className="welcome-block">
        <div className="welcome-container max-width">
          <div className="niche-image"></div>
          <div className="spacer"></div>
        </div>
      </div>
      <div className="information-item">
        <div className="information-words">
          <h2>What is Niche?</h2>
          <p>Niche Climbing is a coaching organization based in Logan, Utah that focuses primarily on developing climbing skill.</p>
        </div>
        <div className="what-is-image"></div>
      </div>
      <div className="information-item flex-reverse">
        <div className="background-color"></div>
        <div className="information-words">
          <h2>Why Niche?</h2>
          <p>Climbing is a full body sport and learning to use your whole body to climb well will do more for your climbing than any amount of finger training could ever do.</p>
        </div>
        <div className="why-image"></div>
      </div>
      <div className="who-are-we-section">
        <div className="black-gradient-reverse"></div>
        <div className="team-information max-width">
          <h2>The Team</h2>
          <div className="team-members">
            <div className="team-member-container selected">
              <div className="member-image member-image-kendall"></div>
              <h3>Kendall Barlow</h3>
            </div>
            <div className="team-member-container">
              <div className="member-image member-image-kennady"></div>
              <h3>Kennady Barlow</h3>
            </div>
            <div className="team-member-container">
              <div className="member-image member-image-byron"></div>
              <h3>Byron Encarnacion</h3>
            </div>
          </div>
        </div>
        <div className="bottom-spacer"></div>
        <div className="bottom-background"></div>
        <div className="spacer"></div>
        <div className="action-block-bottom">
          <div className="relative-container">
            <div className="button-background button-background-bottom">
            </div>
            <a href="https://calendly.com/mbs-climbing">
              <button className='main-button main-button-bottom'>Schedule Coaching Session</button>
            </a>
          </div>
        </div>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default App;
