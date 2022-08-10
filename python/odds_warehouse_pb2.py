# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: odds_warehouse.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import enum_pb2 as enum__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14odds_warehouse.proto\x12\nstatistico\x1a\nenum.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/wrappers.proto\"\xcc\x02\n\x13MarketRunnerRequest\x12\x0e\n\x06market\x18\x01 \x01(\t\x12\x0e\n\x06runner\x18\x02 \x01(\t\x12-\n\x08min_odds\x18\x03 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12-\n\x08max_odds\x18\x04 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12\x0c\n\x04line\x18\x05 \x01(\t\x12\"\n\x04side\x18\x06 \x01(\x0e\x32\x14.statistico.SideEnum\x12\x17\n\x0f\x63ompetition_ids\x18\x07 \x03(\x04\x12\x12\n\nseason_ids\x18\x08 \x03(\x04\x12,\n\x08\x64\x61teFrom\x18\t \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12*\n\x06\x64\x61teTo\x18\n \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"\xff\x01\n\x0cMarketRunner\x12\x11\n\tmarket_id\x18\x01 \x01(\t\x12\x13\n\x0bmarket_name\x18\x02 \x01(\t\x12\x11\n\trunner_id\x18\x03 \x01(\x04\x12\x13\n\x0brunner_name\x18\x04 \x01(\t\x12\x10\n\x08\x65vent_id\x18\x05 \x01(\x04\x12\x16\n\x0e\x63ompetition_id\x18\x06 \x01(\x04\x12\x11\n\tseason_id\x18\x07 \x01(\x04\x12.\n\nevent_date\x18\x08 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x10\n\x08\x65xchange\x18\t \x01(\t\x12 \n\x05price\x18\n \x01(\x0b\x32\x11.statistico.Price\"[\n\x05Price\x12\r\n\x05value\x18\x01 \x01(\x02\x12\x0c\n\x04size\x18\x02 \x01(\x02\x12\"\n\x04side\x18\x03 \x01(\x0e\x32\x14.statistico.SideEnum\x12\x11\n\ttimestamp\x18\x04 \x01(\x03\x32k\n\x14OddsWarehouseService\x12S\n\x12MarketRunnerSearch\x12\x1f.statistico.MarketRunnerRequest\x1a\x18.statistico.MarketRunner\"\x00\x30\x01\x42\x33Z1github.com/statistico/statistico-proto;statisticob\x06proto3')



_MARKETRUNNERREQUEST = DESCRIPTOR.message_types_by_name['MarketRunnerRequest']
_MARKETRUNNER = DESCRIPTOR.message_types_by_name['MarketRunner']
_PRICE = DESCRIPTOR.message_types_by_name['Price']
MarketRunnerRequest = _reflection.GeneratedProtocolMessageType('MarketRunnerRequest', (_message.Message,), {
  'DESCRIPTOR' : _MARKETRUNNERREQUEST,
  '__module__' : 'odds_warehouse_pb2'
  # @@protoc_insertion_point(class_scope:statistico.MarketRunnerRequest)
  })
_sym_db.RegisterMessage(MarketRunnerRequest)

MarketRunner = _reflection.GeneratedProtocolMessageType('MarketRunner', (_message.Message,), {
  'DESCRIPTOR' : _MARKETRUNNER,
  '__module__' : 'odds_warehouse_pb2'
  # @@protoc_insertion_point(class_scope:statistico.MarketRunner)
  })
_sym_db.RegisterMessage(MarketRunner)

Price = _reflection.GeneratedProtocolMessageType('Price', (_message.Message,), {
  'DESCRIPTOR' : _PRICE,
  '__module__' : 'odds_warehouse_pb2'
  # @@protoc_insertion_point(class_scope:statistico.Price)
  })
_sym_db.RegisterMessage(Price)

_ODDSWAREHOUSESERVICE = DESCRIPTOR.services_by_name['OddsWarehouseService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _MARKETRUNNERREQUEST._serialized_start=114
  _MARKETRUNNERREQUEST._serialized_end=446
  _MARKETRUNNER._serialized_start=449
  _MARKETRUNNER._serialized_end=704
  _PRICE._serialized_start=706
  _PRICE._serialized_end=797
  _ODDSWAREHOUSESERVICE._serialized_start=799
  _ODDSWAREHOUSESERVICE._serialized_end=906
# @@protoc_insertion_point(module_scope)
