// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: trade.proto

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

// TradeServiceClient is the client API for TradeService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TradeServiceClient interface {
	SearchTrades(ctx context.Context, in *SearchTradesRequest, opts ...grpc.CallOption) (TradeService_SearchTradesClient, error)
}

type tradeServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTradeServiceClient(cc grpc.ClientConnInterface) TradeServiceClient {
	return &tradeServiceClient{cc}
}

func (c *tradeServiceClient) SearchTrades(ctx context.Context, in *SearchTradesRequest, opts ...grpc.CallOption) (TradeService_SearchTradesClient, error) {
	stream, err := c.cc.NewStream(ctx, &TradeService_ServiceDesc.Streams[0], "/statistico.TradeService/SearchTrades", opts...)
	if err != nil {
		return nil, err
	}
	x := &tradeServiceSearchTradesClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type TradeService_SearchTradesClient interface {
	Recv() (*Trade, error)
	grpc.ClientStream
}

type tradeServiceSearchTradesClient struct {
	grpc.ClientStream
}

func (x *tradeServiceSearchTradesClient) Recv() (*Trade, error) {
	m := new(Trade)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// TradeServiceServer is the server API for TradeService service.
// All implementations must embed UnimplementedTradeServiceServer
// for forward compatibility
type TradeServiceServer interface {
	SearchTrades(*SearchTradesRequest, TradeService_SearchTradesServer) error
	mustEmbedUnimplementedTradeServiceServer()
}

// UnimplementedTradeServiceServer must be embedded to have forward compatible implementations.
type UnimplementedTradeServiceServer struct {
}

func (UnimplementedTradeServiceServer) SearchTrades(*SearchTradesRequest, TradeService_SearchTradesServer) error {
	return status.Errorf(codes.Unimplemented, "method SearchTrades not implemented")
}
func (UnimplementedTradeServiceServer) mustEmbedUnimplementedTradeServiceServer() {}

// UnsafeTradeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TradeServiceServer will
// result in compilation errors.
type UnsafeTradeServiceServer interface {
	mustEmbedUnimplementedTradeServiceServer()
}

func RegisterTradeServiceServer(s grpc.ServiceRegistrar, srv TradeServiceServer) {
	s.RegisterService(&TradeService_ServiceDesc, srv)
}

func _TradeService_SearchTrades_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(SearchTradesRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(TradeServiceServer).SearchTrades(m, &tradeServiceSearchTradesServer{stream})
}

type TradeService_SearchTradesServer interface {
	Send(*Trade) error
	grpc.ServerStream
}

type tradeServiceSearchTradesServer struct {
	grpc.ServerStream
}

func (x *tradeServiceSearchTradesServer) Send(m *Trade) error {
	return x.ServerStream.SendMsg(m)
}

// TradeService_ServiceDesc is the grpc.ServiceDesc for TradeService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TradeService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "statistico.TradeService",
	HandlerType: (*TradeServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "SearchTrades",
			Handler:       _TradeService_SearchTrades_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "trade.proto",
}
