/**
 * Skyl.ai API Documentation
 * This is Skyl.ai API documentation.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    factory(root.expect, root.SkylaiApiDocumentation);
  }
}(this, function(expect, SkylaiApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SkylaiApiDocumentation.ObjectDetection();
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

  describe('ObjectDetection', function() {
    it('should create an instance of ObjectDetection', function() {
      // uncomment below and update the code to test ObjectDetection
      //var instane = new SkylaiApiDocumentation.ObjectDetection();
      //expect(instance).to.be.a(SkylaiApiDocumentation.ObjectDetection);
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new SkylaiApiDocumentation.ObjectDetection();
      //expect(instance).to.be();
    });

    it('should have the property objects (base name: "objects")', function() {
      // uncomment below and update the code to test the property objects
      //var instane = new SkylaiApiDocumentation.ObjectDetection();
      //expect(instance).to.be();
    });

  });

}));
