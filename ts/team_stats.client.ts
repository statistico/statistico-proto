// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "team_stats.proto" (package "statistico", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { TeamStatsService } from "./team_stats";
import type { TeamStat } from "./team_stats";
import type { TeamStatRequest } from "./requests";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { TeamStatsResponse } from "./team_stats";
import type { FixtureRequest } from "./requests";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service statistico.TeamStatsService
 */
export interface ITeamStatsServiceClient {
    /**
     * @generated from protobuf rpc: GetTeamStatsForFixture(statistico.FixtureRequest) returns (statistico.TeamStatsResponse);
     */
    getTeamStatsForFixture(input: FixtureRequest, options?: RpcOptions): UnaryCall<FixtureRequest, TeamStatsResponse>;
    /**
     * @generated from protobuf rpc: GetStatForTeam(statistico.TeamStatRequest) returns (stream statistico.TeamStat);
     */
    getStatForTeam(input: TeamStatRequest, options?: RpcOptions): ServerStreamingCall<TeamStatRequest, TeamStat>;
}
/**
 * @generated from protobuf service statistico.TeamStatsService
 */
export class TeamStatsServiceClient implements ITeamStatsServiceClient, ServiceInfo {
    typeName = TeamStatsService.typeName;
    methods = TeamStatsService.methods;
    options = TeamStatsService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetTeamStatsForFixture(statistico.FixtureRequest) returns (statistico.TeamStatsResponse);
     */
    getTeamStatsForFixture(input: FixtureRequest, options?: RpcOptions): UnaryCall<FixtureRequest, TeamStatsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<FixtureRequest, TeamStatsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetStatForTeam(statistico.TeamStatRequest) returns (stream statistico.TeamStat);
     */
    getStatForTeam(input: TeamStatRequest, options?: RpcOptions): ServerStreamingCall<TeamStatRequest, TeamStat> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<TeamStatRequest, TeamStat>("serverStreaming", this._transport, method, opt, input);
    }
}
