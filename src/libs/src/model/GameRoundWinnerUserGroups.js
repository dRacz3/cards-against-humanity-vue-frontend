/**
 * CardsAgainstHumanity-Django API
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
import GameRoundWinnerUserPermissions from './GameRoundWinnerUserPermissions';

/**
 * The GameRoundWinnerUserGroups model module.
 * @module model/GameRoundWinnerUserGroups
 * @version v1
 */
class GameRoundWinnerUserGroups {
    /**
     * Constructs a new <code>GameRoundWinnerUserGroups</code>.
     * @alias module:model/GameRoundWinnerUserGroups
     * @param name {String} 
     */
    constructor(name) { 
        
        GameRoundWinnerUserGroups.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GameRoundWinnerUserGroups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GameRoundWinnerUserGroups} obj Optional instance to populate.
     * @return {module:model/GameRoundWinnerUserGroups} The populated <code>GameRoundWinnerUserGroups</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GameRoundWinnerUserGroups();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [GameRoundWinnerUserPermissions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GameRoundWinnerUserGroups.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GameRoundWinnerUserGroups.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/GameRoundWinnerUserPermissions>} permissions
 */
GameRoundWinnerUserGroups.prototype['permissions'] = undefined;






export default GameRoundWinnerUserGroups;

