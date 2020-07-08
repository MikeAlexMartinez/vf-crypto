import { renderHook } from '@testing-library/react-hooks';
import usePolling from '../usePolling';

jest.useFakeTimers();

describe('usePolling', () => {
  it('should trigger callback straight away', async () => {
    const callback = jest.fn();
    renderHook(() => usePolling(callback, 60000, ['test']));
    expect(callback).toHaveBeenCalledTimes(1);
  })

  it('should trigger callback every 60 seconds', () => {
    const callback = jest.fn();
    renderHook(() => usePolling(callback, 60000, ['test']));
    expect(callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(60000);
    expect(callback).toHaveBeenCalledTimes(2);
  })

  it('should trigger when the dependencies are changed', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(({ currency }) =>
      usePolling(callback, 60000, [currency])
    , { initialProps: { currency: 'bitcoin' }});
    expect(callback).toHaveBeenCalledTimes(1);
    rerender({ currency: 'ethereum' });
    expect(callback).toHaveBeenCalledTimes(2);
  })
});
