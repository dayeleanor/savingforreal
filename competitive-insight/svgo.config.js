// svgo.config.js
module.exports = {
  // https://github.com/svg/svgo/pull/258
  multipass: true,

  // https://github.com/svg/svgo
  plugins: [
    "preset-default",
    "prefixIds",
    "removeDimensions",
    { name: "removeAttrs", params: { attrs: ["data-name"] } },
    {
      name: "sortAttrs",
      params: {
        xmlnsOrder: "alphabetical",
      },
    },
  ],
};
