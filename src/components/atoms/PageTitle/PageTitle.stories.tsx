import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PageTitle } from './PageTitle';

const meta = {
  title: 'Atoms/PageTitle',
  component: PageTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Pokemon',
  },
};

export const WithDescription: Story = {
  args: {
    children: 'All Pokemon',
    description: 'Browse through all available Pokemon',
  },
};

export const CustomClassName: Story = {
  args: {
    children: 'Types',
    className: 'text-blue-500',
  },
};
