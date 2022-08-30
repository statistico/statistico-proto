import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class FixtureRatingRequest extends jspb.Message {
  getFixtureId(): number;
  setFixtureId(value: number): FixtureRatingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FixtureRatingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FixtureRatingRequest): FixtureRatingRequest.AsObject;
  static serializeBinaryToWriter(message: FixtureRatingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FixtureRatingRequest;
  static deserializeBinaryFromReader(message: FixtureRatingRequest, reader: jspb.BinaryReader): FixtureRatingRequest;
}

export namespace FixtureRatingRequest {
  export type AsObject = {
    fixtureId: number,
  }
}

export class TeamRatingRequest extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): TeamRatingRequest;

  getSeasonId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setSeasonId(value?: google_protobuf_wrappers_pb.UInt64Value): TeamRatingRequest;
  hasSeasonId(): boolean;
  clearSeasonId(): TeamRatingRequest;

  getDateBefore(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDateBefore(value?: google_protobuf_wrappers_pb.StringValue): TeamRatingRequest;
  hasDateBefore(): boolean;
  clearDateBefore(): TeamRatingRequest;

  getSort(): string;
  setSort(value: string): TeamRatingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamRatingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamRatingRequest): TeamRatingRequest.AsObject;
  static serializeBinaryToWriter(message: TeamRatingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamRatingRequest;
  static deserializeBinaryFromReader(message: TeamRatingRequest, reader: jspb.BinaryReader): TeamRatingRequest;
}

export namespace TeamRatingRequest {
  export type AsObject = {
    teamId: number,
    seasonId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    dateBefore?: google_protobuf_wrappers_pb.StringValue.AsObject,
    sort: string,
  }
}

export class RatingResponse extends jspb.Message {
  getRatingsList(): Array<TeamRating>;
  setRatingsList(value: Array<TeamRating>): RatingResponse;
  clearRatingsList(): RatingResponse;
  addRatings(value?: TeamRating, index?: number): TeamRating;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RatingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RatingResponse): RatingResponse.AsObject;
  static serializeBinaryToWriter(message: RatingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RatingResponse;
  static deserializeBinaryFromReader(message: RatingResponse, reader: jspb.BinaryReader): RatingResponse;
}

export namespace RatingResponse {
  export type AsObject = {
    ratingsList: Array<TeamRating.AsObject>,
  }
}

export class TeamRating extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): TeamRating;

  getFixtureId(): number;
  setFixtureId(value: number): TeamRating;

  getSeasonId(): number;
  setSeasonId(value: number): TeamRating;

  getAttack(): Points | undefined;
  setAttack(value?: Points): TeamRating;
  hasAttack(): boolean;
  clearAttack(): TeamRating;

  getDefence(): Points | undefined;
  setDefence(value?: Points): TeamRating;
  hasDefence(): boolean;
  clearDefence(): TeamRating;

  getFixtureDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFixtureDate(value?: google_protobuf_timestamp_pb.Timestamp): TeamRating;
  hasFixtureDate(): boolean;
  clearFixtureDate(): TeamRating;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TeamRating;
  hasTimestamp(): boolean;
  clearTimestamp(): TeamRating;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamRating.AsObject;
  static toObject(includeInstance: boolean, msg: TeamRating): TeamRating.AsObject;
  static serializeBinaryToWriter(message: TeamRating, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamRating;
  static deserializeBinaryFromReader(message: TeamRating, reader: jspb.BinaryReader): TeamRating;
}

export namespace TeamRating {
  export type AsObject = {
    teamId: number,
    fixtureId: number,
    seasonId: number,
    attack?: Points.AsObject,
    defence?: Points.AsObject,
    fixtureDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Points extends jspb.Message {
  getPoints(): number;
  setPoints(value: number): Points;

  getDifference(): number;
  setDifference(value: number): Points;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Points.AsObject;
  static toObject(includeInstance: boolean, msg: Points): Points.AsObject;
  static serializeBinaryToWriter(message: Points, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Points;
  static deserializeBinaryFromReader(message: Points, reader: jspb.BinaryReader): Points;
}

export namespace Points {
  export type AsObject = {
    points: number,
    difference: number,
  }
}

