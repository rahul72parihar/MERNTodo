import React from 'react';
import { Accordion, Panel } from 'baseui/accordion';
import { Link } from 'react-router-dom';
import { Button, KIND } from 'baseui/button';
import { useStyletron } from 'baseui';

export default function () {
  const [css] = useStyletron();
  const linkButton = (url: string, buttonText: string) => {
    return (
      <Link
        className={css({
          textDecoration: 'none',
        })}
        to={`/${url}`}
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
          {buttonText}
        </Button>
      </Link>
    );
  };
  const getFilterDaysBtn = () => {
    return (
      <>
        <>{linkButton('days/1', 'Today')}</>
        <>{linkButton('days/7', 'This Week')}</>
        <>{linkButton('', 'All Taks')}</>
      </>
    );
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
      <Panel title="Tasks By Dates">{getFilterDaysBtn()}</Panel>
    </Accordion>
  );
}
