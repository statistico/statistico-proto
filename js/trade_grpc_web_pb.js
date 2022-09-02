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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.statistico = require('./trade_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.TradeServiceClient =
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
proto.statistico.TradeServicePromiseClient =
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
 *   !proto.statistico.SearchTradesRequest,
 *   !proto.statistico.Trade>}
 */
const methodDescriptor_TradeService_SearchTrades = new grpc.web.MethodDescriptor(
  '/statistico.TradeService/SearchTrades',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.SearchTradesRequest,
  proto.statistico.Trade,
  /**
   * @param {!proto.statistico.SearchTradesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Trade.deserializeBinary
);


/**
 * @param {!proto.statistico.SearchTradesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Trade>}
 *     The XHR Node Readable Stream
 */
proto.statistico.TradeServiceClient.prototype.searchTrades =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.TradeService/SearchTrades',
      request,
      metadata || {},
      methodDescriptor_TradeService_SearchTrades);
};


/**
 * @param {!proto.statistico.SearchTradesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Trade>}
 *     The XHR Node Readable Stream
 */
proto.statistico.TradeServicePromiseClient.prototype.searchTrades =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.TradeService/SearchTrades',
      request,
      metadata || {},
      methodDescriptor_TradeService_SearchTrades);
};


module.exports = proto.statistico;

