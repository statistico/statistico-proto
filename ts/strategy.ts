/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.14.0
 * source: strategy.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./enum";
import * as dependency_2 from "./requests";
import * as dependency_3 from "./utility";
import * as dependency_4 from "./google/protobuf/empty";
import * as dependency_5 from "./google/protobuf/wrappers";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace statistico {
    export class Strategy extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            market?: dependency_1.statistico.MarketEnum;
            min_odds?: dependency_5.google.protobuf.FloatValue;
            max_odds?: dependency_5.google.protobuf.FloatValue;
            competition_id?: number;
            season_id?: number;
            model?: string;
            staking_plan?: dependency_3.statistico.StakingPlan;
            status?: dependency_1.statistico.StrategyStatusEnum;
            type?: dependency_1.statistico.StrategyTypeEnum;
            starting_fund?: number;
            created_at?: number;
            updated_at?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("market" in data && data.market != undefined) {
                    this.market = data.market;
                }
                if ("min_odds" in data && data.min_odds != undefined) {
                    this.min_odds = data.min_odds;
                }
                if ("max_odds" in data && data.max_odds != undefined) {
                    this.max_odds = data.max_odds;
                }
                if ("competition_id" in data && data.competition_id != undefined) {
                    this.competition_id = data.competition_id;
                }
                if ("season_id" in data && data.season_id != undefined) {
                    this.season_id = data.season_id;
                }
                if ("model" in data && data.model != undefined) {
                    this.model = data.model;
                }
                if ("staking_plan" in data && data.staking_plan != undefined) {
                    this.staking_plan = data.staking_plan;
                }
                if ("status" in data && data.status != undefined) {
                    this.status = data.status;
                }
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
                if ("starting_fund" in data && data.starting_fund != undefined) {
                    this.starting_fund = data.starting_fund;
                }
                if ("created_at" in data && data.created_at != undefined) {
                    this.created_at = data.created_at;
                }
                if ("updated_at" in data && data.updated_at != undefined) {
                    this.updated_at = data.updated_at;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get market() {
            return pb_1.Message.getFieldWithDefault(this, 2, dependency_1.statistico.MarketEnum.OVER_UNDER_05) as dependency_1.statistico.MarketEnum;
        }
        set market(value: dependency_1.statistico.MarketEnum) {
            pb_1.Message.setField(this, 2, value);
        }
        get min_odds() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.FloatValue, 3) as dependency_5.google.protobuf.FloatValue;
        }
        set min_odds(value: dependency_5.google.protobuf.FloatValue) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_min_odds() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get max_odds() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.FloatValue, 4) as dependency_5.google.protobuf.FloatValue;
        }
        set max_odds(value: dependency_5.google.protobuf.FloatValue) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_max_odds() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get competition_id() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set competition_id(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get season_id() {
            return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
        }
        set season_id(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        get model() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set model(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        get staking_plan() {
            return pb_1.Message.getWrapperField(this, dependency_3.statistico.StakingPlan, 8) as dependency_3.statistico.StakingPlan;
        }
        set staking_plan(value: dependency_3.statistico.StakingPlan) {
            pb_1.Message.setWrapperField(this, 8, value);
        }
        get has_staking_plan() {
            return pb_1.Message.getField(this, 8) != null;
        }
        get status() {
            return pb_1.Message.getFieldWithDefault(this, 9, dependency_1.statistico.StrategyStatusEnum.ACTIVE) as dependency_1.statistico.StrategyStatusEnum;
        }
        set status(value: dependency_1.statistico.StrategyStatusEnum) {
            pb_1.Message.setField(this, 9, value);
        }
        get type() {
            return pb_1.Message.getFieldWithDefault(this, 10, dependency_1.statistico.StrategyTypeEnum.LIVE) as dependency_1.statistico.StrategyTypeEnum;
        }
        set type(value: dependency_1.statistico.StrategyTypeEnum) {
            pb_1.Message.setField(this, 10, value);
        }
        get starting_fund() {
            return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
        }
        set starting_fund(value: number) {
            pb_1.Message.setField(this, 11, value);
        }
        get created_at() {
            return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
        }
        set created_at(value: number) {
            pb_1.Message.setField(this, 12, value);
        }
        get updated_at() {
            return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
        }
        set updated_at(value: number) {
            pb_1.Message.setField(this, 13, value);
        }
        static fromObject(data: {
            id?: string;
            market?: dependency_1.statistico.MarketEnum;
            min_odds?: ReturnType<typeof dependency_5.google.protobuf.FloatValue.prototype.toObject>;
            max_odds?: ReturnType<typeof dependency_5.google.protobuf.FloatValue.prototype.toObject>;
            competition_id?: number;
            season_id?: number;
            model?: string;
            staking_plan?: ReturnType<typeof dependency_3.statistico.StakingPlan.prototype.toObject>;
            status?: dependency_1.statistico.StrategyStatusEnum;
            type?: dependency_1.statistico.StrategyTypeEnum;
            starting_fund?: number;
            created_at?: number;
            updated_at?: number;
        }): Strategy {
            const message = new Strategy({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.market != null) {
                message.market = data.market;
            }
            if (data.min_odds != null) {
                message.min_odds = dependency_5.google.protobuf.FloatValue.fromObject(data.min_odds);
            }
            if (data.max_odds != null) {
                message.max_odds = dependency_5.google.protobuf.FloatValue.fromObject(data.max_odds);
            }
            if (data.competition_id != null) {
                message.competition_id = data.competition_id;
            }
            if (data.season_id != null) {
                message.season_id = data.season_id;
            }
            if (data.model != null) {
                message.model = data.model;
            }
            if (data.staking_plan != null) {
                message.staking_plan = dependency_3.statistico.StakingPlan.fromObject(data.staking_plan);
            }
            if (data.status != null) {
                message.status = data.status;
            }
            if (data.type != null) {
                message.type = data.type;
            }
            if (data.starting_fund != null) {
                message.starting_fund = data.starting_fund;
            }
            if (data.created_at != null) {
                message.created_at = data.created_at;
            }
            if (data.updated_at != null) {
                message.updated_at = data.updated_at;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                market?: dependency_1.statistico.MarketEnum;
                min_odds?: ReturnType<typeof dependency_5.google.protobuf.FloatValue.prototype.toObject>;
                max_odds?: ReturnType<typeof dependency_5.google.protobuf.FloatValue.prototype.toObject>;
                competition_id?: number;
                season_id?: number;
                model?: string;
                staking_plan?: ReturnType<typeof dependency_3.statistico.StakingPlan.prototype.toObject>;
                status?: dependency_1.statistico.StrategyStatusEnum;
                type?: dependency_1.statistico.StrategyTypeEnum;
                starting_fund?: number;
                created_at?: number;
                updated_at?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.market != null) {
                data.market = this.market;
            }
            if (this.min_odds != null) {
                data.min_odds = this.min_odds.toObject();
            }
            if (this.max_odds != null) {
                data.max_odds = this.max_odds.toObject();
            }
            if (this.competition_id != null) {
                data.competition_id = this.competition_id;
            }
            if (this.season_id != null) {
                data.season_id = this.season_id;
            }
            if (this.model != null) {
                data.model = this.model;
            }
            if (this.staking_plan != null) {
                data.staking_plan = this.staking_plan.toObject();
            }
            if (this.status != null) {
                data.status = this.status;
            }
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.starting_fund != null) {
                data.starting_fund = this.starting_fund;
            }
            if (this.created_at != null) {
                data.created_at = this.created_at;
            }
            if (this.updated_at != null) {
                data.updated_at = this.updated_at;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.market != dependency_1.statistico.MarketEnum.OVER_UNDER_05)
                writer.writeEnum(2, this.market);
            if (this.has_min_odds)
                writer.writeMessage(3, this.min_odds, () => this.min_odds.serialize(writer));
            if (this.has_max_odds)
                writer.writeMessage(4, this.max_odds, () => this.max_odds.serialize(writer));
            if (this.competition_id != 0)
                writer.writeUint64(5, this.competition_id);
            if (this.season_id != 0)
                writer.writeUint64(6, this.season_id);
            if (this.model.length)
                writer.writeString(7, this.model);
            if (this.has_staking_plan)
                writer.writeMessage(8, this.staking_plan, () => this.staking_plan.serialize(writer));
            if (this.status != dependency_1.statistico.StrategyStatusEnum.ACTIVE)
                writer.writeEnum(9, this.status);
            if (this.type != dependency_1.statistico.StrategyTypeEnum.LIVE)
                writer.writeEnum(10, this.type);
            if (this.starting_fund != 0)
                writer.writeFloat(11, this.starting_fund);
            if (this.created_at != 0)
                writer.writeUint64(12, this.created_at);
            if (this.updated_at != 0)
                writer.writeUint64(13, this.updated_at);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Strategy {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Strategy();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.market = reader.readEnum();
                        break;
                    case 3:
                        reader.readMessage(message.min_odds, () => message.min_odds = dependency_5.google.protobuf.FloatValue.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.max_odds, () => message.max_odds = dependency_5.google.protobuf.FloatValue.deserialize(reader));
                        break;
                    case 5:
                        message.competition_id = reader.readUint64();
                        break;
                    case 6:
                        message.season_id = reader.readUint64();
                        break;
                    case 7:
                        message.model = reader.readString();
                        break;
                    case 8:
                        reader.readMessage(message.staking_plan, () => message.staking_plan = dependency_3.statistico.StakingPlan.deserialize(reader));
                        break;
                    case 9:
                        message.status = reader.readEnum();
                        break;
                    case 10:
                        message.type = reader.readEnum();
                        break;
                    case 11:
                        message.starting_fund = reader.readFloat();
                        break;
                    case 12:
                        message.created_at = reader.readUint64();
                        break;
                    case 13:
                        message.updated_at = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Strategy {
            return Strategy.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedStrategyServiceService {
        static definition = {
            CreateStrategy: {
                path: "/statistico.StrategyService/CreateStrategy",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_2.statistico.CreateStrategyRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_2.statistico.CreateStrategyRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: Strategy) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => Strategy.deserialize(new Uint8Array(bytes))
            },
            ListStrategies: {
                path: "/statistico.StrategyService/ListStrategies",
                requestStream: false,
                responseStream: true,
                requestSerialize: (message: dependency_2.statistico.ListStrategiesRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_2.statistico.ListStrategiesRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: Strategy) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => Strategy.deserialize(new Uint8Array(bytes))
            },
            UpdateStrategy: {
                path: "/statistico.StrategyService/UpdateStrategy",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_2.statistico.UpdateStrategyRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_2.statistico.UpdateStrategyRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_4.google.protobuf.Empty) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_4.google.protobuf.Empty.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract CreateStrategy(call: grpc_1.ServerUnaryCall<dependency_2.statistico.CreateStrategyRequest, Strategy>, callback: grpc_1.sendUnaryData<Strategy>): void;
        abstract ListStrategies(call: grpc_1.ServerWritableStream<dependency_2.statistico.ListStrategiesRequest, Strategy>): void;
        abstract UpdateStrategy(call: grpc_1.ServerUnaryCall<dependency_2.statistico.UpdateStrategyRequest, dependency_4.google.protobuf.Empty>, callback: grpc_1.sendUnaryData<dependency_4.google.protobuf.Empty>): void;
    }
    export class StrategyServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedStrategyServiceService.definition, "StrategyService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        CreateStrategy: GrpcUnaryServiceInterface<dependency_2.statistico.CreateStrategyRequest, Strategy> = (message: dependency_2.statistico.CreateStrategyRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<Strategy>, options?: grpc_1.CallOptions | grpc_1.requestCallback<Strategy>, callback?: grpc_1.requestCallback<Strategy>): grpc_1.ClientUnaryCall => {
            return super.CreateStrategy(message, metadata, options, callback);
        };
        ListStrategies: GrpcStreamServiceInterface<dependency_2.statistico.ListStrategiesRequest, Strategy> = (message: dependency_2.statistico.ListStrategiesRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<Strategy> => {
            return super.ListStrategies(message, metadata, options);
        };
        UpdateStrategy: GrpcUnaryServiceInterface<dependency_2.statistico.UpdateStrategyRequest, dependency_4.google.protobuf.Empty> = (message: dependency_2.statistico.UpdateStrategyRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_4.google.protobuf.Empty>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_4.google.protobuf.Empty>, callback?: grpc_1.requestCallback<dependency_4.google.protobuf.Empty>): grpc_1.ClientUnaryCall => {
            return super.UpdateStrategy(message, metadata, options, callback);
        };
    }
}
