import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DetailSection } from './DetailSection';

const meta = {
  title: 'Molecules/DetailSection',
  component: DetailSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    className: { control: 'text' },
    innerClassName: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DetailSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Stats',
    children: (
      <div>
        <p>HP: 45</p>
        <p>Attack: 49</p>
        <p>Defense: 49</p>
      </div>
    ),
  },
};

export const WithCustomTitle: Story = {
  args: {
    title: <span className="text-blue-500">Abilities</span>,
    children: (
      <div>
        <p>Overgrow</p>
        <p>Chlorophyll</p>
      </div>
    ),
  },
};

export const LongContent: Story = {
  args: {
    title: 'Evolution Chain',
    children: (
      <div className="flex flex-col gap-2">
        <p>Bulbasaur → Ivysaur → Venusaur</p>
        <p>Charmander → Charmeleon → Charizard</p>
        <p>Squirtle → Wartortle → Blastoise</p>
      </div>
    ),
  },
};
