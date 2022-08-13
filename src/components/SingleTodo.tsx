import React, { useState } from "react";

type SingleItem = {
  id: Number;
  text: string;
  done: boolean;
};

type SingleTodoProps = {
  item: SingleItem;
  i: Number;
  todos: any[];
  onDelete: (id: Number) => void;
  onEdit: (id: Number) => void;
};

const SingleTodo = ({ item, i, onDelete, onEdit }: SingleTodoProps) => {
  const [isDone, setIsDone] = useState(item.done);

  return (
    <div className="singleTodo">
      <span>
        <span
          onClick={() => setIsDone(!isDone)}
          className="todoItem"
          data-testid={`todo${i}`}
          style={{ textDecoration: isDone ? "line-through" : "none" }}
        >
          {item.text}
        </span>
      </span>

      <div>
        <span className="edit" onClick={() => onEdit(item.id)}>
          Edit
        </span>
        <span className="delete" onClick={() => onDelete(item.id)}>
          Delete
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
