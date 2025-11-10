import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './TypeIcon.stories';

const { Bug } = composeStories(stories);

describe('TypeIcon', () => {
  it('renders SVG element', () => {
    const { container } = Bug.render();
    expect(container.querySelector('svg')).toBeTruthy();
  });
});
