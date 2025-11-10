import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './CardBanner.stories';

const { Default, Large, SmallBorder } = composeStories(stories);

describe('CardBanner', () => {
  it('renders with default props', () => {
    const { container } = Default.render();
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByText } = Default.render();
    expect(getByText('#001')).toBeTruthy();
  });
});
