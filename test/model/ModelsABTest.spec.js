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
    describe('ModelsABTest', function() {
      beforeEach(function() {
        instance = new SendXAppServerV2.ModelsABTest();
      });

      it('should create an instance of ModelsABTest', function() {
        // TODO: update the code to test ModelsABTest
        expect(instance).to.be.a(SendXAppServerV2.ModelsABTest);
      });

      it('should have the property channel (base name: "channel")', function() {
        // TODO: update the code to test the property channel
        expect(instance).to.have.property('channel');
        // expect(instance.channel).to.be(expectedValueLiteral);
      });

      it('should have the property decisionType (base name: "decisionType")', function() {
        // TODO: update the code to test the property decisionType
        expect(instance).to.have.property('decisionType');
        // expect(instance.decisionType).to.be(expectedValueLiteral);
      });

      it('should have the property encryptedId (base name: "encryptedId")', function() {
        // TODO: update the code to test the property encryptedId
        expect(instance).to.have.property('encryptedId');
        // expect(instance.encryptedId).to.be(expectedValueLiteral);
      });

      it('should have the property excludedSegmentOptions (base name: "excludedSegmentOptions")', function() {
        // TODO: update the code to test the property excludedSegmentOptions
        expect(instance).to.have.property('excludedSegmentOptions');
        // expect(instance.excludedSegmentOptions).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property includedSegmentOptions (base name: "includedSegmentOptions")', function() {
        // TODO: update the code to test the property includedSegmentOptions
        expect(instance).to.have.property('includedSegmentOptions');
        // expect(instance.includedSegmentOptions).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property scheduleCondition (base name: "scheduleCondition")', function() {
        // TODO: update the code to test the property scheduleCondition
        expect(instance).to.have.property('scheduleCondition');
        // expect(instance.scheduleCondition).to.be(expectedValueLiteral);
      });

      it('should have the property scheduleType (base name: "scheduleType")', function() {
        // TODO: update the code to test the property scheduleType
        expect(instance).to.have.property('scheduleType');
        // expect(instance.scheduleType).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property testEntityType (base name: "testEntityType")', function() {
        // TODO: update the code to test the property testEntityType
        expect(instance).to.have.property('testEntityType');
        // expect(instance.testEntityType).to.be(expectedValueLiteral);
      });

      it('should have the property testParameter (base name: "testParameter")', function() {
        // TODO: update the code to test the property testParameter
        expect(instance).to.have.property('testParameter');
        // expect(instance.testParameter).to.be(expectedValueLiteral);
      });

      it('should have the property testPercent (base name: "testPercent")', function() {
        // TODO: update the code to test the property testPercent
        expect(instance).to.have.property('testPercent');
        // expect(instance.testPercent).to.be(expectedValueLiteral);
      });

      it('should have the property timeCondition (base name: "timeCondition")', function() {
        // TODO: update the code to test the property timeCondition
        expect(instance).to.have.property('timeCondition');
        // expect(instance.timeCondition).to.be(expectedValueLiteral);
      });

      it('should have the property timeZone (base name: "timeZone")', function() {
        // TODO: update the code to test the property timeZone
        expect(instance).to.have.property('timeZone');
        // expect(instance.timeZone).to.be(expectedValueLiteral);
      });

      it('should have the property waitDurationType (base name: "waitDurationType")', function() {
        // TODO: update the code to test the property waitDurationType
        expect(instance).to.have.property('waitDurationType');
        // expect(instance.waitDurationType).to.be(expectedValueLiteral);
      });

      it('should have the property waitDurationValue (base name: "waitDurationValue")', function() {
        // TODO: update the code to test the property waitDurationValue
        expect(instance).to.have.property('waitDurationValue');
        // expect(instance.waitDurationValue).to.be(expectedValueLiteral);
      });

    });
  });

}));
