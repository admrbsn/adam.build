module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#202124',
            white: '#fff',
            dribbble: '#ec498a',
            github: '#1274e7',
            linkedin: '#1177b5',
            dark_blue: '#293d54',
            yellow: '#fadaa3',
            yellow_90: 'rgba(250,218,163,0.9)',
            pink: '#fa758a',
            light_pink: '#fec9d1',
            pink_40: 'rgba(250,117,138,0.4)',
            baby_blue: '#24d6fe',
            indigo: '#2421fc',
            white_25: 'rgba(255,255,255,0.25)',
            white_50: 'rgba(255,255,255,0.50)',
            white_75: 'rgba(255,255,255,0.75)',
            silver: '#c5cbd4',
            gray: {
                100: '#f7fafc',
                200: '#edf2f7',
                300: '#e2e8f0',
                400: '#cbd5e0',
                500: '#a0aec0',
                600: '#718096',
                700: '#4a5568',
                800: '#2d3748',
                900: '#1a202c',
            },
        },
        extend: {
            fontFamily: {
                body: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
                display: ['Centra No1', 'sans-erif'],
            },
            fontSize: {
                '6xl': '3.5rem',
            },
            lineHeight: {
                'extra-tight': '1.1',
            },
            width: {
                '1/7': '14.2857143%',
                '30': '7rem',
            },
            fill: theme => ({
                'yellow': theme('colors.yellow'),
            })
        },
    },
}
