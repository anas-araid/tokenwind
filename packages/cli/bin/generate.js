import tokensbrueckeSDUtils from "@tokens-bruecke/sd-utils";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";
import StyleDictionaryModule from "style-dictionary";

StyleDictionaryModule.registerParser(tokensbrueckeSDUtils.DTCGParser());
StyleDictionaryModule.registerParser(tokensbrueckeSDUtils.compositeParser());

export function generateTokens(source, outDir) {
  const sdConfig = makeSdTailwindConfig({
    type: "all",
    formatType: "js",
    isVariables: true,
    // source: [`./style-dictionary/tokens/**/*.json`],
    source: [source], //["bin/tokens/**/*.json"],
    transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
    buildPath: outDir,
    tailwind: {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      plugins: ["typography", "container-queries"],
    },
  });

  sdConfig.platforms["css"] = {
    transformGroup: "css",
    buildPath: outDir,
    files: [
      {
        destination: "global.css",
        format: "css/variables",
      },
    ],
  };

  const StyleDictionary = StyleDictionaryModule.extend(sdConfig);
  StyleDictionary.buildAllPlatforms();
}
