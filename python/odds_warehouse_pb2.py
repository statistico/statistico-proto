# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: odds_warehouse.proto
# Protobuf Python Version: 5.28.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    28,
    1,
    '',
    'odds_warehouse.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import common_pb2 as common__pb2
import requests_pb2 as requests__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14odds_warehouse.proto\x12\nstatistico\x1a\x0c\x63ommon.proto\x1a\x0erequests.proto\"L\n\x0c\x45xchangeOdds\x12\r\n\x05price\x18\x01 \x01(\x02\x12\x0c\n\x04size\x18\x02 \x01(\x02\x12\x0c\n\x04side\x18\x03 \x01(\t\x12\x11\n\ttimestamp\x18\x04 \x01(\x04\"\xbb\x01\n\x06Market\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x10\n\x08\x65vent_id\x18\x03 \x01(\x04\x12\x16\n\x0e\x63ompetition_id\x18\x04 \x01(\x04\x12\x11\n\tseason_id\x18\x05 \x01(\x04\x12\x10\n\x08\x65xchange\x18\x06 \x01(\t\x12#\n\tdate_time\x18\x07 \x01(\x0b\x32\x10.statistico.Date\x12#\n\x07runners\x18\x08 \x03(\x0b\x32\x12.statistico.Runner\"O\n\x06Runner\x12\n\n\x02id\x18\x01 \x01(\x04\x12\x0c\n\x04name\x18\x02 \x01(\t\x12+\n\tback_odds\x18\x03 \x01(\x0b\x32\x18.statistico.ExchangeOdds2\xb3\x01\n\x14OddsWarehouseService\x12P\n\x0fGetExchangeOdds\x12\x1f.statistico.ExchangeOddsRequest\x1a\x18.statistico.ExchangeOdds\"\x00\x30\x01\x12I\n\x0fGetEventMarkets\x12\x1e.statistico.EventMarketRequest\x1a\x12.statistico.Market\"\x00\x30\x01\x42\x33Z1github.com/statistico/statistico-proto;statisticob\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'odds_warehouse_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _globals['_EXCHANGEODDS']._serialized_start=66
  _globals['_EXCHANGEODDS']._serialized_end=142
  _globals['_MARKET']._serialized_start=145
  _globals['_MARKET']._serialized_end=332
  _globals['_RUNNER']._serialized_start=334
  _globals['_RUNNER']._serialized_end=413
  _globals['_ODDSWAREHOUSESERVICE']._serialized_start=416
  _globals['_ODDSWAREHOUSESERVICE']._serialized_end=595
# @@protoc_insertion_point(module_scope)
