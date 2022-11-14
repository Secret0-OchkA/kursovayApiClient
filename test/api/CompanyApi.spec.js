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
    instance = new MyApiV1.CompanyApi();
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

  describe('CompanyApi', function() {
    describe('changeName', function() {
      it('should call changeName successfully', function(done) {
        //uncomment below and update the code to test changeName
        //instance.changeName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCompany', function() {
      it('should call createCompany successfully', function(done) {
        //uncomment below and update the code to test createCompany
        //instance.createCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletCompany', function() {
      it('should call deletCompany successfully', function(done) {
        //uncomment below and update the code to test deletCompany
        //instance.deletCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompany', function() {
      it('should call getCompany successfully', function(done) {
        //uncomment below and update the code to test getCompany
        //instance.getCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyes', function() {
      it('should call getCompanyes successfully', function(done) {
        //uncomment below and update the code to test getCompanyes
        //instance.getCompanyes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
