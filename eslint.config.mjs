// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import 'eslint-plugin-only-warn';

export default withNuxt({
  rules: {
    'no-undef': 0,
  },
});
