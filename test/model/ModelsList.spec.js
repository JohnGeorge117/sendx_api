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
    describe('ModelsList', function() {
      beforeEach(function() {
        instance = new SendXAppServerV2.ModelsList();
      });

      it('should create an instance of ModelsList', function() {
        // TODO: update the code to test ModelsList
        expect(instance).to.be.a(SendXAppServerV2.ModelsList);
      });

      it('should have the property confirmFromEmail (base name: "confirmFromEmail")', function() {
        // TODO: update the code to test the property confirmFromEmail
        expect(instance).to.have.property('confirmFromEmail');
        // expect(instance.confirmFromEmail).to.be(expectedValueLiteral);
      });

      it('should have the property confirmFromName (base name: "confirmFromName")', function() {
        // TODO: update the code to test the property confirmFromName
        expect(instance).to.have.property('confirmFromName');
        // expect(instance.confirmFromName).to.be(expectedValueLiteral);
      });

      it('should have the property confirmMailMessage (base name: "confirmMailMessage")', function() {
        // TODO: update the code to test the property confirmMailMessage
        expect(instance).to.have.property('confirmMailMessage');
        // expect(instance.confirmMailMessage).to.be(expectedValueLiteral);
      });

      it('should have the property confirmMailSubject (base name: "confirmMailSubject")', function() {
        // TODO: update the code to test the property confirmMailSubject
        expect(instance).to.have.property('confirmMailSubject');
        // expect(instance.confirmMailSubject).to.be(expectedValueLiteral);
      });

      it('should have the property confirmSuccessPage (base name: "confirmSuccessPage")', function() {
        // TODO: update the code to test the property confirmSuccessPage
        expect(instance).to.have.property('confirmSuccessPage');
        // expect(instance.confirmSuccessPage).to.be(expectedValueLiteral);
      });

      it('should have the property encrypted (base name: "encrypted")', function() {
        // TODO: update the code to test the property encrypted
        expect(instance).to.have.property('encrypted');
        // expect(instance.encrypted).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property sendThankYouMail (base name: "sendThankYouMail")', function() {
        // TODO: update the code to test the property sendThankYouMail
        expect(instance).to.have.property('sendThankYouMail');
        // expect(instance.sendThankYouMail).to.be(expectedValueLiteral);
      });

      it('should have the property thankYouFromEmail (base name: "thankYouFromEmail")', function() {
        // TODO: update the code to test the property thankYouFromEmail
        expect(instance).to.have.property('thankYouFromEmail');
        // expect(instance.thankYouFromEmail).to.be(expectedValueLiteral);
      });

      it('should have the property thankYouFromName (base name: "thankYouFromName")', function() {
        // TODO: update the code to test the property thankYouFromName
        expect(instance).to.have.property('thankYouFromName');
        // expect(instance.thankYouFromName).to.be(expectedValueLiteral);
      });

      it('should have the property thankYouMailMessage (base name: "thankYouMailMessage")', function() {
        // TODO: update the code to test the property thankYouMailMessage
        expect(instance).to.have.property('thankYouMailMessage');
        // expect(instance.thankYouMailMessage).to.be(expectedValueLiteral);
      });

      it('should have the property thankYouMailSubject (base name: "thankYouMailSubject")', function() {
        // TODO: update the code to test the property thankYouMailSubject
        expect(instance).to.have.property('thankYouMailSubject');
        // expect(instance.thankYouMailSubject).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));