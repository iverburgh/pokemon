import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Dialog.stories';

const { Default } = composeStories(stories);

describe('Dialog', () => {
  it('renders dialog component', () => {
    const { container } = Default.render();
    expect(container).toBeTruthy();
  });
});
