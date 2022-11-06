/**
 * My API - V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: ne bydet
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MyApiV1);
  }
}(this, function(expect, MyApiV1) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MyApiV1.Expense();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Expense', function() {
    it('should create an instance of Expense', function() {
      // uncomment below and update the code to test Expense
      //var instance = new MyApiV1.Expense();
      //expect(instance).to.be.a(MyApiV1.Expense);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MyApiV1.Expense();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instance = new MyApiV1.Expense();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instance = new MyApiV1.Expense();
      //expect(instance).to.be();
    });

    it('should have the property confirm (base name: "confirm")', function() {
      // uncomment below and update the code to test the property confirm
      //var instance = new MyApiV1.Expense();
      //expect(instance).to.be();
    });

    it('should have the property valid (base name: "valid")', function() {
      // uncomment below and update the code to test the property valid
      //var instance = new MyApiV1.Expense();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new MyApiV1.Expense();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new MyApiV1.Expense();
      //expect(instance).to.be();
    });

  });

}));
