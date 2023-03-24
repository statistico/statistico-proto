// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.6.1
// source: player_stats.proto

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

// PlayerStatsServiceClient is the client API for PlayerStatsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PlayerStatsServiceClient interface {
	GetPlayerStatsForFixture(ctx context.Context, in *FixtureRequest, opts ...grpc.CallOption) (*PlayerStatsResponse, error)
	GetLineUpForFixture(ctx context.Context, in *FixtureRequest, opts ...grpc.CallOption) (*LineupResponse, error)
	GetTeamSeasonPlayerStats(ctx context.Context, in *TeamSeasonPlayStatsRequest, opts ...grpc.CallOption) (PlayerStatsService_GetTeamSeasonPlayerStatsClient, error)
}

type playerStatsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPlayerStatsServiceClient(cc grpc.ClientConnInterface) PlayerStatsServiceClient {
	return &playerStatsServiceClient{cc}
}

func (c *playerStatsServiceClient) GetPlayerStatsForFixture(ctx context.Context, in *FixtureRequest, opts ...grpc.CallOption) (*PlayerStatsResponse, error) {
	out := new(PlayerStatsResponse)
	err := c.cc.Invoke(ctx, "/statistico.PlayerStatsService/GetPlayerStatsForFixture", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *playerStatsServiceClient) GetLineUpForFixture(ctx context.Context, in *FixtureRequest, opts ...grpc.CallOption) (*LineupResponse, error) {
	out := new(LineupResponse)
	err := c.cc.Invoke(ctx, "/statistico.PlayerStatsService/GetLineUpForFixture", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *playerStatsServiceClient) GetTeamSeasonPlayerStats(ctx context.Context, in *TeamSeasonPlayStatsRequest, opts ...grpc.CallOption) (PlayerStatsService_GetTeamSeasonPlayerStatsClient, error) {
	stream, err := c.cc.NewStream(ctx, &PlayerStatsService_ServiceDesc.Streams[0], "/statistico.PlayerStatsService/GetTeamSeasonPlayerStats", opts...)
	if err != nil {
		return nil, err
	}
	x := &playerStatsServiceGetTeamSeasonPlayerStatsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PlayerStatsService_GetTeamSeasonPlayerStatsClient interface {
	Recv() (*PlayerStats, error)
	grpc.ClientStream
}

type playerStatsServiceGetTeamSeasonPlayerStatsClient struct {
	grpc.ClientStream
}

func (x *playerStatsServiceGetTeamSeasonPlayerStatsClient) Recv() (*PlayerStats, error) {
	m := new(PlayerStats)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// PlayerStatsServiceServer is the server API for PlayerStatsService service.
// All implementations must embed UnimplementedPlayerStatsServiceServer
// for forward compatibility
type PlayerStatsServiceServer interface {
	GetPlayerStatsForFixture(context.Context, *FixtureRequest) (*PlayerStatsResponse, error)
	GetLineUpForFixture(context.Context, *FixtureRequest) (*LineupResponse, error)
	GetTeamSeasonPlayerStats(*TeamSeasonPlayStatsRequest, PlayerStatsService_GetTeamSeasonPlayerStatsServer) error
	mustEmbedUnimplementedPlayerStatsServiceServer()
}

// UnimplementedPlayerStatsServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPlayerStatsServiceServer struct {
}

func (UnimplementedPlayerStatsServiceServer) GetPlayerStatsForFixture(context.Context, *FixtureRequest) (*PlayerStatsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPlayerStatsForFixture not implemented")
}
func (UnimplementedPlayerStatsServiceServer) GetLineUpForFixture(context.Context, *FixtureRequest) (*LineupResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLineUpForFixture not implemented")
}
func (UnimplementedPlayerStatsServiceServer) GetTeamSeasonPlayerStats(*TeamSeasonPlayStatsRequest, PlayerStatsService_GetTeamSeasonPlayerStatsServer) error {
	return status.Errorf(codes.Unimplemented, "method GetTeamSeasonPlayerStats not implemented")
}
func (UnimplementedPlayerStatsServiceServer) mustEmbedUnimplementedPlayerStatsServiceServer() {}

// UnsafePlayerStatsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PlayerStatsServiceServer will
// result in compilation errors.
type UnsafePlayerStatsServiceServer interface {
	mustEmbedUnimplementedPlayerStatsServiceServer()
}

func RegisterPlayerStatsServiceServer(s grpc.ServiceRegistrar, srv PlayerStatsServiceServer) {
	s.RegisterService(&PlayerStatsService_ServiceDesc, srv)
}

func _PlayerStatsService_GetPlayerStatsForFixture_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FixtureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlayerStatsServiceServer).GetPlayerStatsForFixture(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico.PlayerStatsService/GetPlayerStatsForFixture",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlayerStatsServiceServer).GetPlayerStatsForFixture(ctx, req.(*FixtureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PlayerStatsService_GetLineUpForFixture_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FixtureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlayerStatsServiceServer).GetLineUpForFixture(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico.PlayerStatsService/GetLineUpForFixture",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlayerStatsServiceServer).GetLineUpForFixture(ctx, req.(*FixtureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PlayerStatsService_GetTeamSeasonPlayerStats_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(TeamSeasonPlayStatsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PlayerStatsServiceServer).GetTeamSeasonPlayerStats(m, &playerStatsServiceGetTeamSeasonPlayerStatsServer{stream})
}

type PlayerStatsService_GetTeamSeasonPlayerStatsServer interface {
	Send(*PlayerStats) error
	grpc.ServerStream
}

type playerStatsServiceGetTeamSeasonPlayerStatsServer struct {
	grpc.ServerStream
}

func (x *playerStatsServiceGetTeamSeasonPlayerStatsServer) Send(m *PlayerStats) error {
	return x.ServerStream.SendMsg(m)
}

// PlayerStatsService_ServiceDesc is the grpc.ServiceDesc for PlayerStatsService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PlayerStatsService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "statistico.PlayerStatsService",
	HandlerType: (*PlayerStatsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPlayerStatsForFixture",
			Handler:    _PlayerStatsService_GetPlayerStatsForFixture_Handler,
		},
		{
			MethodName: "GetLineUpForFixture",
			Handler:    _PlayerStatsService_GetLineUpForFixture_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetTeamSeasonPlayerStats",
			Handler:       _PlayerStatsService_GetTeamSeasonPlayerStats_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "player_stats.proto",
}
