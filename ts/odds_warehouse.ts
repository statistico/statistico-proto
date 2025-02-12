/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: odds_warehouse.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./common";
import * as dependency_2 from "./requests";
import * as dependency_3 from "./google/protobuf/wrappers";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace statistico {
    export class ExchangeOdds extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            price?: number;
            size?: number;
            side?: string;
            timestamp?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("price" in data && data.price != undefined) {
                    this.price = data.price;
                }
                if ("size" in data && data.size != undefined) {
                    this.size = data.size;
                }
                if ("side" in data && data.side != undefined) {
                    this.side = data.side;
                }
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
            }
        }
        get price() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set price(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get size() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set size(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get side() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set side(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get timestamp() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set timestamp(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            price?: number;
            size?: number;
            side?: string;
            timestamp?: number;
        }): ExchangeOdds {
            const message = new ExchangeOdds({});
            if (data.price != null) {
                message.price = data.price;
            }
            if (data.size != null) {
                message.size = data.size;
            }
            if (data.side != null) {
                message.side = data.side;
            }
            if (data.timestamp != null) {
                message.timestamp = data.timestamp;
            }
            return message;
        }
        toObject() {
            const data: {
                price?: number;
                size?: number;
                side?: string;
                timestamp?: number;
            } = {};
            if (this.price != null) {
                data.price = this.price;
            }
            if (this.size != null) {
                data.size = this.size;
            }
            if (this.side != null) {
                data.side = this.side;
            }
            if (this.timestamp != null) {
                data.timestamp = this.timestamp;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.price != 0)
                writer.writeFloat(1, this.price);
            if (this.size != 0)
                writer.writeFloat(2, this.size);
            if (this.side.length)
                writer.writeString(3, this.side);
            if (this.timestamp != 0)
                writer.writeUint64(4, this.timestamp);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExchangeOdds {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExchangeOdds();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.price = reader.readFloat();
                        break;
                    case 2:
                        message.size = reader.readFloat();
                        break;
                    case 3:
                        message.side = reader.readString();
                        break;
                    case 4:
                        message.timestamp = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ExchangeOdds {
            return ExchangeOdds.deserialize(bytes);
        }
    }
    export class Market extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            name?: string;
            event_id?: number;
            competition_id?: number;
            season_id?: number;
            exchange?: string;
            date_time?: dependency_1.statistico.Date;
            runners?: Runner[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
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
                if ("exchange" in data && data.exchange != undefined) {
                    this.exchange = data.exchange;
                }
                if ("date_time" in data && data.date_time != undefined) {
                    this.date_time = data.date_time;
                }
                if ("runners" in data && data.runners != undefined) {
                    this.runners = data.runners;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get event_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set event_id(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get competition_id() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set competition_id(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get season_id() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set season_id(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get exchange() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set exchange(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get date_time() {
            return pb_1.Message.getWrapperField(this, dependency_1.statistico.Date, 7) as dependency_1.statistico.Date;
        }
        set date_time(value: dependency_1.statistico.Date) {
            pb_1.Message.setWrapperField(this, 7, value);
        }
        get has_date_time() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get runners() {
            return pb_1.Message.getRepeatedWrapperField(this, Runner, 8) as Runner[];
        }
        set runners(value: Runner[]) {
            pb_1.Message.setRepeatedWrapperField(this, 8, value);
        }
        static fromObject(data: {
            id?: string;
            name?: string;
            event_id?: number;
            competition_id?: number;
            season_id?: number;
            exchange?: string;
            date_time?: ReturnType<typeof dependency_1.statistico.Date.prototype.toObject>;
            runners?: ReturnType<typeof Runner.prototype.toObject>[];
        }): Market {
            const message = new Market({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = data.name;
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
            if (data.exchange != null) {
                message.exchange = data.exchange;
            }
            if (data.date_time != null) {
                message.date_time = dependency_1.statistico.Date.fromObject(data.date_time);
            }
            if (data.runners != null) {
                message.runners = data.runners.map(item => Runner.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                name?: string;
                event_id?: number;
                competition_id?: number;
                season_id?: number;
                exchange?: string;
                date_time?: ReturnType<typeof dependency_1.statistico.Date.prototype.toObject>;
                runners?: ReturnType<typeof Runner.prototype.toObject>[];
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name;
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
            if (this.exchange != null) {
                data.exchange = this.exchange;
            }
            if (this.date_time != null) {
                data.date_time = this.date_time.toObject();
            }
            if (this.runners != null) {
                data.runners = this.runners.map((item: Runner) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.name.length)
                writer.writeString(2, this.name);
            if (this.event_id != 0)
                writer.writeUint64(3, this.event_id);
            if (this.competition_id != 0)
                writer.writeUint64(4, this.competition_id);
            if (this.season_id != 0)
                writer.writeUint64(5, this.season_id);
            if (this.exchange.length)
                writer.writeString(6, this.exchange);
            if (this.has_date_time)
                writer.writeMessage(7, this.date_time, () => this.date_time.serialize(writer));
            if (this.runners.length)
                writer.writeRepeatedMessage(8, this.runners, (item: Runner) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Market {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Market();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        message.event_id = reader.readUint64();
                        break;
                    case 4:
                        message.competition_id = reader.readUint64();
                        break;
                    case 5:
                        message.season_id = reader.readUint64();
                        break;
                    case 6:
                        message.exchange = reader.readString();
                        break;
                    case 7:
                        reader.readMessage(message.date_time, () => message.date_time = dependency_1.statistico.Date.deserialize(reader));
                        break;
                    case 8:
                        reader.readMessage(message.runners, () => pb_1.Message.addToRepeatedWrapperField(message, 8, Runner.deserialize(reader), Runner));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Market {
            return Market.deserialize(bytes);
        }
    }
    export class Runner extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
            name?: dependency_3.google.protobuf.StringValue;
            label?: string;
            value?: dependency_3.google.protobuf.FloatValue;
            back_odds?: ExchangeOdds;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("label" in data && data.label != undefined) {
                    this.label = data.label;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
                if ("back_odds" in data && data.back_odds != undefined) {
                    this.back_odds = data.back_odds;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.StringValue, 2) as dependency_3.google.protobuf.StringValue;
        }
        set name(value: dependency_3.google.protobuf.StringValue) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_name() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get label() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set label(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get value() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.FloatValue, 4) as dependency_3.google.protobuf.FloatValue;
        }
        set value(value: dependency_3.google.protobuf.FloatValue) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_value() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get back_odds() {
            return pb_1.Message.getWrapperField(this, ExchangeOdds, 5) as ExchangeOdds;
        }
        set back_odds(value: ExchangeOdds) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_back_odds() {
            return pb_1.Message.getField(this, 5) != null;
        }
        static fromObject(data: {
            id?: number;
            name?: ReturnType<typeof dependency_3.google.protobuf.StringValue.prototype.toObject>;
            label?: string;
            value?: ReturnType<typeof dependency_3.google.protobuf.FloatValue.prototype.toObject>;
            back_odds?: ReturnType<typeof ExchangeOdds.prototype.toObject>;
        }): Runner {
            const message = new Runner({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = dependency_3.google.protobuf.StringValue.fromObject(data.name);
            }
            if (data.label != null) {
                message.label = data.label;
            }
            if (data.value != null) {
                message.value = dependency_3.google.protobuf.FloatValue.fromObject(data.value);
            }
            if (data.back_odds != null) {
                message.back_odds = ExchangeOdds.fromObject(data.back_odds);
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
                name?: ReturnType<typeof dependency_3.google.protobuf.StringValue.prototype.toObject>;
                label?: string;
                value?: ReturnType<typeof dependency_3.google.protobuf.FloatValue.prototype.toObject>;
                back_odds?: ReturnType<typeof ExchangeOdds.prototype.toObject>;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name.toObject();
            }
            if (this.label != null) {
                data.label = this.label;
            }
            if (this.value != null) {
                data.value = this.value.toObject();
            }
            if (this.back_odds != null) {
                data.back_odds = this.back_odds.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeUint64(1, this.id);
            if (this.has_name)
                writer.writeMessage(2, this.name, () => this.name.serialize(writer));
            if (this.label.length)
                writer.writeString(3, this.label);
            if (this.has_value)
                writer.writeMessage(4, this.value, () => this.value.serialize(writer));
            if (this.has_back_odds)
                writer.writeMessage(5, this.back_odds, () => this.back_odds.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Runner {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Runner();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.name, () => message.name = dependency_3.google.protobuf.StringValue.deserialize(reader));
                        break;
                    case 3:
                        message.label = reader.readString();
                        break;
                    case 4:
                        reader.readMessage(message.value, () => message.value = dependency_3.google.protobuf.FloatValue.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.back_odds, () => message.back_odds = ExchangeOdds.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Runner {
            return Runner.deserialize(bytes);
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
    export abstract class UnimplementedOddsWarehouseServiceService {
        static definition = {
            GetExchangeOdds: {
                path: "/statistico.OddsWarehouseService/GetExchangeOdds",
                requestStream: false,
                responseStream: true,
                requestSerialize: (message: dependency_2.statistico.ExchangeOddsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_2.statistico.ExchangeOddsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: ExchangeOdds) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => ExchangeOdds.deserialize(new Uint8Array(bytes))
            },
            GetEventMarkets: {
                path: "/statistico.OddsWarehouseService/GetEventMarkets",
                requestStream: false,
                responseStream: true,
                requestSerialize: (message: dependency_2.statistico.EventMarketRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_2.statistico.EventMarketRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: Market) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => Market.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetExchangeOdds(call: grpc_1.ServerWritableStream<dependency_2.statistico.ExchangeOddsRequest, ExchangeOdds>): void;
        abstract GetEventMarkets(call: grpc_1.ServerWritableStream<dependency_2.statistico.EventMarketRequest, Market>): void;
    }
    export class OddsWarehouseServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedOddsWarehouseServiceService.definition, "OddsWarehouseService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        GetExchangeOdds: GrpcStreamServiceInterface<dependency_2.statistico.ExchangeOddsRequest, ExchangeOdds> = (message: dependency_2.statistico.ExchangeOddsRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<ExchangeOdds> => {
            return super.GetExchangeOdds(message, metadata, options);
        };
        GetEventMarkets: GrpcStreamServiceInterface<dependency_2.statistico.EventMarketRequest, Market> = (message: dependency_2.statistico.EventMarketRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<Market> => {
            return super.GetEventMarkets(message, metadata, options);
        };
    }
}
