import terser from '@rollup/plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/app.js',
  output: {
    file: 'public/dist/bundle.js',
    format: 'iife',
    name: 'app',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({ browser: true }),
    terser(),
  ],
}