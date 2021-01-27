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

var common_pb = require('./common_pb.js')

var requests_pb = require('./requests_pb.js')

var round_pb = require('./round_pb.js')

var season_pb = require('./season_pb.js')

var team_pb = require('./team_pb.js')

var team_stats_pb = require('./team_stats_pb.js')

var venue_pb = require('./venue_pb.js')
const proto = {};
proto.statistico = require('./result_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.ResultServiceClient =
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
proto.statistico.ResultServicePromiseClient =
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
 *   !proto.statistico.ResultRequest,
 *   !proto.statistico.Result>}
 */
const methodDescriptor_ResultService_GetById = new grpc.web.MethodDescriptor(
  '/statistico.ResultService/GetById',
  grpc.web.MethodType.UNARY,
  requests_pb.ResultRequest,
  proto.statistico.Result,
  /**
   * @param {!proto.statistico.ResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Result.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.ResultRequest,
 *   !proto.statistico.Result>}
 */
const methodInfo_ResultService_GetById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Result,
  /**
   * @param {!proto.statistico.ResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Result.deserializeBinary
);


/**
 * @param {!proto.statistico.ResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.statistico.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.ResultServiceClient.prototype.getById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.ResultService/GetById',
      request,
      metadata || {},
      methodDescriptor_ResultService_GetById,
      callback);
};


/**
 * @param {!proto.statistico.ResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.Result>}
 *     Promise that resolves to the response
 */
proto.statistico.ResultServicePromiseClient.prototype.getById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.ResultService/GetById',
      request,
      metadata || {},
      methodDescriptor_ResultService_GetById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.HistoricalResultRequest,
 *   !proto.statistico.Result>}
 */
const methodDescriptor_ResultService_GetHistoricalResultsForFixture = new grpc.web.MethodDescriptor(
  '/statistico.ResultService/GetHistoricalResultsForFixture',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.HistoricalResultRequest,
  proto.statistico.Result,
  /**
   * @param {!proto.statistico.HistoricalResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Result.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.HistoricalResultRequest,
 *   !proto.statistico.Result>}
 */
const methodInfo_ResultService_GetHistoricalResultsForFixture = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Result,
  /**
   * @param {!proto.statistico.HistoricalResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Result.deserializeBinary
);


/**
 * @param {!proto.statistico.HistoricalResultRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Result>}
 *     The XHR Node Readable Stream
 */
proto.statistico.ResultServiceClient.prototype.getHistoricalResultsForFixture =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.ResultService/GetHistoricalResultsForFixture',
      request,
      metadata || {},
      methodDescriptor_ResultService_GetHistoricalResultsForFixture);
};


/**
 * @param {!proto.statistico.HistoricalResultRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Result>}
 *     The XHR Node Readable Stream
 */
proto.statistico.ResultServicePromiseClient.prototype.getHistoricalResultsForFixture =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.ResultService/GetHistoricalResultsForFixture',
      request,
      metadata || {},
      methodDescriptor_ResultService_GetHistoricalResultsForFixture);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.SeasonRequest,
 *   !proto.statistico.Result>}
 */
const methodDescriptor_ResultService_GetResultsForSeason = new grpc.web.MethodDescriptor(
  '/statistico.ResultService/GetResultsForSeason',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.SeasonRequest,
  proto.statistico.Result,
  /**
   * @param {!proto.statistico.SeasonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Result.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.SeasonRequest,
 *   !proto.statistico.Result>}
 */
const methodInfo_ResultService_GetResultsForSeason = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Result,
  /**
   * @param {!proto.statistico.SeasonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Result.deserializeBinary
);


/**
 * @param {!proto.statistico.SeasonRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Result>}
 *     The XHR Node Readable Stream
 */
proto.statistico.ResultServiceClient.prototype.getResultsForSeason =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.ResultService/GetResultsForSeason',
      request,
      metadata || {},
      methodDescriptor_ResultService_GetResultsForSeason);
};


/**
 * @param {!proto.statistico.SeasonRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Result>}
 *     The XHR Node Readable Stream
 */
proto.statistico.ResultServicePromiseClient.prototype.getResultsForSeason =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.ResultService/GetResultsForSeason',
      request,
      metadata || {},
      methodDescriptor_ResultService_GetResultsForSeason);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.TeamResultRequest,
 *   !proto.statistico.Result>}
 */
const methodDescriptor_ResultService_GetResultsForTeam = new grpc.web.MethodDescriptor(
  '/statistico.ResultService/GetResultsForTeam',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.TeamResultRequest,
  proto.statistico.Result,
  /**
   * @param {!proto.statistico.TeamResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Result.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.TeamResultRequest,
 *   !proto.statistico.Result>}
 */
const methodInfo_ResultService_GetResultsForTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Result,
  /**
   * @param {!proto.statistico.TeamResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Result.deserializeBinary
);


/**
 * @param {!proto.statistico.TeamResultRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Result>}
 *     The XHR Node Readable Stream
 */
proto.statistico.ResultServiceClient.prototype.getResultsForTeam =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.ResultService/GetResultsForTeam',
      request,
      metadata || {},
      methodDescriptor_ResultService_GetResultsForTeam);
};


/**
 * @param {!proto.statistico.TeamResultRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Result>}
 *     The XHR Node Readable Stream
 */
proto.statistico.ResultServicePromiseClient.prototype.getResultsForTeam =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.ResultService/GetResultsForTeam',
      request,
      metadata || {},
      methodDescriptor_ResultService_GetResultsForTeam);
};


module.exports = proto.statistico;

