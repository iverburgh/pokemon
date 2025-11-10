import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './SlimPokemonCard.stories';

const { Default } = composeStories(stories);

describe('SlimPokemonCard', () => {
  it('renders pokemon title', () => {
    const { getByText } = Default.render();
    expect(getByText('Pikachu')).toBeTruthy();
  });
});
