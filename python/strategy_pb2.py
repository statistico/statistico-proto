# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: strategy.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import enum_pb2 as enum__pb2
import requests_pb2 as requests__pb2
import utility_pb2 as utility__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0estrategy.proto\x12\nstatistico\x1a\nenum.proto\x1a\x0erequests.proto\x1a\rutility.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/wrappers.proto\"\xa0\x03\n\x08Strategy\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0f\n\x07user_id\x18\x03 \x01(\t\x12&\n\x06market\x18\x04 \x01(\x0e\x32\x16.statistico.MarketEnum\x12*\n\x08\x65xchange\x18\x05 \x01(\x0e\x32\x18.statistico.ExchangeEnum\x12-\n\x08min_odds\x18\x06 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12-\n\x08max_odds\x18\x07 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12\x17\n\x0f\x63ompetition_ids\x18\x08 \x03(\x04\x12-\n\x0cstaking_plan\x18\t \x01(\x0b\x32\x17.statistico.StakingPlan\x12.\n\x06status\x18\n \x01(\x0e\x32\x1e.statistico.StrategyStatusEnum\x12\x10\n\x08\x62\x61nkroll\x18\x0b \x01(\x02\x12-\n\ttimestamp\x18\x0c \x01(\x0b\x32\x1a.google.protobuf.Timestamp2\xb5\x01\n\x0fStrategyService\x12K\n\x0e\x43reateStrategy\x12!.statistico.CreateStrategyRequest\x1a\x14.statistico.Strategy\"\x00\x12U\n\x12ListUserStrategies\x12%.statistico.ListUserStrategiesRequest\x1a\x14.statistico.Strategy\"\x00\x30\x01\x42\x33Z1github.com/statistico/statistico-proto;statisticob\x06proto3')



_STRATEGY = DESCRIPTOR.message_types_by_name['Strategy']
Strategy = _reflection.GeneratedProtocolMessageType('Strategy', (_message.Message,), {
  'DESCRIPTOR' : _STRATEGY,
  '__module__' : 'strategy_pb2'
  # @@protoc_insertion_point(class_scope:statistico.Strategy)
  })
_sym_db.RegisterMessage(Strategy)

_STRATEGYSERVICE = DESCRIPTOR.services_by_name['StrategyService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _STRATEGY._serialized_start=139
  _STRATEGY._serialized_end=555
  _STRATEGYSERVICE._serialized_start=558
  _STRATEGYSERVICE._serialized_end=739
# @@protoc_insertion_point(module_scope)
