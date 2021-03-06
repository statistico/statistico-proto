// Code generated by protoc-gen-go. DO NOT EDIT.
// source: team.proto

package statistico

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

type Team struct {
	Id                   uint64                `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string                `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	ShortCode            *wrappers.StringValue `protobuf:"bytes,3,opt,name=short_code,json=shortCode,proto3" json:"short_code,omitempty"`
	CountryId            uint64                `protobuf:"varint,4,opt,name=country_id,json=countryId,proto3" json:"country_id,omitempty"`
	VenueId              uint64                `protobuf:"varint,5,opt,name=venue_id,json=venueId,proto3" json:"venue_id,omitempty"`
	IsNationalTeam       *wrappers.BoolValue   `protobuf:"bytes,6,opt,name=is_national_team,json=isNationalTeam,proto3" json:"is_national_team,omitempty"`
	Founded              *wrappers.UInt64Value `protobuf:"bytes,7,opt,name=founded,proto3" json:"founded,omitempty"`
	Logo                 *wrappers.StringValue `protobuf:"bytes,8,opt,name=logo,proto3" json:"logo,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *Team) Reset()         { *m = Team{} }
func (m *Team) String() string { return proto.CompactTextString(m) }
func (*Team) ProtoMessage()    {}
func (*Team) Descriptor() ([]byte, []int) {
	return fileDescriptor_8b4e9e93d7b2c6bb, []int{0}
}

func (m *Team) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Team.Unmarshal(m, b)
}
func (m *Team) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Team.Marshal(b, m, deterministic)
}
func (m *Team) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Team.Merge(m, src)
}
func (m *Team) XXX_Size() int {
	return xxx_messageInfo_Team.Size(m)
}
func (m *Team) XXX_DiscardUnknown() {
	xxx_messageInfo_Team.DiscardUnknown(m)
}

var xxx_messageInfo_Team proto.InternalMessageInfo

func (m *Team) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Team) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Team) GetShortCode() *wrappers.StringValue {
	if m != nil {
		return m.ShortCode
	}
	return nil
}

func (m *Team) GetCountryId() uint64 {
	if m != nil {
		return m.CountryId
	}
	return 0
}

func (m *Team) GetVenueId() uint64 {
	if m != nil {
		return m.VenueId
	}
	return 0
}

func (m *Team) GetIsNationalTeam() *wrappers.BoolValue {
	if m != nil {
		return m.IsNationalTeam
	}
	return nil
}

func (m *Team) GetFounded() *wrappers.UInt64Value {
	if m != nil {
		return m.Founded
	}
	return nil
}

func (m *Team) GetLogo() *wrappers.StringValue {
	if m != nil {
		return m.Logo
	}
	return nil
}

func init() {
	proto.RegisterType((*Team)(nil), "statistico.Team")
}

func init() { proto.RegisterFile("team.proto", fileDescriptor_8b4e9e93d7b2c6bb) }

var fileDescriptor_8b4e9e93d7b2c6bb = []byte{
	// 373 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x91, 0x31, 0x8f, 0xd3, 0x40,
	0x10, 0x85, 0xb1, 0x31, 0x97, 0xcb, 0x44, 0x8a, 0x4e, 0xdb, 0x60, 0x2c, 0x38, 0x45, 0x57, 0xa5,
	0xc1, 0x39, 0x2e, 0x28, 0x05, 0xe9, 0x4c, 0x24, 0x64, 0x0a, 0x0a, 0x07, 0x28, 0x68, 0xac, 0x8d,
	0x77, 0xe2, 0xac, 0x64, 0xef, 0x84, 0xdd, 0x75, 0x50, 0x7e, 0x08, 0x3f, 0x8c, 0x7f, 0x84, 0xbc,
	0x76, 0x94, 0x08, 0x04, 0xba, 0x6e, 0xe7, 0xbd, 0x37, 0xfe, 0xfc, 0x34, 0x00, 0x16, 0x79, 0x1d,
	0xef, 0x35, 0x59, 0x62, 0x60, 0x2c, 0xb7, 0xd2, 0x58, 0x59, 0x50, 0x74, 0x5b, 0x12, 0x95, 0x15,
	0xce, 0x9c, 0xb3, 0x69, 0xb6, 0xb3, 0x1f, 0x9a, 0xef, 0xf7, 0xa8, 0x4d, 0x97, 0x8d, 0xc6, 0x1a,
	0xbf, 0x37, 0x68, 0x6c, 0x3f, 0xdf, 0xfd, 0xf2, 0x21, 0xf8, 0x8c, 0xbc, 0x66, 0x63, 0xf0, 0xa5,
	0x08, 0xbd, 0x89, 0x37, 0x0d, 0x32, 0x5f, 0x0a, 0xc6, 0x20, 0x50, 0xbc, 0xc6, 0xd0, 0x9f, 0x78,
	0xd3, 0x61, 0xe6, 0xde, 0x6c, 0x09, 0x60, 0x76, 0xa4, 0x6d, 0x5e, 0x90, 0xc0, 0xf0, 0xe9, 0xc4,
	0x9b, 0x8e, 0x1e, 0x5e, 0xc6, 0x1d, 0x31, 0x3e, 0x11, 0xe3, 0xb5, 0xd5, 0x52, 0x95, 0x5f, 0x79,
	0xd5, 0x60, 0x36, 0x74, 0xf9, 0xf7, 0x24, 0x90, 0xbd, 0x02, 0x28, 0xa8, 0x51, 0x56, 0x1f, 0x73,
	0x29, 0xc2, 0xc0, 0x81, 0x86, 0xbd, 0x92, 0x0a, 0xf6, 0x02, 0xae, 0x0f, 0xa8, 0x1a, 0x6c, 0xcd,
	0x67, 0xce, 0x1c, 0xb8, 0x39, 0x15, 0x6c, 0x05, 0x37, 0xd2, 0xe4, 0x8a, 0x5b, 0x49, 0x8a, 0x57,
	0x79, 0xdb, 0x3c, 0xbc, 0x72, 0xf0, 0xe8, 0x2f, 0x78, 0x42, 0x54, 0x75, 0xe8, 0xb1, 0x34, 0x9f,
	0xfa, 0x15, 0x57, 0x70, 0x01, 0x83, 0x2d, 0x35, 0x4a, 0xa0, 0x08, 0x07, 0xff, 0xf8, 0xf3, 0x2f,
	0xa9, 0xb2, 0x8b, 0xb7, 0xdd, 0xfa, 0x29, 0xcc, 0xee, 0x21, 0xa8, 0xa8, 0xa4, 0xf0, 0xfa, 0x11,
	0x75, 0x5d, 0xf2, 0xe1, 0xa7, 0x07, 0xa3, 0x16, 0xb9, 0x46, 0x7d, 0x90, 0x05, 0xb2, 0x77, 0x30,
	0xfa, 0x80, 0xb6, 0x55, 0x92, 0x63, 0xba, 0x62, 0xcf, 0xe3, 0xf3, 0xbd, 0xe2, 0x56, 0xcd, 0xba,
	0x93, 0x44, 0x37, 0x7f, 0x1a, 0x77, 0x4f, 0xd8, 0x47, 0x60, 0xfd, 0xae, 0x49, 0x8e, 0x6b, 0xe4,
	0x86, 0x54, 0x2a, 0xd8, 0xed, 0x65, 0xb2, 0x53, 0x5d, 0xe4, 0x3f, 0x5f, 0xba, 0xf7, 0x92, 0xf9,
	0xb7, 0x37, 0xa5, 0xb4, 0xbb, 0x66, 0x13, 0x17, 0x54, 0xcf, 0xce, 0x89, 0x8b, 0xe7, 0x6b, 0x57,
	0x6b, 0x79, 0x16, 0x36, 0x57, 0x4e, 0x99, 0xff, 0x0e, 0x00, 0x00, 0xff, 0xff, 0x6b, 0xa2, 0x17,
	0x73, 0x71, 0x02, 0x00, 0x00,
}
