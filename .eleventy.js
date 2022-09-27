const eleventySass = require("eleventy-sass");
const eleventyFeathericons = require('eleventy-plugin-feathericons');
const twemoji = require("twemoji")

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(eleventyFeathericons);

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addTransform("parse-twemoji", function (content, outputPath) {
    if (outputPath.endsWith(".css") === false) {
      content = twemoji.parse(content);
    }

    return content;
  });

  // 11ty defaults
  return {
    dir: {
      input: 'src',
      output: 'build'
    }
  };
};