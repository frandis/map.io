const getProjects = (userId) => {
  fetch(`/api/projects/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })

    .catch((err) => console.log(err));
};

export default getProjects;
