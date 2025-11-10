import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './NavigationMenu.stories';

const { Default } = composeStories(stories);

describe('NavigationMenu', () => {
  it('renders navigation menu component', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
