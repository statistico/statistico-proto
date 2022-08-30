import * as jspb from 'google-protobuf'



export class Round extends jspb.Message {
  getId(): number;
  setId(value: number): Round;

  getName(): string;
  setName(value: string): Round;

  getSeasonId(): number;
  setSeasonId(value: number): Round;

  getStartDate(): string;
  setStartDate(value: string): Round;

  getEndDate(): string;
  setEndDate(value: string): Round;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Round.AsObject;
  static toObject(includeInstance: boolean, msg: Round): Round.AsObject;
  static serializeBinaryToWriter(message: Round, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Round;
  static deserializeBinaryFromReader(message: Round, reader: jspb.BinaryReader): Round;
}

export namespace Round {
  export type AsObject = {
    id: number,
    name: string,
    seasonId: number,
    startDate: string,
    endDate: string,
  }
}

