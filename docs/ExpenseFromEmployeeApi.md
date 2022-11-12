# MyApiV1.ExpenseFromEmployeeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeAmmount**](ExpenseFromEmployeeApi.md#changeAmmount) | **PUT** /api/Employee/{employeeId}/ExpenseFromEmployee/{expenseId}/ChangeAmmount | Change ammout if not confirmed
[**confirmExpense**](ExpenseFromEmployeeApi.md#confirmExpense) | **PUT** /api/Employee/{employeeId}/ExpenseFromEmployee/{expenseId}/Confirm | confirm expense if expense is valid
[**createExpense**](ExpenseFromEmployeeApi.md#createExpense) | **POST** /api/Employee/{employeeId}/ExpenseFromEmployee | create expense for employee
[**deleteExpense**](ExpenseFromEmployeeApi.md#deleteExpense) | **DELETE** /api/Employee/{employeeId}/ExpenseFromEmployee/{id} | Delete expense
[**getExpense**](ExpenseFromEmployeeApi.md#getExpense) | **GET** /api/Employee/{employeeId}/ExpenseFromEmployee/{expenseId} | get expense in employee
[**getExpenses**](ExpenseFromEmployeeApi.md#getExpenses) | **GET** /api/Employee/{employeeId}/ExpenseFromEmployee | get expenses in emploee
[**setExpenseType**](ExpenseFromEmployeeApi.md#setExpenseType) | **PUT** /api/Employee/{employeeId}/ExpenseFromEmployee/{expenseId}/SetType/{expenseTypeId} | change type if not confirmed
[**validateEpxense**](ExpenseFromEmployeeApi.md#validateEpxense) | **PUT** /api/Employee/{employeeId}/ExpenseFromEmployee/{expenseId}/Validate | validate expense



## changeAmmount

> ExpenseView changeAmmount(employeeId, expenseId, opts)

Change ammout if not confirmed

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.ExpenseFromEmployeeApi();
let employeeId = 56; // Number | 
let expenseId = 56; // Number | 
let opts = {
  'amount': 3.4 // Number | 
};
apiInstance.changeAmmount(employeeId, expenseId, opts, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **expenseId** | **Number**|  | 
 **amount** | **Number**|  | [optional] 

### Return type

[**ExpenseView**](ExpenseView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## confirmExpense

> ExpenseView confirmExpense(employeeId, expenseId)

confirm expense if expense is valid

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.ExpenseFromEmployeeApi();
let employeeId = 56; // Number | 
let expenseId = 56; // Number | 
apiInstance.confirmExpense(employeeId, expenseId, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **expenseId** | **Number**|  | 

### Return type

[**ExpenseView**](ExpenseView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createExpense

> createExpense(employeeId, opts)

create expense for employee

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.ExpenseFromEmployeeApi();
let employeeId = 56; // Number | 
let opts = {
  'expenseView': new MyApiV1.ExpenseView() // ExpenseView | 
};
apiInstance.createExpense(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **expenseView** | [**ExpenseView**](ExpenseView.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## deleteExpense

> deleteExpense(id, employeeId)

Delete expense

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.ExpenseFromEmployeeApi();
let id = 56; // Number | 
let employeeId = "employeeId_example"; // String | 
apiInstance.deleteExpense(id, employeeId, (error, data, response) => {
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
 **employeeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getExpense

> ExpenseView getExpense(employeeId, expenseId)

get expense in employee

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.ExpenseFromEmployeeApi();
let employeeId = 56; // Number | 
let expenseId = 56; // Number | 
apiInstance.getExpense(employeeId, expenseId, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **expenseId** | **Number**|  | 

### Return type

[**ExpenseView**](ExpenseView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExpenses

> [ExpenseView] getExpenses(employeeId)

get expenses in emploee

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.ExpenseFromEmployeeApi();
let employeeId = 56; // Number | 
apiInstance.getExpenses(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**|  | 

### Return type

[**[ExpenseView]**](ExpenseView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setExpenseType

> ExpenseView setExpenseType(employeeId, expenseId, expenseTypeId)

change type if not confirmed

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.ExpenseFromEmployeeApi();
let employeeId = 56; // Number | 
let expenseId = 56; // Number | 
let expenseTypeId = 56; // Number | 
apiInstance.setExpenseType(employeeId, expenseId, expenseTypeId, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **expenseId** | **Number**|  | 
 **expenseTypeId** | **Number**|  | 

### Return type

[**ExpenseView**](ExpenseView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validateEpxense

> ExpenseView validateEpxense(employeeId, expenseId)

validate expense

### Example

```javascript
import MyApiV1 from 'my_api_v1';

let apiInstance = new MyApiV1.ExpenseFromEmployeeApi();
let employeeId = 56; // Number | 
let expenseId = 56; // Number | 
apiInstance.validateEpxense(employeeId, expenseId, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **expenseId** | **Number**|  | 

### Return type

[**ExpenseView**](ExpenseView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

