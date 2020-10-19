// Code generated by protoc-gen-go. DO NOT EDIT.
// source: team.proto

package statistico_proto_data

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
	proto.RegisterType((*Team)(nil), "statistico_proto_data.Team")
}

func init() {
	proto.RegisterFile("team.proto", fileDescriptor_8b4e9e93d7b2c6bb)
}

var fileDescriptor_8b4e9e93d7b2c6bb = []byte{
	// 357 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x91, 0xcf, 0x6e, 0xda, 0x40,
	0x10, 0xc6, 0x6b, 0xd7, 0xe5, 0xcf, 0x20, 0xa1, 0x6a, 0xa5, 0x4a, 0xae, 0xfb, 0x47, 0x88, 0x13,
	0xbd, 0x18, 0x44, 0x2b, 0x2e, 0xbd, 0x51, 0xa4, 0xca, 0x97, 0xaa, 0x32, 0x49, 0xae, 0xce, 0xe2,
	0x1d, 0x9c, 0x95, 0xcc, 0x0e, 0xd9, 0x5d, 0x13, 0xf1, 0x78, 0x79, 0x84, 0xbc, 0x51, 0xe4, 0xb5,
	0x39, 0x25, 0x44, 0xdc, 0x3c, 0xdf, 0x7c, 0xdf, 0xfc, 0x3c, 0x3b, 0x00, 0x16, 0xf9, 0x2e, 0xde,
	0x6b, 0xb2, 0xc4, 0x3e, 0x19, 0xcb, 0xad, 0x34, 0x56, 0xe6, 0x94, 0x39, 0x25, 0x13, 0xdc, 0xf2,
	0xe8, 0x7b, 0x41, 0x54, 0x94, 0x38, 0x75, 0xd2, 0xa6, 0xda, 0x4e, 0x1f, 0x34, 0xdf, 0xef, 0x51,
	0x9b, 0x26, 0x16, 0x0d, 0x35, 0xde, 0x57, 0x68, 0x6c, 0x5b, 0x8f, 0x9f, 0x7c, 0x08, 0xae, 0x90,
	0xef, 0xd8, 0x10, 0x7c, 0x29, 0x42, 0x6f, 0xe4, 0x4d, 0x82, 0xd4, 0x97, 0x82, 0x31, 0x08, 0x14,
	0xdf, 0x61, 0xe8, 0x8f, 0xbc, 0x49, 0x3f, 0x75, 0xdf, 0xec, 0x37, 0x80, 0xb9, 0x23, 0x6d, 0xb3,
	0x9c, 0x04, 0x86, 0xef, 0x47, 0xde, 0x64, 0x30, 0xff, 0x1a, 0x37, 0xc4, 0xf8, 0x44, 0x8c, 0xd7,
	0x56, 0x4b, 0x55, 0xdc, 0xf0, 0xb2, 0xc2, 0xb4, 0xef, 0xfc, 0x7f, 0x48, 0x20, 0xfb, 0x06, 0x90,
	0x53, 0xa5, 0xac, 0x3e, 0x66, 0x52, 0x84, 0x81, 0x03, 0xf5, 0x5b, 0x25, 0x11, 0xec, 0x33, 0xf4,
	0x0e, 0xa8, 0x2a, 0xac, 0x9b, 0x1f, 0x5c, 0xb3, 0xeb, 0xea, 0x44, 0xb0, 0x15, 0x7c, 0x94, 0x26,
	0x53, 0xdc, 0x4a, 0x52, 0xbc, 0xcc, 0xea, 0x47, 0x08, 0x3b, 0x0e, 0x1e, 0xbd, 0x80, 0x2f, 0x89,
	0xca, 0x06, 0x3d, 0x94, 0xe6, 0x5f, 0x1b, 0x71, 0x0b, 0x2e, 0xa0, 0xbb, 0xa5, 0x4a, 0x09, 0x14,
	0x61, 0xf7, 0xcc, 0x9f, 0x5f, 0x27, 0xca, 0x2e, 0x7e, 0x35, 0xf1, 0x93, 0x99, 0xcd, 0x20, 0x28,
	0xa9, 0xa0, 0xb0, 0x77, 0xc1, 0xba, 0xce, 0x39, 0x7f, 0xf4, 0x60, 0x50, 0x23, 0xd7, 0xa8, 0x0f,
	0x32, 0x47, 0xf6, 0x1f, 0x06, 0x7f, 0xd1, 0xd6, 0xca, 0xf2, 0x98, 0xac, 0xd8, 0x38, 0x7e, 0xf5,
	0x74, 0x71, 0x6d, 0x48, 0x9b, 0xeb, 0x44, 0x5f, 0xde, 0xf0, 0x8c, 0xdf, 0xb1, 0x5b, 0x60, 0xed,
	0x44, 0xb3, 0x3c, 0xae, 0x91, 0x1b, 0x52, 0x89, 0x60, 0x3f, 0xce, 0x84, 0x1a, 0x83, 0x73, 0x5f,
	0x36, 0x7f, 0xe6, 0x6d, 0x3a, 0x4e, 0xfc, 0xf9, 0x1c, 0x00, 0x00, 0xff, 0xff, 0x73, 0xec, 0xe9,
	0xf3, 0x73, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// TeamServiceClient is the client API for TeamService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type TeamServiceClient interface {
	GetTeamByID(ctx context.Context, in *TeamRequest, opts ...grpc.CallOption) (*Team, error)
	GetTeamsBySeasonId(ctx context.Context, in *SeasonTeamsRequest, opts ...grpc.CallOption) (TeamService_GetTeamsBySeasonIdClient, error)
}

type teamServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTeamServiceClient(cc grpc.ClientConnInterface) TeamServiceClient {
	return &teamServiceClient{cc}
}

func (c *teamServiceClient) GetTeamByID(ctx context.Context, in *TeamRequest, opts ...grpc.CallOption) (*Team, error) {
	out := new(Team)
	err := c.cc.Invoke(ctx, "/statistico_proto_data.TeamService/GetTeamByID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *teamServiceClient) GetTeamsBySeasonId(ctx context.Context, in *SeasonTeamsRequest, opts ...grpc.CallOption) (TeamService_GetTeamsBySeasonIdClient, error) {
	stream, err := c.cc.NewStream(ctx, &_TeamService_serviceDesc.Streams[0], "/statistico_proto_data.TeamService/GetTeamsBySeasonId", opts...)
	if err != nil {
		return nil, err
	}
	x := &teamServiceGetTeamsBySeasonIdClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type TeamService_GetTeamsBySeasonIdClient interface {
	Recv() (*Team, error)
	grpc.ClientStream
}

type teamServiceGetTeamsBySeasonIdClient struct {
	grpc.ClientStream
}

func (x *teamServiceGetTeamsBySeasonIdClient) Recv() (*Team, error) {
	m := new(Team)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// TeamServiceServer is the server API for TeamService service.
type TeamServiceServer interface {
	GetTeamByID(context.Context, *TeamRequest) (*Team, error)
	GetTeamsBySeasonId(*SeasonTeamsRequest, TeamService_GetTeamsBySeasonIdServer) error
}

// UnimplementedTeamServiceServer can be embedded to have forward compatible implementations.
type UnimplementedTeamServiceServer struct {
}

func (*UnimplementedTeamServiceServer) GetTeamByID(ctx context.Context, req *TeamRequest) (*Team, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTeamByID not implemented")
}
func (*UnimplementedTeamServiceServer) GetTeamsBySeasonId(req *SeasonTeamsRequest, srv TeamService_GetTeamsBySeasonIdServer) error {
	return status.Errorf(codes.Unimplemented, "method GetTeamsBySeasonId not implemented")
}

func RegisterTeamServiceServer(s *grpc.Server, srv TeamServiceServer) {
	s.RegisterService(&_TeamService_serviceDesc, srv)
}

func _TeamService_GetTeamByID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TeamRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TeamServiceServer).GetTeamByID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico_proto_data.TeamService/GetTeamByID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TeamServiceServer).GetTeamByID(ctx, req.(*TeamRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TeamService_GetTeamsBySeasonId_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(SeasonTeamsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(TeamServiceServer).GetTeamsBySeasonId(m, &teamServiceGetTeamsBySeasonIdServer{stream})
}

type TeamService_GetTeamsBySeasonIdServer interface {
	Send(*Team) error
	grpc.ServerStream
}

type teamServiceGetTeamsBySeasonIdServer struct {
	grpc.ServerStream
}

func (x *teamServiceGetTeamsBySeasonIdServer) Send(m *Team) error {
	return x.ServerStream.SendMsg(m)
}

var _TeamService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "statistico_proto_data.TeamService",
	HandlerType: (*TeamServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetTeamByID",
			Handler:    _TeamService_GetTeamByID_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetTeamsBySeasonId",
			Handler:       _TeamService_GetTeamsBySeasonId_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "team.proto",
}
