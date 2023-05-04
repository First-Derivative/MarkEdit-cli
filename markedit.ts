#!/usr/bin/env deno run --allow-all
import { parse } from "https://deno.land/std@0.184.0/flags/mod.ts";

interface Arguments {
  _: string[];
  f: string;
  file?: string;
}

const inputArgs: Arguments = parse(Deno.args);

export const openFileWithMarkEdit = async (defaultArg?: string) => {
  let earlyExit = false;

  Object.keys(inputArgs).map((key) => {
    if (key !== "f" && key !== "_" && key !== "file") {
      console.log(`Error: unrecognized flag ${key}, please use -f or --file for open a file`);
      earlyExit = true;
      return;
    }
  });

  if (earlyExit) return null;

  if (inputArgs._.length > 0) {
    if (!inputArgs.f || inputArgs.f === "")
      if (inputArgs.file) inputArgs.f === inputArgs.file;
      else if (inputArgs._.length > 0) inputArgs.f = inputArgs._[0];
      else if (defaultArg) inputArgs.f === defaultArg;
      else {
        console.log("missing <file>");
        console.log("alternatively you can supply a -f or --file flag and the path to file");
        return null;
      }
  }

  const check = Deno.run({
    cmd: ["open", "-a", "/Applications/MarkEdit.app"].concat(inputArgs.f ? [inputArgs.f] : []),
    stdout: "piped",
    stderr: "piped",
  });

  const [stderr] = await Promise.all([check.stderrOutput()]);
  check.close();

  if (stderr.length > 0) {
    const output = new TextDecoder().decode(stderr);
    console.log(output);
  }
};

const output = await openFileWithMarkEdit();
