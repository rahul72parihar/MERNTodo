import React, { useContext } from 'react';
import { ProjectContext } from '../../contexts/tasks.provider';
import { useParams } from 'react-router-dom';
import { ITask } from '../../contexts/models';
import TaskCard from '../taskCard/taskCard';
const filterDay = () => {
  function filterTasksByDays(tasks: ITask[], days: number): ITask[] {
    const today = new Date();
    const nextDay = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
    const dueTasks = tasks.filter(
      (task) =>
        new Date(task.dueDate) >= today && new Date(task.dueDate) <= nextDay,
    );
    return dueTasks;
  }

  const { noOfDays } = useParams<{ noOfDays: string }>();
  const { projects } = useContext(ProjectContext);
  let allTasks: ITask[] = [];
  projects.forEach((project) => {
    allTasks = allTasks.concat(project.tasks);
  });

  if (noOfDays) allTasks = filterTasksByDays(allTasks, parseInt(noOfDays));

  const allTaskCards = () => {
    return allTasks.map((currTask) => {
      return (
        <div key={currTask.id}>
          <TaskCard task={currTask} />
        </div>
      );
    });
  };
  return <>{allTaskCards()}</>;
};

export default filterDay;
