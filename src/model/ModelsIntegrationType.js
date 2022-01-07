/*
 * SendX APP Server V2
 * Send App Server
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.25
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXAppServerV2) {
      root.SendXAppServerV2 = {};
    }
    root.SendXAppServerV2.ModelsIntegrationType = factory(root.SendXAppServerV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsIntegrationType model module.
   * @module model/ModelsIntegrationType
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIntegrationType</code>.
   * @alias module:model/ModelsIntegrationType
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIntegrationType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIntegrationType} obj Optional instance to populate.
   * @return {module:model/ModelsIntegrationType} The populated <code>ModelsIntegrationType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
    }
    return obj;
  }


  return exports;

}));
