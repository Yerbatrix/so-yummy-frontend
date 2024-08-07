// od tej zmiennej kerujemy się na tablet i desktop

const breakpoints = {
  tablet: "768px",
  desktop: "1280px",
};

export const devices = {
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
};
