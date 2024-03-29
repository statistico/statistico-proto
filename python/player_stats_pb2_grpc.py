# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import player_stats_pb2 as player__stats__pb2
import requests_pb2 as requests__pb2


class PlayerStatsServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetPlayerStatsForFixture = channel.unary_unary(
                '/statistico.PlayerStatsService/GetPlayerStatsForFixture',
                request_serializer=requests__pb2.FixtureRequest.SerializeToString,
                response_deserializer=player__stats__pb2.PlayerStatsResponse.FromString,
                )
        self.GetLineUpForFixture = channel.unary_unary(
                '/statistico.PlayerStatsService/GetLineUpForFixture',
                request_serializer=requests__pb2.FixtureRequest.SerializeToString,
                response_deserializer=player__stats__pb2.LineupResponse.FromString,
                )
        self.GetTeamSeasonPlayerStats = channel.unary_stream(
                '/statistico.PlayerStatsService/GetTeamSeasonPlayerStats',
                request_serializer=player__stats__pb2.TeamSeasonPlayStatsRequest.SerializeToString,
                response_deserializer=player__stats__pb2.PlayerStats.FromString,
                )


class PlayerStatsServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetPlayerStatsForFixture(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetLineUpForFixture(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetTeamSeasonPlayerStats(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PlayerStatsServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetPlayerStatsForFixture': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPlayerStatsForFixture,
                    request_deserializer=requests__pb2.FixtureRequest.FromString,
                    response_serializer=player__stats__pb2.PlayerStatsResponse.SerializeToString,
            ),
            'GetLineUpForFixture': grpc.unary_unary_rpc_method_handler(
                    servicer.GetLineUpForFixture,
                    request_deserializer=requests__pb2.FixtureRequest.FromString,
                    response_serializer=player__stats__pb2.LineupResponse.SerializeToString,
            ),
            'GetTeamSeasonPlayerStats': grpc.unary_stream_rpc_method_handler(
                    servicer.GetTeamSeasonPlayerStats,
                    request_deserializer=player__stats__pb2.TeamSeasonPlayStatsRequest.FromString,
                    response_serializer=player__stats__pb2.PlayerStats.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'statistico.PlayerStatsService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class PlayerStatsService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetPlayerStatsForFixture(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/statistico.PlayerStatsService/GetPlayerStatsForFixture',
            requests__pb2.FixtureRequest.SerializeToString,
            player__stats__pb2.PlayerStatsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetLineUpForFixture(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/statistico.PlayerStatsService/GetLineUpForFixture',
            requests__pb2.FixtureRequest.SerializeToString,
            player__stats__pb2.LineupResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetTeamSeasonPlayerStats(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/statistico.PlayerStatsService/GetTeamSeasonPlayerStats',
            player__stats__pb2.TeamSeasonPlayStatsRequest.SerializeToString,
            player__stats__pb2.PlayerStats.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
