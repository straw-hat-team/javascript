import { renderHook, act } from '@testing-library/react-hooks';
import { useFullscreen } from '../src/index';

test('sets fullscreen', () => {
  const { result } = renderHook(() => useFullscreen(null));

  act(() => {
    result.current.setFullscreen(true);
  });

  expect(result.current.isFullscreen).toBeTruthy();
});
