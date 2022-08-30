import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';
import * as competition_pb from './competition_pb';
import * as requests_pb from './requests_pb';
import * as round_pb from './round_pb';
import * as season_pb from './season_pb';
import * as team_pb from './team_pb';
import * as venue_pb from './venue_pb';


export class Fixture extends jspb.Message {
  getId(): number;
  setId(value: number): Fixture;

  getCompetition(): competition_pb.Competition | undefined;
  setCompetition(value?: competition_pb.Competition): Fixture;
  hasCompetition(): boolean;
  clearCompetition(): Fixture;

  getSeason(): season_pb.Season | undefined;
  setSeason(value?: season_pb.Season): Fixture;
  hasSeason(): boolean;
  clearSeason(): Fixture;

  getHomeTeam(): team_pb.Team | undefined;
  setHomeTeam(value?: team_pb.Team): Fixture;
  hasHomeTeam(): boolean;
  clearHomeTeam(): Fixture;

  getAwayTeam(): team_pb.Team | undefined;
  setAwayTeam(value?: team_pb.Team): Fixture;
  hasAwayTeam(): boolean;
  clearAwayTeam(): Fixture;

  getRound(): round_pb.Round | undefined;
  setRound(value?: round_pb.Round): Fixture;
  hasRound(): boolean;
  clearRound(): Fixture;

  getVenue(): venue_pb.Venue | undefined;
  setVenue(value?: venue_pb.Venue): Fixture;
  hasVenue(): boolean;
  clearVenue(): Fixture;

  getDateTime(): common_pb.Date | undefined;
  setDateTime(value?: common_pb.Date): Fixture;
  hasDateTime(): boolean;
  clearDateTime(): Fixture;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fixture.AsObject;
  static toObject(includeInstance: boolean, msg: Fixture): Fixture.AsObject;
  static serializeBinaryToWriter(message: Fixture, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fixture;
  static deserializeBinaryFromReader(message: Fixture, reader: jspb.BinaryReader): Fixture;
}

export namespace Fixture {
  export type AsObject = {
    id: number,
    competition?: competition_pb.Competition.AsObject,
    season?: season_pb.Season.AsObject,
    homeTeam?: team_pb.Team.AsObject,
    awayTeam?: team_pb.Team.AsObject,
    round?: round_pb.Round.AsObject,
    venue?: venue_pb.Venue.AsObject,
    dateTime?: common_pb.Date.AsObject,
  }
}

