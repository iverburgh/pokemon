import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TypesListPage } from './TypesListPage';

const meta = {
  title: 'Pages/TypesListPage',
  component: TypesListPage,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/types',
        query: {},
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TypesListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockAllTypes = [
  { id: 1, name: 'normal', displayName: 'Normal' },
  { id: 2, name: 'fighting', displayName: 'Fighting' },
  { id: 3, name: 'flying', displayName: 'Flying' },
  { id: 4, name: 'poison', displayName: 'Poison' },
  { id: 5, name: 'ground', displayName: 'Ground' },
  { id: 6, name: 'rock', displayName: 'Rock' },
];

const mockAllPokemon = [
  {
    name: 'bulbasaur',
    pokemon_v2_pokemonspecies: {
      id: 1,
      pokemon_v2_pokemonspeciesname: [
        { id: 1, pokemon_species_id: 1, name: 'Bulbasaur', language_id: 9, genus: 'Seed Pokémon' }
      ],
    },
    pokemon_v2_pokemonform: [],
    pokemon_v2_pokemontype: [
      {
        pokemon_v2_type: {
          name: 'grass',
          pokemon_v2_typename: [
            { id: 1, name: 'Grass', language_id: 9, type_id: 12 }
          ],
        },
      },
    ],
  },
];

export const Default: Story = {
  args: {
    allTypes: mockAllTypes,
    allPokemon: mockAllPokemon,
  },
};
