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
    define(['ApiClient', 'model/ModelsAutomation', 'model/ModelsAutomationRequest', 'model/ModelsDeepTeamAutomation', 'model/ModelsDeleteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAutomation'), require('../model/ModelsAutomationRequest'), require('../model/ModelsDeepTeamAutomation'), require('../model/ModelsDeleteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXAppServerV2) {
      root.SendXAppServerV2 = {};
    }
    root.SendXAppServerV2.TeamsautomationApi = factory(root.SendXAppServerV2.ApiClient, root.SendXAppServerV2.ModelsAutomation, root.SendXAppServerV2.ModelsAutomationRequest, root.SendXAppServerV2.ModelsDeepTeamAutomation, root.SendXAppServerV2.ModelsDeleteResponse);
  }
}(this, function(ApiClient, ModelsAutomation, ModelsAutomationRequest, ModelsDeepTeamAutomation, ModelsDeleteResponse) {
  'use strict';

  /**
   * Teamsautomation service.
   * @module api/TeamsautomationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TeamsautomationApi. 
   * @alias module:api/TeamsautomationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the teamAutomationRouterCreateAutomation operation.
     * @callback module:api/TeamsautomationApi~teamAutomationRouterCreateAutomationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAutomation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Automation
     * @param {String} xTeamApiKey Account API Key
     * @param {module:model/ModelsAutomationRequest} body The Tag content
     * @param {module:api/TeamsautomationApi~teamAutomationRouterCreateAutomationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAutomation}
     */
    this.teamAutomationRouterCreateAutomation = function(xTeamApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xTeamApiKey' is set
      if (xTeamApiKey === undefined || xTeamApiKey === null) {
        throw new Error("Missing the required parameter 'xTeamApiKey' when calling teamAutomationRouterCreateAutomation");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling teamAutomationRouterCreateAutomation");
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
      var returnType = ModelsAutomation;

      return this.apiClient.callApi(
        '/teams/automation/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamAutomationRouterDeleteAutomation operation.
     * @callback module:api/TeamsautomationApi~teamAutomationRouterDeleteAutomationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes Automation
     * @param {String} xTeamApiKey Team API Key
     * @param {Number} automationId The automationId you want to delete
     * @param {module:api/TeamsautomationApi~teamAutomationRouterDeleteAutomationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.teamAutomationRouterDeleteAutomation = function(xTeamApiKey, automationId, callback) {
      var postBody = null;

      // verify the required parameter 'xTeamApiKey' is set
      if (xTeamApiKey === undefined || xTeamApiKey === null) {
        throw new Error("Missing the required parameter 'xTeamApiKey' when calling teamAutomationRouterDeleteAutomation");
      }

      // verify the required parameter 'automationId' is set
      if (automationId === undefined || automationId === null) {
        throw new Error("Missing the required parameter 'automationId' when calling teamAutomationRouterDeleteAutomation");
      }


      var pathParams = {
        'automationId': automationId
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
      var returnType = ModelsDeleteResponse;

      return this.apiClient.callApi(
        '/teams/automation/{automationId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamAutomationRouterGetAllAutomations operation.
     * @callback module:api/TeamsautomationApi~teamAutomationRouterGetAllAutomationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsDeepTeamAutomation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Automations
     * @param {String} xTeamApiKey Team API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search
     * @param {module:api/TeamsautomationApi~teamAutomationRouterGetAllAutomationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsDeepTeamAutomation>}
     */
    this.teamAutomationRouterGetAllAutomations = function(xTeamApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xTeamApiKey' is set
      if (xTeamApiKey === undefined || xTeamApiKey === null) {
        throw new Error("Missing the required parameter 'xTeamApiKey' when calling teamAutomationRouterGetAllAutomations");
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
      var returnType = [ModelsDeepTeamAutomation];

      return this.apiClient.callApi(
        '/teams/automation/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamAutomationRouterGetAutomation operation.
     * @callback module:api/TeamsautomationApi~teamAutomationRouterGetAutomationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeepTeamAutomation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * GetAutomation Automation
     * @param {String} xTeamApiKey Team API Key
     * @param {Number} automationId The automationId you want to get
     * @param {module:api/TeamsautomationApi~teamAutomationRouterGetAutomationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeepTeamAutomation}
     */
    this.teamAutomationRouterGetAutomation = function(xTeamApiKey, automationId, callback) {
      var postBody = null;

      // verify the required parameter 'xTeamApiKey' is set
      if (xTeamApiKey === undefined || xTeamApiKey === null) {
        throw new Error("Missing the required parameter 'xTeamApiKey' when calling teamAutomationRouterGetAutomation");
      }

      // verify the required parameter 'automationId' is set
      if (automationId === undefined || automationId === null) {
        throw new Error("Missing the required parameter 'automationId' when calling teamAutomationRouterGetAutomation");
      }


      var pathParams = {
        'automationId': automationId
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
      var returnType = ModelsDeepTeamAutomation;

      return this.apiClient.callApi(
        '/teams/automation/{automationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
