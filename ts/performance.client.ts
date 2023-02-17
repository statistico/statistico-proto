// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "performance.proto" (package "statistico", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { PerformanceService } from "./performance";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { TeamStatResponse } from "./performance";
import type { TeamStatPerformanceRequest } from "./performance";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service statistico.PerformanceService
 */
export interface IPerformanceServiceClient {
    /**
     * @generated from protobuf rpc: GetTeamsMatchingStat(statistico.TeamStatPerformanceRequest) returns (statistico.TeamStatResponse);
     */
    getTeamsMatchingStat(input: TeamStatPerformanceRequest, options?: RpcOptions): UnaryCall<TeamStatPerformanceRequest, TeamStatResponse>;
}
/**
 * @generated from protobuf service statistico.PerformanceService
 */
export class PerformanceServiceClient implements IPerformanceServiceClient, ServiceInfo {
    typeName = PerformanceService.typeName;
    methods = PerformanceService.methods;
    options = PerformanceService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetTeamsMatchingStat(statistico.TeamStatPerformanceRequest) returns (statistico.TeamStatResponse);
     */
    getTeamsMatchingStat(input: TeamStatPerformanceRequest, options?: RpcOptions): UnaryCall<TeamStatPerformanceRequest, TeamStatResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<TeamStatPerformanceRequest, TeamStatResponse>("unary", this._transport, method, opt, input);
    }
}
