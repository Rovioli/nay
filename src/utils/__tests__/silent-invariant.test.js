const silentInvariant = require('../silent-invariant');

describe('utils', () => {
  describe('silent-invariant', () => {
    it('calls console.error when available then exits', () => {
      const exitPreSpy = process.exit;
      const exitSpy = jest.fn();
      process.exit = exitSpy;

      const logPreSpy = console.error;
      const logSpy = jest.fn();
      console.error = logSpy;

      try {
        silentInvariant(1 == 0, 'Error');
        expect(exitSpy.mock.calls[0][0]).toBe(0);
        expect(logSpy.mock.calls[0][0]).toBe('Error');
      } finally {
        exitSpy.mockClear();
        logSpy.mockClear();
        console.error = logPreSpy;
        process.exit = exitPreSpy;
      }
    });
  });
});
