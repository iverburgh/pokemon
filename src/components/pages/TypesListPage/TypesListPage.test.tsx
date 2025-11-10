import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './TypesListPage.stories';

const { Default } = composeStories(stories);

describe('TypesListPage', () => {
  it('renders Default story', async () => {
    const { container } = render(<Default />);
    await Default.play?.({ canvasElement: container });
    expect(container).toBeTruthy();
  });
});
