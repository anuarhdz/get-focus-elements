# Get focus elements

```js
import { focusElements } from "../src/main.js";

const elements = new focusElements();

elements.get();
```

**dinamic import**

```js
function load() {
  import('../dist/module.js').then((module) => {
    let elements = new module.focusElements();
    console.log(elements.get());
  });
}

button.addEventListener('click', () => {
  load();
});
```
