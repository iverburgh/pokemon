import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './SubsectionTitle.stories';

const { Default } = composeStories(stories);

describe('SubsectionTitle', () => {
  it('renders title text', () => {
    const { getByText } = Default.render();
    expect(getByText('Stats')).toBeTruthy();
  });
});
