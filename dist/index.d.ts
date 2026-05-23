import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface ThemeProviderProps {
    children: React.ReactNode;
}
declare const ThemeProvider: React.FC<ThemeProviderProps>;

export { Button, type ButtonProps, ThemeProvider };
