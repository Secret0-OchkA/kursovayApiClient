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
    instance = new MyApiV1.ExpenseFromEmployeeApi();
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

  describe('ExpenseFromEmployeeApi', function() {
    describe('changeAmmount', function() {
      it('should call changeAmmount successfully', function(done) {
        //uncomment below and update the code to test changeAmmount
        //instance.changeAmmount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('confirmExpense', function() {
      it('should call confirmExpense successfully', function(done) {
        //uncomment below and update the code to test confirmExpense
        //instance.confirmExpense(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createExpense', function() {
      it('should call createExpense successfully', function(done) {
        //uncomment below and update the code to test createExpense
        //instance.createExpense(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExpense', function() {
      it('should call deleteExpense successfully', function(done) {
        //uncomment below and update the code to test deleteExpense
        //instance.deleteExpense(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExpense', function() {
      it('should call getExpense successfully', function(done) {
        //uncomment below and update the code to test getExpense
        //instance.getExpense(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExpenses', function() {
      it('should call getExpenses successfully', function(done) {
        //uncomment below and update the code to test getExpenses
        //instance.getExpenses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setExpenseType', function() {
      it('should call setExpenseType successfully', function(done) {
        //uncomment below and update the code to test setExpenseType
        //instance.setExpenseType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateEpxense', function() {
      it('should call validateEpxense successfully', function(done) {
        //uncomment below and update the code to test validateEpxense
        //instance.validateEpxense(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
