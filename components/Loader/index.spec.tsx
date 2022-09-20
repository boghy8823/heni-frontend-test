import { Loader } from ".";
import { render, screen } from "@testing-library/react";

const baseProps = {
  open: true
};

describe("Given a Loader Component", () => {
  describe("When it is not loading", () => {
    describe("When it is rendered with minimal props", () => {
      beforeEach(() => {
        render(<Loader {...baseProps} />);
      });

      test("Then the loader should be rendered correctly", () => {
        expect(screen.getByTestId("backdrop-test")).toBeInTheDocument();
      });
    });
  });
});
