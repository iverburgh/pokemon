import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PokeCard } from './PokeCard';

const meta = {
  title: 'Organisms/PokeCard',
  component: PokeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    speciesId: { control: 'number' },
    name: { control: 'text' },
    speciesName: { control: 'text' },
    formName: { control: 'text' },
    types: { control: 'object' },
    isLink: { control: 'boolean' },
    isLarge: { control: 'boolean' },
    className: { control: 'text' },
    noViewTransition: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PokeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base story with all required props
export const Default: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
  },
};

// Without species ID
export const WithoutSpeciesId: Story = {
  args: {
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
  },
};

// With form name
export const WithFormName: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    formName: 'Alola Form',
    types: [{ name: 'electric', displayName: 'Electric' }],
  },
};

// Multiple types
export const MultipleTypes: Story = {
  args: {
    speciesId: 6,
    name: 'charizard',
    speciesName: 'Charizard',
    types: [
      { name: 'fire', displayName: 'Fire' },
      { name: 'flying', displayName: 'Flying' },
    ],
  },
};

// As link (interactive)
export const AsLink: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLink: true,
  },
};

// Large size
export const Large: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLarge: true,
  },
};

// Large with form name
export const LargeWithFormName: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    formName: 'Alola Form',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLarge: true,
  },
};

// Large with multiple types
export const LargeMultipleTypes: Story = {
  args: {
    speciesId: 6,
    name: 'charizard',
    speciesName: 'Charizard',
    types: [
      { name: 'fire', displayName: 'Fire' },
      { name: 'flying', displayName: 'Flying' },
    ],
    isLarge: true,
  },
};

// With custom className
export const WithCustomClassName: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    className: 'opacity-75',
  },
};

// No view transition
export const NoViewTransition: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    noViewTransition: true,
  },
};

// Link + Large
export const LinkAndLarge: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLink: true,
    isLarge: true,
  },
};

// All features combined (without speciesId)
export const AllFeaturesNoSpeciesId: Story = {
  args: {
    name: 'charizard',
    speciesName: 'Charizard',
    formName: 'Mega X',
    types: [
      { name: 'fire', displayName: 'Fire' },
      { name: 'dragon', displayName: 'Dragon' },
    ],
    isLink: true,
    isLarge: true,
    noViewTransition: true,
  },
};

// Complete card with all features
export const Complete: Story = {
  args: {
    speciesId: 6,
    name: 'charizard-mega-x',
    speciesName: 'Charizard',
    formName: 'Mega X',
    types: [
      { name: 'fire', displayName: 'Fire' },
      { name: 'dragon', displayName: 'Dragon' },
    ],
    isLink: true,
    isLarge: true,
  },
};

// Form name only (no species ID)
export const FormNameNoSpeciesId: Story = {
  args: {
    name: 'pikachu',
    speciesName: 'Pikachu',
    formName: 'Cosplay',
    types: [{ name: 'electric', displayName: 'Electric' }],
  },
};

// Multiple types without link
export const MultipleTypesNoLink: Story = {
  args: {
    speciesId: 6,
    name: 'charizard',
    speciesName: 'Charizard',
    types: [
      { name: 'fire', displayName: 'Fire' },
      { name: 'flying', displayName: 'Flying' },
    ],
    isLink: false,
  },
};

// Large without species ID
export const LargeNoSpeciesId: Story = {
  args: {
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLarge: true,
  },
};

// Form name + multiple types
export const FormNameMultipleTypes: Story = {
  args: {
    speciesId: 6,
    name: 'charizard-mega-x',
    speciesName: 'Charizard',
    formName: 'Mega X',
    types: [
      { name: 'fire', displayName: 'Fire' },
      { name: 'dragon', displayName: 'Dragon' },
    ],
  },
};

// Form name + large + multiple types
export const FormNameLargeMultipleTypes: Story = {
  args: {
    speciesId: 6,
    name: 'charizard-mega-x',
    speciesName: 'Charizard',
    formName: 'Mega X',
    types: [
      { name: 'fire', displayName: 'Fire' },
      { name: 'dragon', displayName: 'Dragon' },
    ],
    isLarge: true,
  },
};

// Link + no view transition
export const LinkNoViewTransition: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLink: true,
    noViewTransition: true,
  },
};

// Large + no view transition
export const LargeNoViewTransition: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLarge: true,
    noViewTransition: true,
  },
};

// Form name + link
export const FormNameLink: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    formName: 'Alola Form',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLink: true,
  },
};

// Form name + large
export const FormNameLarge: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    formName: 'Alola Form',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLarge: true,
  },
};

// Form name + link + large
export const FormNameLinkLarge: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    formName: 'Alola Form',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLink: true,
    isLarge: true,
  },
};

// Multiple types + large
export const MultipleTypesLarge: Story = {
  args: {
    speciesId: 6,
    name: 'charizard',
    speciesName: 'Charizard',
    types: [
      { name: 'fire', displayName: 'Fire' },
      { name: 'flying', displayName: 'Flying' },
    ],
    isLarge: true,
  },
};

// Multiple types + link
export const MultipleTypesLink: Story = {
  args: {
    speciesId: 6,
    name: 'charizard',
    speciesName: 'Charizard',
    types: [
      { name: 'fire', displayName: 'Fire' },
      { name: 'flying', displayName: 'Flying' },
    ],
    isLink: true,
  },
};

// Multiple types + link + large
export const MultipleTypesLinkLarge: Story = {
  args: {
    speciesId: 6,
    name: 'charizard',
    speciesName: 'Charizard',
    types: [
      { name: 'fire', displayName: 'Fire' },
      { name: 'flying', displayName: 'Flying' },
    ],
    isLink: true,
    isLarge: true,
  },
};

// Link + custom className
export const LinkCustomClassName: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLink: true,
    className: 'opacity-90',
  },
};

// Large + custom className
export const LargeCustomClassName: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLarge: true,
    className: 'opacity-90',
  },
};

// Everything except speciesId
export const MinimalWithAllOptions: Story = {
  args: {
    name: 'pikachu',
    speciesName: 'Pikachu',
    formName: 'Partner',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLink: true,
    isLarge: true,
    className: 'shadow-lg',
    noViewTransition: true,
  },
};

// Single type variations
export const SingleTypeNoLink: Story = {
  args: {
    speciesId: 25,
    name: 'pikachu',
    speciesName: 'Pikachu',
    types: [{ name: 'electric', displayName: 'Electric' }],
    isLink: false,
  },
};

// Different Pokemon examples for visual variety
export const Bulbasaur: Story = {
  args: {
    speciesId: 1,
    name: 'bulbasaur',
    speciesName: 'Bulbasaur',
    types: [
      { name: 'grass', displayName: 'Grass' },
      { name: 'poison', displayName: 'Poison' },
    ],
    isLink: true,
  },
};

export const Squirtle: Story = {
  args: {
    speciesId: 7,
    name: 'squirtle',
    speciesName: 'Squirtle',
    types: [{ name: 'water', displayName: 'Water' }],
    isLink: true,
  },
};

export const Mewtwo: Story = {
  args: {
    speciesId: 150,
    name: 'mewtwo',
    speciesName: 'Mewtwo',
    types: [{ name: 'psychic', displayName: 'Psychic' }],
    isLink: true,
    isLarge: true,
  },
};

export const MewtwoMegaX: Story = {
  args: {
    speciesId: 150,
    name: 'mewtwo-mega-x',
    speciesName: 'Mewtwo',
    formName: 'Mega X',
    types: [
      { name: 'psychic', displayName: 'Psychic' },
      { name: 'fighting', displayName: 'Fighting' },
    ],
    isLink: true,
    isLarge: true,
  },
};
