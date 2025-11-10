import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ImageWithFallback } from './ImageWithFallback';

const meta = {
  title: 'Atoms/ImageWithFallback',
  component: ImageWithFallback,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof ImageWithFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '/img/pokemon/pikachu.avif',
    alt: 'Pikachu',
    className: 'w-32 h-32',
  },
};

export const WithInvalidSrc: Story = {
  args: {
    src: '/invalid/path.avif',
    alt: 'Not found',
    className: 'w-32 h-32',
  },
};
