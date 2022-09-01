import * as jspb from 'google-protobuf'

import * as enum_pb from './enum_pb';


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

