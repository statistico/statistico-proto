/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: season.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./google/protobuf/wrappers";
import * as dependency_2 from "./requests";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace statistico {
    export class TeamSeasonsRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            team_id?: number;
            sort?: dependency_1.google.protobuf.StringValue;
            include_cup?: dependency_1.google.protobuf.BoolValue;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("team_id" in data && data.team_id != undefined) {
                    this.team_id = data.team_id;
                }
                if ("sort" in data && data.sort != undefined) {
                    this.sort = data.sort;
                }
                if ("include_cup" in data && data.include_cup != undefined) {
                    this.include_cup = data.include_cup;
                }
            }
        }
        get team_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set team_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get sort() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.StringValue, 2) as dependency_1.google.protobuf.StringValue;
        }
        set sort(value: dependency_1.google.protobuf.StringValue) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_sort() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get include_cup() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.BoolValue, 3) as dependency_1.google.protobuf.BoolValue;
        }
        set include_cup(value: dependency_1.google.protobuf.BoolValue) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_include_cup() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            team_id?: number;
            sort?: ReturnType<typeof dependency_1.google.protobuf.StringValue.prototype.toObject>;
            include_cup?: ReturnType<typeof dependency_1.google.protobuf.BoolValue.prototype.toObject>;
        }): TeamSeasonsRequest {
            const message = new TeamSeasonsRequest({});
            if (data.team_id != null) {
                message.team_id = data.team_id;
            }
            if (data.sort != null) {
                message.sort = dependency_1.google.protobuf.StringValue.fromObject(data.sort);
            }
            if (data.include_cup != null) {
                message.include_cup = dependency_1.google.protobuf.BoolValue.fromObject(data.include_cup);
            }
            return message;
        }
        toObject() {
            const data: {
                team_id?: number;
                sort?: ReturnType<typeof dependency_1.google.protobuf.StringValue.prototype.toObject>;
                include_cup?: ReturnType<typeof dependency_1.google.protobuf.BoolValue.prototype.toObject>;
            } = {};
            if (this.team_id != null) {
                data.team_id = this.team_id;
            }
            if (this.sort != null) {
                data.sort = this.sort.toObject();
            }
            if (this.include_cup != null) {
                data.include_cup = this.include_cup.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.team_id != 0)
                writer.writeUint64(1, this.team_id);
            if (this.has_sort)
                writer.writeMessage(2, this.sort, () => this.sort.serialize(writer));
            if (this.has_include_cup)
                writer.writeMessage(3, this.include_cup, () => this.include_cup.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TeamSeasonsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TeamSeasonsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.team_id = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.sort, () => message.sort = dependency_1.google.protobuf.StringValue.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.include_cup, () => message.include_cup = dependency_1.google.protobuf.BoolValue.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TeamSeasonsRequest {
            return TeamSeasonsRequest.deserialize(bytes);
        }
    }
    export class TeamSeasonsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            seasons?: Season[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("seasons" in data && data.seasons != undefined) {
                    this.seasons = data.seasons;
                }
            }
        }
        get seasons() {
            return pb_1.Message.getRepeatedWrapperField(this, Season, 1) as Season[];
        }
        set seasons(value: Season[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            seasons?: ReturnType<typeof Season.prototype.toObject>[];
        }): TeamSeasonsResponse {
            const message = new TeamSeasonsResponse({});
            if (data.seasons != null) {
                message.seasons = data.seasons.map(item => Season.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                seasons?: ReturnType<typeof Season.prototype.toObject>[];
            } = {};
            if (this.seasons != null) {
                data.seasons = this.seasons.map((item: Season) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.seasons.length)
                writer.writeRepeatedMessage(1, this.seasons, (item: Season) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TeamSeasonsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TeamSeasonsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.seasons, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Season.deserialize(reader), Season));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TeamSeasonsResponse {
            return TeamSeasonsResponse.deserialize(bytes);
        }
    }
    export class Season extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
            name?: string;
            is_current?: dependency_1.google.protobuf.BoolValue;
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
                if ("is_current" in data && data.is_current != undefined) {
                    this.is_current = data.is_current;
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
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get is_current() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.BoolValue, 3) as dependency_1.google.protobuf.BoolValue;
        }
        set is_current(value: dependency_1.google.protobuf.BoolValue) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_is_current() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            id?: number;
            name?: string;
            is_current?: ReturnType<typeof dependency_1.google.protobuf.BoolValue.prototype.toObject>;
        }): Season {
            const message = new Season({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.is_current != null) {
                message.is_current = dependency_1.google.protobuf.BoolValue.fromObject(data.is_current);
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
                name?: string;
                is_current?: ReturnType<typeof dependency_1.google.protobuf.BoolValue.prototype.toObject>;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.is_current != null) {
                data.is_current = this.is_current.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeUint64(1, this.id);
            if (this.name.length)
                writer.writeString(2, this.name);
            if (this.has_is_current)
                writer.writeMessage(3, this.is_current, () => this.is_current.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Season {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Season();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readUint64();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.is_current, () => message.is_current = dependency_1.google.protobuf.BoolValue.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Season {
            return Season.deserialize(bytes);
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
    export abstract class UnimplementedSeasonServiceService {
        static definition = {
            GetSeasonsForCompetition: {
                path: "/statistico.SeasonService/GetSeasonsForCompetition",
                requestStream: false,
                responseStream: true,
                requestSerialize: (message: dependency_2.statistico.SeasonCompetitionRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_2.statistico.SeasonCompetitionRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: Season) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => Season.deserialize(new Uint8Array(bytes))
            },
            GetSeasonsForTeam: {
                path: "/statistico.SeasonService/GetSeasonsForTeam",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: TeamSeasonsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => TeamSeasonsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: TeamSeasonsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => TeamSeasonsResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetSeasonsForCompetition(call: grpc_1.ServerWritableStream<dependency_2.statistico.SeasonCompetitionRequest, Season>): void;
        abstract GetSeasonsForTeam(call: grpc_1.ServerUnaryCall<TeamSeasonsRequest, TeamSeasonsResponse>, callback: grpc_1.sendUnaryData<TeamSeasonsResponse>): void;
    }
    export class SeasonServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedSeasonServiceService.definition, "SeasonService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        GetSeasonsForCompetition: GrpcStreamServiceInterface<dependency_2.statistico.SeasonCompetitionRequest, dependency_2.statistico.SeasonCompetitionRequest> = (message: dependency_2.statistico.SeasonCompetitionRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<dependency_2.statistico.SeasonCompetitionRequest> => {
            return super.GetSeasonsForCompetition(message, metadata, options);
        };
        GetSeasonsForTeam: GrpcUnaryServiceInterface<TeamSeasonsRequest, TeamSeasonsResponse> = (message: TeamSeasonsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<TeamSeasonsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<TeamSeasonsResponse>, callback?: grpc_1.requestCallback<TeamSeasonsResponse>): grpc_1.ClientUnaryCall => {
            return super.GetSeasonsForTeam(message, metadata, options, callback);
        };
    }
}
