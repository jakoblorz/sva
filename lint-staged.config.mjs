export default {
  "*": (filenames) =>
    `prettier --ignore-unknown --no-error-on-unmatched-pattern --plugin=./node_modules/prettier-plugin-organize-imports --write ${filenames
      .map((filename) => `'${filename}'`)
      .join(" ")}`,
  "src/**/*.{js,jsx,ts,tsx}": () => "npm run lint:tsc",
};
