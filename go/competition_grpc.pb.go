// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.6.1
// source: competition.proto

package statistico

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// CompetitionServiceClient is the client API for CompetitionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CompetitionServiceClient interface {
	ListCompetitions(ctx context.Context, in *CompetitionRequest, opts ...grpc.CallOption) (CompetitionService_ListCompetitionsClient, error)
}

type competitionServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCompetitionServiceClient(cc grpc.ClientConnInterface) CompetitionServiceClient {
	return &competitionServiceClient{cc}
}

func (c *competitionServiceClient) ListCompetitions(ctx context.Context, in *CompetitionRequest, opts ...grpc.CallOption) (CompetitionService_ListCompetitionsClient, error) {
	stream, err := c.cc.NewStream(ctx, &CompetitionService_ServiceDesc.Streams[0], "/statistico.CompetitionService/ListCompetitions", opts...)
	if err != nil {
		return nil, err
	}
	x := &competitionServiceListCompetitionsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type CompetitionService_ListCompetitionsClient interface {
	Recv() (*Competition, error)
	grpc.ClientStream
}

type competitionServiceListCompetitionsClient struct {
	grpc.ClientStream
}

func (x *competitionServiceListCompetitionsClient) Recv() (*Competition, error) {
	m := new(Competition)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// CompetitionServiceServer is the server API for CompetitionService service.
// All implementations must embed UnimplementedCompetitionServiceServer
// for forward compatibility
type CompetitionServiceServer interface {
	ListCompetitions(*CompetitionRequest, CompetitionService_ListCompetitionsServer) error
	mustEmbedUnimplementedCompetitionServiceServer()
}

// UnimplementedCompetitionServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCompetitionServiceServer struct {
}

func (UnimplementedCompetitionServiceServer) ListCompetitions(*CompetitionRequest, CompetitionService_ListCompetitionsServer) error {
	return status.Errorf(codes.Unimplemented, "method ListCompetitions not implemented")
}
func (UnimplementedCompetitionServiceServer) mustEmbedUnimplementedCompetitionServiceServer() {}

// UnsafeCompetitionServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CompetitionServiceServer will
// result in compilation errors.
type UnsafeCompetitionServiceServer interface {
	mustEmbedUnimplementedCompetitionServiceServer()
}

func RegisterCompetitionServiceServer(s grpc.ServiceRegistrar, srv CompetitionServiceServer) {
	s.RegisterService(&CompetitionService_ServiceDesc, srv)
}

func _CompetitionService_ListCompetitions_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(CompetitionRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(CompetitionServiceServer).ListCompetitions(m, &competitionServiceListCompetitionsServer{stream})
}

type CompetitionService_ListCompetitionsServer interface {
	Send(*Competition) error
	grpc.ServerStream
}

type competitionServiceListCompetitionsServer struct {
	grpc.ServerStream
}

func (x *competitionServiceListCompetitionsServer) Send(m *Competition) error {
	return x.ServerStream.SendMsg(m)
}

// CompetitionService_ServiceDesc is the grpc.ServiceDesc for CompetitionService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CompetitionService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "statistico.CompetitionService",
	HandlerType: (*CompetitionServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ListCompetitions",
			Handler:       _CompetitionService_ListCompetitions_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "competition.proto",
}
