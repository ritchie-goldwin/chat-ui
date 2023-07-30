import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);
const theme = fullConfig.theme;
const colors = theme?.colors ?? ({} as any);
const breakPoints = fullConfig.theme?.screens ?? ({} as any);

export { theme, colors, breakPoints };
