# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: team_stats.proto
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x10team_stats.proto\x12\nstatistico\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x0erequests.proto\"\x8c\x01\n\x11TeamStatsResponse\x12(\n\thome_team\x18\x01 \x01(\x0b\x32\x15.statistico.TeamStats\x12(\n\taway_team\x18\x02 \x01(\x0b\x32\x15.statistico.TeamStats\x12#\n\x07team_xg\x18\x03 \x01(\x0b\x32\x12.statistico.TeamXG\"Y\n\x08TeamStat\x12\x12\n\nfixture_id\x18\x01 \x01(\x04\x12\x0c\n\x04stat\x18\x02 \x01(\t\x12+\n\x05value\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\"\xee\t\n\tTeamStats\x12\x0f\n\x07team_id\x18\x01 \x01(\x04\x12\x31\n\x0bshots_total\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x33\n\rshots_on_goal\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x34\n\x0eshots_off_goal\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x33\n\rshots_blocked\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x36\n\x10shots_inside_box\x18\x06 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x37\n\x11shots_outside_box\x18\x07 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x32\n\x0cpasses_total\x18\x08 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x35\n\x0fpasses_accuracy\x18\t \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x37\n\x11passes_percentage\x18\n \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x33\n\rattacks_total\x18\x0b \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x37\n\x11\x61ttacks_dangerous\x18\x0c \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12+\n\x05goals\x18\r \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12+\n\x05\x66ouls\x18\x0e \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12-\n\x07\x63orners\x18\x0f \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12.\n\x08offsides\x18\x10 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x30\n\npossession\x18\x11 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x32\n\x0cyellow_cards\x18\x12 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12/\n\tred_cards\x18\x13 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12+\n\x05saves\x18\x14 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x33\n\rsubstitutions\x18\x15 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x30\n\ngoal_kicks\x18\x16 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x33\n\rgoal_attempts\x18\x17 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12\x30\n\nfree_kicks\x18\x18 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12/\n\tthrow_ins\x18\x19 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\"^\n\x06TeamXG\x12)\n\x04home\x18\x01 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12)\n\x04\x61way\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.FloatValue2\xb2\x01\n\x10TeamStatsService\x12U\n\x16GetTeamStatsForFixture\x12\x1a.statistico.FixtureRequest\x1a\x1d.statistico.TeamStatsResponse\"\x00\x12G\n\x0eGetStatForTeam\x12\x1b.statistico.TeamStatRequest\x1a\x14.statistico.TeamStat\"\x00\x30\x01\x42\x33Z1github.com/statistico/statistico-proto;statisticob\x06proto3')



_TEAMSTATSRESPONSE = DESCRIPTOR.message_types_by_name['TeamStatsResponse']
_TEAMSTAT = DESCRIPTOR.message_types_by_name['TeamStat']
_TEAMSTATS = DESCRIPTOR.message_types_by_name['TeamStats']
_TEAMXG = DESCRIPTOR.message_types_by_name['TeamXG']
TeamStatsResponse = _reflection.GeneratedProtocolMessageType('TeamStatsResponse', (_message.Message,), {
  'DESCRIPTOR' : _TEAMSTATSRESPONSE,
  '__module__' : 'team_stats_pb2'
  # @@protoc_insertion_point(class_scope:statistico.TeamStatsResponse)
  })
_sym_db.RegisterMessage(TeamStatsResponse)

TeamStat = _reflection.GeneratedProtocolMessageType('TeamStat', (_message.Message,), {
  'DESCRIPTOR' : _TEAMSTAT,
  '__module__' : 'team_stats_pb2'
  # @@protoc_insertion_point(class_scope:statistico.TeamStat)
  })
_sym_db.RegisterMessage(TeamStat)

TeamStats = _reflection.GeneratedProtocolMessageType('TeamStats', (_message.Message,), {
  'DESCRIPTOR' : _TEAMSTATS,
  '__module__' : 'team_stats_pb2'
  # @@protoc_insertion_point(class_scope:statistico.TeamStats)
  })
_sym_db.RegisterMessage(TeamStats)

TeamXG = _reflection.GeneratedProtocolMessageType('TeamXG', (_message.Message,), {
  'DESCRIPTOR' : _TEAMXG,
  '__module__' : 'team_stats_pb2'
  # @@protoc_insertion_point(class_scope:statistico.TeamXG)
  })
_sym_db.RegisterMessage(TeamXG)

_TEAMSTATSSERVICE = DESCRIPTOR.services_by_name['TeamStatsService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _TEAMSTATSRESPONSE._serialized_start=81
  _TEAMSTATSRESPONSE._serialized_end=221
  _TEAMSTAT._serialized_start=223
  _TEAMSTAT._serialized_end=312
  _TEAMSTATS._serialized_start=315
  _TEAMSTATS._serialized_end=1577
  _TEAMXG._serialized_start=1579
  _TEAMXG._serialized_end=1673
  _TEAMSTATSSERVICE._serialized_start=1676
  _TEAMSTATSSERVICE._serialized_end=1854
# @@protoc_insertion_point(module_scope)
