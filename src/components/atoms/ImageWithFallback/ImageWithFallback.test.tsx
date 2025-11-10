import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './ImageWithFallback.stories';

const { Default } = composeStories(stories);

describe('ImageWithFallback', () => {
  it('renders image element', () => {
    const { container } = Default.render();
    expect(container.querySelector('img')).toBeTruthy();
  });
});
