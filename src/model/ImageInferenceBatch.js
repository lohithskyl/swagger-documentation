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

/**
* The ImageInferenceBatch model module.
* @module model/ImageInferenceBatch
* @version 1.0.0
*/
export default class ImageInferenceBatch {
    /**
    * Constructs a new <code>ImageInferenceBatch</code>.
    * @alias module:model/ImageInferenceBatch
    * @class
    */

    constructor() {
        
        AnyOfbody3.call(this);
        
    }

    /**
    * Constructs a <code>ImageInferenceBatch</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ImageInferenceBatch} obj Optional instance to populate.
    * @return {module:model/ImageInferenceBatch} The populated <code>ImageInferenceBatch</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageInferenceBatch();
                        
            
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], File);
            }
        }
        return obj;
    }

    /**
    * image file containings url of images to be inferenced
    * @member {File} image
    */
    'image' = undefined;

    // Implement AnyOfbody3 interface:
    


}
