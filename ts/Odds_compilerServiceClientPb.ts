/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as odds_compiler_pb from './odds_compiler_pb';


export class OddsCompilerServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetEventMarket = new grpcWeb.MethodDescriptor(
    '/statistico.OddsCompilerService/GetEventMarket',
    grpcWeb.MethodType.UNARY,
    odds_compiler_pb.EventRequest,
    odds_compiler_pb.EventMarket,
    (request: odds_compiler_pb.EventRequest) => {
      return request.serializeBinary();
    },
    odds_compiler_pb.EventMarket.deserializeBinary
  );

  getEventMarket(
    request: odds_compiler_pb.EventRequest,
    metadata: grpcWeb.Metadata | null): Promise<odds_compiler_pb.EventMarket>;

  getEventMarket(
    request: odds_compiler_pb.EventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: odds_compiler_pb.EventMarket) => void): grpcWeb.ClientReadableStream<odds_compiler_pb.EventMarket>;

  getEventMarket(
    request: odds_compiler_pb.EventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: odds_compiler_pb.EventMarket) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.OddsCompilerService/GetEventMarket',
        request,
        metadata || {},
        this.methodInfoGetEventMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.OddsCompilerService/GetEventMarket',
    request,
    metadata || {},
    this.methodInfoGetEventMarket);
  }

}

