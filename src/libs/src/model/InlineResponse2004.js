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
import CardSubmission from './CardSubmission';

/**
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version v1
 */
class InlineResponse2004 {
    /**
     * Constructs a new <code>InlineResponse2004</code>.
     * @alias module:model/InlineResponse2004
     * @param count {Number} 
     * @param results {Array.<module:model/CardSubmission>} 
     */
    constructor(count, results) { 
        
        InlineResponse2004.initialize(this, count, results);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, count, results) { 
        obj['count'] = count;
        obj['results'] = results;
    }

    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [CardSubmission]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
InlineResponse2004.prototype['count'] = undefined;

/**
 * @member {String} next
 */
InlineResponse2004.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
InlineResponse2004.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/CardSubmission>} results
 */
InlineResponse2004.prototype['results'] = undefined;






export default InlineResponse2004;

