import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
};
export const ThankYouModal = ({
  title = "Thank you for your message. ",
  subtitle = "I will contact you soon!",
}: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex  flex-col items-center justify-center text-gray-700">
      <div className="fixed left-0 top-0 h-full  w-full animate-fadeIn bg-black bg-opacity-50 duration-500 ease-in"></div>
      <div className="z-50 w-full max-w-[315px] rounded-lg bg-white p-8 text-center shadow-md">
        <div className="text-3xl font-bold leading-10">{title}</div>
        <div className="mb-0 mt-4 font-medium">{subtitle}</div>
      </div>
    </div>
  );
};
