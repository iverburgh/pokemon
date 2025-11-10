import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Pokeball.stories';

const { Default } = composeStories(stories);

describe('Pokeball', () => {
  it('renders SVG element', () => {
    const { container } = Default.render();
    expect(container.querySelector('svg')).toBeTruthy();
  });
});
