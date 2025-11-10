import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MoveDetailPage } from "./MoveDetailPage";

const meta = {
  title: "Pages/MoveDetailPage",
  component: MoveDetailPage,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/moves/flamethrower",
        query: {},
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MoveDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    moveName: "Flamethrower",
    power: 90,
    accuracy: 100,
    pp: 15,
    effects: [
      "Inflicts regular damage. Has a 10% chance to burn the target.",
    ],
    pokemonLearnedFromLevelUp: [
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
    ],
    pokemonLearnedFromTMHM: [
      {
        id: 1,
        name: "bulbasaur",
        pokemon_species_id: 1,
        speciesName: "Bulbasaur",
        types: [
          { name: "grass", displayName: "Grass" },
          { name: "poison", displayName: "Poison" },
        ],
      },
    ],
  },
};
