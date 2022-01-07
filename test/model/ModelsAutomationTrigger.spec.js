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
    describe('ModelsAutomationTrigger', function() {
      beforeEach(function() {
        instance = new SendXAppServerV2.ModelsAutomationTrigger();
      });

      it('should create an instance of ModelsAutomationTrigger', function() {
        // TODO: update the code to test ModelsAutomationTrigger
        expect(instance).to.be.a(SendXAppServerV2.ModelsAutomationTrigger);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property metaData (base name: "metaData")', function() {
        // TODO: update the code to test the property metaData
        expect(instance).to.have.property('metaData');
        // expect(instance.metaData).to.be(expectedValueLiteral);
      });

      it('should have the property metaDataElementWrapper (base name: "metaDataElementWrapper")', function() {
        // TODO: update the code to test the property metaDataElementWrapper
        expect(instance).to.have.property('metaDataElementWrapper');
        // expect(instance.metaDataElementWrapper).to.be(expectedValueLiteral);
      });

      it('should have the property pageSourceType (base name: "pageSourceType")', function() {
        // TODO: update the code to test the property pageSourceType
        expect(instance).to.have.property('pageSourceType');
        // expect(instance.pageSourceType).to.be(expectedValueLiteral);
      });

      it('should have the property pageSourceValue (base name: "pageSourceValue")', function() {
        // TODO: update the code to test the property pageSourceValue
        expect(instance).to.have.property('pageSourceValue');
        // expect(instance.pageSourceValue).to.be(expectedValueLiteral);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property triggerForExisting (base name: "triggerForExisting")', function() {
        // TODO: update the code to test the property triggerForExisting
        expect(instance).to.have.property('triggerForExisting');
        // expect(instance.triggerForExisting).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
