// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: odds_warehouse.proto

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

// OddsWarehouseServiceClient is the client API for OddsWarehouseService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OddsWarehouseServiceClient interface {
	GetExchangeOdds(ctx context.Context, in *ExchangeOddsRequest, opts ...grpc.CallOption) (OddsWarehouseService_GetExchangeOddsClient, error)
}

type oddsWarehouseServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewOddsWarehouseServiceClient(cc grpc.ClientConnInterface) OddsWarehouseServiceClient {
	return &oddsWarehouseServiceClient{cc}
}

func (c *oddsWarehouseServiceClient) GetExchangeOdds(ctx context.Context, in *ExchangeOddsRequest, opts ...grpc.CallOption) (OddsWarehouseService_GetExchangeOddsClient, error) {
	stream, err := c.cc.NewStream(ctx, &OddsWarehouseService_ServiceDesc.Streams[0], "/statistico.OddsWarehouseService/GetExchangeOdds", opts...)
	if err != nil {
		return nil, err
	}
	x := &oddsWarehouseServiceGetExchangeOddsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type OddsWarehouseService_GetExchangeOddsClient interface {
	Recv() (*ExchangeOdds, error)
	grpc.ClientStream
}

type oddsWarehouseServiceGetExchangeOddsClient struct {
	grpc.ClientStream
}

func (x *oddsWarehouseServiceGetExchangeOddsClient) Recv() (*ExchangeOdds, error) {
	m := new(ExchangeOdds)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// OddsWarehouseServiceServer is the server API for OddsWarehouseService service.
// All implementations must embed UnimplementedOddsWarehouseServiceServer
// for forward compatibility
type OddsWarehouseServiceServer interface {
	GetExchangeOdds(*ExchangeOddsRequest, OddsWarehouseService_GetExchangeOddsServer) error
	mustEmbedUnimplementedOddsWarehouseServiceServer()
}

// UnimplementedOddsWarehouseServiceServer must be embedded to have forward compatible implementations.
type UnimplementedOddsWarehouseServiceServer struct {
}

func (UnimplementedOddsWarehouseServiceServer) GetExchangeOdds(*ExchangeOddsRequest, OddsWarehouseService_GetExchangeOddsServer) error {
	return status.Errorf(codes.Unimplemented, "method GetExchangeOdds not implemented")
}
func (UnimplementedOddsWarehouseServiceServer) mustEmbedUnimplementedOddsWarehouseServiceServer() {}

// UnsafeOddsWarehouseServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OddsWarehouseServiceServer will
// result in compilation errors.
type UnsafeOddsWarehouseServiceServer interface {
	mustEmbedUnimplementedOddsWarehouseServiceServer()
}

func RegisterOddsWarehouseServiceServer(s grpc.ServiceRegistrar, srv OddsWarehouseServiceServer) {
	s.RegisterService(&OddsWarehouseService_ServiceDesc, srv)
}

func _OddsWarehouseService_GetExchangeOdds_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ExchangeOddsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OddsWarehouseServiceServer).GetExchangeOdds(m, &oddsWarehouseServiceGetExchangeOddsServer{stream})
}

type OddsWarehouseService_GetExchangeOddsServer interface {
	Send(*ExchangeOdds) error
	grpc.ServerStream
}

type oddsWarehouseServiceGetExchangeOddsServer struct {
	grpc.ServerStream
}

func (x *oddsWarehouseServiceGetExchangeOddsServer) Send(m *ExchangeOdds) error {
	return x.ServerStream.SendMsg(m)
}

// OddsWarehouseService_ServiceDesc is the grpc.ServiceDesc for OddsWarehouseService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OddsWarehouseService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "statistico.OddsWarehouseService",
	HandlerType: (*OddsWarehouseServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetExchangeOdds",
			Handler:       _OddsWarehouseService_GetExchangeOdds_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "odds_warehouse.proto",
}
