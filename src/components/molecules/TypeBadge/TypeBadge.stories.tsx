import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TypeBadge } from './TypeBadge';

const meta = {
  title: 'Molecules/TypeBadge',
  component: TypeBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    displayName: { control: 'text' },
    variant: { control: 'radio', options: ['default', 'efficacy', 'square'] },
    size: { control: 'radio', options: ['default', 'small', 'large'] },
    isLink: { control: 'boolean' },
    factor: { control: 'number' },
  },
} satisfies Meta<typeof TypeBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'electric',
    displayName: 'Electric',
  },
};

export const Fire: Story = {
  args: {
    name: 'fire',
    displayName: 'Fire',
  },
};

export const Water: Story = {
  args: {
    name: 'water',
    displayName: 'Water',
  },
};

export const LargeSize: Story = {
  args: {
    name: 'dragon',
    displayName: 'Dragon',
    size: 'large',
  },
};

export const SmallSize: Story = {
  args: {
    name: 'fairy',
    displayName: 'Fairy',
    size: 'small',
  },
};

export const SquareVariant: Story = {
  args: {
    name: 'psychic',
    displayName: 'Psychic',
    variant: 'square',
  },
};

export const EfficacySuperEffective: Story = {
  args: {
    name: 'water',
    displayName: 'Water',
    variant: 'efficacy',
    factor: 2,
  },
};

export const EfficacyNotVeryEffective: Story = {
  args: {
    name: 'grass',
    displayName: 'Grass',
    variant: 'efficacy',
    factor: 0.5,
  },
};

export const EfficacyNoEffect: Story = {
  args: {
    name: 'normal',
    displayName: 'Normal',
    variant: 'efficacy',
    factor: 0,
  },
};

export const AsButton: Story = {
  args: {
    name: 'fighting',
    displayName: 'Fighting',
    isLink: false,
  },
};

export const Active: Story = {
  args: {
    name: 'ghost',
    displayName: 'Ghost',
    activeState: 'active',
  },
};

export const Inactive: Story = {
  args: {
    name: 'dark',
    displayName: 'Dark',
    activeState: 'inactive',
  },
};
