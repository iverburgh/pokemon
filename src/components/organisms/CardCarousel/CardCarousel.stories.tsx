import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CardCarousel } from './CardCarousel';

const meta = {
  title: 'Organisms/CardCarousel',
  component: CardCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    cards: { control: 'object' },
  },
} satisfies Meta<typeof CardCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCards = [
  {
    id: '1',
    image_large_url: '/img/pokemon/pikachu.avif',
    name: 'Pikachu',
  },
  {
    id: '2',
    image_large_url: '/img/pokemon/charizard.avif',
    name: 'Charizard',
  },
  {
    id: '3',
    image_large_url: '/img/pokemon/bulbasaur.avif',
    name: 'Bulbasaur',
  },
];

export const Default: Story = {
  args: {
    title: 'Pokemon Cards',
    cards: mockCards,
  },
};

export const SingleCard: Story = {
  args: {
    title: 'Single Card',
    cards: [mockCards[0]],
  },
};
