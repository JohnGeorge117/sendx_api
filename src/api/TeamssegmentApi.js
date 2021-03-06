/*
 * SendX APP Server V2
 * Send App Server
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.25
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsDeepEmailSegment', 'model/ModelsSegment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsDeepEmailSegment'), require('../model/ModelsSegment'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXAppServerV2) {
      root.SendXAppServerV2 = {};
    }
    root.SendXAppServerV2.TeamssegmentApi = factory(root.SendXAppServerV2.ApiClient, root.SendXAppServerV2.ModelsDeepEmailSegment, root.SendXAppServerV2.ModelsSegment);
  }
}(this, function(ApiClient, ModelsDeepEmailSegment, ModelsSegment) {
  'use strict';

  /**
   * Teamssegment service.
   * @module api/TeamssegmentApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TeamssegmentApi. 
   * @alias module:api/TeamssegmentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the teamSegmentRouterCreate operation.
     * @callback module:api/TeamssegmentApi~teamSegmentRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSegment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Segment
     * @param {String} xTeamApiKey Account API Key
     * @param {module:model/ModelsSegment} body Segment content
     * @param {module:api/TeamssegmentApi~teamSegmentRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSegment}
     */
    this.teamSegmentRouterCreate = function(xTeamApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xTeamApiKey' is set
      if (xTeamApiKey === undefined || xTeamApiKey === null) {
        throw new Error("Missing the required parameter 'xTeamApiKey' when calling teamSegmentRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling teamSegmentRouterCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Team-ApiKey': xTeamApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsSegment;

      return this.apiClient.callApi(
        '/teams/segment/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamSegmentRouterGetAlSegments operation.
     * @callback module:api/TeamssegmentApi~teamSegmentRouterGetAlSegmentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsDeepEmailSegment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Segments for team
     * @param {String} xTeamApiKey Team API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search
     * @param {module:api/TeamssegmentApi~teamSegmentRouterGetAlSegmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsDeepEmailSegment>}
     */
    this.teamSegmentRouterGetAlSegments = function(xTeamApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xTeamApiKey' is set
      if (xTeamApiKey === undefined || xTeamApiKey === null) {
        throw new Error("Missing the required parameter 'xTeamApiKey' when calling teamSegmentRouterGetAlSegments");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'search': opts['search'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Team-ApiKey': xTeamApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsDeepEmailSegment];

      return this.apiClient.callApi(
        '/teams/segment/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamSegmentRouterGetsegment operation.
     * @callback module:api/TeamssegmentApi~teamSegmentRouterGetsegmentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSegment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * GetSegment Segment
     * @param {String} xTeamApiKey Team API Key
     * @param {Number} segmentId The segment you want to delete
     * @param {module:api/TeamssegmentApi~teamSegmentRouterGetsegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSegment>}
     */
    this.teamSegmentRouterGetsegment = function(xTeamApiKey, segmentId, callback) {
      var postBody = null;

      // verify the required parameter 'xTeamApiKey' is set
      if (xTeamApiKey === undefined || xTeamApiKey === null) {
        throw new Error("Missing the required parameter 'xTeamApiKey' when calling teamSegmentRouterGetsegment");
      }

      // verify the required parameter 'segmentId' is set
      if (segmentId === undefined || segmentId === null) {
        throw new Error("Missing the required parameter 'segmentId' when calling teamSegmentRouterGetsegment");
      }


      var pathParams = {
        'segmentId': segmentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Team-ApiKey': xTeamApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsSegment];

      return this.apiClient.callApi(
        '/teams/segment/{segmentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
