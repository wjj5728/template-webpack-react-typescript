module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          useBuiltIns: "usage",
          corejs: {
            version: 3, // 使用core-js@3
            proposals: true,
          },
        },
      ],
      "@babel/preset-typescript",
      [
        "@babel/preset-react",
        { development: !api.env("production"), runtime: "automatic" },
      ],
    ],
    ...(!api.env("production") && { plugins: ["react-refresh/babel"] }),
  };
};
