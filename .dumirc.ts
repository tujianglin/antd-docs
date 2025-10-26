import { defineThemeConfig } from '@wimi/dumi-theme-antd/dist/defineThemeConfig';
import { defineConfig } from 'dumi';

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: 'src/index.ts',
  },
  outputPath: 'docs-dist',
  themeConfig: defineThemeConfig({
    name: 'antd-docs',
  }),
  presets: [require.resolve('@dumijs/preset-vue')],
});
