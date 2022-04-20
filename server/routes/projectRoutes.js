const express = require('express');
// const { mongoose } = require('mongoose');
const Project = require('../models/projectModel');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  try {
    Project.find({ userId: id }).then((projects) => {
      if (projects !== undefined) {
        return res.status(200).json(projects);
      } else {
        return next({
          log: "Error with getting the user's projects",
          message: { err: 'Project not found' },
        });
      }
    });
  } catch (err) {
    return next({
      log: "Error with getting the user's projects",
      message: { err: err.message },
    });
  }
});

router.post('/:id', (req, res, next) => {
  const { title, date, description, tech, status } = req.body;
  const { id } = req.params;
  console.log('post route hit!');
  Project.create(
    { userId: id, title, date, description, tech, status },
    (err, project) => {
      if (err) {
        return next({
          log: 'Error with creating a project',
          message: { err: err.message },
        });
      } else {
        res.status(200).json(project);
      }
    }
  );
});

module.exports = router;
