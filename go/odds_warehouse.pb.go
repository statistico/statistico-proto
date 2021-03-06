// Code generated by protoc-gen-go. DO NOT EDIT.
// source: odds_warehouse.proto

package statistico

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
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

type MarketRunnerRequest struct {
	Market               string               `protobuf:"bytes,1,opt,name=market,proto3" json:"market,omitempty"`
	Runner               string               `protobuf:"bytes,2,opt,name=runner,proto3" json:"runner,omitempty"`
	MinOdds              *wrappers.FloatValue `protobuf:"bytes,3,opt,name=min_odds,json=minOdds,proto3" json:"min_odds,omitempty"`
	MaxOdds              *wrappers.FloatValue `protobuf:"bytes,4,opt,name=max_odds,json=maxOdds,proto3" json:"max_odds,omitempty"`
	Line                 string               `protobuf:"bytes,5,opt,name=line,proto3" json:"line,omitempty"`
	Side                 SideEnum             `protobuf:"varint,6,opt,name=side,proto3,enum=statistico.SideEnum" json:"side,omitempty"`
	CompetitionIds       []uint64             `protobuf:"varint,7,rep,packed,name=competition_ids,json=competitionIds,proto3" json:"competition_ids,omitempty"`
	SeasonIds            []uint64             `protobuf:"varint,8,rep,packed,name=season_ids,json=seasonIds,proto3" json:"season_ids,omitempty"`
	DateFrom             *timestamp.Timestamp `protobuf:"bytes,9,opt,name=dateFrom,proto3" json:"dateFrom,omitempty"`
	DateTo               *timestamp.Timestamp `protobuf:"bytes,10,opt,name=dateTo,proto3" json:"dateTo,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *MarketRunnerRequest) Reset()         { *m = MarketRunnerRequest{} }
func (m *MarketRunnerRequest) String() string { return proto.CompactTextString(m) }
func (*MarketRunnerRequest) ProtoMessage()    {}
func (*MarketRunnerRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_578305cfb298dd52, []int{0}
}

func (m *MarketRunnerRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MarketRunnerRequest.Unmarshal(m, b)
}
func (m *MarketRunnerRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MarketRunnerRequest.Marshal(b, m, deterministic)
}
func (m *MarketRunnerRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MarketRunnerRequest.Merge(m, src)
}
func (m *MarketRunnerRequest) XXX_Size() int {
	return xxx_messageInfo_MarketRunnerRequest.Size(m)
}
func (m *MarketRunnerRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_MarketRunnerRequest.DiscardUnknown(m)
}

var xxx_messageInfo_MarketRunnerRequest proto.InternalMessageInfo

func (m *MarketRunnerRequest) GetMarket() string {
	if m != nil {
		return m.Market
	}
	return ""
}

func (m *MarketRunnerRequest) GetRunner() string {
	if m != nil {
		return m.Runner
	}
	return ""
}

func (m *MarketRunnerRequest) GetMinOdds() *wrappers.FloatValue {
	if m != nil {
		return m.MinOdds
	}
	return nil
}

func (m *MarketRunnerRequest) GetMaxOdds() *wrappers.FloatValue {
	if m != nil {
		return m.MaxOdds
	}
	return nil
}

func (m *MarketRunnerRequest) GetLine() string {
	if m != nil {
		return m.Line
	}
	return ""
}

func (m *MarketRunnerRequest) GetSide() SideEnum {
	if m != nil {
		return m.Side
	}
	return SideEnum_BACK
}

func (m *MarketRunnerRequest) GetCompetitionIds() []uint64 {
	if m != nil {
		return m.CompetitionIds
	}
	return nil
}

func (m *MarketRunnerRequest) GetSeasonIds() []uint64 {
	if m != nil {
		return m.SeasonIds
	}
	return nil
}

func (m *MarketRunnerRequest) GetDateFrom() *timestamp.Timestamp {
	if m != nil {
		return m.DateFrom
	}
	return nil
}

func (m *MarketRunnerRequest) GetDateTo() *timestamp.Timestamp {
	if m != nil {
		return m.DateTo
	}
	return nil
}

type MarketRunner struct {
	MarketId             string               `protobuf:"bytes,1,opt,name=market_id,json=marketId,proto3" json:"market_id,omitempty"`
	MarketName           string               `protobuf:"bytes,2,opt,name=market_name,json=marketName,proto3" json:"market_name,omitempty"`
	RunnerId             uint64               `protobuf:"varint,3,opt,name=runner_id,json=runnerId,proto3" json:"runner_id,omitempty"`
	RunnerName           string               `protobuf:"bytes,4,opt,name=runner_name,json=runnerName,proto3" json:"runner_name,omitempty"`
	EventId              uint64               `protobuf:"varint,5,opt,name=event_id,json=eventId,proto3" json:"event_id,omitempty"`
	CompetitionId        uint64               `protobuf:"varint,6,opt,name=competition_id,json=competitionId,proto3" json:"competition_id,omitempty"`
	SeasonId             uint64               `protobuf:"varint,7,opt,name=season_id,json=seasonId,proto3" json:"season_id,omitempty"`
	EventDate            *timestamp.Timestamp `protobuf:"bytes,8,opt,name=event_date,json=eventDate,proto3" json:"event_date,omitempty"`
	Exchange             string               `protobuf:"bytes,9,opt,name=exchange,proto3" json:"exchange,omitempty"`
	Price                *Price               `protobuf:"bytes,10,opt,name=price,proto3" json:"price,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *MarketRunner) Reset()         { *m = MarketRunner{} }
func (m *MarketRunner) String() string { return proto.CompactTextString(m) }
func (*MarketRunner) ProtoMessage()    {}
func (*MarketRunner) Descriptor() ([]byte, []int) {
	return fileDescriptor_578305cfb298dd52, []int{1}
}

func (m *MarketRunner) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MarketRunner.Unmarshal(m, b)
}
func (m *MarketRunner) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MarketRunner.Marshal(b, m, deterministic)
}
func (m *MarketRunner) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MarketRunner.Merge(m, src)
}
func (m *MarketRunner) XXX_Size() int {
	return xxx_messageInfo_MarketRunner.Size(m)
}
func (m *MarketRunner) XXX_DiscardUnknown() {
	xxx_messageInfo_MarketRunner.DiscardUnknown(m)
}

var xxx_messageInfo_MarketRunner proto.InternalMessageInfo

func (m *MarketRunner) GetMarketId() string {
	if m != nil {
		return m.MarketId
	}
	return ""
}

func (m *MarketRunner) GetMarketName() string {
	if m != nil {
		return m.MarketName
	}
	return ""
}

func (m *MarketRunner) GetRunnerId() uint64 {
	if m != nil {
		return m.RunnerId
	}
	return 0
}

func (m *MarketRunner) GetRunnerName() string {
	if m != nil {
		return m.RunnerName
	}
	return ""
}

func (m *MarketRunner) GetEventId() uint64 {
	if m != nil {
		return m.EventId
	}
	return 0
}

func (m *MarketRunner) GetCompetitionId() uint64 {
	if m != nil {
		return m.CompetitionId
	}
	return 0
}

func (m *MarketRunner) GetSeasonId() uint64 {
	if m != nil {
		return m.SeasonId
	}
	return 0
}

func (m *MarketRunner) GetEventDate() *timestamp.Timestamp {
	if m != nil {
		return m.EventDate
	}
	return nil
}

func (m *MarketRunner) GetExchange() string {
	if m != nil {
		return m.Exchange
	}
	return ""
}

func (m *MarketRunner) GetPrice() *Price {
	if m != nil {
		return m.Price
	}
	return nil
}

type Price struct {
	Value                float32  `protobuf:"fixed32,1,opt,name=value,proto3" json:"value,omitempty"`
	Size                 float32  `protobuf:"fixed32,2,opt,name=size,proto3" json:"size,omitempty"`
	Side                 SideEnum `protobuf:"varint,3,opt,name=side,proto3,enum=statistico.SideEnum" json:"side,omitempty"`
	Timestamp            int64    `protobuf:"varint,4,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Price) Reset()         { *m = Price{} }
func (m *Price) String() string { return proto.CompactTextString(m) }
func (*Price) ProtoMessage()    {}
func (*Price) Descriptor() ([]byte, []int) {
	return fileDescriptor_578305cfb298dd52, []int{2}
}

func (m *Price) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Price.Unmarshal(m, b)
}
func (m *Price) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Price.Marshal(b, m, deterministic)
}
func (m *Price) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Price.Merge(m, src)
}
func (m *Price) XXX_Size() int {
	return xxx_messageInfo_Price.Size(m)
}
func (m *Price) XXX_DiscardUnknown() {
	xxx_messageInfo_Price.DiscardUnknown(m)
}

var xxx_messageInfo_Price proto.InternalMessageInfo

func (m *Price) GetValue() float32 {
	if m != nil {
		return m.Value
	}
	return 0
}

func (m *Price) GetSize() float32 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *Price) GetSide() SideEnum {
	if m != nil {
		return m.Side
	}
	return SideEnum_BACK
}

func (m *Price) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

func init() {
	proto.RegisterType((*MarketRunnerRequest)(nil), "statistico.MarketRunnerRequest")
	proto.RegisterType((*MarketRunner)(nil), "statistico.MarketRunner")
	proto.RegisterType((*Price)(nil), "statistico.Price")
}

func init() { proto.RegisterFile("odds_warehouse.proto", fileDescriptor_578305cfb298dd52) }

var fileDescriptor_578305cfb298dd52 = []byte{
	// 572 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x54, 0xdb, 0x6e, 0x13, 0x31,
	0x10, 0x25, 0xc9, 0x26, 0xd9, 0x9d, 0x42, 0x11, 0x26, 0x42, 0x4b, 0x0a, 0x34, 0x8a, 0x84, 0x9a,
	0x17, 0xb6, 0x90, 0x4a, 0x48, 0x88, 0x37, 0x04, 0x95, 0xf2, 0xc0, 0x45, 0x4e, 0x05, 0x12, 0x2f,
	0x91, 0x1b, 0x0f, 0x89, 0xd5, 0x78, 0x1d, 0xd6, 0xde, 0xb6, 0xf0, 0x43, 0x7c, 0x1b, 0x7f, 0x81,
	0x3c, 0xde, 0x5c, 0xca, 0x45, 0xe5, 0xcd, 0x73, 0xe6, 0x9c, 0xce, 0xf4, 0x9c, 0xd9, 0x40, 0xc7,
	0x48, 0x69, 0x27, 0x17, 0xa2, 0xc0, 0xb9, 0x29, 0x2d, 0x66, 0xcb, 0xc2, 0x38, 0xc3, 0xc0, 0x3a,
	0xe1, 0x94, 0x75, 0x6a, 0x6a, 0xba, 0x80, 0x79, 0xa9, 0x03, 0xde, 0xdd, 0x9f, 0x19, 0x33, 0x5b,
	0xe0, 0x21, 0x55, 0xa7, 0xe5, 0x97, 0x43, 0xa7, 0x34, 0x5a, 0x27, 0xf4, 0xb2, 0x22, 0x3c, 0xfa,
	0x9d, 0x70, 0x51, 0x88, 0xe5, 0x12, 0x0b, 0x1b, 0xfa, 0xfd, 0x1f, 0x0d, 0xb8, 0xfb, 0x56, 0x14,
	0x67, 0xe8, 0x78, 0x99, 0xe7, 0x58, 0x70, 0xfc, 0x5a, 0xa2, 0x75, 0xec, 0x1e, 0xb4, 0x34, 0xc1,
	0x69, 0xad, 0x57, 0x1b, 0x24, 0xbc, 0xaa, 0x3c, 0x5e, 0x10, 0x31, 0xad, 0x07, 0x3c, 0x54, 0xec,
	0x39, 0xc4, 0x5a, 0xe5, 0x13, 0xbf, 0x7c, 0xda, 0xe8, 0xd5, 0x06, 0x3b, 0xc3, 0xbd, 0x2c, 0x8c,
	0xce, 0x56, 0xa3, 0xb3, 0xe3, 0x85, 0x11, 0xee, 0xa3, 0x58, 0x94, 0xc8, 0xdb, 0x5a, 0xe5, 0xef,
	0xa5, 0xb4, 0xa4, 0x13, 0x97, 0x41, 0x17, 0xfd, 0x8f, 0x4e, 0x5c, 0x92, 0x8e, 0x41, 0xb4, 0x50,
	0x39, 0xa6, 0x4d, 0xda, 0x82, 0xde, 0x6c, 0x00, 0x91, 0x55, 0x12, 0xd3, 0x56, 0xaf, 0x36, 0xd8,
	0x1d, 0x76, 0xb2, 0x8d, 0x67, 0xd9, 0x58, 0x49, 0x7c, 0x93, 0x97, 0x9a, 0x13, 0x83, 0x1d, 0xc0,
	0xed, 0xa9, 0xd1, 0x4b, 0x74, 0xca, 0x29, 0x93, 0x4f, 0x94, 0xb4, 0x69, 0xbb, 0xd7, 0x18, 0x44,
	0x7c, 0x77, 0x0b, 0x1e, 0x49, 0xcb, 0x1e, 0x02, 0x58, 0x14, 0xb6, 0xe2, 0xc4, 0xc4, 0x49, 0x02,
	0x32, 0x0a, 0xdb, 0x4b, 0xe1, 0xf0, 0xb8, 0x30, 0x3a, 0x4d, 0x68, 0xfb, 0xee, 0x1f, 0xdb, 0x9f,
	0xac, 0x12, 0xe1, 0x6b, 0x2e, 0x1b, 0x42, 0xcb, 0xbf, 0x4f, 0x4c, 0x0a, 0xd7, 0xaa, 0x2a, 0x66,
	0xff, 0x67, 0x1d, 0x6e, 0x6e, 0x27, 0xc5, 0xf6, 0x20, 0x09, 0xa1, 0x4c, 0x94, 0xac, 0x52, 0x8a,
	0x03, 0x30, 0x92, 0x6c, 0x1f, 0x76, 0xaa, 0x66, 0x2e, 0x34, 0x56, 0x61, 0x41, 0x80, 0xde, 0x09,
	0x8d, 0x5e, 0x1d, 0xa2, 0xf3, 0x6a, 0x9f, 0x58, 0xc4, 0xe3, 0x00, 0x04, 0x75, 0xd5, 0x24, 0x75,
	0x14, 0xd4, 0x01, 0x22, 0xf5, 0x7d, 0x88, 0xf1, 0x1c, 0x73, 0x1a, 0xdd, 0x24, 0x71, 0x9b, 0xea,
	0x91, 0x64, 0x8f, 0x61, 0xf7, 0xaa, 0xb7, 0x94, 0x47, 0xc4, 0x6f, 0x5d, 0xb1, 0xd6, 0xcf, 0x5f,
	0x3b, 0x9b, 0xb6, 0xc3, 0xfc, 0x95, 0xb1, 0xec, 0x05, 0x40, 0xf8, 0xf3, 0xfe, 0x7f, 0x4f, 0xe3,
	0x6b, 0x3d, 0x4a, 0x88, 0xfd, 0x5a, 0x38, 0x64, 0x5d, 0x88, 0xf1, 0x72, 0x3a, 0x17, 0xf9, 0x0c,
	0x29, 0x92, 0x84, 0xaf, 0x6b, 0x76, 0x00, 0xcd, 0x65, 0xa1, 0xa6, 0x58, 0xb9, 0x7e, 0x67, 0xfb,
	0x42, 0x3e, 0xf8, 0x06, 0x0f, 0xfd, 0xfe, 0x37, 0x68, 0x52, 0xcd, 0x3a, 0xd0, 0x3c, 0xf7, 0x87,
	0x47, 0xfe, 0xd6, 0x79, 0x28, 0xfc, 0xf1, 0x59, 0xf5, 0x3d, 0xb8, 0x5a, 0xe7, 0xf4, 0x5e, 0x1f,
	0x5f, 0xe3, 0xda, 0xe3, 0x7b, 0x00, 0xc9, 0xfa, 0x2b, 0x25, 0x6b, 0x1b, 0x7c, 0x03, 0x0c, 0xcf,
	0xa0, 0xe3, 0x0f, 0xfc, 0xd3, 0xea, 0x07, 0x60, 0x8c, 0xc5, 0xb9, 0xdf, 0x64, 0x0c, 0x6c, 0x3b,
	0xfd, 0x31, 0x8a, 0x62, 0x3a, 0x67, 0xfb, 0xdb, 0x73, 0xfe, 0xf2, 0x1d, 0x77, 0xd3, 0x7f, 0x11,
	0xfa, 0x37, 0x9e, 0xd6, 0x5e, 0x1d, 0x7d, 0x7e, 0x36, 0x53, 0x6e, 0x5e, 0x9e, 0x66, 0x53, 0xa3,
	0x0f, 0x37, 0xcc, 0xad, 0xe7, 0x13, 0xb2, 0xfb, 0xe5, 0x06, 0x38, 0x6d, 0x11, 0x72, 0xf4, 0x2b,
	0x00, 0x00, 0xff, 0xff, 0x35, 0x6d, 0x31, 0x4c, 0xaa, 0x04, 0x00, 0x00,
}
