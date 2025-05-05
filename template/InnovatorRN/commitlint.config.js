module.exports = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],

  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'type-empty': [0],
    'subject-empty': [0],
    'type-enum': [0],
    'function-rules/type-enum': [
      2,
      'always',
      parsed => {
        /**
         * for @commitlint/cli@^12.1.1
         * parsed.type would be null when meeting message with # in the type.
         * for example, feat#123: add a feature
         * parsed.type would be null, also for subject. So, I turn off
         * type-empty, subject-empty, type-enum...
         */
        const choreRegExp = /^chore:\s.+\n(\s*)https:\/\/trello.com\/c\/([0-9a-zA-Z]{8})/;
        const fixcommitRegExp = /^fix:\s.+\n(\s*)https:\/\/trello.com\/c\/([0-9a-zA-Z]{8})/;
        const featcommitRegExp = /^feat:\s.+\n(\s*)https:\/\/trello.com\/c\/([0-9a-zA-Z]{8})/;
        const fixRegExp = /^fixed sha /;
        const preReleaseRegExp = /^chore\(release\): /;
        if (
          parsed.raw.match(choreRegExp) ||
          parsed.raw.match(fixcommitRegExp) ||
          parsed.raw.match(featcommitRegExp) ||
          parsed.raw.match(fixRegExp) ||
          parsed.raw.match(preReleaseRegExp)
        ) {
          return [true];
        }
        return [
          false,
          `Invalid commit format used, please use: Reviewee "fixed sha <SHA>" OR \n feat: <newFeature> \n fix: <fixIssue> \n chore: <chore> \n docs: <docs> \n with a link to the corresponding Trello card in a new line after each`,
        ];
      },
    ],
  },
};
