# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: team.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
import requests_pb2 as requests__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\nteam.proto\x12\nstatistico\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x0erequests.proto\"\x89\x02\n\x04Team\x12\n\n\x02id\x18\x01 \x01(\x04\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x30\n\nshort_code\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x12\n\ncountry_id\x18\x04 \x01(\x04\x12\x10\n\x08venue_id\x18\x05 \x01(\x04\x12\x34\n\x10is_national_team\x18\x06 \x01(\x0b\x32\x1a.google.protobuf.BoolValue\x12-\n\x07\x66ounded\x18\x07 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12*\n\x04logo\x18\x08 \x01(\x0b\x32\x1c.google.protobuf.StringValue\"2\n\x17\x43ompetitionTeamsRequest\x12\x17\n\x0f\x63ompetition_ids\x18\x01 \x03(\x04\"0\n\rTeamsResponse\x12\x1f\n\x05teams\x18\x01 \x03(\x0b\x32\x10.statistico.Team2\xf2\x01\n\x0bTeamService\x12:\n\x0bGetTeamByID\x12\x17.statistico.TeamRequest\x1a\x10.statistico.Team\"\x00\x12[\n\x17GetTeamsByCompetitionId\x12#.statistico.CompetitionTeamsRequest\x1a\x19.statistico.TeamsResponse\"\x00\x12J\n\x12GetTeamsBySeasonId\x12\x1e.statistico.SeasonTeamsRequest\x1a\x10.statistico.Team\"\x00\x30\x01\x42\x33Z1github.com/statistico/statistico-proto;statisticob\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'team_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _TEAM._serialized_start=75
  _TEAM._serialized_end=340
  _COMPETITIONTEAMSREQUEST._serialized_start=342
  _COMPETITIONTEAMSREQUEST._serialized_end=392
  _TEAMSRESPONSE._serialized_start=394
  _TEAMSRESPONSE._serialized_end=442
  _TEAMSERVICE._serialized_start=445
  _TEAMSERVICE._serialized_end=687
# @@protoc_insertion_point(module_scope)
