import Button from ".";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Sample = Template.bind({});

Sample.args = {
  label: "Click!",
  fontSize: 18,
};
