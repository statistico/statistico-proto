// Code generated by protoc-gen-go. DO NOT EDIT.
// source: filter.proto

package statisticoproto

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

type ResultFilter struct {
	Team                 Team     `protobuf:"varint,1,opt,name=team,proto3,enum=statisticoproto.Team" json:"team,omitempty"`
	Result               Result   `protobuf:"varint,2,opt,name=result,proto3,enum=statisticoproto.Result" json:"result,omitempty"`
	Games                uint32   `protobuf:"varint,3,opt,name=games,proto3" json:"games,omitempty"`
	Metric               Metric   `protobuf:"varint,4,opt,name=metric,proto3,enum=statisticoproto.Metric" json:"metric,omitempty"`
	Value                int32    `protobuf:"varint,5,opt,name=value,proto3" json:"value,omitempty"`
	Venue                Venue    `protobuf:"varint,6,opt,name=venue,proto3,enum=statisticoproto.Venue" json:"venue,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ResultFilter) Reset()         { *m = ResultFilter{} }
func (m *ResultFilter) String() string { return proto.CompactTextString(m) }
func (*ResultFilter) ProtoMessage()    {}
func (*ResultFilter) Descriptor() ([]byte, []int) {
	return fileDescriptor_1f5303cab7a20d6f, []int{0}
}

func (m *ResultFilter) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ResultFilter.Unmarshal(m, b)
}
func (m *ResultFilter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ResultFilter.Marshal(b, m, deterministic)
}
func (m *ResultFilter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResultFilter.Merge(m, src)
}
func (m *ResultFilter) XXX_Size() int {
	return xxx_messageInfo_ResultFilter.Size(m)
}
func (m *ResultFilter) XXX_DiscardUnknown() {
	xxx_messageInfo_ResultFilter.DiscardUnknown(m)
}

var xxx_messageInfo_ResultFilter proto.InternalMessageInfo

func (m *ResultFilter) GetTeam() Team {
	if m != nil {
		return m.Team
	}
	return Team_HOME_TEAM
}

func (m *ResultFilter) GetResult() Result {
	if m != nil {
		return m.Result
	}
	return Result_WIN
}

func (m *ResultFilter) GetGames() uint32 {
	if m != nil {
		return m.Games
	}
	return 0
}

func (m *ResultFilter) GetMetric() Metric {
	if m != nil {
		return m.Metric
	}
	return Metric_GTE
}

func (m *ResultFilter) GetValue() int32 {
	if m != nil {
		return m.Value
	}
	return 0
}

func (m *ResultFilter) GetVenue() Venue {
	if m != nil {
		return m.Venue
	}
	return Venue_HOME
}

type StatFilter struct {
	Team                 Team     `protobuf:"varint,1,opt,name=team,proto3,enum=statisticoproto.Team" json:"team,omitempty"`
	Action               Action   `protobuf:"varint,2,opt,name=action,proto3,enum=statisticoproto.Action" json:"action,omitempty"`
	Games                uint32   `protobuf:"varint,3,opt,name=games,proto3" json:"games,omitempty"`
	Measure              Measure  `protobuf:"varint,4,opt,name=measure,proto3,enum=statisticoproto.Measure" json:"measure,omitempty"`
	Metric               Metric   `protobuf:"varint,5,opt,name=metric,proto3,enum=statisticoproto.Metric" json:"metric,omitempty"`
	Stat                 Stat     `protobuf:"varint,6,opt,name=stat,proto3,enum=statisticoproto.Stat" json:"stat,omitempty"`
	Value                float32  `protobuf:"fixed32,7,opt,name=value,proto3" json:"value,omitempty"`
	Venue                Venue    `protobuf:"varint,8,opt,name=venue,proto3,enum=statisticoproto.Venue" json:"venue,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *StatFilter) Reset()         { *m = StatFilter{} }
func (m *StatFilter) String() string { return proto.CompactTextString(m) }
func (*StatFilter) ProtoMessage()    {}
func (*StatFilter) Descriptor() ([]byte, []int) {
	return fileDescriptor_1f5303cab7a20d6f, []int{1}
}

func (m *StatFilter) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StatFilter.Unmarshal(m, b)
}
func (m *StatFilter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StatFilter.Marshal(b, m, deterministic)
}
func (m *StatFilter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StatFilter.Merge(m, src)
}
func (m *StatFilter) XXX_Size() int {
	return xxx_messageInfo_StatFilter.Size(m)
}
func (m *StatFilter) XXX_DiscardUnknown() {
	xxx_messageInfo_StatFilter.DiscardUnknown(m)
}

var xxx_messageInfo_StatFilter proto.InternalMessageInfo

func (m *StatFilter) GetTeam() Team {
	if m != nil {
		return m.Team
	}
	return Team_HOME_TEAM
}

func (m *StatFilter) GetAction() Action {
	if m != nil {
		return m.Action
	}
	return Action_FOR
}

func (m *StatFilter) GetGames() uint32 {
	if m != nil {
		return m.Games
	}
	return 0
}

func (m *StatFilter) GetMeasure() Measure {
	if m != nil {
		return m.Measure
	}
	return Measure_TOTAL
}

func (m *StatFilter) GetMetric() Metric {
	if m != nil {
		return m.Metric
	}
	return Metric_GTE
}

func (m *StatFilter) GetStat() Stat {
	if m != nil {
		return m.Stat
	}
	return Stat_GOALS
}

func (m *StatFilter) GetValue() float32 {
	if m != nil {
		return m.Value
	}
	return 0
}

func (m *StatFilter) GetVenue() Venue {
	if m != nil {
		return m.Venue
	}
	return Venue_HOME
}

type SelectionFilter struct {
	Name                 string            `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Line                 Line              `protobuf:"varint,2,opt,name=line,proto3,enum=statisticoproto.Line" json:"line,omitempty"`
	Operators            []*MetricOperator `protobuf:"bytes,3,rep,name=operators,proto3" json:"operators,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *SelectionFilter) Reset()         { *m = SelectionFilter{} }
func (m *SelectionFilter) String() string { return proto.CompactTextString(m) }
func (*SelectionFilter) ProtoMessage()    {}
func (*SelectionFilter) Descriptor() ([]byte, []int) {
	return fileDescriptor_1f5303cab7a20d6f, []int{2}
}

func (m *SelectionFilter) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SelectionFilter.Unmarshal(m, b)
}
func (m *SelectionFilter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SelectionFilter.Marshal(b, m, deterministic)
}
func (m *SelectionFilter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SelectionFilter.Merge(m, src)
}
func (m *SelectionFilter) XXX_Size() int {
	return xxx_messageInfo_SelectionFilter.Size(m)
}
func (m *SelectionFilter) XXX_DiscardUnknown() {
	xxx_messageInfo_SelectionFilter.DiscardUnknown(m)
}

var xxx_messageInfo_SelectionFilter proto.InternalMessageInfo

func (m *SelectionFilter) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *SelectionFilter) GetLine() Line {
	if m != nil {
		return m.Line
	}
	return Line_CLOSING
}

func (m *SelectionFilter) GetOperators() []*MetricOperator {
	if m != nil {
		return m.Operators
	}
	return nil
}

type MetricOperator struct {
	Metric               Metric   `protobuf:"varint,1,opt,name=metric,proto3,enum=statisticoproto.Metric" json:"metric,omitempty"`
	Value                float32  `protobuf:"fixed32,2,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MetricOperator) Reset()         { *m = MetricOperator{} }
func (m *MetricOperator) String() string { return proto.CompactTextString(m) }
func (*MetricOperator) ProtoMessage()    {}
func (*MetricOperator) Descriptor() ([]byte, []int) {
	return fileDescriptor_1f5303cab7a20d6f, []int{3}
}

func (m *MetricOperator) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MetricOperator.Unmarshal(m, b)
}
func (m *MetricOperator) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MetricOperator.Marshal(b, m, deterministic)
}
func (m *MetricOperator) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MetricOperator.Merge(m, src)
}
func (m *MetricOperator) XXX_Size() int {
	return xxx_messageInfo_MetricOperator.Size(m)
}
func (m *MetricOperator) XXX_DiscardUnknown() {
	xxx_messageInfo_MetricOperator.DiscardUnknown(m)
}

var xxx_messageInfo_MetricOperator proto.InternalMessageInfo

func (m *MetricOperator) GetMetric() Metric {
	if m != nil {
		return m.Metric
	}
	return Metric_GTE
}

func (m *MetricOperator) GetValue() float32 {
	if m != nil {
		return m.Value
	}
	return 0
}

func init() {
	proto.RegisterType((*ResultFilter)(nil), "statisticoproto.ResultFilter")
	proto.RegisterType((*StatFilter)(nil), "statisticoproto.StatFilter")
	proto.RegisterType((*SelectionFilter)(nil), "statisticoproto.SelectionFilter")
	proto.RegisterType((*MetricOperator)(nil), "statisticoproto.MetricOperator")
}

func init() {
	proto.RegisterFile("filter.proto", fileDescriptor_1f5303cab7a20d6f)
}

var fileDescriptor_1f5303cab7a20d6f = []byte{
	// 346 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x92, 0xc1, 0x4a, 0xeb, 0x40,
	0x14, 0x86, 0x99, 0x34, 0x69, 0x6f, 0xcf, 0xed, 0x6d, 0x61, 0xb8, 0xea, 0xe0, 0xc6, 0xd0, 0x55,
	0x0a, 0x52, 0xa1, 0xae, 0x5d, 0xb8, 0x71, 0xa5, 0x08, 0x53, 0xd1, 0xf5, 0x58, 0x8e, 0x32, 0x90,
	0x49, 0xca, 0x64, 0xd2, 0xd7, 0xf0, 0xdd, 0x7c, 0x17, 0xf7, 0x32, 0x27, 0x23, 0xad, 0xc6, 0x40,
	0x75, 0x97, 0xc9, 0xf9, 0xce, 0xcf, 0xfc, 0x1f, 0x03, 0xa3, 0x27, 0x9d, 0x3b, 0xb4, 0xf3, 0xb5,
	0x2d, 0x5d, 0xc9, 0x27, 0x95, 0x53, 0x4e, 0x57, 0x4e, 0xaf, 0x4a, 0xfa, 0x71, 0x0c, 0x58, 0xd4,
	0xa6, 0x19, 0x4e, 0xdf, 0x18, 0x8c, 0x24, 0x56, 0x75, 0xee, 0xae, 0x68, 0x87, 0xcf, 0x20, 0x76,
	0xa8, 0x8c, 0x60, 0x29, 0xcb, 0xc6, 0x8b, 0x83, 0xf9, 0x97, 0xe5, 0xf9, 0x1d, 0x2a, 0x23, 0x09,
	0xe1, 0x67, 0xd0, 0xb7, 0xb4, 0x2a, 0x22, 0x82, 0x8f, 0x5a, 0x70, 0x93, 0x2c, 0x03, 0xc6, 0xff,
	0x43, 0xf2, 0xac, 0x0c, 0x56, 0xa2, 0x97, 0xb2, 0xec, 0x9f, 0x6c, 0x0e, 0x3e, 0xc6, 0xa0, 0xb3,
	0x7a, 0x25, 0xe2, 0x8e, 0x98, 0x1b, 0x1a, 0xcb, 0x80, 0xf9, 0x98, 0x8d, 0xca, 0x6b, 0x14, 0x49,
	0xca, 0xb2, 0x44, 0x36, 0x07, 0x7e, 0x0a, 0xc9, 0x06, 0x8b, 0x1a, 0x45, 0x9f, 0x52, 0x0e, 0x5b,
	0x29, 0xf7, 0x7e, 0x2a, 0x1b, 0x68, 0xfa, 0x1a, 0x01, 0x2c, 0x9d, 0xfa, 0x5d, 0x6b, 0xb5, 0x72,
	0xba, 0x2c, 0x3a, 0x5b, 0x5f, 0xd2, 0x58, 0x06, 0xac, 0xa3, 0xf5, 0x02, 0x06, 0x06, 0x55, 0x55,
	0x5b, 0x0c, 0xb5, 0xc5, 0x37, 0xb5, 0x69, 0x2e, 0x3f, 0xc0, 0x1d, 0x53, 0xc9, 0x7e, 0xa6, 0x66,
	0x10, 0x7b, 0x22, 0x28, 0x69, 0xd7, 0xf2, 0x06, 0x24, 0x21, 0x5b, 0xa9, 0x83, 0x94, 0x65, 0x51,
	0x4b, 0xea, 0x9f, 0x7d, 0xa4, 0xbe, 0x30, 0x98, 0x2c, 0x31, 0x47, 0xea, 0x1d, 0xcc, 0x72, 0x88,
	0x0b, 0x65, 0x90, 0xcc, 0x0e, 0x25, 0x7d, 0xfb, 0x6b, 0xe5, 0xba, 0xc0, 0x20, 0xb0, 0x7d, 0xad,
	0x6b, 0x5d, 0xa0, 0x24, 0x84, 0x5f, 0xc0, 0xb0, 0x5c, 0xa3, 0x55, 0xae, 0xb4, 0x5e, 0x60, 0x2f,
	0xfb, 0xbb, 0x38, 0xe9, 0x68, 0x7d, 0x1b, 0x38, 0xb9, 0xdd, 0x98, 0x3e, 0xc0, 0xf8, 0xf3, 0x70,
	0xc7, 0x21, 0xfb, 0xe1, 0x6b, 0x8b, 0x76, 0xc4, 0x3c, 0xf6, 0x89, 0x3d, 0x7f, 0x0f, 0x00, 0x00,
	0xff, 0xff, 0xa1, 0xfa, 0xd4, 0xdd, 0x6b, 0x03, 0x00, 0x00,
}