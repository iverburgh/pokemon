import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Select.stories';

const { Default } = composeStories(stories);

describe('Select', () => {
  it('renders select component', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
