# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: player_stats.proto
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
    'player_stats.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
import requests_pb2 as requests__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x12player_stats.proto\x12\nstatistico\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x0erequests.proto\"U\n\x1aTeamSeasonPlayStatsRequest\x12\x0f\n\x07team_id\x18\x01 \x01(\x04\x12\x11\n\tseason_id\x18\x02 \x01(\x04\x12\x13\n\x0b\x64\x61te_before\x18\x03 \x01(\x04\"m\n\x13PlayerStatsResponse\x12*\n\thome_team\x18\x01 \x03(\x0b\x32\x17.statistico.PlayerStats\x12*\n\taway_team\x18\x02 \x03(\x0b\x32\x17.statistico.PlayerStats\"^\n\x0eLineupResponse\x12%\n\thome_team\x18\x01 \x01(\x0b\x32\x12.statistico.Lineup\x12%\n\taway_team\x18\x02 \x01(\x0b\x32\x12.statistico.Lineup\"\xd8\x02\n\x0bPlayerStats\x12\x11\n\tplayer_id\x18\x01 \x01(\x04\x12\x0f\n\x07team_id\x18\x02 \x01(\x04\x12\x12\n\nfixture_id\x18\x03 \x01(\x04\x12\x15\n\ris_substitute\x18\x04 \x01(\x08\x12\x30\n\x0bshots_total\x18\x05 \x01(\x0b\x32\x1b.google.protobuf.Int32Value\x12\x32\n\rshots_on_goal\x18\x06 \x01(\x0b\x32\x1b.google.protobuf.Int32Value\x12\x31\n\x0cgoals_scored\x18\x07 \x01(\x0b\x32\x1b.google.protobuf.Int32Value\x12\x33\n\x0egoals_conceded\x18\x08 \x01(\x0b\x32\x1b.google.protobuf.Int32Value\x12,\n\x07\x61ssists\x18\t \x01(\x0b\x32\x1b.google.protobuf.Int32Value\"Z\n\x06Lineup\x12\'\n\x05start\x18\x01 \x03(\x0b\x32\x18.statistico.LineupPlayer\x12\'\n\x05\x62\x65nch\x18\x02 \x03(\x0b\x32\x18.statistico.LineupPlayer\"\x84\x01\n\x0cLineupPlayer\x12\x11\n\tplayer_id\x18\x01 \x01(\x04\x12\x10\n\x08position\x18\x02 \x01(\t\x12\x38\n\x12\x66ormation_position\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x15\n\ris_substitute\x18\x04 \x01(\x08\x32\xa1\x02\n\x12PlayerStatsService\x12Y\n\x18GetPlayerStatsForFixture\x12\x1a.statistico.FixtureRequest\x1a\x1f.statistico.PlayerStatsResponse\"\x00\x12O\n\x13GetLineUpForFixture\x12\x1a.statistico.FixtureRequest\x1a\x1a.statistico.LineupResponse\"\x00\x12_\n\x18GetTeamSeasonPlayerStats\x12&.statistico.TeamSeasonPlayStatsRequest\x1a\x17.statistico.PlayerStats\"\x00\x30\x01\x42\x33Z1github.com/statistico/statistico-proto;statisticob\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'player_stats_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _globals['_TEAMSEASONPLAYSTATSREQUEST']._serialized_start=82
  _globals['_TEAMSEASONPLAYSTATSREQUEST']._serialized_end=167
  _globals['_PLAYERSTATSRESPONSE']._serialized_start=169
  _globals['_PLAYERSTATSRESPONSE']._serialized_end=278
  _globals['_LINEUPRESPONSE']._serialized_start=280
  _globals['_LINEUPRESPONSE']._serialized_end=374
  _globals['_PLAYERSTATS']._serialized_start=377
  _globals['_PLAYERSTATS']._serialized_end=721
  _globals['_LINEUP']._serialized_start=723
  _globals['_LINEUP']._serialized_end=813
  _globals['_LINEUPPLAYER']._serialized_start=816
  _globals['_LINEUPPLAYER']._serialized_end=948
  _globals['_PLAYERSTATSSERVICE']._serialized_start=951
  _globals['_PLAYERSTATSSERVICE']._serialized_end=1240
# @@protoc_insertion_point(module_scope)
