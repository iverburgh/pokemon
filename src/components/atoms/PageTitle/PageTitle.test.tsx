import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './PageTitle.stories';

const { Default } = composeStories(stories);

describe('PageTitle', () => {
  it('renders title text', () => {
    const { getByText } = Default.render();
    expect(getByText('Pokemon')).toBeTruthy();
  });
});
