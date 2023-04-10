import React from 'react';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import { useStyletron } from 'baseui';
import UpdateModal from './updateModal';
import DeleteModal from './deleteModal';
const TaskCard = ({ task }) => {
  const [updateIsOpen, setUpdateIsOpen] = React.useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = React.useState(false);

  const [css] = useStyletron();
  const marginStyles = css({
    marginRight: '10px',
  });

  const isTaskOverDue = new Date(task.dueDate) < new Date();

  return (
    <Card
      overrides={{
        Root: { style: { margin: '10px' } },
      }}
    >
      <StyledBody>
        {task.name}
        {isTaskOverDue && 'Task is Overdue'}
      </StyledBody>
      <StyledAction>
        <Button className={marginStyles} onClick={() => setUpdateIsOpen(true)}>
          Update Task
        </Button>
        {UpdateModal(updateIsOpen, setUpdateIsOpen)}
        <Button className={marginStyles} onClick={() => setDeleteIsOpen(true)}>
          Delete Task
        </Button>
        {DeleteModal(deleteIsOpen, setDeleteIsOpen)}
      </StyledAction>
    </Card>
  );
};

export default TaskCard;
