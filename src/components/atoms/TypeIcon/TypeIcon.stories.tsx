import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TypeIcon } from './TypeIcon';

const meta = {
  title: 'Atoms/TypeIcon',
  component: TypeIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof TypeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bug: Story = {
  args: {
    name: 'bug',
    className: 'w-8 h-8',
  },
};

export const Fire: Story = {
  args: {
    name: 'fire',
    className: 'w-8 h-8',
  },
};

export const Water: Story = {
  args: {
    name: 'water',
    className: 'w-8 h-8',
  },
};

export const Electric: Story = {
  args: {
    name: 'electric',
    className: 'w-8 h-8',
  },
};

export const Large: Story = {
  args: {
    name: 'dragon',
    className: 'w-16 h-16',
  },
};
