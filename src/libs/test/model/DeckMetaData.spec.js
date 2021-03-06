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
    instance = new FastCards.DeckMetaData();
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

  describe('DeckMetaData', function() {
    it('should create an instance of DeckMetaData', function() {
      // uncomment below and update the code to test DeckMetaData
      //var instane = new FastCards.DeckMetaData();
      //expect(instance).to.be.a(FastCards.DeckMetaData);
    });

    it('should have the property idName (base name: "id_name")', function() {
      // uncomment below and update the code to test the property idName
      //var instane = new FastCards.DeckMetaData();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new FastCards.DeckMetaData();
      //expect(instance).to.be();
    });

    it('should have the property official (base name: "official")', function() {
      // uncomment below and update the code to test the property official
      //var instane = new FastCards.DeckMetaData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new FastCards.DeckMetaData();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instane = new FastCards.DeckMetaData();
      //expect(instance).to.be();
    });

  });

}));
