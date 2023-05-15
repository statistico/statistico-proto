// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "player_stats.proto" (package "statistico", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { PlayerStatsService } from "./player_stats";
import type { PlayerStats } from "./player_stats";
import type { TeamSeasonPlayStatsRequest } from "./player_stats";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { LineupResponse } from "./player_stats";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { PlayerStatsResponse } from "./player_stats";
import type { FixtureRequest } from "./requests";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service statistico.PlayerStatsService
 */
export interface IPlayerStatsServiceClient {
    /**
     * @generated from protobuf rpc: GetPlayerStatsForFixture(statistico.FixtureRequest) returns (statistico.PlayerStatsResponse);
     */
    getPlayerStatsForFixture(input: FixtureRequest, options?: RpcOptions): UnaryCall<FixtureRequest, PlayerStatsResponse>;
    /**
     * @generated from protobuf rpc: GetLineUpForFixture(statistico.FixtureRequest) returns (statistico.LineupResponse);
     */
    getLineUpForFixture(input: FixtureRequest, options?: RpcOptions): UnaryCall<FixtureRequest, LineupResponse>;
    /**
     * @generated from protobuf rpc: GetTeamSeasonPlayerStats(statistico.TeamSeasonPlayStatsRequest) returns (stream statistico.PlayerStats);
     */
    getTeamSeasonPlayerStats(input: TeamSeasonPlayStatsRequest, options?: RpcOptions): ServerStreamingCall<TeamSeasonPlayStatsRequest, PlayerStats>;
}
/**
 * @generated from protobuf service statistico.PlayerStatsService
 */
export class PlayerStatsServiceClient implements IPlayerStatsServiceClient, ServiceInfo {
    typeName = PlayerStatsService.typeName;
    methods = PlayerStatsService.methods;
    options = PlayerStatsService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetPlayerStatsForFixture(statistico.FixtureRequest) returns (statistico.PlayerStatsResponse);
     */
    getPlayerStatsForFixture(input: FixtureRequest, options?: RpcOptions): UnaryCall<FixtureRequest, PlayerStatsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<FixtureRequest, PlayerStatsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetLineUpForFixture(statistico.FixtureRequest) returns (statistico.LineupResponse);
     */
    getLineUpForFixture(input: FixtureRequest, options?: RpcOptions): UnaryCall<FixtureRequest, LineupResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<FixtureRequest, LineupResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetTeamSeasonPlayerStats(statistico.TeamSeasonPlayStatsRequest) returns (stream statistico.PlayerStats);
     */
    getTeamSeasonPlayerStats(input: TeamSeasonPlayStatsRequest, options?: RpcOptions): ServerStreamingCall<TeamSeasonPlayStatsRequest, PlayerStats> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<TeamSeasonPlayStatsRequest, PlayerStats>("serverStreaming", this._transport, method, opt, input);
    }
}
