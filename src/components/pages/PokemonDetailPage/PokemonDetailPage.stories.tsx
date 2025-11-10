import type { Meta, StoryObj } from "@storybook/nextjs-vite";

// Note: This page component uses sub-components (PokemonDetails, PokemonStats, etc.) 
// that are still in src/app and have server-side dependencies (Prisma types, database queries).
// Therefore, we cannot create a full Storybook story without extracting those components first.
// This is a placeholder story to maintain the pattern.

const meta = {
  title: "Pages/PokemonDetailPage",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Placeholder story - component requires server-side sub-components
export const Placeholder: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">PokemonDetailPage</h1>
      <p className="text-muted-foreground">
        This page component uses sub-components with server-side dependencies
        (PokemonDetails, PokemonStats, PokemonMoves, PokemonEvolutions, PokemonTcgCards).
        To create a full story, these sub-components would need to be extracted from
        src/app to src/components first.
      </p>
      <p className="text-muted-foreground mt-4">
        The component is successfully integrated in the route handler at
        src/app/pokemon/[pokemon]/page.tsx
      </p>
    </div>
  ),
};
