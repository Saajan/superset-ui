const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-superset:legacy-plugin-chart', () => {
  let dir;

  beforeAll(() => {
    dir = process.cwd();

    return helpers
      .run(path.join(__dirname, '../generators/legacy-plugin-chart'))
      .withPrompts({ packageName: '4d-pie-chart', description: '4D Pie Chart' })
      .withOptions({ skipInstall: true });
  });

  it('creates files', () => {
    assert.file(['package.json']);
  });

  /*
   * Change working directory back to original working directory
   * after the test has completed.
   * yeoman tests switch to tmp directory and write files there.
   * Usually this is fine for solo package.
   * However, for a monorepo like this one,
   * it made jest confuses with current directory
   * (being in tmp directory instead of superset-ui root)
   * and interferes with other tests in sibling packages
   * that are run after the yeoman tests.
   */
  afterAll(() => {
    process.chdir(dir);
  });
});
