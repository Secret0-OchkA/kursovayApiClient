# MyApiV1.BugetPlanApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBugetPlan**](BugetPlanApi.md#createBugetPlan) | **POST** /api/Company/{companyId}/Department/{departmnetId}/BugetPlan | можно создать только 1 на департамент
[**deletBugetPlan**](BugetPlanApi.md#deletBugetPlan) | **DELETE** /api/Company/{companyId}/Department/{departmnetId}/BugetPlan/{bugetPlanId} | delet bugetplan
[**getBugetPlan**](BugetPlanApi.md#getBugetPlan) | **GET** /api/Company/{companyId}/Department/{departmnetId}/BugetPlan | get buget plan by department
[**getBugetPlanById**](BugetPlanApi.md#getBugetPlanById) | **GET** /api/Company/{companyId}/Department/{departmnetId}/BugetPlan/{bugetPlanId} | get buget plan
[**setMonthBuget**](BugetPlanApi.md#setMonthBuget) | **PUT** /api/Company/{companyId}/Department/{departmnetId}/BugetPlan/{bugetPlanId} | 



## createBugetPlan

> createBugetPlan(companyId, departmnetId, opts)

можно создать только 1 на департамент

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.BugetPlanApi();
let companyId = 56; // Number | 
let departmnetId = 56; // Number | 
let opts = {
  'bugetPlanView': new MyApiV1.BugetPlanView() // BugetPlanView | 
};
apiInstance.createBugetPlan(companyId, departmnetId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**|  | 
 **departmnetId** | **Number**|  | 
 **bugetPlanView** | [**BugetPlanView**](BugetPlanView.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## deletBugetPlan

> deletBugetPlan(companyId, departmnetId, bugetPlanId)

delet bugetplan

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.BugetPlanApi();
let companyId = 56; // Number | 
let departmnetId = 56; // Number | 
let bugetPlanId = 56; // Number | 
apiInstance.deletBugetPlan(companyId, departmnetId, bugetPlanId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**|  | 
 **departmnetId** | **Number**|  | 
 **bugetPlanId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBugetPlan

> BugetPlanView getBugetPlan(companyId, departmnetId)

get buget plan by department

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.BugetPlanApi();
let companyId = 56; // Number | 
let departmnetId = 56; // Number | 
apiInstance.getBugetPlan(companyId, departmnetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**|  | 
 **departmnetId** | **Number**|  | 

### Return type

[**BugetPlanView**](BugetPlanView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBugetPlanById

> BugetPlanView getBugetPlanById(companyId, departmnetId, bugetPlanId)

get buget plan

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.BugetPlanApi();
let companyId = 56; // Number | 
let departmnetId = 56; // Number | 
let bugetPlanId = 56; // Number | 
apiInstance.getBugetPlanById(companyId, departmnetId, bugetPlanId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**|  | 
 **departmnetId** | **Number**|  | 
 **bugetPlanId** | **Number**|  | 

### Return type

[**BugetPlanView**](BugetPlanView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setMonthBuget

> BugetPlanView setMonthBuget(companyId, departmnetId, bugetPlanId, opts)



### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.BugetPlanApi();
let companyId = 56; // Number | 
let departmnetId = 56; // Number | 
let bugetPlanId = 56; // Number | 
let opts = {
  'month': new MyApiV1.Month(), // Month | 
  'amount': 3.4 // Number | 
};
apiInstance.setMonthBuget(companyId, departmnetId, bugetPlanId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**|  | 
 **departmnetId** | **Number**|  | 
 **bugetPlanId** | **Number**|  | 
 **month** | [**Month**](.md)|  | [optional] 
 **amount** | **Number**|  | [optional] 

### Return type

[**BugetPlanView**](BugetPlanView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

