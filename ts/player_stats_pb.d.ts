import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as requests_pb from './requests_pb';


export class PlayerStatsResponse extends jspb.Message {
  getHomeTeamList(): Array<PlayerStats>;
  setHomeTeamList(value: Array<PlayerStats>): PlayerStatsResponse;
  clearHomeTeamList(): PlayerStatsResponse;
  addHomeTeam(value?: PlayerStats, index?: number): PlayerStats;

  getAwayTeamList(): Array<PlayerStats>;
  setAwayTeamList(value: Array<PlayerStats>): PlayerStatsResponse;
  clearAwayTeamList(): PlayerStatsResponse;
  addAwayTeam(value?: PlayerStats, index?: number): PlayerStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerStatsResponse): PlayerStatsResponse.AsObject;
  static serializeBinaryToWriter(message: PlayerStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerStatsResponse;
  static deserializeBinaryFromReader(message: PlayerStatsResponse, reader: jspb.BinaryReader): PlayerStatsResponse;
}

export namespace PlayerStatsResponse {
  export type AsObject = {
    homeTeamList: Array<PlayerStats.AsObject>,
    awayTeamList: Array<PlayerStats.AsObject>,
  }
}

export class LineupResponse extends jspb.Message {
  getHomeTeam(): Lineup | undefined;
  setHomeTeam(value?: Lineup): LineupResponse;
  hasHomeTeam(): boolean;
  clearHomeTeam(): LineupResponse;

  getAwayTeam(): Lineup | undefined;
  setAwayTeam(value?: Lineup): LineupResponse;
  hasAwayTeam(): boolean;
  clearAwayTeam(): LineupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LineupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LineupResponse): LineupResponse.AsObject;
  static serializeBinaryToWriter(message: LineupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LineupResponse;
  static deserializeBinaryFromReader(message: LineupResponse, reader: jspb.BinaryReader): LineupResponse;
}

export namespace LineupResponse {
  export type AsObject = {
    homeTeam?: Lineup.AsObject,
    awayTeam?: Lineup.AsObject,
  }
}

export class PlayerStats extends jspb.Message {
  getPlayerId(): number;
  setPlayerId(value: number): PlayerStats;

  getShotsTotal(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setShotsTotal(value?: google_protobuf_wrappers_pb.Int32Value): PlayerStats;
  hasShotsTotal(): boolean;
  clearShotsTotal(): PlayerStats;

  getShotsOnGoal(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setShotsOnGoal(value?: google_protobuf_wrappers_pb.Int32Value): PlayerStats;
  hasShotsOnGoal(): boolean;
  clearShotsOnGoal(): PlayerStats;

  getGoalsScored(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setGoalsScored(value?: google_protobuf_wrappers_pb.Int32Value): PlayerStats;
  hasGoalsScored(): boolean;
  clearGoalsScored(): PlayerStats;

  getGoalsConceded(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setGoalsConceded(value?: google_protobuf_wrappers_pb.Int32Value): PlayerStats;
  hasGoalsConceded(): boolean;
  clearGoalsConceded(): PlayerStats;

  getAssists(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setAssists(value?: google_protobuf_wrappers_pb.Int32Value): PlayerStats;
  hasAssists(): boolean;
  clearAssists(): PlayerStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerStats.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerStats): PlayerStats.AsObject;
  static serializeBinaryToWriter(message: PlayerStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerStats;
  static deserializeBinaryFromReader(message: PlayerStats, reader: jspb.BinaryReader): PlayerStats;
}

export namespace PlayerStats {
  export type AsObject = {
    playerId: number,
    shotsTotal?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    shotsOnGoal?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    goalsScored?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    goalsConceded?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    assists?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class Lineup extends jspb.Message {
  getStartList(): Array<LineupPlayer>;
  setStartList(value: Array<LineupPlayer>): Lineup;
  clearStartList(): Lineup;
  addStart(value?: LineupPlayer, index?: number): LineupPlayer;

  getBenchList(): Array<LineupPlayer>;
  setBenchList(value: Array<LineupPlayer>): Lineup;
  clearBenchList(): Lineup;
  addBench(value?: LineupPlayer, index?: number): LineupPlayer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lineup.AsObject;
  static toObject(includeInstance: boolean, msg: Lineup): Lineup.AsObject;
  static serializeBinaryToWriter(message: Lineup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lineup;
  static deserializeBinaryFromReader(message: Lineup, reader: jspb.BinaryReader): Lineup;
}

export namespace Lineup {
  export type AsObject = {
    startList: Array<LineupPlayer.AsObject>,
    benchList: Array<LineupPlayer.AsObject>,
  }
}

export class LineupPlayer extends jspb.Message {
  getPlayerId(): number;
  setPlayerId(value: number): LineupPlayer;

  getPosition(): string;
  setPosition(value: string): LineupPlayer;

  getFormationPosition(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setFormationPosition(value?: google_protobuf_wrappers_pb.UInt32Value): LineupPlayer;
  hasFormationPosition(): boolean;
  clearFormationPosition(): LineupPlayer;

  getIsSubstitute(): boolean;
  setIsSubstitute(value: boolean): LineupPlayer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LineupPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: LineupPlayer): LineupPlayer.AsObject;
  static serializeBinaryToWriter(message: LineupPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LineupPlayer;
  static deserializeBinaryFromReader(message: LineupPlayer, reader: jspb.BinaryReader): LineupPlayer;
}

export namespace LineupPlayer {
  export type AsObject = {
    playerId: number,
    position: string,
    formationPosition?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    isSubstitute: boolean,
  }
}

