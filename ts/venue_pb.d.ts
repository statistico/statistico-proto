import * as jspb from 'google-protobuf'



export class Venue extends jspb.Message {
  getId(): number;
  setId(value: number): Venue;

  getName(): string;
  setName(value: string): Venue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Venue.AsObject;
  static toObject(includeInstance: boolean, msg: Venue): Venue.AsObject;
  static serializeBinaryToWriter(message: Venue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Venue;
  static deserializeBinaryFromReader(message: Venue, reader: jspb.BinaryReader): Venue;
}

export namespace Venue {
  export type AsObject = {
    id: number,
    name: string,
  }
}

