import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { evidence } from "../content/evidence";
import { InterviewBlock } from "./InterviewBlock";

it("renders the controller interview with the research label", () => {
  render(<InterviewBlock />);
  expect(screen.getByText(evidence.interviewRole)).toBeInTheDocument();
  expect(screen.getByText(evidence.turns[0].question)).toBeInTheDocument();
  expect(screen.getByText(evidence.label)).toBeInTheDocument();
  expect(screen.queryByText(evidence.turns[7].question)).not.toBeInTheDocument();
});
