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
    define(['ApiClient', 'model/ModelsAutomationRequestAction', 'model/ModelsAutomationRequestTrigger'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsAutomationRequestAction'), require('./ModelsAutomationRequestTrigger'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXAppServerV2) {
      root.SendXAppServerV2 = {};
    }
    root.SendXAppServerV2.ModelsAutomationRequest = factory(root.SendXAppServerV2.ApiClient, root.SendXAppServerV2.ModelsAutomationRequestAction, root.SendXAppServerV2.ModelsAutomationRequestTrigger);
  }
}(this, function(ApiClient, ModelsAutomationRequestAction, ModelsAutomationRequestTrigger) {
  'use strict';

  /**
   * The ModelsAutomationRequest model module.
   * @module model/ModelsAutomationRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAutomationRequest</code>.
   * @alias module:model/ModelsAutomationRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAutomationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAutomationRequest} obj Optional instance to populate.
   * @return {module:model/ModelsAutomationRequest} The populated <code>ModelsAutomationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('automationAction'))
        obj.automationAction = ApiClient.convertToType(data['automationAction'], [ModelsAutomationRequestAction]);
      if (data.hasOwnProperty('automationTrigger'))
        obj.automationTrigger = ApiClient.convertToType(data['automationTrigger'], [ModelsAutomationRequestTrigger]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsAutomationRequestAction>} automationAction
   */
  exports.prototype.automationAction = undefined;

  /**
   * @member {Array.<module:model/ModelsAutomationRequestTrigger>} automationTrigger
   */
  exports.prototype.automationTrigger = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Boolean} status
   */
  exports.prototype.status = undefined;


  return exports;

}));
