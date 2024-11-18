// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package statistico

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// StrategyServiceClient is the client API for StrategyService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type StrategyServiceClient interface {
	CreateStrategy(ctx context.Context, in *CreateStrategyRequest, opts ...grpc.CallOption) (*Strategy, error)
	ListStrategies(ctx context.Context, in *ListStrategiesRequest, opts ...grpc.CallOption) (StrategyService_ListStrategiesClient, error)
	UpdateStrategy(ctx context.Context, in *UpdateStrategyRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type strategyServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewStrategyServiceClient(cc grpc.ClientConnInterface) StrategyServiceClient {
	return &strategyServiceClient{cc}
}

func (c *strategyServiceClient) CreateStrategy(ctx context.Context, in *CreateStrategyRequest, opts ...grpc.CallOption) (*Strategy, error) {
	out := new(Strategy)
	err := c.cc.Invoke(ctx, "/statistico.StrategyService/CreateStrategy", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *strategyServiceClient) ListStrategies(ctx context.Context, in *ListStrategiesRequest, opts ...grpc.CallOption) (StrategyService_ListStrategiesClient, error) {
	stream, err := c.cc.NewStream(ctx, &StrategyService_ServiceDesc.Streams[0], "/statistico.StrategyService/ListStrategies", opts...)
	if err != nil {
		return nil, err
	}
	x := &strategyServiceListStrategiesClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type StrategyService_ListStrategiesClient interface {
	Recv() (*Strategy, error)
	grpc.ClientStream
}

type strategyServiceListStrategiesClient struct {
	grpc.ClientStream
}

func (x *strategyServiceListStrategiesClient) Recv() (*Strategy, error) {
	m := new(Strategy)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *strategyServiceClient) UpdateStrategy(ctx context.Context, in *UpdateStrategyRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/statistico.StrategyService/UpdateStrategy", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// StrategyServiceServer is the server API for StrategyService service.
// All implementations must embed UnimplementedStrategyServiceServer
// for forward compatibility
type StrategyServiceServer interface {
	CreateStrategy(context.Context, *CreateStrategyRequest) (*Strategy, error)
	ListStrategies(*ListStrategiesRequest, StrategyService_ListStrategiesServer) error
	UpdateStrategy(context.Context, *UpdateStrategyRequest) (*emptypb.Empty, error)
	mustEmbedUnimplementedStrategyServiceServer()
}

// UnimplementedStrategyServiceServer must be embedded to have forward compatible implementations.
type UnimplementedStrategyServiceServer struct {
}

func (UnimplementedStrategyServiceServer) CreateStrategy(context.Context, *CreateStrategyRequest) (*Strategy, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateStrategy not implemented")
}
func (UnimplementedStrategyServiceServer) ListStrategies(*ListStrategiesRequest, StrategyService_ListStrategiesServer) error {
	return status.Errorf(codes.Unimplemented, "method ListStrategies not implemented")
}
func (UnimplementedStrategyServiceServer) UpdateStrategy(context.Context, *UpdateStrategyRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateStrategy not implemented")
}
func (UnimplementedStrategyServiceServer) mustEmbedUnimplementedStrategyServiceServer() {}

// UnsafeStrategyServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to StrategyServiceServer will
// result in compilation errors.
type UnsafeStrategyServiceServer interface {
	mustEmbedUnimplementedStrategyServiceServer()
}

func RegisterStrategyServiceServer(s grpc.ServiceRegistrar, srv StrategyServiceServer) {
	s.RegisterService(&StrategyService_ServiceDesc, srv)
}

func _StrategyService_CreateStrategy_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateStrategyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StrategyServiceServer).CreateStrategy(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico.StrategyService/CreateStrategy",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StrategyServiceServer).CreateStrategy(ctx, req.(*CreateStrategyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _StrategyService_ListStrategies_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListStrategiesRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(StrategyServiceServer).ListStrategies(m, &strategyServiceListStrategiesServer{stream})
}

type StrategyService_ListStrategiesServer interface {
	Send(*Strategy) error
	grpc.ServerStream
}

type strategyServiceListStrategiesServer struct {
	grpc.ServerStream
}

func (x *strategyServiceListStrategiesServer) Send(m *Strategy) error {
	return x.ServerStream.SendMsg(m)
}

func _StrategyService_UpdateStrategy_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateStrategyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StrategyServiceServer).UpdateStrategy(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico.StrategyService/UpdateStrategy",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StrategyServiceServer).UpdateStrategy(ctx, req.(*UpdateStrategyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// StrategyService_ServiceDesc is the grpc.ServiceDesc for StrategyService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var StrategyService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "statistico.StrategyService",
	HandlerType: (*StrategyServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateStrategy",
			Handler:    _StrategyService_CreateStrategy_Handler,
		},
		{
			MethodName: "UpdateStrategy",
			Handler:    _StrategyService_UpdateStrategy_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ListStrategies",
			Handler:       _StrategyService_ListStrategies_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "strategy.proto",
}
