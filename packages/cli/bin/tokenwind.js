#! /usr/bin/env node
const yargs = require("yargs");

yargs
  .command(
    "generate",
    "Generate Tailwind CSS theme and CSS variable files from design tokens.",
    (yargs) => {
      yargs.option("token-file", {
        alias: "t",
        describe: "Path to the design tokens JSON file",
        demandOption: true,
      });
      yargs.option("output-dir", {
        alias: "o",
        describe: "Directory to save the generated files",
        demandOption: true,
      });
    },
    (argv) => {
      const tokenFilePath = argv.tokenFile;
      const outputDir = argv.outputDir;
      console.log("tokenFilePath", tokenFilePath);
      console.log("outputDir", outputDir);
    }
  )
  .demandCommand(1, "You must specify a command.")
  .help().argv;
