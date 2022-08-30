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
import * as result_pb from './result_pb';


export class ResultServiceClient {
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

  methodInfoGetById = new grpcWeb.MethodDescriptor(
    '/statistico.ResultService/GetById',
    grpcWeb.MethodType.UNARY,
    requests_pb.ResultRequest,
    result_pb.Result,
    (request: requests_pb.ResultRequest) => {
      return request.serializeBinary();
    },
    result_pb.Result.deserializeBinary
  );

  getById(
    request: requests_pb.ResultRequest,
    metadata: grpcWeb.Metadata | null): Promise<result_pb.Result>;

  getById(
    request: requests_pb.ResultRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: result_pb.Result) => void): grpcWeb.ClientReadableStream<result_pb.Result>;

  getById(
    request: requests_pb.ResultRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: result_pb.Result) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.ResultService/GetById',
        request,
        metadata || {},
        this.methodInfoGetById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.ResultService/GetById',
    request,
    metadata || {},
    this.methodInfoGetById);
  }

  methodInfoGetHistoricalResultsForFixture = new grpcWeb.MethodDescriptor(
    '/statistico.ResultService/GetHistoricalResultsForFixture',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.HistoricalResultRequest,
    result_pb.Result,
    (request: requests_pb.HistoricalResultRequest) => {
      return request.serializeBinary();
    },
    result_pb.Result.deserializeBinary
  );

  getHistoricalResultsForFixture(
    request: requests_pb.HistoricalResultRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.ResultService/GetHistoricalResultsForFixture',
      request,
      metadata || {},
      this.methodInfoGetHistoricalResultsForFixture);
  }

  methodInfoGetResultsForSeason = new grpcWeb.MethodDescriptor(
    '/statistico.ResultService/GetResultsForSeason',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.SeasonRequest,
    result_pb.Result,
    (request: requests_pb.SeasonRequest) => {
      return request.serializeBinary();
    },
    result_pb.Result.deserializeBinary
  );

  getResultsForSeason(
    request: requests_pb.SeasonRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.ResultService/GetResultsForSeason',
      request,
      metadata || {},
      this.methodInfoGetResultsForSeason);
  }

  methodInfoGetResultsForTeam = new grpcWeb.MethodDescriptor(
    '/statistico.ResultService/GetResultsForTeam',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.TeamResultRequest,
    result_pb.Result,
    (request: requests_pb.TeamResultRequest) => {
      return request.serializeBinary();
    },
    result_pb.Result.deserializeBinary
  );

  getResultsForTeam(
    request: requests_pb.TeamResultRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.ResultService/GetResultsForTeam',
      request,
      metadata || {},
      this.methodInfoGetResultsForTeam);
  }

}

