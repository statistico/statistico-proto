// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "team.proto" (package "statistico", syntax proto3)
// tslint:disable
import { SeasonTeamsRequest } from "./requests";
import { TeamRequest } from "./requests";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { UInt64Value } from "./google/protobuf/wrappers";
import { BoolValue } from "./google/protobuf/wrappers";
import { StringValue } from "./google/protobuf/wrappers";
/**
 * @generated from protobuf message statistico.Team
 */
export interface Team {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: google.protobuf.StringValue short_code = 3;
     */
    shortCode?: StringValue;
    /**
     * @generated from protobuf field: uint64 country_id = 4;
     */
    countryId: bigint;
    /**
     * @generated from protobuf field: uint64 venue_id = 5;
     */
    venueId: bigint;
    /**
     * @generated from protobuf field: google.protobuf.BoolValue is_national_team = 6;
     */
    isNationalTeam?: BoolValue;
    /**
     * @generated from protobuf field: google.protobuf.UInt64Value founded = 7;
     */
    founded?: UInt64Value;
    /**
     * @generated from protobuf field: google.protobuf.StringValue logo = 8;
     */
    logo?: StringValue;
}
/**
 * @generated from protobuf message statistico.CompetitionTeamsRequest
 */
export interface CompetitionTeamsRequest {
    /**
     * @generated from protobuf field: repeated uint64 competition_ids = 1;
     */
    competitionIds: bigint[];
}
/**
 * @generated from protobuf message statistico.TeamsResponse
 */
export interface TeamsResponse {
    /**
     * @generated from protobuf field: repeated statistico.Team teams = 1;
     */
    teams: Team[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Team$Type extends MessageType<Team> {
    constructor() {
        super("statistico.Team", [
            { no: 1, name: "id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "short_code", kind: "message", T: () => StringValue },
            { no: 4, name: "country_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "venue_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "is_national_team", kind: "message", T: () => BoolValue },
            { no: 7, name: "founded", kind: "message", T: () => UInt64Value },
            { no: 8, name: "logo", kind: "message", T: () => StringValue }
        ]);
    }
    create(value?: PartialMessage<Team>): Team {
        const message = { id: 0n, name: "", countryId: 0n, venueId: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Team>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Team): Team {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 id */ 1:
                    message.id = reader.uint64().toBigInt();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* google.protobuf.StringValue short_code */ 3:
                    message.shortCode = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.shortCode);
                    break;
                case /* uint64 country_id */ 4:
                    message.countryId = reader.uint64().toBigInt();
                    break;
                case /* uint64 venue_id */ 5:
                    message.venueId = reader.uint64().toBigInt();
                    break;
                case /* google.protobuf.BoolValue is_national_team */ 6:
                    message.isNationalTeam = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.isNationalTeam);
                    break;
                case /* google.protobuf.UInt64Value founded */ 7:
                    message.founded = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.founded);
                    break;
                case /* google.protobuf.StringValue logo */ 8:
                    message.logo = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.logo);
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
    internalBinaryWrite(message: Team, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* google.protobuf.StringValue short_code = 3; */
        if (message.shortCode)
            StringValue.internalBinaryWrite(message.shortCode, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint64 country_id = 4; */
        if (message.countryId !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.countryId);
        /* uint64 venue_id = 5; */
        if (message.venueId !== 0n)
            writer.tag(5, WireType.Varint).uint64(message.venueId);
        /* google.protobuf.BoolValue is_national_team = 6; */
        if (message.isNationalTeam)
            BoolValue.internalBinaryWrite(message.isNationalTeam, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt64Value founded = 7; */
        if (message.founded)
            UInt64Value.internalBinaryWrite(message.founded, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.StringValue logo = 8; */
        if (message.logo)
            StringValue.internalBinaryWrite(message.logo, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.Team
 */
export const Team = new Team$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompetitionTeamsRequest$Type extends MessageType<CompetitionTeamsRequest> {
    constructor() {
        super("statistico.CompetitionTeamsRequest", [
            { no: 1, name: "competition_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<CompetitionTeamsRequest>): CompetitionTeamsRequest {
        const message = { competitionIds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CompetitionTeamsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CompetitionTeamsRequest): CompetitionTeamsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 competition_ids */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.competitionIds.push(reader.uint64().toBigInt());
                    else
                        message.competitionIds.push(reader.uint64().toBigInt());
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
    internalBinaryWrite(message: CompetitionTeamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint64 competition_ids = 1; */
        if (message.competitionIds.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.competitionIds.length; i++)
                writer.uint64(message.competitionIds[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.CompetitionTeamsRequest
 */
export const CompetitionTeamsRequest = new CompetitionTeamsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TeamsResponse$Type extends MessageType<TeamsResponse> {
    constructor() {
        super("statistico.TeamsResponse", [
            { no: 1, name: "teams", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Team }
        ]);
    }
    create(value?: PartialMessage<TeamsResponse>): TeamsResponse {
        const message = { teams: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TeamsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TeamsResponse): TeamsResponse {
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
    internalBinaryWrite(message: TeamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message statistico.TeamsResponse
 */
export const TeamsResponse = new TeamsResponse$Type();
/**
 * @generated ServiceType for protobuf service statistico.TeamService
 */
export const TeamService = new ServiceType("statistico.TeamService", [
    { name: "GetTeamByID", options: {}, I: TeamRequest, O: Team },
    { name: "GetTeamsByCompetitionId", options: {}, I: CompetitionTeamsRequest, O: TeamsResponse },
    { name: "GetTeamsBySeasonId", serverStreaming: true, options: {}, I: SeasonTeamsRequest, O: Team }
]);
