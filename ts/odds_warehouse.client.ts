// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "odds_warehouse.proto" (package "statistico", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { OddsWarehouseService } from "./odds_warehouse";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MarketRunner } from "./odds_warehouse";
import type { MarketRunnerRequest } from "./odds_warehouse";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service statistico.OddsWarehouseService
 */
export interface IOddsWarehouseServiceClient {
    /**
     * @generated from protobuf rpc: MarketRunnerSearch(statistico.MarketRunnerRequest) returns (stream statistico.MarketRunner);
     */
    marketRunnerSearch(input: MarketRunnerRequest, options?: RpcOptions): ServerStreamingCall<MarketRunnerRequest, MarketRunner>;
}
/**
 * @generated from protobuf service statistico.OddsWarehouseService
 */
export class OddsWarehouseServiceClient implements IOddsWarehouseServiceClient, ServiceInfo {
    typeName = OddsWarehouseService.typeName;
    methods = OddsWarehouseService.methods;
    options = OddsWarehouseService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: MarketRunnerSearch(statistico.MarketRunnerRequest) returns (stream statistico.MarketRunner);
     */
    marketRunnerSearch(input: MarketRunnerRequest, options?: RpcOptions): ServerStreamingCall<MarketRunnerRequest, MarketRunner> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MarketRunnerRequest, MarketRunner>("serverStreaming", this._transport, method, opt, input);
    }
}
