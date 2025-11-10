import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Pokeball } from './Pokeball';

const meta = {
  title: 'Atoms/Pokeball',
  component: Pokeball,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
} satisfies Meta<typeof Pokeball>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-32 h-32',
  },
};

export const Small: Story = {
  args: {
    className: 'w-16 h-16',
  },
};

export const Large: Story = {
  args: {
    className: 'w-64 h-64',
  },
};

export const WithColor: Story = {
  args: {
    className: 'w-32 h-32 text-red-500',
  },
};
