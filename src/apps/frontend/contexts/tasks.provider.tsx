import React, { createContext, useContext, useState, useEffect } from 'react';
import { IProject, ITask } from './models';

interface IProjectContext {
  projects: IProject[];
  addProject: (project: IProject) => void;
  removeProject: (projectId: string) => void;
  updateProject: (project: IProject) => void;
  addTask: (projectId: string, task: ITask) => void;
  removeTask: (projectId: string, taskId: string) => void;
  updateTask: (projectId: string, task: ITask) => void;
}

export const ProjectContext = createContext<IProjectContext>({
  projects: [],
  addProject: () => {},
  removeProject: () => {},
  updateProject: () => {},
  addTask: () => {},
  removeTask: () => {},
  updateTask: () => {},
});

export const useProjectContext = (): IProjectContext =>
  useContext(ProjectContext);

interface IProps {
  children: React.ReactNode;
}
const ProjectProvider = ({ children }: IProps): JSX.Element => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    // Fetch projects from backend API
    async function fetchProjects() {
      const response = await fetch('/api/projects');
      const projects = await response.json();
      setProjects(projects);
    }

    fetchProjects();
  }, []);

  const addProject = async (project: IProject) => {
    // Save new project to backend API
    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    const savedProject = await response.json();
    setProjects([...projects, savedProject]);
  };

  const removeProject = async (projectId: string) => {
    // Delete project from backend API
    await fetch(`/api/projects/${projectId}`, {
      method: 'DELETE',
    });
    setProjects(projects.filter((project) => project._id !== projectId));
  };

  const updateProject = async (project: IProject) => {
    // Update project on backend API
    await fetch(`/api/projects/${project._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    setProjects(projects.map((p) => (p._id === project._id ? project : p)));
  };

  const addTask = async (projectId: string, task: ITask) => {
    // Save new task to backend API
    const response = await fetch(`/api/projects/${projectId}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const savedTask = await response.json();

    const updatedProjects: any = projects.map((project) =>
      project._id === projectId
        ? { ...project, tasks: [...project.tasks, savedTask] }
        : project,
    );
    setProjects(updatedProjects);
  };

  const removeTask = async (projectId: string, taskId: string) => {
    await fetch(`/api/projects/${projectId}/tasks/${taskId}`, {
      method: 'DELETE',
    });
    const updatedProjects: any = projects.map((project) =>
      project._id === projectId
        ? {
            ...project,
            tasks: project.tasks.filter((task) => task._id !== taskId),
          }
        : project,
    );
    setProjects(updatedProjects);
  };

  const updateTask = async (projectId: string, task: ITask) => {
    const response = await fetch(
      `/api/projects/${projectId}/tasks/${task._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      },
    );
    const updatedTask = await response.json();
    const updatedProjects: any = projects.map((project) => {
      if (project._id === projectId) {
        const updatedTasks = project.tasks.map((t) =>
          t._id === updatedTask._id ? updatedTask : t,
        );
        return { ...project, tasks: updatedTasks };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        removeProject,
        updateProject,
        addTask,
        removeTask,
        updateTask,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
