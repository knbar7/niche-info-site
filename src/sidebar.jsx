
import { Link } from 'react-router-dom';
import logo from '../public/images/niche.png';

const Sidebar = ({ modules, onSelectModule }) => {
  return (
    <div className="sidebar">
      <div className="course-title-container">
        <div className="course-title-headbar">
            <img src={logo} alt="mbs logo" className='logo'/>
        </div>
        <Link to={'/'}>Return to Home</Link>
        <h2 className='course-title'>Fundamentals of Technique</h2>
      </div>
      <ul className="module-list">
        {modules.map((module, index) => (
          <li className="module-selection-box" key={index} onClick={() => onSelectModule(index)}>
            {module.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
