# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc
import warnings

import player_pb2 as player__pb2

GRPC_GENERATED_VERSION = '1.68.0'
GRPC_VERSION = grpc.__version__
_version_not_supported = False

try:
    from grpc._utilities import first_version_is_lower
    _version_not_supported = first_version_is_lower(GRPC_VERSION, GRPC_GENERATED_VERSION)
except ImportError:
    _version_not_supported = True

if _version_not_supported:
    raise RuntimeError(
        f'The grpc package installed is at version {GRPC_VERSION},'
        + f' but the generated code in player_pb2_grpc.py depends on'
        + f' grpcio>={GRPC_GENERATED_VERSION}.'
        + f' Please upgrade your grpc module to grpcio>={GRPC_GENERATED_VERSION}'
        + f' or downgrade your generated code using grpcio-tools<={GRPC_VERSION}.'
    )


class PlayerServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetPlayer = channel.unary_unary(
                '/statistico.PlayerService/GetPlayer',
                request_serializer=player__pb2.PlayerRequest.SerializeToString,
                response_deserializer=player__pb2.Player.FromString,
                _registered_method=True)


class PlayerServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetPlayer(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PlayerServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetPlayer': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPlayer,
                    request_deserializer=player__pb2.PlayerRequest.FromString,
                    response_serializer=player__pb2.Player.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'statistico.PlayerService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('statistico.PlayerService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class PlayerService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetPlayer(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/statistico.PlayerService/GetPlayer',
            player__pb2.PlayerRequest.SerializeToString,
            player__pb2.Player.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
