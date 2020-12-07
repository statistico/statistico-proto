// Code generated by protoc-gen-go. DO NOT EDIT.
// source: performance.proto

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

type TeamStatPerformanceRequest struct {
	Action               string   `protobuf:"bytes,1,opt,name=action,proto3" json:"action,omitempty"`
	Games                uint32   `protobuf:"varint,2,opt,name=games,proto3" json:"games,omitempty"`
	Measure              string   `protobuf:"bytes,3,opt,name=measure,proto3" json:"measure,omitempty"`
	Metric               string   `protobuf:"bytes,4,opt,name=metric,proto3" json:"metric,omitempty"`
	Seasons              []uint64 `protobuf:"varint,5,rep,packed,name=seasons,proto3" json:"seasons,omitempty"`
	Stat                 string   `protobuf:"bytes,6,opt,name=stat,proto3" json:"stat,omitempty"`
	Value                float32  `protobuf:"fixed32,7,opt,name=value,proto3" json:"value,omitempty"`
	Venue                string   `protobuf:"bytes,8,opt,name=venue,proto3" json:"venue,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TeamStatPerformanceRequest) Reset()         { *m = TeamStatPerformanceRequest{} }
func (m *TeamStatPerformanceRequest) String() string { return proto.CompactTextString(m) }
func (*TeamStatPerformanceRequest) ProtoMessage()    {}
func (*TeamStatPerformanceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_6db4cf59bf07e440, []int{0}
}

func (m *TeamStatPerformanceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TeamStatPerformanceRequest.Unmarshal(m, b)
}
func (m *TeamStatPerformanceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TeamStatPerformanceRequest.Marshal(b, m, deterministic)
}
func (m *TeamStatPerformanceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TeamStatPerformanceRequest.Merge(m, src)
}
func (m *TeamStatPerformanceRequest) XXX_Size() int {
	return xxx_messageInfo_TeamStatPerformanceRequest.Size(m)
}
func (m *TeamStatPerformanceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_TeamStatPerformanceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_TeamStatPerformanceRequest proto.InternalMessageInfo

func (m *TeamStatPerformanceRequest) GetAction() string {
	if m != nil {
		return m.Action
	}
	return ""
}

func (m *TeamStatPerformanceRequest) GetGames() uint32 {
	if m != nil {
		return m.Games
	}
	return 0
}

func (m *TeamStatPerformanceRequest) GetMeasure() string {
	if m != nil {
		return m.Measure
	}
	return ""
}

func (m *TeamStatPerformanceRequest) GetMetric() string {
	if m != nil {
		return m.Metric
	}
	return ""
}

func (m *TeamStatPerformanceRequest) GetSeasons() []uint64 {
	if m != nil {
		return m.Seasons
	}
	return nil
}

func (m *TeamStatPerformanceRequest) GetStat() string {
	if m != nil {
		return m.Stat
	}
	return ""
}

func (m *TeamStatPerformanceRequest) GetValue() float32 {
	if m != nil {
		return m.Value
	}
	return 0
}

func (m *TeamStatPerformanceRequest) GetVenue() string {
	if m != nil {
		return m.Venue
	}
	return ""
}

type TeamStatResponse struct {
	Teams                []*Team  `protobuf:"bytes,1,rep,name=teams,proto3" json:"teams,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TeamStatResponse) Reset()         { *m = TeamStatResponse{} }
func (m *TeamStatResponse) String() string { return proto.CompactTextString(m) }
func (*TeamStatResponse) ProtoMessage()    {}
func (*TeamStatResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_6db4cf59bf07e440, []int{1}
}

func (m *TeamStatResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TeamStatResponse.Unmarshal(m, b)
}
func (m *TeamStatResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TeamStatResponse.Marshal(b, m, deterministic)
}
func (m *TeamStatResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TeamStatResponse.Merge(m, src)
}
func (m *TeamStatResponse) XXX_Size() int {
	return xxx_messageInfo_TeamStatResponse.Size(m)
}
func (m *TeamStatResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_TeamStatResponse.DiscardUnknown(m)
}

var xxx_messageInfo_TeamStatResponse proto.InternalMessageInfo

func (m *TeamStatResponse) GetTeams() []*Team {
	if m != nil {
		return m.Teams
	}
	return nil
}

func init() {
	proto.RegisterType((*TeamStatPerformanceRequest)(nil), "statisticoproto.TeamStatPerformanceRequest")
	proto.RegisterType((*TeamStatResponse)(nil), "statisticoproto.TeamStatResponse")
}

func init() {
	proto.RegisterFile("performance.proto", fileDescriptor_6db4cf59bf07e440)
}

var fileDescriptor_6db4cf59bf07e440 = []byte{
	// 280 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x90, 0xcb, 0x4a, 0x33, 0x31,
	0x14, 0x80, 0xff, 0xf4, 0xfa, 0x1b, 0x11, 0x35, 0x54, 0x09, 0xb3, 0x1a, 0x67, 0x35, 0x50, 0x98,
	0x45, 0x7d, 0x00, 0x97, 0xae, 0x04, 0x49, 0x7d, 0x81, 0x18, 0x8e, 0x6d, 0xc0, 0x24, 0x63, 0xce,
	0x99, 0x2e, 0x7d, 0x4c, 0x9f, 0x47, 0x92, 0x38, 0x28, 0x52, 0x77, 0xf9, 0x72, 0xbe, 0x73, 0xe5,
	0x97, 0x3d, 0xc4, 0x97, 0x10, 0x9d, 0xf6, 0x06, 0xba, 0x3e, 0x06, 0x0a, 0xe2, 0x1c, 0x49, 0x93,
	0x45, 0xb2, 0x26, 0xe4, 0x8f, 0x8a, 0x13, 0x68, 0x57, 0x82, 0xcd, 0x07, 0xe3, 0xd5, 0x13, 0x68,
	0xb7, 0x25, 0x4d, 0x8f, 0xdf, 0xa9, 0x0a, 0xde, 0x06, 0x40, 0x12, 0xd7, 0x7c, 0xa1, 0x0d, 0xd9,
	0xe0, 0x25, 0xab, 0x59, 0x7b, 0xa2, 0xbe, 0x48, 0xac, 0xf8, 0x7c, 0xa7, 0x1d, 0xa0, 0x9c, 0xd4,
	0xac, 0x3d, 0x53, 0x05, 0x84, 0xe4, 0x4b, 0x07, 0x1a, 0x87, 0x08, 0x72, 0x9a, 0xf5, 0x11, 0x53,
	0x1d, 0x07, 0x14, 0xad, 0x91, 0xb3, 0x52, 0xa7, 0x50, 0xca, 0x40, 0xd0, 0x18, 0x3c, 0xca, 0x79,
	0x3d, 0x6d, 0x67, 0x6a, 0x44, 0x21, 0xf8, 0x2c, 0xcd, 0x2d, 0x17, 0xd9, 0xcf, 0xef, 0xd4, 0xf5,
	0xa0, 0x5f, 0x07, 0x90, 0xcb, 0x9a, 0xb5, 0x13, 0x55, 0x20, 0xff, 0x82, 0x1f, 0x40, 0xfe, 0xcf,
	0x6a, 0x81, 0xe6, 0x8e, 0x5f, 0x8c, 0x7b, 0x29, 0xc0, 0x3e, 0x78, 0x04, 0xb1, 0xe6, 0xf3, 0xb4,
	0x3a, 0x4a, 0x56, 0x4f, 0xdb, 0xd3, 0xcd, 0x55, 0xf7, 0xeb, 0x32, 0x5d, 0xca, 0x50, 0xc5, 0xd9,
	0xbc, 0x73, 0xf1, 0xe3, 0x20, 0x5b, 0x88, 0x07, 0x6b, 0x40, 0xec, 0xf9, 0xea, 0x1e, 0x28, 0x79,
	0xf8, 0xa0, 0xc9, 0xec, 0xad, 0xdf, 0xa5, 0x16, 0x62, 0x7d, 0xb4, 0xd6, 0xf1, 0xab, 0x56, 0x37,
	0x7f, 0xca, 0xe3, 0xa8, 0xcd, 0xbf, 0xe7, 0x45, 0x8e, 0xdc, 0x7e, 0x06, 0x00, 0x00, 0xff, 0xff,
	0x41, 0xfa, 0x2c, 0x41, 0xd2, 0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// PerformanceServiceClient is the client API for PerformanceService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type PerformanceServiceClient interface {
	GetTeamsMatchingStat(ctx context.Context, in *TeamStatPerformanceRequest, opts ...grpc.CallOption) (*TeamStatResponse, error)
}

type performanceServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPerformanceServiceClient(cc grpc.ClientConnInterface) PerformanceServiceClient {
	return &performanceServiceClient{cc}
}

func (c *performanceServiceClient) GetTeamsMatchingStat(ctx context.Context, in *TeamStatPerformanceRequest, opts ...grpc.CallOption) (*TeamStatResponse, error) {
	out := new(TeamStatResponse)
	err := c.cc.Invoke(ctx, "/statisticoproto.PerformanceService/GetTeamsMatchingStat", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PerformanceServiceServer is the server API for PerformanceService service.
type PerformanceServiceServer interface {
	GetTeamsMatchingStat(context.Context, *TeamStatPerformanceRequest) (*TeamStatResponse, error)
}

// UnimplementedPerformanceServiceServer can be embedded to have forward compatible implementations.
type UnimplementedPerformanceServiceServer struct {
}

func (*UnimplementedPerformanceServiceServer) GetTeamsMatchingStat(ctx context.Context, req *TeamStatPerformanceRequest) (*TeamStatResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTeamsMatchingStat not implemented")
}

func RegisterPerformanceServiceServer(s *grpc.Server, srv PerformanceServiceServer) {
	s.RegisterService(&_PerformanceService_serviceDesc, srv)
}

func _PerformanceService_GetTeamsMatchingStat_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TeamStatPerformanceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PerformanceServiceServer).GetTeamsMatchingStat(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statisticoproto.PerformanceService/GetTeamsMatchingStat",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PerformanceServiceServer).GetTeamsMatchingStat(ctx, req.(*TeamStatPerformanceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _PerformanceService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "statisticoproto.PerformanceService",
	HandlerType: (*PerformanceServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetTeamsMatchingStat",
			Handler:    _PerformanceService_GetTeamsMatchingStat_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "performance.proto",
}