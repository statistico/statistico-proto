// Code generated by protoc-gen-go. DO NOT EDIT.
// source: strategy.proto

package statistico

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	wrapperspb "google.golang.org/protobuf/types/known/wrapperspb"
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

type Strategy struct {
	Id                   string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string                 `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description          string                 `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	UserId               string                 `protobuf:"bytes,4,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Market               string                 `protobuf:"bytes,5,opt,name=market,proto3" json:"market,omitempty"`
	Runner               string                 `protobuf:"bytes,6,opt,name=runner,proto3" json:"runner,omitempty"`
	MinOdds              *wrapperspb.FloatValue `protobuf:"bytes,7,opt,name=min_odds,json=minOdds,proto3" json:"min_odds,omitempty"`
	MaxOdds              *wrapperspb.FloatValue `protobuf:"bytes,8,opt,name=max_odds,json=maxOdds,proto3" json:"max_odds,omitempty"`
	CompetitionIds       []uint64               `protobuf:"varint,9,rep,packed,name=competition_ids,json=competitionIds,proto3" json:"competition_ids,omitempty"`
	Side                 SideEnum               `protobuf:"varint,10,opt,name=side,proto3,enum=statistico.SideEnum" json:"side,omitempty"`
	Visibility           VisibilityEnum         `protobuf:"varint,11,opt,name=visibility,proto3,enum=statistico.VisibilityEnum" json:"visibility,omitempty"`
	Status               StrategyStatusEnum     `protobuf:"varint,12,opt,name=status,proto3,enum=statistico.StrategyStatusEnum" json:"status,omitempty"`
	ResultFilters        []*ResultFilter        `protobuf:"bytes,13,rep,name=result_filters,json=resultFilters,proto3" json:"result_filters,omitempty"`
	StatFilters          []*StatFilter          `protobuf:"bytes,14,rep,name=stat_filters,json=statFilters,proto3" json:"stat_filters,omitempty"`
	CreatedAt            *timestamppb.Timestamp `protobuf:"bytes,15,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt            *timestamppb.Timestamp `protobuf:"bytes,16,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *Strategy) Reset()         { *m = Strategy{} }
func (m *Strategy) String() string { return proto.CompactTextString(m) }
func (*Strategy) ProtoMessage()    {}
func (*Strategy) Descriptor() ([]byte, []int) {
	return fileDescriptor_46ec5ce6dd46feab, []int{0}
}

func (m *Strategy) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Strategy.Unmarshal(m, b)
}
func (m *Strategy) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Strategy.Marshal(b, m, deterministic)
}
func (m *Strategy) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Strategy.Merge(m, src)
}
func (m *Strategy) XXX_Size() int {
	return xxx_messageInfo_Strategy.Size(m)
}
func (m *Strategy) XXX_DiscardUnknown() {
	xxx_messageInfo_Strategy.DiscardUnknown(m)
}

var xxx_messageInfo_Strategy proto.InternalMessageInfo

func (m *Strategy) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Strategy) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Strategy) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Strategy) GetUserId() string {
	if m != nil {
		return m.UserId
	}
	return ""
}

func (m *Strategy) GetMarket() string {
	if m != nil {
		return m.Market
	}
	return ""
}

func (m *Strategy) GetRunner() string {
	if m != nil {
		return m.Runner
	}
	return ""
}

func (m *Strategy) GetMinOdds() *wrapperspb.FloatValue {
	if m != nil {
		return m.MinOdds
	}
	return nil
}

func (m *Strategy) GetMaxOdds() *wrapperspb.FloatValue {
	if m != nil {
		return m.MaxOdds
	}
	return nil
}

func (m *Strategy) GetCompetitionIds() []uint64 {
	if m != nil {
		return m.CompetitionIds
	}
	return nil
}

func (m *Strategy) GetSide() SideEnum {
	if m != nil {
		return m.Side
	}
	return SideEnum_BACK
}

func (m *Strategy) GetVisibility() VisibilityEnum {
	if m != nil {
		return m.Visibility
	}
	return VisibilityEnum_PUBLIC
}

func (m *Strategy) GetStatus() StrategyStatusEnum {
	if m != nil {
		return m.Status
	}
	return StrategyStatusEnum_ARCHIVED
}

func (m *Strategy) GetResultFilters() []*ResultFilter {
	if m != nil {
		return m.ResultFilters
	}
	return nil
}

func (m *Strategy) GetStatFilters() []*StatFilter {
	if m != nil {
		return m.StatFilters
	}
	return nil
}

func (m *Strategy) GetCreatedAt() *timestamppb.Timestamp {
	if m != nil {
		return m.CreatedAt
	}
	return nil
}

func (m *Strategy) GetUpdatedAt() *timestamppb.Timestamp {
	if m != nil {
		return m.UpdatedAt
	}
	return nil
}

type Trade struct {
	MarketName           string                 `protobuf:"bytes,1,opt,name=market_name,json=marketName,proto3" json:"market_name,omitempty"`
	RunnerName           string                 `protobuf:"bytes,2,opt,name=runner_name,json=runnerName,proto3" json:"runner_name,omitempty"`
	RunnerPrice          float32                `protobuf:"fixed32,3,opt,name=runner_price,json=runnerPrice,proto3" json:"runner_price,omitempty"`
	Side                 SideEnum               `protobuf:"varint,4,opt,name=side,proto3,enum=statistico.SideEnum" json:"side,omitempty"`
	EventId              uint64                 `protobuf:"varint,5,opt,name=event_id,json=eventId,proto3" json:"event_id,omitempty"`
	CompetitionId        uint64                 `protobuf:"varint,6,opt,name=competition_id,json=competitionId,proto3" json:"competition_id,omitempty"`
	SeasonId             uint64                 `protobuf:"varint,7,opt,name=season_id,json=seasonId,proto3" json:"season_id,omitempty"`
	EventDate            *timestamppb.Timestamp `protobuf:"bytes,8,opt,name=event_date,json=eventDate,proto3" json:"event_date,omitempty"`
	Result               TradeResultEnum        `protobuf:"varint,9,opt,name=result,proto3,enum=statistico.TradeResultEnum" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *Trade) Reset()         { *m = Trade{} }
func (m *Trade) String() string { return proto.CompactTextString(m) }
func (*Trade) ProtoMessage()    {}
func (*Trade) Descriptor() ([]byte, []int) {
	return fileDescriptor_46ec5ce6dd46feab, []int{1}
}

func (m *Trade) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Trade.Unmarshal(m, b)
}
func (m *Trade) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Trade.Marshal(b, m, deterministic)
}
func (m *Trade) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Trade.Merge(m, src)
}
func (m *Trade) XXX_Size() int {
	return xxx_messageInfo_Trade.Size(m)
}
func (m *Trade) XXX_DiscardUnknown() {
	xxx_messageInfo_Trade.DiscardUnknown(m)
}

var xxx_messageInfo_Trade proto.InternalMessageInfo

func (m *Trade) GetMarketName() string {
	if m != nil {
		return m.MarketName
	}
	return ""
}

func (m *Trade) GetRunnerName() string {
	if m != nil {
		return m.RunnerName
	}
	return ""
}

func (m *Trade) GetRunnerPrice() float32 {
	if m != nil {
		return m.RunnerPrice
	}
	return 0
}

func (m *Trade) GetSide() SideEnum {
	if m != nil {
		return m.Side
	}
	return SideEnum_BACK
}

func (m *Trade) GetEventId() uint64 {
	if m != nil {
		return m.EventId
	}
	return 0
}

func (m *Trade) GetCompetitionId() uint64 {
	if m != nil {
		return m.CompetitionId
	}
	return 0
}

func (m *Trade) GetSeasonId() uint64 {
	if m != nil {
		return m.SeasonId
	}
	return 0
}

func (m *Trade) GetEventDate() *timestamppb.Timestamp {
	if m != nil {
		return m.EventDate
	}
	return nil
}

func (m *Trade) GetResult() TradeResultEnum {
	if m != nil {
		return m.Result
	}
	return TradeResultEnum_FAIL
}

func init() {
	proto.RegisterType((*Strategy)(nil), "statistico.Strategy")
	proto.RegisterType((*Trade)(nil), "statistico.Trade")
}

func init() { proto.RegisterFile("strategy.proto", fileDescriptor_46ec5ce6dd46feab) }

var fileDescriptor_46ec5ce6dd46feab = []byte{
	// 703 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x94, 0xdf, 0x4e, 0x1b, 0x39,
	0x14, 0xc6, 0x49, 0x08, 0xf9, 0x73, 0x92, 0x0c, 0xbb, 0x16, 0x62, 0xbd, 0x41, 0x82, 0x10, 0x89,
	0xdd, 0xdc, 0x6c, 0x60, 0x83, 0x84, 0xb4, 0xdb, 0x8b, 0x0a, 0xda, 0x22, 0x45, 0xaa, 0x68, 0x35,
	0x01, 0x2e, 0x7a, 0x13, 0x39, 0xf1, 0x21, 0x58, 0xcd, 0xfc, 0xa9, 0xed, 0x49, 0xe1, 0xba, 0x6f,
	0xd6, 0x77, 0xe9, 0x7b, 0x54, 0x73, 0x3c, 0x09, 0x93, 0x82, 0x4a, 0xef, 0x7c, 0x3e, 0xff, 0xbe,
	0xe3, 0xf8, 0xf8, 0xcb, 0x80, 0x67, 0xac, 0x16, 0x16, 0xa7, 0xf7, 0xbd, 0x58, 0x47, 0x36, 0x62,
	0x60, 0xac, 0xb0, 0xca, 0x58, 0x35, 0x89, 0x5a, 0x80, 0x61, 0x12, 0x38, 0xbd, 0xd5, 0xb8, 0x51,
	0x33, 0x8b, 0x3a, 0xab, 0x3c, 0x8d, 0x9f, 0x12, 0x34, 0xd6, 0x64, 0xf5, 0xde, 0x34, 0x8a, 0xa6,
	0x33, 0x3c, 0xa4, 0x6a, 0x9c, 0xdc, 0x1c, 0x5a, 0x15, 0xa0, 0xb1, 0x22, 0x88, 0x33, 0x60, 0xf7,
	0x47, 0xe0, 0xb3, 0x16, 0x71, 0x8c, 0x3a, 0x6b, 0xd0, 0xf9, 0xba, 0x01, 0xd5, 0x61, 0xf6, 0x4b,
	0x98, 0x07, 0x45, 0x25, 0x79, 0xa1, 0x5d, 0xe8, 0xd6, 0xfc, 0xa2, 0x92, 0x8c, 0x41, 0x29, 0x14,
	0x01, 0xf2, 0x22, 0x29, 0xb4, 0x66, 0x6d, 0xa8, 0x4b, 0x34, 0x13, 0xad, 0x62, 0xab, 0xa2, 0x90,
	0xaf, 0xd3, 0x56, 0x5e, 0x62, 0x7f, 0x40, 0x25, 0x31, 0xa8, 0x47, 0x4a, 0xf2, 0x12, 0xed, 0x96,
	0xd3, 0x72, 0x20, 0xd9, 0x36, 0x94, 0x03, 0xa1, 0x3f, 0xa2, 0xe5, 0x1b, 0x4e, 0x77, 0x55, 0xaa,
	0xeb, 0x24, 0x0c, 0x51, 0xf3, 0xb2, 0xd3, 0x5d, 0xc5, 0x4e, 0xa0, 0x1a, 0xa8, 0x70, 0x14, 0x49,
	0x69, 0x78, 0xa5, 0x5d, 0xe8, 0xd6, 0xfb, 0x3b, 0x3d, 0x77, 0x9d, 0xde, 0xe2, 0x3a, 0xbd, 0xf3,
	0x59, 0x24, 0xec, 0xb5, 0x98, 0x25, 0xe8, 0x57, 0x02, 0x15, 0xbe, 0x93, 0xd2, 0x90, 0x4f, 0xdc,
	0x39, 0x5f, 0xf5, 0x57, 0x7c, 0xe2, 0x8e, 0x7c, 0x7f, 0xc3, 0xe6, 0x24, 0x0a, 0x62, 0xb4, 0x2a,
	0xbd, 0xc7, 0x48, 0x49, 0xc3, 0x6b, 0xed, 0xf5, 0x6e, 0xc9, 0xf7, 0x72, 0xf2, 0x40, 0x1a, 0xd6,
	0x85, 0x92, 0x51, 0x12, 0x39, 0xb4, 0x0b, 0x5d, 0xaf, 0xbf, 0xd5, 0x7b, 0x78, 0xba, 0xde, 0x50,
	0x49, 0x7c, 0x13, 0x26, 0x81, 0x4f, 0x04, 0xfb, 0x1f, 0x60, 0xae, 0x8c, 0x1a, 0xab, 0x99, 0xb2,
	0xf7, 0xbc, 0x4e, 0x7c, 0x2b, 0xcf, 0x5f, 0x2f, 0x77, 0xc9, 0x95, 0xa3, 0xd9, 0x09, 0x94, 0x53,
	0x30, 0x31, 0xbc, 0x41, 0xbe, 0xdd, 0x95, 0x73, 0xb2, 0x37, 0x1b, 0x12, 0x41, 0xde, 0x8c, 0x66,
	0x2f, 0xc1, 0xd3, 0x68, 0x92, 0x99, 0x1d, 0xb9, 0xe8, 0x18, 0xde, 0x6c, 0xaf, 0x77, 0xeb, 0x7d,
	0x9e, 0xf7, 0xfb, 0x44, 0x9c, 0x13, 0xe0, 0x37, 0x75, 0xae, 0x32, 0xec, 0x3f, 0x68, 0xa4, 0xe4,
	0xd2, 0xee, 0x91, 0x7d, 0x7b, 0xf5, 0x78, 0xb1, 0x30, 0xd7, 0xcd, 0x72, 0x9d, 0x5a, 0x61, 0xa2,
	0x51, 0x58, 0x94, 0x23, 0x61, 0xf9, 0x26, 0x0d, 0xbf, 0xf5, 0x68, 0xf8, 0x97, 0x8b, 0x90, 0xfa,
	0xb5, 0x8c, 0x3e, 0xb5, 0xa9, 0x35, 0x89, 0xe5, 0xc2, 0xfa, 0xdb, 0xf3, 0xd6, 0x8c, 0x3e, 0xb5,
	0x9d, 0x6f, 0x45, 0xd8, 0xb8, 0xd4, 0x42, 0x22, 0xdb, 0x83, 0xba, 0x0b, 0xd5, 0x88, 0x82, 0xeb,
	0xa2, 0x0c, 0x4e, 0xba, 0x48, 0xe3, 0xbb, 0x07, 0x75, 0x97, 0xae, 0x51, 0x2e, 0xd9, 0xe0, 0x24,
	0x02, 0xf6, 0xa1, 0x91, 0x01, 0xb1, 0x56, 0x13, 0xa4, 0x80, 0x17, 0xfd, 0xcc, 0xf4, 0x3e, 0x95,
	0x96, 0xcf, 0x5f, 0x7a, 0xf6, 0xf9, 0xff, 0x84, 0x2a, 0xce, 0x31, 0xb4, 0xe9, 0x7f, 0x21, 0xcd,
	0x7c, 0xc9, 0xaf, 0x50, 0x3d, 0x90, 0xec, 0x00, 0xbc, 0xd5, 0xb0, 0x51, 0xf8, 0x4b, 0x7e, 0x73,
	0x25, 0x6b, 0x6c, 0x07, 0x6a, 0x06, 0x85, 0x71, 0x44, 0x85, 0x88, 0xaa, 0x13, 0x06, 0x32, 0x1d,
	0x99, 0x6b, 0x9f, 0x0e, 0x22, 0x8b, 0xfa, 0x4f, 0x47, 0x46, 0xf4, 0x6b, 0x61, 0x91, 0x1d, 0x43,
	0xd9, 0x3d, 0x3a, 0xaf, 0xd1, 0x2d, 0x76, 0xf2, 0xb7, 0xa0, 0x59, 0xba, 0x84, 0xb8, 0x64, 0x39,
	0xb4, 0xff, 0xa5, 0x08, 0x9b, 0xcb, 0xe0, 0xa1, 0x9e, 0xa7, 0xc3, 0xb8, 0x80, 0xe6, 0x59, 0xa2,
	0x66, 0x72, 0xf9, 0x11, 0xf9, 0xeb, 0xa9, 0x98, 0x52, 0xc7, 0x21, 0x0a, 0x3d, 0xb9, 0xf5, 0xdd,
	0x17, 0xac, 0xf5, 0xfb, 0xa3, 0x13, 0x3b, 0x6b, 0x47, 0x05, 0x36, 0x80, 0xc6, 0x50, 0xcc, 0x71,
	0xd9, 0x6e, 0x3f, 0x8f, 0xbd, 0xa2, 0xb4, 0x2c, 0xf6, 0x16, 0x9d, 0xb6, 0x9e, 0x3a, 0xb1, 0xb3,
	0xc6, 0xae, 0x80, 0xbd, 0x55, 0xc6, 0x5e, 0x19, 0xd4, 0x99, 0xaa, 0xd0, 0xb0, 0x83, 0x3c, 0xfd,
	0x78, 0xff, 0x99, 0xa6, 0x47, 0x85, 0xb3, 0xe3, 0x0f, 0xff, 0x4e, 0x95, 0xbd, 0x4d, 0xc6, 0xbd,
	0x49, 0x14, 0x1c, 0x3e, 0x50, 0xb9, 0xe5, 0x3f, 0x34, 0xfc, 0x17, 0x0f, 0xc2, 0xb8, 0x4c, 0xca,
	0xf1, 0xf7, 0x00, 0x00, 0x00, 0xff, 0xff, 0x0c, 0xb4, 0x65, 0xa1, 0xf7, 0x05, 0x00, 0x00,
}
