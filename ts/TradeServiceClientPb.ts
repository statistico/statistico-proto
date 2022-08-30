/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as requests_pb from './requests_pb';
import * as responses_pb from './responses_pb';
import * as trade_pb from './trade_pb';


export class TradeServiceClient {
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

  methodInfoHealthCheck = new grpcWeb.MethodDescriptor(
    '/statistico.TradeService/HealthCheck',
    grpcWeb.MethodType.UNARY,
    requests_pb.HealthCheckRequest,
    responses_pb.HealthCheckResponse,
    (request: requests_pb.HealthCheckRequest) => {
      return request.serializeBinary();
    },
    responses_pb.HealthCheckResponse.deserializeBinary
  );

  healthCheck(
    request: requests_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null): Promise<responses_pb.HealthCheckResponse>;

  healthCheck(
    request: requests_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: responses_pb.HealthCheckResponse) => void): grpcWeb.ClientReadableStream<responses_pb.HealthCheckResponse>;

  healthCheck(
    request: requests_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: responses_pb.HealthCheckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.TradeService/HealthCheck',
        request,
        metadata || {},
        this.methodInfoHealthCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.TradeService/HealthCheck',
    request,
    metadata || {},
    this.methodInfoHealthCheck);
  }

  methodInfoSearchTrades = new grpcWeb.MethodDescriptor(
    '/statistico.TradeService/SearchTrades',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.SearchTradesRequest,
    trade_pb.Trade,
    (request: requests_pb.SearchTradesRequest) => {
      return request.serializeBinary();
    },
    trade_pb.Trade.deserializeBinary
  );

  searchTrades(
    request: requests_pb.SearchTradesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.TradeService/SearchTrades',
      request,
      metadata || {},
      this.methodInfoSearchTrades);
  }

}

