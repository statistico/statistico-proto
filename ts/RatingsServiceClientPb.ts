/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ratings_pb from './ratings_pb';


export class TeamRatingServiceClient {
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

  methodInfoGetFixtureRatings = new grpcWeb.MethodDescriptor(
    '/statistico.TeamRatingService/GetFixtureRatings',
    grpcWeb.MethodType.UNARY,
    ratings_pb.FixtureRatingRequest,
    ratings_pb.RatingResponse,
    (request: ratings_pb.FixtureRatingRequest) => {
      return request.serializeBinary();
    },
    ratings_pb.RatingResponse.deserializeBinary
  );

  getFixtureRatings(
    request: ratings_pb.FixtureRatingRequest,
    metadata: grpcWeb.Metadata | null): Promise<ratings_pb.RatingResponse>;

  getFixtureRatings(
    request: ratings_pb.FixtureRatingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ratings_pb.RatingResponse) => void): grpcWeb.ClientReadableStream<ratings_pb.RatingResponse>;

  getFixtureRatings(
    request: ratings_pb.FixtureRatingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ratings_pb.RatingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.TeamRatingService/GetFixtureRatings',
        request,
        metadata || {},
        this.methodInfoGetFixtureRatings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.TeamRatingService/GetFixtureRatings',
    request,
    metadata || {},
    this.methodInfoGetFixtureRatings);
  }

  methodInfoGetTeamRatings = new grpcWeb.MethodDescriptor(
    '/statistico.TeamRatingService/GetTeamRatings',
    grpcWeb.MethodType.UNARY,
    ratings_pb.TeamRatingRequest,
    ratings_pb.RatingResponse,
    (request: ratings_pb.TeamRatingRequest) => {
      return request.serializeBinary();
    },
    ratings_pb.RatingResponse.deserializeBinary
  );

  getTeamRatings(
    request: ratings_pb.TeamRatingRequest,
    metadata: grpcWeb.Metadata | null): Promise<ratings_pb.RatingResponse>;

  getTeamRatings(
    request: ratings_pb.TeamRatingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ratings_pb.RatingResponse) => void): grpcWeb.ClientReadableStream<ratings_pb.RatingResponse>;

  getTeamRatings(
    request: ratings_pb.TeamRatingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ratings_pb.RatingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.TeamRatingService/GetTeamRatings',
        request,
        metadata || {},
        this.methodInfoGetTeamRatings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.TeamRatingService/GetTeamRatings',
    request,
    metadata || {},
    this.methodInfoGetTeamRatings);
  }

}

