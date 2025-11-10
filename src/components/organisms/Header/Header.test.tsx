import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Header.stories';

const { Default } = composeStories(stories);

describe('Header', () => {
  it('renders header component', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
