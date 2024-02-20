import React from "react";
import editIcon from "./edit.svg";
import deleteIcon from "./delete.svg";

const Items = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul className="rounded-lg mt-6 p-4 border-solid border-2 border-sky-500 bg-slate-200 h-[400px] overflow-y-auto overflow-x-hidden">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between p-2">
          <div>
            <input type="checkbox" className="checkbox" />
            {task.text}
          </div>
          <div>
            <button onClick={() => onEdit(task.id)}>
              <img className="cursor-pointer" src={editIcon} alt="" />
            </button>
            <button onClick={() => onDelete(task.id)}>
              <img className="cursor-pointer" src={deleteIcon} alt="" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Items;
