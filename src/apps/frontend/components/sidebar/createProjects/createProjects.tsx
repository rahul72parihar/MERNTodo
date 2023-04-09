import React from 'react';
import { Accordion, Panel } from 'baseui/accordion';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';

export default function () {
  const [newProjectName, setNewProjectName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleClick = () => {
    console.log('click', newProjectName, description);
  };

  return (
    <Accordion
      overrides={{
        PanelContainer: {
          style: {
            borderRadius: '10px',
            overflow: 'hidden',
          },
        },
      }}
      accordion
    >
      <Panel title="Create New Project">
        <Input
          overrides={{
            Input: {
              style: {
                letterSpacing: '1px',
                fontWeight: 'bold',
                fontSize: '1.05em',
              },
            },
          }}
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          placeholder="Enter Project Name"
          clearOnEscape
        />
        <Textarea
          overrides={{
            Root: {
              style: {
                marginTop: '10px',
              },
            },
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description (Optional)"
          clearOnEscape
        />
        <Button
          onClick={() => {
            handleClick();
          }}
          overrides={{
            BaseButton: {
              style: {
                marginTop: '10px',
                width: '100%',
              },
            },
          }}
          disabled={!newProjectName}
        >
          Create Project
        </Button>
      </Panel>
    </Accordion>
  );
}
