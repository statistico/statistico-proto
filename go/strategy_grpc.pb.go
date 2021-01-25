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
const _ = grpc.SupportPackageIsVersion7

// StrategyServiceClient is the client API for StrategyService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type StrategyServiceClient interface {
	StrategyTradeSearch(ctx context.Context, in *StrategyTradeSearchRequest, opts ...grpc.CallOption) (*StrategyTradeResponse, error)
}

type strategyServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewStrategyServiceClient(cc grpc.ClientConnInterface) StrategyServiceClient {
	return &strategyServiceClient{cc}
}

func (c *strategyServiceClient) StrategyTradeSearch(ctx context.Context, in *StrategyTradeSearchRequest, opts ...grpc.CallOption) (*StrategyTradeResponse, error) {
	out := new(StrategyTradeResponse)
	err := c.cc.Invoke(ctx, "/statistico.StrategyService/StrategyTradeSearch", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// StrategyServiceServer is the server API for StrategyService service.
// All implementations must embed UnimplementedStrategyServiceServer
// for forward compatibility
type StrategyServiceServer interface {
	StrategyTradeSearch(context.Context, *StrategyTradeSearchRequest) (*StrategyTradeResponse, error)
	mustEmbedUnimplementedStrategyServiceServer()
}

// UnimplementedStrategyServiceServer must be embedded to have forward compatible implementations.
type UnimplementedStrategyServiceServer struct {
}

func (UnimplementedStrategyServiceServer) StrategyTradeSearch(context.Context, *StrategyTradeSearchRequest) (*StrategyTradeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method StrategyTradeSearch not implemented")
}
func (UnimplementedStrategyServiceServer) mustEmbedUnimplementedStrategyServiceServer() {}

// UnsafeStrategyServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to StrategyServiceServer will
// result in compilation errors.
type UnsafeStrategyServiceServer interface {
	mustEmbedUnimplementedStrategyServiceServer()
}

func RegisterStrategyServiceServer(s grpc.ServiceRegistrar, srv StrategyServiceServer) {
	s.RegisterService(&_StrategyService_serviceDesc, srv)
}

func _StrategyService_StrategyTradeSearch_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StrategyTradeSearchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StrategyServiceServer).StrategyTradeSearch(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico.StrategyService/StrategyTradeSearch",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StrategyServiceServer).StrategyTradeSearch(ctx, req.(*StrategyTradeSearchRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _StrategyService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "statistico.StrategyService",
	HandlerType: (*StrategyServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "StrategyTradeSearch",
			Handler:    _StrategyService_StrategyTradeSearch_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "strategy.proto",
}
