// Code generated by protoc-gen-go. DO NOT EDIT.
// source: strategy.proto

package statisticoproto

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type StrategyTradeSearchRequest struct {
	Market               string               `protobuf:"bytes,1,opt,name=market,proto3" json:"market,omitempty"`
	MarketRunnerFilter   *RunnerFilter        `protobuf:"bytes,2,opt,name=market_runner_filter,json=marketRunnerFilter,proto3" json:"market_runner_filter,omitempty"`
	CompetitionIds       []uint64             `protobuf:"varint,3,rep,packed,name=competition_ids,json=competitionIds,proto3" json:"competition_ids,omitempty"`
	SeasonIds            []uint64             `protobuf:"varint,4,rep,packed,name=season_ids,json=seasonIds,proto3" json:"season_ids,omitempty"`
	DateFrom             *timestamp.Timestamp `protobuf:"bytes,5,opt,name=dateFrom,proto3" json:"dateFrom,omitempty"`
	DateTo               *timestamp.Timestamp `protobuf:"bytes,6,opt,name=dateTo,proto3" json:"dateTo,omitempty"`
	ResultFilters        []*ResultFilter      `protobuf:"bytes,7,rep,name=result_filters,json=resultFilters,proto3" json:"result_filters,omitempty"`
	StatFilters          []*StatFilter        `protobuf:"bytes,8,rep,name=stat_filters,json=statFilters,proto3" json:"stat_filters,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *StrategyTradeSearchRequest) Reset()         { *m = StrategyTradeSearchRequest{} }
func (m *StrategyTradeSearchRequest) String() string { return proto.CompactTextString(m) }
func (*StrategyTradeSearchRequest) ProtoMessage()    {}
func (*StrategyTradeSearchRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_46ec5ce6dd46feab, []int{0}
}

func (m *StrategyTradeSearchRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StrategyTradeSearchRequest.Unmarshal(m, b)
}
func (m *StrategyTradeSearchRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StrategyTradeSearchRequest.Marshal(b, m, deterministic)
}
func (m *StrategyTradeSearchRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StrategyTradeSearchRequest.Merge(m, src)
}
func (m *StrategyTradeSearchRequest) XXX_Size() int {
	return xxx_messageInfo_StrategyTradeSearchRequest.Size(m)
}
func (m *StrategyTradeSearchRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_StrategyTradeSearchRequest.DiscardUnknown(m)
}

var xxx_messageInfo_StrategyTradeSearchRequest proto.InternalMessageInfo

func (m *StrategyTradeSearchRequest) GetMarket() string {
	if m != nil {
		return m.Market
	}
	return ""
}

func (m *StrategyTradeSearchRequest) GetMarketRunnerFilter() *RunnerFilter {
	if m != nil {
		return m.MarketRunnerFilter
	}
	return nil
}

func (m *StrategyTradeSearchRequest) GetCompetitionIds() []uint64 {
	if m != nil {
		return m.CompetitionIds
	}
	return nil
}

func (m *StrategyTradeSearchRequest) GetSeasonIds() []uint64 {
	if m != nil {
		return m.SeasonIds
	}
	return nil
}

func (m *StrategyTradeSearchRequest) GetDateFrom() *timestamp.Timestamp {
	if m != nil {
		return m.DateFrom
	}
	return nil
}

func (m *StrategyTradeSearchRequest) GetDateTo() *timestamp.Timestamp {
	if m != nil {
		return m.DateTo
	}
	return nil
}

func (m *StrategyTradeSearchRequest) GetResultFilters() []*ResultFilter {
	if m != nil {
		return m.ResultFilters
	}
	return nil
}

func (m *StrategyTradeSearchRequest) GetStatFilters() []*StatFilter {
	if m != nil {
		return m.StatFilters
	}
	return nil
}

type StrategyTrade struct {
	MarketName           string               `protobuf:"bytes,1,opt,name=market_name,json=marketName,proto3" json:"market_name,omitempty"`
	RunnerName           string               `protobuf:"bytes,2,opt,name=runner_name,json=runnerName,proto3" json:"runner_name,omitempty"`
	RunnerPrice          float32              `protobuf:"fixed32,3,opt,name=runner_price,json=runnerPrice,proto3" json:"runner_price,omitempty"`
	EventId              uint64               `protobuf:"varint,4,opt,name=event_id,json=eventId,proto3" json:"event_id,omitempty"`
	CompetitionId        uint64               `protobuf:"varint,5,opt,name=competition_id,json=competitionId,proto3" json:"competition_id,omitempty"`
	SeasonId             uint64               `protobuf:"varint,6,opt,name=season_id,json=seasonId,proto3" json:"season_id,omitempty"`
	EventDate            *timestamp.Timestamp `protobuf:"bytes,7,opt,name=event_date,json=eventDate,proto3" json:"event_date,omitempty"`
	Result               TradeResultEnum      `protobuf:"varint,8,opt,name=result,proto3,enum=statisticoproto.TradeResultEnum" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *StrategyTrade) Reset()         { *m = StrategyTrade{} }
func (m *StrategyTrade) String() string { return proto.CompactTextString(m) }
func (*StrategyTrade) ProtoMessage()    {}
func (*StrategyTrade) Descriptor() ([]byte, []int) {
	return fileDescriptor_46ec5ce6dd46feab, []int{1}
}

func (m *StrategyTrade) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StrategyTrade.Unmarshal(m, b)
}
func (m *StrategyTrade) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StrategyTrade.Marshal(b, m, deterministic)
}
func (m *StrategyTrade) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StrategyTrade.Merge(m, src)
}
func (m *StrategyTrade) XXX_Size() int {
	return xxx_messageInfo_StrategyTrade.Size(m)
}
func (m *StrategyTrade) XXX_DiscardUnknown() {
	xxx_messageInfo_StrategyTrade.DiscardUnknown(m)
}

var xxx_messageInfo_StrategyTrade proto.InternalMessageInfo

func (m *StrategyTrade) GetMarketName() string {
	if m != nil {
		return m.MarketName
	}
	return ""
}

func (m *StrategyTrade) GetRunnerName() string {
	if m != nil {
		return m.RunnerName
	}
	return ""
}

func (m *StrategyTrade) GetRunnerPrice() float32 {
	if m != nil {
		return m.RunnerPrice
	}
	return 0
}

func (m *StrategyTrade) GetEventId() uint64 {
	if m != nil {
		return m.EventId
	}
	return 0
}

func (m *StrategyTrade) GetCompetitionId() uint64 {
	if m != nil {
		return m.CompetitionId
	}
	return 0
}

func (m *StrategyTrade) GetSeasonId() uint64 {
	if m != nil {
		return m.SeasonId
	}
	return 0
}

func (m *StrategyTrade) GetEventDate() *timestamp.Timestamp {
	if m != nil {
		return m.EventDate
	}
	return nil
}

func (m *StrategyTrade) GetResult() TradeResultEnum {
	if m != nil {
		return m.Result
	}
	return TradeResultEnum_SUCCESS
}

func init() {
	proto.RegisterType((*StrategyTradeSearchRequest)(nil), "statisticoproto.StrategyTradeSearchRequest")
	proto.RegisterType((*StrategyTrade)(nil), "statisticoproto.StrategyTrade")
}

func init() {
	proto.RegisterFile("strategy.proto", fileDescriptor_46ec5ce6dd46feab)
}

var fileDescriptor_46ec5ce6dd46feab = []byte{
	// 481 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x93, 0xc1, 0x6f, 0xd3, 0x30,
	0x14, 0xc6, 0x49, 0x13, 0xb2, 0xf4, 0xb5, 0x4d, 0x25, 0x83, 0x90, 0xc9, 0x34, 0x16, 0x2a, 0x21,
	0x22, 0x21, 0x65, 0xa8, 0x48, 0x08, 0x2e, 0x9c, 0xc6, 0xa4, 0x5d, 0x00, 0xb9, 0xbd, 0x57, 0x5e,
	0xf3, 0x5a, 0x22, 0x9a, 0xb8, 0xd8, 0xce, 0xa4, 0xfd, 0x75, 0x5c, 0xf9, 0xb3, 0x50, 0x6c, 0xa7,
	0x6a, 0x59, 0x61, 0x37, 0xbf, 0xcf, 0xbf, 0xf7, 0x92, 0xf7, 0x7d, 0x32, 0xc4, 0x4a, 0x4b, 0xae,
	0x71, 0x7d, 0x97, 0x6f, 0xa5, 0xd0, 0x82, 0x8c, 0x95, 0xe6, 0xba, 0x54, 0xba, 0x5c, 0x0a, 0x23,
	0x24, 0x80, 0x75, 0x53, 0xd9, 0xcb, 0x64, 0xb8, 0x2a, 0x37, 0x1a, 0xa5, 0xab, 0xce, 0xd7, 0x42,
	0xac, 0x37, 0x78, 0x61, 0xaa, 0x9b, 0x66, 0x75, 0xa1, 0xcb, 0x0a, 0x95, 0xe6, 0xd5, 0xd6, 0x02,
	0x93, 0x5f, 0x3e, 0x24, 0x33, 0x37, 0x7e, 0x2e, 0x79, 0x81, 0x33, 0xe4, 0x72, 0xf9, 0x9d, 0xe1,
	0xcf, 0x06, 0x95, 0x26, 0xcf, 0x20, 0xac, 0xb8, 0xfc, 0x81, 0x9a, 0x7a, 0xa9, 0x97, 0xf5, 0x99,
	0xab, 0xc8, 0x57, 0x78, 0x6a, 0x4f, 0x0b, 0xd9, 0xd4, 0x35, 0xca, 0x85, 0xfd, 0x2a, 0xed, 0xa5,
	0x5e, 0x36, 0x98, 0x9e, 0xe5, 0x7f, 0xfd, 0x61, 0xce, 0x0c, 0x75, 0x65, 0x20, 0x46, 0x6c, 0xeb,
	0xbe, 0x46, 0x5e, 0xc3, 0x78, 0x29, 0xaa, 0x2d, 0xea, 0x52, 0x97, 0xa2, 0x5e, 0x94, 0x85, 0xa2,
	0x7e, 0xea, 0x67, 0x01, 0x8b, 0xf7, 0xe4, 0xeb, 0x42, 0x91, 0x33, 0x00, 0x85, 0x5c, 0x39, 0x26,
	0x30, 0x4c, 0xdf, 0x2a, 0xed, 0xf5, 0x7b, 0x88, 0x0a, 0xae, 0xf1, 0x4a, 0x8a, 0x8a, 0x3e, 0x36,
	0x3f, 0x93, 0xe4, 0xd6, 0x83, 0xbc, 0xf3, 0x20, 0x9f, 0x77, 0x1e, 0xb0, 0x1d, 0x4b, 0xa6, 0x10,
	0xb6, 0xe7, 0xb9, 0xa0, 0xe1, 0x83, 0x5d, 0x8e, 0x24, 0x97, 0x10, 0x4b, 0x54, 0xcd, 0x46, 0xbb,
	0xed, 0x15, 0x3d, 0x49, 0xfd, 0xe3, 0xeb, 0x1b, 0xcc, 0xad, 0x3f, 0x92, 0x7b, 0x95, 0x22, 0x9f,
	0x60, 0xd8, 0xe2, 0xbb, 0x19, 0x91, 0x99, 0x71, 0x7a, 0x6f, 0xc6, 0x4c, 0xf3, 0x6e, 0xc2, 0x40,
	0xed, 0xce, 0x6a, 0xf2, 0xbb, 0x07, 0xa3, 0x83, 0x04, 0xc9, 0x39, 0x0c, 0x5c, 0x38, 0x35, 0xaf,
	0xd0, 0x25, 0x07, 0x56, 0xfa, 0xc2, 0x2b, 0x03, 0xb8, 0xd8, 0x0c, 0xd0, 0xb3, 0x80, 0x95, 0x0c,
	0xf0, 0x12, 0x86, 0x0e, 0xd8, 0xca, 0x72, 0x89, 0xd4, 0x4f, 0xbd, 0xac, 0xc7, 0x5c, 0xd3, 0xb7,
	0x56, 0x22, 0xcf, 0x21, 0xc2, 0x5b, 0xac, 0xf5, 0xa2, 0x2c, 0x68, 0x90, 0x7a, 0x59, 0xc0, 0x4e,
	0x4c, 0x7d, 0x5d, 0x90, 0x57, 0x10, 0x1f, 0x66, 0x69, 0x92, 0x08, 0xd8, 0xe8, 0x20, 0x4a, 0x72,
	0x0a, 0xfd, 0x5d, 0x92, 0xc6, 0xf5, 0x80, 0x45, 0x5d, 0x90, 0xe4, 0x23, 0x80, 0x1d, 0xdf, 0x7a,
	0x4d, 0x4f, 0x1e, 0xcc, 0xa4, 0x6f, 0xe8, 0x4b, 0xae, 0x91, 0x7c, 0x80, 0xd0, 0x3a, 0x4c, 0xa3,
	0xd4, 0xcb, 0xe2, 0x69, 0x7a, 0xcf, 0x4a, 0x63, 0x93, 0xcd, 0xe4, 0x73, 0xdd, 0x54, 0xcc, 0xf1,
	0xd3, 0x3b, 0x18, 0x77, 0x4e, 0xce, 0x50, 0xde, 0xb6, 0x6b, 0xae, 0xe0, 0xc9, 0x91, 0xe7, 0x41,
	0xde, 0x1c, 0x89, 0xe7, 0x5f, 0x8f, 0x28, 0x79, 0xf1, 0x7f, 0x78, 0xf2, 0xe8, 0xad, 0x77, 0x13,
	0x9a, 0x8b, 0x77, 0x7f, 0x02, 0x00, 0x00, 0xff, 0xff, 0x12, 0x33, 0xe5, 0x43, 0xec, 0x03, 0x00,
	0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// StrategyServiceClient is the client API for StrategyService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type StrategyServiceClient interface {
	StrategyTradeSearch(ctx context.Context, in *StrategyTradeSearchRequest, opts ...grpc.CallOption) (StrategyService_StrategyTradeSearchClient, error)
}

type strategyServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewStrategyServiceClient(cc grpc.ClientConnInterface) StrategyServiceClient {
	return &strategyServiceClient{cc}
}

func (c *strategyServiceClient) StrategyTradeSearch(ctx context.Context, in *StrategyTradeSearchRequest, opts ...grpc.CallOption) (StrategyService_StrategyTradeSearchClient, error) {
	stream, err := c.cc.NewStream(ctx, &_StrategyService_serviceDesc.Streams[0], "/statisticoproto.StrategyService/StrategyTradeSearch", opts...)
	if err != nil {
		return nil, err
	}
	x := &strategyServiceStrategyTradeSearchClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type StrategyService_StrategyTradeSearchClient interface {
	Recv() (*StrategyTrade, error)
	grpc.ClientStream
}

type strategyServiceStrategyTradeSearchClient struct {
	grpc.ClientStream
}

func (x *strategyServiceStrategyTradeSearchClient) Recv() (*StrategyTrade, error) {
	m := new(StrategyTrade)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// StrategyServiceServer is the server API for StrategyService service.
type StrategyServiceServer interface {
	StrategyTradeSearch(*StrategyTradeSearchRequest, StrategyService_StrategyTradeSearchServer) error
}

// UnimplementedStrategyServiceServer can be embedded to have forward compatible implementations.
type UnimplementedStrategyServiceServer struct {
}

func (*UnimplementedStrategyServiceServer) StrategyTradeSearch(req *StrategyTradeSearchRequest, srv StrategyService_StrategyTradeSearchServer) error {
	return status.Errorf(codes.Unimplemented, "method StrategyTradeSearch not implemented")
}

func RegisterStrategyServiceServer(s *grpc.Server, srv StrategyServiceServer) {
	s.RegisterService(&_StrategyService_serviceDesc, srv)
}

func _StrategyService_StrategyTradeSearch_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(StrategyTradeSearchRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(StrategyServiceServer).StrategyTradeSearch(m, &strategyServiceStrategyTradeSearchServer{stream})
}

type StrategyService_StrategyTradeSearchServer interface {
	Send(*StrategyTrade) error
	grpc.ServerStream
}

type strategyServiceStrategyTradeSearchServer struct {
	grpc.ServerStream
}

func (x *strategyServiceStrategyTradeSearchServer) Send(m *StrategyTrade) error {
	return x.ServerStream.SendMsg(m)
}

var _StrategyService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "statisticoproto.StrategyService",
	HandlerType: (*StrategyServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StrategyTradeSearch",
			Handler:       _StrategyService_StrategyTradeSearch_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "strategy.proto",
}
