const createProject = (userId, data = {}, navigate) => {
  fetch(`/api/projects/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) navigate('/dashboard');
    })

    .catch((err) => console.log(err));
};

export default createProject;
