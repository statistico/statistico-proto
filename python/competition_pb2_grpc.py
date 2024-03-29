# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import competition_pb2 as competition__pb2
import requests_pb2 as requests__pb2


class CompetitionServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListCompetitions = channel.unary_stream(
                '/statistico.CompetitionService/ListCompetitions',
                request_serializer=requests__pb2.CompetitionRequest.SerializeToString,
                response_deserializer=competition__pb2.Competition.FromString,
                )


class CompetitionServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListCompetitions(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_CompetitionServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListCompetitions': grpc.unary_stream_rpc_method_handler(
                    servicer.ListCompetitions,
                    request_deserializer=requests__pb2.CompetitionRequest.FromString,
                    response_serializer=competition__pb2.Competition.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'statistico.CompetitionService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class CompetitionService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListCompetitions(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/statistico.CompetitionService/ListCompetitions',
            requests__pb2.CompetitionRequest.SerializeToString,
            competition__pb2.Competition.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
