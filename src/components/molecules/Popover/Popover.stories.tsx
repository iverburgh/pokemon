import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

const meta = {
  title: 'Molecules/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Open Popover</button>
      </PopoverTrigger>
      <PopoverContent>
        <p>This is popover content.</p>
      </PopoverContent>
    </Popover>
  ),
};
