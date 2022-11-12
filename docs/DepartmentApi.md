# MyApiV1.DepartmentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDepartment**](DepartmentApi.md#createDepartment) | **POST** /api/Company/{companyId}/Department | create department in company
[**deleteDepartment**](DepartmentApi.md#deleteDepartment) | **DELETE** /api/Company/{companyId}/Department | Delete department in company
[**getDepartment**](DepartmentApi.md#getDepartment) | **GET** /api/Company/{companyId}/Department/{departmnetId} | get department by id in company
[**getDepartments**](DepartmentApi.md#getDepartments) | **GET** /api/Company/{companyId}/Department | get departments in company
[**setBugetDeparmtnet**](DepartmentApi.md#setBugetDeparmtnet) | **PUT** /api/Company/{companyId}/Department/{departmnetId} | set buget department by id in company



## createDepartment

> createDepartment(companyId, opts)

create department in company

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.DepartmentApi();
let companyId = 56; // Number | 
let opts = {
  'departmentView': new MyApiV1.DepartmentView() // DepartmentView | 
};
apiInstance.createDepartment(companyId, opts, (error, data, response) => {
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
 **departmentView** | [**DepartmentView**](DepartmentView.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## deleteDepartment

> deleteDepartment(companyId, opts)

Delete department in company

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.DepartmentApi();
let companyId = 56; // Number | 
let opts = {
  'departmnetId': 56 // Number | 
};
apiInstance.deleteDepartment(companyId, opts, (error, data, response) => {
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
 **departmnetId** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getDepartment

> DepartmentView getDepartment(companyId, departmnetId)

get department by id in company

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.DepartmentApi();
let companyId = 56; // Number | 
let departmnetId = 56; // Number | 
apiInstance.getDepartment(companyId, departmnetId, (error, data, response) => {
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

[**DepartmentView**](DepartmentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDepartments

> [DepartmentView] getDepartments(companyId)

get departments in company

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.DepartmentApi();
let companyId = 56; // Number | 
apiInstance.getDepartments(companyId, (error, data, response) => {
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

### Return type

[**[DepartmentView]**](DepartmentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setBugetDeparmtnet

> DepartmentView setBugetDeparmtnet(departmnetId, companyId, opts)

set buget department by id in company

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.DepartmentApi();
let departmnetId = 56; // Number | 
let companyId = "companyId_example"; // String | 
let opts = {
  'buget': 3.4 // Number | 
};
apiInstance.setBugetDeparmtnet(departmnetId, companyId, opts, (error, data, response) => {
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
 **departmnetId** | **Number**|  | 
 **companyId** | **String**|  | 
 **buget** | **Number**|  | [optional] 

### Return type

[**DepartmentView**](DepartmentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

