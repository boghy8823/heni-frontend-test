import userEvent from "@testing-library/user-event";
import { UseLocalStorageExample } from "./useLocalStorageExample";
import { render, screen } from "@testing-library/react";

describe("Given a Custom useLocalStorage hook", () => {
  describe("It allows you to:", () => {
    beforeEach(() => {
      render(<UseLocalStorageExample />);
    });

    test("Read items from the localstorage", () => {
      // Testing dynamic content so will be using `getByTestId` 
      expect(screen.getByTestId("localstorage-test")).toBeInTheDocument();
      expect(screen.getByTestId("localstorage-test")).toHaveTextContent('test');
    });

    describe("Add items to localstorage on user prompt", () => {
      beforeEach(async () => {
        jest.clearAllMocks();
        await userEvent.click(screen.getByTestId("localstorage-set-test"));
      });

      test("Then the item will reflected in the localstorage", () => {
        expect(screen.getByTestId("localstorage-set-test")).toBeInTheDocument();
        expect(screen.getByTestId("localstorage-set-test")).toHaveTextContent('test2');
      });
    });
  });
});
