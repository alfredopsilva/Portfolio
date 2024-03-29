import { motion } from "framer-motion";

const MobileHome = () => {
  const incomeAnimation = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="open"
      exit="exit"
      className="min-h-90 text-left text-3xl sm:text-4xl md:hidden dark:text-offwhite"
    >
      <div className="overflow-hidden">
        <motion.p variants={incomeAnimation}>Hi, there!</motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.p variants={incomeAnimation} className="mt-5">
          {" "}
          I'm Alfredo, a{" "}
          <span className="text-accentColor dark:text-darkAccentColor">
            Software Developer
          </span>
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.p variants={incomeAnimation} className="mt-5">
          {" "}
          Dedicated to{" "}
          <span className="text-accentColor dark:text-darkAccentColor">
            solving problems
          </span>{" "}
          through{" "}
          <span className="text-accentColor dark:text-darkAccentColor">
            code
          </span>
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.p variants={incomeAnimation} className="mt-5">
          {" "}
          I'm currently based in{" "}
          <span className="text-accentColor dark:text-darkAccentColor">
            Montreal
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default MobileHome;
