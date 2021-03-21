/**
 * fast-cards
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
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
    factory(root.expect, root.FastCards);
  }
}(this, function(expect, FastCards) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FastCards.AuthApi();
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

  describe('AuthApi', function() {
    describe('createUserAuthSignupPost', function() {
      it('should call createUserAuthSignupPost successfully', function(done) {
        //uncomment below and update the code to test createUserAuthSignupPost
        //instance.createUserAuthSignupPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readUserAuthUsersUserIdGet', function() {
      it('should call readUserAuthUsersUserIdGet successfully', function(done) {
        //uncomment below and update the code to test readUserAuthUsersUserIdGet
        //instance.readUserAuthUsersUserIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readUsersAuthGet', function() {
      it('should call readUsersAuthGet successfully', function(done) {
        //uncomment below and update the code to test readUsersAuthGet
        //instance.readUsersAuthGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userLoginAuthLoginPost', function() {
      it('should call userLoginAuthLoginPost successfully', function(done) {
        //uncomment below and update the code to test userLoginAuthLoginPost
        //instance.userLoginAuthLoginPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
