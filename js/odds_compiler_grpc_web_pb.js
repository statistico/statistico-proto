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

const proto = {};
proto.statistico = require('./odds_compiler_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.OddsCompilerServiceClient =
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
proto.statistico.OddsCompilerServicePromiseClient =
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
 *   !proto.statistico.EventRequest,
 *   !proto.statistico.EventMarket>}
 */
const methodDescriptor_OddsCompilerService_GetEventMarket = new grpc.web.MethodDescriptor(
  '/statistico.OddsCompilerService/GetEventMarket',
  grpc.web.MethodType.UNARY,
  proto.statistico.EventRequest,
  proto.statistico.EventMarket,
  /**
   * @param {!proto.statistico.EventRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.EventMarket.deserializeBinary
);


/**
 * @param {!proto.statistico.EventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.statistico.EventMarket)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.EventMarket>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.OddsCompilerServiceClient.prototype.getEventMarket =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.OddsCompilerService/GetEventMarket',
      request,
      metadata || {},
      methodDescriptor_OddsCompilerService_GetEventMarket,
      callback);
};


/**
 * @param {!proto.statistico.EventRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.EventMarket>}
 *     Promise that resolves to the response
 */
proto.statistico.OddsCompilerServicePromiseClient.prototype.getEventMarket =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.OddsCompilerService/GetEventMarket',
      request,
      metadata || {},
      methodDescriptor_OddsCompilerService_GetEventMarket);
};


module.exports = proto.statistico;

