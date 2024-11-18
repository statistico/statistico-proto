/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.14.0
 * source: event.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./google/protobuf/wrappers";
import * as dependency_2 from "./requests";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace statistico {
    export class FixtureEventsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            fixture_id?: number;
            cards?: CardEvent[];
            goals?: GoalEvent[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("fixture_id" in data && data.fixture_id != undefined) {
                    this.fixture_id = data.fixture_id;
                }
                if ("cards" in data && data.cards != undefined) {
                    this.cards = data.cards;
                }
                if ("goals" in data && data.goals != undefined) {
                    this.goals = data.goals;
                }
            }
        }
        get fixture_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set fixture_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get cards() {
            return pb_1.Message.getRepeatedWrapperField(this, CardEvent, 2) as CardEvent[];
        }
        set cards(value: CardEvent[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get goals() {
            return pb_1.Message.getRepeatedWrapperField(this, GoalEvent, 3) as GoalEvent[];
        }
        set goals(value: GoalEvent[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            fixture_id?: number;
            cards?: ReturnType<typeof CardEvent.prototype.toObject>[];
            goals?: ReturnType<typeof GoalEvent.prototype.toObject>[];
        }): FixtureEventsResponse {
            const message = new FixtureEventsResponse({});
            if (data.fixture_id != null) {
                message.fixture_id = data.fixture_id;
            }
            if (data.cards != null) {
                message.cards = data.cards.map(item => CardEvent.fromObject(item));
            }
            if (data.goals != null) {
                message.goals = data.goals.map(item => GoalEvent.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                fixture_id?: number;
                cards?: ReturnType<typeof CardEvent.prototype.toObject>[];
                goals?: ReturnType<typeof GoalEvent.prototype.toObject>[];
            } = {};
            if (this.fixture_id != null) {
                data.fixture_id = this.fixture_id;
            }
            if (this.cards != null) {
                data.cards = this.cards.map((item: CardEvent) => item.toObject());
            }
            if (this.goals != null) {
                data.goals = this.goals.map((item: GoalEvent) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.fixture_id != 0)
                writer.writeUint64(1, this.fixture_id);
            if (this.cards.length)
                writer.writeRepeatedMessage(2, this.cards, (item: CardEvent) => item.serialize(writer));
            if (this.goals.length)
                writer.writeRepeatedMessage(3, this.goals, (item: GoalEvent) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FixtureEventsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FixtureEventsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.fixture_id = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.cards, () => pb_1.Message.addToRepeatedWrapperField(message, 2, CardEvent.deserialize(reader), CardEvent));
                        break;
                    case 3:
                        reader.readMessage(message.goals, () => pb_1.Message.addToRepeatedWrapperField(message, 3, GoalEvent.deserialize(reader), GoalEvent));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): FixtureEventsResponse {
            return FixtureEventsResponse.deserialize(bytes);
        }
    }
    export class CardEvent extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
            team_id?: number;
            type?: string;
            player_id?: number;
            minute?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("team_id" in data && data.team_id != undefined) {
                    this.team_id = data.team_id;
                }
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
                if ("player_id" in data && data.player_id != undefined) {
                    this.player_id = data.player_id;
                }
                if ("minute" in data && data.minute != undefined) {
                    this.minute = data.minute;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get team_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set team_id(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get type() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set type(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get player_id() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set player_id(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get minute() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set minute(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            id?: number;
            team_id?: number;
            type?: string;
            player_id?: number;
            minute?: number;
        }): CardEvent {
            const message = new CardEvent({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.team_id != null) {
                message.team_id = data.team_id;
            }
            if (data.type != null) {
                message.type = data.type;
            }
            if (data.player_id != null) {
                message.player_id = data.player_id;
            }
            if (data.minute != null) {
                message.minute = data.minute;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
                team_id?: number;
                type?: string;
                player_id?: number;
                minute?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.team_id != null) {
                data.team_id = this.team_id;
            }
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.player_id != null) {
                data.player_id = this.player_id;
            }
            if (this.minute != null) {
                data.minute = this.minute;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeUint64(1, this.id);
            if (this.team_id != 0)
                writer.writeUint64(2, this.team_id);
            if (this.type.length)
                writer.writeString(3, this.type);
            if (this.player_id != 0)
                writer.writeUint64(4, this.player_id);
            if (this.minute != 0)
                writer.writeUint32(5, this.minute);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CardEvent {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CardEvent();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readUint64();
                        break;
                    case 2:
                        message.team_id = reader.readUint64();
                        break;
                    case 3:
                        message.type = reader.readString();
                        break;
                    case 4:
                        message.player_id = reader.readUint64();
                        break;
                    case 5:
                        message.minute = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CardEvent {
            return CardEvent.deserialize(bytes);
        }
    }
    export class GoalEvent extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
            team_id?: number;
            player_id?: number;
            player_assist_id?: dependency_1.google.protobuf.UInt64Value;
            minute?: number;
            score?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("team_id" in data && data.team_id != undefined) {
                    this.team_id = data.team_id;
                }
                if ("player_id" in data && data.player_id != undefined) {
                    this.player_id = data.player_id;
                }
                if ("player_assist_id" in data && data.player_assist_id != undefined) {
                    this.player_assist_id = data.player_assist_id;
                }
                if ("minute" in data && data.minute != undefined) {
                    this.minute = data.minute;
                }
                if ("score" in data && data.score != undefined) {
                    this.score = data.score;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get team_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set team_id(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get player_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set player_id(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get player_assist_id() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.UInt64Value, 4) as dependency_1.google.protobuf.UInt64Value;
        }
        set player_assist_id(value: dependency_1.google.protobuf.UInt64Value) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_player_assist_id() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get minute() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set minute(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get score() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set score(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            id?: number;
            team_id?: number;
            player_id?: number;
            player_assist_id?: ReturnType<typeof dependency_1.google.protobuf.UInt64Value.prototype.toObject>;
            minute?: number;
            score?: string;
        }): GoalEvent {
            const message = new GoalEvent({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.team_id != null) {
                message.team_id = data.team_id;
            }
            if (data.player_id != null) {
                message.player_id = data.player_id;
            }
            if (data.player_assist_id != null) {
                message.player_assist_id = dependency_1.google.protobuf.UInt64Value.fromObject(data.player_assist_id);
            }
            if (data.minute != null) {
                message.minute = data.minute;
            }
            if (data.score != null) {
                message.score = data.score;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
                team_id?: number;
                player_id?: number;
                player_assist_id?: ReturnType<typeof dependency_1.google.protobuf.UInt64Value.prototype.toObject>;
                minute?: number;
                score?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.team_id != null) {
                data.team_id = this.team_id;
            }
            if (this.player_id != null) {
                data.player_id = this.player_id;
            }
            if (this.player_assist_id != null) {
                data.player_assist_id = this.player_assist_id.toObject();
            }
            if (this.minute != null) {
                data.minute = this.minute;
            }
            if (this.score != null) {
                data.score = this.score;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeUint64(1, this.id);
            if (this.team_id != 0)
                writer.writeUint64(2, this.team_id);
            if (this.player_id != 0)
                writer.writeUint64(3, this.player_id);
            if (this.has_player_assist_id)
                writer.writeMessage(4, this.player_assist_id, () => this.player_assist_id.serialize(writer));
            if (this.minute != 0)
                writer.writeUint32(5, this.minute);
            if (this.score.length)
                writer.writeString(6, this.score);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GoalEvent {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GoalEvent();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readUint64();
                        break;
                    case 2:
                        message.team_id = reader.readUint64();
                        break;
                    case 3:
                        message.player_id = reader.readUint64();
                        break;
                    case 4:
                        reader.readMessage(message.player_assist_id, () => message.player_assist_id = dependency_1.google.protobuf.UInt64Value.deserialize(reader));
                        break;
                    case 5:
                        message.minute = reader.readUint32();
                        break;
                    case 6:
                        message.score = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GoalEvent {
            return GoalEvent.deserialize(bytes);
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
    export abstract class UnimplementedEventServiceService {
        static definition = {
            FixtureEvents: {
                path: "/statistico.EventService/FixtureEvents",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_2.statistico.FixtureRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_2.statistico.FixtureRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: FixtureEventsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => FixtureEventsResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract FixtureEvents(call: grpc_1.ServerUnaryCall<dependency_2.statistico.FixtureRequest, FixtureEventsResponse>, callback: grpc_1.sendUnaryData<FixtureEventsResponse>): void;
    }
    export class EventServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedEventServiceService.definition, "EventService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        FixtureEvents: GrpcUnaryServiceInterface<dependency_2.statistico.FixtureRequest, FixtureEventsResponse> = (message: dependency_2.statistico.FixtureRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<FixtureEventsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<FixtureEventsResponse>, callback?: grpc_1.requestCallback<FixtureEventsResponse>): grpc_1.ClientUnaryCall => {
            return super.FixtureEvents(message, metadata, options, callback);
        };
    }
}
