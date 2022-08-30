/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as event_pb from './event_pb';
import * as requests_pb from './requests_pb';


export class EventServiceClient {
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

  methodInfoFixtureEvents = new grpcWeb.MethodDescriptor(
    '/statistico.EventService/FixtureEvents',
    grpcWeb.MethodType.UNARY,
    requests_pb.FixtureRequest,
    event_pb.FixtureEventsResponse,
    (request: requests_pb.FixtureRequest) => {
      return request.serializeBinary();
    },
    event_pb.FixtureEventsResponse.deserializeBinary
  );

  fixtureEvents(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.FixtureEventsResponse>;

  fixtureEvents(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.FixtureEventsResponse) => void): grpcWeb.ClientReadableStream<event_pb.FixtureEventsResponse>;

  fixtureEvents(
    request: requests_pb.FixtureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.FixtureEventsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/statistico.EventService/FixtureEvents',
        request,
        metadata || {},
        this.methodInfoFixtureEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/statistico.EventService/FixtureEvents',
    request,
    metadata || {},
    this.methodInfoFixtureEvents);
  }

}

