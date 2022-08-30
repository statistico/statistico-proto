/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as performance_pb from './performance_pb';


export class PerformanceServiceClient {
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

  methodInfoGetTeamsMatchingStat = new grpcWeb.MethodDescriptor(
    '/statistico.PerformanceService/GetTeamsMatchingStat',
    grpcWeb.MethodType.UNARY,
    performance_pb.TeamStatPerformanceRequest,
    performance_pb.TeamStatResponse,
    (request: performance_pb.TeamStatPerformanceRequest) => {
      return request.serializeBinary();
    },
    performance_pb.TeamStatResponse.deserializeBinary
  );

  getTeamsMatchingStat(
    request: performance_pb.TeamStatPerformanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<performance_pb.TeamStatResponse>;

  getTeamsMatchingStat(
    request: performance_pb.TeamStatPerformanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: performance_pb.TeamStatResponse) => void): grpcWeb.ClientReadableStream<performance_pb.TeamStatResponse>;

  getTeamsMatchingStat(
    request: performance_pb.TeamStatPerformanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: performance_pb.TeamStatResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.PerformanceService/GetTeamsMatchingStat',
        request,
        metadata || {},
        this.methodInfoGetTeamsMatchingStat,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.PerformanceService/GetTeamsMatchingStat',
    request,
    metadata || {},
    this.methodInfoGetTeamsMatchingStat);
  }

}

