import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SubsectionTitle } from './SubsectionTitle';

const meta = {
  title: 'Atoms/SubsectionTitle',
  component: SubsectionTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof SubsectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Stats',
  },
};

export const WithDescription: Story = {
  args: {
    children: 'Evolution Chain',
    description: 'The evolution stages of this Pokemon',
  },
};

export const CustomClassName: Story = {
  args: {
    children: 'Abilities',
    className: 'text-blue-600',
  },
};
