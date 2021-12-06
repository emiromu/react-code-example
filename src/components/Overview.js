import React from "react";

const Overview = (props) => {
  const { tasks, handleDeleteTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{tasks.indexOf(task)+1}:{task.text}
        <button id={task.id+"Delete"} onClick={()=>handleDeleteTask(task)}>Delete</button></li>;
      })}
    </ul>
  );
};

export default Overview;