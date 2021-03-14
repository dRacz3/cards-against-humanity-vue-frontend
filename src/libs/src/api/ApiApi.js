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


import ApiClient from "../ApiClient";
import Register from '../model/Register';
import VerifyEmail from '../model/VerifyEmail';

/**
* Api service.
* @module api/ApiApi
* @version v1
*/
export default class ApiApi {

    /**
    * Constructs a new ApiApi. 
    * @alias module:api/ApiApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiRestAuthRegistrationCreate operation.
     * @callback module:api/ApiApi~apiRestAuthRegistrationCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Register} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Register} data 
     * @param {module:api/ApiApi~apiRestAuthRegistrationCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Register}
     */
    apiRestAuthRegistrationCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiRestAuthRegistrationCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Register;
      return this.apiClient.callApi(
        '/api/rest-auth/registration/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthRegistrationVerifyEmailCreate operation.
     * @callback module:api/ApiApi~apiRestAuthRegistrationVerifyEmailCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VerifyEmail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/VerifyEmail} data 
     * @param {module:api/ApiApi~apiRestAuthRegistrationVerifyEmailCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VerifyEmail}
     */
    apiRestAuthRegistrationVerifyEmailCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiRestAuthRegistrationVerifyEmailCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = VerifyEmail;
      return this.apiClient.callApi(
        '/api/rest-auth/registration/verify-email/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
