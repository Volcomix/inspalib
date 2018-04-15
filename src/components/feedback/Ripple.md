```js static
import Ripple from 'instalib/Ripple'
```

```js noeditor
require('./RippleGuide.css'), ''
```

Default ripple:

```js
<Ripple>Interact with Me!</Ripple>
```

### Styling

Ripple can be styled using the following CSS classes:

* **.Ripple-container** to style the ripple root container div, for example with `background-color`.
* **.Ripple** to style the ripple itself, by setting the following properties:

  | Property              | Default | Description                |
  | --------------------- | ------- | -------------------------- |
  | `background-color`    | black   | Ripple color               |
  | `opacity`             | 0.2     | Ripple opacity             |
  | `animation-duration`  | 350ms   | Ripple growing duration    |
  | `transition-duration` | 350ms   | Ripple fading out duration |

**Note:** The ripple className property can be set to apply a custom CSS class to the ripple root container div.

Example:

```css
.RippleGuide-custom {
  background-color: rgba(255, 0, 0, 0.1);
}

.RippleGuide-custom .Ripple {
  background-color: rgb(255, 0, 0);
  opacity: 0.5;
  animation-duration: 1s;
  transition-duration: 2s;
}
```

Ripple with custom CSS class:

```js
<Ripple className="RippleGuide-custom">Interact with Me!</Ripple>
```
