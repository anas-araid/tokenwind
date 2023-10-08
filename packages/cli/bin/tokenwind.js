#! /usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs";
import path from "path";
import { generateTokens } from "./generate.js";

const __dirname = path.resolve();
const yargsInstance = yargs(hideBin(process.argv));

yargsInstance
  .command(
    "generate",
    "Generate Tailwind CSS theme and CSS variable files from design tokens.",
    (yargs) => {
      yargs
        .option("token-file", {
          alias: "t",
          describe: "Path to the design tokens JSON file",
          demandOption: true,
        })
        .check((argv) => {
          const fullPath = path.join(__dirname, argv["token-file"]);
          const tokenExists = fs.existsSync(fullPath);

          if (!tokenExists) {
            throw new Error("File not exists");
          }
          return true;
        });
      yargs.option("output-dir", {
        alias: "o",
        describe: "Directory to save the generated files",
        demandOption: true,
      });
    },
    (argv) => {
      const tokenFilePath = path.join(__dirname, argv.tokenFile);
      const outputDir = path.join(
        __dirname,
        argv.outputDir.replace(/\/?$/, "/")
      );

      generateTokens(tokenFilePath, outputDir);
    }
  )
  .demandCommand(1, "You must specify a command.")
  .help().argv;
