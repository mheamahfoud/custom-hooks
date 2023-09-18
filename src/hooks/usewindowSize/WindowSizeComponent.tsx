import React from 'react';
import useWindowSize from './useWindowSize';

const WindowSizeComponent = () => {
    const {width,height}=useWindowSize();
  return (
    <div>
      {height}* {width}
    </div>
  );
}

export default WindowSizeComponent;
