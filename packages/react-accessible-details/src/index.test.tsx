import React from "react";
import { Details, Summary } from "./index";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";

describe(`React Accessible Details`, () => {
  it(`<Details>`, async () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <Details isOpen={true}>
        <Summary>blah</Summary>
        <p>other thing</p>
        text
      </Details>
    );
  });
});
