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
    describe('ModelsDripStepRequest', function() {
      beforeEach(function() {
        instance = new SendXAppServerV2.ModelsDripStepRequest();
      });

      it('should create an instance of ModelsDripStepRequest', function() {
        // TODO: update the code to test ModelsDripStepRequest
        expect(instance).to.be.a(SendXAppServerV2.ModelsDripStepRequest);
      });

      it('should have the property autogeneratePlainText (base name: "autogeneratePlainText")', function() {
        // TODO: update the code to test the property autogeneratePlainText
        expect(instance).to.have.property('autogeneratePlainText');
        // expect(instance.autogeneratePlainText).to.be(expectedValueLiteral);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property durationUnit (base name: "durationUnit")', function() {
        // TODO: update the code to test the property durationUnit
        expect(instance).to.have.property('durationUnit');
        // expect(instance.durationUnit).to.be(expectedValueLiteral);
      });

      it('should have the property fromEmail (base name: "fromEmail")', function() {
        // TODO: update the code to test the property fromEmail
        expect(instance).to.have.property('fromEmail');
        // expect(instance.fromEmail).to.be(expectedValueLiteral);
      });

      it('should have the property fromName (base name: "fromName")', function() {
        // TODO: update the code to test the property fromName
        expect(instance).to.have.property('fromName');
        // expect(instance.fromName).to.be(expectedValueLiteral);
      });

      it('should have the property htmlCode (base name: "htmlCode")', function() {
        // TODO: update the code to test the property htmlCode
        expect(instance).to.have.property('htmlCode');
        // expect(instance.htmlCode).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property plainText (base name: "plainText")', function() {
        // TODO: update the code to test the property plainText
        expect(instance).to.have.property('plainText');
        // expect(instance.plainText).to.be(expectedValueLiteral);
      });

      it('should have the property segmentstr (base name: "segmentstr")', function() {
        // TODO: update the code to test the property segmentstr
        expect(instance).to.have.property('segmentstr');
        // expect(instance.segmentstr).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property templateCode (base name: "templateCode")', function() {
        // TODO: update the code to test the property templateCode
        expect(instance).to.have.property('templateCode');
        // expect(instance.templateCode).to.be(expectedValueLiteral);
      });

    });
  });

}));