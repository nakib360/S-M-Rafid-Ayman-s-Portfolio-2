export const viewportOnce = {
  once: true,
  amount: 0.4,
  margin: "0px 0px -10% 0px",
};

export const easing = [0.22, 1, 0.36, 1];

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
