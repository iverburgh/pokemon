import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TypeDetailPage } from "./TypeDetailPage";

const meta = {
  title: "Pages/TypeDetailPage",
  component: TypeDetailPage,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/types/fire",
        query: {},
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TypeDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pokeType: {
      id: 10,
      name: "fire",
      displayName: "Fire",
    },
    effectiveAgainst: [
      { name: "grass", displayName: "Grass", damageFactor: 200 },
      { name: "ice", displayName: "Ice", damageFactor: 200 },
      { name: "bug", displayName: "Bug", damageFactor: 200 },
      { name: "steel", displayName: "Steel", damageFactor: 200 },
      { name: "fire", displayName: "Fire", damageFactor: 50 },
      { name: "water", displayName: "Water", damageFactor: 50 },
      { name: "rock", displayName: "Rock", damageFactor: 50 },
      { name: "dragon", displayName: "Dragon", damageFactor: 50 },
    ],
    effectiveFrom: [
      { name: "water", displayName: "Water", damageFactor: 200 },
      { name: "ground", displayName: "Ground", damageFactor: 200 },
      { name: "rock", displayName: "Rock", damageFactor: 200 },
      { name: "fire", displayName: "Fire", damageFactor: 50 },
      { name: "grass", displayName: "Grass", damageFactor: 50 },
      { name: "ice", displayName: "Ice", damageFactor: 50 },
      { name: "bug", displayName: "Bug", damageFactor: 50 },
      { name: "steel", displayName: "Steel", damageFactor: 50 },
      { name: "fairy", displayName: "Fairy", damageFactor: 50 },
    ],
    allPokemon: [
      {
        id: 4,
        name: "charmander",
        pokemon_species_id: 4,
        speciesName: "Charmander",
        types: [{ name: "fire", displayName: "Fire" }],
      },
      {
        id: 5,
        name: "charmeleon",
        pokemon_species_id: 5,
        speciesName: "Charmeleon",
        types: [{ name: "fire", displayName: "Fire" }],
      },
      {
        id: 6,
        name: "charizard",
        pokemon_species_id: 6,
        speciesName: "Charizard",
        types: [
          { name: "fire", displayName: "Fire" },
          { name: "flying", displayName: "Flying" },
        ],
      },
    ],
  },
};
