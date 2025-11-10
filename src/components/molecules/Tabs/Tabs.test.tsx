import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Tabs.stories';

const { Default } = composeStories(stories);

describe('Tabs', () => {
  it('renders tabs component', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
