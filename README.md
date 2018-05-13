[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/SherbyElements/sherby-nested-property)
[![Build status](https://travis-ci.org/SherbyElements/sherby-nested-property.svg?branch=master)](https://travis-ci.org/SherbyElements/sherby-nested-property)

## sherby-nested-property
A **Polymer 3** mixin to add functions to obtain a nested property of an object.

Instead of using multiples `&&` to ensure that an object have a nested value, you could use the 
`NestedPropertyMixin` to obtain the value if defined.

```javascript
const data = {
  webcomponents: {
    'polymer-3': {
      npm: true,
      modules: true,
    },
    'polymer-2': {
      bower: true,
    },
  },
};

let npm;
if (data && data.webcomponents && data.webcomponents['polymer-3'] && data.webcomponents['polymer-3'].npm) {
  npm = data.webcomponents['polymer-3'].npm;
}

// eslint-disable-next-line no-console
console.log(npm);
```

```javascript
const data = {
  webcomponents: {
    'polymer-3': {
      npm: true,
      modules: true,
    },
    'polymer-2': {
      bower: true,
    },
  },
};

const npm = this.getNestedPropertyOf(data, 'webcomponents.polymer-3.npm');

// eslint-disable-next-line no-console
console.log(npm);
```

## Installation
As Polymer 3 use npm, you must use it to install this component:

```bash
npm install @sherby/sherby--nested-property
```

For the **Polymer 2** version, use the `SherbyElements/sherby-nested-property#^v1.0.0` inside your bower.json file.

```bash
bower install SherbyElements/sherby-nested-property --save
```

## Use
Inmport the mixin 
```javascript
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SherbyNestedPropertyMixin } from '@sherby/sherby-nested-property/sherby-nested-property-mixin.js';

/* eslint-disable no-unused-vars */

/**
 * @customElement
 * @polymer
 * @extends {PolymerElement}
 * @appliesMixin SherbyNestedPropertyMixin
 */
class Polymer3Element extends SherbyNestedPropertyMixin(PolymerElement) {
  // Use the getNestedProperty or the getNestedPropertyOf functions
  computeData(data) {
    const npm = this.getNestedPropertyOf(data, 'webcomponents.polymer-3.npm');

    // eslint-disable-next-line no-console
    console.log(npm);
  }
}
```
