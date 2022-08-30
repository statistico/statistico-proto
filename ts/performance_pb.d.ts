import * as jspb from 'google-protobuf'

import * as team_pb from './team_pb';


export class TeamStatPerformanceRequest extends jspb.Message {
  getAction(): string;
  setAction(value: string): TeamStatPerformanceRequest;

  getGames(): number;
  setGames(value: number): TeamStatPerformanceRequest;

  getMeasure(): string;
  setMeasure(value: string): TeamStatPerformanceRequest;

  getMetric(): string;
  setMetric(value: string): TeamStatPerformanceRequest;

  getSeasonsList(): Array<number>;
  setSeasonsList(value: Array<number>): TeamStatPerformanceRequest;
  clearSeasonsList(): TeamStatPerformanceRequest;
  addSeasons(value: number, index?: number): TeamStatPerformanceRequest;

  getStat(): string;
  setStat(value: string): TeamStatPerformanceRequest;

  getValue(): number;
  setValue(value: number): TeamStatPerformanceRequest;

  getVenue(): string;
  setVenue(value: string): TeamStatPerformanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamStatPerformanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamStatPerformanceRequest): TeamStatPerformanceRequest.AsObject;
  static serializeBinaryToWriter(message: TeamStatPerformanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamStatPerformanceRequest;
  static deserializeBinaryFromReader(message: TeamStatPerformanceRequest, reader: jspb.BinaryReader): TeamStatPerformanceRequest;
}

export namespace TeamStatPerformanceRequest {
  export type AsObject = {
    action: string,
    games: number,
    measure: string,
    metric: string,
    seasonsList: Array<number>,
    stat: string,
    value: number,
    venue: string,
  }
}

export class TeamStatResponse extends jspb.Message {
  getTeamsList(): Array<team_pb.Team>;
  setTeamsList(value: Array<team_pb.Team>): TeamStatResponse;
  clearTeamsList(): TeamStatResponse;
  addTeams(value?: team_pb.Team, index?: number): team_pb.Team;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamStatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamStatResponse): TeamStatResponse.AsObject;
  static serializeBinaryToWriter(message: TeamStatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamStatResponse;
  static deserializeBinaryFromReader(message: TeamStatResponse, reader: jspb.BinaryReader): TeamStatResponse;
}

export namespace TeamStatResponse {
  export type AsObject = {
    teamsList: Array<team_pb.Team.AsObject>,
  }
}

