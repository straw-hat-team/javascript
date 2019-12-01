# React Fullscreen

React hook for interacting with the Fullscreen API.

## Get Started

### Installation

Install the dependency in your package.

```sh
yarn add @straw-hat/react-fullscreen
```

## Usage

An example of a fullscreen button using https://material-ui.com/.

```tsx
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import * as React from 'react';

// 1. Import the dependency.
import { useFullscreen } from '@straw-hat/react-fullscreen';

export function FullscreenButton() {
  // 2. Create a `ref` that with the targeted element that will display in
  // fullscreen mode.
  const target = React.useRef(window.document.body);

  // 3. Pass the targeted element to the hook
  const { isFullscreen, toggleFullscreen } = useFullscreen(target);

  // 4. Use the exposed API in your component.
  return (
    <IconButton color="inherit" onClick={toggleFullscreen}>
      {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
    </IconButton>
  );
}
```
