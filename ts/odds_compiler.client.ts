// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "odds_compiler.proto" (package "statistico", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { OddsCompilerService } from "./odds_compiler";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { EventMarket } from "./odds_compiler";
import type { EventRequest } from "./odds_compiler";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service statistico.OddsCompilerService
 */
export interface IOddsCompilerServiceClient {
    /**
     * Returns event market for a given event containing odds data
     *
     * @generated from protobuf rpc: GetEventMarket(statistico.EventRequest) returns (statistico.EventMarket);
     */
    getEventMarket(input: EventRequest, options?: RpcOptions): UnaryCall<EventRequest, EventMarket>;
}
/**
 * @generated from protobuf service statistico.OddsCompilerService
 */
export class OddsCompilerServiceClient implements IOddsCompilerServiceClient, ServiceInfo {
    typeName = OddsCompilerService.typeName;
    methods = OddsCompilerService.methods;
    options = OddsCompilerService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Returns event market for a given event containing odds data
     *
     * @generated from protobuf rpc: GetEventMarket(statistico.EventRequest) returns (statistico.EventMarket);
     */
    getEventMarket(input: EventRequest, options?: RpcOptions): UnaryCall<EventRequest, EventMarket> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<EventRequest, EventMarket>("unary", this._transport, method, opt, input);
    }
}
