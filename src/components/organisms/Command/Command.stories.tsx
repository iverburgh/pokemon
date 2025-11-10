import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './Command';

const meta = {
  title: 'Organisms/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-96">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Pikachu</CommandItem>
          <CommandItem>Charizard</CommandItem>
          <CommandItem>Bulbasaur</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
