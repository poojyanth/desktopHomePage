import React from 'react';

const TodoList = () => {
  const tasks = ['Finish React project', 'Study for exams', 'Call family', 'Go for a walk'];

  return (
    <div className="todo-list">
      <h3>To-Do List</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
