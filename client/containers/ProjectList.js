import React, { useEffect, useState } from 'react';
import getProjects from '../utils/getProjects';

function ProjectList({ userId }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`/api/projects/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      ProjectList
      {projects.length !== 0 &&
        projects.map((p) => {
          return <div>{p.title}</div>;
        })}
    </div>
  );
}

export default ProjectList;
