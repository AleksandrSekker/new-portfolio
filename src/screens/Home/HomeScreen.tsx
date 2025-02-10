import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AvatarImage, RightBlockWrapper } from "@/components";

interface HomeScreen {
  firstName: string;
  jobTitle: string;
  subTitle: string;
  image?: string;
}
const HomeScreen = ({ firstName, image, jobTitle, subTitle }: HomeScreen) => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between px-4 text-center xl:px-0'>
      <RightBlockWrapper className='mx-auto mt-4 text-center lg:mx-0'>
        <h2 className='py-2 text-5xl font-medium text-teal-400 dark:text-blue-500 md:text-6xl'>
          {firstName}
        </h2>
        <h3 className='py-2 text-2xl dark:text-white'>{jobTitle}</h3>
        <p className='text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl'>
          {subTitle}
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={"mt-6 mb-8"}
        >
          <Link
            className='rounded-lg bg-blue-400 px-6 py-3 text-lg font-medium text-white outline-none hover:bg-blue-500 focus:outline-none dark:bg-gray-700 hover:dark:bg-gray-900'
            href='/assets/Oleksandr_Sekker_Resume.pdf'
          >
            View Resume
          </Link>
        </motion.button>
      </RightBlockWrapper>
      <div className='lg:block hidden md:mx-auto lg:mx-0'>
        <AvatarImage image={image || "/assets/AvatarSecond.JPEG"} />
      </div>
    </div>
  );
};

export default HomeScreen;
