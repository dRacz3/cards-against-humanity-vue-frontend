/**
 * fast-cards
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BlackCard from '../model/BlackCard';
import DeckMetaData from '../model/DeckMetaData';
import HTTPValidationError from '../model/HTTPValidationError';
import WhiteCard from '../model/WhiteCard';

/**
* Cards service.
* @module api/CardsApi
* @version 0.1.0
*/
export default class CardsApi {

    /**
    * Constructs a new CardsApi. 
    * @alias module:api/CardsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createBlackCardCardsBlackPut operation.
     * @callback module:api/CardsApi~createBlackCardCardsBlackPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlackCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Black Card
     * @param {module:model/BlackCard} blackCard 
     * @param {module:api/CardsApi~createBlackCardCardsBlackPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlackCard}
     */
    createBlackCardCardsBlackPut(blackCard, callback) {
      let postBody = blackCard;
      // verify the required parameter 'blackCard' is set
      if (blackCard === undefined || blackCard === null) {
        throw new Error("Missing the required parameter 'blackCard' when calling createBlackCardCardsBlackPut");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BlackCard;
      return this.apiClient.callApi(
        '/cards/black', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createDeckCardsDeckPut operation.
     * @callback module:api/CardsApi~createDeckCardsDeckPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeckMetaData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Deck
     * @param {module:model/DeckMetaData} deckMetaData 
     * @param {module:api/CardsApi~createDeckCardsDeckPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeckMetaData}
     */
    createDeckCardsDeckPut(deckMetaData, callback) {
      let postBody = deckMetaData;
      // verify the required parameter 'deckMetaData' is set
      if (deckMetaData === undefined || deckMetaData === null) {
        throw new Error("Missing the required parameter 'deckMetaData' when calling createDeckCardsDeckPut");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeckMetaData;
      return this.apiClient.callApi(
        '/cards/deck', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createWhiteCardCardsWhitePut operation.
     * @callback module:api/CardsApi~createWhiteCardCardsWhitePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WhiteCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create White Card
     * @param {module:model/WhiteCard} whiteCard 
     * @param {module:api/CardsApi~createWhiteCardCardsWhitePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhiteCard}
     */
    createWhiteCardCardsWhitePut(whiteCard, callback) {
      let postBody = whiteCard;
      // verify the required parameter 'whiteCard' is set
      if (whiteCard === undefined || whiteCard === null) {
        throw new Error("Missing the required parameter 'whiteCard' when calling createWhiteCardCardsWhitePut");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WhiteCard;
      return this.apiClient.callApi(
        '/cards/white', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeckListCardsDeckGet operation.
     * @callback module:api/CardsApi~getDeckListCardsDeckGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DeckMetaData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Deck List
     * @param {module:api/CardsApi~getDeckListCardsDeckGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DeckMetaData>}
     */
    getDeckListCardsDeckGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DeckMetaData];
      return this.apiClient.callApi(
        '/cards/deck', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
