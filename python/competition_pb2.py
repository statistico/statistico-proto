# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: competition.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import requests_pb2 as requests__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x11\x63ompetition.proto\x12\nstatistico\x1a\x0erequests.proto\"Y\n\x0b\x43ompetition\x12\n\n\x02id\x18\x01 \x01(\x04\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0e\n\x06is_cup\x18\x03 \x01(\x08\x12\x12\n\ncountry_id\x18\x04 \x01(\x04\x12\x0c\n\x04logo\x18\x05 \x01(\t2e\n\x12\x43ompetitionService\x12O\n\x10ListCompetitions\x12\x1e.statistico.CompetitionRequest\x1a\x17.statistico.Competition\"\x00\x30\x01\x42\x33Z1github.com/statistico/statistico-proto;statisticob\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'competition_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/statistico/statistico-proto;statistico'
  _COMPETITION._serialized_start=49
  _COMPETITION._serialized_end=138
  _COMPETITIONSERVICE._serialized_start=140
  _COMPETITIONSERVICE._serialized_end=241
# @@protoc_insertion_point(module_scope)
