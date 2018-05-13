import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { SherbyNestedPropertyMixin } from '../sherby-nested-property-mixin.js';

/**
 * Demo element for the SherbyNestedPropertyMixin.
 * @customElement
 * @polymer
 * @extends {PolymerElement}
 * @appliesMixin SherbyNestedPropertyMixin
 */
class SherbyNestedPropertyMixinDemo extends SherbyNestedPropertyMixin(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <div inner-h-t-m-l="[[content]]"></div>
    `;
  }
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

      content: {
        type: String,
        computed: 'computContent(data)',
      },
    };
  }

  computContent(data) {
    let content = '';
    const polymerVersions = [2, 3];
    polymerVersions.forEach((version) => {
      const key = `webcomponents.polymer-${version}`;
      const npm = this.getNestedPropertyOf(data, `${key}.npm`);
      const modules = this.getNestedPropertyOf(data, `${key}.modules`);
      const bower = this.getNestedPropertyOf(data, `${key}.bower`);

      content += `<h2>Polymer ${version}</h2>`;

      if (npm) {
        content += '<li>Use npm</li>';
      }

      if (modules) {
        content += '<li>Use ES Modules</li>';
      }

      if (bower) {
        content += '<li>Use Bower</li>';
      }
    });

    return content;
  }
}

window.customElements.define('sherby-nested-property-mixin-demo', SherbyNestedPropertyMixinDemo);
