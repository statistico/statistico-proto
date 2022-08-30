import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as requests_pb from './requests_pb';


export class FixtureEventsResponse extends jspb.Message {
  getFixtureId(): number;
  setFixtureId(value: number): FixtureEventsResponse;

  getCardsList(): Array<CardEvent>;
  setCardsList(value: Array<CardEvent>): FixtureEventsResponse;
  clearCardsList(): FixtureEventsResponse;
  addCards(value?: CardEvent, index?: number): CardEvent;

  getGoalsList(): Array<GoalEvent>;
  setGoalsList(value: Array<GoalEvent>): FixtureEventsResponse;
  clearGoalsList(): FixtureEventsResponse;
  addGoals(value?: GoalEvent, index?: number): GoalEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FixtureEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FixtureEventsResponse): FixtureEventsResponse.AsObject;
  static serializeBinaryToWriter(message: FixtureEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FixtureEventsResponse;
  static deserializeBinaryFromReader(message: FixtureEventsResponse, reader: jspb.BinaryReader): FixtureEventsResponse;
}

export namespace FixtureEventsResponse {
  export type AsObject = {
    fixtureId: number,
    cardsList: Array<CardEvent.AsObject>,
    goalsList: Array<GoalEvent.AsObject>,
  }
}

export class CardEvent extends jspb.Message {
  getId(): number;
  setId(value: number): CardEvent;

  getTeamId(): number;
  setTeamId(value: number): CardEvent;

  getType(): string;
  setType(value: string): CardEvent;

  getPlayerId(): number;
  setPlayerId(value: number): CardEvent;

  getMinute(): number;
  setMinute(value: number): CardEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CardEvent): CardEvent.AsObject;
  static serializeBinaryToWriter(message: CardEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardEvent;
  static deserializeBinaryFromReader(message: CardEvent, reader: jspb.BinaryReader): CardEvent;
}

export namespace CardEvent {
  export type AsObject = {
    id: number,
    teamId: number,
    type: string,
    playerId: number,
    minute: number,
  }
}

export class GoalEvent extends jspb.Message {
  getId(): number;
  setId(value: number): GoalEvent;

  getTeamId(): number;
  setTeamId(value: number): GoalEvent;

  getPlayerId(): number;
  setPlayerId(value: number): GoalEvent;

  getPlayerAssistId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPlayerAssistId(value?: google_protobuf_wrappers_pb.UInt64Value): GoalEvent;
  hasPlayerAssistId(): boolean;
  clearPlayerAssistId(): GoalEvent;

  getMinute(): number;
  setMinute(value: number): GoalEvent;

  getScore(): string;
  setScore(value: string): GoalEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalEvent.AsObject;
  static toObject(includeInstance: boolean, msg: GoalEvent): GoalEvent.AsObject;
  static serializeBinaryToWriter(message: GoalEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalEvent;
  static deserializeBinaryFromReader(message: GoalEvent, reader: jspb.BinaryReader): GoalEvent;
}

export namespace GoalEvent {
  export type AsObject = {
    id: number,
    teamId: number,
    playerId: number,
    playerAssistId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    minute: number,
    score: string,
  }
}

