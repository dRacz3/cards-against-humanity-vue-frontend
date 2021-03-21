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

import ApiClient from '../ApiClient';

/**
 * The LoginFailureMessage model module.
 * @module model/LoginFailureMessage
 * @version 0.0.1
 */
class LoginFailureMessage {
    /**
     * Constructs a new <code>LoginFailureMessage</code>.
     * @alias module:model/LoginFailureMessage
     * @param detail {String} 
     */
    constructor(detail) { 
        
        LoginFailureMessage.initialize(this, detail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, detail) { 
        obj['detail'] = detail;
    }

    /**
     * Constructs a <code>LoginFailureMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginFailureMessage} obj Optional instance to populate.
     * @return {module:model/LoginFailureMessage} The populated <code>LoginFailureMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginFailureMessage();

            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} detail
 */
LoginFailureMessage.prototype['detail'] = undefined;






export default LoginFailureMessage;

