/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.14.0
 * source: competition.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./requests";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace statistico {
    export class Competition extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
            name?: string;
            is_cup?: boolean;
            country_id?: number;
            logo?: string;
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
                if ("is_cup" in data && data.is_cup != undefined) {
                    this.is_cup = data.is_cup;
                }
                if ("country_id" in data && data.country_id != undefined) {
                    this.country_id = data.country_id;
                }
                if ("logo" in data && data.logo != undefined) {
                    this.logo = data.logo;
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
        get is_cup() {
            return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
        }
        set is_cup(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        get country_id() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set country_id(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get logo() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set logo(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            id?: number;
            name?: string;
            is_cup?: boolean;
            country_id?: number;
            logo?: string;
        }): Competition {
            const message = new Competition({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.is_cup != null) {
                message.is_cup = data.is_cup;
            }
            if (data.country_id != null) {
                message.country_id = data.country_id;
            }
            if (data.logo != null) {
                message.logo = data.logo;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
                name?: string;
                is_cup?: boolean;
                country_id?: number;
                logo?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.is_cup != null) {
                data.is_cup = this.is_cup;
            }
            if (this.country_id != null) {
                data.country_id = this.country_id;
            }
            if (this.logo != null) {
                data.logo = this.logo;
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
            if (this.is_cup != false)
                writer.writeBool(3, this.is_cup);
            if (this.country_id != 0)
                writer.writeUint64(4, this.country_id);
            if (this.logo.length)
                writer.writeString(5, this.logo);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Competition {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Competition();
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
                        message.is_cup = reader.readBool();
                        break;
                    case 4:
                        message.country_id = reader.readUint64();
                        break;
                    case 5:
                        message.logo = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Competition {
            return Competition.deserialize(bytes);
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
    export abstract class UnimplementedCompetitionServiceService {
        static definition = {
            ListCompetitions: {
                path: "/statistico.CompetitionService/ListCompetitions",
                requestStream: false,
                responseStream: true,
                requestSerialize: (message: dependency_1.statistico.CompetitionRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.statistico.CompetitionRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: Competition) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => Competition.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract ListCompetitions(call: grpc_1.ServerWritableStream<dependency_1.statistico.CompetitionRequest, Competition>): void;
    }
    export class CompetitionServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedCompetitionServiceService.definition, "CompetitionService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        ListCompetitions: GrpcStreamServiceInterface<dependency_1.statistico.CompetitionRequest, Competition> = (message: dependency_1.statistico.CompetitionRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<Competition> => {
            return super.ListCompetitions(message, metadata, options);
        };
    }
}
