import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Card.stories';

const { Default } = composeStories(stories);

describe('Card', () => {
  it('renders card element', () => {
    const { container } = Default.render();
    expect(container.querySelector('[data-slot="card"]')).toBeTruthy();
  });
});
