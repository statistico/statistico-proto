/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as odds_warehouse_pb from './odds_warehouse_pb';


export class OddsWarehouseServiceClient {
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

  methodInfoMarketRunnerSearch = new grpcWeb.MethodDescriptor(
    '/statistico.OddsWarehouseService/MarketRunnerSearch',
    grpcWeb.MethodType.SERVER_STREAMING,
    odds_warehouse_pb.MarketRunnerRequest,
    odds_warehouse_pb.MarketRunner,
    (request: odds_warehouse_pb.MarketRunnerRequest) => {
      return request.serializeBinary();
    },
    odds_warehouse_pb.MarketRunner.deserializeBinary
  );

  marketRunnerSearch(
    request: odds_warehouse_pb.MarketRunnerRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.OddsWarehouseService/MarketRunnerSearch',
      request,
      metadata || {},
      this.methodInfoMarketRunnerSearch);
  }

}

