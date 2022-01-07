# SendXAppServerV2.TeamsbulkApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamBulkActionRouterCreateBulkAction**](TeamsbulkApi.md#teamBulkActionRouterCreateBulkAction) | **POST** /teams/bulk/ | 
[**teamBulkActionRouterGetAllBulkAction**](TeamsbulkApi.md#teamBulkActionRouterGetAllBulkAction) | **GET** /teams/bulk/ | 
[**teamBulkActionRouterGetBulkAction**](TeamsbulkApi.md#teamBulkActionRouterGetBulkAction) | **GET** /teams/bulk/{bulkActionId} | 


<a name="teamBulkActionRouterCreateBulkAction"></a>
# **teamBulkActionRouterCreateBulkAction**
> ModelsBulk teamBulkActionRouterCreateBulkAction(xTeamApiKey, body)



Create Bulk action

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamsbulkApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Account API Key

var body = new SendXAppServerV2.ModelsBulkRequest(); // ModelsBulkRequest | The bulk automation content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamBulkActionRouterCreateBulkAction(xTeamApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Account API Key | 
 **body** | [**ModelsBulkRequest**](ModelsBulkRequest.md)| The bulk automation content | 

### Return type

[**ModelsBulk**](ModelsBulk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamBulkActionRouterGetAllBulkAction"></a>
# **teamBulkActionRouterGetAllBulkAction**
> [ModelsDeepTeamBulk] teamBulkActionRouterGetAllBulkAction(xTeamApiKey, opts)



Get All GetAllBulkAction

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamsbulkApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Team API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamBulkActionRouterGetAllBulkAction(xTeamApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsDeepTeamBulk]**](ModelsDeepTeamBulk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamBulkActionRouterGetBulkAction"></a>
# **teamBulkActionRouterGetBulkAction**
> ModelsDeepTeamAutomation teamBulkActionRouterGetBulkAction(xTeamApiKey, bulkActionId)



GetBulkAction Automation

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamsbulkApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Team API Key

var bulkActionId = 789; // Number | The bulkActionId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamBulkActionRouterGetBulkAction(xTeamApiKey, bulkActionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **bulkActionId** | **Number**| The bulkActionId you want to get | 

### Return type

[**ModelsDeepTeamAutomation**](ModelsDeepTeamAutomation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

