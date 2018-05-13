/**
 * A Polymer 2 mixin to add functions to obtain a nested property of an object.
 * @polymer
 * @mixinFunction
 * @param {Class} superClass The super class.
 * @return {Class} Class.
 */
export const SherbyNestedPropertyMixin = superClass => class extends superClass {
  /**
   * Return the property of this class with a path.
   * @public
   * @param {Array|String} path The path of the property to get.
   * @param {*} defaultVal The value returned for undefined resolved values.
   * @param {String} del Delimiter use in the path.
   * @return {*} Return the resolved value.
   */
  getNestedProperty(path, defaultVal = undefined, del = '.') {
    return this.getNestedPropertyOf(this, path, defaultVal, del);
  }

  /**
   * Return the property of an object with a path and a custom delimiter.
   * @public
   * @param {Object} object The object to query.
   * @param {Array|String} path The path of the property to get.
   * @param {*} defaultVal The value returned for undefined resolved values.
   * @param {String} del Delimiter use in the path.
   * @return {*} Return the resolved value.
   */
  getNestedPropertyOf(object, path, defaultVal = undefined, del = '.') {
    // The path is provide as a string (ex. pizza.cheese)
    const isPathString = typeof path === 'string';

    if (isPathString) {
      path = path.split(del);
    }

    for (let i = 0; i < path.length; ++i) {
      if (!object || !object.hasOwnProperty(path[i])) {
        return defaultVal;
      }

      object = object[path[i]];
    }

    return object;
  }
};
