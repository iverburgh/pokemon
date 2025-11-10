import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './PokeListPagination.stories';

const { Default } = composeStories(stories);

describe('PokeListPagination', () => {
  it('renders pagination controls', () => {
    const { container } = Default.render();
    expect(container.querySelector('.bg-background')).toBeTruthy();
  });
});
