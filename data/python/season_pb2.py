# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: season.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
import requests_pb2 as requests__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='season.proto',
  package='statistico_proto_data',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x0cseason.proto\x12\x15statistico_proto_data\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x0erequests.proto\"R\n\x06Season\x12\n\n\x02id\x18\x01 \x01(\x04\x12\x0c\n\x04name\x18\x02 \x01(\t\x12.\n\nis_current\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.BoolValue2\xe2\x01\n\rSeasonService\x12n\n\x18GetSeasonsForCompetition\x12/.statistico_proto_data.SeasonCompetitionRequest\x1a\x1d.statistico_proto_data.Season\"\x00\x30\x01\x12\x61\n\x11GetSeasonsForTeam\x12).statistico_proto_data.TeamSeasonsRequest\x1a\x1d.statistico_proto_data.Season\"\x00\x30\x01\x62\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_wrappers__pb2.DESCRIPTOR,requests__pb2.DESCRIPTOR,])




_SEASON = _descriptor.Descriptor(
  name='Season',
  full_name='statistico_proto_data.Season',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='statistico_proto_data.Season.id', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='statistico_proto_data.Season.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='is_current', full_name='statistico_proto_data.Season.is_current', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=87,
  serialized_end=169,
)

_SEASON.fields_by_name['is_current'].message_type = google_dot_protobuf_dot_wrappers__pb2._BOOLVALUE
DESCRIPTOR.message_types_by_name['Season'] = _SEASON
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Season = _reflection.GeneratedProtocolMessageType('Season', (_message.Message,), {
  'DESCRIPTOR' : _SEASON,
  '__module__' : 'season_pb2'
  # @@protoc_insertion_point(class_scope:statistico_proto_data.Season)
  })
_sym_db.RegisterMessage(Season)



_SEASONSERVICE = _descriptor.ServiceDescriptor(
  name='SeasonService',
  full_name='statistico_proto_data.SeasonService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=172,
  serialized_end=398,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetSeasonsForCompetition',
    full_name='statistico_proto_data.SeasonService.GetSeasonsForCompetition',
    index=0,
    containing_service=None,
    input_type=requests__pb2._SEASONCOMPETITIONREQUEST,
    output_type=_SEASON,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetSeasonsForTeam',
    full_name='statistico_proto_data.SeasonService.GetSeasonsForTeam',
    index=1,
    containing_service=None,
    input_type=requests__pb2._TEAMSEASONSREQUEST,
    output_type=_SEASON,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_SEASONSERVICE)

DESCRIPTOR.services_by_name['SeasonService'] = _SEASONSERVICE

# @@protoc_insertion_point(module_scope)
