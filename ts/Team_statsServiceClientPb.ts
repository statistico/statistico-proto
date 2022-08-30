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
import * as team_stats_pb from './team_stats_pb';


export class TeamStatsServiceClient {
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

  methodInfoGetTeamStatsForFixture = new grpcWeb.MethodDescriptor(
    '/statistico.TeamStatsService/GetTeamStatsForFixture',
    grpcWeb.MethodType.UNARY,
    requests_pb.FixtureRequest,
    team_stats_pb.TeamStatsResponse,
    (request: requests_pb.FixtureRequest) => {
      return request.serializeBinary();
    },
    team_stats_pb.TeamStatsResponse.deserializeBinary
  );

  getTeamStatsForFixture(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null): Promise<team_stats_pb.TeamStatsResponse>;

  getTeamStatsForFixture(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: team_stats_pb.TeamStatsResponse) => void): grpcWeb.ClientReadableStream<team_stats_pb.TeamStatsResponse>;

  getTeamStatsForFixture(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: team_stats_pb.TeamStatsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.TeamStatsService/GetTeamStatsForFixture',
        request,
        metadata || {},
        this.methodInfoGetTeamStatsForFixture,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.TeamStatsService/GetTeamStatsForFixture',
    request,
    metadata || {},
    this.methodInfoGetTeamStatsForFixture);
  }

  methodInfoGetStatForTeam = new grpcWeb.MethodDescriptor(
    '/statistico.TeamStatsService/GetStatForTeam',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.TeamStatRequest,
    team_stats_pb.TeamStat,
    (request: requests_pb.TeamStatRequest) => {
      return request.serializeBinary();
    },
    team_stats_pb.TeamStat.deserializeBinary
  );

  getStatForTeam(
    request: requests_pb.TeamStatRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.TeamStatsService/GetStatForTeam',
      request,
      metadata || {},
      this.methodInfoGetStatForTeam);
  }

}

