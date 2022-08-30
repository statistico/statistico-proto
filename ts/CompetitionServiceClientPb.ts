/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as competition_pb from './competition_pb';
import * as requests_pb from './requests_pb';


export class CompetitionServiceClient {
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

  methodInfoListCompetitions = new grpcWeb.MethodDescriptor(
    '/statistico.CompetitionService/ListCompetitions',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.CompetitionRequest,
    competition_pb.Competition,
    (request: requests_pb.CompetitionRequest) => {
      return request.serializeBinary();
    },
    competition_pb.Competition.deserializeBinary
  );

  listCompetitions(
    request: requests_pb.CompetitionRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.CompetitionService/ListCompetitions',
      request,
      metadata || {},
      this.methodInfoListCompetitions);
  }

}

