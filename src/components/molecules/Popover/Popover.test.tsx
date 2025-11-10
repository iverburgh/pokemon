import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Popover.stories';

const { Default } = composeStories(stories);

describe('Popover', () => {
  it('renders popover component', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
