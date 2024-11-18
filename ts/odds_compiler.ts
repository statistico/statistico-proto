/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: odds_compiler.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./common";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace statistico {
    export class EventRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            event_id?: number;
            market?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("event_id" in data && data.event_id != undefined) {
                    this.event_id = data.event_id;
                }
                if ("market" in data && data.market != undefined) {
                    this.market = data.market;
                }
            }
        }
        get event_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set event_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get market() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set market(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            event_id?: number;
            market?: string;
        }): EventRequest {
            const message = new EventRequest({});
            if (data.event_id != null) {
                message.event_id = data.event_id;
            }
            if (data.market != null) {
                message.market = data.market;
            }
            return message;
        }
        toObject() {
            const data: {
                event_id?: number;
                market?: string;
            } = {};
            if (this.event_id != null) {
                data.event_id = this.event_id;
            }
            if (this.market != null) {
                data.market = this.market;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.event_id != 0)
                writer.writeUint64(1, this.event_id);
            if (this.market.length)
                writer.writeString(2, this.market);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.event_id = reader.readUint64();
                        break;
                    case 2:
                        message.market = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventRequest {
            return EventRequest.deserialize(bytes);
        }
    }
    export class EventMarket extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            event_id?: number;
            market?: string;
            odds?: dependency_1.statistico.Odds[];
            model?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("event_id" in data && data.event_id != undefined) {
                    this.event_id = data.event_id;
                }
                if ("market" in data && data.market != undefined) {
                    this.market = data.market;
                }
                if ("odds" in data && data.odds != undefined) {
                    this.odds = data.odds;
                }
                if ("model" in data && data.model != undefined) {
                    this.model = data.model;
                }
            }
        }
        get event_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set event_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get market() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set market(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get odds() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.statistico.Odds, 3) as dependency_1.statistico.Odds[];
        }
        set odds(value: dependency_1.statistico.Odds[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get model() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set model(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            event_id?: number;
            market?: string;
            odds?: ReturnType<typeof dependency_1.statistico.Odds.prototype.toObject>[];
            model?: string;
        }): EventMarket {
            const message = new EventMarket({});
            if (data.event_id != null) {
                message.event_id = data.event_id;
            }
            if (data.market != null) {
                message.market = data.market;
            }
            if (data.odds != null) {
                message.odds = data.odds.map(item => dependency_1.statistico.Odds.fromObject(item));
            }
            if (data.model != null) {
                message.model = data.model;
            }
            return message;
        }
        toObject() {
            const data: {
                event_id?: number;
                market?: string;
                odds?: ReturnType<typeof dependency_1.statistico.Odds.prototype.toObject>[];
                model?: string;
            } = {};
            if (this.event_id != null) {
                data.event_id = this.event_id;
            }
            if (this.market != null) {
                data.market = this.market;
            }
            if (this.odds != null) {
                data.odds = this.odds.map((item: dependency_1.statistico.Odds) => item.toObject());
            }
            if (this.model != null) {
                data.model = this.model;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.event_id != 0)
                writer.writeUint64(1, this.event_id);
            if (this.market.length)
                writer.writeString(2, this.market);
            if (this.odds.length)
                writer.writeRepeatedMessage(3, this.odds, (item: dependency_1.statistico.Odds) => item.serialize(writer));
            if (this.model.length)
                writer.writeString(4, this.model);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventMarket {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventMarket();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.event_id = reader.readUint64();
                        break;
                    case 2:
                        message.market = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.odds, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.statistico.Odds.deserialize(reader), dependency_1.statistico.Odds));
                        break;
                    case 4:
                        message.model = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventMarket {
            return EventMarket.deserialize(bytes);
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
    export abstract class UnimplementedOddsCompilerServiceService {
        static definition = {
            GetEventMarket: {
                path: "/statistico.OddsCompilerService/GetEventMarket",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: EventRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => EventRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: EventMarket) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => EventMarket.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetEventMarket(call: grpc_1.ServerUnaryCall<EventRequest, EventMarket>, callback: grpc_1.sendUnaryData<EventMarket>): void;
    }
    export class OddsCompilerServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedOddsCompilerServiceService.definition, "OddsCompilerService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        GetEventMarket: GrpcUnaryServiceInterface<EventRequest, EventMarket> = (message: EventRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<EventMarket>, options?: grpc_1.CallOptions | grpc_1.requestCallback<EventMarket>, callback?: grpc_1.requestCallback<EventMarket>): grpc_1.ClientUnaryCall => {
            return super.GetEventMarket(message, metadata, options, callback);
        };
    }
}
