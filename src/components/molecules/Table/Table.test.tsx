import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Table.stories';

const { Default } = composeStories(stories);

describe('Table', () => {
  it('renders table component', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
