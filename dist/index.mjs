// src/components/Button/Button.tsx
import React from "react";

// src/components/Button/Button.module.css
var Button_default = {};

// src/components/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = React.forwardRef(
  ({ variant = "primary", size = "md", className, children, ...rest }, ref) => {
    const variantClass = Button_default[variant];
    const sizeClass = Button_default[size];
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className: `${Button_default.button} ${variantClass} ${sizeClass} ${className || ""}`,
        ...rest,
        children
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ThemeProvider/ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { jsx as jsx2 } from "react/jsx-runtime";
var ThemeProvider = ({ children }) => {
  return /* @__PURE__ */ jsx2(NextThemesProvider, { attribute: "data-theme", defaultTheme: "light", enableSystem: true, children });
};
export {
  Button,
  ThemeProvider
};
//# sourceMappingURL=index.mjs.map