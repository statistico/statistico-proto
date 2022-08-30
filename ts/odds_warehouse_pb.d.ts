import * as jspb from 'google-protobuf'

import * as enum_pb from './enum_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class MarketRunnerRequest extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): MarketRunnerRequest;

  getRunner(): string;
  setRunner(value: string): MarketRunnerRequest;

  getMinOdds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setMinOdds(value?: google_protobuf_wrappers_pb.FloatValue): MarketRunnerRequest;
  hasMinOdds(): boolean;
  clearMinOdds(): MarketRunnerRequest;

  getMaxOdds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setMaxOdds(value?: google_protobuf_wrappers_pb.FloatValue): MarketRunnerRequest;
  hasMaxOdds(): boolean;
  clearMaxOdds(): MarketRunnerRequest;

  getLine(): string;
  setLine(value: string): MarketRunnerRequest;

  getSide(): enum_pb.SideEnum;
  setSide(value: enum_pb.SideEnum): MarketRunnerRequest;

  getCompetitionIdsList(): Array<number>;
  setCompetitionIdsList(value: Array<number>): MarketRunnerRequest;
  clearCompetitionIdsList(): MarketRunnerRequest;
  addCompetitionIds(value: number, index?: number): MarketRunnerRequest;

  getSeasonIdsList(): Array<number>;
  setSeasonIdsList(value: Array<number>): MarketRunnerRequest;
  clearSeasonIdsList(): MarketRunnerRequest;
  addSeasonIds(value: number, index?: number): MarketRunnerRequest;

  getDatefrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatefrom(value?: google_protobuf_timestamp_pb.Timestamp): MarketRunnerRequest;
  hasDatefrom(): boolean;
  clearDatefrom(): MarketRunnerRequest;

  getDateto(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateto(value?: google_protobuf_timestamp_pb.Timestamp): MarketRunnerRequest;
  hasDateto(): boolean;
  clearDateto(): MarketRunnerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketRunnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketRunnerRequest): MarketRunnerRequest.AsObject;
  static serializeBinaryToWriter(message: MarketRunnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketRunnerRequest;
  static deserializeBinaryFromReader(message: MarketRunnerRequest, reader: jspb.BinaryReader): MarketRunnerRequest;
}

export namespace MarketRunnerRequest {
  export type AsObject = {
    market: string,
    runner: string,
    minOdds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    maxOdds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    line: string,
    side: enum_pb.SideEnum,
    competitionIdsList: Array<number>,
    seasonIdsList: Array<number>,
    datefrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateto?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class MarketRunner extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): MarketRunner;

  getMarketName(): string;
  setMarketName(value: string): MarketRunner;

  getRunnerId(): number;
  setRunnerId(value: number): MarketRunner;

  getRunnerName(): string;
  setRunnerName(value: string): MarketRunner;

  getEventId(): number;
  setEventId(value: number): MarketRunner;

  getCompetitionId(): number;
  setCompetitionId(value: number): MarketRunner;

  getSeasonId(): number;
  setSeasonId(value: number): MarketRunner;

  getEventDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventDate(value?: google_protobuf_timestamp_pb.Timestamp): MarketRunner;
  hasEventDate(): boolean;
  clearEventDate(): MarketRunner;

  getExchange(): string;
  setExchange(value: string): MarketRunner;

  getPrice(): Price | undefined;
  setPrice(value?: Price): MarketRunner;
  hasPrice(): boolean;
  clearPrice(): MarketRunner;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketRunner.AsObject;
  static toObject(includeInstance: boolean, msg: MarketRunner): MarketRunner.AsObject;
  static serializeBinaryToWriter(message: MarketRunner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketRunner;
  static deserializeBinaryFromReader(message: MarketRunner, reader: jspb.BinaryReader): MarketRunner;
}

export namespace MarketRunner {
  export type AsObject = {
    marketId: string,
    marketName: string,
    runnerId: number,
    runnerName: string,
    eventId: number,
    competitionId: number,
    seasonId: number,
    eventDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    exchange: string,
    price?: Price.AsObject,
  }
}

export class Price extends jspb.Message {
  getValue(): number;
  setValue(value: number): Price;

  getSize(): number;
  setSize(value: number): Price;

  getSide(): enum_pb.SideEnum;
  setSide(value: enum_pb.SideEnum): Price;

  getTimestamp(): number;
  setTimestamp(value: number): Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
  static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Price;
  static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
  export type AsObject = {
    value: number,
    size: number,
    side: enum_pb.SideEnum,
    timestamp: number,
  }
}

