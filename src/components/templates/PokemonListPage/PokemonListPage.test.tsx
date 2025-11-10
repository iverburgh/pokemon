import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './PokemonListPage.stories';

const { Default } = composeStories(stories);

describe('PokemonListPage', () => {
  it('renders pokemon list page story placeholder', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
