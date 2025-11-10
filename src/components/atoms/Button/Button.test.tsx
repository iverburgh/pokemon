import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';

const { Default } = composeStories(stories);

describe('Button', () => {
  it('renders button element', () => {
    const { container } = Default.render();
    expect(container.querySelector('button')).toBeTruthy();
  });
});
