import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Pages/PokemonListPage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Note: PokemonListPage is a server component that requires database access
// This story serves as a placeholder and documentation
export const Default: Story = {
  render: () => (
    <div className="p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">PokemonListPage</h2>
        <p className="text-gray-500 mb-4">
          This is a server component that requires database access.
        </p>
        <p className="text-sm text-gray-400">
          It fetches Pokémon data from the database and renders a paginated list.
          <br />
          Cannot be fully rendered in Storybook without a database connection.
        </p>
      </div>
    </div>
  ),
};
