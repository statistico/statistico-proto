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

// TeamServiceClient is the client API for TeamService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TeamServiceClient interface {
	GetTeamByID(ctx context.Context, in *TeamRequest, opts ...grpc.CallOption) (*Team, error)
	GetTeamsBySeasonId(ctx context.Context, in *SeasonTeamsRequest, opts ...grpc.CallOption) (TeamService_GetTeamsBySeasonIdClient, error)
}

type teamServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTeamServiceClient(cc grpc.ClientConnInterface) TeamServiceClient {
	return &teamServiceClient{cc}
}

func (c *teamServiceClient) GetTeamByID(ctx context.Context, in *TeamRequest, opts ...grpc.CallOption) (*Team, error) {
	out := new(Team)
	err := c.cc.Invoke(ctx, "/statistico.TeamService/GetTeamByID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *teamServiceClient) GetTeamsBySeasonId(ctx context.Context, in *SeasonTeamsRequest, opts ...grpc.CallOption) (TeamService_GetTeamsBySeasonIdClient, error) {
	stream, err := c.cc.NewStream(ctx, &TeamService_ServiceDesc.Streams[0], "/statistico.TeamService/GetTeamsBySeasonId", opts...)
	if err != nil {
		return nil, err
	}
	x := &teamServiceGetTeamsBySeasonIdClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type TeamService_GetTeamsBySeasonIdClient interface {
	Recv() (*Team, error)
	grpc.ClientStream
}

type teamServiceGetTeamsBySeasonIdClient struct {
	grpc.ClientStream
}

func (x *teamServiceGetTeamsBySeasonIdClient) Recv() (*Team, error) {
	m := new(Team)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// TeamServiceServer is the server API for TeamService service.
// All implementations must embed UnimplementedTeamServiceServer
// for forward compatibility
type TeamServiceServer interface {
	GetTeamByID(context.Context, *TeamRequest) (*Team, error)
	GetTeamsBySeasonId(*SeasonTeamsRequest, TeamService_GetTeamsBySeasonIdServer) error
	mustEmbedUnimplementedTeamServiceServer()
}

// UnimplementedTeamServiceServer must be embedded to have forward compatible implementations.
type UnimplementedTeamServiceServer struct {
}

func (UnimplementedTeamServiceServer) GetTeamByID(context.Context, *TeamRequest) (*Team, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTeamByID not implemented")
}
func (UnimplementedTeamServiceServer) GetTeamsBySeasonId(*SeasonTeamsRequest, TeamService_GetTeamsBySeasonIdServer) error {
	return status.Errorf(codes.Unimplemented, "method GetTeamsBySeasonId not implemented")
}
func (UnimplementedTeamServiceServer) mustEmbedUnimplementedTeamServiceServer() {}

// UnsafeTeamServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TeamServiceServer will
// result in compilation errors.
type UnsafeTeamServiceServer interface {
	mustEmbedUnimplementedTeamServiceServer()
}

func RegisterTeamServiceServer(s grpc.ServiceRegistrar, srv TeamServiceServer) {
	s.RegisterService(&TeamService_ServiceDesc, srv)
}

func _TeamService_GetTeamByID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TeamRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TeamServiceServer).GetTeamByID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico.TeamService/GetTeamByID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TeamServiceServer).GetTeamByID(ctx, req.(*TeamRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TeamService_GetTeamsBySeasonId_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(SeasonTeamsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(TeamServiceServer).GetTeamsBySeasonId(m, &teamServiceGetTeamsBySeasonIdServer{stream})
}

type TeamService_GetTeamsBySeasonIdServer interface {
	Send(*Team) error
	grpc.ServerStream
}

type teamServiceGetTeamsBySeasonIdServer struct {
	grpc.ServerStream
}

func (x *teamServiceGetTeamsBySeasonIdServer) Send(m *Team) error {
	return x.ServerStream.SendMsg(m)
}

// TeamService_ServiceDesc is the grpc.ServiceDesc for TeamService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TeamService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "statistico.TeamService",
	HandlerType: (*TeamServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetTeamByID",
			Handler:    _TeamService_GetTeamByID_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetTeamsBySeasonId",
			Handler:       _TeamService_GetTeamsBySeasonId_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "team.proto",
}
