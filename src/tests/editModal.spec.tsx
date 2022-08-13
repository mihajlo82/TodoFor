import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditModal from "../components/EditModal";

describe("todoList", async () => {
  it("render edit modal", () => {
    const addModal = render(<EditModal />);
    expect(addModal).not.toBeUndefined();
  });
});
