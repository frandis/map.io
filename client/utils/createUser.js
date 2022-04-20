const createUser = (url = '/api/signup', data = {}, navigate) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((res) => {
      localStorage.setItem('name', res.firstName);
      localStorage.setItem('id', res._id);
      navigate('/dashboard', {
        state: {
          id: res._id,
          firstName: res.firstName,
          createdAt: res.createdAt,
        },
      });
    })
    .catch((e) => console.log(e));
};

export default createUser;
