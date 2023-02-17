// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "trade.proto" (package "statistico", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { TradeService } from "./trade";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Trade } from "./trade";
import type { SearchTradesRequest } from "./requests";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service statistico.TradeService
 */
export interface ITradeServiceClient {
    /**
     * @generated from protobuf rpc: SearchTrades(statistico.SearchTradesRequest) returns (stream statistico.Trade);
     */
    searchTrades(input: SearchTradesRequest, options?: RpcOptions): ServerStreamingCall<SearchTradesRequest, Trade>;
}
/**
 * @generated from protobuf service statistico.TradeService
 */
export class TradeServiceClient implements ITradeServiceClient, ServiceInfo {
    typeName = TradeService.typeName;
    methods = TradeService.methods;
    options = TradeService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: SearchTrades(statistico.SearchTradesRequest) returns (stream statistico.Trade);
     */
    searchTrades(input: SearchTradesRequest, options?: RpcOptions): ServerStreamingCall<SearchTradesRequest, Trade> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SearchTradesRequest, Trade>("serverStreaming", this._transport, method, opt, input);
    }
}
