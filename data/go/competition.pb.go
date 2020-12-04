// Code generated by protoc-gen-go. DO NOT EDIT.
// source: competition.proto

package statisticoproto

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

type Competition struct {
	Id                   uint64   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	IsCup                bool     `protobuf:"varint,3,opt,name=is_cup,json=isCup,proto3" json:"is_cup,omitempty"`
	CountryId            uint64   `protobuf:"varint,4,opt,name=country_id,json=countryId,proto3" json:"country_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Competition) Reset()         { *m = Competition{} }
func (m *Competition) String() string { return proto.CompactTextString(m) }
func (*Competition) ProtoMessage()    {}
func (*Competition) Descriptor() ([]byte, []int) {
	return fileDescriptor_25f6be7558319af9, []int{0}
}

func (m *Competition) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Competition.Unmarshal(m, b)
}
func (m *Competition) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Competition.Marshal(b, m, deterministic)
}
func (m *Competition) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Competition.Merge(m, src)
}
func (m *Competition) XXX_Size() int {
	return xxx_messageInfo_Competition.Size(m)
}
func (m *Competition) XXX_DiscardUnknown() {
	xxx_messageInfo_Competition.DiscardUnknown(m)
}

var xxx_messageInfo_Competition proto.InternalMessageInfo

func (m *Competition) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Competition) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Competition) GetIsCup() bool {
	if m != nil {
		return m.IsCup
	}
	return false
}

func (m *Competition) GetCountryId() uint64 {
	if m != nil {
		return m.CountryId
	}
	return 0
}

func init() {
	proto.RegisterType((*Competition)(nil), "statisticoproto.Competition")
}

func init() {
	proto.RegisterFile("competition.proto", fileDescriptor_25f6be7558319af9)
}

var fileDescriptor_25f6be7558319af9 = []byte{
	// 202 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x8e, 0xc1, 0x4a, 0xc4, 0x30,
	0x10, 0x86, 0x4d, 0xad, 0x8b, 0x3b, 0xc2, 0xaa, 0x03, 0x42, 0x58, 0x14, 0xca, 0x7a, 0xe9, 0xa9,
	0x88, 0x3e, 0x42, 0x4f, 0x82, 0xa7, 0x78, 0xf2, 0x54, 0x6a, 0x12, 0x64, 0x0e, 0x6d, 0x62, 0x66,
	0x22, 0xf8, 0xf6, 0x42, 0x2a, 0x58, 0x3c, 0xec, 0x6d, 0xf8, 0xfe, 0x7f, 0x66, 0x3e, 0xb8, 0xb6,
	0x61, 0x8a, 0x5e, 0x48, 0x28, 0xcc, 0x5d, 0x4c, 0x41, 0x02, 0x5e, 0xb2, 0x8c, 0x42, 0x2c, 0x64,
	0x43, 0x01, 0xfb, 0x5d, 0xf2, 0x9f, 0xd9, 0xb3, 0xf0, 0x52, 0x38, 0x7c, 0xc0, 0x45, 0xff, 0xb7,
	0x85, 0x3b, 0xa8, 0xc8, 0x69, 0xd5, 0xa8, 0xb6, 0x36, 0x15, 0x39, 0x44, 0xa8, 0xe7, 0x71, 0xf2,
	0xba, 0x6a, 0x54, 0xbb, 0x35, 0x65, 0xc6, 0x1b, 0xd8, 0x10, 0x0f, 0x36, 0x47, 0x7d, 0xda, 0xa8,
	0xf6, 0xdc, 0x9c, 0x11, 0xf7, 0x39, 0xe2, 0x1d, 0x80, 0x0d, 0x79, 0x96, 0xf4, 0x3d, 0x90, 0xd3,
	0x75, 0x39, 0xb1, 0xfd, 0x25, 0xcf, 0xee, 0x31, 0x00, 0xae, 0x1e, 0xbd, 0xfa, 0xf4, 0x45, 0xd6,
	0xe3, 0x1b, 0x5c, 0xbd, 0x10, 0xcb, 0x2a, 0x61, 0xbc, 0xef, 0xfe, 0x49, 0x77, 0xab, 0xd8, 0x2c,
	0xfa, 0xfb, 0xdb, 0x63, 0xa5, 0xc3, 0xc9, 0x83, 0x7a, 0xdf, 0x14, 0xfc, 0xf4, 0x13, 0x00, 0x00,
	0xff, 0xff, 0x19, 0xdd, 0xde, 0x21, 0x16, 0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// CompetitionServiceClient is the client API for CompetitionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type CompetitionServiceClient interface {
	ListCompetitions(ctx context.Context, in *CompetitionRequest, opts ...grpc.CallOption) (CompetitionService_ListCompetitionsClient, error)
}

type competitionServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCompetitionServiceClient(cc grpc.ClientConnInterface) CompetitionServiceClient {
	return &competitionServiceClient{cc}
}

func (c *competitionServiceClient) ListCompetitions(ctx context.Context, in *CompetitionRequest, opts ...grpc.CallOption) (CompetitionService_ListCompetitionsClient, error) {
	stream, err := c.cc.NewStream(ctx, &_CompetitionService_serviceDesc.Streams[0], "/statisticoproto.CompetitionService/ListCompetitions", opts...)
	if err != nil {
		return nil, err
	}
	x := &competitionServiceListCompetitionsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type CompetitionService_ListCompetitionsClient interface {
	Recv() (*Competition, error)
	grpc.ClientStream
}

type competitionServiceListCompetitionsClient struct {
	grpc.ClientStream
}

func (x *competitionServiceListCompetitionsClient) Recv() (*Competition, error) {
	m := new(Competition)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// CompetitionServiceServer is the server API for CompetitionService service.
type CompetitionServiceServer interface {
	ListCompetitions(*CompetitionRequest, CompetitionService_ListCompetitionsServer) error
}

// UnimplementedCompetitionServiceServer can be embedded to have forward compatible implementations.
type UnimplementedCompetitionServiceServer struct {
}

func (*UnimplementedCompetitionServiceServer) ListCompetitions(req *CompetitionRequest, srv CompetitionService_ListCompetitionsServer) error {
	return status.Errorf(codes.Unimplemented, "method ListCompetitions not implemented")
}

func RegisterCompetitionServiceServer(s *grpc.Server, srv CompetitionServiceServer) {
	s.RegisterService(&_CompetitionService_serviceDesc, srv)
}

func _CompetitionService_ListCompetitions_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(CompetitionRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(CompetitionServiceServer).ListCompetitions(m, &competitionServiceListCompetitionsServer{stream})
}

type CompetitionService_ListCompetitionsServer interface {
	Send(*Competition) error
	grpc.ServerStream
}

type competitionServiceListCompetitionsServer struct {
	grpc.ServerStream
}

func (x *competitionServiceListCompetitionsServer) Send(m *Competition) error {
	return x.ServerStream.SendMsg(m)
}

var _CompetitionService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "statisticoproto.CompetitionService",
	HandlerType: (*CompetitionServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ListCompetitions",
			Handler:       _CompetitionService_ListCompetitions_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "competition.proto",
}
