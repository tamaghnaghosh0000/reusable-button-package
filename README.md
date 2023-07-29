# React button reusable
```sh
// with npm
npm i reusable-button-package



## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx

import React from 'react';
import Button from 'reusable-button-package';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Test YourButton Component</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default App;
