import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Command.stories';

const { Default } = composeStories(stories);

describe('Command', () => {
  it('renders command component', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
