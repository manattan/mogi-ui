module.exports = {
  stories: ["../packages/**/*.story.@(tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  viteFinal: (config) => {
    return config;
  },
  core: {
    builder: "storybook-builder-vite",
  },
};
