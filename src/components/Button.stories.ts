// import { fn } from '@storybook/test'
import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "danger", "warning", "success"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const variant: Story = {
  args: {
    variant: "primary",
  },
};
