// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

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

// ResultServiceClient is the client API for ResultService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ResultServiceClient interface {
	GetById(ctx context.Context, in *ResultRequest, opts ...grpc.CallOption) (*Result, error)
	GetHistoricalResultsForFixture(ctx context.Context, in *HistoricalResultRequest, opts ...grpc.CallOption) (ResultService_GetHistoricalResultsForFixtureClient, error)
	GetResultsForSeason(ctx context.Context, in *SeasonRequest, opts ...grpc.CallOption) (ResultService_GetResultsForSeasonClient, error)
	GetResultsForTeam(ctx context.Context, in *TeamResultRequest, opts ...grpc.CallOption) (ResultService_GetResultsForTeamClient, error)
}

type resultServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewResultServiceClient(cc grpc.ClientConnInterface) ResultServiceClient {
	return &resultServiceClient{cc}
}

func (c *resultServiceClient) GetById(ctx context.Context, in *ResultRequest, opts ...grpc.CallOption) (*Result, error) {
	out := new(Result)
	err := c.cc.Invoke(ctx, "/statistico.ResultService/GetById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *resultServiceClient) GetHistoricalResultsForFixture(ctx context.Context, in *HistoricalResultRequest, opts ...grpc.CallOption) (ResultService_GetHistoricalResultsForFixtureClient, error) {
	stream, err := c.cc.NewStream(ctx, &ResultService_ServiceDesc.Streams[0], "/statistico.ResultService/GetHistoricalResultsForFixture", opts...)
	if err != nil {
		return nil, err
	}
	x := &resultServiceGetHistoricalResultsForFixtureClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ResultService_GetHistoricalResultsForFixtureClient interface {
	Recv() (*Result, error)
	grpc.ClientStream
}

type resultServiceGetHistoricalResultsForFixtureClient struct {
	grpc.ClientStream
}

func (x *resultServiceGetHistoricalResultsForFixtureClient) Recv() (*Result, error) {
	m := new(Result)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *resultServiceClient) GetResultsForSeason(ctx context.Context, in *SeasonRequest, opts ...grpc.CallOption) (ResultService_GetResultsForSeasonClient, error) {
	stream, err := c.cc.NewStream(ctx, &ResultService_ServiceDesc.Streams[1], "/statistico.ResultService/GetResultsForSeason", opts...)
	if err != nil {
		return nil, err
	}
	x := &resultServiceGetResultsForSeasonClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ResultService_GetResultsForSeasonClient interface {
	Recv() (*Result, error)
	grpc.ClientStream
}

type resultServiceGetResultsForSeasonClient struct {
	grpc.ClientStream
}

func (x *resultServiceGetResultsForSeasonClient) Recv() (*Result, error) {
	m := new(Result)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *resultServiceClient) GetResultsForTeam(ctx context.Context, in *TeamResultRequest, opts ...grpc.CallOption) (ResultService_GetResultsForTeamClient, error) {
	stream, err := c.cc.NewStream(ctx, &ResultService_ServiceDesc.Streams[2], "/statistico.ResultService/GetResultsForTeam", opts...)
	if err != nil {
		return nil, err
	}
	x := &resultServiceGetResultsForTeamClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ResultService_GetResultsForTeamClient interface {
	Recv() (*Result, error)
	grpc.ClientStream
}

type resultServiceGetResultsForTeamClient struct {
	grpc.ClientStream
}

func (x *resultServiceGetResultsForTeamClient) Recv() (*Result, error) {
	m := new(Result)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ResultServiceServer is the server API for ResultService service.
// All implementations must embed UnimplementedResultServiceServer
// for forward compatibility
type ResultServiceServer interface {
	GetById(context.Context, *ResultRequest) (*Result, error)
	GetHistoricalResultsForFixture(*HistoricalResultRequest, ResultService_GetHistoricalResultsForFixtureServer) error
	GetResultsForSeason(*SeasonRequest, ResultService_GetResultsForSeasonServer) error
	GetResultsForTeam(*TeamResultRequest, ResultService_GetResultsForTeamServer) error
	mustEmbedUnimplementedResultServiceServer()
}

// UnimplementedResultServiceServer must be embedded to have forward compatible implementations.
type UnimplementedResultServiceServer struct {
}

func (UnimplementedResultServiceServer) GetById(context.Context, *ResultRequest) (*Result, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetById not implemented")
}
func (UnimplementedResultServiceServer) GetHistoricalResultsForFixture(*HistoricalResultRequest, ResultService_GetHistoricalResultsForFixtureServer) error {
	return status.Errorf(codes.Unimplemented, "method GetHistoricalResultsForFixture not implemented")
}
func (UnimplementedResultServiceServer) GetResultsForSeason(*SeasonRequest, ResultService_GetResultsForSeasonServer) error {
	return status.Errorf(codes.Unimplemented, "method GetResultsForSeason not implemented")
}
func (UnimplementedResultServiceServer) GetResultsForTeam(*TeamResultRequest, ResultService_GetResultsForTeamServer) error {
	return status.Errorf(codes.Unimplemented, "method GetResultsForTeam not implemented")
}
func (UnimplementedResultServiceServer) mustEmbedUnimplementedResultServiceServer() {}

// UnsafeResultServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ResultServiceServer will
// result in compilation errors.
type UnsafeResultServiceServer interface {
	mustEmbedUnimplementedResultServiceServer()
}

func RegisterResultServiceServer(s grpc.ServiceRegistrar, srv ResultServiceServer) {
	s.RegisterService(&ResultService_ServiceDesc, srv)
}

func _ResultService_GetById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResultRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ResultServiceServer).GetById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico.ResultService/GetById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ResultServiceServer).GetById(ctx, req.(*ResultRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ResultService_GetHistoricalResultsForFixture_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(HistoricalResultRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ResultServiceServer).GetHistoricalResultsForFixture(m, &resultServiceGetHistoricalResultsForFixtureServer{stream})
}

type ResultService_GetHistoricalResultsForFixtureServer interface {
	Send(*Result) error
	grpc.ServerStream
}

type resultServiceGetHistoricalResultsForFixtureServer struct {
	grpc.ServerStream
}

func (x *resultServiceGetHistoricalResultsForFixtureServer) Send(m *Result) error {
	return x.ServerStream.SendMsg(m)
}

func _ResultService_GetResultsForSeason_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(SeasonRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ResultServiceServer).GetResultsForSeason(m, &resultServiceGetResultsForSeasonServer{stream})
}

type ResultService_GetResultsForSeasonServer interface {
	Send(*Result) error
	grpc.ServerStream
}

type resultServiceGetResultsForSeasonServer struct {
	grpc.ServerStream
}

func (x *resultServiceGetResultsForSeasonServer) Send(m *Result) error {
	return x.ServerStream.SendMsg(m)
}

func _ResultService_GetResultsForTeam_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(TeamResultRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ResultServiceServer).GetResultsForTeam(m, &resultServiceGetResultsForTeamServer{stream})
}

type ResultService_GetResultsForTeamServer interface {
	Send(*Result) error
	grpc.ServerStream
}

type resultServiceGetResultsForTeamServer struct {
	grpc.ServerStream
}

func (x *resultServiceGetResultsForTeamServer) Send(m *Result) error {
	return x.ServerStream.SendMsg(m)
}

// ResultService_ServiceDesc is the grpc.ServiceDesc for ResultService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ResultService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "statistico.ResultService",
	HandlerType: (*ResultServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetById",
			Handler:    _ResultService_GetById_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetHistoricalResultsForFixture",
			Handler:       _ResultService_GetHistoricalResultsForFixture_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "GetResultsForSeason",
			Handler:       _ResultService_GetResultsForSeason_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "GetResultsForTeam",
			Handler:       _ResultService_GetResultsForTeam_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "result.proto",
}
