// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "performance.proto" (package "statistico", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Team } from "./team";
/**
 * @generated from protobuf message statistico.TeamStatPerformanceRequest
 */
export interface TeamStatPerformanceRequest {
    /**
     * @generated from protobuf field: string action = 1;
     */
    action: string;
    /**
     * @generated from protobuf field: uint32 games = 2;
     */
    games: number;
    /**
     * @generated from protobuf field: string measure = 3;
     */
    measure: string;
    /**
     * @generated from protobuf field: string metric = 4;
     */
    metric: string;
    /**
     * @generated from protobuf field: repeated uint64 seasons = 5;
     */
    seasons: bigint[];
    /**
     * @generated from protobuf field: string stat = 6;
     */
    stat: string;
    /**
     * @generated from protobuf field: float value = 7;
     */
    value: number;
    /**
     * @generated from protobuf field: string venue = 8;
     */
    venue: string;
}
/**
 * @generated from protobuf message statistico.TeamStatResponse
 */
export interface TeamStatResponse {
    /**
     * @generated from protobuf field: repeated statistico.Team teams = 1;
     */
    teams: Team[];
}
// @generated message type with reflection information, may provide speed optimized methods
class TeamStatPerformanceRequest$Type extends MessageType<TeamStatPerformanceRequest> {
    constructor() {
        super("statistico.TeamStatPerformanceRequest", [
            { no: 1, name: "action", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "games", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "measure", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "metric", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "seasons", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "stat", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "venue", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TeamStatPerformanceRequest>): TeamStatPerformanceRequest {
        const message = { action: "", games: 0, measure: "", metric: "", seasons: [], stat: "", value: 0, venue: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TeamStatPerformanceRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TeamStatPerformanceRequest): TeamStatPerformanceRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string action */ 1:
                    message.action = reader.string();
                    break;
                case /* uint32 games */ 2:
                    message.games = reader.uint32();
                    break;
                case /* string measure */ 3:
                    message.measure = reader.string();
                    break;
                case /* string metric */ 4:
                    message.metric = reader.string();
                    break;
                case /* repeated uint64 seasons */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.seasons.push(reader.uint64().toBigInt());
                    else
                        message.seasons.push(reader.uint64().toBigInt());
                    break;
                case /* string stat */ 6:
                    message.stat = reader.string();
                    break;
                case /* float value */ 7:
                    message.value = reader.float();
                    break;
                case /* string venue */ 8:
                    message.venue = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TeamStatPerformanceRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string action = 1; */
        if (message.action !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.action);
        /* uint32 games = 2; */
        if (message.games !== 0)
            writer.tag(2, WireType.Varint).uint32(message.games);
        /* string measure = 3; */
        if (message.measure !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.measure);
        /* string metric = 4; */
        if (message.metric !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.metric);
        /* repeated uint64 seasons = 5; */
        if (message.seasons.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.seasons.length; i++)
                writer.uint64(message.seasons[i]);
            writer.join();
        }
        /* string stat = 6; */
        if (message.stat !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.stat);
        /* float value = 7; */
        if (message.value !== 0)
            writer.tag(7, WireType.Bit32).float(message.value);
        /* string venue = 8; */
        if (message.venue !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.venue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.TeamStatPerformanceRequest
 */
export const TeamStatPerformanceRequest = new TeamStatPerformanceRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TeamStatResponse$Type extends MessageType<TeamStatResponse> {
    constructor() {
        super("statistico.TeamStatResponse", [
            { no: 1, name: "teams", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Team }
        ]);
    }
    create(value?: PartialMessage<TeamStatResponse>): TeamStatResponse {
        const message = { teams: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TeamStatResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TeamStatResponse): TeamStatResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated statistico.Team teams */ 1:
                    message.teams.push(Team.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TeamStatResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated statistico.Team teams = 1; */
        for (let i = 0; i < message.teams.length; i++)
            Team.internalBinaryWrite(message.teams[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.TeamStatResponse
 */
export const TeamStatResponse = new TeamStatResponse$Type();
/**
 * @generated ServiceType for protobuf service statistico.PerformanceService
 */
export const PerformanceService = new ServiceType("statistico.PerformanceService", [
    { name: "GetTeamsMatchingStat", options: {}, I: TeamStatPerformanceRequest, O: TeamStatResponse }
]);
