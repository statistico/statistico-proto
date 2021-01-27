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
proto.statistico = require('./event_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.EventServiceClient =
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
proto.statistico.EventServicePromiseClient =
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
 *   !proto.statistico.FixtureEventsResponse>}
 */
const methodDescriptor_EventService_FixtureEvents = new grpc.web.MethodDescriptor(
  '/statistico.EventService/FixtureEvents',
  grpc.web.MethodType.UNARY,
  requests_pb.FixtureRequest,
  proto.statistico.FixtureEventsResponse,
  /**
   * @param {!proto.statistico.FixtureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.FixtureEventsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.FixtureRequest,
 *   !proto.statistico.FixtureEventsResponse>}
 */
const methodInfo_EventService_FixtureEvents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.FixtureEventsResponse,
  /**
   * @param {!proto.statistico.FixtureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.FixtureEventsResponse.deserializeBinary
);


/**
 * @param {!proto.statistico.FixtureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.statistico.FixtureEventsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.FixtureEventsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.EventServiceClient.prototype.fixtureEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.EventService/FixtureEvents',
      request,
      metadata || {},
      methodDescriptor_EventService_FixtureEvents,
      callback);
};


/**
 * @param {!proto.statistico.FixtureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.FixtureEventsResponse>}
 *     Promise that resolves to the response
 */
proto.statistico.EventServicePromiseClient.prototype.fixtureEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.EventService/FixtureEvents',
      request,
      metadata || {},
      methodDescriptor_EventService_FixtureEvents);
};


module.exports = proto.statistico;

