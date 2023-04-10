const express = require('express');
const router = express.Router();

import ProjectRepository from '../internal/store/task-repository';

router.get('/', (req, res) => {
  console.log(req);
  res.send('HomePage');
});

router.get('/projects', async (req, res) => {
  console.log(req);
  try {
    const projects = await ProjectRepository.Project.find();
    res.status(200).send(projects);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const blog = await ProjectRepository.Project.findById({
      _id: req.params.id,
    });
    res.status(200).send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/project', async (req, res) => {
  try {
    const ProjectInstance = new ProjectRepository.Project(req.body);
    await ProjectInstance.save();
    res.status(200).send(ProjectInstance);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/project/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const options = { new: true };

    const updatedProject = await ProjectRepository.Project.findByIdAndUpdate(
      id,
      update,
      options,
    );
    if (!updatedProject) {
      res.status(404).send('Project not found');
      return;
    }

    res.status(200).send(updatedProject);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/project/:id', async (req, res) => {
  try {
    const deletedProject = await ProjectRepository.Project.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedProject) {
      res.status(404).send('Project not found');
      return;
    }
    res.status(200).send('Project deleted successfully');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
