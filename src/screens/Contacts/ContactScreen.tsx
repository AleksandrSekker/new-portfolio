"use client";

import React from "react";
import { Button } from "@/components";
import { useModal } from "@/context/ModalContext/ModalContext";

const ContactScreen = () => {
  const { handleModalState } = useModal();

  return (
    <div className="m-auto w-full max-w-screen-xl px-2 py-2 pb-32 md:pb-2">
      <div className="grid gap-8">
        <div className="space-y-4">
          <div>
            <p className="font-bold text-lg text-blue-500 dark:text-white">
              Email
            </p>
            <a
              href="mailto:oleksandr.sekker@gmail.com"
              className="text-blue-500 hover:underline"
            >
              oleksandr.sekker@gmail.com
            </a>
          </div>
          <div>
            <p className="font-bold text-lg text-blue-500 dark:text-white">
              Telegram
            </p>
            <a
              href="https://t.me/sekk_er"
              className="text-blue-500 hover:underline"
            >
              sekk_er
            </a>
          </div>
          <div>
            <p className="font-bold text-lg text-blue-500 dark:text-white">
              Discord
            </p>
            <a
              href="https://discordapp.com/users/613024264706064390"
              className="text-blue-500 hover:underline"
            >
              oleksandr_sekker
            </a>
          </div>
        </div>
        <Button
          label={"Write message"}
          onClick={() => {
            handleModalState(true);
          }}
        />
      </div>
    </div>
  );
};

export default ContactScreen;
