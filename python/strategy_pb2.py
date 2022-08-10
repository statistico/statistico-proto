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
import filter_pb2 as filter__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0estrategy.proto\x12\nstatistico\x1a\nenum.proto\x1a\x0c\x66ilter.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/wrappers.proto\"\xad\x03\n\x14\x42uildStrategyRequest\x12\x0e\n\x06market\x18\x01 \x01(\t\x12\x0e\n\x06runner\x18\x02 \x01(\t\x12-\n\x08min_odds\x18\x03 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12-\n\x08max_odds\x18\x04 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12\x0c\n\x04line\x18\x05 \x01(\t\x12\"\n\x04side\x18\x06 \x01(\x0e\x32\x14.statistico.SideEnum\x12\x17\n\x0f\x63ompetition_ids\x18\x07 \x03(\x04\x12\x12\n\nseason_ids\x18\x08 \x03(\x04\x12,\n\x08\x64\x61teFrom\x18\t \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12*\n\x06\x64\x61teTo\x18\n \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x30\n\x0eresult_filters\x18\x0b \x03(\x0b\x32\x18.statistico.ResultFilter\x12,\n\x0cstat_filters\x18\x0c \x03(\x0b\x32\x16.statistico.StatFilter\",\n\x19ListUserStrategiesRequest\x12\x0f\n\x07user_id\x18\x01 \x01(\t\"\xb2\x03\n\x13SaveStrategyRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12\x0e\n\x06market\x18\x03 \x01(\t\x12\x0e\n\x06runner\x18\x04 \x01(\t\x12-\n\x08min_odds\x18\x05 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12-\n\x08max_odds\x18\x06 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12\"\n\x04side\x18\x07 \x01(\x0e\x32\x14.statistico.SideEnum\x12\x17\n\x0f\x63ompetition_ids\x18\x08 \x03(\x04\x12\x30\n\x0eresult_filters\x18\t \x03(\x0b\x32\x18.statistico.ResultFilter\x12,\n\x0cstat_filters\x18\n \x03(\x0b\x32\x16.statistico.StatFilter\x12.\n\nvisibility\x18\x0b \x01(\x0e\x32\x1a.statistico.VisibilityEnum\x12-\n\x0cstaking_plan\x18\x0e \x01(\x0b\x32\x17.statistico.StakingPlan\"\xd4\x04\n\x08Strategy\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12\x0f\n\x07user_id\x18\x04 \x01(\t\x12\x0e\n\x06market\x18\x05 \x01(\t\x12\x0e\n\x06runner\x18\x06 \x01(\t\x12-\n\x08min_odds\x18\x07 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12-\n\x08max_odds\x18\x08 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12\x17\n\x0f\x63ompetition_ids\x18\t \x03(\x04\x12\"\n\x04side\x18\n \x01(\x0e\x32\x14.statistico.SideEnum\x12.\n\nvisibility\x18\x0b \x01(\x0e\x32\x1a.statistico.VisibilityEnum\x12.\n\x06status\x18\x0c \x01(\x0e\x32\x1e.statistico.StrategyStatusEnum\x12-\n\x0cstaking_plan\x18\r \x01(\x0b\x32\x17.statistico.StakingPlan\x12\x30\n\x0eresult_filters\x18\x0e \x03(\x0b\x32\x18.statistico.ResultFilter\x12,\n\x0cstat_filters\x18\x0f \x03(\x0b\x32\x16.statistico.StatFilter\x12.\n\ncreated_at\x18\x10 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12.\n\nupdated_at\x18\x11 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"\x8d\x02\n\rStrategyTrade\x12\x13\n\x0bmarket_name\x18\x01 \x01(\t\x12\x13\n\x0brunner_name\x18\x02 \x01(\t\x12\x14\n\x0crunner_price\x18\x03 \x01(\x02\x12\"\n\x04side\x18\x04 \x01(\x0e\x32\x14.statistico.SideEnum\x12\x10\n\x08\x65vent_id\x18\x05 \x01(\x04\x12\x16\n\x0e\x63ompetition_id\x18\x06 \x01(\x04\x12\x11\n\tseason_id\x18\x07 \x01(\x04\x12.\n\nevent_date\x18\x08 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12+\n\x06result\x18\t \x01(\x0e\x32\x1b.statistico.TradeResultEnum\"G\n\x0bStakingPlan\x12)\n\x04name\x18\x01 \x01(\x0e\x32\x1b.statistico.StakingPlanEnum\x12\r\n\x05value\x18\x02 \x01(\x02\"%\n\x12HealthCheckRequest\x12\x0f\n\x07service\x18\x01 \x01(\t\"&\n\x13HealthCheckResponse\x12\x0f\n\x07message\x18\x01 \x01(\t2\xd5\x02\n\x0fStrategyService\x12P\n\rBuildStrategy\x12 .statistico.BuildStrategyRequest\x1a\x19.statistico.StrategyTrade\"\x00\x30\x01\x12G\n\x0cSaveStrategy\x12\x1f.statistico.SaveStrategyRequest\x1a\x14.statistico.Strategy\"\x00\x12U\n\x12ListUserStrategies\x12%.statistico.ListUserStrategiesRequest\x1a\x14.statistico.Strategy\"\x00\x30\x01\x12P\n\x0bHealthCheck\x12\x1e.statistico.HealthCheckRequest\x1a\x1f.statistico.HealthCheckResponse\"\x00\x42\x33Z1github.com/statistico/statistico-proto;statisticob\x06proto3')



_BUILDSTRATEGYREQUEST = DESCRIPTOR.message_types_by_name['BuildStrategyRequest']
_LISTUSERSTRATEGIESREQUEST = DESCRIPTOR.message_types_by_name['ListUserStrategiesRequest']
_SAVESTRATEGYREQUEST = DESCRIPTOR.message_types_by_name['SaveStrategyRequest']
_STRATEGY = DESCRIPTOR.message_types_by_name['Strategy']
_STRATEGYTRADE = DESCRIPTOR.message_types_by_name['StrategyTrade']
_STAKINGPLAN = DESCRIPTOR.message_types_by_name['StakingPlan']
_HEALTHCHECKREQUEST = DESCRIPTOR.message_types_by_name['HealthCheckRequest']
_HEALTHCHECKRESPONSE = DESCRIPTOR.message_types_by_name['HealthCheckResponse']
BuildStrategyRequest = _reflection.GeneratedProtocolMessageType('BuildStrategyRequest', (_message.Message,), {
  'DESCRIPTOR' : _BUILDSTRATEGYREQUEST,
  '__module__' : 'strategy_pb2'
  # @@protoc_insertion_point(class_scope:statistico.BuildStrategyRequest)
  })
_sym_db.RegisterMessage(BuildStrategyRequest)

ListUserStrategiesRequest = _reflection.GeneratedProtocolMessageType('ListUserStrategiesRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTUSERSTRATEGIESREQUEST,
  '__module__' : 'strategy_pb2'
  # @@protoc_insertion_point(class_scope:statistico.ListUserStrategiesRequest)
  })
_sym_db.RegisterMessage(ListUserStrategiesRequest)

SaveStrategyRequest = _reflection.GeneratedProtocolMessageType('SaveStrategyRequest', (_message.Message,), {
  'DESCRIPTOR' : _SAVESTRATEGYREQUEST,
  '__module__' : 'strategy_pb2'
  # @@protoc_insertion_point(class_scope:statistico.SaveStrategyRequest)
  })
_sym_db.RegisterMessage(SaveStrategyRequest)

Strategy = _reflection.GeneratedProtocolMessageType('Strategy', (_message.Message,), {
  'DESCRIPTOR' : _STRATEGY,
  '__module__' : 'strategy_pb2'
  # @@protoc_insertion_point(class_scope:statistico.Strategy)
  })
_sym_db.RegisterMessage(Strategy)

StrategyTrade = _reflection.GeneratedProtocolMessageType('StrategyTrade', (_message.Message,), {
  'DESCRIPTOR' : _STRATEGYTRADE,
  '__module__' : 'strategy_pb2'
  # @@protoc_insertion_point(class_scope:statistico.StrategyTrade)
  })
_sym_db.RegisterMessage(StrategyTrade)

StakingPlan = _reflection.GeneratedProtocolMessageType('StakingPlan', (_message.Message,), {
  'DESCRIPTOR' : _STAKINGPLAN,
  '__module__' : 'strategy_pb2'
  # @@protoc_insertion_point(class_scope:statistico.StakingPlan)
  })
_sym_db.RegisterMessage(StakingPlan)

HealthCheckRequest = _reflection.GeneratedProtocolMessageType('HealthCheckRequest', (_message.Message,), {
  'DESCRIPTOR' : _HEALTHCHECKREQUEST,
  '__module__' : 'strategy_pb2'
  # @@protoc_insertion_point(class_scope:statistico.HealthCheckRequest)
  })
_sym_db.RegisterMessage(HealthCheckRequest)

HealthCheckResponse = _reflection.GeneratedProtocolMessageType('HealthCheckResponse', (_message.Message,), {
  'DESCRIPTOR' : _HEALTHCHECKRESPONSE,
  '__module__' : 'strategy_pb2'
  # @@protoc_insertion_point(class_scope:statistico.HealthCheckResponse)
  })
_sym_db.RegisterMessage(HealthCheckResponse)

_STRATEGYSERVICE = DESCRIPTOR.services_by_name['StrategyService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _BUILDSTRATEGYREQUEST._serialized_start=122
  _BUILDSTRATEGYREQUEST._serialized_end=551
  _LISTUSERSTRATEGIESREQUEST._serialized_start=553
  _LISTUSERSTRATEGIESREQUEST._serialized_end=597
  _SAVESTRATEGYREQUEST._serialized_start=600
  _SAVESTRATEGYREQUEST._serialized_end=1034
  _STRATEGY._serialized_start=1037
  _STRATEGY._serialized_end=1633
  _STRATEGYTRADE._serialized_start=1636
  _STRATEGYTRADE._serialized_end=1905
  _STAKINGPLAN._serialized_start=1907
  _STAKINGPLAN._serialized_end=1978
  _HEALTHCHECKREQUEST._serialized_start=1980
  _HEALTHCHECKREQUEST._serialized_end=2017
  _HEALTHCHECKRESPONSE._serialized_start=2019
  _HEALTHCHECKRESPONSE._serialized_end=2057
  _STRATEGYSERVICE._serialized_start=2060
  _STRATEGYSERVICE._serialized_end=2401
# @@protoc_insertion_point(module_scope)
