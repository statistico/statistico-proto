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
proto.statistico = require('./team_stats_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.TeamStatsServiceClient =
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
proto.statistico.TeamStatsServicePromiseClient =
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
 *   !proto.statistico.FixtureRequest,
 *   !proto.statistico.TeamStatsResponse>}
 */
const methodDescriptor_TeamStatsService_GetTeamStatsForFixture = new grpc.web.MethodDescriptor(
  '/statistico.TeamStatsService/GetTeamStatsForFixture',
  grpc.web.MethodType.UNARY,
  requests_pb.FixtureRequest,
  proto.statistico.TeamStatsResponse,
  /**
   * @param {!proto.statistico.FixtureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamStatsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.FixtureRequest,
 *   !proto.statistico.TeamStatsResponse>}
 */
const methodInfo_TeamStatsService_GetTeamStatsForFixture = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.TeamStatsResponse,
  /**
   * @param {!proto.statistico.FixtureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamStatsResponse.deserializeBinary
);


/**
 * @param {!proto.statistico.FixtureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.statistico.TeamStatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.TeamStatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.TeamStatsServiceClient.prototype.getTeamStatsForFixture =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.TeamStatsService/GetTeamStatsForFixture',
      request,
      metadata || {},
      methodDescriptor_TeamStatsService_GetTeamStatsForFixture,
      callback);
};


/**
 * @param {!proto.statistico.FixtureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.TeamStatsResponse>}
 *     Promise that resolves to the response
 */
proto.statistico.TeamStatsServicePromiseClient.prototype.getTeamStatsForFixture =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.TeamStatsService/GetTeamStatsForFixture',
      request,
      metadata || {},
      methodDescriptor_TeamStatsService_GetTeamStatsForFixture);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.TeamStatRequest,
 *   !proto.statistico.TeamStat>}
 */
const methodDescriptor_TeamStatsService_GetStatForTeam = new grpc.web.MethodDescriptor(
  '/statistico.TeamStatsService/GetStatForTeam',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.TeamStatRequest,
  proto.statistico.TeamStat,
  /**
   * @param {!proto.statistico.TeamStatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamStat.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.TeamStatRequest,
 *   !proto.statistico.TeamStat>}
 */
const methodInfo_TeamStatsService_GetStatForTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.TeamStat,
  /**
   * @param {!proto.statistico.TeamStatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamStat.deserializeBinary
);


/**
 * @param {!proto.statistico.TeamStatRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.TeamStat>}
 *     The XHR Node Readable Stream
 */
proto.statistico.TeamStatsServiceClient.prototype.getStatForTeam =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.TeamStatsService/GetStatForTeam',
      request,
      metadata || {},
      methodDescriptor_TeamStatsService_GetStatForTeam);
};


/**
 * @param {!proto.statistico.TeamStatRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.TeamStat>}
 *     The XHR Node Readable Stream
 */
proto.statistico.TeamStatsServicePromiseClient.prototype.getStatForTeam =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.TeamStatsService/GetStatForTeam',
      request,
      metadata || {},
      methodDescriptor_TeamStatsService_GetStatForTeam);
};


module.exports = proto.statistico;

