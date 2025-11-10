import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './DetailSection.stories';

const { Default } = composeStories(stories);

describe('DetailSection', () => {
  it('renders title banner', () => {
    const { getByText } = Default.render();
    expect(getByText('Stats')).toBeTruthy();
  });

  it('renders children content', () => {
    const { getByText } = Default.render();
    expect(getByText('HP: 45')).toBeTruthy();
  });
});
