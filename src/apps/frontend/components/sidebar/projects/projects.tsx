import React, { useContext } from 'react';
import { Accordion, Panel } from 'baseui/accordion';
import { ProjectContext } from '../../../contexts/tasks.provider';
import { Link } from 'react-router-dom';
import { Button, KIND } from 'baseui/button';
import { useStyletron } from 'baseui';

export default () => {
  const [css] = useStyletron();
  const { projects } = useContext(ProjectContext);
  const getAllProjectLinks = () => {
    return (
      <>
        {projects.map((curr) => (
          <Link
            className={css({
              textDecoration: 'none',
            })}
            key={curr._id}
            to={`/project/${curr._id}`}
          >
            <Button
              kind={KIND.tertiary}
              overrides={{
                BaseButton: {
                  style: {
                    width: '100%',
                    textAlign: 'left',
                  },
                },
              }}
            >
              {curr.name}
            </Button>
          </Link>
        ))}
      </>
    );
  };
  console.log(projects);
  return (
    <Accordion
      overrides={{
        PanelContainer: {
          style: {
            padding: 'none',
            borderRadius: '10px',
            overflow: 'hidden',
          },
        },
      }}
      accordion
    >
      <Panel title="All Projects">{getAllProjectLinks()}</Panel>
    </Accordion>
  );
};
