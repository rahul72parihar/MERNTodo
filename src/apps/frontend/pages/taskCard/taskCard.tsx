import React from 'react';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import { useStyletron } from 'baseui';
import UpdateModal from './updateModal';
import DeleteModal from './deleteModal';
import { ITask } from '../../contexts/models';
const TaskCard = (task: ITask) => {
  const [css] = useStyletron();
  const [updateIsOpen, setUpdateIsOpen] = React.useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = React.useState(false);
  const marginStyles = css({
    marginRight: '10px',
  });
  console.log('inside ', task);
  return (
    <Card
      overrides={{
        Root: { style: { margin: '10px' } },
      }}
    >
      <StyledBody>{task.name}</StyledBody>
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
