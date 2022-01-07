# SendXAppServerV2.TeamstagApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamTagRouterCreate**](TeamstagApi.md#teamTagRouterCreate) | **POST** /teams/tag/ | 
[**teamTagRouterDeleteTag**](TeamstagApi.md#teamTagRouterDeleteTag) | **DELETE** /teams/tag/{tagId} | 
[**teamTagRouterGetAllTags**](TeamstagApi.md#teamTagRouterGetAllTags) | **GET** /teams/tag/ | 
[**teamTagRouterGetTag**](TeamstagApi.md#teamTagRouterGetTag) | **GET** /teams/tag/{tagId} | 
[**teamTagRouterUpdateTag**](TeamstagApi.md#teamTagRouterUpdateTag) | **PUT** /teams/tag/{tagId} | 


<a name="teamTagRouterCreate"></a>
# **teamTagRouterCreate**
> ModelsTag teamTagRouterCreate(xTeamApiKey, body)



Create Tag

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamstagApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Account API Key

var body = new SendXAppServerV2.ModelsTag(); // ModelsTag | The Tag content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamTagRouterCreate(xTeamApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Account API Key | 
 **body** | [**ModelsTag**](ModelsTag.md)| The Tag content | 

### Return type

[**ModelsTag**](ModelsTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTagRouterDeleteTag"></a>
# **teamTagRouterDeleteTag**
> ModelsDeleteResponse teamTagRouterDeleteTag(xTeamApiKey, tagId)



Deletes Tag

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamstagApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Team API Key

var tagId = 789; // Number | The TagId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamTagRouterDeleteTag(xTeamApiKey, tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **tagId** | **Number**| The TagId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTagRouterGetAllTags"></a>
# **teamTagRouterGetAllTags**
> [ModelsTag] teamTagRouterGetAllTags(xTeamApiKey, opts)



Get All AllTags

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamstagApi();

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
apiInstance.teamTagRouterGetAllTags(xTeamApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsTag]**](ModelsTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTagRouterGetTag"></a>
# **teamTagRouterGetTag**
> ModelsTag teamTagRouterGetTag(xTeamApiKey, tagId)



GetTag Tag

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamstagApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Team API Key

var tagId = 789; // Number | The TagId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamTagRouterGetTag(xTeamApiKey, tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **tagId** | **Number**| The TagId you want to delete | 

### Return type

[**ModelsTag**](ModelsTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTagRouterUpdateTag"></a>
# **teamTagRouterUpdateTag**
> ModelsTag teamTagRouterUpdateTag(xTeamApiKey, tagId)



UpdateTag Tag

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamstagApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Team API Key

var tagId = 789; // Number | The TagId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamTagRouterUpdateTag(xTeamApiKey, tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **tagId** | **Number**| The TagId you want to delete | 

### Return type

[**ModelsTag**](ModelsTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

