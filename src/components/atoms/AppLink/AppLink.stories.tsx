import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AppLink } from './AppLink';

const meta = {
  title: 'Atoms/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/pokemon',
    children: 'View Pokemon',
  },
};

export const WithCustomClass: Story = {
  args: {
    href: '/types',
    children: 'View Types',
    className: 'text-blue-500 underline',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://pokeapi.co',
    children: 'PokeAPI',
  },
};
