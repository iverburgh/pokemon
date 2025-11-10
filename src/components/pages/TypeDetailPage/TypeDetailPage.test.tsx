import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import * as stories from "./TypeDetailPage.stories";

const { Default } = composeStories(stories);

test("renders TypeDetailPage with default story", async () => {
  const { container } = render(<Default />);
  expect(container).toBeTruthy();
});
