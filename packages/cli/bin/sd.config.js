const StyleDictionaryModule = require("style-dictionary");
const { makeSdTailwindConfig } = require("sd-tailwindcss-transformer");
const tokensbrueckeSDUtils = require("@tokens-bruecke/sd-utils");

StyleDictionaryModule.registerParser(tokensbrueckeSDUtils.DTCGParser());
StyleDictionaryModule.registerParser(tokensbrueckeSDUtils.compositeParser());

const sdConfig = makeSdTailwindConfig({
  type: "all",
  formatType: "js",
  isVariables: true,
  // source: [`./style-dictionary/tokens/**/*.json`],
  source: ["bin/tokens/**/*.json"],
  transforms: ["attribute/cti", "name/cti/kebab"],
  buildPath: `./`,
  // tailwind: {
  //   content: [
  //     "./pages/**/*.{js,ts,jsx,tsx}",
  //     "./components/**/*.{js,ts,jsx,tsx}",
  //   ],
  //   plugins: ["typography", "container-queries"],
  // },
});

sdConfig.platforms["css"] = {
  transformGroup: "css",
  buildPath: "./styles/",
  files: [
    {
      destination: "tailwind.css",
      format: "css/variables",
    },
  ],
};

const StyleDictionary = StyleDictionaryModule.extend(sdConfig);
StyleDictionary.buildAllPlatforms();
