import * as React from 'react';
import { useStyletron } from 'baseui';
import Projects from './projects/projects';
import Date from './date/date';
import CreateProjects from './createProjects/createProjects';

export default () => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '10px',
        width: '300px',
        backgroundColor: '#121212',
        minHeight: '90vh',
        border: 'none',
      })}
    >
      <Date />
      <Projects />
      <CreateProjects />
    </div>
  );
};
