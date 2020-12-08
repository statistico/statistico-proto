// Code generated by protoc-gen-go. DO NOT EDIT.
// source: venue.proto

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

type Venue struct {
	Id                   uint64   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Venue) Reset()         { *m = Venue{} }
func (m *Venue) String() string { return proto.CompactTextString(m) }
func (*Venue) ProtoMessage()    {}
func (*Venue) Descriptor() ([]byte, []int) {
	return fileDescriptor_293cd873732ffa34, []int{0}
}

func (m *Venue) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Venue.Unmarshal(m, b)
}
func (m *Venue) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Venue.Marshal(b, m, deterministic)
}
func (m *Venue) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Venue.Merge(m, src)
}
func (m *Venue) XXX_Size() int {
	return xxx_messageInfo_Venue.Size(m)
}
func (m *Venue) XXX_DiscardUnknown() {
	xxx_messageInfo_Venue.DiscardUnknown(m)
}

var xxx_messageInfo_Venue proto.InternalMessageInfo

func (m *Venue) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Venue) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func init() {
	proto.RegisterType((*Venue)(nil), "statisticoproto.Venue")
}

func init() {
	proto.RegisterFile("venue.proto", fileDescriptor_293cd873732ffa34)
}

var fileDescriptor_293cd873732ffa34 = []byte{
	// 96 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x2e, 0x4b, 0xcd, 0x2b,
	0x4d, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x2f, 0x2e, 0x49, 0x2c, 0xc9, 0x2c, 0x2e,
	0xc9, 0x4c, 0xce, 0x07, 0x0b, 0x28, 0x69, 0x73, 0xb1, 0x86, 0x81, 0xe4, 0x85, 0xf8, 0xb8, 0x98,
	0x32, 0x53, 0x24, 0x18, 0x15, 0x18, 0x35, 0x58, 0x82, 0x98, 0x32, 0x53, 0x84, 0x84, 0xb8, 0x58,
	0xf2, 0x12, 0x73, 0x53, 0x25, 0x98, 0x14, 0x18, 0x35, 0x38, 0x83, 0xc0, 0xec, 0x24, 0x36, 0xb0,
	0x1e, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0xd4, 0x1e, 0xde, 0xff, 0x53, 0x00, 0x00, 0x00,
}