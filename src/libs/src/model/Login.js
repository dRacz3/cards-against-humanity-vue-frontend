/**
 * Snippets API
 * Test description
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@snippets.local
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Login model module.
 * @module model/Login
 * @version v1
 */
class Login {
    /**
     * Constructs a new <code>Login</code>.
     * @alias module:model/Login
     * @param password {String} 
     */
    constructor(password) { 
        
        Login.initialize(this, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, password) { 
        obj['password'] = password;
    }

    /**
     * Constructs a <code>Login</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Login} obj Optional instance to populate.
     * @return {module:model/Login} The populated <code>Login</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Login();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
Login.prototype['username'] = undefined;

/**
 * @member {String} email
 */
Login.prototype['email'] = undefined;

/**
 * @member {String} password
 */
Login.prototype['password'] = undefined;






export default Login;

