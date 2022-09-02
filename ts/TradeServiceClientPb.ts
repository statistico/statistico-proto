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
import * as trade_pb from './trade_pb';


export class TradeServiceClient {
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

  methodInfoSearchTrades = new grpcWeb.MethodDescriptor(
    '/statistico.TradeService/SearchTrades',
    grpcWeb.MethodType.SERVER_STREAMING,
    requests_pb.SearchTradesRequest,
    trade_pb.Trade,
    (request: requests_pb.SearchTradesRequest) => {
      return request.serializeBinary();
    },
    trade_pb.Trade.deserializeBinary
  );

  searchTrades(
    request: requests_pb.SearchTradesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/statistico.TradeService/SearchTrades',
      request,
      metadata || {},
      this.methodInfoSearchTrades);
  }

}

