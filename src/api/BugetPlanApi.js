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


import ApiClient from "../ApiClient";
import BugetPlanView from '../model/BugetPlanView';
import Month from '../model/Month';

/**
* BugetPlan service.
* @module api/BugetPlanApi
* @version v1
*/
export default class BugetPlanApi {

    /**
    * Constructs a new BugetPlanApi. 
    * @alias module:api/BugetPlanApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createBugetPlan operation.
     * @callback module:api/BugetPlanApi~createBugetPlanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * можно создать только 1 на департамент
     * @param {Number} companyId 
     * @param {Number} departmnetId 
     * @param {Object} opts Optional parameters
     * @param {module:model/BugetPlanView} opts.bugetPlanView 
     * @param {module:api/BugetPlanApi~createBugetPlanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createBugetPlan(companyId, departmnetId, opts, callback) {
      opts = opts || {};
      let postBody = opts['bugetPlanView'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createBugetPlan");
      }
      // verify the required parameter 'departmnetId' is set
      if (departmnetId === undefined || departmnetId === null) {
        throw new Error("Missing the required parameter 'departmnetId' when calling createBugetPlan");
      }

      let pathParams = {
        'companyId': companyId,
        'departmnetId': departmnetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/Company/{companyId}/Department/{departmnetId}/BugetPlan', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletBugetPlan operation.
     * @callback module:api/BugetPlanApi~deletBugetPlanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delet bugetplan
     * @param {Number} companyId 
     * @param {Number} departmnetId 
     * @param {Number} bugetPlanId 
     * @param {module:api/BugetPlanApi~deletBugetPlanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletBugetPlan(companyId, departmnetId, bugetPlanId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deletBugetPlan");
      }
      // verify the required parameter 'departmnetId' is set
      if (departmnetId === undefined || departmnetId === null) {
        throw new Error("Missing the required parameter 'departmnetId' when calling deletBugetPlan");
      }
      // verify the required parameter 'bugetPlanId' is set
      if (bugetPlanId === undefined || bugetPlanId === null) {
        throw new Error("Missing the required parameter 'bugetPlanId' when calling deletBugetPlan");
      }

      let pathParams = {
        'companyId': companyId,
        'departmnetId': departmnetId,
        'bugetPlanId': bugetPlanId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/Company/{companyId}/Department/{departmnetId}/BugetPlan/{bugetPlanId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBugetPlan operation.
     * @callback module:api/BugetPlanApi~getBugetPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BugetPlanView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get buget plan
     * @param {Number} companyId 
     * @param {Number} departmnetId 
     * @param {Number} bugetPlanId 
     * @param {module:api/BugetPlanApi~getBugetPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BugetPlanView}
     */
    getBugetPlan(companyId, departmnetId, bugetPlanId, callback) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getBugetPlan");
      }
      // verify the required parameter 'departmnetId' is set
      if (departmnetId === undefined || departmnetId === null) {
        throw new Error("Missing the required parameter 'departmnetId' when calling getBugetPlan");
      }
      // verify the required parameter 'bugetPlanId' is set
      if (bugetPlanId === undefined || bugetPlanId === null) {
        throw new Error("Missing the required parameter 'bugetPlanId' when calling getBugetPlan");
      }

      let pathParams = {
        'companyId': companyId,
        'departmnetId': departmnetId,
        'bugetPlanId': bugetPlanId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BugetPlanView;
      return this.apiClient.callApi(
        '/api/Company/{companyId}/Department/{departmnetId}/BugetPlan/{bugetPlanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setMonthBuget operation.
     * @callback module:api/BugetPlanApi~setMonthBugetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BugetPlanView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Number} companyId 
     * @param {Number} departmnetId 
     * @param {Number} bugetPlanId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Month} opts.month 
     * @param {Number} opts.amount 
     * @param {module:api/BugetPlanApi~setMonthBugetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BugetPlanView}
     */
    setMonthBuget(companyId, departmnetId, bugetPlanId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling setMonthBuget");
      }
      // verify the required parameter 'departmnetId' is set
      if (departmnetId === undefined || departmnetId === null) {
        throw new Error("Missing the required parameter 'departmnetId' when calling setMonthBuget");
      }
      // verify the required parameter 'bugetPlanId' is set
      if (bugetPlanId === undefined || bugetPlanId === null) {
        throw new Error("Missing the required parameter 'bugetPlanId' when calling setMonthBuget");
      }

      let pathParams = {
        'companyId': companyId,
        'departmnetId': departmnetId,
        'bugetPlanId': bugetPlanId
      };
      let queryParams = {
        'month': opts['month'],
        'amount': opts['amount']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BugetPlanView;
      return this.apiClient.callApi(
        '/api/Company/{companyId}/Department/{departmnetId}/BugetPlan/{bugetPlanId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
