# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: odds_compiler.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import common_pb2 as common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x13odds_compiler.proto\x12\nstatistico\x1a\x0c\x63ommon.proto\"0\n\x0c\x45ventRequest\x12\x10\n\x08\x65vent_id\x18\x01 \x01(\x04\x12\x0e\n\x06market\x18\x02 \x01(\t\"O\n\x0b\x45ventMarket\x12\x10\n\x08\x65vent_id\x18\x01 \x01(\x04\x12\x0e\n\x06market\x18\x02 \x01(\t\x12\x1e\n\x04odds\x18\x03 \x03(\x0b\x32\x10.statistico.Odds2\\\n\x13OddsCompilerService\x12\x45\n\x0eGetEventMarket\x12\x18.statistico.EventRequest\x1a\x17.statistico.EventMarket\"\x00\x42\x33Z1github.com/statistico/statistico-proto;statisticob\x06proto3')



_EVENTREQUEST = DESCRIPTOR.message_types_by_name['EventRequest']
_EVENTMARKET = DESCRIPTOR.message_types_by_name['EventMarket']
EventRequest = _reflection.GeneratedProtocolMessageType('EventRequest', (_message.Message,), {
  'DESCRIPTOR' : _EVENTREQUEST,
  '__module__' : 'odds_compiler_pb2'
  # @@protoc_insertion_point(class_scope:statistico.EventRequest)
  })
_sym_db.RegisterMessage(EventRequest)

EventMarket = _reflection.GeneratedProtocolMessageType('EventMarket', (_message.Message,), {
  'DESCRIPTOR' : _EVENTMARKET,
  '__module__' : 'odds_compiler_pb2'
  # @@protoc_insertion_point(class_scope:statistico.EventMarket)
  })
_sym_db.RegisterMessage(EventMarket)

_ODDSCOMPILERSERVICE = DESCRIPTOR.services_by_name['OddsCompilerService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _EVENTREQUEST._serialized_start=49
  _EVENTREQUEST._serialized_end=97
  _EVENTMARKET._serialized_start=99
  _EVENTMARKET._serialized_end=178
  _ODDSCOMPILERSERVICE._serialized_start=180
  _ODDSCOMPILERSERVICE._serialized_end=272
# @@protoc_insertion_point(module_scope)
