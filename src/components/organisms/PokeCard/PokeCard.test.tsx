import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './PokeCard.stories';

const { Default } = composeStories(stories);

describe('PokeCard', () => {
  it('renders pokemon name', () => {
    const { getByText } = Default.render();
    expect(getByText('Pikachu')).toBeTruthy();
  });
});
