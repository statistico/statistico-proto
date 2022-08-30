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
import * as player_stats_pb from './player_stats_pb';


export class PlayerStatsServiceClient {
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

  methodInfoGetPlayerStatsForFixture = new grpcWeb.MethodDescriptor(
    '/statistico.PlayerStatsService/GetPlayerStatsForFixture',
    grpcWeb.MethodType.UNARY,
    requests_pb.FixtureRequest,
    player_stats_pb.PlayerStatsResponse,
    (request: requests_pb.FixtureRequest) => {
      return request.serializeBinary();
    },
    player_stats_pb.PlayerStatsResponse.deserializeBinary
  );

  getPlayerStatsForFixture(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null): Promise<player_stats_pb.PlayerStatsResponse>;

  getPlayerStatsForFixture(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: player_stats_pb.PlayerStatsResponse) => void): grpcWeb.ClientReadableStream<player_stats_pb.PlayerStatsResponse>;

  getPlayerStatsForFixture(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: player_stats_pb.PlayerStatsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.PlayerStatsService/GetPlayerStatsForFixture',
        request,
        metadata || {},
        this.methodInfoGetPlayerStatsForFixture,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.PlayerStatsService/GetPlayerStatsForFixture',
    request,
    metadata || {},
    this.methodInfoGetPlayerStatsForFixture);
  }

  methodInfoGetLineUpForFixture = new grpcWeb.MethodDescriptor(
    '/statistico.PlayerStatsService/GetLineUpForFixture',
    grpcWeb.MethodType.UNARY,
    requests_pb.FixtureRequest,
    player_stats_pb.LineupResponse,
    (request: requests_pb.FixtureRequest) => {
      return request.serializeBinary();
    },
    player_stats_pb.LineupResponse.deserializeBinary
  );

  getLineUpForFixture(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null): Promise<player_stats_pb.LineupResponse>;

  getLineUpForFixture(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: player_stats_pb.LineupResponse) => void): grpcWeb.ClientReadableStream<player_stats_pb.LineupResponse>;

  getLineUpForFixture(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: player_stats_pb.LineupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.PlayerStatsService/GetLineUpForFixture',
        request,
        metadata || {},
        this.methodInfoGetLineUpForFixture,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.PlayerStatsService/GetLineUpForFixture',
    request,
    metadata || {},
    this.methodInfoGetLineUpForFixture);
  }

}

