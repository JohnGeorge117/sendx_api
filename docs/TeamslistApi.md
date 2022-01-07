# SendXAppServerV2.TeamslistApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamListRouterCreate**](TeamslistApi.md#teamListRouterCreate) | **POST** /teams/list/ | 
[**teamListRouterDeleteList**](TeamslistApi.md#teamListRouterDeleteList) | **DELETE** /teams/list/{listId} | 
[**teamListRouterGetAllLists**](TeamslistApi.md#teamListRouterGetAllLists) | **GET** /teams/list/ | 


<a name="teamListRouterCreate"></a>
# **teamListRouterCreate**
> ModelsList teamListRouterCreate(xTeamApiKey, body)



Create List

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamslistApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Account API Key

var body = new SendXAppServerV2.ModelsTag(); // ModelsTag | The Tag content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamListRouterCreate(xTeamApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Account API Key | 
 **body** | [**ModelsTag**](ModelsTag.md)| The Tag content | 

### Return type

[**ModelsList**](ModelsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamListRouterDeleteList"></a>
# **teamListRouterDeleteList**
> ModelsDeleteResponse teamListRouterDeleteList(xTeamApiKey, listId, body)



Deletes List

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamslistApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Team API Key

var listId = 789; // Number | The TagId you want to delete

var body = new SendXAppServerV2.ModelsListDeleteRequest(); // ModelsListDeleteRequest | The list deletion content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamListRouterDeleteList(xTeamApiKey, listId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **listId** | **Number**| The TagId you want to delete | 
 **body** | [**ModelsListDeleteRequest**](ModelsListDeleteRequest.md)| The list deletion content | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamListRouterGetAllLists"></a>
# **teamListRouterGetAllLists**
> [ModelsList] teamListRouterGetAllLists(xTeamApiKey, opts)



Get All All Lists

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamslistApi();

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
apiInstance.teamListRouterGetAllLists(xTeamApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsList]**](ModelsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

