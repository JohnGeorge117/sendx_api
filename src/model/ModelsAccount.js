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
    define(['ApiClient', 'model/ModelsAccountRisk', 'model/ModelsAccountTier', 'model/ModelsSendingType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsAccountRisk'), require('./ModelsAccountTier'), require('./ModelsSendingType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXAppServerV2) {
      root.SendXAppServerV2 = {};
    }
    root.SendXAppServerV2.ModelsAccount = factory(root.SendXAppServerV2.ApiClient, root.SendXAppServerV2.ModelsAccountRisk, root.SendXAppServerV2.ModelsAccountTier, root.SendXAppServerV2.ModelsSendingType);
  }
}(this, function(ApiClient, ModelsAccountRisk, ModelsAccountTier, ModelsSendingType) {
  'use strict';

  /**
   * The ModelsAccount model module.
   * @module model/ModelsAccount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAccount</code>.
   * @alias module:model/ModelsAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAccount} obj Optional instance to populate.
   * @return {module:model/ModelsAccount} The populated <code>ModelsAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AccountName'))
        obj.accountName = ApiClient.convertToType(data['AccountName'], 'String');
      if (data.hasOwnProperty('ApiKey'))
        obj.apiKey = ApiClient.convertToType(data['ApiKey'], 'String');
      if (data.hasOwnProperty('AvatarUrl'))
        obj.avatarUrl = ApiClient.convertToType(data['AvatarUrl'], 'String');
      if (data.hasOwnProperty('CompanyName'))
        obj.companyName = ApiClient.convertToType(data['CompanyName'], 'String');
      if (data.hasOwnProperty('ContactSize'))
        obj.contactSize = ApiClient.convertToType(data['ContactSize'], 'String');
      if (data.hasOwnProperty('Created'))
        obj.created = ApiClient.convertToType(data['Created'], 'String');
      if (data.hasOwnProperty('CurrentSendxCredit'))
        obj.currentSendxCredit = ApiClient.convertToType(data['CurrentSendxCredit'], 'Number');
      if (data.hasOwnProperty('EcomPlatform'))
        obj.ecomPlatform = ApiClient.convertToType(data['EcomPlatform'], 'String');
      if (data.hasOwnProperty('Email'))
        obj.email = ApiClient.convertToType(data['Email'], 'String');
      if (data.hasOwnProperty('EmailListSource'))
        obj.emailListSource = ApiClient.convertToType(data['EmailListSource'], 'String');
      if (data.hasOwnProperty('FullName'))
        obj.fullName = ApiClient.convertToType(data['FullName'], 'String');
      if (data.hasOwnProperty('HubspotCompanyId'))
        obj.hubspotCompanyId = ApiClient.convertToType(data['HubspotCompanyId'], 'String');
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('Industry'))
        obj.industry = ApiClient.convertToType(data['Industry'], 'String');
      if (data.hasOwnProperty('Integration'))
        obj.integration = ApiClient.convertToType(data['Integration'], 'String');
      if (data.hasOwnProperty('IsForbid'))
        obj.isForbid = ApiClient.convertToType(data['IsForbid'], 'Boolean');
      if (data.hasOwnProperty('IsUnlocked'))
        obj.isUnlocked = ApiClient.convertToType(data['IsUnlocked'], 'Boolean');
      if (data.hasOwnProperty('Lang'))
        obj.lang = ApiClient.convertToType(data['Lang'], 'Number');
      if (data.hasOwnProperty('LeadSource'))
        obj.leadSource = ApiClient.convertToType(data['LeadSource'], 'String');
      if (data.hasOwnProperty('LifetimeSendxCredit'))
        obj.lifetimeSendxCredit = ApiClient.convertToType(data['LifetimeSendxCredit'], 'Number');
      if (data.hasOwnProperty('MigratingFrom'))
        obj.migratingFrom = ApiClient.convertToType(data['MigratingFrom'], 'String');
      if (data.hasOwnProperty('MonthEmails'))
        obj.monthEmails = ApiClient.convertToType(data['MonthEmails'], 'Number');
      if (data.hasOwnProperty('OnboardingDate'))
        obj.onboardingDate = ApiClient.convertToType(data['OnboardingDate'], 'String');
      if (data.hasOwnProperty('OnboardingInfoAdded'))
        obj.onboardingInfoAdded = ApiClient.convertToType(data['OnboardingInfoAdded'], 'Boolean');
      if (data.hasOwnProperty('Password'))
        obj.password = ApiClient.convertToType(data['Password'], 'String');
      if (data.hasOwnProperty('PhoneNumber'))
        obj.phoneNumber = ApiClient.convertToType(data['PhoneNumber'], 'String');
      if (data.hasOwnProperty('PromoCode'))
        obj.promoCode = ApiClient.convertToType(data['PromoCode'], 'String');
      if (data.hasOwnProperty('Rands'))
        obj.rands = ApiClient.convertToType(data['Rands'], 'String');
      if (data.hasOwnProperty('ReferredByAccount'))
        obj.referredByAccount = ApiClient.convertToType(data['ReferredByAccount'], 'String');
      if (data.hasOwnProperty('RemoveBranding'))
        obj.removeBranding = ApiClient.convertToType(data['RemoveBranding'], 'Boolean');
      if (data.hasOwnProperty('Risk'))
        obj.risk = ModelsAccountRisk.constructFromObject(data['Risk']);
      if (data.hasOwnProperty('SendingType'))
        obj.sendingType = ModelsSendingType.constructFromObject(data['SendingType']);
      if (data.hasOwnProperty('ShowPromoCodeOffer'))
        obj.showPromoCodeOffer = ApiClient.convertToType(data['ShowPromoCodeOffer'], 'Boolean');
      if (data.hasOwnProperty('Tier'))
        obj.tier = ModelsAccountTier.constructFromObject(data['Tier']);
      if (data.hasOwnProperty('Timezone'))
        obj.timezone = ApiClient.convertToType(data['Timezone'], 'String');
      if (data.hasOwnProperty('TopGoal'))
        obj.topGoal = ApiClient.convertToType(data['TopGoal'], 'String');
      if (data.hasOwnProperty('TopProblem'))
        obj.topProblem = ApiClient.convertToType(data['TopProblem'], 'String');
      if (data.hasOwnProperty('TrialPeriod'))
        obj.trialPeriod = ApiClient.convertToType(data['TrialPeriod'], 'Number');
      if (data.hasOwnProperty('Updated'))
        obj.updated = ApiClient.convertToType(data['Updated'], 'String');
      if (data.hasOwnProperty('Website'))
        obj.website = ApiClient.convertToType(data['Website'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} accountName
   */
  exports.prototype.accountName = undefined;

  /**
   * @member {String} apiKey
   */
  exports.prototype.apiKey = undefined;

  /**
   * @member {String} avatarUrl
   */
  exports.prototype.avatarUrl = undefined;

  /**
   * @member {String} companyName
   */
  exports.prototype.companyName = undefined;

  /**
   * @member {String} contactSize
   */
  exports.prototype.contactSize = undefined;

  /**
   * @member {String} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} currentSendxCredit
   */
  exports.prototype.currentSendxCredit = undefined;

  /**
   * @member {String} ecomPlatform
   */
  exports.prototype.ecomPlatform = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} emailListSource
   */
  exports.prototype.emailListSource = undefined;

  /**
   * @member {String} fullName
   */
  exports.prototype.fullName = undefined;

  /**
   * @member {String} hubspotCompanyId
   */
  exports.prototype.hubspotCompanyId = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} industry
   */
  exports.prototype.industry = undefined;

  /**
   * @member {String} integration
   */
  exports.prototype.integration = undefined;

  /**
   * @member {Boolean} isForbid
   */
  exports.prototype.isForbid = undefined;

  /**
   * @member {Boolean} isUnlocked
   */
  exports.prototype.isUnlocked = undefined;

  /**
   * @member {Number} lang
   */
  exports.prototype.lang = undefined;

  /**
   * @member {String} leadSource
   */
  exports.prototype.leadSource = undefined;

  /**
   * @member {Number} lifetimeSendxCredit
   */
  exports.prototype.lifetimeSendxCredit = undefined;

  /**
   * @member {String} migratingFrom
   */
  exports.prototype.migratingFrom = undefined;

  /**
   * @member {Number} monthEmails
   */
  exports.prototype.monthEmails = undefined;

  /**
   * @member {String} onboardingDate
   */
  exports.prototype.onboardingDate = undefined;

  /**
   * @member {Boolean} onboardingInfoAdded
   */
  exports.prototype.onboardingInfoAdded = undefined;

  /**
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * @member {String} phoneNumber
   */
  exports.prototype.phoneNumber = undefined;

  /**
   * @member {String} promoCode
   */
  exports.prototype.promoCode = undefined;

  /**
   * @member {String} rands
   */
  exports.prototype.rands = undefined;

  /**
   * @member {String} referredByAccount
   */
  exports.prototype.referredByAccount = undefined;

  /**
   * @member {Boolean} removeBranding
   */
  exports.prototype.removeBranding = undefined;

  /**
   * @member {module:model/ModelsAccountRisk} risk
   */
  exports.prototype.risk = undefined;

  /**
   * @member {module:model/ModelsSendingType} sendingType
   */
  exports.prototype.sendingType = undefined;

  /**
   * @member {Boolean} showPromoCodeOffer
   */
  exports.prototype.showPromoCodeOffer = undefined;

  /**
   * @member {module:model/ModelsAccountTier} tier
   */
  exports.prototype.tier = undefined;

  /**
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;

  /**
   * @member {String} topGoal
   */
  exports.prototype.topGoal = undefined;

  /**
   * @member {String} topProblem
   */
  exports.prototype.topProblem = undefined;

  /**
   * @member {Number} trialPeriod
   */
  exports.prototype.trialPeriod = undefined;

  /**
   * @member {String} updated
   */
  exports.prototype.updated = undefined;

  /**
   * @member {String} website
   */
  exports.prototype.website = undefined;


  return exports;

}));