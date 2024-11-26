import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import animate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(to bottom, hsla(235, 100%, 98%, 1), hsla(0, 0%, 100%, 1))',
        'perk-gradient':
          'linear-gradient(to bottom, hsla(256, 81%, 16%, 1), hsla(258, 64%, 39%, 1)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          gradient: 'hsl(var(--primary-gradient))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '1rem',
        '2xl': '4.8rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1069px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [
    animate,

    plugin(function ({ matchUtilities, theme, addComponents }) {
      addComponents({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.display-xl': {
          fontSize: '72px',
          fontWeight: '500',
          lineHeight: '72px',
          letterSpacing: '-3%',
        },
        '.display-large': {
          fontSize: '50px',
          fontWeight: '500',
          lineHeight: '50px',
          letterSpacing: '-2%',
        },
        '.display-medium': {
          fontSize: '40px',
          fontWeight: '900',
          lineHeight: '52px',
        },
        '.display-small': {
          fontSize: '32px',
          fontWeight: '500',
          lineHeight: '32px',
          letterSpacing: '-2%',
        },
        '.display-xs': {
          fontSize: '24px',
          fontWeight: '500',
          lineHeight: '24px',
        },
        '.display-xxs': {
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '20px',
        },
        '.headline-large': {
          fontSize: '32px',
          fontWeight: '400',
          lineHeight: '40px',
        },
        '.headline-medium': {
          fontSize: '25px',
          fontWeight: '600',
          lineHeight: '32px',
        },
        '.headline-small': {
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '28px',
        },
        '.title-large': {
          fontSize: '22px',
          fontWeight: '400',
          lineHeight: '28px',
        },
        '.title-medium': {
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '16px',
        },
        '.title-small': {
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '17px',
        },
        '.label-large': {
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '0.1px',
        },
        '.label-medium': {
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '16px',
          letterSpacing: '0.5px',
        },
        '.label-small': {
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '16px',
          letterSpacing: '0.5px',
        },
        '.body-large': {
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '21px',
          letterSpacing: '0.42&',
        },
        '.body-medium': {
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '19px',
          letterSpacing: '0.25px',
        },
        '.body-small': {
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '16px',
          letterSpacing: '0.2px',
        },
      }) // Това може би не ти трябва на този етап, но да го имаш.
      matchUtilities(
        {
          'flex-grid': (value) => {
            //тука си добавяш клас със променлива ако ти трябва. Става flex-grid-1, flex-grid-[20px] и тн.
            return {
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: `calc(${value} * -1)`,
              marginLeft: `calc(${value} * -1)`,
              '&>*': {
                marginLeft: value,
                marginTop: value,
              },
            }
          },
        },
        // Default values.
        // `flattenColorPalette` required to support native Tailwind color classes like `red-500`, `amber-300`, etc.
        // In most cases you may just pass `theme('config-key')`, where `config-key` could be any (`spacing`, `fontFamily`, `foo`, `bar`)
        { values: theme('spacing') } // тук са ти някви променливи от темата, да може да ползваш тези по подразбиране.
      )
      matchUtilities(
        {
          square: (value) => {
            return {
              width: value,
              height: value,
              minWidth: value,
              minHeight: value,
            }
          },
        },
        // Default values.
        // `flattenColorPalette` required to support native Tailwind color classes like `red-500`, `amber-300`, etc.
        // In most cases you may just pass `theme('config-key')`, where `config-key` could be any (`spacing`, `fontFamily`, `foo`, `bar`)
        { values: theme('spacing') }
      )

      matchUtilities(
        {
          circle: (value) => {
            return {
              width: value,
              height: value,
              minWidth: value,
              minHeight: value,
              borderRadius: '9999px',
            }
          },
        },
        // Default values.
        // `flattenColorPalette` required to support native Tailwind color classes like `red-500`, `amber-300`, etc.
        // In most cases you may just pass `theme('config-key')`, where `config-key` could be any (`spacing`, `fontFamily`, `foo`, `bar`)
        { values: theme('spacing') }
      )
    }),
  ],
} satisfies Config
