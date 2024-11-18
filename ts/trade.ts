/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.14.0
 * source: trade.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./enum";
import * as dependency_2 from "./requests";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace statistico {
    export class Trade extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            strategy_id?: string;
            exchange?: string;
            exchange_ref?: string;
            market?: string;
            runner?: string;
            exchange_price?: number;
            statistico_price?: number;
            stake?: number;
            matched?: number;
            event_id?: number;
            competition_id?: number;
            season_id?: number;
            event_date?: number;
            result?: dependency_1.statistico.TradeResultEnum;
            created_at?: number;
            updated_at?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("strategy_id" in data && data.strategy_id != undefined) {
                    this.strategy_id = data.strategy_id;
                }
                if ("exchange" in data && data.exchange != undefined) {
                    this.exchange = data.exchange;
                }
                if ("exchange_ref" in data && data.exchange_ref != undefined) {
                    this.exchange_ref = data.exchange_ref;
                }
                if ("market" in data && data.market != undefined) {
                    this.market = data.market;
                }
                if ("runner" in data && data.runner != undefined) {
                    this.runner = data.runner;
                }
                if ("exchange_price" in data && data.exchange_price != undefined) {
                    this.exchange_price = data.exchange_price;
                }
                if ("statistico_price" in data && data.statistico_price != undefined) {
                    this.statistico_price = data.statistico_price;
                }
                if ("stake" in data && data.stake != undefined) {
                    this.stake = data.stake;
                }
                if ("matched" in data && data.matched != undefined) {
                    this.matched = data.matched;
                }
                if ("event_id" in data && data.event_id != undefined) {
                    this.event_id = data.event_id;
                }
                if ("competition_id" in data && data.competition_id != undefined) {
                    this.competition_id = data.competition_id;
                }
                if ("season_id" in data && data.season_id != undefined) {
                    this.season_id = data.season_id;
                }
                if ("event_date" in data && data.event_date != undefined) {
                    this.event_date = data.event_date;
                }
                if ("result" in data && data.result != undefined) {
                    this.result = data.result;
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
        get strategy_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set strategy_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get exchange() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set exchange(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get exchange_ref() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set exchange_ref(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get market() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set market(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get runner() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set runner(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get exchange_price() {
            return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
        }
        set exchange_price(value: number) {
            pb_1.Message.setField(this, 7, value);
        }
        get statistico_price() {
            return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
        }
        set statistico_price(value: number) {
            pb_1.Message.setField(this, 8, value);
        }
        get stake() {
            return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
        }
        set stake(value: number) {
            pb_1.Message.setField(this, 9, value);
        }
        get matched() {
            return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
        }
        set matched(value: number) {
            pb_1.Message.setField(this, 10, value);
        }
        get event_id() {
            return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
        }
        set event_id(value: number) {
            pb_1.Message.setField(this, 11, value);
        }
        get competition_id() {
            return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
        }
        set competition_id(value: number) {
            pb_1.Message.setField(this, 12, value);
        }
        get season_id() {
            return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
        }
        set season_id(value: number) {
            pb_1.Message.setField(this, 13, value);
        }
        get event_date() {
            return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
        }
        set event_date(value: number) {
            pb_1.Message.setField(this, 14, value);
        }
        get result() {
            return pb_1.Message.getFieldWithDefault(this, 15, dependency_1.statistico.TradeResultEnum.PLACED) as dependency_1.statistico.TradeResultEnum;
        }
        set result(value: dependency_1.statistico.TradeResultEnum) {
            pb_1.Message.setField(this, 15, value);
        }
        get created_at() {
            return pb_1.Message.getFieldWithDefault(this, 16, 0) as number;
        }
        set created_at(value: number) {
            pb_1.Message.setField(this, 16, value);
        }
        get updated_at() {
            return pb_1.Message.getFieldWithDefault(this, 17, 0) as number;
        }
        set updated_at(value: number) {
            pb_1.Message.setField(this, 17, value);
        }
        static fromObject(data: {
            id?: string;
            strategy_id?: string;
            exchange?: string;
            exchange_ref?: string;
            market?: string;
            runner?: string;
            exchange_price?: number;
            statistico_price?: number;
            stake?: number;
            matched?: number;
            event_id?: number;
            competition_id?: number;
            season_id?: number;
            event_date?: number;
            result?: dependency_1.statistico.TradeResultEnum;
            created_at?: number;
            updated_at?: number;
        }): Trade {
            const message = new Trade({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.strategy_id != null) {
                message.strategy_id = data.strategy_id;
            }
            if (data.exchange != null) {
                message.exchange = data.exchange;
            }
            if (data.exchange_ref != null) {
                message.exchange_ref = data.exchange_ref;
            }
            if (data.market != null) {
                message.market = data.market;
            }
            if (data.runner != null) {
                message.runner = data.runner;
            }
            if (data.exchange_price != null) {
                message.exchange_price = data.exchange_price;
            }
            if (data.statistico_price != null) {
                message.statistico_price = data.statistico_price;
            }
            if (data.stake != null) {
                message.stake = data.stake;
            }
            if (data.matched != null) {
                message.matched = data.matched;
            }
            if (data.event_id != null) {
                message.event_id = data.event_id;
            }
            if (data.competition_id != null) {
                message.competition_id = data.competition_id;
            }
            if (data.season_id != null) {
                message.season_id = data.season_id;
            }
            if (data.event_date != null) {
                message.event_date = data.event_date;
            }
            if (data.result != null) {
                message.result = data.result;
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
                strategy_id?: string;
                exchange?: string;
                exchange_ref?: string;
                market?: string;
                runner?: string;
                exchange_price?: number;
                statistico_price?: number;
                stake?: number;
                matched?: number;
                event_id?: number;
                competition_id?: number;
                season_id?: number;
                event_date?: number;
                result?: dependency_1.statistico.TradeResultEnum;
                created_at?: number;
                updated_at?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.strategy_id != null) {
                data.strategy_id = this.strategy_id;
            }
            if (this.exchange != null) {
                data.exchange = this.exchange;
            }
            if (this.exchange_ref != null) {
                data.exchange_ref = this.exchange_ref;
            }
            if (this.market != null) {
                data.market = this.market;
            }
            if (this.runner != null) {
                data.runner = this.runner;
            }
            if (this.exchange_price != null) {
                data.exchange_price = this.exchange_price;
            }
            if (this.statistico_price != null) {
                data.statistico_price = this.statistico_price;
            }
            if (this.stake != null) {
                data.stake = this.stake;
            }
            if (this.matched != null) {
                data.matched = this.matched;
            }
            if (this.event_id != null) {
                data.event_id = this.event_id;
            }
            if (this.competition_id != null) {
                data.competition_id = this.competition_id;
            }
            if (this.season_id != null) {
                data.season_id = this.season_id;
            }
            if (this.event_date != null) {
                data.event_date = this.event_date;
            }
            if (this.result != null) {
                data.result = this.result;
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
            if (this.strategy_id.length)
                writer.writeString(2, this.strategy_id);
            if (this.exchange.length)
                writer.writeString(3, this.exchange);
            if (this.exchange_ref.length)
                writer.writeString(4, this.exchange_ref);
            if (this.market.length)
                writer.writeString(5, this.market);
            if (this.runner.length)
                writer.writeString(6, this.runner);
            if (this.exchange_price != 0)
                writer.writeFloat(7, this.exchange_price);
            if (this.statistico_price != 0)
                writer.writeFloat(8, this.statistico_price);
            if (this.stake != 0)
                writer.writeFloat(9, this.stake);
            if (this.matched != 0)
                writer.writeFloat(10, this.matched);
            if (this.event_id != 0)
                writer.writeUint64(11, this.event_id);
            if (this.competition_id != 0)
                writer.writeUint64(12, this.competition_id);
            if (this.season_id != 0)
                writer.writeUint64(13, this.season_id);
            if (this.event_date != 0)
                writer.writeUint64(14, this.event_date);
            if (this.result != dependency_1.statistico.TradeResultEnum.PLACED)
                writer.writeEnum(15, this.result);
            if (this.created_at != 0)
                writer.writeUint64(16, this.created_at);
            if (this.updated_at != 0)
                writer.writeUint64(17, this.updated_at);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Trade {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Trade();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.strategy_id = reader.readString();
                        break;
                    case 3:
                        message.exchange = reader.readString();
                        break;
                    case 4:
                        message.exchange_ref = reader.readString();
                        break;
                    case 5:
                        message.market = reader.readString();
                        break;
                    case 6:
                        message.runner = reader.readString();
                        break;
                    case 7:
                        message.exchange_price = reader.readFloat();
                        break;
                    case 8:
                        message.statistico_price = reader.readFloat();
                        break;
                    case 9:
                        message.stake = reader.readFloat();
                        break;
                    case 10:
                        message.matched = reader.readFloat();
                        break;
                    case 11:
                        message.event_id = reader.readUint64();
                        break;
                    case 12:
                        message.competition_id = reader.readUint64();
                        break;
                    case 13:
                        message.season_id = reader.readUint64();
                        break;
                    case 14:
                        message.event_date = reader.readUint64();
                        break;
                    case 15:
                        message.result = reader.readEnum();
                        break;
                    case 16:
                        message.created_at = reader.readUint64();
                        break;
                    case 17:
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
        static deserializeBinary(bytes: Uint8Array): Trade {
            return Trade.deserialize(bytes);
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
    export abstract class UnimplementedTradeServiceService {
        static definition = {
            SearchTrades: {
                path: "/statistico.TradeService/SearchTrades",
                requestStream: false,
                responseStream: true,
                requestSerialize: (message: dependency_2.statistico.SearchTradesRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_2.statistico.SearchTradesRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: Trade) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => Trade.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract SearchTrades(call: grpc_1.ServerWritableStream<dependency_2.statistico.SearchTradesRequest, Trade>): void;
    }
    export class TradeServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedTradeServiceService.definition, "TradeService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        SearchTrades: GrpcStreamServiceInterface<dependency_2.statistico.SearchTradesRequest, Trade> = (message: dependency_2.statistico.SearchTradesRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<Trade> => {
            return super.SearchTrades(message, metadata, options);
        };
    }
}
