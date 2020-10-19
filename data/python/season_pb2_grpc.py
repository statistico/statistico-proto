# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import requests_pb2 as requests__pb2
import season_pb2 as season__pb2


class SeasonServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetSeasonsForCompetition = channel.unary_stream(
                '/statistico_proto_data.SeasonService/GetSeasonsForCompetition',
                request_serializer=requests__pb2.SeasonCompetitionRequest.SerializeToString,
                response_deserializer=season__pb2.Season.FromString,
                )
        self.GetSeasonsForTeam = channel.unary_stream(
                '/statistico_proto_data.SeasonService/GetSeasonsForTeam',
                request_serializer=requests__pb2.TeamSeasonsRequest.SerializeToString,
                response_deserializer=season__pb2.Season.FromString,
                )


class SeasonServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetSeasonsForCompetition(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetSeasonsForTeam(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_SeasonServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetSeasonsForCompetition': grpc.unary_stream_rpc_method_handler(
                    servicer.GetSeasonsForCompetition,
                    request_deserializer=requests__pb2.SeasonCompetitionRequest.FromString,
                    response_serializer=season__pb2.Season.SerializeToString,
            ),
            'GetSeasonsForTeam': grpc.unary_stream_rpc_method_handler(
                    servicer.GetSeasonsForTeam,
                    request_deserializer=requests__pb2.TeamSeasonsRequest.FromString,
                    response_serializer=season__pb2.Season.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'statistico_proto_data.SeasonService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class SeasonService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetSeasonsForCompetition(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/statistico_proto_data.SeasonService/GetSeasonsForCompetition',
            requests__pb2.SeasonCompetitionRequest.SerializeToString,
            season__pb2.Season.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetSeasonsForTeam(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/statistico_proto_data.SeasonService/GetSeasonsForTeam',
            requests__pb2.TeamSeasonsRequest.SerializeToString,
            season__pb2.Season.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
