import * as jspb from 'google-protobuf'

import * as enum_pb from './enum_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class CompetitionRequest extends jspb.Message {
  getCountryIdsList(): Array<number>;
  setCountryIdsList(value: Array<number>): CompetitionRequest;
  clearCountryIdsList(): CompetitionRequest;
  addCountryIds(value: number, index?: number): CompetitionRequest;

  getSort(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSort(value?: google_protobuf_wrappers_pb.StringValue): CompetitionRequest;
  hasSort(): boolean;
  clearSort(): CompetitionRequest;

  getIsCup(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsCup(value?: google_protobuf_wrappers_pb.BoolValue): CompetitionRequest;
  hasIsCup(): boolean;
  clearIsCup(): CompetitionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionRequest): CompetitionRequest.AsObject;
  static serializeBinaryToWriter(message: CompetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionRequest;
  static deserializeBinaryFromReader(message: CompetitionRequest, reader: jspb.BinaryReader): CompetitionRequest;
}

export namespace CompetitionRequest {
  export type AsObject = {
    countryIdsList: Array<number>,
    sort?: google_protobuf_wrappers_pb.StringValue.AsObject,
    isCup?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class CreateStrategyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateStrategyRequest;

  getUserId(): string;
  setUserId(value: string): CreateStrategyRequest;

  getMarket(): string;
  setMarket(value: string): CreateStrategyRequest;

  getMinOdds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setMinOdds(value?: google_protobuf_wrappers_pb.FloatValue): CreateStrategyRequest;
  hasMinOdds(): boolean;
  clearMinOdds(): CreateStrategyRequest;

  getMaxOdds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setMaxOdds(value?: google_protobuf_wrappers_pb.FloatValue): CreateStrategyRequest;
  hasMaxOdds(): boolean;
  clearMaxOdds(): CreateStrategyRequest;

  getSide(): enum_pb.SideEnum;
  setSide(value: enum_pb.SideEnum): CreateStrategyRequest;

  getStakingPlanName(): enum_pb.StakingPlanEnum;
  setStakingPlanName(value: enum_pb.StakingPlanEnum): CreateStrategyRequest;

  getStakingPlanValue(): number;
  setStakingPlanValue(value: number): CreateStrategyRequest;

  getCompetitionIdsList(): Array<number>;
  setCompetitionIdsList(value: Array<number>): CreateStrategyRequest;
  clearCompetitionIdsList(): CreateStrategyRequest;
  addCompetitionIds(value: number, index?: number): CreateStrategyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStrategyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStrategyRequest): CreateStrategyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStrategyRequest;
  static deserializeBinaryFromReader(message: CreateStrategyRequest, reader: jspb.BinaryReader): CreateStrategyRequest;
}

export namespace CreateStrategyRequest {
  export type AsObject = {
    name: string,
    userId: string,
    market: string,
    minOdds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    maxOdds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    side: enum_pb.SideEnum,
    stakingPlanName: enum_pb.StakingPlanEnum,
    stakingPlanValue: number,
    competitionIdsList: Array<number>,
  }
}

export class FixtureRequest extends jspb.Message {
  getFixtureId(): number;
  setFixtureId(value: number): FixtureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FixtureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FixtureRequest): FixtureRequest.AsObject;
  static serializeBinaryToWriter(message: FixtureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FixtureRequest;
  static deserializeBinaryFromReader(message: FixtureRequest, reader: jspb.BinaryReader): FixtureRequest;
}

export namespace FixtureRequest {
  export type AsObject = {
    fixtureId: number,
  }
}

export class FixtureSearchRequest extends jspb.Message {
  getSeasonIdsList(): Array<number>;
  setSeasonIdsList(value: Array<number>): FixtureSearchRequest;
  clearSeasonIdsList(): FixtureSearchRequest;
  addSeasonIds(value: number, index?: number): FixtureSearchRequest;

  getLimit(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setLimit(value?: google_protobuf_wrappers_pb.UInt64Value): FixtureSearchRequest;
  hasLimit(): boolean;
  clearLimit(): FixtureSearchRequest;

  getDateBefore(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDateBefore(value?: google_protobuf_wrappers_pb.StringValue): FixtureSearchRequest;
  hasDateBefore(): boolean;
  clearDateBefore(): FixtureSearchRequest;

  getDateAfter(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDateAfter(value?: google_protobuf_wrappers_pb.StringValue): FixtureSearchRequest;
  hasDateAfter(): boolean;
  clearDateAfter(): FixtureSearchRequest;

  getSort(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSort(value?: google_protobuf_wrappers_pb.StringValue): FixtureSearchRequest;
  hasSort(): boolean;
  clearSort(): FixtureSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FixtureSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FixtureSearchRequest): FixtureSearchRequest.AsObject;
  static serializeBinaryToWriter(message: FixtureSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FixtureSearchRequest;
  static deserializeBinaryFromReader(message: FixtureSearchRequest, reader: jspb.BinaryReader): FixtureSearchRequest;
}

export namespace FixtureSearchRequest {
  export type AsObject = {
    seasonIdsList: Array<number>,
    limit?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    dateBefore?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dateAfter?: google_protobuf_wrappers_pb.StringValue.AsObject,
    sort?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HealthCheckRequest extends jspb.Message {
  getService(): string;
  setService(value: string): HealthCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
  static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
  static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
  export type AsObject = {
    service: string,
  }
}

export class HistoricalResultRequest extends jspb.Message {
  getHomeTeamId(): number;
  setHomeTeamId(value: number): HistoricalResultRequest;

  getAwayTeamId(): number;
  setAwayTeamId(value: number): HistoricalResultRequest;

  getLimit(): number;
  setLimit(value: number): HistoricalResultRequest;

  getDateBefore(): string;
  setDateBefore(value: string): HistoricalResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricalResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricalResultRequest): HistoricalResultRequest.AsObject;
  static serializeBinaryToWriter(message: HistoricalResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricalResultRequest;
  static deserializeBinaryFromReader(message: HistoricalResultRequest, reader: jspb.BinaryReader): HistoricalResultRequest;
}

export namespace HistoricalResultRequest {
  export type AsObject = {
    homeTeamId: number,
    awayTeamId: number,
    limit: number,
    dateBefore: string,
  }
}

export class ListUserStrategiesRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ListUserStrategiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserStrategiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserStrategiesRequest): ListUserStrategiesRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserStrategiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserStrategiesRequest;
  static deserializeBinaryFromReader(message: ListUserStrategiesRequest, reader: jspb.BinaryReader): ListUserStrategiesRequest;
}

export namespace ListUserStrategiesRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ResultRequest extends jspb.Message {
  getFixtureId(): number;
  setFixtureId(value: number): ResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResultRequest): ResultRequest.AsObject;
  static serializeBinaryToWriter(message: ResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultRequest;
  static deserializeBinaryFromReader(message: ResultRequest, reader: jspb.BinaryReader): ResultRequest;
}

export namespace ResultRequest {
  export type AsObject = {
    fixtureId: number,
  }
}

export class SearchTradesRequest extends jspb.Message {
  getStrategyId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStrategyId(value?: google_protobuf_wrappers_pb.StringValue): SearchTradesRequest;
  hasStrategyId(): boolean;
  clearStrategyId(): SearchTradesRequest;

  getMarket(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMarket(value?: google_protobuf_wrappers_pb.StringValue): SearchTradesRequest;
  hasMarket(): boolean;
  clearMarket(): SearchTradesRequest;

  getCompetitionId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setCompetitionId(value?: google_protobuf_wrappers_pb.UInt64Value): SearchTradesRequest;
  hasCompetitionId(): boolean;
  clearCompetitionId(): SearchTradesRequest;

  getStatus(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStatus(value?: google_protobuf_wrappers_pb.StringValue): SearchTradesRequest;
  hasStatus(): boolean;
  clearStatus(): SearchTradesRequest;

  getExchange(): google_protobuf_wrappers_pb.StringValue | undefined;
  setExchange(value?: google_protobuf_wrappers_pb.StringValue): SearchTradesRequest;
  hasExchange(): boolean;
  clearExchange(): SearchTradesRequest;

  getDateFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateFrom(value?: google_protobuf_timestamp_pb.Timestamp): SearchTradesRequest;
  hasDateFrom(): boolean;
  clearDateFrom(): SearchTradesRequest;

  getDateTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateTo(value?: google_protobuf_timestamp_pb.Timestamp): SearchTradesRequest;
  hasDateTo(): boolean;
  clearDateTo(): SearchTradesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTradesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTradesRequest): SearchTradesRequest.AsObject;
  static serializeBinaryToWriter(message: SearchTradesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTradesRequest;
  static deserializeBinaryFromReader(message: SearchTradesRequest, reader: jspb.BinaryReader): SearchTradesRequest;
}

export namespace SearchTradesRequest {
  export type AsObject = {
    strategyId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    market?: google_protobuf_wrappers_pb.StringValue.AsObject,
    competitionId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    status?: google_protobuf_wrappers_pb.StringValue.AsObject,
    exchange?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dateFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SeasonCompetitionRequest extends jspb.Message {
  getCompetitionId(): number;
  setCompetitionId(value: number): SeasonCompetitionRequest;

  getSort(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSort(value?: google_protobuf_wrappers_pb.StringValue): SeasonCompetitionRequest;
  hasSort(): boolean;
  clearSort(): SeasonCompetitionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeasonCompetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SeasonCompetitionRequest): SeasonCompetitionRequest.AsObject;
  static serializeBinaryToWriter(message: SeasonCompetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeasonCompetitionRequest;
  static deserializeBinaryFromReader(message: SeasonCompetitionRequest, reader: jspb.BinaryReader): SeasonCompetitionRequest;
}

export namespace SeasonCompetitionRequest {
  export type AsObject = {
    competitionId: number,
    sort?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class SeasonFixtureRequest extends jspb.Message {
  getSeasonId(): number;
  setSeasonId(value: number): SeasonFixtureRequest;

  getDateFrom(): string;
  setDateFrom(value: string): SeasonFixtureRequest;

  getDateTo(): string;
  setDateTo(value: string): SeasonFixtureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeasonFixtureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SeasonFixtureRequest): SeasonFixtureRequest.AsObject;
  static serializeBinaryToWriter(message: SeasonFixtureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeasonFixtureRequest;
  static deserializeBinaryFromReader(message: SeasonFixtureRequest, reader: jspb.BinaryReader): SeasonFixtureRequest;
}

export namespace SeasonFixtureRequest {
  export type AsObject = {
    seasonId: number,
    dateFrom: string,
    dateTo: string,
  }
}

export class SeasonRequest extends jspb.Message {
  getSeasonId(): number;
  setSeasonId(value: number): SeasonRequest;

  getDateBefore(): string;
  setDateBefore(value: string): SeasonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeasonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SeasonRequest): SeasonRequest.AsObject;
  static serializeBinaryToWriter(message: SeasonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeasonRequest;
  static deserializeBinaryFromReader(message: SeasonRequest, reader: jspb.BinaryReader): SeasonRequest;
}

export namespace SeasonRequest {
  export type AsObject = {
    seasonId: number,
    dateBefore: string,
  }
}

export class SeasonTeamsRequest extends jspb.Message {
  getSeasonId(): number;
  setSeasonId(value: number): SeasonTeamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeasonTeamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SeasonTeamsRequest): SeasonTeamsRequest.AsObject;
  static serializeBinaryToWriter(message: SeasonTeamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeasonTeamsRequest;
  static deserializeBinaryFromReader(message: SeasonTeamsRequest, reader: jspb.BinaryReader): SeasonTeamsRequest;
}

export namespace SeasonTeamsRequest {
  export type AsObject = {
    seasonId: number,
  }
}

export class TeamRequest extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): TeamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamRequest): TeamRequest.AsObject;
  static serializeBinaryToWriter(message: TeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamRequest;
  static deserializeBinaryFromReader(message: TeamRequest, reader: jspb.BinaryReader): TeamRequest;
}

export namespace TeamRequest {
  export type AsObject = {
    teamId: number,
  }
}

export class TeamResultRequest extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): TeamResultRequest;

  getLimit(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setLimit(value?: google_protobuf_wrappers_pb.UInt64Value): TeamResultRequest;
  hasLimit(): boolean;
  clearLimit(): TeamResultRequest;

  getDateBefore(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDateBefore(value?: google_protobuf_wrappers_pb.StringValue): TeamResultRequest;
  hasDateBefore(): boolean;
  clearDateBefore(): TeamResultRequest;

  getDateAfter(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDateAfter(value?: google_protobuf_wrappers_pb.StringValue): TeamResultRequest;
  hasDateAfter(): boolean;
  clearDateAfter(): TeamResultRequest;

  getVenue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setVenue(value?: google_protobuf_wrappers_pb.StringValue): TeamResultRequest;
  hasVenue(): boolean;
  clearVenue(): TeamResultRequest;

  getSeasonIdsList(): Array<number>;
  setSeasonIdsList(value: Array<number>): TeamResultRequest;
  clearSeasonIdsList(): TeamResultRequest;
  addSeasonIds(value: number, index?: number): TeamResultRequest;

  getSort(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSort(value?: google_protobuf_wrappers_pb.StringValue): TeamResultRequest;
  hasSort(): boolean;
  clearSort(): TeamResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamResultRequest): TeamResultRequest.AsObject;
  static serializeBinaryToWriter(message: TeamResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamResultRequest;
  static deserializeBinaryFromReader(message: TeamResultRequest, reader: jspb.BinaryReader): TeamResultRequest;
}

export namespace TeamResultRequest {
  export type AsObject = {
    teamId: number,
    limit?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    dateBefore?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dateAfter?: google_protobuf_wrappers_pb.StringValue.AsObject,
    venue?: google_protobuf_wrappers_pb.StringValue.AsObject,
    seasonIdsList: Array<number>,
    sort?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class TeamStatRequest extends jspb.Message {
  getStat(): string;
  setStat(value: string): TeamStatRequest;

  getTeamId(): number;
  setTeamId(value: number): TeamStatRequest;

  getLimit(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setLimit(value?: google_protobuf_wrappers_pb.UInt64Value): TeamStatRequest;
  hasLimit(): boolean;
  clearLimit(): TeamStatRequest;

  getDateBefore(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDateBefore(value?: google_protobuf_wrappers_pb.StringValue): TeamStatRequest;
  hasDateBefore(): boolean;
  clearDateBefore(): TeamStatRequest;

  getDateAfter(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDateAfter(value?: google_protobuf_wrappers_pb.StringValue): TeamStatRequest;
  hasDateAfter(): boolean;
  clearDateAfter(): TeamStatRequest;

  getVenue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setVenue(value?: google_protobuf_wrappers_pb.StringValue): TeamStatRequest;
  hasVenue(): boolean;
  clearVenue(): TeamStatRequest;

  getSeasonIdsList(): Array<number>;
  setSeasonIdsList(value: Array<number>): TeamStatRequest;
  clearSeasonIdsList(): TeamStatRequest;
  addSeasonIds(value: number, index?: number): TeamStatRequest;

  getSort(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSort(value?: google_protobuf_wrappers_pb.StringValue): TeamStatRequest;
  hasSort(): boolean;
  clearSort(): TeamStatRequest;

  getOpponent(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setOpponent(value?: google_protobuf_wrappers_pb.BoolValue): TeamStatRequest;
  hasOpponent(): boolean;
  clearOpponent(): TeamStatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamStatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamStatRequest): TeamStatRequest.AsObject;
  static serializeBinaryToWriter(message: TeamStatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamStatRequest;
  static deserializeBinaryFromReader(message: TeamStatRequest, reader: jspb.BinaryReader): TeamStatRequest;
}

export namespace TeamStatRequest {
  export type AsObject = {
    stat: string,
    teamId: number,
    limit?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    dateBefore?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dateAfter?: google_protobuf_wrappers_pb.StringValue.AsObject,
    venue?: google_protobuf_wrappers_pb.StringValue.AsObject,
    seasonIdsList: Array<number>,
    sort?: google_protobuf_wrappers_pb.StringValue.AsObject,
    opponent?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

