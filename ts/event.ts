// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "event.proto" (package "statistico", syntax proto3)
// tslint:disable
import { FixtureRequest } from "./requests";
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
/**
 * @generated from protobuf message statistico.FixtureEventsResponse
 */
export interface FixtureEventsResponse {
    /**
     * @generated from protobuf field: uint64 fixture_id = 1;
     */
    fixtureId: bigint;
    /**
     * @generated from protobuf field: repeated statistico.CardEvent cards = 2;
     */
    cards: CardEvent[];
    /**
     * @generated from protobuf field: repeated statistico.GoalEvent goals = 3;
     */
    goals: GoalEvent[];
}
/**
 * @generated from protobuf message statistico.CardEvent
 */
export interface CardEvent {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: uint64 team_id = 2;
     */
    teamId: bigint;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
    /**
     * @generated from protobuf field: uint64 player_id = 4;
     */
    playerId: bigint;
    /**
     * @generated from protobuf field: uint32 minute = 5;
     */
    minute: number;
}
/**
 * @generated from protobuf message statistico.GoalEvent
 */
export interface GoalEvent {
    /**
     * @generated from protobuf field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: uint64 team_id = 2;
     */
    teamId: bigint;
    /**
     * @generated from protobuf field: uint64 player_id = 3;
     */
    playerId: bigint;
    /**
     * @generated from protobuf field: google.protobuf.UInt64Value player_assist_id = 4;
     */
    playerAssistId?: UInt64Value;
    /**
     * @generated from protobuf field: uint32 minute = 5;
     */
    minute: number;
    /**
     * @generated from protobuf field: string score = 6;
     */
    score: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class FixtureEventsResponse$Type extends MessageType<FixtureEventsResponse> {
    constructor() {
        super("statistico.FixtureEventsResponse", [
            { no: 1, name: "fixture_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "cards", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CardEvent },
            { no: 3, name: "goals", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GoalEvent }
        ]);
    }
    create(value?: PartialMessage<FixtureEventsResponse>): FixtureEventsResponse {
        const message = { fixtureId: 0n, cards: [], goals: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FixtureEventsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FixtureEventsResponse): FixtureEventsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 fixture_id */ 1:
                    message.fixtureId = reader.uint64().toBigInt();
                    break;
                case /* repeated statistico.CardEvent cards */ 2:
                    message.cards.push(CardEvent.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated statistico.GoalEvent goals */ 3:
                    message.goals.push(GoalEvent.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: FixtureEventsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 fixture_id = 1; */
        if (message.fixtureId !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.fixtureId);
        /* repeated statistico.CardEvent cards = 2; */
        for (let i = 0; i < message.cards.length; i++)
            CardEvent.internalBinaryWrite(message.cards[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated statistico.GoalEvent goals = 3; */
        for (let i = 0; i < message.goals.length; i++)
            GoalEvent.internalBinaryWrite(message.goals[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.FixtureEventsResponse
 */
export const FixtureEventsResponse = new FixtureEventsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CardEvent$Type extends MessageType<CardEvent> {
    constructor() {
        super("statistico.CardEvent", [
            { no: 1, name: "id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "team_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "player_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "minute", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CardEvent>): CardEvent {
        const message = { id: 0n, teamId: 0n, type: "", playerId: 0n, minute: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CardEvent>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CardEvent): CardEvent {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 id */ 1:
                    message.id = reader.uint64().toBigInt();
                    break;
                case /* uint64 team_id */ 2:
                    message.teamId = reader.uint64().toBigInt();
                    break;
                case /* string type */ 3:
                    message.type = reader.string();
                    break;
                case /* uint64 player_id */ 4:
                    message.playerId = reader.uint64().toBigInt();
                    break;
                case /* uint32 minute */ 5:
                    message.minute = reader.uint32();
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
    internalBinaryWrite(message: CardEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.id);
        /* uint64 team_id = 2; */
        if (message.teamId !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.teamId);
        /* string type = 3; */
        if (message.type !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.type);
        /* uint64 player_id = 4; */
        if (message.playerId !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.playerId);
        /* uint32 minute = 5; */
        if (message.minute !== 0)
            writer.tag(5, WireType.Varint).uint32(message.minute);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.CardEvent
 */
export const CardEvent = new CardEvent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GoalEvent$Type extends MessageType<GoalEvent> {
    constructor() {
        super("statistico.GoalEvent", [
            { no: 1, name: "id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "team_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "player_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "player_assist_id", kind: "message", T: () => UInt64Value },
            { no: 5, name: "minute", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "score", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GoalEvent>): GoalEvent {
        const message = { id: 0n, teamId: 0n, playerId: 0n, minute: 0, score: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GoalEvent>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GoalEvent): GoalEvent {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 id */ 1:
                    message.id = reader.uint64().toBigInt();
                    break;
                case /* uint64 team_id */ 2:
                    message.teamId = reader.uint64().toBigInt();
                    break;
                case /* uint64 player_id */ 3:
                    message.playerId = reader.uint64().toBigInt();
                    break;
                case /* google.protobuf.UInt64Value player_assist_id */ 4:
                    message.playerAssistId = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.playerAssistId);
                    break;
                case /* uint32 minute */ 5:
                    message.minute = reader.uint32();
                    break;
                case /* string score */ 6:
                    message.score = reader.string();
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
    internalBinaryWrite(message: GoalEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.id);
        /* uint64 team_id = 2; */
        if (message.teamId !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.teamId);
        /* uint64 player_id = 3; */
        if (message.playerId !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.playerId);
        /* google.protobuf.UInt64Value player_assist_id = 4; */
        if (message.playerAssistId)
            UInt64Value.internalBinaryWrite(message.playerAssistId, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* uint32 minute = 5; */
        if (message.minute !== 0)
            writer.tag(5, WireType.Varint).uint32(message.minute);
        /* string score = 6; */
        if (message.score !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.score);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.GoalEvent
 */
export const GoalEvent = new GoalEvent$Type();
/**
 * @generated ServiceType for protobuf service statistico.EventService
 */
export const EventService = new ServiceType("statistico.EventService", [
    { name: "FixtureEvents", options: {}, I: FixtureRequest, O: FixtureEventsResponse }
]);
