/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.14.0
 * source: ratings.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./google/protobuf/timestamp";
import * as dependency_2 from "./google/protobuf/wrappers";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace statistico {
    export class FixtureRatingRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            fixture_id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("fixture_id" in data && data.fixture_id != undefined) {
                    this.fixture_id = data.fixture_id;
                }
            }
        }
        get fixture_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set fixture_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            fixture_id?: number;
        }): FixtureRatingRequest {
            const message = new FixtureRatingRequest({});
            if (data.fixture_id != null) {
                message.fixture_id = data.fixture_id;
            }
            return message;
        }
        toObject() {
            const data: {
                fixture_id?: number;
            } = {};
            if (this.fixture_id != null) {
                data.fixture_id = this.fixture_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.fixture_id != 0)
                writer.writeUint64(1, this.fixture_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FixtureRatingRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FixtureRatingRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.fixture_id = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): FixtureRatingRequest {
            return FixtureRatingRequest.deserialize(bytes);
        }
    }
    export class TeamRatingRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            team_id?: number;
            season_id?: dependency_2.google.protobuf.UInt64Value;
            date_before?: dependency_2.google.protobuf.StringValue;
            sort?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("team_id" in data && data.team_id != undefined) {
                    this.team_id = data.team_id;
                }
                if ("season_id" in data && data.season_id != undefined) {
                    this.season_id = data.season_id;
                }
                if ("date_before" in data && data.date_before != undefined) {
                    this.date_before = data.date_before;
                }
                if ("sort" in data && data.sort != undefined) {
                    this.sort = data.sort;
                }
            }
        }
        get team_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set team_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get season_id() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.UInt64Value, 2) as dependency_2.google.protobuf.UInt64Value;
        }
        set season_id(value: dependency_2.google.protobuf.UInt64Value) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_season_id() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get date_before() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.StringValue, 3) as dependency_2.google.protobuf.StringValue;
        }
        set date_before(value: dependency_2.google.protobuf.StringValue) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_date_before() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get sort() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set sort(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            team_id?: number;
            season_id?: ReturnType<typeof dependency_2.google.protobuf.UInt64Value.prototype.toObject>;
            date_before?: ReturnType<typeof dependency_2.google.protobuf.StringValue.prototype.toObject>;
            sort?: string;
        }): TeamRatingRequest {
            const message = new TeamRatingRequest({});
            if (data.team_id != null) {
                message.team_id = data.team_id;
            }
            if (data.season_id != null) {
                message.season_id = dependency_2.google.protobuf.UInt64Value.fromObject(data.season_id);
            }
            if (data.date_before != null) {
                message.date_before = dependency_2.google.protobuf.StringValue.fromObject(data.date_before);
            }
            if (data.sort != null) {
                message.sort = data.sort;
            }
            return message;
        }
        toObject() {
            const data: {
                team_id?: number;
                season_id?: ReturnType<typeof dependency_2.google.protobuf.UInt64Value.prototype.toObject>;
                date_before?: ReturnType<typeof dependency_2.google.protobuf.StringValue.prototype.toObject>;
                sort?: string;
            } = {};
            if (this.team_id != null) {
                data.team_id = this.team_id;
            }
            if (this.season_id != null) {
                data.season_id = this.season_id.toObject();
            }
            if (this.date_before != null) {
                data.date_before = this.date_before.toObject();
            }
            if (this.sort != null) {
                data.sort = this.sort;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.team_id != 0)
                writer.writeUint64(1, this.team_id);
            if (this.has_season_id)
                writer.writeMessage(2, this.season_id, () => this.season_id.serialize(writer));
            if (this.has_date_before)
                writer.writeMessage(3, this.date_before, () => this.date_before.serialize(writer));
            if (this.sort.length)
                writer.writeString(4, this.sort);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TeamRatingRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TeamRatingRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.team_id = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.season_id, () => message.season_id = dependency_2.google.protobuf.UInt64Value.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.date_before, () => message.date_before = dependency_2.google.protobuf.StringValue.deserialize(reader));
                        break;
                    case 4:
                        message.sort = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TeamRatingRequest {
            return TeamRatingRequest.deserialize(bytes);
        }
    }
    export class RatingResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            ratings?: TeamRating[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("ratings" in data && data.ratings != undefined) {
                    this.ratings = data.ratings;
                }
            }
        }
        get ratings() {
            return pb_1.Message.getRepeatedWrapperField(this, TeamRating, 1) as TeamRating[];
        }
        set ratings(value: TeamRating[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            ratings?: ReturnType<typeof TeamRating.prototype.toObject>[];
        }): RatingResponse {
            const message = new RatingResponse({});
            if (data.ratings != null) {
                message.ratings = data.ratings.map(item => TeamRating.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                ratings?: ReturnType<typeof TeamRating.prototype.toObject>[];
            } = {};
            if (this.ratings != null) {
                data.ratings = this.ratings.map((item: TeamRating) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.ratings.length)
                writer.writeRepeatedMessage(1, this.ratings, (item: TeamRating) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RatingResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RatingResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.ratings, () => pb_1.Message.addToRepeatedWrapperField(message, 1, TeamRating.deserialize(reader), TeamRating));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RatingResponse {
            return RatingResponse.deserialize(bytes);
        }
    }
    export class TeamRating extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            team_id?: number;
            fixture_id?: number;
            season_id?: number;
            attack?: Points;
            defence?: Points;
            fixture_date?: dependency_1.google.protobuf.Timestamp;
            timestamp?: dependency_1.google.protobuf.Timestamp;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("team_id" in data && data.team_id != undefined) {
                    this.team_id = data.team_id;
                }
                if ("fixture_id" in data && data.fixture_id != undefined) {
                    this.fixture_id = data.fixture_id;
                }
                if ("season_id" in data && data.season_id != undefined) {
                    this.season_id = data.season_id;
                }
                if ("attack" in data && data.attack != undefined) {
                    this.attack = data.attack;
                }
                if ("defence" in data && data.defence != undefined) {
                    this.defence = data.defence;
                }
                if ("fixture_date" in data && data.fixture_date != undefined) {
                    this.fixture_date = data.fixture_date;
                }
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
            }
        }
        get team_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set team_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get fixture_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set fixture_id(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get season_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set season_id(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get attack() {
            return pb_1.Message.getWrapperField(this, Points, 4) as Points;
        }
        set attack(value: Points) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_attack() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get defence() {
            return pb_1.Message.getWrapperField(this, Points, 5) as Points;
        }
        set defence(value: Points) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_defence() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get fixture_date() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Timestamp, 6) as dependency_1.google.protobuf.Timestamp;
        }
        set fixture_date(value: dependency_1.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get has_fixture_date() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get timestamp() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Timestamp, 7) as dependency_1.google.protobuf.Timestamp;
        }
        set timestamp(value: dependency_1.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 7, value);
        }
        get has_timestamp() {
            return pb_1.Message.getField(this, 7) != null;
        }
        static fromObject(data: {
            team_id?: number;
            fixture_id?: number;
            season_id?: number;
            attack?: ReturnType<typeof Points.prototype.toObject>;
            defence?: ReturnType<typeof Points.prototype.toObject>;
            fixture_date?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
            timestamp?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
        }): TeamRating {
            const message = new TeamRating({});
            if (data.team_id != null) {
                message.team_id = data.team_id;
            }
            if (data.fixture_id != null) {
                message.fixture_id = data.fixture_id;
            }
            if (data.season_id != null) {
                message.season_id = data.season_id;
            }
            if (data.attack != null) {
                message.attack = Points.fromObject(data.attack);
            }
            if (data.defence != null) {
                message.defence = Points.fromObject(data.defence);
            }
            if (data.fixture_date != null) {
                message.fixture_date = dependency_1.google.protobuf.Timestamp.fromObject(data.fixture_date);
            }
            if (data.timestamp != null) {
                message.timestamp = dependency_1.google.protobuf.Timestamp.fromObject(data.timestamp);
            }
            return message;
        }
        toObject() {
            const data: {
                team_id?: number;
                fixture_id?: number;
                season_id?: number;
                attack?: ReturnType<typeof Points.prototype.toObject>;
                defence?: ReturnType<typeof Points.prototype.toObject>;
                fixture_date?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
                timestamp?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.team_id != null) {
                data.team_id = this.team_id;
            }
            if (this.fixture_id != null) {
                data.fixture_id = this.fixture_id;
            }
            if (this.season_id != null) {
                data.season_id = this.season_id;
            }
            if (this.attack != null) {
                data.attack = this.attack.toObject();
            }
            if (this.defence != null) {
                data.defence = this.defence.toObject();
            }
            if (this.fixture_date != null) {
                data.fixture_date = this.fixture_date.toObject();
            }
            if (this.timestamp != null) {
                data.timestamp = this.timestamp.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.team_id != 0)
                writer.writeUint64(1, this.team_id);
            if (this.fixture_id != 0)
                writer.writeUint64(2, this.fixture_id);
            if (this.season_id != 0)
                writer.writeUint64(3, this.season_id);
            if (this.has_attack)
                writer.writeMessage(4, this.attack, () => this.attack.serialize(writer));
            if (this.has_defence)
                writer.writeMessage(5, this.defence, () => this.defence.serialize(writer));
            if (this.has_fixture_date)
                writer.writeMessage(6, this.fixture_date, () => this.fixture_date.serialize(writer));
            if (this.has_timestamp)
                writer.writeMessage(7, this.timestamp, () => this.timestamp.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TeamRating {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TeamRating();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.team_id = reader.readUint64();
                        break;
                    case 2:
                        message.fixture_id = reader.readUint64();
                        break;
                    case 3:
                        message.season_id = reader.readUint64();
                        break;
                    case 4:
                        reader.readMessage(message.attack, () => message.attack = Points.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.defence, () => message.defence = Points.deserialize(reader));
                        break;
                    case 6:
                        reader.readMessage(message.fixture_date, () => message.fixture_date = dependency_1.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 7:
                        reader.readMessage(message.timestamp, () => message.timestamp = dependency_1.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TeamRating {
            return TeamRating.deserialize(bytes);
        }
    }
    export class Points extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            points?: number;
            difference?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("points" in data && data.points != undefined) {
                    this.points = data.points;
                }
                if ("difference" in data && data.difference != undefined) {
                    this.difference = data.difference;
                }
            }
        }
        get points() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set points(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get difference() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set difference(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            points?: number;
            difference?: number;
        }): Points {
            const message = new Points({});
            if (data.points != null) {
                message.points = data.points;
            }
            if (data.difference != null) {
                message.difference = data.difference;
            }
            return message;
        }
        toObject() {
            const data: {
                points?: number;
                difference?: number;
            } = {};
            if (this.points != null) {
                data.points = this.points;
            }
            if (this.difference != null) {
                data.difference = this.difference;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.points != 0)
                writer.writeFloat(1, this.points);
            if (this.difference != 0)
                writer.writeFloat(2, this.difference);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Points {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Points();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.points = reader.readFloat();
                        break;
                    case 2:
                        message.difference = reader.readFloat();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Points {
            return Points.deserialize(bytes);
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
    export abstract class UnimplementedTeamRatingServiceService {
        static definition = {
            GetFixtureRatings: {
                path: "/statistico.TeamRatingService/GetFixtureRatings",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: FixtureRatingRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => FixtureRatingRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: RatingResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => RatingResponse.deserialize(new Uint8Array(bytes))
            },
            GetTeamRatings: {
                path: "/statistico.TeamRatingService/GetTeamRatings",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: TeamRatingRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => TeamRatingRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: RatingResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => RatingResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetFixtureRatings(call: grpc_1.ServerUnaryCall<FixtureRatingRequest, RatingResponse>, callback: grpc_1.sendUnaryData<RatingResponse>): void;
        abstract GetTeamRatings(call: grpc_1.ServerUnaryCall<TeamRatingRequest, RatingResponse>, callback: grpc_1.sendUnaryData<RatingResponse>): void;
    }
    export class TeamRatingServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedTeamRatingServiceService.definition, "TeamRatingService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        GetFixtureRatings: GrpcUnaryServiceInterface<FixtureRatingRequest, RatingResponse> = (message: FixtureRatingRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<RatingResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<RatingResponse>, callback?: grpc_1.requestCallback<RatingResponse>): grpc_1.ClientUnaryCall => {
            return super.GetFixtureRatings(message, metadata, options, callback);
        };
        GetTeamRatings: GrpcUnaryServiceInterface<TeamRatingRequest, RatingResponse> = (message: TeamRatingRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<RatingResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<RatingResponse>, callback?: grpc_1.requestCallback<RatingResponse>): grpc_1.ClientUnaryCall => {
            return super.GetTeamRatings(message, metadata, options, callback);
        };
    }
}
