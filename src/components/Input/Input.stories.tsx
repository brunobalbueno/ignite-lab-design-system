import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, InputRootProps } from "./Input";

export default {
    title: "Components/TextInput",
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your email" />,
        ],
    },
    argTypes: {
        children: {
            table: { disable: true },
        },
    },
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {};
export const WithoutIcon: StoryObj<InputRootProps> = {
    args: {
        children: <TextInput.Input placeholder="Type your email" />,
    },
};
