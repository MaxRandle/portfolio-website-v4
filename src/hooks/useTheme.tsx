import { createContext, useContext, useState } from "react";

export const palettes = [
  "cyenta-pearl",
  "rose-mahogany",
  "fuchsia-aubergine",
  "lime-olive",
  "teal-jade",
] as const;

export type Palette = (typeof palettes)[number];

type Theme = {
  palette: Palette;
};

type ThemeContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContext>({
  setTheme: () => {},
  theme: { palette: "cyenta-pearl" },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>({ palette: "cyenta-pearl" });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
