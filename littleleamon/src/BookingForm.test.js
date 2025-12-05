test("Renders Booking Form Heading", () => {
  render(<BookingPage />);
  const heading = screen.getByText("Reserve");
  expect(heading).toBeInTheDocument();
});
