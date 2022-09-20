import { ShipInfo } from ".";
import { render, screen } from "@testing-library/react";

const baseProps = {
  image: "image",
  name: "name",
  model: "model",
  description: "description",
};

describe("Given a ShipInfo Component", () => {
  describe("When it is not loading", () => {
    describe("When it is rendered with minimal props", () => {
      beforeEach(() => {
        render(<ShipInfo {...baseProps} />);
      });

      test("Then the image should be rendered correctly", () => {
        expect(screen.getByTestId("ship-image")).toBeInTheDocument();
      });

      test("Then the name should be rendered correctly", () => {
        expect(screen.getByText("name")).toBeInTheDocument();
      });

      test("Then the model should be rendered correctly", () => {
        expect(screen.getByText("model")).toBeInTheDocument();
      });

      test("Then the description should be rendered correctly", () => {
        expect(screen.getByText("description")).toBeInTheDocument();
      });
    });
  });
});
