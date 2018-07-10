# bowser

This is a mirror of [bowser](https://www.npmjs.com/package/bowser) for bower, bundled and exposed as ES module.

## Install

```
bower install bundled-es-modules/bowser
```

## Use

```html
<script type="module">
  // from main file
  import { bowser } from './bower_components/bowser/index.js';
  // or directly
  import bowser from './bower_components/bowser/bowser.js';
  console.log(bowser);
</script>
```
