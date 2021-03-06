// Code generated by protoc-gen-go. DO NOT EDIT.
// source: filter.proto

package statistico

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
	Team                 TeamEnum   `protobuf:"varint,1,opt,name=team,proto3,enum=statistico.TeamEnum" json:"team,omitempty"`
	Result               ResultEnum `protobuf:"varint,2,opt,name=result,proto3,enum=statistico.ResultEnum" json:"result,omitempty"`
	Games                uint32     `protobuf:"varint,3,opt,name=games,proto3" json:"games,omitempty"`
	Venue                VenueEnum  `protobuf:"varint,4,opt,name=venue,proto3,enum=statistico.VenueEnum" json:"venue,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
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

func (m *ResultFilter) GetTeam() TeamEnum {
	if m != nil {
		return m.Team
	}
	return TeamEnum_HOME_TEAM
}

func (m *ResultFilter) GetResult() ResultEnum {
	if m != nil {
		return m.Result
	}
	return ResultEnum_WIN
}

func (m *ResultFilter) GetGames() uint32 {
	if m != nil {
		return m.Games
	}
	return 0
}

func (m *ResultFilter) GetVenue() VenueEnum {
	if m != nil {
		return m.Venue
	}
	return VenueEnum_HOME
}

type StatFilter struct {
	Stat                 StatEnum    `protobuf:"varint,1,opt,name=stat,proto3,enum=statistico.StatEnum" json:"stat,omitempty"`
	Team                 TeamEnum    `protobuf:"varint,2,opt,name=team,proto3,enum=statistico.TeamEnum" json:"team,omitempty"`
	Action               ActionEnum  `protobuf:"varint,3,opt,name=action,proto3,enum=statistico.ActionEnum" json:"action,omitempty"`
	Games                uint32      `protobuf:"varint,4,opt,name=games,proto3" json:"games,omitempty"`
	Measure              MeasureEnum `protobuf:"varint,5,opt,name=measure,proto3,enum=statistico.MeasureEnum" json:"measure,omitempty"`
	Metric               MetricEnum  `protobuf:"varint,6,opt,name=metric,proto3,enum=statistico.MetricEnum" json:"metric,omitempty"`
	Value                float32     `protobuf:"fixed32,7,opt,name=value,proto3" json:"value,omitempty"`
	Venue                VenueEnum   `protobuf:"varint,8,opt,name=venue,proto3,enum=statistico.VenueEnum" json:"venue,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
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

func (m *StatFilter) GetStat() StatEnum {
	if m != nil {
		return m.Stat
	}
	return StatEnum_GOALS
}

func (m *StatFilter) GetTeam() TeamEnum {
	if m != nil {
		return m.Team
	}
	return TeamEnum_HOME_TEAM
}

func (m *StatFilter) GetAction() ActionEnum {
	if m != nil {
		return m.Action
	}
	return ActionEnum_FOR
}

func (m *StatFilter) GetGames() uint32 {
	if m != nil {
		return m.Games
	}
	return 0
}

func (m *StatFilter) GetMeasure() MeasureEnum {
	if m != nil {
		return m.Measure
	}
	return MeasureEnum_TOTAL
}

func (m *StatFilter) GetMetric() MetricEnum {
	if m != nil {
		return m.Metric
	}
	return MetricEnum_GTE
}

func (m *StatFilter) GetValue() float32 {
	if m != nil {
		return m.Value
	}
	return 0
}

func (m *StatFilter) GetVenue() VenueEnum {
	if m != nil {
		return m.Venue
	}
	return VenueEnum_HOME
}

func init() {
	proto.RegisterType((*ResultFilter)(nil), "statistico.ResultFilter")
	proto.RegisterType((*StatFilter)(nil), "statistico.StatFilter")
}

func init() { proto.RegisterFile("filter.proto", fileDescriptor_1f5303cab7a20d6f) }

var fileDescriptor_1f5303cab7a20d6f = []byte{
	// 298 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0xcf, 0x4a, 0xfb, 0x40,
	0x10, 0xc7, 0x49, 0x7e, 0x4d, 0xfa, 0x63, 0xa8, 0x1e, 0x42, 0xd5, 0xc5, 0x53, 0xe8, 0x29, 0x20,
	0x46, 0x6a, 0x8f, 0x9e, 0x14, 0xf4, 0xd6, 0x4b, 0x14, 0x0f, 0xde, 0xb6, 0x61, 0xac, 0x0b, 0xd9,
	0x44, 0x92, 0xd9, 0xbe, 0x94, 0xaf, 0xe2, 0x43, 0xc9, 0xce, 0xa8, 0x59, 0x54, 0xd0, 0x5b, 0x76,
	0xe6, 0xb3, 0xdf, 0x3f, 0x4b, 0x60, 0xf6, 0x68, 0x1a, 0xc2, 0xbe, 0x7c, 0xee, 0x3b, 0xea, 0x32,
	0x18, 0x48, 0x93, 0x19, 0xc8, 0xd4, 0xdd, 0x31, 0x60, 0xeb, 0xac, 0xcc, 0x17, 0x2f, 0x11, 0xcc,
	0x2a, 0x1c, 0x5c, 0x43, 0x37, 0x8c, 0x67, 0x05, 0x4c, 0x08, 0xb5, 0x55, 0x51, 0x1e, 0x15, 0xfb,
	0xe7, 0xf3, 0x72, 0xbc, 0x57, 0xde, 0xa1, 0xb6, 0xd7, 0xad, 0xb3, 0x15, 0x13, 0x59, 0x09, 0x69,
	0xcf, 0x37, 0x55, 0xcc, 0xec, 0x61, 0xc8, 0x8a, 0x26, 0xd3, 0xef, 0x54, 0x36, 0x87, 0x64, 0xab,
	0x2d, 0x0e, 0xea, 0x5f, 0x1e, 0x15, 0x7b, 0x95, 0x1c, 0xb2, 0x13, 0x48, 0x76, 0xd8, 0x3a, 0x54,
	0x13, 0x16, 0x39, 0x08, 0x45, 0xee, 0xfd, 0x82, 0x35, 0x84, 0x59, 0xbc, 0xc6, 0x00, 0xb7, 0xa4,
	0x83, 0xac, 0x9e, 0xfe, 0x29, 0xab, 0xa7, 0x24, 0xab, 0x1f, 0x7e, 0xb6, 0x8a, 0xff, 0xd2, 0x4a,
	0xd7, 0x64, 0xba, 0x96, 0x63, 0x7e, 0x69, 0x75, 0xc9, 0x1b, 0x69, 0x25, 0xd4, 0xd8, 0x6a, 0x12,
	0xb6, 0x5a, 0xc2, 0xd4, 0xa2, 0x1e, 0x5c, 0x8f, 0x2a, 0x61, 0x99, 0xa3, 0x50, 0x66, 0x2d, 0x2b,
	0xd6, 0xf9, 0xe0, 0xbc, 0xb1, 0x45, 0xea, 0x4d, 0xad, 0xd2, 0xef, 0xc6, 0x6b, 0xde, 0x88, 0xb1,
	0x50, 0xde, 0x78, 0xa7, 0x1b, 0x87, 0x6a, 0x9a, 0x47, 0x45, 0x5c, 0xc9, 0x61, 0x7c, 0xce, 0xff,
	0xbf, 0x3f, 0xe7, 0xd5, 0xea, 0x61, 0xb9, 0x35, 0xf4, 0xe4, 0x36, 0x65, 0xdd, 0xd9, 0xb3, 0x91,
	0x0c, 0x3e, 0x4f, 0xf9, 0x37, 0xb9, 0x18, 0x07, 0x9b, 0x94, 0x27, 0xab, 0xb7, 0x00, 0x00, 0x00,
	0xff, 0xff, 0xb5, 0x4c, 0x27, 0xfb, 0x60, 0x02, 0x00, 0x00,
}
