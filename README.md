# 🧹 useDismiss

The `useDismiss()` hook for React takes in a React ref and a callback and can invoke the callback when a click event occurs outside the ref's bounds, when the escape key is pressed, **or both**.

## ⌨ Setup

```sh
npm i use-dismiss #or yarn add use-dismiss
```

## ⚛ Usage

Import the hook:

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

## 📄 API

- `ref: RefObject<HTMLElement>` - The dom element to bind our hook.
- `callback: (event) => any` - The callback that runs after user click
