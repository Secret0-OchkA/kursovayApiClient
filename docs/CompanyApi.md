# MyApiV1.CompanyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeName**](CompanyApi.md#changeName) | **PUT** /api/Company/{id}/{name} | change name company by id
[**createCompany**](CompanyApi.md#createCompany) | **POST** /api/Company | create company from object
[**deletCompany**](CompanyApi.md#deletCompany) | **DELETE** /api/Company/{id} | Delete company by id
[**getCompany**](CompanyApi.md#getCompany) | **GET** /api/Company/{id} | get company by id
[**getCompanyes**](CompanyApi.md#getCompanyes) | **GET** /api/Company | get all company



## changeName

> CompanyView changeName(id, name)

change name company by id

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.CompanyApi();
let id = 56; // Number | 
let name = "name_example"; // String | 
apiInstance.changeName(id, name, (error, data, response) => {
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
 **id** | **Number**|  | 
 **name** | **String**|  | 

### Return type

[**CompanyView**](CompanyView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createCompany

> createCompany(opts)

create company from object

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.CompanyApi();
let opts = {
  'companyView': new MyApiV1.CompanyView() // CompanyView | 
};
apiInstance.createCompany(opts, (error, data, response) => {
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
 **companyView** | [**CompanyView**](CompanyView.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## deletCompany

> deletCompany(id)

Delete company by id

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.CompanyApi();
let id = 56; // Number | 
apiInstance.deletCompany(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCompany

> CompanyView getCompany(id)

get company by id

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.CompanyApi();
let id = 56; // Number | 
apiInstance.getCompany(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**CompanyView**](CompanyView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompanyes

> [CompanyView] getCompanyes()

get all company

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.CompanyApi();
apiInstance.getCompanyes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CompanyView]**](CompanyView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

