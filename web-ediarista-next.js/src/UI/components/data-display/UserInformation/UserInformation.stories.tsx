import { ComponentMeta, ComponentStory } from "@storybook/react";

import UserInformation from "./UserInformation";

export default {
  title: "data-display/UserInformation",
  component: UserInformation,
} as ComponentMeta<typeof UserInformation>;

const Template: ComponentStory<typeof UserInformation> = (args) => (
  <UserInformation {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: "Levi Aguina",
  picture: "https://xsgames.co/randomusers/assets/avatars/male/47.jpg",
  rating: 5,
  description: "Construtor",
  isRating: true,
};
