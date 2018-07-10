import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/bowser/bowser.js',
    output: {
      file: './bowser.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
    ],
  },
];
