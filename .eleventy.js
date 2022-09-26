const eleventySass = require("eleventy-sass");
const eleventyFeathericons = require('eleventy-plugin-feathericons');

module.exports = eleventyConfig => 
{
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(eleventyFeathericons);

  eleventyConfig.addPassthroughCopy("src/assets");

  // 11ty defaults
  return {
    dir: {
      input: 'src',
      output: 'build'
    }
  };
};