import { useState } from "react";

type TodoInterface = {
  id: Number;
  text: string;
  done: boolean;
};

type TodoObj = {
  editedTodo: TodoInterface;
  setShowEditModal: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
  setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
  todos: TodoInterface;
  editing: boolean;
};

const EditModal = ({
  editedTodo,
  setShowEditModal,
  todos,
  setTodos,
  editing
}: TodoObj) => {
  const [todo, setTodo] = useState(editing ? { ...editedTodo }.text : "");

  const onSave = () => {
    if (todo.trim().length > 0 && todo.trim().length < 40) {
      if (editing) {
        editedTodo.text = todo;
        setShowEditModal(false);
      } else {
        let todoObj: TodoInterface = {
          id: Math.floor(Math.random() * 10000000) + 1,
          text: todo,
          done: false
        };

        setTodos([todoObj, ...todos]);
        setShowEditModal(false);
      }
    } else {
      alert("Check todo's length! Must be within 1-40 characters!");
    }
  };

  return (
    <section className="editModalWrapp">
      <div className="closeModal" onClick={() => setShowEditModal(false)}></div>
      <form className="editFormWrapp">
        <h3>{editing ? "Edit todo" : "Add new todo"}</h3>
        <input
          name="todo"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Enter todo..."
        />

        <button type="button" onClick={onSave}>
          {editing ? "Save changes" : "Add post"}
        </button>
      </form>
    </section>
  );
};

export default EditModal;
