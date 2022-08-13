import AddNewTodo from "../components/AddNewTodo";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { AiOutlinePlusSquare } from "react-icons/ai";

describe("Add new todo", () => {
  it("renders add new todo", () => {
    const app = render(<AddNewTodo />);
    expect(app).not.toBeUndefined();
  });

  it("check icon add ", () => {
    const addIcon = render(<AiOutlinePlusSquare />);
    expect(addIcon).not.toBeUndefined();
  });
});
