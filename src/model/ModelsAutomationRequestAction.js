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
    root.SendXAppServerV2.ModelsAutomationRequestAction = factory(root.SendXAppServerV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsAutomationRequestAction model module.
   * @module model/ModelsAutomationRequestAction
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAutomationRequestAction</code>.
   * @alias module:model/ModelsAutomationRequestAction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAutomationRequestAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAutomationRequestAction} obj Optional instance to populate.
   * @return {module:model/ModelsAutomationRequestAction} The populated <code>ModelsAutomationRequestAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('durationType'))
        obj.durationType = ApiClient.convertToType(data['durationType'], 'Number');
      if (data.hasOwnProperty('durationValue'))
        obj.durationValue = ApiClient.convertToType(data['durationValue'], 'Number');
      if (data.hasOwnProperty('metaData'))
        obj.metaData = ApiClient.convertToType(data['metaData'], 'String');
      if (data.hasOwnProperty('provider'))
        obj.provider = ApiClient.convertToType(data['provider'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} durationType
   */
  exports.prototype.durationType = undefined;

  /**
   * @member {Number} durationValue
   */
  exports.prototype.durationValue = undefined;

  /**
   * @member {String} metaData
   */
  exports.prototype.metaData = undefined;

  /**
   * @member {Number} provider
   */
  exports.prototype.provider = undefined;

  /**
   * @member {Number} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
