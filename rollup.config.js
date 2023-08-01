export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    external: [
        'react',
        'react-dom',
        '@headlessui/react',
        '@heroicons/react/24/outline'
    ]
};