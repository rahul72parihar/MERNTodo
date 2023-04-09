import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { NotFound, FilterDay } from '../index';
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
        <Route path="/" element={<FilterDay />} />
        <Route path="/days/:noOfDays" element={<FilterDay />} />
        <Route path="/" element={<></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Home;
