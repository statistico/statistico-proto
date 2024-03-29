// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: odds_compiler.proto

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

// OddsCompilerServiceClient is the client API for OddsCompilerService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OddsCompilerServiceClient interface {
	// Returns event market for a given event containing odds data
	GetEventMarket(ctx context.Context, in *EventRequest, opts ...grpc.CallOption) (*EventMarket, error)
}

type oddsCompilerServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewOddsCompilerServiceClient(cc grpc.ClientConnInterface) OddsCompilerServiceClient {
	return &oddsCompilerServiceClient{cc}
}

func (c *oddsCompilerServiceClient) GetEventMarket(ctx context.Context, in *EventRequest, opts ...grpc.CallOption) (*EventMarket, error) {
	out := new(EventMarket)
	err := c.cc.Invoke(ctx, "/statistico.OddsCompilerService/GetEventMarket", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OddsCompilerServiceServer is the server API for OddsCompilerService service.
// All implementations must embed UnimplementedOddsCompilerServiceServer
// for forward compatibility
type OddsCompilerServiceServer interface {
	// Returns event market for a given event containing odds data
	GetEventMarket(context.Context, *EventRequest) (*EventMarket, error)
	mustEmbedUnimplementedOddsCompilerServiceServer()
}

// UnimplementedOddsCompilerServiceServer must be embedded to have forward compatible implementations.
type UnimplementedOddsCompilerServiceServer struct {
}

func (UnimplementedOddsCompilerServiceServer) GetEventMarket(context.Context, *EventRequest) (*EventMarket, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEventMarket not implemented")
}
func (UnimplementedOddsCompilerServiceServer) mustEmbedUnimplementedOddsCompilerServiceServer() {}

// UnsafeOddsCompilerServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OddsCompilerServiceServer will
// result in compilation errors.
type UnsafeOddsCompilerServiceServer interface {
	mustEmbedUnimplementedOddsCompilerServiceServer()
}

func RegisterOddsCompilerServiceServer(s grpc.ServiceRegistrar, srv OddsCompilerServiceServer) {
	s.RegisterService(&OddsCompilerService_ServiceDesc, srv)
}

func _OddsCompilerService_GetEventMarket_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EventRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OddsCompilerServiceServer).GetEventMarket(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico.OddsCompilerService/GetEventMarket",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OddsCompilerServiceServer).GetEventMarket(ctx, req.(*EventRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// OddsCompilerService_ServiceDesc is the grpc.ServiceDesc for OddsCompilerService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OddsCompilerService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "statistico.OddsCompilerService",
	HandlerType: (*OddsCompilerServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetEventMarket",
			Handler:    _OddsCompilerService_GetEventMarket_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "odds_compiler.proto",
}
