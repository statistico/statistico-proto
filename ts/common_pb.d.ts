import * as jspb from 'google-protobuf'



export class Date extends jspb.Message {
  getUtc(): number;
  setUtc(value: number): Date;

  getRfc(): string;
  setRfc(value: string): Date;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Date.AsObject;
  static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
  static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Date;
  static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
}

export namespace Date {
  export type AsObject = {
    utc: number,
    rfc: string,
  }
}

