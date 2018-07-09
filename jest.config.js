const getPathsFromTypeScriptConfig = () => {
    const tsconfig = require('./tsconfig.json');
    const fromPairs = pairs => pairs.reduce((res, [key, value]) => ({ ...res, [key]: value }), {});
    return fromPairs(
        Object.entries(tsconfig.compilerOptions.paths).map(([k, [v]]) => [
          k.replace(/\*/, "(.*)"),
          `<rootDir>/${v.replace(/\*/, "$1")}`,
        ]),
    )
};

const moduleNameMapper = getPathsFromTypeScriptConfig();

const beyondConfig = require('./beyond-test.config');
module.exports = {
    preset: 'jest-preset-angular',
    setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
    moduleNameMapper,
    // we need to mock url to have some account id
    testURL: `https://my.getbeyond.com/accounts/${beyondConfig.accountId}/app/${beyondConfig.appKey}`
};