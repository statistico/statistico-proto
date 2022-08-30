import * as jspb from 'google-protobuf'

import * as requests_pb from './requests_pb';


export class Competition extends jspb.Message {
  getId(): number;
  setId(value: number): Competition;

  getName(): string;
  setName(value: string): Competition;

  getIsCup(): boolean;
  setIsCup(value: boolean): Competition;

  getCountryId(): number;
  setCountryId(value: number): Competition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Competition.AsObject;
  static toObject(includeInstance: boolean, msg: Competition): Competition.AsObject;
  static serializeBinaryToWriter(message: Competition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Competition;
  static deserializeBinaryFromReader(message: Competition, reader: jspb.BinaryReader): Competition;
}

export namespace Competition {
  export type AsObject = {
    id: number,
    name: string,
    isCup: boolean,
    countryId: number,
  }
}

