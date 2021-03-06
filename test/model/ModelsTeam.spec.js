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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendXAppServerV2);
  }
}(this, function(expect, SendXAppServerV2) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ModelsTeam', function() {
      beforeEach(function() {
        instance = new SendXAppServerV2.ModelsTeam();
      });

      it('should create an instance of ModelsTeam', function() {
        // TODO: update the code to test ModelsTeam
        expect(instance).to.be.a(SendXAppServerV2.ModelsTeam);
      });

      it('should have the property address (base name: "Address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property companyName (base name: "CompanyName")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "Created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property customProviderId (base name: "CustomProviderId")', function() {
        // TODO: update the code to test the property customProviderId
        expect(instance).to.have.property('customProviderId');
        // expect(instance.customProviderId).to.be(expectedValueLiteral);
      });

      it('should have the property customTestProviderId (base name: "CustomTestProviderId")', function() {
        // TODO: update the code to test the property customTestProviderId
        expect(instance).to.have.property('customTestProviderId');
        // expect(instance.customTestProviderId).to.be(expectedValueLiteral);
      });

      it('should have the property defaultProviderId (base name: "DefaultProviderId")', function() {
        // TODO: update the code to test the property defaultProviderId
        expect(instance).to.have.property('defaultProviderId');
        // expect(instance.defaultProviderId).to.be(expectedValueLiteral);
      });

      it('should have the property defaultTestProviderId (base name: "DefaultTestProviderId")', function() {
        // TODO: update the code to test the property defaultTestProviderId
        expect(instance).to.have.property('defaultTestProviderId');
        // expect(instance.defaultTestProviderId).to.be(expectedValueLiteral);
      });

      it('should have the property providerType (base name: "ProviderType")', function() {
        // TODO: update the code to test the property providerType
        expect(instance).to.have.property('providerType');
        // expect(instance.providerType).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "Updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

      it('should have the property apiKey (base name: "apiKey")', function() {
        // TODO: update the code to test the property apiKey
        expect(instance).to.have.property('apiKey');
        // expect(instance.apiKey).to.be(expectedValueLiteral);
      });

      it('should have the property currencyFormat (base name: "currency_format")', function() {
        // TODO: update the code to test the property currencyFormat
        expect(instance).to.have.property('currencyFormat');
        // expect(instance.currencyFormat).to.be(expectedValueLiteral);
      });

      it('should have the property defaultCurrency (base name: "default_currency")', function() {
        // TODO: update the code to test the property defaultCurrency
        expect(instance).to.have.property('defaultCurrency');
        // expect(instance.defaultCurrency).to.be(expectedValueLiteral);
      });

      it('should have the property defaultEmail (base name: "default_email")', function() {
        // TODO: update the code to test the property defaultEmail
        expect(instance).to.have.property('defaultEmail');
        // expect(instance.defaultEmail).to.be(expectedValueLiteral);
      });

      it('should have the property defaultFromName (base name: "default_from_name")', function() {
        // TODO: update the code to test the property defaultFromName
        expect(instance).to.have.property('defaultFromName');
        // expect(instance.defaultFromName).to.be(expectedValueLiteral);
      });

      it('should have the property defaultReplyToEmail (base name: "default_reply_to_email")', function() {
        // TODO: update the code to test the property defaultReplyToEmail
        expect(instance).to.have.property('defaultReplyToEmail');
        // expect(instance.defaultReplyToEmail).to.be(expectedValueLiteral);
      });

      it('should have the property delayBetweenEmails (base name: "delay_between_emails")', function() {
        // TODO: update the code to test the property delayBetweenEmails
        expect(instance).to.have.property('delayBetweenEmails');
        // expect(instance.delayBetweenEmails).to.be(expectedValueLiteral);
      });

      it('should have the property enableAutoPageTrack (base name: "enable_auto_page_track")', function() {
        // TODO: update the code to test the property enableAutoPageTrack
        expect(instance).to.have.property('enableAutoPageTrack');
        // expect(instance.enableAutoPageTrack).to.be(expectedValueLiteral);
      });

      it('should have the property encryptedId (base name: "encrypted_id")', function() {
        // TODO: update the code to test the property encryptedId
        expect(instance).to.have.property('encryptedId');
        // expect(instance.encryptedId).to.be(expectedValueLiteral);
      });

      it('should have the property globalUnsubscribeSuccessPage (base name: "global_unsubscribe_success_page")', function() {
        // TODO: update the code to test the property globalUnsubscribeSuccessPage
        expect(instance).to.have.property('globalUnsubscribeSuccessPage');
        // expect(instance.globalUnsubscribeSuccessPage).to.be(expectedValueLiteral);
      });

      it('should have the property globalUnsubscribeText (base name: "global_unsubscribe_text")', function() {
        // TODO: update the code to test the property globalUnsubscribeText
        expect(instance).to.have.property('globalUnsubscribeText');
        // expect(instance.globalUnsubscribeText).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property isContactAddedViaForm (base name: "is_contact_added_via_form")', function() {
        // TODO: update the code to test the property isContactAddedViaForm
        expect(instance).to.have.property('isContactAddedViaForm');
        // expect(instance.isContactAddedViaForm).to.be(expectedValueLiteral);
      });

      it('should have the property isContactAddedViaLandingpage (base name: "is_contact_added_via_landingpage")', function() {
        // TODO: update the code to test the property isContactAddedViaLandingpage
        expect(instance).to.have.property('isContactAddedViaLandingpage');
        // expect(instance.isContactAddedViaLandingpage).to.be(expectedValueLiteral);
      });

      it('should have the property isContactAddedViaPopup (base name: "is_contact_added_via_popup")', function() {
        // TODO: update the code to test the property isContactAddedViaPopup
        expect(instance).to.have.property('isContactAddedViaPopup');
        // expect(instance.isContactAddedViaPopup).to.be(expectedValueLiteral);
      });

      it('should have the property isGlobalUnsubscribeOnly (base name: "is_global_unsubscribe_only")', function() {
        // TODO: update the code to test the property isGlobalUnsubscribeOnly
        expect(instance).to.have.property('isGlobalUnsubscribeOnly');
        // expect(instance.isGlobalUnsubscribeOnly).to.be(expectedValueLiteral);
      });

      it('should have the property isImpressionViaForm (base name: "is_impression_via_form")', function() {
        // TODO: update the code to test the property isImpressionViaForm
        expect(instance).to.have.property('isImpressionViaForm');
        // expect(instance.isImpressionViaForm).to.be(expectedValueLiteral);
      });

      it('should have the property isImpressionViaLandingpage (base name: "is_impression_via_landingpage")', function() {
        // TODO: update the code to test the property isImpressionViaLandingpage
        expect(instance).to.have.property('isImpressionViaLandingpage');
        // expect(instance.isImpressionViaLandingpage).to.be(expectedValueLiteral);
      });

      it('should have the property isImpressionViaPopup (base name: "is_impression_via_popup")', function() {
        // TODO: update the code to test the property isImpressionViaPopup
        expect(instance).to.have.property('isImpressionViaPopup');
        // expect(instance.isImpressionViaPopup).to.be(expectedValueLiteral);
      });

      it('should have the property isBulkSender (base name: "isBulkSender")', function() {
        // TODO: update the code to test the property isBulkSender
        expect(instance).to.have.property('isBulkSender');
        // expect(instance.isBulkSender).to.be(expectedValueLiteral);
      });

      it('should have the property landingPageCustomDomain (base name: "landing_page_custom_domain")', function() {
        // TODO: update the code to test the property landingPageCustomDomain
        expect(instance).to.have.property('landingPageCustomDomain');
        // expect(instance.landingPageCustomDomain).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property sendpostSubaccountApiKey (base name: "sendpost_subaccount_api_key")', function() {
        // TODO: update the code to test the property sendpostSubaccountApiKey
        expect(instance).to.have.property('sendpostSubaccountApiKey');
        // expect(instance.sendpostSubaccountApiKey).to.be(expectedValueLiteral);
      });

      it('should have the property sendpostSubaccountId (base name: "sendpost_subaccount_id")', function() {
        // TODO: update the code to test the property sendpostSubaccountId
        expect(instance).to.have.property('sendpostSubaccountId');
        // expect(instance.sendpostSubaccountId).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
