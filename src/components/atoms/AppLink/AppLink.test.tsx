import { describe, it, expect } from 'vitest';
import { render, screen } from '@storybook/test';
import { AppLink } from './AppLink';

describe('AppLink', () => {
  it('renders children correctly', () => {
    render(<AppLink href="/test">Test Link</AppLink>);
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  it('applies href attribute correctly', () => {
    render(<AppLink href="/test">Test Link</AppLink>);
    const link = screen.getByText('Test Link');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies custom className', () => {
    render(<AppLink href="/test" className="custom-class">Test Link</AppLink>);
    const link = screen.getByText('Test Link');
    expect(link).toHaveClass('custom-class');
  });
});
