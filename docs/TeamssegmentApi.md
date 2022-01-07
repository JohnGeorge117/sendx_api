# SendXAppServerV2.TeamssegmentApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamSegmentRouterCreate**](TeamssegmentApi.md#teamSegmentRouterCreate) | **POST** /teams/segment/ | 
[**teamSegmentRouterGetAlSegments**](TeamssegmentApi.md#teamSegmentRouterGetAlSegments) | **GET** /teams/segment/ | 
[**teamSegmentRouterGetsegment**](TeamssegmentApi.md#teamSegmentRouterGetsegment) | **GET** /teams/segment/{segmentId} | 


<a name="teamSegmentRouterCreate"></a>
# **teamSegmentRouterCreate**
> ModelsSegment teamSegmentRouterCreate(xTeamApiKey, body)



Create Segment

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamssegmentApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Account API Key

var body = new SendXAppServerV2.ModelsSegment(); // ModelsSegment | Segment content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamSegmentRouterCreate(xTeamApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Account API Key | 
 **body** | [**ModelsSegment**](ModelsSegment.md)| Segment content | 

### Return type

[**ModelsSegment**](ModelsSegment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamSegmentRouterGetAlSegments"></a>
# **teamSegmentRouterGetAlSegments**
> [ModelsDeepEmailSegment] teamSegmentRouterGetAlSegments(xTeamApiKey, opts)



Get All Segments for team

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamssegmentApi();

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
apiInstance.teamSegmentRouterGetAlSegments(xTeamApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsDeepEmailSegment]**](ModelsDeepEmailSegment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamSegmentRouterGetsegment"></a>
# **teamSegmentRouterGetsegment**
> [ModelsSegment] teamSegmentRouterGetsegment(xTeamApiKey, segmentId)



GetSegment Segment

### Example
```javascript
var SendXAppServerV2 = require('send_x_app_server_v2');

var apiInstance = new SendXAppServerV2.TeamssegmentApi();

var xTeamApiKey = "xTeamApiKey_example"; // String | Team API Key

var segmentId = 789; // Number | The segment you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamSegmentRouterGetsegment(xTeamApiKey, segmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTeamApiKey** | **String**| Team API Key | 
 **segmentId** | **Number**| The segment you want to delete | 

### Return type

[**[ModelsSegment]**](ModelsSegment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

