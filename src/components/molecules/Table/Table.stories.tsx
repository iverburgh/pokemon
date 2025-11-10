import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table';

const meta = {
  title: 'Molecules/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>HP</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Pikachu</TableCell>
          <TableCell>Electric</TableCell>
          <TableCell>35</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Charizard</TableCell>
          <TableCell>Fire/Flying</TableCell>
          <TableCell>78</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
