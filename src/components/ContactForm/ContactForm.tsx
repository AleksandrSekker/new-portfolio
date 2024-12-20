'use client';
import React, { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldError, useForm } from "react-hook-form";
import axios from "axios";
import { schema } from "@/components/ContactForm/schema";
import { Input } from "@/components";
import { PropsContactForm } from "@/components/ContactForm/type";

export const ContactForm = ({
  handleSubState,
  setCloseModal,
}: PropsContactForm) => {

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });
  const { errors } = formState;
  const sendHandler = useCallback(async () => {
    console.log("watch", watch());
    try {
      const formData = watch();
      await axios.post('/api/send-to-discord', formData);

      handleSubState(true);
      setCloseModal();
      setTimeout(() => {
        handleSubState(false);
      }, 3000);
    } catch (e) {
      console.log(e);

    }
  }, [handleSubState, setCloseModal, watch]);

  return (
    <form onSubmit={handleSubmit(sendHandler)}>
      <div className="grid w-full gap-4 py-2 md:grid-cols-2">
        <Input
          title={"Name"}
          placeholder={"Type your name"}
          type={"text"}
          register={register}
          name="name"
          errors={errors.name as FieldError}
          className={"flex flex-col"}
        />
        <Input
          title={"Phone"}
          placeholder={"Type your phone number"}
          type={"text"}
          register={register}
          name="phone"
          errors={errors.phone as FieldError}
          className={"flex flex-col"}
        />
      </div>
      <Input
        title={"Email"}
        placeholder="Type your email"
        type={"text"}
        register={register}
        name="email"
        errors={errors.email as FieldError}
        className={"flex flex-col py-2"}
      />
      <Input
        className="flex flex-col py-2"
        title={"Subject"}
        placeholder={"Type subject"}
        type={"textarea"}
        register={register}
        name="subject"
        errors={errors.subject as FieldError}
      />
      <Input
        className="flex flex-col py-2"
        title={"Message"}
        placeholder={"Type your message"}
        type={"textarea"}
        register={register}
        name="message"
        errors={errors?.message as FieldError}
      />

      <button
        type="submit"
        className="mt-4 w-full rounded-2xl bg-blue-500 p-4 text-gray-100 dark:bg-gray-800"
      >
        {"submit"}
      </button>
    </form>
  );
};
