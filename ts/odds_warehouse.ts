// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "odds_warehouse.proto" (package "statistico", syntax proto3)
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
import { Timestamp } from "./google/protobuf/timestamp";
import { SideEnum } from "./enum";
import { FloatValue } from "./google/protobuf/wrappers";
/**
 * @generated from protobuf message statistico.MarketRunnerRequest
 */
export interface MarketRunnerRequest {
    /**
     * @generated from protobuf field: string market = 1;
     */
    market: string;
    /**
     * @generated from protobuf field: string runner = 2;
     */
    runner: string;
    /**
     * @generated from protobuf field: google.protobuf.FloatValue min_odds = 3;
     */
    minOdds?: FloatValue;
    /**
     * @generated from protobuf field: google.protobuf.FloatValue max_odds = 4;
     */
    maxOdds?: FloatValue;
    /**
     * @generated from protobuf field: string line = 5;
     */
    line: string;
    /**
     * @generated from protobuf field: statistico.SideEnum side = 6;
     */
    side: SideEnum;
    /**
     * @generated from protobuf field: repeated uint64 competition_ids = 7;
     */
    competitionIds: bigint[];
    /**
     * @generated from protobuf field: repeated uint64 season_ids = 8;
     */
    seasonIds: bigint[];
    /**
     * @generated from protobuf field: google.protobuf.Timestamp dateFrom = 9;
     */
    dateFrom?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp dateTo = 10;
     */
    dateTo?: Timestamp;
}
/**
 * @generated from protobuf message statistico.MarketRunner
 */
export interface MarketRunner {
    /**
     * @generated from protobuf field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from protobuf field: string market_name = 2;
     */
    marketName: string;
    /**
     * @generated from protobuf field: uint64 runner_id = 3;
     */
    runnerId: bigint;
    /**
     * @generated from protobuf field: string runner_name = 4;
     */
    runnerName: string;
    /**
     * @generated from protobuf field: uint64 event_id = 5;
     */
    eventId: bigint;
    /**
     * @generated from protobuf field: uint64 competition_id = 6;
     */
    competitionId: bigint;
    /**
     * @generated from protobuf field: uint64 season_id = 7;
     */
    seasonId: bigint;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp event_date = 8;
     */
    eventDate?: Timestamp;
    /**
     * @generated from protobuf field: string exchange = 9;
     */
    exchange: string;
    /**
     * @generated from protobuf field: statistico.Price price = 10;
     */
    price?: Price;
}
/**
 * @generated from protobuf message statistico.Price
 */
export interface Price {
    /**
     * @generated from protobuf field: float value = 1;
     */
    value: number;
    /**
     * @generated from protobuf field: float size = 2;
     */
    size: number;
    /**
     * @generated from protobuf field: statistico.SideEnum side = 3;
     */
    side: SideEnum;
    /**
     * @generated from protobuf field: int64 timestamp = 4;
     */
    timestamp: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class MarketRunnerRequest$Type extends MessageType<MarketRunnerRequest> {
    constructor() {
        super("statistico.MarketRunnerRequest", [
            { no: 1, name: "market", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "runner", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "min_odds", kind: "message", T: () => FloatValue },
            { no: 4, name: "max_odds", kind: "message", T: () => FloatValue },
            { no: 5, name: "line", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "side", kind: "enum", T: () => ["statistico.SideEnum", SideEnum] },
            { no: 7, name: "competition_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "season_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "dateFrom", kind: "message", T: () => Timestamp },
            { no: 10, name: "dateTo", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<MarketRunnerRequest>): MarketRunnerRequest {
        const message = { market: "", runner: "", line: "", side: 0, competitionIds: [], seasonIds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MarketRunnerRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MarketRunnerRequest): MarketRunnerRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string market */ 1:
                    message.market = reader.string();
                    break;
                case /* string runner */ 2:
                    message.runner = reader.string();
                    break;
                case /* google.protobuf.FloatValue min_odds */ 3:
                    message.minOdds = FloatValue.internalBinaryRead(reader, reader.uint32(), options, message.minOdds);
                    break;
                case /* google.protobuf.FloatValue max_odds */ 4:
                    message.maxOdds = FloatValue.internalBinaryRead(reader, reader.uint32(), options, message.maxOdds);
                    break;
                case /* string line */ 5:
                    message.line = reader.string();
                    break;
                case /* statistico.SideEnum side */ 6:
                    message.side = reader.int32();
                    break;
                case /* repeated uint64 competition_ids */ 7:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.competitionIds.push(reader.uint64().toBigInt());
                    else
                        message.competitionIds.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint64 season_ids */ 8:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.seasonIds.push(reader.uint64().toBigInt());
                    else
                        message.seasonIds.push(reader.uint64().toBigInt());
                    break;
                case /* google.protobuf.Timestamp dateFrom */ 9:
                    message.dateFrom = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.dateFrom);
                    break;
                case /* google.protobuf.Timestamp dateTo */ 10:
                    message.dateTo = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.dateTo);
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
    internalBinaryWrite(message: MarketRunnerRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string market = 1; */
        if (message.market !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.market);
        /* string runner = 2; */
        if (message.runner !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.runner);
        /* google.protobuf.FloatValue min_odds = 3; */
        if (message.minOdds)
            FloatValue.internalBinaryWrite(message.minOdds, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.FloatValue max_odds = 4; */
        if (message.maxOdds)
            FloatValue.internalBinaryWrite(message.maxOdds, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* string line = 5; */
        if (message.line !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.line);
        /* statistico.SideEnum side = 6; */
        if (message.side !== 0)
            writer.tag(6, WireType.Varint).int32(message.side);
        /* repeated uint64 competition_ids = 7; */
        if (message.competitionIds.length) {
            writer.tag(7, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.competitionIds.length; i++)
                writer.uint64(message.competitionIds[i]);
            writer.join();
        }
        /* repeated uint64 season_ids = 8; */
        if (message.seasonIds.length) {
            writer.tag(8, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.seasonIds.length; i++)
                writer.uint64(message.seasonIds[i]);
            writer.join();
        }
        /* google.protobuf.Timestamp dateFrom = 9; */
        if (message.dateFrom)
            Timestamp.internalBinaryWrite(message.dateFrom, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp dateTo = 10; */
        if (message.dateTo)
            Timestamp.internalBinaryWrite(message.dateTo, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.MarketRunnerRequest
 */
export const MarketRunnerRequest = new MarketRunnerRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MarketRunner$Type extends MessageType<MarketRunner> {
    constructor() {
        super("statistico.MarketRunner", [
            { no: 1, name: "market_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "market_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "runner_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "runner_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "event_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "competition_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "season_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "event_date", kind: "message", T: () => Timestamp },
            { no: 9, name: "exchange", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "price", kind: "message", T: () => Price }
        ]);
    }
    create(value?: PartialMessage<MarketRunner>): MarketRunner {
        const message = { marketId: "", marketName: "", runnerId: 0n, runnerName: "", eventId: 0n, competitionId: 0n, seasonId: 0n, exchange: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MarketRunner>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MarketRunner): MarketRunner {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string market_id */ 1:
                    message.marketId = reader.string();
                    break;
                case /* string market_name */ 2:
                    message.marketName = reader.string();
                    break;
                case /* uint64 runner_id */ 3:
                    message.runnerId = reader.uint64().toBigInt();
                    break;
                case /* string runner_name */ 4:
                    message.runnerName = reader.string();
                    break;
                case /* uint64 event_id */ 5:
                    message.eventId = reader.uint64().toBigInt();
                    break;
                case /* uint64 competition_id */ 6:
                    message.competitionId = reader.uint64().toBigInt();
                    break;
                case /* uint64 season_id */ 7:
                    message.seasonId = reader.uint64().toBigInt();
                    break;
                case /* google.protobuf.Timestamp event_date */ 8:
                    message.eventDate = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.eventDate);
                    break;
                case /* string exchange */ 9:
                    message.exchange = reader.string();
                    break;
                case /* statistico.Price price */ 10:
                    message.price = Price.internalBinaryRead(reader, reader.uint32(), options, message.price);
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
    internalBinaryWrite(message: MarketRunner, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string market_id = 1; */
        if (message.marketId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.marketId);
        /* string market_name = 2; */
        if (message.marketName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.marketName);
        /* uint64 runner_id = 3; */
        if (message.runnerId !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.runnerId);
        /* string runner_name = 4; */
        if (message.runnerName !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.runnerName);
        /* uint64 event_id = 5; */
        if (message.eventId !== 0n)
            writer.tag(5, WireType.Varint).uint64(message.eventId);
        /* uint64 competition_id = 6; */
        if (message.competitionId !== 0n)
            writer.tag(6, WireType.Varint).uint64(message.competitionId);
        /* uint64 season_id = 7; */
        if (message.seasonId !== 0n)
            writer.tag(7, WireType.Varint).uint64(message.seasonId);
        /* google.protobuf.Timestamp event_date = 8; */
        if (message.eventDate)
            Timestamp.internalBinaryWrite(message.eventDate, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* string exchange = 9; */
        if (message.exchange !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.exchange);
        /* statistico.Price price = 10; */
        if (message.price)
            Price.internalBinaryWrite(message.price, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.MarketRunner
 */
export const MarketRunner = new MarketRunner$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Price$Type extends MessageType<Price> {
    constructor() {
        super("statistico.Price", [
            { no: 1, name: "value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "size", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "side", kind: "enum", T: () => ["statistico.SideEnum", SideEnum] },
            { no: 4, name: "timestamp", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<Price>): Price {
        const message = { value: 0, size: 0, side: 0, timestamp: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Price>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Price): Price {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* float value */ 1:
                    message.value = reader.float();
                    break;
                case /* float size */ 2:
                    message.size = reader.float();
                    break;
                case /* statistico.SideEnum side */ 3:
                    message.side = reader.int32();
                    break;
                case /* int64 timestamp */ 4:
                    message.timestamp = reader.int64().toBigInt();
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
    internalBinaryWrite(message: Price, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* float value = 1; */
        if (message.value !== 0)
            writer.tag(1, WireType.Bit32).float(message.value);
        /* float size = 2; */
        if (message.size !== 0)
            writer.tag(2, WireType.Bit32).float(message.size);
        /* statistico.SideEnum side = 3; */
        if (message.side !== 0)
            writer.tag(3, WireType.Varint).int32(message.side);
        /* int64 timestamp = 4; */
        if (message.timestamp !== 0n)
            writer.tag(4, WireType.Varint).int64(message.timestamp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.Price
 */
export const Price = new Price$Type();
/**
 * @generated ServiceType for protobuf service statistico.OddsWarehouseService
 */
export const OddsWarehouseService = new ServiceType("statistico.OddsWarehouseService", [
    { name: "MarketRunnerSearch", serverStreaming: true, options: {}, I: MarketRunnerRequest, O: MarketRunner }
]);