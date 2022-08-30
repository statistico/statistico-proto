import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as common_pb from './common_pb';
import * as requests_pb from './requests_pb';
import * as round_pb from './round_pb';
import * as season_pb from './season_pb';
import * as team_pb from './team_pb';
import * as team_stats_pb from './team_stats_pb';
import * as venue_pb from './venue_pb';


export class Result extends jspb.Message {
  getId(): number;
  setId(value: number): Result;

  getHomeTeam(): team_pb.Team | undefined;
  setHomeTeam(value?: team_pb.Team): Result;
  hasHomeTeam(): boolean;
  clearHomeTeam(): Result;

  getAwayTeam(): team_pb.Team | undefined;
  setAwayTeam(value?: team_pb.Team): Result;
  hasAwayTeam(): boolean;
  clearAwayTeam(): Result;

  getSeason(): season_pb.Season | undefined;
  setSeason(value?: season_pb.Season): Result;
  hasSeason(): boolean;
  clearSeason(): Result;

  getRound(): round_pb.Round | undefined;
  setRound(value?: round_pb.Round): Result;
  hasRound(): boolean;
  clearRound(): Result;

  getVenue(): venue_pb.Venue | undefined;
  setVenue(value?: venue_pb.Venue): Result;
  hasVenue(): boolean;
  clearVenue(): Result;

  getDateTime(): common_pb.Date | undefined;
  setDateTime(value?: common_pb.Date): Result;
  hasDateTime(): boolean;
  clearDateTime(): Result;

  getStats(): MatchStats | undefined;
  setStats(value?: MatchStats): Result;
  hasStats(): boolean;
  clearStats(): Result;

  getHomeTeamStats(): team_stats_pb.TeamStats | undefined;
  setHomeTeamStats(value?: team_stats_pb.TeamStats): Result;
  hasHomeTeamStats(): boolean;
  clearHomeTeamStats(): Result;

  getAwayTeamStats(): team_stats_pb.TeamStats | undefined;
  setAwayTeamStats(value?: team_stats_pb.TeamStats): Result;
  hasAwayTeamStats(): boolean;
  clearAwayTeamStats(): Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    id: number,
    homeTeam?: team_pb.Team.AsObject,
    awayTeam?: team_pb.Team.AsObject,
    season?: season_pb.Season.AsObject,
    round?: round_pb.Round.AsObject,
    venue?: venue_pb.Venue.AsObject,
    dateTime?: common_pb.Date.AsObject,
    stats?: MatchStats.AsObject,
    homeTeamStats?: team_stats_pb.TeamStats.AsObject,
    awayTeamStats?: team_stats_pb.TeamStats.AsObject,
  }
}

export class MatchStats extends jspb.Message {
  getPitch(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPitch(value?: google_protobuf_wrappers_pb.StringValue): MatchStats;
  hasPitch(): boolean;
  clearPitch(): MatchStats;

  getHomeFormation(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHomeFormation(value?: google_protobuf_wrappers_pb.StringValue): MatchStats;
  hasHomeFormation(): boolean;
  clearHomeFormation(): MatchStats;

  getAwayFormation(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAwayFormation(value?: google_protobuf_wrappers_pb.StringValue): MatchStats;
  hasAwayFormation(): boolean;
  clearAwayFormation(): MatchStats;

  getHomeScore(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setHomeScore(value?: google_protobuf_wrappers_pb.UInt32Value): MatchStats;
  hasHomeScore(): boolean;
  clearHomeScore(): MatchStats;

  getAwayScore(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setAwayScore(value?: google_protobuf_wrappers_pb.UInt32Value): MatchStats;
  hasAwayScore(): boolean;
  clearAwayScore(): MatchStats;

  getHomePenScore(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setHomePenScore(value?: google_protobuf_wrappers_pb.UInt32Value): MatchStats;
  hasHomePenScore(): boolean;
  clearHomePenScore(): MatchStats;

  getAwayPenScore(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setAwayPenScore(value?: google_protobuf_wrappers_pb.UInt32Value): MatchStats;
  hasAwayPenScore(): boolean;
  clearAwayPenScore(): MatchStats;

  getHalfTimeScore(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHalfTimeScore(value?: google_protobuf_wrappers_pb.StringValue): MatchStats;
  hasHalfTimeScore(): boolean;
  clearHalfTimeScore(): MatchStats;

  getFullTimeScore(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFullTimeScore(value?: google_protobuf_wrappers_pb.StringValue): MatchStats;
  hasFullTimeScore(): boolean;
  clearFullTimeScore(): MatchStats;

  getExtraTimeScore(): google_protobuf_wrappers_pb.StringValue | undefined;
  setExtraTimeScore(value?: google_protobuf_wrappers_pb.StringValue): MatchStats;
  hasExtraTimeScore(): boolean;
  clearExtraTimeScore(): MatchStats;

  getHomeLeaguePosition(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setHomeLeaguePosition(value?: google_protobuf_wrappers_pb.UInt32Value): MatchStats;
  hasHomeLeaguePosition(): boolean;
  clearHomeLeaguePosition(): MatchStats;

  getAwayLeaguePosition(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setAwayLeaguePosition(value?: google_protobuf_wrappers_pb.UInt32Value): MatchStats;
  hasAwayLeaguePosition(): boolean;
  clearAwayLeaguePosition(): MatchStats;

  getMinutes(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setMinutes(value?: google_protobuf_wrappers_pb.UInt32Value): MatchStats;
  hasMinutes(): boolean;
  clearMinutes(): MatchStats;

  getAddedTime(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setAddedTime(value?: google_protobuf_wrappers_pb.UInt32Value): MatchStats;
  hasAddedTime(): boolean;
  clearAddedTime(): MatchStats;

  getExtraTime(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setExtraTime(value?: google_protobuf_wrappers_pb.UInt32Value): MatchStats;
  hasExtraTime(): boolean;
  clearExtraTime(): MatchStats;

  getInjuryTime(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setInjuryTime(value?: google_protobuf_wrappers_pb.UInt32Value): MatchStats;
  hasInjuryTime(): boolean;
  clearInjuryTime(): MatchStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchStats.AsObject;
  static toObject(includeInstance: boolean, msg: MatchStats): MatchStats.AsObject;
  static serializeBinaryToWriter(message: MatchStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchStats;
  static deserializeBinaryFromReader(message: MatchStats, reader: jspb.BinaryReader): MatchStats;
}

export namespace MatchStats {
  export type AsObject = {
    pitch?: google_protobuf_wrappers_pb.StringValue.AsObject,
    homeFormation?: google_protobuf_wrappers_pb.StringValue.AsObject,
    awayFormation?: google_protobuf_wrappers_pb.StringValue.AsObject,
    homeScore?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    awayScore?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    homePenScore?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    awayPenScore?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    halfTimeScore?: google_protobuf_wrappers_pb.StringValue.AsObject,
    fullTimeScore?: google_protobuf_wrappers_pb.StringValue.AsObject,
    extraTimeScore?: google_protobuf_wrappers_pb.StringValue.AsObject,
    homeLeaguePosition?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    awayLeaguePosition?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    minutes?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    addedTime?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    extraTime?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    injuryTime?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
  }
}

