import * as jspb from 'google-protobuf'



export class EventRequest extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): EventRequest;

  getMarket(): string;
  setMarket(value: string): EventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EventRequest): EventRequest.AsObject;
  static serializeBinaryToWriter(message: EventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventRequest;
  static deserializeBinaryFromReader(message: EventRequest, reader: jspb.BinaryReader): EventRequest;
}

export namespace EventRequest {
  export type AsObject = {
    eventId: number,
    market: string,
  }
}

export class EventMarket extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): EventMarket;

  getMarket(): string;
  setMarket(value: string): EventMarket;

  getOddsList(): Array<Odds>;
  setOddsList(value: Array<Odds>): EventMarket;
  clearOddsList(): EventMarket;
  addOdds(value?: Odds, index?: number): Odds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventMarket.AsObject;
  static toObject(includeInstance: boolean, msg: EventMarket): EventMarket.AsObject;
  static serializeBinaryToWriter(message: EventMarket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventMarket;
  static deserializeBinaryFromReader(message: EventMarket, reader: jspb.BinaryReader): EventMarket;
}

export namespace EventMarket {
  export type AsObject = {
    eventId: number,
    market: string,
    oddsList: Array<Odds.AsObject>,
  }
}

export class Odds extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): Odds;

  getSelection(): string;
  setSelection(value: string): Odds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Odds.AsObject;
  static toObject(includeInstance: boolean, msg: Odds): Odds.AsObject;
  static serializeBinaryToWriter(message: Odds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Odds;
  static deserializeBinaryFromReader(message: Odds, reader: jspb.BinaryReader): Odds;
}

export namespace Odds {
  export type AsObject = {
    price: number,
    selection: string,
  }
}

