# 🧹 useDismiss

The `useDismiss()` hook for React takes in a React ref and a callback and can invoke the callback when a click event occurs outside the ref's bounds, when the escape key is pressed, **or both**.

## ⌨ Setup

```sh
npm i use-dismiss #or yarn add use-dismiss
```

## ⚛ Usage

Import the hook:

```javascript
import useDismiss from "use-dismiss";
```

### 🌐 Full example

```jsx
import * as React from "react"

export default () => {
  const [modal, setModal] = React.useState(false);
  const clickRef = React.useRef("");

  useDismiss(clickRef, () => {
    setModal(false);
  });

  return (
    <div className="container">
      <button onClick={() => setModal(true)}>Show Modal</button>
      {modal && <div ref={clickRef} className="modal">Modal Content</div>}
    </div>
  );
}

```

## 📄 API

- `ref: React ref` - The dom element to bind our hook.
- `callback: (event) => any` - The callback that runs after user click
