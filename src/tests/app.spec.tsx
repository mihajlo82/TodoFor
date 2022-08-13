import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("TodoApp", () => {
  it("renders app", () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });
});
