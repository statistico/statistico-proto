// Code generated by protoc-gen-go. DO NOT EDIT.
// source: market.proto

package statisticoproto

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
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

type RunnerFilter_Line int32

const (
	RunnerFilter_CLOSING RunnerFilter_Line = 0
	RunnerFilter_MAX     RunnerFilter_Line = 1
)

var RunnerFilter_Line_name = map[int32]string{
	0: "CLOSING",
	1: "MAX",
}

var RunnerFilter_Line_value = map[string]int32{
	"CLOSING": 0,
	"MAX":     1,
}

func (x RunnerFilter_Line) String() string {
	return proto.EnumName(RunnerFilter_Line_name, int32(x))
}

func (RunnerFilter_Line) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_3f90997f23a2c3f8, []int{1, 0}
}

type FilterOperator_Operator int32

const (
	FilterOperator_GTE FilterOperator_Operator = 0
	FilterOperator_LTE FilterOperator_Operator = 1
)

var FilterOperator_Operator_name = map[int32]string{
	0: "GTE",
	1: "LTE",
}

var FilterOperator_Operator_value = map[string]int32{
	"GTE": 0,
	"LTE": 1,
}

func (x FilterOperator_Operator) String() string {
	return proto.EnumName(FilterOperator_Operator_name, int32(x))
}

func (FilterOperator_Operator) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_3f90997f23a2c3f8, []int{2, 0}
}

type MarketRunnerRequest struct {
	Name                 string                `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	RunnerFilter         *RunnerFilter         `protobuf:"bytes,2,opt,name=runner_filter,json=runnerFilter,proto3" json:"runner_filter,omitempty"`
	CompetitionIds       []uint64              `protobuf:"varint,3,rep,packed,name=competition_ids,json=competitionIds,proto3" json:"competition_ids,omitempty"`
	SeasonIds            []uint64              `protobuf:"varint,4,rep,packed,name=season_ids,json=seasonIds,proto3" json:"season_ids,omitempty"`
	DateFrom             *wrappers.StringValue `protobuf:"bytes,5,opt,name=dateFrom,proto3" json:"dateFrom,omitempty"`
	DateTo               *wrappers.StringValue `protobuf:"bytes,6,opt,name=dateTo,proto3" json:"dateTo,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *MarketRunnerRequest) Reset()         { *m = MarketRunnerRequest{} }
func (m *MarketRunnerRequest) String() string { return proto.CompactTextString(m) }
func (*MarketRunnerRequest) ProtoMessage()    {}
func (*MarketRunnerRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_3f90997f23a2c3f8, []int{0}
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

func (m *MarketRunnerRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *MarketRunnerRequest) GetRunnerFilter() *RunnerFilter {
	if m != nil {
		return m.RunnerFilter
	}
	return nil
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

func (m *MarketRunnerRequest) GetDateFrom() *wrappers.StringValue {
	if m != nil {
		return m.DateFrom
	}
	return nil
}

func (m *MarketRunnerRequest) GetDateTo() *wrappers.StringValue {
	if m != nil {
		return m.DateTo
	}
	return nil
}

type RunnerFilter struct {
	Name                 string            `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Line                 RunnerFilter_Line `protobuf:"varint,2,opt,name=line,proto3,enum=statisticoproto.RunnerFilter_Line" json:"line,omitempty"`
	Operators            []*FilterOperator `protobuf:"bytes,3,rep,name=operators,proto3" json:"operators,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *RunnerFilter) Reset()         { *m = RunnerFilter{} }
func (m *RunnerFilter) String() string { return proto.CompactTextString(m) }
func (*RunnerFilter) ProtoMessage()    {}
func (*RunnerFilter) Descriptor() ([]byte, []int) {
	return fileDescriptor_3f90997f23a2c3f8, []int{1}
}

func (m *RunnerFilter) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RunnerFilter.Unmarshal(m, b)
}
func (m *RunnerFilter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RunnerFilter.Marshal(b, m, deterministic)
}
func (m *RunnerFilter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RunnerFilter.Merge(m, src)
}
func (m *RunnerFilter) XXX_Size() int {
	return xxx_messageInfo_RunnerFilter.Size(m)
}
func (m *RunnerFilter) XXX_DiscardUnknown() {
	xxx_messageInfo_RunnerFilter.DiscardUnknown(m)
}

var xxx_messageInfo_RunnerFilter proto.InternalMessageInfo

func (m *RunnerFilter) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *RunnerFilter) GetLine() RunnerFilter_Line {
	if m != nil {
		return m.Line
	}
	return RunnerFilter_CLOSING
}

func (m *RunnerFilter) GetOperators() []*FilterOperator {
	if m != nil {
		return m.Operators
	}
	return nil
}

type FilterOperator struct {
	Operator             FilterOperator_Operator `protobuf:"varint,3,opt,name=operator,proto3,enum=statisticoproto.FilterOperator_Operator" json:"operator,omitempty"`
	Value                float32                 `protobuf:"fixed32,4,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                `json:"-"`
	XXX_unrecognized     []byte                  `json:"-"`
	XXX_sizecache        int32                   `json:"-"`
}

func (m *FilterOperator) Reset()         { *m = FilterOperator{} }
func (m *FilterOperator) String() string { return proto.CompactTextString(m) }
func (*FilterOperator) ProtoMessage()    {}
func (*FilterOperator) Descriptor() ([]byte, []int) {
	return fileDescriptor_3f90997f23a2c3f8, []int{2}
}

func (m *FilterOperator) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FilterOperator.Unmarshal(m, b)
}
func (m *FilterOperator) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FilterOperator.Marshal(b, m, deterministic)
}
func (m *FilterOperator) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FilterOperator.Merge(m, src)
}
func (m *FilterOperator) XXX_Size() int {
	return xxx_messageInfo_FilterOperator.Size(m)
}
func (m *FilterOperator) XXX_DiscardUnknown() {
	xxx_messageInfo_FilterOperator.DiscardUnknown(m)
}

var xxx_messageInfo_FilterOperator proto.InternalMessageInfo

func (m *FilterOperator) GetOperator() FilterOperator_Operator {
	if m != nil {
		return m.Operator
	}
	return FilterOperator_GTE
}

func (m *FilterOperator) GetValue() float32 {
	if m != nil {
		return m.Value
	}
	return 0
}

type MarketRunner struct {
	MarketId             string   `protobuf:"bytes,1,opt,name=market_id,json=marketId,proto3" json:"market_id,omitempty"`
	MarketName           string   `protobuf:"bytes,2,opt,name=market_name,json=marketName,proto3" json:"market_name,omitempty"`
	RunnerName           string   `protobuf:"bytes,3,opt,name=runner_name,json=runnerName,proto3" json:"runner_name,omitempty"`
	EventId              uint64   `protobuf:"varint,5,opt,name=event_id,json=eventId,proto3" json:"event_id,omitempty"`
	CompetitionId        uint64   `protobuf:"varint,6,opt,name=competition_id,json=competitionId,proto3" json:"competition_id,omitempty"`
	SeasonId             uint64   `protobuf:"varint,7,opt,name=season_id,json=seasonId,proto3" json:"season_id,omitempty"`
	EventDate            string   `protobuf:"bytes,8,opt,name=event_date,json=eventDate,proto3" json:"event_date,omitempty"`
	Side                 string   `protobuf:"bytes,9,opt,name=side,proto3" json:"side,omitempty"`
	Exchange             string   `protobuf:"bytes,10,opt,name=exchange,proto3" json:"exchange,omitempty"`
	Prices               []*Price `protobuf:"bytes,11,rep,name=prices,proto3" json:"prices,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MarketRunner) Reset()         { *m = MarketRunner{} }
func (m *MarketRunner) String() string { return proto.CompactTextString(m) }
func (*MarketRunner) ProtoMessage()    {}
func (*MarketRunner) Descriptor() ([]byte, []int) {
	return fileDescriptor_3f90997f23a2c3f8, []int{3}
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

func (m *MarketRunner) GetEventDate() string {
	if m != nil {
		return m.EventDate
	}
	return ""
}

func (m *MarketRunner) GetSide() string {
	if m != nil {
		return m.Side
	}
	return ""
}

func (m *MarketRunner) GetExchange() string {
	if m != nil {
		return m.Exchange
	}
	return ""
}

func (m *MarketRunner) GetPrices() []*Price {
	if m != nil {
		return m.Prices
	}
	return nil
}

type Price struct {
	Value                float32  `protobuf:"fixed32,1,opt,name=value,proto3" json:"value,omitempty"`
	Size                 float32  `protobuf:"fixed32,2,opt,name=size,proto3" json:"size,omitempty"`
	Timestamp            int64    `protobuf:"varint,3,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Price) Reset()         { *m = Price{} }
func (m *Price) String() string { return proto.CompactTextString(m) }
func (*Price) ProtoMessage()    {}
func (*Price) Descriptor() ([]byte, []int) {
	return fileDescriptor_3f90997f23a2c3f8, []int{4}
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

func (m *Price) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

func init() {
	proto.RegisterEnum("statisticoproto.RunnerFilter_Line", RunnerFilter_Line_name, RunnerFilter_Line_value)
	proto.RegisterEnum("statisticoproto.FilterOperator_Operator", FilterOperator_Operator_name, FilterOperator_Operator_value)
	proto.RegisterType((*MarketRunnerRequest)(nil), "statisticoproto.MarketRunnerRequest")
	proto.RegisterType((*RunnerFilter)(nil), "statisticoproto.RunnerFilter")
	proto.RegisterType((*FilterOperator)(nil), "statisticoproto.FilterOperator")
	proto.RegisterType((*MarketRunner)(nil), "statisticoproto.MarketRunner")
	proto.RegisterType((*Price)(nil), "statisticoproto.Price")
}

func init() {
	proto.RegisterFile("market.proto", fileDescriptor_3f90997f23a2c3f8)
}

var fileDescriptor_3f90997f23a2c3f8 = []byte{
	// 603 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x54, 0xdd, 0x6e, 0xd3, 0x4c,
	0x10, 0xad, 0x63, 0x37, 0xb1, 0x27, 0x69, 0x5a, 0xed, 0xf7, 0x09, 0x99, 0x92, 0xd2, 0xc8, 0x02,
	0x91, 0x2b, 0x17, 0x05, 0x84, 0xb8, 0xe1, 0x02, 0xe8, 0x8f, 0x22, 0xf5, 0x07, 0x6d, 0x2a, 0xc4,
	0x0d, 0xaa, 0xb6, 0xf1, 0x34, 0x5d, 0x91, 0xd8, 0x66, 0xbd, 0x29, 0x88, 0x47, 0xe0, 0x3d, 0x78,
	0x06, 0x1e, 0x82, 0x97, 0x42, 0x3b, 0xeb, 0xa4, 0x2e, 0xa9, 0x0a, 0x77, 0x3b, 0x67, 0xcf, 0xfc,
	0xec, 0x99, 0xa3, 0x85, 0xd6, 0x54, 0xa8, 0x4f, 0xa8, 0xe3, 0x5c, 0x65, 0x3a, 0x63, 0xeb, 0x85,
	0x16, 0x5a, 0x16, 0x5a, 0x8e, 0x32, 0x02, 0x36, 0x1f, 0x8e, 0xb3, 0x6c, 0x3c, 0xc1, 0x1d, 0x8a,
	0xce, 0x67, 0x17, 0x3b, 0x5f, 0x94, 0xc8, 0x73, 0x54, 0x85, 0x4d, 0x88, 0x7e, 0xd4, 0xe0, 0xbf,
	0x23, 0xaa, 0xc0, 0x67, 0x69, 0x8a, 0x8a, 0xe3, 0xe7, 0x19, 0x16, 0x9a, 0x31, 0xf0, 0x52, 0x31,
	0xc5, 0xd0, 0xe9, 0x3a, 0xbd, 0x80, 0xd3, 0x99, 0xbd, 0x81, 0x35, 0x45, 0xa4, 0xb3, 0x0b, 0x39,
	0xd1, 0xa8, 0xc2, 0x5a, 0xd7, 0xe9, 0x35, 0xfb, 0x5b, 0xf1, 0x1f, 0x4d, 0x63, 0x5b, 0x6a, 0x9f,
	0x48, 0xbc, 0xa5, 0x2a, 0x11, 0x7b, 0x02, 0xeb, 0xa3, 0x6c, 0x9a, 0xa3, 0x96, 0x5a, 0x66, 0xe9,
	0x99, 0x4c, 0x8a, 0xd0, 0xed, 0xba, 0x3d, 0x8f, 0xb7, 0x2b, 0xf0, 0x20, 0x29, 0xd8, 0x16, 0x40,
	0x81, 0xa2, 0x28, 0x39, 0x1e, 0x71, 0x02, 0x8b, 0x98, 0xeb, 0x97, 0xe0, 0x27, 0x42, 0xe3, 0xbe,
	0xca, 0xa6, 0xe1, 0x2a, 0x8d, 0xd1, 0x89, 0xed, 0x53, 0xe3, 0xf9, 0x53, 0xe3, 0xa1, 0x56, 0x32,
	0x1d, 0xbf, 0x17, 0x93, 0x19, 0xf2, 0x05, 0x9b, 0x3d, 0x87, 0xba, 0x39, 0x9f, 0x66, 0x61, 0xfd,
	0x1f, 0xf2, 0x4a, 0x6e, 0xf4, 0xd3, 0x81, 0x56, 0xf5, 0x59, 0xb7, 0x0a, 0xf4, 0x02, 0xbc, 0x89,
	0x4c, 0x91, 0x74, 0x69, 0xf7, 0xa3, 0x3b, 0x75, 0x89, 0x0f, 0x65, 0x8a, 0x9c, 0xf8, 0xec, 0x15,
	0x04, 0x59, 0x8e, 0x4a, 0xe8, 0x4c, 0x59, 0x39, 0x9a, 0xfd, 0xed, 0xa5, 0x64, 0x9b, 0x76, 0x52,
	0xf2, 0xf8, 0x75, 0x46, 0xd4, 0x01, 0xcf, 0x14, 0x63, 0x4d, 0x68, 0xbc, 0x3d, 0x3c, 0x19, 0x0e,
	0x8e, 0x0f, 0x36, 0x56, 0x58, 0x03, 0xdc, 0xa3, 0xd7, 0x1f, 0x36, 0x9c, 0xe8, 0xbb, 0x03, 0xed,
	0x9b, 0xb9, 0x6c, 0x17, 0xfc, 0x79, 0x76, 0xe8, 0xd2, 0xac, 0xbd, 0xbf, 0xb4, 0x8b, 0x17, 0x7d,
	0x17, 0x99, 0xec, 0x7f, 0x58, 0xbd, 0x32, 0x1a, 0x85, 0x5e, 0xd7, 0xe9, 0xd5, 0xb8, 0x0d, 0xa2,
	0x0e, 0xf8, 0x8b, 0x3e, 0x0d, 0x70, 0x0f, 0x4e, 0xf7, 0xec, 0x30, 0x87, 0xa7, 0x7b, 0x1b, 0x4e,
	0xf4, 0xab, 0x06, 0xad, 0xaa, 0xdd, 0xd8, 0x03, 0x08, 0xac, 0x81, 0xcf, 0x64, 0x52, 0x6a, 0xe9,
	0x5b, 0x60, 0x90, 0xb0, 0x6d, 0x68, 0x96, 0x97, 0x24, 0x75, 0x8d, 0xae, 0xc1, 0x42, 0xc7, 0x46,
	0xf0, 0x6d, 0x68, 0x96, 0x8e, 0x24, 0x82, 0x6b, 0x09, 0x16, 0x22, 0xc2, 0x7d, 0xf0, 0xf1, 0x0a,
	0x53, 0xaa, 0x6e, 0x6c, 0xe2, 0xf1, 0x06, 0xc5, 0x83, 0x84, 0x3d, 0x86, 0xf6, 0x4d, 0x27, 0x92,
	0x1f, 0x3c, 0xbe, 0x76, 0xc3, 0x88, 0x66, 0xc0, 0x85, 0x0f, 0xc3, 0x06, 0x31, 0xfc, 0xb9, 0x0d,
	0x8d, 0x49, 0x6d, 0x79, 0xe3, 0x92, 0xd0, 0xa7, 0xf6, 0x01, 0x21, 0xbb, 0x42, 0xa3, 0xf1, 0x48,
	0x21, 0x13, 0x0c, 0x03, 0xeb, 0x11, 0x73, 0x66, 0x9b, 0xe0, 0xe3, 0xd7, 0xd1, 0xa5, 0x48, 0xc7,
	0x18, 0x82, 0x7d, 0xef, 0x3c, 0x66, 0x31, 0xd4, 0x73, 0x25, 0x47, 0x58, 0x84, 0x4d, 0x32, 0xc1,
	0xbd, 0xa5, 0xad, 0xbc, 0x33, 0xd7, 0xbc, 0x64, 0x45, 0x27, 0xb0, 0x4a, 0xc0, 0xf5, 0x2a, 0x9c,
	0xca, 0x2a, 0x6c, 0xfb, 0x6f, 0x56, 0xb7, 0x1a, 0xa7, 0x33, 0xeb, 0x40, 0xa0, 0xe5, 0x14, 0x0b,
	0x2d, 0xa6, 0x39, 0xe9, 0xe5, 0xf2, 0x6b, 0xa0, 0x9f, 0xc2, 0x9a, 0xdd, 0xce, 0x10, 0xd5, 0x95,
	0x29, 0xfc, 0x11, 0x58, 0x75, 0x5d, 0x43, 0x14, 0x6a, 0x74, 0xc9, 0x1e, 0x2d, 0xcd, 0x75, 0xcb,
	0x17, 0xb2, 0xb9, 0x75, 0x27, 0x2b, 0x5a, 0x79, 0xea, 0x9c, 0xd7, 0x09, 0x7f, 0xf6, 0x3b, 0x00,
	0x00, 0xff, 0xff, 0xa4, 0x03, 0xdf, 0x2d, 0xc5, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// MarketServiceClient is the client API for MarketService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MarketServiceClient interface {
	MarketRunnerSearch(ctx context.Context, in *MarketRunnerRequest, opts ...grpc.CallOption) (MarketService_MarketRunnerSearchClient, error)
}

type marketServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMarketServiceClient(cc grpc.ClientConnInterface) MarketServiceClient {
	return &marketServiceClient{cc}
}

func (c *marketServiceClient) MarketRunnerSearch(ctx context.Context, in *MarketRunnerRequest, opts ...grpc.CallOption) (MarketService_MarketRunnerSearchClient, error) {
	stream, err := c.cc.NewStream(ctx, &_MarketService_serviceDesc.Streams[0], "/statisticoproto.MarketService/MarketRunnerSearch", opts...)
	if err != nil {
		return nil, err
	}
	x := &marketServiceMarketRunnerSearchClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type MarketService_MarketRunnerSearchClient interface {
	Recv() (*MarketRunner, error)
	grpc.ClientStream
}

type marketServiceMarketRunnerSearchClient struct {
	grpc.ClientStream
}

func (x *marketServiceMarketRunnerSearchClient) Recv() (*MarketRunner, error) {
	m := new(MarketRunner)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MarketServiceServer is the server API for MarketService service.
type MarketServiceServer interface {
	MarketRunnerSearch(*MarketRunnerRequest, MarketService_MarketRunnerSearchServer) error
}

// UnimplementedMarketServiceServer can be embedded to have forward compatible implementations.
type UnimplementedMarketServiceServer struct {
}

func (*UnimplementedMarketServiceServer) MarketRunnerSearch(req *MarketRunnerRequest, srv MarketService_MarketRunnerSearchServer) error {
	return status.Errorf(codes.Unimplemented, "method MarketRunnerSearch not implemented")
}

func RegisterMarketServiceServer(s *grpc.Server, srv MarketServiceServer) {
	s.RegisterService(&_MarketService_serviceDesc, srv)
}

func _MarketService_MarketRunnerSearch_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(MarketRunnerRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MarketServiceServer).MarketRunnerSearch(m, &marketServiceMarketRunnerSearchServer{stream})
}

type MarketService_MarketRunnerSearchServer interface {
	Send(*MarketRunner) error
	grpc.ServerStream
}

type marketServiceMarketRunnerSearchServer struct {
	grpc.ServerStream
}

func (x *marketServiceMarketRunnerSearchServer) Send(m *MarketRunner) error {
	return x.ServerStream.SendMsg(m)
}

var _MarketService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "statisticoproto.MarketService",
	HandlerType: (*MarketServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "MarketRunnerSearch",
			Handler:       _MarketService_MarketRunnerSearch_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "market.proto",
}