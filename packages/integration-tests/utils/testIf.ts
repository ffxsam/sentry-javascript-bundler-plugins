// eslint-disable-next-line no-undef
export function testIf(condition: boolean): jest.It {
  if (condition) {
    // eslint-disable-next-line no-undef
    return test;
  } else {
    // eslint-disable-next-line no-undef
    return test.skip;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef, @typescript-eslint/no-unsafe-assignment
export const testIfNodeMajorVersionIsLessThan18: jest.It =
  function testIfNodeMajorVersionIsLessThan18() {
    const nodejsMajorversion = process.version.split(".")[0];
    return testIf(!nodejsMajorversion || parseInt(nodejsMajorversion) < 18);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;