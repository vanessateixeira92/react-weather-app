import { render, screen } from "@testing-library/react";
import App from "./App";

// Evita carregar o Weather e fazer pedidos à API durante este teste
jest.mock("./Weather", () => {
  return function MockWeather() {
    return <div>Nimbusly Weather Component</div>;
  };
});

test("renders the Nimbusly application", () => {
  render(<App />);

  expect(screen.getByText("Nimbusly Weather Component")).toBeInTheDocument();

  expect(
    screen.getByText(/This project was coded by Vanessa Teixeira/i),
  ).toBeInTheDocument();
});
