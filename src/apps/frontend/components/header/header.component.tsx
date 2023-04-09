import React from 'react';
import logo from './logo.png';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';

import { useStyletron } from 'baseui';

export default () => {
  const [css] = useStyletron();

  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: {
            backgroundColor: '#6943ff',
            height: '10vh',
            width: '100vw',
            fontSize: '30px',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 0 10px black',
            border: 'none',
          },
        },
      }}
    >
      <StyledNavigationList $align={ALIGN.center}>
        <img
          src={logo}
          alt="To-do LOGO"
          className={css({
            borderRadius: '50%',
            backgroundColor: 'white',
          })}
        />
        <StyledNavigationItem>ToDoList</StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};
