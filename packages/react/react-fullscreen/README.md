# React Fullscreen

React components that allow you to interact with the Fullscreen API.

## Installation

```sh
yarn add @straw-hat/react-fullscreen --exact
```

## Usage

An example of a fullscreen button using https://material-ui.com/.

```javascript
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import * as React from 'react';
import { useFullscreen } from '@straw-hat/react-fullscreen';

export const FullscreenButton = () => {
  const { isFullscreen, toggleFullscreen } = useFullscreen(
    window.document.body
  );

  return (
    <IconButton color="inherit" onClick={toggleFullscreen}>
      {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
    </IconButton>
  );
};
```
