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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.statistico = require('./market_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.MarketServiceClient =
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
proto.statistico.MarketServicePromiseClient =
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
 *   !proto.statistico.MarketRunnerRequest,
 *   !proto.statistico.MarketRunner>}
 */
const methodDescriptor_MarketService_MarketRunnerSearch = new grpc.web.MethodDescriptor(
  '/statistico.MarketService/MarketRunnerSearch',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.statistico.MarketRunnerRequest,
  proto.statistico.MarketRunner,
  /**
   * @param {!proto.statistico.MarketRunnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.MarketRunner.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.MarketRunnerRequest,
 *   !proto.statistico.MarketRunner>}
 */
const methodInfo_MarketService_MarketRunnerSearch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.MarketRunner,
  /**
   * @param {!proto.statistico.MarketRunnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.MarketRunner.deserializeBinary
);


/**
 * @param {!proto.statistico.MarketRunnerRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.MarketRunner>}
 *     The XHR Node Readable Stream
 */
proto.statistico.MarketServiceClient.prototype.marketRunnerSearch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.MarketService/MarketRunnerSearch',
      request,
      metadata || {},
      methodDescriptor_MarketService_MarketRunnerSearch);
};


/**
 * @param {!proto.statistico.MarketRunnerRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.MarketRunner>}
 *     The XHR Node Readable Stream
 */
proto.statistico.MarketServicePromiseClient.prototype.marketRunnerSearch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.MarketService/MarketRunnerSearch',
      request,
      metadata || {},
      methodDescriptor_MarketService_MarketRunnerSearch);
};


module.exports = proto.statistico;

