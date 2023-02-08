import React from "react";
import { render } from "@testing-library/react";
import Copyright from './Copyright'
import { MemoryRouter } from "react-router";


it("renders without crashing", function() {
  render(<Copyright />);
});

it("matches snapshot with copyright", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <Copyright
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
