/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var team_pb = require('./team_pb.js')
const proto = {};
proto.statistico = require('./performance_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.PerformanceServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.PerformanceServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.TeamStatPerformanceRequest,
 *   !proto.statistico.TeamStatResponse>}
 */
const methodDescriptor_PerformanceService_GetTeamsMatchingStat = new grpc.web.MethodDescriptor(
  '/statistico.PerformanceService/GetTeamsMatchingStat',
  grpc.web.MethodType.UNARY,
  proto.statistico.TeamStatPerformanceRequest,
  proto.statistico.TeamStatResponse,
  /**
   * @param {!proto.statistico.TeamStatPerformanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamStatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.TeamStatPerformanceRequest,
 *   !proto.statistico.TeamStatResponse>}
 */
const methodInfo_PerformanceService_GetTeamsMatchingStat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.TeamStatResponse,
  /**
   * @param {!proto.statistico.TeamStatPerformanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamStatResponse.deserializeBinary
);


/**
 * @param {!proto.statistico.TeamStatPerformanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.statistico.TeamStatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.TeamStatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.PerformanceServiceClient.prototype.getTeamsMatchingStat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.PerformanceService/GetTeamsMatchingStat',
      request,
      metadata || {},
      methodDescriptor_PerformanceService_GetTeamsMatchingStat,
      callback);
};


/**
 * @param {!proto.statistico.TeamStatPerformanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.TeamStatResponse>}
 *     Promise that resolves to the response
 */
proto.statistico.PerformanceServicePromiseClient.prototype.getTeamsMatchingStat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.PerformanceService/GetTeamsMatchingStat',
      request,
      metadata || {},
      methodDescriptor_PerformanceService_GetTeamsMatchingStat);
};


module.exports = proto.statistico;

