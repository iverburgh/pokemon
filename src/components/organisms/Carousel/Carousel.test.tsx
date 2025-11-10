import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Carousel.stories';

const { Default } = composeStories(stories);

describe('Carousel', () => {
  it('renders carousel component', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
