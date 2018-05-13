import { SherbyNestedPropertyMixin } from '../sherby-nested-property-mixin.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * Test element for the SherbyNestedPropertyMixin.
 * @customElement
 * @polymer
 * @extends {PolymerElement}
 * @appliesMixin SherbyNestedPropertyMixin
 */
class SherbyNestedPropertyMixinTest extends SherbyNestedPropertyMixin(PolymerElement) {
  static get properties() {
    return {
      data: {
        type: Object,
        value: () => ({
          webcomponents: {
            'polymer-3': {
              npm: true,
              modules: true,
            },
            'polymer-2': {
              bower: true,
            },
          },
        }),
      },
    };
  }
}

window.customElements.define('sherby-nested-property-mixin-test', SherbyNestedPropertyMixinTest);
