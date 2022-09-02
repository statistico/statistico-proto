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
import * as strategy_pb from './strategy_pb';


export class StrategyServiceClient {
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

  methodInfoCreateStrategy = new grpcWeb.MethodDescriptor(
    '/statistico.StrategyService/CreateStrategy',
    grpcWeb.MethodType.UNARY,
    requests_pb.CreateStrategyRequest,
    strategy_pb.Strategy,
    (request: requests_pb.CreateStrategyRequest) => {
      return request.serializeBinary();
    },
    strategy_pb.Strategy.deserializeBinary
  );

  createStrategy(
    request: requests_pb.CreateStrategyRequest,
    metadata: grpcWeb.Metadata | null): Promise<strategy_pb.Strategy>;

  createStrategy(
    request: requests_pb.CreateStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: strategy_pb.Strategy) => void): grpcWeb.ClientReadableStream<strategy_pb.Strategy>;

  createStrategy(
    request: requests_pb.CreateStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: strategy_pb.Strategy) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.StrategyService/CreateStrategy',
        request,
        metadata || {},
        this.methodInfoCreateStrategy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.StrategyService/CreateStrategy',
    request,
    metadata || {},
    this.methodInfoCreateStrategy);
  }

  methodInfoListUserStrategies = new grpcWeb.MethodDescriptor(
    '/statistico.StrategyService/ListUserStrategies',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.ListUserStrategiesRequest,
    strategy_pb.Strategy,
    (request: requests_pb.ListUserStrategiesRequest) => {
      return request.serializeBinary();
    },
    strategy_pb.Strategy.deserializeBinary
  );

  listUserStrategies(
    request: requests_pb.ListUserStrategiesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.StrategyService/ListUserStrategies',
      request,
      metadata || {},
      this.methodInfoListUserStrategies);
  }

}

