export const viewportOnce = {
  once: true,
  amount: 0.4,
  margin: "0px 0px -10% 0px",
};

export const easing = [0.22, 1, 0.36, 1];
export const gentleSpring = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

export const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easing },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.55, ease: easing },
};

export const containerStagger = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const quickFadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.42, ease: easing },
};

export const cardPop = {
  whileHover: { y: -6, scale: 1.01 },
  whileTap: { scale: 0.99 },
  transition: { duration: 0.22, ease: easing },
};
