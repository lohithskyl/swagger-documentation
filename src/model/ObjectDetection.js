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

import ApiClient from '../ApiClient';
import ObjectDetectionImage from './ObjectDetectionImage';
import ObjectDetectionObjects from './ObjectDetectionObjects';

/**
* The ObjectDetection model module.
* @module model/ObjectDetection
* @version 1.0.0
*/
export default class ObjectDetection {
    /**
    * Constructs a new <code>ObjectDetection</code>.
    * @alias module:model/ObjectDetection
    * @class
    */

    constructor() {
        
        AnyOfbody.call(this);
        
    }

    /**
    * Constructs a <code>ObjectDetection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ObjectDetection} obj Optional instance to populate.
    * @return {module:model/ObjectDetection} The populated <code>ObjectDetection</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectDetection();
                        
            
            if (data.hasOwnProperty('image')) {
                obj['image'] = ObjectDetectionImage.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('objects')) {
                obj['objects'] = ApiClient.convertToType(data['objects'], [ObjectDetectionObjects]);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ObjectDetectionImage} image
    */
    'image' = undefined;
    /**
    * @member {Array.<module:model/ObjectDetectionObjects>} objects
    */
    'objects' = undefined;

    // Implement AnyOfbody interface:
    


}