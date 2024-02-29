import { useState } from 'react';
import Sidebar from './sidebar';
import Module from './module';
import './app.css';
import modulesData from './modulesData';

const CoursePage = () => {
  const [selectedModule, setSelectedModule] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const modules = modulesData;

  return (
    <div className="course-page">
      <Sidebar modules={modules} onSelectModule={setSelectedModule} openMenu={openMenu} onOpenMenu={setOpenMenu} />
      <Module content={modules[selectedModule]} />
    </div>
  );
};

export default CoursePage;
