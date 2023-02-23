// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "strategy.proto" (package "statistico", syntax proto3)
// tslint:disable
import { ListUserStrategiesRequest } from "./requests";
import { CreateStrategyRequest } from "./requests";
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
import { StrategyStatusEnum } from "./enum";
import { StakingPlan } from "./utility";
import { FloatValue } from "./google/protobuf/wrappers";
import { ExchangeEnum } from "./enum";
import { MarketEnum } from "./enum";
/**
 * @generated from protobuf message statistico.Strategy
 */
export interface Strategy {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string user_id = 3;
     */
    userId: string;
    /**
     * @generated from protobuf field: statistico.MarketEnum market = 4;
     */
    market: MarketEnum;
    /**
     * @generated from protobuf field: statistico.ExchangeEnum exchange = 5;
     */
    exchange: ExchangeEnum;
    /**
     * @generated from protobuf field: google.protobuf.FloatValue min_odds = 6;
     */
    minOdds?: FloatValue;
    /**
     * @generated from protobuf field: google.protobuf.FloatValue max_odds = 7;
     */
    maxOdds?: FloatValue;
    /**
     * @generated from protobuf field: repeated uint64 competition_ids = 8;
     */
    competitionIds: bigint[];
    /**
     * @generated from protobuf field: statistico.StakingPlan staking_plan = 9;
     */
    stakingPlan?: StakingPlan;
    /**
     * @generated from protobuf field: statistico.StrategyStatusEnum status = 10;
     */
    status: StrategyStatusEnum;
    /**
     * @generated from protobuf field: float bankroll = 11;
     */
    bankroll: number;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 12;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 13;
     */
    updatedAt?: Timestamp;
}
// @generated message type with reflection information, may provide speed optimized methods
class Strategy$Type extends MessageType<Strategy> {
    constructor() {
        super("statistico.Strategy", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "user_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "market", kind: "enum", T: () => ["statistico.MarketEnum", MarketEnum] },
            { no: 5, name: "exchange", kind: "enum", T: () => ["statistico.ExchangeEnum", ExchangeEnum] },
            { no: 6, name: "min_odds", kind: "message", T: () => FloatValue },
            { no: 7, name: "max_odds", kind: "message", T: () => FloatValue },
            { no: 8, name: "competition_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "staking_plan", kind: "message", T: () => StakingPlan },
            { no: 10, name: "status", kind: "enum", T: () => ["statistico.StrategyStatusEnum", StrategyStatusEnum] },
            { no: 11, name: "bankroll", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 12, name: "created_at", kind: "message", T: () => Timestamp },
            { no: 13, name: "updated_at", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<Strategy>): Strategy {
        const message = { id: "", name: "", userId: "", market: 0, exchange: 0, competitionIds: [], status: 0, bankroll: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Strategy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Strategy): Strategy {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* string user_id */ 3:
                    message.userId = reader.string();
                    break;
                case /* statistico.MarketEnum market */ 4:
                    message.market = reader.int32();
                    break;
                case /* statistico.ExchangeEnum exchange */ 5:
                    message.exchange = reader.int32();
                    break;
                case /* google.protobuf.FloatValue min_odds */ 6:
                    message.minOdds = FloatValue.internalBinaryRead(reader, reader.uint32(), options, message.minOdds);
                    break;
                case /* google.protobuf.FloatValue max_odds */ 7:
                    message.maxOdds = FloatValue.internalBinaryRead(reader, reader.uint32(), options, message.maxOdds);
                    break;
                case /* repeated uint64 competition_ids */ 8:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.competitionIds.push(reader.uint64().toBigInt());
                    else
                        message.competitionIds.push(reader.uint64().toBigInt());
                    break;
                case /* statistico.StakingPlan staking_plan */ 9:
                    message.stakingPlan = StakingPlan.internalBinaryRead(reader, reader.uint32(), options, message.stakingPlan);
                    break;
                case /* statistico.StrategyStatusEnum status */ 10:
                    message.status = reader.int32();
                    break;
                case /* float bankroll */ 11:
                    message.bankroll = reader.float();
                    break;
                case /* google.protobuf.Timestamp created_at */ 12:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* google.protobuf.Timestamp updated_at */ 13:
                    message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
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
    internalBinaryWrite(message: Strategy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* string user_id = 3; */
        if (message.userId !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.userId);
        /* statistico.MarketEnum market = 4; */
        if (message.market !== 0)
            writer.tag(4, WireType.Varint).int32(message.market);
        /* statistico.ExchangeEnum exchange = 5; */
        if (message.exchange !== 0)
            writer.tag(5, WireType.Varint).int32(message.exchange);
        /* google.protobuf.FloatValue min_odds = 6; */
        if (message.minOdds)
            FloatValue.internalBinaryWrite(message.minOdds, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.FloatValue max_odds = 7; */
        if (message.maxOdds)
            FloatValue.internalBinaryWrite(message.maxOdds, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint64 competition_ids = 8; */
        if (message.competitionIds.length) {
            writer.tag(8, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.competitionIds.length; i++)
                writer.uint64(message.competitionIds[i]);
            writer.join();
        }
        /* statistico.StakingPlan staking_plan = 9; */
        if (message.stakingPlan)
            StakingPlan.internalBinaryWrite(message.stakingPlan, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* statistico.StrategyStatusEnum status = 10; */
        if (message.status !== 0)
            writer.tag(10, WireType.Varint).int32(message.status);
        /* float bankroll = 11; */
        if (message.bankroll !== 0)
            writer.tag(11, WireType.Bit32).float(message.bankroll);
        /* google.protobuf.Timestamp created_at = 12; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp updated_at = 13; */
        if (message.updatedAt)
            Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.Strategy
 */
export const Strategy = new Strategy$Type();
/**
 * @generated ServiceType for protobuf service statistico.StrategyService
 */
export const StrategyService = new ServiceType("statistico.StrategyService", [
    { name: "CreateStrategy", options: {}, I: CreateStrategyRequest, O: Strategy },
    { name: "ListUserStrategies", serverStreaming: true, options: {}, I: ListUserStrategiesRequest, O: Strategy }
]);