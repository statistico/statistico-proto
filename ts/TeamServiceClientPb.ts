/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as team_pb from './team_pb';
import * as requests_pb from './requests_pb';


export class TeamServiceClient {
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

  methodInfoGetTeamByID = new grpcWeb.MethodDescriptor(
    '/statistico.TeamService/GetTeamByID',
    grpcWeb.MethodType.UNARY,
    requests_pb.TeamRequest,
    team_pb.Team,
    (request: requests_pb.TeamRequest) => {
      return request.serializeBinary();
    },
    team_pb.Team.deserializeBinary
  );

  getTeamByID(
    request: requests_pb.TeamRequest,
    metadata: grpcWeb.Metadata | null): Promise<team_pb.Team>;

  getTeamByID(
    request: requests_pb.TeamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: team_pb.Team) => void): grpcWeb.ClientReadableStream<team_pb.Team>;

  getTeamByID(
    request: requests_pb.TeamRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: team_pb.Team) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.TeamService/GetTeamByID',
        request,
        metadata || {},
        this.methodInfoGetTeamByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.TeamService/GetTeamByID',
    request,
    metadata || {},
    this.methodInfoGetTeamByID);
  }

  methodInfoGetTeamsByCompetitionId = new grpcWeb.MethodDescriptor(
    '/statistico.TeamService/GetTeamsByCompetitionId',
    grpcWeb.MethodType.UNARY,
    team_pb.CompetitionTeamsRequest,
    team_pb.TeamsResponse,
    (request: team_pb.CompetitionTeamsRequest) => {
      return request.serializeBinary();
    },
    team_pb.TeamsResponse.deserializeBinary
  );

  getTeamsByCompetitionId(
    request: team_pb.CompetitionTeamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<team_pb.TeamsResponse>;

  getTeamsByCompetitionId(
    request: team_pb.CompetitionTeamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: team_pb.TeamsResponse) => void): grpcWeb.ClientReadableStream<team_pb.TeamsResponse>;

  getTeamsByCompetitionId(
    request: team_pb.CompetitionTeamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: team_pb.TeamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.TeamService/GetTeamsByCompetitionId',
        request,
        metadata || {},
        this.methodInfoGetTeamsByCompetitionId,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.TeamService/GetTeamsByCompetitionId',
    request,
    metadata || {},
    this.methodInfoGetTeamsByCompetitionId);
  }

  methodInfoGetTeamsBySeasonId = new grpcWeb.MethodDescriptor(
    '/statistico.TeamService/GetTeamsBySeasonId',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.SeasonTeamsRequest,
    team_pb.Team,
    (request: requests_pb.SeasonTeamsRequest) => {
      return request.serializeBinary();
    },
    team_pb.Team.deserializeBinary
  );

  getTeamsBySeasonId(
    request: requests_pb.SeasonTeamsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.TeamService/GetTeamsBySeasonId',
      request,
      metadata || {},
      this.methodInfoGetTeamsBySeasonId);
  }

}

