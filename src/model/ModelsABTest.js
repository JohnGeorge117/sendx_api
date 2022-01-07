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
    define(['ApiClient', 'model/ModelsABTestDecisionType', 'model/ModelsABTestEntityType', 'model/ModelsABTestParameter', 'model/ModelsABTestStatus', 'model/ModelsChannel', 'model/ModelsScheduleType', 'model/ModelsSelect2ElementWrapper', 'model/ModelsWaitDurationType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsABTestDecisionType'), require('./ModelsABTestEntityType'), require('./ModelsABTestParameter'), require('./ModelsABTestStatus'), require('./ModelsChannel'), require('./ModelsScheduleType'), require('./ModelsSelect2ElementWrapper'), require('./ModelsWaitDurationType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXAppServerV2) {
      root.SendXAppServerV2 = {};
    }
    root.SendXAppServerV2.ModelsABTest = factory(root.SendXAppServerV2.ApiClient, root.SendXAppServerV2.ModelsABTestDecisionType, root.SendXAppServerV2.ModelsABTestEntityType, root.SendXAppServerV2.ModelsABTestParameter, root.SendXAppServerV2.ModelsABTestStatus, root.SendXAppServerV2.ModelsChannel, root.SendXAppServerV2.ModelsScheduleType, root.SendXAppServerV2.ModelsSelect2ElementWrapper, root.SendXAppServerV2.ModelsWaitDurationType);
  }
}(this, function(ApiClient, ModelsABTestDecisionType, ModelsABTestEntityType, ModelsABTestParameter, ModelsABTestStatus, ModelsChannel, ModelsScheduleType, ModelsSelect2ElementWrapper, ModelsWaitDurationType) {
  'use strict';

  /**
   * The ModelsABTest model module.
   * @module model/ModelsABTest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsABTest</code>.
   * @alias module:model/ModelsABTest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsABTest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsABTest} obj Optional instance to populate.
   * @return {module:model/ModelsABTest} The populated <code>ModelsABTest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('channel'))
        obj.channel = ModelsChannel.constructFromObject(data['channel']);
      if (data.hasOwnProperty('decisionType'))
        obj.decisionType = ModelsABTestDecisionType.constructFromObject(data['decisionType']);
      if (data.hasOwnProperty('encryptedId'))
        obj.encryptedId = ApiClient.convertToType(data['encryptedId'], 'String');
      if (data.hasOwnProperty('excludedSegmentOptions'))
        obj.excludedSegmentOptions = ApiClient.convertToType(data['excludedSegmentOptions'], [ModelsSelect2ElementWrapper]);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('includedSegmentOptions'))
        obj.includedSegmentOptions = ApiClient.convertToType(data['includedSegmentOptions'], [ModelsSelect2ElementWrapper]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('scheduleCondition'))
        obj.scheduleCondition = ApiClient.convertToType(data['scheduleCondition'], 'String');
      if (data.hasOwnProperty('scheduleType'))
        obj.scheduleType = ModelsScheduleType.constructFromObject(data['scheduleType']);
      if (data.hasOwnProperty('status'))
        obj.status = ModelsABTestStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('testEntityType'))
        obj.testEntityType = ModelsABTestEntityType.constructFromObject(data['testEntityType']);
      if (data.hasOwnProperty('testParameter'))
        obj.testParameter = ModelsABTestParameter.constructFromObject(data['testParameter']);
      if (data.hasOwnProperty('testPercent'))
        obj.testPercent = ApiClient.convertToType(data['testPercent'], 'Number');
      if (data.hasOwnProperty('timeCondition'))
        obj.timeCondition = ApiClient.convertToType(data['timeCondition'], 'String');
      if (data.hasOwnProperty('timeZone'))
        obj.timeZone = ApiClient.convertToType(data['timeZone'], 'String');
      if (data.hasOwnProperty('waitDurationType'))
        obj.waitDurationType = ModelsWaitDurationType.constructFromObject(data['waitDurationType']);
      if (data.hasOwnProperty('waitDurationValue'))
        obj.waitDurationValue = ApiClient.convertToType(data['waitDurationValue'], 'Number');
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsChannel} channel
   */
  exports.prototype.channel = undefined;

  /**
   * @member {module:model/ModelsABTestDecisionType} decisionType
   */
  exports.prototype.decisionType = undefined;

  /**
   * @member {String} encryptedId
   */
  exports.prototype.encryptedId = undefined;

  /**
   * @member {Array.<module:model/ModelsSelect2ElementWrapper>} excludedSegmentOptions
   */
  exports.prototype.excludedSegmentOptions = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Array.<module:model/ModelsSelect2ElementWrapper>} includedSegmentOptions
   */
  exports.prototype.includedSegmentOptions = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} scheduleCondition
   */
  exports.prototype.scheduleCondition = undefined;

  /**
   * @member {module:model/ModelsScheduleType} scheduleType
   */
  exports.prototype.scheduleType = undefined;

  /**
   * @member {module:model/ModelsABTestStatus} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {module:model/ModelsABTestEntityType} testEntityType
   */
  exports.prototype.testEntityType = undefined;

  /**
   * @member {module:model/ModelsABTestParameter} testParameter
   */
  exports.prototype.testParameter = undefined;

  /**
   * @member {Number} testPercent
   */
  exports.prototype.testPercent = undefined;

  /**
   * @member {String} timeCondition
   */
  exports.prototype.timeCondition = undefined;

  /**
   * @member {String} timeZone
   */
  exports.prototype.timeZone = undefined;

  /**
   * @member {module:model/ModelsWaitDurationType} waitDurationType
   */
  exports.prototype.waitDurationType = undefined;

  /**
   * @member {Number} waitDurationValue
   */
  exports.prototype.waitDurationValue = undefined;


  return exports;

}));
