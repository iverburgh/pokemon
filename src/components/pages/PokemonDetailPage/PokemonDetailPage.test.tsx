import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as stories from "./PokemonDetailPage.stories";

const { Placeholder } = composeStories(stories);

describe("PokemonDetailPage", () => {
  it("renders Placeholder story", async () => {
    const { container } = render(<Placeholder />);
    expect(container).toBeTruthy();
  });
});
