// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "team_stats.proto" (package "statistico", syntax proto3)
// tslint:disable
import { TeamStatRequest } from "./requests";
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
import { FloatValue } from "./google/protobuf/wrappers";
import { UInt32Value } from "./google/protobuf/wrappers";
/**
 * @generated from protobuf message statistico.TeamStatsResponse
 */
export interface TeamStatsResponse {
    /**
     * @generated from protobuf field: statistico.TeamStats home_team = 1;
     */
    homeTeam?: TeamStats;
    /**
     * @generated from protobuf field: statistico.TeamStats away_team = 2;
     */
    awayTeam?: TeamStats;
    /**
     * @generated from protobuf field: statistico.TeamXG team_xg = 3;
     */
    teamXg?: TeamXG;
}
/**
 * @generated from protobuf message statistico.TeamStat
 */
export interface TeamStat {
    /**
     * @generated from protobuf field: uint64 fixture_id = 1;
     */
    fixtureId: bigint;
    /**
     * @generated from protobuf field: string stat = 2;
     */
    stat: string;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value value = 3;
     */
    value?: UInt32Value;
}
/**
 * @generated from protobuf message statistico.TeamStats
 */
export interface TeamStats {
    /**
     * @generated from protobuf field: uint64 team_id = 1;
     */
    teamId: bigint;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value shots_total = 2;
     */
    shotsTotal?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value shots_on_goal = 3;
     */
    shotsOnGoal?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value shots_off_goal = 4;
     */
    shotsOffGoal?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value shots_blocked = 5;
     */
    shotsBlocked?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value shots_inside_box = 6;
     */
    shotsInsideBox?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value shots_outside_box = 7;
     */
    shotsOutsideBox?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value passes_total = 8;
     */
    passesTotal?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value passes_accuracy = 9;
     */
    passesAccuracy?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value passes_percentage = 10;
     */
    passesPercentage?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value attacks_total = 11;
     */
    attacksTotal?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value attacks_dangerous = 12;
     */
    attacksDangerous?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value goals = 13;
     */
    goals?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value fouls = 14;
     */
    fouls?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value corners = 15;
     */
    corners?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value offsides = 16;
     */
    offsides?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value possession = 17;
     */
    possession?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value yellow_cards = 18;
     */
    yellowCards?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value red_cards = 19;
     */
    redCards?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value saves = 20;
     */
    saves?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value substitutions = 21;
     */
    substitutions?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value goal_kicks = 22;
     */
    goalKicks?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value goal_attempts = 23;
     */
    goalAttempts?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value free_kicks = 24;
     */
    freeKicks?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value throw_ins = 25;
     */
    throwIns?: UInt32Value;
}
/**
 * @generated from protobuf message statistico.TeamXG
 */
export interface TeamXG {
    /**
     * @generated from protobuf field: google.protobuf.FloatValue home = 1;
     */
    home?: FloatValue;
    /**
     * @generated from protobuf field: google.protobuf.FloatValue away = 2;
     */
    away?: FloatValue;
}
// @generated message type with reflection information, may provide speed optimized methods
class TeamStatsResponse$Type extends MessageType<TeamStatsResponse> {
    constructor() {
        super("statistico.TeamStatsResponse", [
            { no: 1, name: "home_team", kind: "message", T: () => TeamStats },
            { no: 2, name: "away_team", kind: "message", T: () => TeamStats },
            { no: 3, name: "team_xg", kind: "message", T: () => TeamXG }
        ]);
    }
    create(value?: PartialMessage<TeamStatsResponse>): TeamStatsResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TeamStatsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TeamStatsResponse): TeamStatsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* statistico.TeamStats home_team */ 1:
                    message.homeTeam = TeamStats.internalBinaryRead(reader, reader.uint32(), options, message.homeTeam);
                    break;
                case /* statistico.TeamStats away_team */ 2:
                    message.awayTeam = TeamStats.internalBinaryRead(reader, reader.uint32(), options, message.awayTeam);
                    break;
                case /* statistico.TeamXG team_xg */ 3:
                    message.teamXg = TeamXG.internalBinaryRead(reader, reader.uint32(), options, message.teamXg);
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
    internalBinaryWrite(message: TeamStatsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* statistico.TeamStats home_team = 1; */
        if (message.homeTeam)
            TeamStats.internalBinaryWrite(message.homeTeam, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* statistico.TeamStats away_team = 2; */
        if (message.awayTeam)
            TeamStats.internalBinaryWrite(message.awayTeam, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* statistico.TeamXG team_xg = 3; */
        if (message.teamXg)
            TeamXG.internalBinaryWrite(message.teamXg, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.TeamStatsResponse
 */
export const TeamStatsResponse = new TeamStatsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TeamStat$Type extends MessageType<TeamStat> {
    constructor() {
        super("statistico.TeamStat", [
            { no: 1, name: "fixture_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "stat", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "value", kind: "message", T: () => UInt32Value }
        ]);
    }
    create(value?: PartialMessage<TeamStat>): TeamStat {
        const message = { fixtureId: 0n, stat: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TeamStat>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TeamStat): TeamStat {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 fixture_id */ 1:
                    message.fixtureId = reader.uint64().toBigInt();
                    break;
                case /* string stat */ 2:
                    message.stat = reader.string();
                    break;
                case /* google.protobuf.UInt32Value value */ 3:
                    message.value = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.value);
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
    internalBinaryWrite(message: TeamStat, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 fixture_id = 1; */
        if (message.fixtureId !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.fixtureId);
        /* string stat = 2; */
        if (message.stat !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.stat);
        /* google.protobuf.UInt32Value value = 3; */
        if (message.value)
            UInt32Value.internalBinaryWrite(message.value, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.TeamStat
 */
export const TeamStat = new TeamStat$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TeamStats$Type extends MessageType<TeamStats> {
    constructor() {
        super("statistico.TeamStats", [
            { no: 1, name: "team_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "shots_total", kind: "message", T: () => UInt32Value },
            { no: 3, name: "shots_on_goal", kind: "message", T: () => UInt32Value },
            { no: 4, name: "shots_off_goal", kind: "message", T: () => UInt32Value },
            { no: 5, name: "shots_blocked", kind: "message", T: () => UInt32Value },
            { no: 6, name: "shots_inside_box", kind: "message", T: () => UInt32Value },
            { no: 7, name: "shots_outside_box", kind: "message", T: () => UInt32Value },
            { no: 8, name: "passes_total", kind: "message", T: () => UInt32Value },
            { no: 9, name: "passes_accuracy", kind: "message", T: () => UInt32Value },
            { no: 10, name: "passes_percentage", kind: "message", T: () => UInt32Value },
            { no: 11, name: "attacks_total", kind: "message", T: () => UInt32Value },
            { no: 12, name: "attacks_dangerous", kind: "message", T: () => UInt32Value },
            { no: 13, name: "goals", kind: "message", T: () => UInt32Value },
            { no: 14, name: "fouls", kind: "message", T: () => UInt32Value },
            { no: 15, name: "corners", kind: "message", T: () => UInt32Value },
            { no: 16, name: "offsides", kind: "message", T: () => UInt32Value },
            { no: 17, name: "possession", kind: "message", T: () => UInt32Value },
            { no: 18, name: "yellow_cards", kind: "message", T: () => UInt32Value },
            { no: 19, name: "red_cards", kind: "message", T: () => UInt32Value },
            { no: 20, name: "saves", kind: "message", T: () => UInt32Value },
            { no: 21, name: "substitutions", kind: "message", T: () => UInt32Value },
            { no: 22, name: "goal_kicks", kind: "message", T: () => UInt32Value },
            { no: 23, name: "goal_attempts", kind: "message", T: () => UInt32Value },
            { no: 24, name: "free_kicks", kind: "message", T: () => UInt32Value },
            { no: 25, name: "throw_ins", kind: "message", T: () => UInt32Value }
        ]);
    }
    create(value?: PartialMessage<TeamStats>): TeamStats {
        const message = { teamId: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TeamStats>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TeamStats): TeamStats {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 team_id */ 1:
                    message.teamId = reader.uint64().toBigInt();
                    break;
                case /* google.protobuf.UInt32Value shots_total */ 2:
                    message.shotsTotal = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.shotsTotal);
                    break;
                case /* google.protobuf.UInt32Value shots_on_goal */ 3:
                    message.shotsOnGoal = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.shotsOnGoal);
                    break;
                case /* google.protobuf.UInt32Value shots_off_goal */ 4:
                    message.shotsOffGoal = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.shotsOffGoal);
                    break;
                case /* google.protobuf.UInt32Value shots_blocked */ 5:
                    message.shotsBlocked = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.shotsBlocked);
                    break;
                case /* google.protobuf.UInt32Value shots_inside_box */ 6:
                    message.shotsInsideBox = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.shotsInsideBox);
                    break;
                case /* google.protobuf.UInt32Value shots_outside_box */ 7:
                    message.shotsOutsideBox = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.shotsOutsideBox);
                    break;
                case /* google.protobuf.UInt32Value passes_total */ 8:
                    message.passesTotal = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.passesTotal);
                    break;
                case /* google.protobuf.UInt32Value passes_accuracy */ 9:
                    message.passesAccuracy = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.passesAccuracy);
                    break;
                case /* google.protobuf.UInt32Value passes_percentage */ 10:
                    message.passesPercentage = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.passesPercentage);
                    break;
                case /* google.protobuf.UInt32Value attacks_total */ 11:
                    message.attacksTotal = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.attacksTotal);
                    break;
                case /* google.protobuf.UInt32Value attacks_dangerous */ 12:
                    message.attacksDangerous = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.attacksDangerous);
                    break;
                case /* google.protobuf.UInt32Value goals */ 13:
                    message.goals = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.goals);
                    break;
                case /* google.protobuf.UInt32Value fouls */ 14:
                    message.fouls = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.fouls);
                    break;
                case /* google.protobuf.UInt32Value corners */ 15:
                    message.corners = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.corners);
                    break;
                case /* google.protobuf.UInt32Value offsides */ 16:
                    message.offsides = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.offsides);
                    break;
                case /* google.protobuf.UInt32Value possession */ 17:
                    message.possession = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.possession);
                    break;
                case /* google.protobuf.UInt32Value yellow_cards */ 18:
                    message.yellowCards = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.yellowCards);
                    break;
                case /* google.protobuf.UInt32Value red_cards */ 19:
                    message.redCards = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.redCards);
                    break;
                case /* google.protobuf.UInt32Value saves */ 20:
                    message.saves = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.saves);
                    break;
                case /* google.protobuf.UInt32Value substitutions */ 21:
                    message.substitutions = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.substitutions);
                    break;
                case /* google.protobuf.UInt32Value goal_kicks */ 22:
                    message.goalKicks = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.goalKicks);
                    break;
                case /* google.protobuf.UInt32Value goal_attempts */ 23:
                    message.goalAttempts = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.goalAttempts);
                    break;
                case /* google.protobuf.UInt32Value free_kicks */ 24:
                    message.freeKicks = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.freeKicks);
                    break;
                case /* google.protobuf.UInt32Value throw_ins */ 25:
                    message.throwIns = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.throwIns);
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
    internalBinaryWrite(message: TeamStats, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 team_id = 1; */
        if (message.teamId !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.teamId);
        /* google.protobuf.UInt32Value shots_total = 2; */
        if (message.shotsTotal)
            UInt32Value.internalBinaryWrite(message.shotsTotal, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value shots_on_goal = 3; */
        if (message.shotsOnGoal)
            UInt32Value.internalBinaryWrite(message.shotsOnGoal, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value shots_off_goal = 4; */
        if (message.shotsOffGoal)
            UInt32Value.internalBinaryWrite(message.shotsOffGoal, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value shots_blocked = 5; */
        if (message.shotsBlocked)
            UInt32Value.internalBinaryWrite(message.shotsBlocked, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value shots_inside_box = 6; */
        if (message.shotsInsideBox)
            UInt32Value.internalBinaryWrite(message.shotsInsideBox, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value shots_outside_box = 7; */
        if (message.shotsOutsideBox)
            UInt32Value.internalBinaryWrite(message.shotsOutsideBox, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value passes_total = 8; */
        if (message.passesTotal)
            UInt32Value.internalBinaryWrite(message.passesTotal, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value passes_accuracy = 9; */
        if (message.passesAccuracy)
            UInt32Value.internalBinaryWrite(message.passesAccuracy, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value passes_percentage = 10; */
        if (message.passesPercentage)
            UInt32Value.internalBinaryWrite(message.passesPercentage, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value attacks_total = 11; */
        if (message.attacksTotal)
            UInt32Value.internalBinaryWrite(message.attacksTotal, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value attacks_dangerous = 12; */
        if (message.attacksDangerous)
            UInt32Value.internalBinaryWrite(message.attacksDangerous, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value goals = 13; */
        if (message.goals)
            UInt32Value.internalBinaryWrite(message.goals, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value fouls = 14; */
        if (message.fouls)
            UInt32Value.internalBinaryWrite(message.fouls, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value corners = 15; */
        if (message.corners)
            UInt32Value.internalBinaryWrite(message.corners, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value offsides = 16; */
        if (message.offsides)
            UInt32Value.internalBinaryWrite(message.offsides, writer.tag(16, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value possession = 17; */
        if (message.possession)
            UInt32Value.internalBinaryWrite(message.possession, writer.tag(17, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value yellow_cards = 18; */
        if (message.yellowCards)
            UInt32Value.internalBinaryWrite(message.yellowCards, writer.tag(18, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value red_cards = 19; */
        if (message.redCards)
            UInt32Value.internalBinaryWrite(message.redCards, writer.tag(19, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value saves = 20; */
        if (message.saves)
            UInt32Value.internalBinaryWrite(message.saves, writer.tag(20, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value substitutions = 21; */
        if (message.substitutions)
            UInt32Value.internalBinaryWrite(message.substitutions, writer.tag(21, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value goal_kicks = 22; */
        if (message.goalKicks)
            UInt32Value.internalBinaryWrite(message.goalKicks, writer.tag(22, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value goal_attempts = 23; */
        if (message.goalAttempts)
            UInt32Value.internalBinaryWrite(message.goalAttempts, writer.tag(23, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value free_kicks = 24; */
        if (message.freeKicks)
            UInt32Value.internalBinaryWrite(message.freeKicks, writer.tag(24, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value throw_ins = 25; */
        if (message.throwIns)
            UInt32Value.internalBinaryWrite(message.throwIns, writer.tag(25, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.TeamStats
 */
export const TeamStats = new TeamStats$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TeamXG$Type extends MessageType<TeamXG> {
    constructor() {
        super("statistico.TeamXG", [
            { no: 1, name: "home", kind: "message", T: () => FloatValue },
            { no: 2, name: "away", kind: "message", T: () => FloatValue }
        ]);
    }
    create(value?: PartialMessage<TeamXG>): TeamXG {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TeamXG>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TeamXG): TeamXG {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.FloatValue home */ 1:
                    message.home = FloatValue.internalBinaryRead(reader, reader.uint32(), options, message.home);
                    break;
                case /* google.protobuf.FloatValue away */ 2:
                    message.away = FloatValue.internalBinaryRead(reader, reader.uint32(), options, message.away);
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
    internalBinaryWrite(message: TeamXG, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.FloatValue home = 1; */
        if (message.home)
            FloatValue.internalBinaryWrite(message.home, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.FloatValue away = 2; */
        if (message.away)
            FloatValue.internalBinaryWrite(message.away, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.TeamXG
 */
export const TeamXG = new TeamXG$Type();
/**
 * @generated ServiceType for protobuf service statistico.TeamStatsService
 */
export const TeamStatsService = new ServiceType("statistico.TeamStatsService", [
    { name: "GetTeamStatsForFixture", options: {}, I: FixtureRequest, O: TeamStatsResponse },
    { name: "GetStatForTeam", serverStreaming: true, options: {}, I: TeamStatRequest, O: TeamStat }
]);
