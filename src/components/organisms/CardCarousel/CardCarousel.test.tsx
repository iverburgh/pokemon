import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './CardCarousel.stories';

const { Default } = composeStories(stories);

describe('CardCarousel', () => {
  it('renders dialog component', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
