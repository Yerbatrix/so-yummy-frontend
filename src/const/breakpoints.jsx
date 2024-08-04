// od tej zmiennej kerujemy się na tablet i desktop

const breakpoints = {
  tablet: "768px",
  desktopMini: "1020px",
  desktop: "1280px",
};

export const devices = {
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopMini: `(min-width: ${breakpoints.desktopMini})`,
};
