// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "ratings.proto" (package "statistico", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { TeamRatingService } from "./ratings";
import type { TeamRatingRequest } from "./ratings";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { RatingResponse } from "./ratings";
import type { FixtureRatingRequest } from "./ratings";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service statistico.TeamRatingService
 */
export interface ITeamRatingServiceClient {
    /**
     * @generated from protobuf rpc: GetFixtureRatings(statistico.FixtureRatingRequest) returns (statistico.RatingResponse);
     */
    getFixtureRatings(input: FixtureRatingRequest, options?: RpcOptions): UnaryCall<FixtureRatingRequest, RatingResponse>;
    /**
     * @generated from protobuf rpc: GetTeamRatings(statistico.TeamRatingRequest) returns (statistico.RatingResponse);
     */
    getTeamRatings(input: TeamRatingRequest, options?: RpcOptions): UnaryCall<TeamRatingRequest, RatingResponse>;
}
/**
 * @generated from protobuf service statistico.TeamRatingService
 */
export class TeamRatingServiceClient implements ITeamRatingServiceClient, ServiceInfo {
    typeName = TeamRatingService.typeName;
    methods = TeamRatingService.methods;
    options = TeamRatingService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetFixtureRatings(statistico.FixtureRatingRequest) returns (statistico.RatingResponse);
     */
    getFixtureRatings(input: FixtureRatingRequest, options?: RpcOptions): UnaryCall<FixtureRatingRequest, RatingResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<FixtureRatingRequest, RatingResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetTeamRatings(statistico.TeamRatingRequest) returns (statistico.RatingResponse);
     */
    getTeamRatings(input: TeamRatingRequest, options?: RpcOptions): UnaryCall<TeamRatingRequest, RatingResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<TeamRatingRequest, RatingResponse>("unary", this._transport, method, opt, input);
    }
}
