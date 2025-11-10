import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardsListPage } from "./CardsListPage";

const meta = {
  title: "Pages/CardsListPage",
  component: CardsListPage,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/cards",
        query: {},
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardsListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    series: [
      {
        name: "Scarlet & Violet",
        sets: [
          {
            id: "sv1",
            name: "Scarlet & Violet Base Set",
            release_date: new Date("2023-03-31"),
            topCards: [
              {
                id: "sv1-1",
                name: "Pikachu",
                image_small_url:
                  "https://images.pokemontcg.io/sv1/1_hires.png",
              },
              {
                id: "sv1-2",
                name: "Charizard",
                image_small_url:
                  "https://images.pokemontcg.io/sv1/2_hires.png",
              },
              {
                id: "sv1-3",
                name: "Mewtwo",
                image_small_url:
                  "https://images.pokemontcg.io/sv1/3_hires.png",
              },
              {
                id: "sv1-4",
                name: "Lucario",
                image_small_url:
                  "https://images.pokemontcg.io/sv1/4_hires.png",
              },
            ],
          },
        ],
      },
    ],
  },
};
