// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "strategy.proto" (package "statistico", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { StrategyService } from "./strategy";
import type { Empty } from "./google/protobuf/empty";
import type { UpdateStrategyRequest } from "./requests";
import type { ListStrategiesRequest } from "./requests";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Strategy } from "./strategy";
import type { CreateStrategyRequest } from "./requests";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service statistico.StrategyService
 */
export interface IStrategyServiceClient {
    /**
     * @generated from protobuf rpc: CreateStrategy(statistico.CreateStrategyRequest) returns (statistico.Strategy);
     */
    createStrategy(input: CreateStrategyRequest, options?: RpcOptions): UnaryCall<CreateStrategyRequest, Strategy>;
    /**
     * @generated from protobuf rpc: ListStrategies(statistico.ListStrategiesRequest) returns (stream statistico.Strategy);
     */
    listStrategies(input: ListStrategiesRequest, options?: RpcOptions): ServerStreamingCall<ListStrategiesRequest, Strategy>;
    /**
     * @generated from protobuf rpc: UpdateStrategy(statistico.UpdateStrategyRequest) returns (google.protobuf.Empty);
     */
    updateStrategy(input: UpdateStrategyRequest, options?: RpcOptions): UnaryCall<UpdateStrategyRequest, Empty>;
}
/**
 * @generated from protobuf service statistico.StrategyService
 */
export class StrategyServiceClient implements IStrategyServiceClient, ServiceInfo {
    typeName = StrategyService.typeName;
    methods = StrategyService.methods;
    options = StrategyService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: CreateStrategy(statistico.CreateStrategyRequest) returns (statistico.Strategy);
     */
    createStrategy(input: CreateStrategyRequest, options?: RpcOptions): UnaryCall<CreateStrategyRequest, Strategy> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateStrategyRequest, Strategy>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListStrategies(statistico.ListStrategiesRequest) returns (stream statistico.Strategy);
     */
    listStrategies(input: ListStrategiesRequest, options?: RpcOptions): ServerStreamingCall<ListStrategiesRequest, Strategy> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListStrategiesRequest, Strategy>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdateStrategy(statistico.UpdateStrategyRequest) returns (google.protobuf.Empty);
     */
    updateStrategy(input: UpdateStrategyRequest, options?: RpcOptions): UnaryCall<UpdateStrategyRequest, Empty> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateStrategyRequest, Empty>("unary", this._transport, method, opt, input);
    }
}
