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


import ApiClient from './ApiClient';
import BugetPlanView from './model/BugetPlanView';
import CompanyView from './model/CompanyView';
import DepartmentView from './model/DepartmentView';
import EmployeeView from './model/EmployeeView';
import ExpenseTypeView from './model/ExpenseTypeView';
import ExpenseView from './model/ExpenseView';
import Month from './model/Month';
import BugetPlanApi from './api/BugetPlanApi';
import CompanyApi from './api/CompanyApi';
import DepartmentApi from './api/DepartmentApi';
import EmployeeApi from './api/EmployeeApi';
import EmployeeFromDepartmentApi from './api/EmployeeFromDepartmentApi';
import ExpenseFromDepartmentApi from './api/ExpenseFromDepartmentApi';
import ExpenseFromEmployeeApi from './api/ExpenseFromEmployeeApi';
import ExpenseTypeApi from './api/ExpenseTypeApi';
import OkApi from './api/OkApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MyApiV1 = require('index'); // See note below*.
* var xxxSvc = new MyApiV1.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MyApiV1.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MyApiV1.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MyApiV1.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BugetPlanView model constructor.
     * @property {module:model/BugetPlanView}
     */
    BugetPlanView,

    /**
     * The CompanyView model constructor.
     * @property {module:model/CompanyView}
     */
    CompanyView,

    /**
     * The DepartmentView model constructor.
     * @property {module:model/DepartmentView}
     */
    DepartmentView,

    /**
     * The EmployeeView model constructor.
     * @property {module:model/EmployeeView}
     */
    EmployeeView,

    /**
     * The ExpenseTypeView model constructor.
     * @property {module:model/ExpenseTypeView}
     */
    ExpenseTypeView,

    /**
     * The ExpenseView model constructor.
     * @property {module:model/ExpenseView}
     */
    ExpenseView,

    /**
     * The Month model constructor.
     * @property {module:model/Month}
     */
    Month,

    /**
    * The BugetPlanApi service constructor.
    * @property {module:api/BugetPlanApi}
    */
    BugetPlanApi,

    /**
    * The CompanyApi service constructor.
    * @property {module:api/CompanyApi}
    */
    CompanyApi,

    /**
    * The DepartmentApi service constructor.
    * @property {module:api/DepartmentApi}
    */
    DepartmentApi,

    /**
    * The EmployeeApi service constructor.
    * @property {module:api/EmployeeApi}
    */
    EmployeeApi,

    /**
    * The EmployeeFromDepartmentApi service constructor.
    * @property {module:api/EmployeeFromDepartmentApi}
    */
    EmployeeFromDepartmentApi,

    /**
    * The ExpenseFromDepartmentApi service constructor.
    * @property {module:api/ExpenseFromDepartmentApi}
    */
    ExpenseFromDepartmentApi,

    /**
    * The ExpenseFromEmployeeApi service constructor.
    * @property {module:api/ExpenseFromEmployeeApi}
    */
    ExpenseFromEmployeeApi,

    /**
    * The ExpenseTypeApi service constructor.
    * @property {module:api/ExpenseTypeApi}
    */
    ExpenseTypeApi,

    /**
    * The OkApi service constructor.
    * @property {module:api/OkApi}
    */
    OkApi
};
