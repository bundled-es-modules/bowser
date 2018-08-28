# bowser

This is a mirror of [bowser](https://www.npmjs.com/package/bowser), bundled and exposed as ES module.

## Install

```
npm install @bundled-es-modules/bowser
bower install bundled-es-modules/bowser
```

## Use

```html
<script type="module">
  // from main file
  import { bowser } from 'bowser';
  // or directly
  import bowser from 'bowser/bowser.js';
  console.log(bowser);
</script>
```

Make sure you added `@bundled-es-modules` scope to the path if used via npm.
