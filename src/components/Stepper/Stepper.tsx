import style from "./style.module.css";
import { motion } from "framer-motion";
import ArrowDownSvg from "@/assets/arrowDown.svg";
import ArrowTopSvg from "@/assets/arrowTop.svg";
import { useStep } from "@/context/StepProvider/StepProvider";
import { Footer } from "@/components";
import { StepperProps } from "@/components/types";
import { stepData } from "@/constants/general";
import clsx from "clsx";
export const Stepper = ({ activeStep, setActiveStep }: StepperProps) => {
  const { handleStepChange } = useStep();

  return (
    <div className={style.stepper}>
      {activeStep !== 4 ? (
        <motion.button
          className={clsx(
            style.stepper__button,
            "text-foreground-light dark:text-white",
          )}
          key={activeStep}
          initial={{
            y: "100%",
          }}
          animate={{
            y: 0,
            transition: { delay: activeStep === 0 ? 0 : 0, duration: 1 },
          }}
          exit={{
            y: "100%",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          onClick={() => setActiveStep(activeStep + 1)}
        >
          <motion.p
            animate={{ y: ["10%", "-10%", "10%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
          >
            {stepData.map((data) => data.step === activeStep && data.label)}
          </motion.p>
          <div className={"stroke-foreground-light dark:stroke-white"}>
            <ArrowDownSvg />
          </div>
        </motion.button>
      ) : (
        <motion.div
          key={activeStep}
          initial={{
            y: "100%",
          }}
          animate={{
            y: 0,
          }}
          exit={{
            y: "100%",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className={style.scroll__to__top__block}
            initial={{
              opacity: 0.5,
            }}
            whileHover={{
              opacity: 1,
            }}
            exit={{
              opacity: 0.5,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            onClick={() => handleStepChange(0)}
          >
            <div
              className={clsx(
                style.scroll__to__top__image__wrapper,

                "stroke-white bg-blue-500 dark:bg-white",
              )}
            >
              <ArrowTopSvg />
            </div>
            <p
              className={clsx(
                style.scroll__to__top__text,
                "text-blue-500 dark:text-white",
              )}
            >
              Scroll to top
            </p>
          </motion.div>
          <Footer />
        </motion.div>
      )}
    </div>
  );
};
