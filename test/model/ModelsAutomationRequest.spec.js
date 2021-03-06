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
    describe('ModelsAutomationRequest', function() {
      beforeEach(function() {
        instance = new SendXAppServerV2.ModelsAutomationRequest();
      });

      it('should create an instance of ModelsAutomationRequest', function() {
        // TODO: update the code to test ModelsAutomationRequest
        expect(instance).to.be.a(SendXAppServerV2.ModelsAutomationRequest);
      });

      it('should have the property automationAction (base name: "automationAction")', function() {
        // TODO: update the code to test the property automationAction
        expect(instance).to.have.property('automationAction');
        // expect(instance.automationAction).to.be(expectedValueLiteral);
      });

      it('should have the property automationTrigger (base name: "automationTrigger")', function() {
        // TODO: update the code to test the property automationTrigger
        expect(instance).to.have.property('automationTrigger');
        // expect(instance.automationTrigger).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));
