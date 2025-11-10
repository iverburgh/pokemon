import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MovesListPage } from "./MovesListPage";

const meta = {
  title: "Pages/MovesListPage",
  component: MovesListPage,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/moves",
        query: {},
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MovesListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movesByType: [
      {
        type: "10",
        typeName: "Fire",
        moves: [
          {
            id: 1,
            name: "fire-punch",
            displayName: "Fire Punch",
            power: 75,
            accuracy: 100,
            pp: 15,
            damageClassName: "physical",
          },
          {
            id: 2,
            name: "flamethrower",
            displayName: "Flamethrower",
            power: 90,
            accuracy: 100,
            pp: 15,
            damageClassName: "special",
          },
          {
            id: 3,
            name: "will-o-wisp",
            displayName: "Will-O-Wisp",
            power: null,
            accuracy: 85,
            pp: 15,
            damageClassName: "status",
          },
        ],
      },
      {
        type: "11",
        typeName: "Water",
        moves: [
          {
            id: 4,
            name: "hydro-pump",
            displayName: "Hydro Pump",
            power: 110,
            accuracy: 80,
            pp: 5,
            damageClassName: "special",
          },
          {
            id: 5,
            name: "surf",
            displayName: "Surf",
            power: 90,
            accuracy: 100,
            pp: 15,
            damageClassName: "special",
          },
        ],
      },
    ],
  },
};
