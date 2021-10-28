import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
};
