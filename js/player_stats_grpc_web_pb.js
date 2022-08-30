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


var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var requests_pb = require('./requests_pb.js')
const proto = {};
proto.statistico = require('./player_stats_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.PlayerStatsServiceClient =
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
proto.statistico.PlayerStatsServicePromiseClient =
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
 *   !proto.statistico.FixtureRequest,
 *   !proto.statistico.PlayerStatsResponse>}
 */
const methodDescriptor_PlayerStatsService_GetPlayerStatsForFixture = new grpc.web.MethodDescriptor(
  '/statistico.PlayerStatsService/GetPlayerStatsForFixture',
  grpc.web.MethodType.UNARY,
  requests_pb.FixtureRequest,
  proto.statistico.PlayerStatsResponse,
  /**
   * @param {!proto.statistico.FixtureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.PlayerStatsResponse.deserializeBinary
);


/**
 * @param {!proto.statistico.FixtureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.statistico.PlayerStatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.PlayerStatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.PlayerStatsServiceClient.prototype.getPlayerStatsForFixture =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.PlayerStatsService/GetPlayerStatsForFixture',
      request,
      metadata || {},
      methodDescriptor_PlayerStatsService_GetPlayerStatsForFixture,
      callback);
};


/**
 * @param {!proto.statistico.FixtureRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.PlayerStatsResponse>}
 *     Promise that resolves to the response
 */
proto.statistico.PlayerStatsServicePromiseClient.prototype.getPlayerStatsForFixture =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.PlayerStatsService/GetPlayerStatsForFixture',
      request,
      metadata || {},
      methodDescriptor_PlayerStatsService_GetPlayerStatsForFixture);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.FixtureRequest,
 *   !proto.statistico.LineupResponse>}
 */
const methodDescriptor_PlayerStatsService_GetLineUpForFixture = new grpc.web.MethodDescriptor(
  '/statistico.PlayerStatsService/GetLineUpForFixture',
  grpc.web.MethodType.UNARY,
  requests_pb.FixtureRequest,
  proto.statistico.LineupResponse,
  /**
   * @param {!proto.statistico.FixtureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.LineupResponse.deserializeBinary
);


/**
 * @param {!proto.statistico.FixtureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.statistico.LineupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.LineupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.PlayerStatsServiceClient.prototype.getLineUpForFixture =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.PlayerStatsService/GetLineUpForFixture',
      request,
      metadata || {},
      methodDescriptor_PlayerStatsService_GetLineUpForFixture,
      callback);
};


/**
 * @param {!proto.statistico.FixtureRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.LineupResponse>}
 *     Promise that resolves to the response
 */
proto.statistico.PlayerStatsServicePromiseClient.prototype.getLineUpForFixture =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.PlayerStatsService/GetLineUpForFixture',
      request,
      metadata || {},
      methodDescriptor_PlayerStatsService_GetLineUpForFixture);
};


module.exports = proto.statistico;

