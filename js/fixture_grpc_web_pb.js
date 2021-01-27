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


var common_pb = require('./common_pb.js')

var competition_pb = require('./competition_pb.js')

var requests_pb = require('./requests_pb.js')

var round_pb = require('./round_pb.js')

var season_pb = require('./season_pb.js')

var team_pb = require('./team_pb.js')

var venue_pb = require('./venue_pb.js')
const proto = {};
proto.statistico = require('./fixture_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.FixtureServiceClient =
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
proto.statistico.FixtureServicePromiseClient =
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
 *   !proto.statistico.SeasonFixtureRequest,
 *   !proto.statistico.Fixture>}
 */
const methodDescriptor_FixtureService_ListSeasonFixtures = new grpc.web.MethodDescriptor(
  '/statistico.FixtureService/ListSeasonFixtures',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.SeasonFixtureRequest,
  proto.statistico.Fixture,
  /**
   * @param {!proto.statistico.SeasonFixtureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Fixture.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.SeasonFixtureRequest,
 *   !proto.statistico.Fixture>}
 */
const methodInfo_FixtureService_ListSeasonFixtures = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Fixture,
  /**
   * @param {!proto.statistico.SeasonFixtureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Fixture.deserializeBinary
);


/**
 * @param {!proto.statistico.SeasonFixtureRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Fixture>}
 *     The XHR Node Readable Stream
 */
proto.statistico.FixtureServiceClient.prototype.listSeasonFixtures =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.FixtureService/ListSeasonFixtures',
      request,
      metadata || {},
      methodDescriptor_FixtureService_ListSeasonFixtures);
};


/**
 * @param {!proto.statistico.SeasonFixtureRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Fixture>}
 *     The XHR Node Readable Stream
 */
proto.statistico.FixtureServicePromiseClient.prototype.listSeasonFixtures =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.FixtureService/ListSeasonFixtures',
      request,
      metadata || {},
      methodDescriptor_FixtureService_ListSeasonFixtures);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.FixtureRequest,
 *   !proto.statistico.Fixture>}
 */
const methodDescriptor_FixtureService_FixtureByID = new grpc.web.MethodDescriptor(
  '/statistico.FixtureService/FixtureByID',
  grpc.web.MethodType.UNARY,
  requests_pb.FixtureRequest,
  proto.statistico.Fixture,
  /**
   * @param {!proto.statistico.FixtureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Fixture.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.FixtureRequest,
 *   !proto.statistico.Fixture>}
 */
const methodInfo_FixtureService_FixtureByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Fixture,
  /**
   * @param {!proto.statistico.FixtureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Fixture.deserializeBinary
);


/**
 * @param {!proto.statistico.FixtureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.statistico.Fixture)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Fixture>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.FixtureServiceClient.prototype.fixtureByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.FixtureService/FixtureByID',
      request,
      metadata || {},
      methodDescriptor_FixtureService_FixtureByID,
      callback);
};


/**
 * @param {!proto.statistico.FixtureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.Fixture>}
 *     Promise that resolves to the response
 */
proto.statistico.FixtureServicePromiseClient.prototype.fixtureByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.FixtureService/FixtureByID',
      request,
      metadata || {},
      methodDescriptor_FixtureService_FixtureByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.FixtureSearchRequest,
 *   !proto.statistico.Fixture>}
 */
const methodDescriptor_FixtureService_Search = new grpc.web.MethodDescriptor(
  '/statistico.FixtureService/Search',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.FixtureSearchRequest,
  proto.statistico.Fixture,
  /**
   * @param {!proto.statistico.FixtureSearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Fixture.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.FixtureSearchRequest,
 *   !proto.statistico.Fixture>}
 */
const methodInfo_FixtureService_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Fixture,
  /**
   * @param {!proto.statistico.FixtureSearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Fixture.deserializeBinary
);


/**
 * @param {!proto.statistico.FixtureSearchRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Fixture>}
 *     The XHR Node Readable Stream
 */
proto.statistico.FixtureServiceClient.prototype.search =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.FixtureService/Search',
      request,
      metadata || {},
      methodDescriptor_FixtureService_Search);
};


/**
 * @param {!proto.statistico.FixtureSearchRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Fixture>}
 *     The XHR Node Readable Stream
 */
proto.statistico.FixtureServicePromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.FixtureService/Search',
      request,
      metadata || {},
      methodDescriptor_FixtureService_Search);
};


module.exports = proto.statistico;

