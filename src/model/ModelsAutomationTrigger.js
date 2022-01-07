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
    define(['ApiClient', 'model/ModelsAutomationTriggerPageSourceType', 'model/ModelsAutomationTriggerType', 'model/ModelsIntegrationType', 'model/ModelsSelect2ElementWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsAutomationTriggerPageSourceType'), require('./ModelsAutomationTriggerType'), require('./ModelsIntegrationType'), require('./ModelsSelect2ElementWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXAppServerV2) {
      root.SendXAppServerV2 = {};
    }
    root.SendXAppServerV2.ModelsAutomationTrigger = factory(root.SendXAppServerV2.ApiClient, root.SendXAppServerV2.ModelsAutomationTriggerPageSourceType, root.SendXAppServerV2.ModelsAutomationTriggerType, root.SendXAppServerV2.ModelsIntegrationType, root.SendXAppServerV2.ModelsSelect2ElementWrapper);
  }
}(this, function(ApiClient, ModelsAutomationTriggerPageSourceType, ModelsAutomationTriggerType, ModelsIntegrationType, ModelsSelect2ElementWrapper) {
  'use strict';

  /**
   * The ModelsAutomationTrigger model module.
   * @module model/ModelsAutomationTrigger
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAutomationTrigger</code>.
   * @alias module:model/ModelsAutomationTrigger
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAutomationTrigger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAutomationTrigger} obj Optional instance to populate.
   * @return {module:model/ModelsAutomationTrigger} The populated <code>ModelsAutomationTrigger</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('metaData'))
        obj.metaData = ApiClient.convertToType(data['metaData'], 'String');
      if (data.hasOwnProperty('metaDataElementWrapper'))
        obj.metaDataElementWrapper = ModelsSelect2ElementWrapper.constructFromObject(data['metaDataElementWrapper']);
      if (data.hasOwnProperty('pageSourceType'))
        obj.pageSourceType = ModelsAutomationTriggerPageSourceType.constructFromObject(data['pageSourceType']);
      if (data.hasOwnProperty('pageSourceValue'))
        obj.pageSourceValue = ApiClient.convertToType(data['pageSourceValue'], 'String');
      if (data.hasOwnProperty('provider'))
        obj.provider = ModelsIntegrationType.constructFromObject(data['provider']);
      if (data.hasOwnProperty('triggerForExisting'))
        obj.triggerForExisting = ApiClient.convertToType(data['triggerForExisting'], 'Boolean');
      if (data.hasOwnProperty('type'))
        obj.type = ModelsAutomationTriggerType.constructFromObject(data['type']);
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} metaData
   */
  exports.prototype.metaData = undefined;

  /**
   * @member {module:model/ModelsSelect2ElementWrapper} metaDataElementWrapper
   */
  exports.prototype.metaDataElementWrapper = undefined;

  /**
   * @member {module:model/ModelsAutomationTriggerPageSourceType} pageSourceType
   */
  exports.prototype.pageSourceType = undefined;

  /**
   * @member {String} pageSourceValue
   */
  exports.prototype.pageSourceValue = undefined;

  /**
   * @member {module:model/ModelsIntegrationType} provider
   */
  exports.prototype.provider = undefined;

  /**
   * @member {Boolean} triggerForExisting
   */
  exports.prototype.triggerForExisting = undefined;

  /**
   * @member {module:model/ModelsAutomationTriggerType} type
   */
  exports.prototype.type = undefined;


  return exports;

}));