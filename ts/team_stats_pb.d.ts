import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as requests_pb from './requests_pb';


export class TeamStatsResponse extends jspb.Message {
  getHomeTeam(): TeamStats | undefined;
  setHomeTeam(value?: TeamStats): TeamStatsResponse;
  hasHomeTeam(): boolean;
  clearHomeTeam(): TeamStatsResponse;

  getAwayTeam(): TeamStats | undefined;
  setAwayTeam(value?: TeamStats): TeamStatsResponse;
  hasAwayTeam(): boolean;
  clearAwayTeam(): TeamStatsResponse;

  getTeamXg(): TeamXG | undefined;
  setTeamXg(value?: TeamXG): TeamStatsResponse;
  hasTeamXg(): boolean;
  clearTeamXg(): TeamStatsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamStatsResponse): TeamStatsResponse.AsObject;
  static serializeBinaryToWriter(message: TeamStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamStatsResponse;
  static deserializeBinaryFromReader(message: TeamStatsResponse, reader: jspb.BinaryReader): TeamStatsResponse;
}

export namespace TeamStatsResponse {
  export type AsObject = {
    homeTeam?: TeamStats.AsObject,
    awayTeam?: TeamStats.AsObject,
    teamXg?: TeamXG.AsObject,
  }
}

export class TeamStat extends jspb.Message {
  getFixtureId(): number;
  setFixtureId(value: number): TeamStat;

  getStat(): string;
  setStat(value: string): TeamStat;

  getValue(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setValue(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStat;
  hasValue(): boolean;
  clearValue(): TeamStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamStat.AsObject;
  static toObject(includeInstance: boolean, msg: TeamStat): TeamStat.AsObject;
  static serializeBinaryToWriter(message: TeamStat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamStat;
  static deserializeBinaryFromReader(message: TeamStat, reader: jspb.BinaryReader): TeamStat;
}

export namespace TeamStat {
  export type AsObject = {
    fixtureId: number,
    stat: string,
    value?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
  }
}

export class TeamStats extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): TeamStats;

  getShotsTotal(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setShotsTotal(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasShotsTotal(): boolean;
  clearShotsTotal(): TeamStats;

  getShotsOnGoal(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setShotsOnGoal(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasShotsOnGoal(): boolean;
  clearShotsOnGoal(): TeamStats;

  getShotsOffGoal(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setShotsOffGoal(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasShotsOffGoal(): boolean;
  clearShotsOffGoal(): TeamStats;

  getShotsBlocked(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setShotsBlocked(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasShotsBlocked(): boolean;
  clearShotsBlocked(): TeamStats;

  getShotsInsideBox(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setShotsInsideBox(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasShotsInsideBox(): boolean;
  clearShotsInsideBox(): TeamStats;

  getShotsOutsideBox(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setShotsOutsideBox(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasShotsOutsideBox(): boolean;
  clearShotsOutsideBox(): TeamStats;

  getPassesTotal(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setPassesTotal(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasPassesTotal(): boolean;
  clearPassesTotal(): TeamStats;

  getPassesAccuracy(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setPassesAccuracy(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasPassesAccuracy(): boolean;
  clearPassesAccuracy(): TeamStats;

  getPassesPercentage(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setPassesPercentage(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasPassesPercentage(): boolean;
  clearPassesPercentage(): TeamStats;

  getAttacksTotal(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setAttacksTotal(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasAttacksTotal(): boolean;
  clearAttacksTotal(): TeamStats;

  getAttacksDangerous(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setAttacksDangerous(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasAttacksDangerous(): boolean;
  clearAttacksDangerous(): TeamStats;

  getGoals(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setGoals(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasGoals(): boolean;
  clearGoals(): TeamStats;

  getFouls(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setFouls(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasFouls(): boolean;
  clearFouls(): TeamStats;

  getCorners(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setCorners(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasCorners(): boolean;
  clearCorners(): TeamStats;

  getOffsides(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setOffsides(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasOffsides(): boolean;
  clearOffsides(): TeamStats;

  getPossession(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setPossession(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasPossession(): boolean;
  clearPossession(): TeamStats;

  getYellowCards(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setYellowCards(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasYellowCards(): boolean;
  clearYellowCards(): TeamStats;

  getRedCards(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setRedCards(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasRedCards(): boolean;
  clearRedCards(): TeamStats;

  getSaves(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setSaves(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasSaves(): boolean;
  clearSaves(): TeamStats;

  getSubstitutions(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setSubstitutions(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasSubstitutions(): boolean;
  clearSubstitutions(): TeamStats;

  getGoalKicks(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setGoalKicks(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasGoalKicks(): boolean;
  clearGoalKicks(): TeamStats;

  getGoalAttempts(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setGoalAttempts(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasGoalAttempts(): boolean;
  clearGoalAttempts(): TeamStats;

  getFreeKicks(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setFreeKicks(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasFreeKicks(): boolean;
  clearFreeKicks(): TeamStats;

  getThrowIns(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setThrowIns(value?: google_protobuf_wrappers_pb.UInt32Value): TeamStats;
  hasThrowIns(): boolean;
  clearThrowIns(): TeamStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamStats.AsObject;
  static toObject(includeInstance: boolean, msg: TeamStats): TeamStats.AsObject;
  static serializeBinaryToWriter(message: TeamStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamStats;
  static deserializeBinaryFromReader(message: TeamStats, reader: jspb.BinaryReader): TeamStats;
}

export namespace TeamStats {
  export type AsObject = {
    teamId: number,
    shotsTotal?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    shotsOnGoal?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    shotsOffGoal?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    shotsBlocked?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    shotsInsideBox?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    shotsOutsideBox?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    passesTotal?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    passesAccuracy?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    passesPercentage?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    attacksTotal?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    attacksDangerous?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    goals?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    fouls?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    corners?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    offsides?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    possession?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    yellowCards?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    redCards?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    saves?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    substitutions?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    goalKicks?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    goalAttempts?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    freeKicks?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    throwIns?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
  }
}

export class TeamXG extends jspb.Message {
  getHome(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setHome(value?: google_protobuf_wrappers_pb.FloatValue): TeamXG;
  hasHome(): boolean;
  clearHome(): TeamXG;

  getAway(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAway(value?: google_protobuf_wrappers_pb.FloatValue): TeamXG;
  hasAway(): boolean;
  clearAway(): TeamXG;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamXG.AsObject;
  static toObject(includeInstance: boolean, msg: TeamXG): TeamXG.AsObject;
  static serializeBinaryToWriter(message: TeamXG, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamXG;
  static deserializeBinaryFromReader(message: TeamXG, reader: jspb.BinaryReader): TeamXG;
}

export namespace TeamXG {
  export type AsObject = {
    home?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    away?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

