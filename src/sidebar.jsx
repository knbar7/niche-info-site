import { Link } from 'react-router-dom';
import logo from '../public/images/niche.png';
import { useMediaQuery } from 'react-responsive';

const Sidebar = ({ modules, onSelectModule, openMenu, onOpenMenu }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const handleSelectModule = (index) => {
    onSelectModule(index);
    onOpenMenu(false);
  };

  return (
    <div className="sidebar">
      <div className="course-title-container">
        <div className="course-title-headbar">
          <img className="course-title-logo logo" src={logo} alt="mbs logo" />
        </div>
        <Link to={'/'}>Return to Home</Link>
        <h2 className='course-title'>Fundamentals of Technique</h2>

        {isMobile && (
          <button className="mobile-only-button" onClick={() => onOpenMenu(prevOpenMenu => !prevOpenMenu)}>Open Menu</button>
        )}
      </div>
      <ul className={`module-list ${isMobile && openMenu ? '' : 'size-hidden'}`}>
        {modules.map((module, index) => (
          <li className="module-selection-box" key={index} onClick={() => handleSelectModule(index)}>
            {module.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
