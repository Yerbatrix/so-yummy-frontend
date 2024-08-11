export function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.body.className = themeName;
}

export function keepTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    setTheme(theme);
    return;
  }

  const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)");
  if (prefersLightTheme.matches) {
    setTheme("theme-light");
    return;
  }

  setTheme("theme-dark");
}
