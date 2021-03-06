import getTimeFormatterRegistry, {
  getTimeFormatter,
  formatTime,
} from '../src/TimeFormatterRegistrySingleton';
import TimeFormatterRegistry from '../src/TimeFormatterRegistry';
import { PREVIEW_TIME } from '../src/TimeFormatter';

describe('TimeFormatterRegistrySingleton', () => {
  describe('getTimeFormatterRegistry()', () => {
    it('returns a TimeFormatterRegisry', () => {
      expect(getTimeFormatterRegistry()).toBeInstanceOf(TimeFormatterRegistry);
    });
  });
  describe('getTimeFormatter(format)', () => {
    it('returns a format function', () => {
      const format = getTimeFormatter('%d/%m/%Y');
      expect(format(PREVIEW_TIME)).toEqual('14/02/2017');
    });
  });
  describe('formatTime(format, value)', () => {
    it('format the given time using the specified format', () => {
      const output = formatTime('%Y-%m-%d', PREVIEW_TIME);
      expect(output).toEqual('2017-02-14');
    });
  });
});
