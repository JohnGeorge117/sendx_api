# SendXAppServerV2.TeamsautomationApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamAutomationRouterCreateAutomation**](TeamsautomationApi.md#teamAutomationRouterCreateAutomation) | **POST** /teams/automation/ | 
[**teamAutomationRouterDeleteAutomation**](TeamsautomationApi.md#teamAutomationRouterDeleteAutomation) | **DELETE** /teams/automation/{automationId} | 
[**teamAutomationRouterGetAllAutomations**](TeamsautomationApi.md#teamAutomationRouterGetAllAutomations) | **GET** /teams/automation/ | 
[**teamAutomationRouterGetAutomation**](TeamsautomationApi.md#teamAutomationRouterGetAutomation) | **GET** /teams/automation/{automationId} | 


<a name="teamAutomationRouterCreateAutomation"></a>
# **teamAutomationRouterCreateAutomation**
> ModelsAutomation teamAutomationRouterCreateAutomation(xTeamApiKey, body)



Create Automation

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamsautomationApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Account API Key

var body = new SendXAppServerV2.ModelsAutomationRequest(); // ModelsAutomationRequest | The Tag content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamAutomationRouterCreateAutomation(xTeamApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Account API Key | 
 **body** | [**ModelsAutomationRequest**](ModelsAutomationRequest.md)| The Tag content | 

### Return type

[**ModelsAutomation**](ModelsAutomation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamAutomationRouterDeleteAutomation"></a>
# **teamAutomationRouterDeleteAutomation**
> ModelsDeleteResponse teamAutomationRouterDeleteAutomation(xTeamApiKey, automationId)



Deletes Automation

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamsautomationApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Team API Key

var automationId = 789; // Number | The automationId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamAutomationRouterDeleteAutomation(xTeamApiKey, automationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **automationId** | **Number**| The automationId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamAutomationRouterGetAllAutomations"></a>
# **teamAutomationRouterGetAllAutomations**
> [ModelsDeepTeamAutomation] teamAutomationRouterGetAllAutomations(xTeamApiKey, opts)



Get All Automations

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamsautomationApi();

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
apiInstance.teamAutomationRouterGetAllAutomations(xTeamApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsDeepTeamAutomation]**](ModelsDeepTeamAutomation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamAutomationRouterGetAutomation"></a>
# **teamAutomationRouterGetAutomation**
> ModelsDeepTeamAutomation teamAutomationRouterGetAutomation(xTeamApiKey, automationId)



GetAutomation Automation

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamsautomationApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Team API Key

var automationId = 789; // Number | The automationId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamAutomationRouterGetAutomation(xTeamApiKey, automationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **automationId** | **Number**| The automationId you want to get | 

### Return type

[**ModelsDeepTeamAutomation**](ModelsDeepTeamAutomation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

