import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import HomeSection from "../HomeSection.js";

afterEach(() => {
  cleanup();
});

test("HomeSection is rendered", () => {
    render(<HomeSection />) 
    const homeBackgroundImage = screen.getByTestId("home-background-image");
    expect(homeBackgroundImage).toBeInTheDocument();
});
