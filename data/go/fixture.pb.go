// Code generated by protoc-gen-go. DO NOT EDIT.
// source: fixture.proto

package statistico_data

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

type Fixture struct {
	Id                   int64        `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Competition          *Competition `protobuf:"bytes,2,opt,name=competition,proto3" json:"competition,omitempty"`
	Season               *Season      `protobuf:"bytes,3,opt,name=season,proto3" json:"season,omitempty"`
	HomeTeam             *Team        `protobuf:"bytes,4,opt,name=home_team,json=homeTeam,proto3" json:"home_team,omitempty"`
	AwayTeam             *Team        `protobuf:"bytes,5,opt,name=away_team,json=awayTeam,proto3" json:"away_team,omitempty"`
	Round                *Round       `protobuf:"bytes,6,opt,name=round,proto3" json:"round,omitempty"`
	Venue                *Venue       `protobuf:"bytes,7,opt,name=venue,proto3" json:"venue,omitempty"`
	DateTime             *Date        `protobuf:"bytes,8,opt,name=date_time,json=dateTime,proto3" json:"date_time,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *Fixture) Reset()         { *m = Fixture{} }
func (m *Fixture) String() string { return proto.CompactTextString(m) }
func (*Fixture) ProtoMessage()    {}
func (*Fixture) Descriptor() ([]byte, []int) {
	return fileDescriptor_d81820e403a865f4, []int{0}
}

func (m *Fixture) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Fixture.Unmarshal(m, b)
}
func (m *Fixture) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Fixture.Marshal(b, m, deterministic)
}
func (m *Fixture) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Fixture.Merge(m, src)
}
func (m *Fixture) XXX_Size() int {
	return xxx_messageInfo_Fixture.Size(m)
}
func (m *Fixture) XXX_DiscardUnknown() {
	xxx_messageInfo_Fixture.DiscardUnknown(m)
}

var xxx_messageInfo_Fixture proto.InternalMessageInfo

func (m *Fixture) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Fixture) GetCompetition() *Competition {
	if m != nil {
		return m.Competition
	}
	return nil
}

func (m *Fixture) GetSeason() *Season {
	if m != nil {
		return m.Season
	}
	return nil
}

func (m *Fixture) GetHomeTeam() *Team {
	if m != nil {
		return m.HomeTeam
	}
	return nil
}

func (m *Fixture) GetAwayTeam() *Team {
	if m != nil {
		return m.AwayTeam
	}
	return nil
}

func (m *Fixture) GetRound() *Round {
	if m != nil {
		return m.Round
	}
	return nil
}

func (m *Fixture) GetVenue() *Venue {
	if m != nil {
		return m.Venue
	}
	return nil
}

func (m *Fixture) GetDateTime() *Date {
	if m != nil {
		return m.DateTime
	}
	return nil
}

func init() {
	proto.RegisterType((*Fixture)(nil), "statistico_data.Fixture")
}

func init() {
	proto.RegisterFile("fixture.proto", fileDescriptor_d81820e403a865f4)
}

var fileDescriptor_d81820e403a865f4 = []byte{
	// 337 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0xcd, 0x4a, 0x33, 0x31,
	0x14, 0x86, 0xbf, 0x69, 0xbf, 0x4e, 0x6b, 0xa6, 0x56, 0x0c, 0xa8, 0xa1, 0x08, 0x96, 0x82, 0xd0,
	0x85, 0x54, 0xa9, 0x7b, 0x17, 0x5a, 0x04, 0x05, 0x37, 0x69, 0x71, 0x5b, 0xe2, 0xcc, 0x91, 0x66,
	0x91, 0xa6, 0x4e, 0xce, 0x54, 0xbb, 0xf5, 0x76, 0xbc, 0x49, 0xc9, 0x8f, 0xb5, 0x38, 0x8c, 0xb8,
	0x9b, 0xe4, 0x7d, 0x9e, 0xe4, 0x25, 0x73, 0xc8, 0xee, 0xb3, 0x7c, 0xc3, 0x22, 0x87, 0xe1, 0x32,
	0xd7, 0xa8, 0xe9, 0x9e, 0x41, 0x81, 0xd2, 0xa0, 0x4c, 0xf5, 0x2c, 0x13, 0x28, 0xba, 0xed, 0x54,
	0x2b, 0xa5, 0x17, 0x3e, 0xee, 0xee, 0xa7, 0x5a, 0x2d, 0x01, 0x25, 0xca, 0xcd, 0x56, 0x27, 0x87,
	0x97, 0x02, 0x0c, 0x9a, 0xb0, 0x4e, 0x72, 0x5d, 0x2c, 0xb2, 0xb0, 0x68, 0x1b, 0x10, 0x66, 0x83,
	0x12, 0x04, 0xa1, 0xbe, 0xb0, 0x15, 0x2c, 0x8a, 0x70, 0x6b, 0xff, 0xbd, 0x4e, 0x9a, 0xb7, 0xbe,
	0x07, 0xed, 0x90, 0x9a, 0xcc, 0x58, 0xd4, 0x8b, 0x06, 0x75, 0x5e, 0x93, 0x19, 0xbd, 0x22, 0xc9,
	0xd6, 0xa5, 0xac, 0xd6, 0x8b, 0x06, 0xc9, 0xe8, 0x78, 0xf8, 0xa3, 0xe7, 0xf0, 0xe6, 0x9b, 0xe1,
	0xdb, 0x02, 0x3d, 0x27, 0xb1, 0x2f, 0xc1, 0xea, 0x4e, 0x3d, 0x2a, 0xa9, 0x13, 0x17, 0xf3, 0x80,
	0xd1, 0x11, 0xd9, 0x99, 0x6b, 0x05, 0x33, 0x5b, 0x96, 0xfd, 0x77, 0xce, 0x41, 0xc9, 0x99, 0x82,
	0x50, 0xbc, 0x65, 0x39, 0xfb, 0x65, 0x1d, 0xf1, 0x2a, 0xd6, 0xde, 0x69, 0xfc, 0xea, 0x58, 0xce,
	0x39, 0x67, 0xa4, 0xe1, 0x9e, 0x8a, 0xc5, 0x8e, 0x3f, 0x2c, 0xf1, 0xdc, 0xa6, 0xdc, 0x43, 0x96,
	0x76, 0x2f, 0xc6, 0x9a, 0x15, 0xf4, 0xa3, 0x4d, 0xb9, 0x87, 0x6c, 0x9f, 0x4c, 0x20, 0xcc, 0x50,
	0x2a, 0x60, 0xad, 0x8a, 0x3e, 0x63, 0x81, 0xc0, 0x5b, 0x96, 0x9b, 0x4a, 0x05, 0xa3, 0x8f, 0x88,
	0x74, 0xc2, 0x4f, 0x98, 0x40, 0xbe, 0x92, 0x29, 0xd0, 0x7b, 0x92, 0x84, 0x9d, 0xeb, 0xf5, 0xdd,
	0x98, 0x9e, 0x94, 0x8e, 0x08, 0x29, 0xf7, 0x23, 0xd0, 0x65, 0x55, 0x40, 0xff, 0x1f, 0x7d, 0x20,
	0xf1, 0x04, 0x44, 0x9e, 0xce, 0xe9, 0x69, 0x15, 0xe5, 0xf3, 0x3f, 0x1c, 0x76, 0x11, 0x3d, 0xc5,
	0x6e, 0x72, 0x2e, 0x3f, 0x03, 0x00, 0x00, 0xff, 0xff, 0x8d, 0x28, 0x9e, 0x52, 0xc0, 0x02, 0x00,
	0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// FixtureServiceClient is the client API for FixtureService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type FixtureServiceClient interface {
	FixtureByID(ctx context.Context, in *FixtureRequest, opts ...grpc.CallOption) (*Fixture, error)
	Search(ctx context.Context, in *FixtureSearchRequest, opts ...grpc.CallOption) (FixtureService_SearchClient, error)
}

type fixtureServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewFixtureServiceClient(cc grpc.ClientConnInterface) FixtureServiceClient {
	return &fixtureServiceClient{cc}
}

func (c *fixtureServiceClient) FixtureByID(ctx context.Context, in *FixtureRequest, opts ...grpc.CallOption) (*Fixture, error) {
	out := new(Fixture)
	err := c.cc.Invoke(ctx, "/statistico_data.FixtureService/FixtureByID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fixtureServiceClient) Search(ctx context.Context, in *FixtureSearchRequest, opts ...grpc.CallOption) (FixtureService_SearchClient, error) {
	stream, err := c.cc.NewStream(ctx, &_FixtureService_serviceDesc.Streams[0], "/statistico_data.FixtureService/Search", opts...)
	if err != nil {
		return nil, err
	}
	x := &fixtureServiceSearchClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type FixtureService_SearchClient interface {
	Recv() (*Fixture, error)
	grpc.ClientStream
}

type fixtureServiceSearchClient struct {
	grpc.ClientStream
}

func (x *fixtureServiceSearchClient) Recv() (*Fixture, error) {
	m := new(Fixture)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// FixtureServiceServer is the server API for FixtureService service.
type FixtureServiceServer interface {
	FixtureByID(context.Context, *FixtureRequest) (*Fixture, error)
	Search(*FixtureSearchRequest, FixtureService_SearchServer) error
}

// UnimplementedFixtureServiceServer can be embedded to have forward compatible implementations.
type UnimplementedFixtureServiceServer struct {
}

func (*UnimplementedFixtureServiceServer) FixtureByID(ctx context.Context, req *FixtureRequest) (*Fixture, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FixtureByID not implemented")
}
func (*UnimplementedFixtureServiceServer) Search(req *FixtureSearchRequest, srv FixtureService_SearchServer) error {
	return status.Errorf(codes.Unimplemented, "method Search not implemented")
}

func RegisterFixtureServiceServer(s *grpc.Server, srv FixtureServiceServer) {
	s.RegisterService(&_FixtureService_serviceDesc, srv)
}

func _FixtureService_FixtureByID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FixtureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FixtureServiceServer).FixtureByID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico_data.FixtureService/FixtureByID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FixtureServiceServer).FixtureByID(ctx, req.(*FixtureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FixtureService_Search_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(FixtureSearchRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(FixtureServiceServer).Search(m, &fixtureServiceSearchServer{stream})
}

type FixtureService_SearchServer interface {
	Send(*Fixture) error
	grpc.ServerStream
}

type fixtureServiceSearchServer struct {
	grpc.ServerStream
}

func (x *fixtureServiceSearchServer) Send(m *Fixture) error {
	return x.ServerStream.SendMsg(m)
}

var _FixtureService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "statistico_data.FixtureService",
	HandlerType: (*FixtureServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "FixtureByID",
			Handler:    _FixtureService_FixtureByID_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Search",
			Handler:       _FixtureService_Search_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "fixture.proto",
}