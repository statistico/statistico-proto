// Code generated by protoc-gen-go. DO NOT EDIT.
// source: round.proto

package statistico_data

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

type Round struct {
	Id       uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name     string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	SeasonId uint64 `protobuf:"varint,3,opt,name=season_id,json=seasonId,proto3" json:"season_id,omitempty"`
	// RFC3339 formatted string i.e "2006-01-02T15:04:05Z07:00"
	StartDate string `protobuf:"bytes,4,opt,name=start_date,json=startDate,proto3" json:"start_date,omitempty"`
	// RFC3339 formatted string i.e "2006-01-02T15:04:05Z07:00"
	EndDate              string   `protobuf:"bytes,5,opt,name=end_date,json=endDate,proto3" json:"end_date,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Round) Reset()         { *m = Round{} }
func (m *Round) String() string { return proto.CompactTextString(m) }
func (*Round) ProtoMessage()    {}
func (*Round) Descriptor() ([]byte, []int) {
	return fileDescriptor_656962e0836f4ffa, []int{0}
}

func (m *Round) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Round.Unmarshal(m, b)
}
func (m *Round) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Round.Marshal(b, m, deterministic)
}
func (m *Round) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Round.Merge(m, src)
}
func (m *Round) XXX_Size() int {
	return xxx_messageInfo_Round.Size(m)
}
func (m *Round) XXX_DiscardUnknown() {
	xxx_messageInfo_Round.DiscardUnknown(m)
}

var xxx_messageInfo_Round proto.InternalMessageInfo

func (m *Round) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Round) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Round) GetSeasonId() uint64 {
	if m != nil {
		return m.SeasonId
	}
	return 0
}

func (m *Round) GetStartDate() string {
	if m != nil {
		return m.StartDate
	}
	return ""
}

func (m *Round) GetEndDate() string {
	if m != nil {
		return m.EndDate
	}
	return ""
}

func init() {
	proto.RegisterType((*Round)(nil), "statistico_data.Round")
}

func init() {
	proto.RegisterFile("round.proto", fileDescriptor_656962e0836f4ffa)
}

var fileDescriptor_656962e0836f4ffa = []byte{
	// 159 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x24, 0x8e, 0x31, 0xae, 0xc2, 0x30,
	0x0c, 0x40, 0x95, 0xfe, 0xf6, 0xd3, 0x1a, 0x09, 0x24, 0x4f, 0x41, 0x08, 0xa9, 0x62, 0xea, 0xc4,
	0xc2, 0x15, 0x58, 0x58, 0x7b, 0x81, 0xca, 0x60, 0x0f, 0x19, 0x48, 0x50, 0x62, 0x2e, 0xc0, 0xc9,
	0x51, 0xdc, 0xcd, 0x7a, 0xef, 0xd9, 0x32, 0x6c, 0x73, 0xfa, 0x44, 0xbe, 0xbc, 0x73, 0xd2, 0x84,
	0xfb, 0xa2, 0xa4, 0xa1, 0x68, 0x78, 0xa6, 0x85, 0x49, 0xe9, 0xfc, 0x75, 0xd0, 0xcd, 0x35, 0xc0,
	0x1d, 0x34, 0x81, 0xbd, 0x1b, 0xdd, 0xd4, 0xce, 0x4d, 0x60, 0x44, 0x68, 0x23, 0xbd, 0xc4, 0x37,
	0xa3, 0x9b, 0x86, 0xd9, 0x66, 0x3c, 0xc2, 0x50, 0x84, 0x4a, 0x8a, 0x4b, 0x60, 0xff, 0x67, 0x69,
	0xbf, 0x82, 0x3b, 0xe3, 0x09, 0xa0, 0x28, 0x65, 0xad, 0x87, 0xc5, 0xb7, 0xb6, 0x36, 0x18, 0xb9,
	0x91, 0x0a, 0x1e, 0xa0, 0x97, 0xc8, 0xab, 0xec, 0x4c, 0x6e, 0x24, 0x72, 0x55, 0x8f, 0x7f, 0x7b,
	0xee, 0xfa, 0x0b, 0x00, 0x00, 0xff, 0xff, 0xdd, 0xc2, 0x87, 0x79, 0xab, 0x00, 0x00, 0x00,
}