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
    define(['ApiClient', 'model/ModelsChannel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsChannel'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXAppServerV2) {
      root.SendXAppServerV2 = {};
    }
    root.SendXAppServerV2.ModelsDrip = factory(root.SendXAppServerV2.ApiClient, root.SendXAppServerV2.ModelsChannel);
  }
}(this, function(ApiClient, ModelsChannel) {
  'use strict';

  /**
   * The ModelsDrip model module.
   * @module model/ModelsDrip
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsDrip</code>.
   * @alias module:model/ModelsDrip
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsDrip</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsDrip} obj Optional instance to populate.
   * @return {module:model/ModelsDrip} The populated <code>ModelsDrip</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('autogenerateUTM'))
        obj.autogenerateUTM = ApiClient.convertToType(data['autogenerateUTM'], 'Boolean');
      if (data.hasOwnProperty('channel'))
        obj.channel = ModelsChannel.constructFromObject(data['channel']);
      if (data.hasOwnProperty('encryptedId'))
        obj.encryptedId = ApiClient.convertToType(data['encryptedId'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('sendInContactsTimezone'))
        obj.sendInContactsTimezone = ApiClient.convertToType(data['sendInContactsTimezone'], 'Boolean');
      if (data.hasOwnProperty('skipWeekends'))
        obj.skipWeekends = ApiClient.convertToType(data['skipWeekends'], 'Boolean');
      if (data.hasOwnProperty('smartSend'))
        obj.smartSend = ApiClient.convertToType(data['smartSend'], 'Boolean');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Boolean');
      if (data.hasOwnProperty('strategy'))
        obj.strategy = ApiClient.convertToType(data['strategy'], 'String');
      if (data.hasOwnProperty('time_condition'))
        obj.timeCondition = ApiClient.convertToType(data['time_condition'], 'String');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
      if (data.hasOwnProperty('trackReply'))
        obj.trackReply = ApiClient.convertToType(data['trackReply'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Boolean} autogenerateUTM
   */
  exports.prototype.autogenerateUTM = undefined;

  /**
   * @member {module:model/ModelsChannel} channel
   */
  exports.prototype.channel = undefined;

  /**
   * @member {String} encryptedId
   */
  exports.prototype.encryptedId = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Boolean} sendInContactsTimezone
   */
  exports.prototype.sendInContactsTimezone = undefined;

  /**
   * @member {Boolean} skipWeekends
   */
  exports.prototype.skipWeekends = undefined;

  /**
   * @member {Boolean} smartSend
   */
  exports.prototype.smartSend = undefined;

  /**
   * @member {Boolean} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} strategy
   */
  exports.prototype.strategy = undefined;

  /**
   * @member {String} timeCondition
   */
  exports.prototype.timeCondition = undefined;

  /**
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;

  /**
   * @member {Boolean} trackReply
   */
  exports.prototype.trackReply = undefined;


  return exports;

}));
