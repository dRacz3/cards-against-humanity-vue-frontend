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
 * The WhiteCard model module.
 * @module model/WhiteCard
 * @version 0.0.1
 */
class WhiteCard {
    /**
     * Constructs a new <code>WhiteCard</code>.
     * @alias module:model/WhiteCard
     * @param text {String} 
     * @param icon {String} 
     * @param deck {String} 
     */
    constructor(text, icon, deck) { 
        
        WhiteCard.initialize(this, text, icon, deck);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text, icon, deck) { 
        obj['text'] = text;
        obj['icon'] = icon;
        obj['deck'] = deck;
    }

    /**
     * Constructs a <code>WhiteCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WhiteCard} obj Optional instance to populate.
     * @return {module:model/WhiteCard} The populated <code>WhiteCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WhiteCard();

            if (data.hasOwnProperty('card_id')) {
                obj['card_id'] = ApiClient.convertToType(data['card_id'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('deck')) {
                obj['deck'] = ApiClient.convertToType(data['deck'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} card_id
 */
WhiteCard.prototype['card_id'] = undefined;

/**
 * @member {String} text
 */
WhiteCard.prototype['text'] = undefined;

/**
 * @member {String} icon
 */
WhiteCard.prototype['icon'] = undefined;

/**
 * @member {String} deck
 */
WhiteCard.prototype['deck'] = undefined;






export default WhiteCard;

