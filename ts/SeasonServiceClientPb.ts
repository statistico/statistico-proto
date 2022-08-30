/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as season_pb from './season_pb';
import * as requests_pb from './requests_pb';


export class SeasonServiceClient {
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

  methodInfoGetSeasonsForCompetition = new grpcWeb.MethodDescriptor(
    '/statistico.SeasonService/GetSeasonsForCompetition',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.SeasonCompetitionRequest,
    season_pb.Season,
    (request: requests_pb.SeasonCompetitionRequest) => {
      return request.serializeBinary();
    },
    season_pb.Season.deserializeBinary
  );

  getSeasonsForCompetition(
    request: requests_pb.SeasonCompetitionRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.SeasonService/GetSeasonsForCompetition',
      request,
      metadata || {},
      this.methodInfoGetSeasonsForCompetition);
  }

  methodInfoGetSeasonsForTeam = new grpcWeb.MethodDescriptor(
    '/statistico.SeasonService/GetSeasonsForTeam',
    grpcWeb.MethodType.UNARY,
    season_pb.TeamSeasonsRequest,
    season_pb.TeamSeasonsResponse,
    (request: season_pb.TeamSeasonsRequest) => {
      return request.serializeBinary();
    },
    season_pb.TeamSeasonsResponse.deserializeBinary
  );

  getSeasonsForTeam(
    request: season_pb.TeamSeasonsRequest,
    metadata: grpcWeb.Metadata | null): Promise<season_pb.TeamSeasonsResponse>;

  getSeasonsForTeam(
    request: season_pb.TeamSeasonsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: season_pb.TeamSeasonsResponse) => void): grpcWeb.ClientReadableStream<season_pb.TeamSeasonsResponse>;

  getSeasonsForTeam(
    request: season_pb.TeamSeasonsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: season_pb.TeamSeasonsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.SeasonService/GetSeasonsForTeam',
        request,
        metadata || {},
        this.methodInfoGetSeasonsForTeam,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.SeasonService/GetSeasonsForTeam',
    request,
    metadata || {},
    this.methodInfoGetSeasonsForTeam);
  }

}

