import * as jspb from 'google-protobuf'

import * as enum_pb from './enum_pb';
import * as requests_pb from './requests_pb';
import * as responses_pb from './responses_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Strategy extends jspb.Message {
  getId(): string;
  setId(value: string): Strategy;

  getName(): string;
  setName(value: string): Strategy;

  getUserId(): string;
  setUserId(value: string): Strategy;

  getMarket(): string;
  setMarket(value: string): Strategy;

  getMinOdds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setMinOdds(value?: google_protobuf_wrappers_pb.FloatValue): Strategy;
  hasMinOdds(): boolean;
  clearMinOdds(): Strategy;

  getMaxOdds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setMaxOdds(value?: google_protobuf_wrappers_pb.FloatValue): Strategy;
  hasMaxOdds(): boolean;
  clearMaxOdds(): Strategy;

  getCompetitionIdsList(): Array<number>;
  setCompetitionIdsList(value: Array<number>): Strategy;
  clearCompetitionIdsList(): Strategy;
  addCompetitionIds(value: number, index?: number): Strategy;

  getSide(): enum_pb.SideEnum;
  setSide(value: enum_pb.SideEnum): Strategy;

  getStakingPlan(): StakingPlan | undefined;
  setStakingPlan(value?: StakingPlan): Strategy;
  hasStakingPlan(): boolean;
  clearStakingPlan(): Strategy;

  getStatus(): enum_pb.StrategyStatusEnum;
  setStatus(value: enum_pb.StrategyStatusEnum): Strategy;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Strategy;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Strategy;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Strategy;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Strategy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Strategy.AsObject;
  static toObject(includeInstance: boolean, msg: Strategy): Strategy.AsObject;
  static serializeBinaryToWriter(message: Strategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Strategy;
  static deserializeBinaryFromReader(message: Strategy, reader: jspb.BinaryReader): Strategy;
}

export namespace Strategy {
  export type AsObject = {
    id: string,
    name: string,
    userId: string,
    market: string,
    minOdds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    maxOdds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    competitionIdsList: Array<number>,
    side: enum_pb.SideEnum,
    stakingPlan?: StakingPlan.AsObject,
    status: enum_pb.StrategyStatusEnum,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StakingPlan extends jspb.Message {
  getName(): enum_pb.StakingPlanEnum;
  setName(value: enum_pb.StakingPlanEnum): StakingPlan;

  getValue(): number;
  setValue(value: number): StakingPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakingPlan.AsObject;
  static toObject(includeInstance: boolean, msg: StakingPlan): StakingPlan.AsObject;
  static serializeBinaryToWriter(message: StakingPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakingPlan;
  static deserializeBinaryFromReader(message: StakingPlan, reader: jspb.BinaryReader): StakingPlan;
}

export namespace StakingPlan {
  export type AsObject = {
    name: enum_pb.StakingPlanEnum,
    value: number,
  }
}

