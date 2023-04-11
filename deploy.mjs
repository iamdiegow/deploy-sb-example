import "zx/globals";

function rmNewLine(str) {
  return str.replace("\n", "");
}

const BRANCH = rmNewLine((await $`git branch --show-current`.quiet()).stdout);
const SOURCE = path.join(process.cwd(), "storybook-static");

const branchFolder = path.join(process.cwd(), "public", BRANCH);

if (fs.exists(branchFolder)) {
  console.log(
    chalk.cyan(`${branchFolder} already exists. Overwritting files...`)
  );
  await fs.copy(SOURCE, branchFolder);
}

const metadata = {
  branch: BRANCH,
};
