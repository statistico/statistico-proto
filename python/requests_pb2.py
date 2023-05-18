# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: requests.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import enum_pb2 as enum__pb2
import utility_pb2 as utility__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0erequests.proto\x12\nstatistico\x1a\nenum.proto\x1a\rutility.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/wrappers.proto\"\x81\x01\n\x12\x43ompetitionRequest\x12\x13\n\x0b\x63ountry_ids\x18\x01 \x03(\x04\x12*\n\x04sort\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12*\n\x06is_cup\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.BoolValue\"\xf9\x02\n\x15\x43reateStrategyRequest\x12&\n\x06market\x18\x01 \x01(\x0e\x32\x16.statistico.MarketEnum\x12-\n\x08min_odds\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12-\n\x08max_odds\x18\x03 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12-\n\x0cstaking_plan\x18\x04 \x01(\x0b\x32\x17.statistico.StakingPlan\x12\r\n\x05model\x18\x05 \x01(\t\x12\x16\n\x0e\x63ompetition_id\x18\x06 \x01(\x04\x12\x11\n\tseason_id\x18\x07 \x01(\x04\x12\x15\n\rstarting_fund\x18\x08 \x01(\x02\x12.\n\x06status\x18\t \x01(\x0e\x32\x1e.statistico.StrategyStatusEnum\x12*\n\x04type\x18\n \x01(\x0e\x32\x1c.statistico.StrategyTypeEnum\"$\n\x0e\x46ixtureRequest\x12\x12\n\nfixture_id\x18\x01 \x01(\x04\"\xe8\x01\n\x14\x46ixtureSearchRequest\x12\x12\n\nseason_ids\x18\x01 \x03(\x04\x12+\n\x05limit\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12\x31\n\x0b\x64\x61te_before\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x30\n\ndate_after\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12*\n\x04sort\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.StringValue\"i\n\x17HistoricalResultRequest\x12\x14\n\x0chome_team_id\x18\x01 \x01(\x04\x12\x14\n\x0c\x61way_team_id\x18\x02 \x01(\x04\x12\r\n\x05limit\x18\x03 \x01(\r\x12\x13\n\x0b\x64\x61te_before\x18\x04 \x01(\t\"\x87\x02\n\x15ListStrategiesRequest\x12.\n\x06status\x18\x01 \x03(\x0e\x32\x1e.statistico.StrategyStatusEnum\x12*\n\x04type\x18\x02 \x03(\x0e\x32\x1c.statistico.StrategyTypeEnum\x12\x34\n\x0e\x63ompetition_id\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12/\n\tseason_id\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12+\n\x05model\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.StringValue\"#\n\rResultRequest\x12\x12\n\nfixture_id\x18\x01 \x01(\x04\"\x97\x03\n\x13SearchTradesRequest\x12\x31\n\x0bstrategy_id\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12,\n\x06market\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x34\n\x0e\x63ompetition_id\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12/\n\tseason_id\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12,\n\x06status\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12.\n\x08\x65xchange\x18\x06 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12-\n\tdate_from\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12+\n\x07\x64\x61te_to\x18\x08 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"^\n\x18SeasonCompetitionRequest\x12\x16\n\x0e\x63ompetition_id\x18\x01 \x01(\x04\x12*\n\x04sort\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.StringValue\"M\n\x14SeasonFixtureRequest\x12\x11\n\tseason_id\x18\x01 \x01(\x04\x12\x11\n\tdate_from\x18\x02 \x01(\t\x12\x0f\n\x07\x64\x61te_to\x18\x03 \x01(\t\"7\n\rSeasonRequest\x12\x11\n\tseason_id\x18\x01 \x01(\x03\x12\x13\n\x0b\x64\x61te_before\x18\x02 \x01(\t\"\'\n\x12SeasonTeamsRequest\x12\x11\n\tseason_id\x18\x01 \x01(\x04\"\x1e\n\x0bTeamRequest\x12\x0f\n\x07team_id\x18\x01 \x01(\x04\"\xa3\x02\n\x11TeamResultRequest\x12\x0f\n\x07team_id\x18\x01 \x01(\x04\x12+\n\x05limit\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12\x31\n\x0b\x64\x61te_before\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x30\n\ndate_after\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12+\n\x05venue\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x12\n\nseason_ids\x18\x06 \x03(\x04\x12*\n\x04sort\x18\x07 \x01(\x0b\x32\x1c.google.protobuf.StringValue\"\xdd\x02\n\x0fTeamStatRequest\x12\x0c\n\x04stat\x18\x01 \x01(\t\x12\x0f\n\x07team_id\x18\x02 \x01(\x04\x12+\n\x05limit\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12\x31\n\x0b\x64\x61te_before\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x30\n\ndate_after\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12+\n\x05venue\x18\x06 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x12\n\nseason_ids\x18\x07 \x03(\x04\x12*\n\x04sort\x18\x08 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12,\n\x08opponent\x18\t \x01(\x0b\x32\x1a.google.protobuf.BoolValueB3Z1github.com/statistico/statistico-proto;statisticob\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'requests_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _COMPETITIONREQUEST._serialized_start=123
  _COMPETITIONREQUEST._serialized_end=252
  _CREATESTRATEGYREQUEST._serialized_start=255
  _CREATESTRATEGYREQUEST._serialized_end=632
  _FIXTUREREQUEST._serialized_start=634
  _FIXTUREREQUEST._serialized_end=670
  _FIXTURESEARCHREQUEST._serialized_start=673
  _FIXTURESEARCHREQUEST._serialized_end=905
  _HISTORICALRESULTREQUEST._serialized_start=907
  _HISTORICALRESULTREQUEST._serialized_end=1012
  _LISTSTRATEGIESREQUEST._serialized_start=1015
  _LISTSTRATEGIESREQUEST._serialized_end=1278
  _RESULTREQUEST._serialized_start=1280
  _RESULTREQUEST._serialized_end=1315
  _SEARCHTRADESREQUEST._serialized_start=1318
  _SEARCHTRADESREQUEST._serialized_end=1725
  _SEASONCOMPETITIONREQUEST._serialized_start=1727
  _SEASONCOMPETITIONREQUEST._serialized_end=1821
  _SEASONFIXTUREREQUEST._serialized_start=1823
  _SEASONFIXTUREREQUEST._serialized_end=1900
  _SEASONREQUEST._serialized_start=1902
  _SEASONREQUEST._serialized_end=1957
  _SEASONTEAMSREQUEST._serialized_start=1959
  _SEASONTEAMSREQUEST._serialized_end=1998
  _TEAMREQUEST._serialized_start=2000
  _TEAMREQUEST._serialized_end=2030
  _TEAMRESULTREQUEST._serialized_start=2033
  _TEAMRESULTREQUEST._serialized_end=2324
  _TEAMSTATREQUEST._serialized_start=2327
  _TEAMSTATREQUEST._serialized_end=2676
# @@protoc_insertion_point(module_scope)
