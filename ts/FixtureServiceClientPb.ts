/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as fixture_pb from './fixture_pb';
import * as requests_pb from './requests_pb';


export class FixtureServiceClient {
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

  methodInfoListSeasonFixtures = new grpcWeb.MethodDescriptor(
    '/statistico.FixtureService/ListSeasonFixtures',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.SeasonFixtureRequest,
    fixture_pb.Fixture,
    (request: requests_pb.SeasonFixtureRequest) => {
      return request.serializeBinary();
    },
    fixture_pb.Fixture.deserializeBinary
  );

  listSeasonFixtures(
    request: requests_pb.SeasonFixtureRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.FixtureService/ListSeasonFixtures',
      request,
      metadata || {},
      this.methodInfoListSeasonFixtures);
  }

  methodInfoFixtureByID = new grpcWeb.MethodDescriptor(
    '/statistico.FixtureService/FixtureByID',
    grpcWeb.MethodType.UNARY,
    requests_pb.FixtureRequest,
    fixture_pb.Fixture,
    (request: requests_pb.FixtureRequest) => {
      return request.serializeBinary();
    },
    fixture_pb.Fixture.deserializeBinary
  );

  fixtureByID(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null): Promise<fixture_pb.Fixture>;

  fixtureByID(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: fixture_pb.Fixture) => void): grpcWeb.ClientReadableStream<fixture_pb.Fixture>;

  fixtureByID(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: fixture_pb.Fixture) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.FixtureService/FixtureByID',
        request,
        metadata || {},
        this.methodInfoFixtureByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.FixtureService/FixtureByID',
    request,
    metadata || {},
    this.methodInfoFixtureByID);
  }

  methodInfoSearch = new grpcWeb.MethodDescriptor(
    '/statistico.FixtureService/Search',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.FixtureSearchRequest,
    fixture_pb.Fixture,
    (request: requests_pb.FixtureSearchRequest) => {
      return request.serializeBinary();
    },
    fixture_pb.Fixture.deserializeBinary
  );

  search(
    request: requests_pb.FixtureSearchRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.FixtureService/Search',
      request,
      metadata || {},
      this.methodInfoSearch);
  }

}

