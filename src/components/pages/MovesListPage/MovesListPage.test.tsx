import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as stories from "./MovesListPage.stories";

const { Default } = composeStories(stories);

describe("MovesListPage", () => {
  it("renders Default story", async () => {
    const { container } = render(<Default />);
    expect(container).toBeTruthy();
  });
});
