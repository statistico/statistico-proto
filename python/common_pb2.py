# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: common.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0c\x63ommon.proto\x12\nstatistico\" \n\x04\x44\x61te\x12\x0b\n\x03utc\x18\x01 \x01(\x03\x12\x0b\n\x03rfc\x18\x02 \x01(\t\"(\n\x04Odds\x12\r\n\x05price\x18\x01 \x01(\x02\x12\x11\n\tselection\x18\x02 \x01(\tB3Z1github.com/statistico/statistico-proto;statisticob\x06proto3')



_DATE = DESCRIPTOR.message_types_by_name['Date']
_ODDS = DESCRIPTOR.message_types_by_name['Odds']
Date = _reflection.GeneratedProtocolMessageType('Date', (_message.Message,), {
  'DESCRIPTOR' : _DATE,
  '__module__' : 'common_pb2'
  # @@protoc_insertion_point(class_scope:statistico.Date)
  })
_sym_db.RegisterMessage(Date)

Odds = _reflection.GeneratedProtocolMessageType('Odds', (_message.Message,), {
  'DESCRIPTOR' : _ODDS,
  '__module__' : 'common_pb2'
  # @@protoc_insertion_point(class_scope:statistico.Odds)
  })
_sym_db.RegisterMessage(Odds)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _DATE._serialized_start=28
  _DATE._serialized_end=60
  _ODDS._serialized_start=62
  _ODDS._serialized_end=102
# @@protoc_insertion_point(module_scope)
