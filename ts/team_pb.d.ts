import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as requests_pb from './requests_pb';


export class Team extends jspb.Message {
  getId(): number;
  setId(value: number): Team;

  getName(): string;
  setName(value: string): Team;

  getShortCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setShortCode(value?: google_protobuf_wrappers_pb.StringValue): Team;
  hasShortCode(): boolean;
  clearShortCode(): Team;

  getCountryId(): number;
  setCountryId(value: number): Team;

  getVenueId(): number;
  setVenueId(value: number): Team;

  getIsNationalTeam(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsNationalTeam(value?: google_protobuf_wrappers_pb.BoolValue): Team;
  hasIsNationalTeam(): boolean;
  clearIsNationalTeam(): Team;

  getFounded(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setFounded(value?: google_protobuf_wrappers_pb.UInt64Value): Team;
  hasFounded(): boolean;
  clearFounded(): Team;

  getLogo(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLogo(value?: google_protobuf_wrappers_pb.StringValue): Team;
  hasLogo(): boolean;
  clearLogo(): Team;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Team.AsObject;
  static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
  static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Team;
  static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
}

export namespace Team {
  export type AsObject = {
    id: number,
    name: string,
    shortCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryId: number,
    venueId: number,
    isNationalTeam?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    founded?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    logo?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CompetitionTeamsRequest extends jspb.Message {
  getCompetitionIdsList(): Array<number>;
  setCompetitionIdsList(value: Array<number>): CompetitionTeamsRequest;
  clearCompetitionIdsList(): CompetitionTeamsRequest;
  addCompetitionIds(value: number, index?: number): CompetitionTeamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionTeamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionTeamsRequest): CompetitionTeamsRequest.AsObject;
  static serializeBinaryToWriter(message: CompetitionTeamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionTeamsRequest;
  static deserializeBinaryFromReader(message: CompetitionTeamsRequest, reader: jspb.BinaryReader): CompetitionTeamsRequest;
}

export namespace CompetitionTeamsRequest {
  export type AsObject = {
    competitionIdsList: Array<number>,
  }
}

export class TeamsResponse extends jspb.Message {
  getTeamsList(): Array<Team>;
  setTeamsList(value: Array<Team>): TeamsResponse;
  clearTeamsList(): TeamsResponse;
  addTeams(value?: Team, index?: number): Team;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamsResponse): TeamsResponse.AsObject;
  static serializeBinaryToWriter(message: TeamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamsResponse;
  static deserializeBinaryFromReader(message: TeamsResponse, reader: jspb.BinaryReader): TeamsResponse;
}

export namespace TeamsResponse {
  export type AsObject = {
    teamsList: Array<Team.AsObject>,
  }
}

