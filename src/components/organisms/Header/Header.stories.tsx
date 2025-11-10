import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from './Header';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockPokemon = [
  { id: 1, name: 'bulbasaur', displayName: 'Bulbasaur', display: 'Bulbasaur', speciesId: 1 },
  { id: 4, name: 'charmander', displayName: 'Charmander', display: 'Charmander', speciesId: 4 },
  { id: 7, name: 'squirtle', displayName: 'Squirtle', display: 'Squirtle', speciesId: 7 },
  { id: 25, name: 'pikachu', displayName: 'Pikachu', display: 'Pikachu', speciesId: 25 },
];

const mockTypes = [
  { name: 'normal', displayName: 'Normal', display: 'Normal' },
  { name: 'fire', displayName: 'Fire', display: 'Fire' },
  { name: 'water', displayName: 'Water', display: 'Water' },
  { name: 'electric', displayName: 'Electric', display: 'Electric' },
  { name: 'grass', displayName: 'Grass', display: 'Grass' },
];

export const Default: Story = {
  args: {
    allPokemon: mockPokemon,
    allTypes: mockTypes,
  },
};
