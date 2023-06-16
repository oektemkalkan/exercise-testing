import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Nav players={[]} />);
  const playerNav = screen.getByRole("link", { name: "Play" });
  const HistoryNav = screen.getByRole("link", { name: "History" });
  expect(playNav).toBeInTheDocument();
  expect(HistoryNav).toBeInTheDocument();
});
