// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "fixture.proto" (package "statistico", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { FixtureService } from "./fixture";
import type { FixtureSearchRequest } from "./requests";
import type { FixtureRequest } from "./requests";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Fixture } from "./fixture";
import type { SeasonFixtureRequest } from "./requests";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service statistico.FixtureService
 */
export interface IFixtureServiceClient {
    /**
     * @generated from protobuf rpc: ListSeasonFixtures(statistico.SeasonFixtureRequest) returns (stream statistico.Fixture);
     */
    listSeasonFixtures(input: SeasonFixtureRequest, options?: RpcOptions): ServerStreamingCall<SeasonFixtureRequest, Fixture>;
    /**
     * @generated from protobuf rpc: FixtureByID(statistico.FixtureRequest) returns (statistico.Fixture);
     */
    fixtureByID(input: FixtureRequest, options?: RpcOptions): UnaryCall<FixtureRequest, Fixture>;
    /**
     * @generated from protobuf rpc: Search(statistico.FixtureSearchRequest) returns (stream statistico.Fixture);
     */
    search(input: FixtureSearchRequest, options?: RpcOptions): ServerStreamingCall<FixtureSearchRequest, Fixture>;
}
/**
 * @generated from protobuf service statistico.FixtureService
 */
export class FixtureServiceClient implements IFixtureServiceClient, ServiceInfo {
    typeName = FixtureService.typeName;
    methods = FixtureService.methods;
    options = FixtureService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: ListSeasonFixtures(statistico.SeasonFixtureRequest) returns (stream statistico.Fixture);
     */
    listSeasonFixtures(input: SeasonFixtureRequest, options?: RpcOptions): ServerStreamingCall<SeasonFixtureRequest, Fixture> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SeasonFixtureRequest, Fixture>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: FixtureByID(statistico.FixtureRequest) returns (statistico.Fixture);
     */
    fixtureByID(input: FixtureRequest, options?: RpcOptions): UnaryCall<FixtureRequest, Fixture> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<FixtureRequest, Fixture>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Search(statistico.FixtureSearchRequest) returns (stream statistico.Fixture);
     */
    search(input: FixtureSearchRequest, options?: RpcOptions): ServerStreamingCall<FixtureSearchRequest, Fixture> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<FixtureSearchRequest, Fixture>("serverStreaming", this._transport, method, opt, input);
    }
}
