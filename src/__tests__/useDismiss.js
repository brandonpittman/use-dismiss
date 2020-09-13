import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useDismiss from "..";

const TestComponent = () => {
  const [visible, setVisible] = React.useState(false);
  const ref = useDismiss(() => setVisible(false));

  return (
    <div>
      <button onClick={() => setVisible(true)}>Button A</button>
      <p ref={ref} style={{ display: visible ? "block" : "none" }}>
        This is the text
      </p>
      <div>Some other div</div>
    </div>
  );
};

test("should dismiss on {esc}", () => {
  render(<TestComponent />);
  expect(screen.getByRole("button")).toBeInTheDocument();
  userEvent.click(screen.getByRole("button"));
  expect(screen.queryByText("This is the text")).toBeVisible();
  userEvent.type(screen.getByRole("button"), "{esc}");
  expect(screen.queryByText("This is the text")).toHaveStyle({
    display: "none",
  });
});

test("should dismiss on click away", () => {
  render(<TestComponent />);
  expect(screen.getByRole("button")).toBeInTheDocument();
  userEvent.click(screen.getByRole("button"));
  expect(screen.queryByText("This is the text")).toBeVisible();
  userEvent.click(screen.getByText("Some other div"));
  expect(screen.queryByText("This is the text")).toHaveStyle({
    display: "none",
  });
});
