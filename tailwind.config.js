/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color - Bold Red (#d54329)
        primary: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#ffcdc8',
          300: '#fdaaa2',
          400: '#f9776b',
          500: '#d54329', // Base color
          600: '#c33520',
          700: '#a32a18',
          800: '#872618',
          900: '#71261b',
        },
        // Secondary - Vibrant Orange (#f89e23)
        secondary: {
          50: '#fffbeb',
          100: '#fff3c6',
          200: '#ffe588',
          300: '#ffd24a',
          400: '#f89e23', // Base color
          500: '#f28c0a',
          600: '#d66805',
          700: '#b24808',
          800: '#91380e',
          900: '#772f0f',
        },
        // Warm backgrounds - Cream/Beige (#f2dab1)
        cream: {
          50: '#fdfcf9',
          100: '#fbf7f0',
          200: '#f7efe0',
          300: '#f2dab1', // Base color
          400: '#e9c68a',
          500: '#ddb066',
          600: '#cc954a',
        },
        // Brown text colors (#8a552e)
        brown: {
          50: '#faf6f3',
          100: '#f3ebe3',
          200: '#e5d4c5',
          300: '#d4b9a0',
          400: '#bf9677',
          500: '#a87a58',
          600: '#8a552e', // Base color
          700: '#6d4424',
          800: '#5a3920',
          900: '#4c311d',
        },
        // Accent colors (derived from palette)
        sage: {
          400: '#b8c9a0',
          500: '#9cb882',
          600: '#7fa364',
        },
        whatsapp: {
          500: '#25D366',
          600: '#1DA851',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        accent: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-lg': ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display-md': ['clamp(2rem, 4vw + 0.5rem, 3rem)', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display-sm': ['clamp(1.5rem, 3vw + 0.25rem, 2rem)', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'display-xl': ['clamp(3rem, 6vw + 1.5rem, 5.5rem)', { lineHeight: '1.05', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(138, 85, 46, 0.05)',
        'md': '0 4px 6px rgba(138, 85, 46, 0.07)',
        'lg': '0 10px 15px rgba(138, 85, 46, 0.1)',
        'xl': '0 20px 25px rgba(138, 85, 46, 0.15)',
        'card': '0 4px 20px rgba(213, 67, 41, 0.1)',
        'card-hover': '0 12px 40px rgba(213, 67, 41, 0.18)',
        'glow': '0 0 40px rgba(213, 67, 41, 0.3)',
        'glow-orange': '0 0 40px rgba(248, 158, 35, 0.3)',
        'inner-glow': 'inset 0 2px 20px rgba(255, 255, 255, 0.1)',
        'premium': '0 25px 50px -12px rgba(138, 85, 46, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, #f2dab1 0%, #ffe588 50%, #f89e23 100%)',
        'gradient-premium': 'linear-gradient(135deg, #f7efe0 0%, #f2dab1 50%, #e9c68a 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(247, 239, 224, 0.8) 0%, rgba(242, 218, 177, 1) 100%)',
        'gradient-card': 'linear-gradient(180deg, #ffffff 0%, #fbf7f0 100%)',
        'mesh-warm': 'radial-gradient(at 40% 20%, rgba(248, 158, 35, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(213, 67, 41, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(248, 158, 35, 0.1) 0px, transparent 50%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'blob': 'blob 7s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(213, 67, 41, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(213, 67, 41, 0.5)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}