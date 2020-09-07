# React hook to detect click, touch, and escape key events 

React hook `useDismiss()` that reacts to clicks outside the bound element, and calls the expression that is passed in when this event is detected.

Suppose you're working on a Modal component that renders a dialog box, and you wish to close the modal if the user clicks away this is the ideal scenario for `useDismiss()` custom hook.

## Installation

```sh
npm i use-dismiss
```

## Usage

Import the hook:

```javascript
import useDismiss from "use-dismiss";
```

### Full example

```jsx
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

## API

- `ref: React ref` - The dom element to bind our hook.
- `callback: (event) => any` - The callback that runs after user click
