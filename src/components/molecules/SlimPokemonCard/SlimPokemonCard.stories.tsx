import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SlimPokemonCard } from './SlimPokemonCard';

const meta = {
  title: 'Molecules/SlimPokemonCard',
  component: SlimPokemonCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    pokemonName: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof SlimPokemonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Pikachu',
    pokemonName: 'pikachu',
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Charizard',
    pokemonName: 'charizard',
    description: 'Fire/Flying type',
  },
};

export const LongText: Story = {
  args: {
    title: 'Mega Charizard X',
    pokemonName: 'charizard-mega-x',
    description: 'A very powerful fire and dragon type Pokemon with incredible stats',
  },
};
