import type { Meta, StoryFn } from "@storybook/react";
import { Input } from "@/components";
import { useForm, FormProvider, type FieldError } from "react-hook-form";
import React from "react";
import type { InputProps } from "../types";

interface TemplateArgs extends InputProps {
  name: string;
}

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<TemplateArgs> = (args: TemplateArgs) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <Input
          {...args}
          register={methods.register}
          errors={methods.formState.errors[args.name] as FieldError}
        />
      </form>
    </FormProvider>
  );
};

export const ContactFormComponent = Template.bind({});

ContactFormComponent.args = {
  title: "Name",
  placeholder: "Type your name",
  type: "text",
  name: "name",
  errors: undefined,
  className: "flex flex-col",
};

ContactFormComponent.argTypes = {
  type: {
    control: {
      type: "select",
      options: ["text", "email", "password"],
    },
  },
  name: {
    control: "text",
  },
  placeholder: {
    control: "text",
  },
  className: {
    control: "text",
  },
  title: {
    control: "text",
  },
  errors: {
    control: {
      type: "object",
    },
  },
};
