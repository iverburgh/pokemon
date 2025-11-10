import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './TypeBadge.stories';

const { Default } = composeStories(stories);

describe('TypeBadge', () => {
  it('renders type name', () => {
    const { getByText } = Default.render();
    expect(getByText('Electric')).toBeTruthy();
  });
});
