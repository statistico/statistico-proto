# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: event.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
import requests_pb2 as requests__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0b\x65vent.proto\x12\nstatistico\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x0erequests.proto\"w\n\x15\x46ixtureEventsResponse\x12\x12\n\nfixture_id\x18\x01 \x01(\x04\x12$\n\x05\x63\x61rds\x18\x02 \x03(\x0b\x32\x15.statistico.CardEvent\x12$\n\x05goals\x18\x03 \x03(\x0b\x32\x15.statistico.GoalEvent\"Y\n\tCardEvent\x12\n\n\x02id\x18\x01 \x01(\x04\x12\x0f\n\x07team_id\x18\x02 \x01(\x04\x12\x0c\n\x04type\x18\x03 \x01(\t\x12\x11\n\tplayer_id\x18\x04 \x01(\x04\x12\x0e\n\x06minute\x18\x05 \x01(\r\"\x92\x01\n\tGoalEvent\x12\n\n\x02id\x18\x01 \x01(\x04\x12\x0f\n\x07team_id\x18\x02 \x01(\x04\x12\x11\n\tplayer_id\x18\x03 \x01(\x04\x12\x36\n\x10player_assist_id\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12\x0e\n\x06minute\x18\x05 \x01(\r\x12\r\n\x05score\x18\x06 \x01(\t2`\n\x0c\x45ventService\x12P\n\rFixtureEvents\x12\x1a.statistico.FixtureRequest\x1a!.statistico.FixtureEventsResponse\"\x00\x42\x33Z1github.com/statistico/statistico-proto;statisticob\x06proto3')



_FIXTUREEVENTSRESPONSE = DESCRIPTOR.message_types_by_name['FixtureEventsResponse']
_CARDEVENT = DESCRIPTOR.message_types_by_name['CardEvent']
_GOALEVENT = DESCRIPTOR.message_types_by_name['GoalEvent']
FixtureEventsResponse = _reflection.GeneratedProtocolMessageType('FixtureEventsResponse', (_message.Message,), {
  'DESCRIPTOR' : _FIXTUREEVENTSRESPONSE,
  '__module__' : 'event_pb2'
  # @@protoc_insertion_point(class_scope:statistico.FixtureEventsResponse)
  })
_sym_db.RegisterMessage(FixtureEventsResponse)

CardEvent = _reflection.GeneratedProtocolMessageType('CardEvent', (_message.Message,), {
  'DESCRIPTOR' : _CARDEVENT,
  '__module__' : 'event_pb2'
  # @@protoc_insertion_point(class_scope:statistico.CardEvent)
  })
_sym_db.RegisterMessage(CardEvent)

GoalEvent = _reflection.GeneratedProtocolMessageType('GoalEvent', (_message.Message,), {
  'DESCRIPTOR' : _GOALEVENT,
  '__module__' : 'event_pb2'
  # @@protoc_insertion_point(class_scope:statistico.GoalEvent)
  })
_sym_db.RegisterMessage(GoalEvent)

_EVENTSERVICE = DESCRIPTOR.services_by_name['EventService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _FIXTUREEVENTSRESPONSE._serialized_start=75
  _FIXTUREEVENTSRESPONSE._serialized_end=194
  _CARDEVENT._serialized_start=196
  _CARDEVENT._serialized_end=285
  _GOALEVENT._serialized_start=288
  _GOALEVENT._serialized_end=434
  _EVENTSERVICE._serialized_start=436
  _EVENTSERVICE._serialized_end=532
# @@protoc_insertion_point(module_scope)