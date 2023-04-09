import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { NotFound } from '../index';
const Home = () => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        width: 'calc(100vw - 300px)',
        backgroundColor: '#2a1f57',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Home;
