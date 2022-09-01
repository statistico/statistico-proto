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


var enum_pb = require('./enum_pb.js')

var requests_pb = require('./requests_pb.js')

var responses_pb = require('./responses_pb.js')

var utility_pb = require('./utility_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.statistico = require('./strategy_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.StrategyServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.StrategyServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 *   !proto.statistico.CreateStrategyRequest,
 *   !proto.statistico.Strategy>}
 */
const methodDescriptor_StrategyService_CreateStrategy = new grpc.web.MethodDescriptor(
  '/statistico.StrategyService/CreateStrategy',
  grpc.web.MethodType.UNARY,
  requests_pb.CreateStrategyRequest,
  proto.statistico.Strategy,
  /**
   * @param {!proto.statistico.CreateStrategyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Strategy.deserializeBinary
);


/**
 * @param {!proto.statistico.CreateStrategyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.statistico.Strategy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Strategy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServiceClient.prototype.createStrategy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.StrategyService/CreateStrategy',
      request,
      metadata || {},
      methodDescriptor_StrategyService_CreateStrategy,
      callback);
};


/**
 * @param {!proto.statistico.CreateStrategyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.Strategy>}
 *     Promise that resolves to the response
 */
proto.statistico.StrategyServicePromiseClient.prototype.createStrategy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.StrategyService/CreateStrategy',
      request,
      metadata || {},
      methodDescriptor_StrategyService_CreateStrategy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.HealthCheckRequest,
 *   !proto.statistico.HealthCheckResponse>}
 */
const methodDescriptor_StrategyService_HealthCheck = new grpc.web.MethodDescriptor(
  '/statistico.StrategyService/HealthCheck',
  grpc.web.MethodType.UNARY,
  requests_pb.HealthCheckRequest,
  responses_pb.HealthCheckResponse,
  /**
   * @param {!proto.statistico.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  responses_pb.HealthCheckResponse.deserializeBinary
);


/**
 * @param {!proto.statistico.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.statistico.HealthCheckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.HealthCheckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServiceClient.prototype.healthCheck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.StrategyService/HealthCheck',
      request,
      metadata || {},
      methodDescriptor_StrategyService_HealthCheck,
      callback);
};


/**
 * @param {!proto.statistico.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.HealthCheckResponse>}
 *     Promise that resolves to the response
 */
proto.statistico.StrategyServicePromiseClient.prototype.healthCheck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.StrategyService/HealthCheck',
      request,
      metadata || {},
      methodDescriptor_StrategyService_HealthCheck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.ListUserStrategiesRequest,
 *   !proto.statistico.Strategy>}
 */
const methodDescriptor_StrategyService_ListUserStrategies = new grpc.web.MethodDescriptor(
  '/statistico.StrategyService/ListUserStrategies',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.ListUserStrategiesRequest,
  proto.statistico.Strategy,
  /**
   * @param {!proto.statistico.ListUserStrategiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Strategy.deserializeBinary
);


/**
 * @param {!proto.statistico.ListUserStrategiesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Strategy>}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServiceClient.prototype.listUserStrategies =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.StrategyService/ListUserStrategies',
      request,
      metadata || {},
      methodDescriptor_StrategyService_ListUserStrategies);
};


/**
 * @param {!proto.statistico.ListUserStrategiesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Strategy>}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServicePromiseClient.prototype.listUserStrategies =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.StrategyService/ListUserStrategies',
      request,
      metadata || {},
      methodDescriptor_StrategyService_ListUserStrategies);
};


module.exports = proto.statistico;

