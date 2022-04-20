import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../containers/ProjectList';

function Dashboard() {
  const name = localStorage.getItem('name');
  const userId = localStorage.getItem('id');
  console.log(name);
  return (
    <div>
      <h3>Welcome {name}!</h3>
      <Link to='/projects/new'>Add new project</Link>
      <ProjectList userId={userId} />
    </div>
  );
}

export default Dashboard;
