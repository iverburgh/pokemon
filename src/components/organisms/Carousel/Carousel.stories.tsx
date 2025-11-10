import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Carousel, CarouselContent, CarouselControls, CarouselItem } from './Carousel';

const meta = {
  title: 'Organisms/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="p-8 bg-blue-100 rounded">Slide 1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-8 bg-green-100 rounded">Slide 2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-8 bg-red-100 rounded">Slide 3</div>
          </CarouselItem>
        </CarouselContent>
        <CarouselControls />
      </Carousel>
    </div>
  ),
};
