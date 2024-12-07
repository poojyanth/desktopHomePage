import React from 'react';
import TodoList from './TodoList';
import Weather from './Weather';
import StaticInfo from './StaticInfo';

const RightPane = () => {
  return (
    <div className="right-pane">
      <TodoList />
      <Weather />
      <StaticInfo />
    </div>
  );
};

export default RightPane;
