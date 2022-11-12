/**
 * My API - V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: ne bydet
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Department model module.
 * @module model/Department
 * @version v1
 */
class Department {
    /**
     * Constructs a new <code>Department</code>.
     * @alias module:model/Department
     */
    constructor() { 
        
        Department.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Department</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Department} obj Optional instance to populate.
     * @return {module:model/Department} The populated <code>Department</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Department();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('createDate')) {
                obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
            }
            if (data.hasOwnProperty('modifyDate')) {
                obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('budget')) {
                obj['budget'] = ApiClient.convertToType(data['budget'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Department</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Department</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Department.prototype['id'] = undefined;

/**
 * @member {Date} createDate
 */
Department.prototype['createDate'] = undefined;

/**
 * @member {Date} modifyDate
 */
Department.prototype['modifyDate'] = undefined;

/**
 * @member {String} name
 */
Department.prototype['name'] = undefined;

/**
 * @member {Number} budget
 */
Department.prototype['budget'] = undefined;






export default Department;
