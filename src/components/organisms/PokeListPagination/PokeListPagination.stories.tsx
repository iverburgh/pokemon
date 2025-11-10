import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PokeListPagination } from './PokeListPagination';

const meta = {
  title: 'Organisms/PokeListPagination',
  component: PokeListPagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    numPages: { control: 'number' },
    totalPokemon: { control: 'number' },
  },
} satisfies Meta<typeof PokeListPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 5,
    numPages: 20,
    totalPokemon: 1000,
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    numPages: 20,
    totalPokemon: 1000,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 20,
    numPages: 20,
    totalPokemon: 1000,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    numPages: 3,
    totalPokemon: 150,
  },
};
