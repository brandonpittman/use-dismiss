# useDismiss 🧹

The `useDismiss()` hook for React takes a callback, returns a ref, and invokes the callback when a click event occurs outside the ref's bounds, when the escape key is pressed, **or both**.

## Setup ⌨

```sh
npm i use-dismiss #or yarn add use-dismiss
```

## Usage ⚛

```javascript
import { useState } from "react";
import useDismiss from "use-dismiss";
// or import { useClickAway, useEscape } from "use-dismiss" for just click away or escape listeners

export default () => {
  const [modal, setModal] = useState(false);
  const ref = useDismiss(() => setModal(false));

  return (
    <div className="container">
      <button onClick={() => setModal(true)}>Show Modal</button>
      {modal ? <div ref={ref}>Modal Content</div> : null}
    </div>
  );
};
```

## API 📄

- `callback: (event) => any` - The callback that runs after user click
