import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as requests_pb from './requests_pb';


export class TeamSeasonsRequest extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): TeamSeasonsRequest;

  getSort(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSort(value?: google_protobuf_wrappers_pb.StringValue): TeamSeasonsRequest;
  hasSort(): boolean;
  clearSort(): TeamSeasonsRequest;

  getIncludeCup(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIncludeCup(value?: google_protobuf_wrappers_pb.BoolValue): TeamSeasonsRequest;
  hasIncludeCup(): boolean;
  clearIncludeCup(): TeamSeasonsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamSeasonsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamSeasonsRequest): TeamSeasonsRequest.AsObject;
  static serializeBinaryToWriter(message: TeamSeasonsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamSeasonsRequest;
  static deserializeBinaryFromReader(message: TeamSeasonsRequest, reader: jspb.BinaryReader): TeamSeasonsRequest;
}

export namespace TeamSeasonsRequest {
  export type AsObject = {
    teamId: number,
    sort?: google_protobuf_wrappers_pb.StringValue.AsObject,
    includeCup?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class TeamSeasonsResponse extends jspb.Message {
  getSeasonsList(): Array<Season>;
  setSeasonsList(value: Array<Season>): TeamSeasonsResponse;
  clearSeasonsList(): TeamSeasonsResponse;
  addSeasons(value?: Season, index?: number): Season;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamSeasonsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamSeasonsResponse): TeamSeasonsResponse.AsObject;
  static serializeBinaryToWriter(message: TeamSeasonsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamSeasonsResponse;
  static deserializeBinaryFromReader(message: TeamSeasonsResponse, reader: jspb.BinaryReader): TeamSeasonsResponse;
}

export namespace TeamSeasonsResponse {
  export type AsObject = {
    seasonsList: Array<Season.AsObject>,
  }
}

export class Season extends jspb.Message {
  getId(): number;
  setId(value: number): Season;

  getName(): string;
  setName(value: string): Season;

  getIsCurrent(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsCurrent(value?: google_protobuf_wrappers_pb.BoolValue): Season;
  hasIsCurrent(): boolean;
  clearIsCurrent(): Season;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Season.AsObject;
  static toObject(includeInstance: boolean, msg: Season): Season.AsObject;
  static serializeBinaryToWriter(message: Season, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Season;
  static deserializeBinaryFromReader(message: Season, reader: jspb.BinaryReader): Season;
}

export namespace Season {
  export type AsObject = {
    id: number,
    name: string,
    isCurrent?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

