import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CardBanner } from './CardBanner';

const meta = {
  title: 'Atoms/CardBanner',
  component: CardBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['large', undefined] },
    border: { control: 'radio', options: ['sm', 'xs'] },
  },
} satisfies Meta<typeof CardBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '#001',
  },
};

export const Large: Story = {
  args: {
    children: '#025',
    size: 'large',
  },
};

export const SmallBorder: Story = {
  args: {
    children: '#150',
    border: 'xs',
  },
};
