import * as jspb from 'google-protobuf'

import * as enum_pb from './enum_pb';
import * as requests_pb from './requests_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Trade extends jspb.Message {
  getId(): string;
  setId(value: string): Trade;

  getStrategyId(): string;
  setStrategyId(value: string): Trade;

  getExchange(): string;
  setExchange(value: string): Trade;

  getExchangeRef(): string;
  setExchangeRef(value: string): Trade;

  getMarket(): string;
  setMarket(value: string): Trade;

  getRunner(): string;
  setRunner(value: string): Trade;

  getExchangePrice(): number;
  setExchangePrice(value: number): Trade;

  getStatisticoPrice(): number;
  setStatisticoPrice(value: number): Trade;

  getStake(): number;
  setStake(value: number): Trade;

  getSide(): enum_pb.SideEnum;
  setSide(value: enum_pb.SideEnum): Trade;

  getEventId(): number;
  setEventId(value: number): Trade;

  getCompetitionId(): number;
  setCompetitionId(value: number): Trade;

  getSeasonId(): number;
  setSeasonId(value: number): Trade;

  getEventDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventDate(value?: google_protobuf_timestamp_pb.Timestamp): Trade;
  hasEventDate(): boolean;
  clearEventDate(): Trade;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Trade;
  hasTimestamp(): boolean;
  clearTimestamp(): Trade;

  getResult(): enum_pb.TradeResultEnum;
  setResult(value: enum_pb.TradeResultEnum): Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trade.AsObject;
  static toObject(includeInstance: boolean, msg: Trade): Trade.AsObject;
  static serializeBinaryToWriter(message: Trade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trade;
  static deserializeBinaryFromReader(message: Trade, reader: jspb.BinaryReader): Trade;
}

export namespace Trade {
  export type AsObject = {
    id: string,
    strategyId: string,
    exchange: string,
    exchangeRef: string,
    market: string,
    runner: string,
    exchangePrice: number,
    statisticoPrice: number,
    stake: number,
    side: enum_pb.SideEnum,
    eventId: number,
    competitionId: number,
    seasonId: number,
    eventDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    result: enum_pb.TradeResultEnum,
  }
}

