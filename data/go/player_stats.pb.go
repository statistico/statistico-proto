// Code generated by protoc-gen-go. DO NOT EDIT.
// source: player_stats.proto

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

type PlayerStatsResponse struct {
	HomeTeam             []*PlayerStats `protobuf:"bytes,1,rep,name=home_team,json=homeTeam,proto3" json:"home_team,omitempty"`
	AwayTeam             []*PlayerStats `protobuf:"bytes,2,rep,name=away_team,json=awayTeam,proto3" json:"away_team,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *PlayerStatsResponse) Reset()         { *m = PlayerStatsResponse{} }
func (m *PlayerStatsResponse) String() string { return proto.CompactTextString(m) }
func (*PlayerStatsResponse) ProtoMessage()    {}
func (*PlayerStatsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a7ed79357995cae, []int{0}
}

func (m *PlayerStatsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PlayerStatsResponse.Unmarshal(m, b)
}
func (m *PlayerStatsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PlayerStatsResponse.Marshal(b, m, deterministic)
}
func (m *PlayerStatsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PlayerStatsResponse.Merge(m, src)
}
func (m *PlayerStatsResponse) XXX_Size() int {
	return xxx_messageInfo_PlayerStatsResponse.Size(m)
}
func (m *PlayerStatsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_PlayerStatsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_PlayerStatsResponse proto.InternalMessageInfo

func (m *PlayerStatsResponse) GetHomeTeam() []*PlayerStats {
	if m != nil {
		return m.HomeTeam
	}
	return nil
}

func (m *PlayerStatsResponse) GetAwayTeam() []*PlayerStats {
	if m != nil {
		return m.AwayTeam
	}
	return nil
}

type LineupResponse struct {
	HomeTeam             *Lineup  `protobuf:"bytes,1,opt,name=home_team,json=homeTeam,proto3" json:"home_team,omitempty"`
	AwayTeam             *Lineup  `protobuf:"bytes,2,opt,name=away_team,json=awayTeam,proto3" json:"away_team,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LineupResponse) Reset()         { *m = LineupResponse{} }
func (m *LineupResponse) String() string { return proto.CompactTextString(m) }
func (*LineupResponse) ProtoMessage()    {}
func (*LineupResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a7ed79357995cae, []int{1}
}

func (m *LineupResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LineupResponse.Unmarshal(m, b)
}
func (m *LineupResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LineupResponse.Marshal(b, m, deterministic)
}
func (m *LineupResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LineupResponse.Merge(m, src)
}
func (m *LineupResponse) XXX_Size() int {
	return xxx_messageInfo_LineupResponse.Size(m)
}
func (m *LineupResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_LineupResponse.DiscardUnknown(m)
}

var xxx_messageInfo_LineupResponse proto.InternalMessageInfo

func (m *LineupResponse) GetHomeTeam() *Lineup {
	if m != nil {
		return m.HomeTeam
	}
	return nil
}

func (m *LineupResponse) GetAwayTeam() *Lineup {
	if m != nil {
		return m.AwayTeam
	}
	return nil
}

type PlayerStats struct {
	PlayerId             uint64               `protobuf:"varint,1,opt,name=player_id,json=playerId,proto3" json:"player_id,omitempty"`
	ShotsTotal           *wrappers.Int32Value `protobuf:"bytes,2,opt,name=shots_total,json=shotsTotal,proto3" json:"shots_total,omitempty"`
	ShotsOnGoal          *wrappers.Int32Value `protobuf:"bytes,3,opt,name=shots_on_goal,json=shotsOnGoal,proto3" json:"shots_on_goal,omitempty"`
	GoalsScored          *wrappers.Int32Value `protobuf:"bytes,4,opt,name=goals_scored,json=goalsScored,proto3" json:"goals_scored,omitempty"`
	GoalsConceded        *wrappers.Int32Value `protobuf:"bytes,5,opt,name=goals_conceded,json=goalsConceded,proto3" json:"goals_conceded,omitempty"`
	Assists              *wrappers.Int32Value `protobuf:"bytes,6,opt,name=assists,proto3" json:"assists,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *PlayerStats) Reset()         { *m = PlayerStats{} }
func (m *PlayerStats) String() string { return proto.CompactTextString(m) }
func (*PlayerStats) ProtoMessage()    {}
func (*PlayerStats) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a7ed79357995cae, []int{2}
}

func (m *PlayerStats) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PlayerStats.Unmarshal(m, b)
}
func (m *PlayerStats) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PlayerStats.Marshal(b, m, deterministic)
}
func (m *PlayerStats) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PlayerStats.Merge(m, src)
}
func (m *PlayerStats) XXX_Size() int {
	return xxx_messageInfo_PlayerStats.Size(m)
}
func (m *PlayerStats) XXX_DiscardUnknown() {
	xxx_messageInfo_PlayerStats.DiscardUnknown(m)
}

var xxx_messageInfo_PlayerStats proto.InternalMessageInfo

func (m *PlayerStats) GetPlayerId() uint64 {
	if m != nil {
		return m.PlayerId
	}
	return 0
}

func (m *PlayerStats) GetShotsTotal() *wrappers.Int32Value {
	if m != nil {
		return m.ShotsTotal
	}
	return nil
}

func (m *PlayerStats) GetShotsOnGoal() *wrappers.Int32Value {
	if m != nil {
		return m.ShotsOnGoal
	}
	return nil
}

func (m *PlayerStats) GetGoalsScored() *wrappers.Int32Value {
	if m != nil {
		return m.GoalsScored
	}
	return nil
}

func (m *PlayerStats) GetGoalsConceded() *wrappers.Int32Value {
	if m != nil {
		return m.GoalsConceded
	}
	return nil
}

func (m *PlayerStats) GetAssists() *wrappers.Int32Value {
	if m != nil {
		return m.Assists
	}
	return nil
}

type Lineup struct {
	Start                []*LineupPlayer `protobuf:"bytes,1,rep,name=start,proto3" json:"start,omitempty"`
	Bench                []*LineupPlayer `protobuf:"bytes,2,rep,name=bench,proto3" json:"bench,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *Lineup) Reset()         { *m = Lineup{} }
func (m *Lineup) String() string { return proto.CompactTextString(m) }
func (*Lineup) ProtoMessage()    {}
func (*Lineup) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a7ed79357995cae, []int{3}
}

func (m *Lineup) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Lineup.Unmarshal(m, b)
}
func (m *Lineup) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Lineup.Marshal(b, m, deterministic)
}
func (m *Lineup) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Lineup.Merge(m, src)
}
func (m *Lineup) XXX_Size() int {
	return xxx_messageInfo_Lineup.Size(m)
}
func (m *Lineup) XXX_DiscardUnknown() {
	xxx_messageInfo_Lineup.DiscardUnknown(m)
}

var xxx_messageInfo_Lineup proto.InternalMessageInfo

func (m *Lineup) GetStart() []*LineupPlayer {
	if m != nil {
		return m.Start
	}
	return nil
}

func (m *Lineup) GetBench() []*LineupPlayer {
	if m != nil {
		return m.Bench
	}
	return nil
}

type LineupPlayer struct {
	PlayerId             uint64                `protobuf:"varint,1,opt,name=player_id,json=playerId,proto3" json:"player_id,omitempty"`
	Position             string                `protobuf:"bytes,2,opt,name=position,proto3" json:"position,omitempty"`
	FormationPosition    *wrappers.UInt32Value `protobuf:"bytes,3,opt,name=formation_position,json=formationPosition,proto3" json:"formation_position,omitempty"`
	IsSubstitute         bool                  `protobuf:"varint,4,opt,name=is_substitute,json=isSubstitute,proto3" json:"is_substitute,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *LineupPlayer) Reset()         { *m = LineupPlayer{} }
func (m *LineupPlayer) String() string { return proto.CompactTextString(m) }
func (*LineupPlayer) ProtoMessage()    {}
func (*LineupPlayer) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a7ed79357995cae, []int{4}
}

func (m *LineupPlayer) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LineupPlayer.Unmarshal(m, b)
}
func (m *LineupPlayer) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LineupPlayer.Marshal(b, m, deterministic)
}
func (m *LineupPlayer) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LineupPlayer.Merge(m, src)
}
func (m *LineupPlayer) XXX_Size() int {
	return xxx_messageInfo_LineupPlayer.Size(m)
}
func (m *LineupPlayer) XXX_DiscardUnknown() {
	xxx_messageInfo_LineupPlayer.DiscardUnknown(m)
}

var xxx_messageInfo_LineupPlayer proto.InternalMessageInfo

func (m *LineupPlayer) GetPlayerId() uint64 {
	if m != nil {
		return m.PlayerId
	}
	return 0
}

func (m *LineupPlayer) GetPosition() string {
	if m != nil {
		return m.Position
	}
	return ""
}

func (m *LineupPlayer) GetFormationPosition() *wrappers.UInt32Value {
	if m != nil {
		return m.FormationPosition
	}
	return nil
}

func (m *LineupPlayer) GetIsSubstitute() bool {
	if m != nil {
		return m.IsSubstitute
	}
	return false
}

func init() {
	proto.RegisterType((*PlayerStatsResponse)(nil), "statistico_proto_data.PlayerStatsResponse")
	proto.RegisterType((*LineupResponse)(nil), "statistico_proto_data.LineupResponse")
	proto.RegisterType((*PlayerStats)(nil), "statistico_proto_data.PlayerStats")
	proto.RegisterType((*Lineup)(nil), "statistico_proto_data.Lineup")
	proto.RegisterType((*LineupPlayer)(nil), "statistico_proto_data.LineupPlayer")
}

func init() {
	proto.RegisterFile("player_stats.proto", fileDescriptor_2a7ed79357995cae)
}

var fileDescriptor_2a7ed79357995cae = []byte{
	// 520 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x94, 0x5d, 0x6b, 0xd4, 0x4e,
	0x14, 0xc6, 0xff, 0xe9, 0xdb, 0x7f, 0xf7, 0xec, 0x0b, 0x38, 0x45, 0x08, 0x5b, 0x15, 0x49, 0x29,
	0x14, 0x2f, 0x52, 0xd8, 0xe2, 0x85, 0x45, 0x2c, 0x28, 0x74, 0x29, 0x0a, 0x96, 0x6c, 0xeb, 0x6d,
	0x98, 0x4d, 0x4e, 0x77, 0x07, 0xb2, 0x99, 0x38, 0x73, 0x62, 0xed, 0x8d, 0xd7, 0x7e, 0x03, 0x3f,
	0x8b, 0xdf, 0xc7, 0x4b, 0x3f, 0x84, 0xcc, 0x4c, 0x36, 0xa6, 0x68, 0x77, 0xd7, 0xcb, 0x9c, 0x39,
	0xbf, 0xe7, 0x3c, 0x9c, 0x67, 0x26, 0xc0, 0x8a, 0x8c, 0xdf, 0xa2, 0x8a, 0x35, 0x71, 0xd2, 0x61,
	0xa1, 0x24, 0x49, 0xf6, 0xd0, 0x7c, 0x08, 0x4d, 0x22, 0x91, 0xb1, 0xad, 0xc4, 0x29, 0x27, 0x3e,
	0x78, 0x32, 0x95, 0x72, 0x9a, 0xe1, 0x91, 0x2d, 0x4d, 0xca, 0xeb, 0xa3, 0x1b, 0xc5, 0x8b, 0x02,
	0x55, 0x85, 0x0d, 0xfa, 0x0a, 0x3f, 0x96, 0xa8, 0x17, 0x32, 0xc1, 0x37, 0x0f, 0x76, 0x2f, 0xac,
	0xfa, 0xd8, 0x88, 0x47, 0xa8, 0x0b, 0x99, 0x6b, 0x64, 0xa7, 0xd0, 0x9e, 0xc9, 0x39, 0xc6, 0x84,
	0x7c, 0xee, 0x7b, 0x4f, 0x37, 0x0f, 0x3b, 0xc3, 0x20, 0xfc, 0xeb, 0xc8, 0xb0, 0x89, 0xb7, 0x0c,
	0x74, 0x89, 0x7c, 0x6e, 0x04, 0xf8, 0x0d, 0xbf, 0x75, 0x02, 0x1b, 0xeb, 0x0b, 0x18, 0xc8, 0x08,
	0x04, 0x5f, 0x3d, 0xe8, 0xbf, 0x13, 0x39, 0x96, 0x45, 0x6d, 0xea, 0xe4, 0xae, 0x29, 0xef, 0xb0,
	0x33, 0x7c, 0x7c, 0x8f, 0x66, 0x45, 0xfe, 0xf6, 0x73, 0x72, 0xd7, 0xcf, 0x3a, 0x6c, 0x6d, 0xe5,
	0xc7, 0x06, 0x74, 0x1a, 0x26, 0xd9, 0x1e, 0xb4, 0xab, 0x44, 0x44, 0x6a, 0x7d, 0x6c, 0x45, 0x2d,
	0x57, 0x38, 0x4f, 0xd9, 0x4b, 0xe8, 0xe8, 0x99, 0x24, 0x1d, 0x93, 0x24, 0x9e, 0x55, 0xa3, 0xf6,
	0x42, 0x97, 0x4b, 0xb8, 0xc8, 0x25, 0x3c, 0xcf, 0xe9, 0x78, 0xf8, 0x81, 0x67, 0x25, 0x46, 0x60,
	0xfb, 0x2f, 0x4d, 0x3b, 0x3b, 0x85, 0x9e, 0xa3, 0x65, 0x1e, 0x4f, 0x25, 0xcf, 0xfc, 0xcd, 0xd5,
	0xbc, 0x9b, 0xf7, 0x3e, 0x1f, 0x49, 0x9e, 0xb1, 0x57, 0xd0, 0x35, 0x9c, 0x8e, 0x75, 0x22, 0x15,
	0xa6, 0xfe, 0xd6, 0x1a, 0xbc, 0x05, 0xc6, 0xb6, 0x9f, 0xbd, 0x86, 0xbe, 0xe3, 0x13, 0x99, 0x27,
	0x98, 0x62, 0xea, 0x6f, 0xaf, 0x56, 0xe8, 0x59, 0xe4, 0x4d, 0x45, 0xb0, 0xe7, 0xf0, 0x3f, 0xd7,
	0x5a, 0x68, 0xd2, 0xfe, 0xce, 0x6a, 0x78, 0xd1, 0x1b, 0x7c, 0x81, 0x1d, 0xb7, 0x7a, 0xf6, 0x02,
	0xb6, 0x35, 0x71, 0x45, 0xd5, 0xcd, 0xdb, 0x5f, 0x1a, 0x94, 0x4b, 0x26, 0x72, 0x84, 0x41, 0x27,
	0x98, 0x27, 0xb3, 0xea, 0xce, 0xad, 0x87, 0x5a, 0x22, 0xf8, 0xee, 0x41, 0xb7, 0x59, 0x5f, 0x9e,
	0xf3, 0x00, 0x5a, 0x85, 0xd4, 0x82, 0x84, 0xcc, 0x6d, 0xc8, 0xed, 0xa8, 0xfe, 0x66, 0x6f, 0x81,
	0x5d, 0x4b, 0x35, 0xe7, 0xe6, 0x23, 0xae, 0xbb, 0x5c, 0x94, 0x8f, 0xfe, 0xd8, 0xc5, 0x55, 0x63,
	0x19, 0x0f, 0x6a, 0xee, 0x62, 0x21, 0xb6, 0x0f, 0x3d, 0xa1, 0x63, 0x5d, 0x4e, 0x34, 0x09, 0x2a,
	0x09, 0x6d, 0xa4, 0xad, 0xa8, 0x2b, 0xf4, 0xb8, 0xae, 0x0d, 0x7f, 0x7a, 0xc0, 0x1a, 0x57, 0x74,
	0x8c, 0xea, 0x93, 0x48, 0x90, 0x49, 0xf0, 0x47, 0x48, 0x8d, 0x83, 0x33, 0xa9, 0xce, 0xc4, 0x67,
	0x2a, 0x15, 0xb2, 0x83, 0x7b, 0x56, 0x53, 0x9d, 0x47, 0xee, 0x47, 0x31, 0x78, 0xb6, 0xc6, 0xab,
	0xad, 0x1e, 0x68, 0xf0, 0x1f, 0x43, 0xd8, 0x1d, 0x21, 0x99, 0x2d, 0x5e, 0x15, 0xff, 0x3e, 0xeb,
	0x60, 0xf9, 0x8b, 0xac, 0xc7, 0x4c, 0x76, 0xec, 0xe1, 0xf1, 0xaf, 0x00, 0x00, 0x00, 0xff, 0xff,
	0xc1, 0x60, 0x69, 0x4c, 0x1a, 0x05, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// PlayerStatsServiceClient is the client API for PlayerStatsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type PlayerStatsServiceClient interface {
	GetPlayerStatsForFixture(ctx context.Context, in *FixtureRequest, opts ...grpc.CallOption) (*PlayerStatsResponse, error)
	GetLineUpForFixture(ctx context.Context, in *FixtureRequest, opts ...grpc.CallOption) (*LineupResponse, error)
}

type playerStatsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPlayerStatsServiceClient(cc grpc.ClientConnInterface) PlayerStatsServiceClient {
	return &playerStatsServiceClient{cc}
}

func (c *playerStatsServiceClient) GetPlayerStatsForFixture(ctx context.Context, in *FixtureRequest, opts ...grpc.CallOption) (*PlayerStatsResponse, error) {
	out := new(PlayerStatsResponse)
	err := c.cc.Invoke(ctx, "/statistico_proto_data.PlayerStatsService/GetPlayerStatsForFixture", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *playerStatsServiceClient) GetLineUpForFixture(ctx context.Context, in *FixtureRequest, opts ...grpc.CallOption) (*LineupResponse, error) {
	out := new(LineupResponse)
	err := c.cc.Invoke(ctx, "/statistico_proto_data.PlayerStatsService/GetLineUpForFixture", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PlayerStatsServiceServer is the server API for PlayerStatsService service.
type PlayerStatsServiceServer interface {
	GetPlayerStatsForFixture(context.Context, *FixtureRequest) (*PlayerStatsResponse, error)
	GetLineUpForFixture(context.Context, *FixtureRequest) (*LineupResponse, error)
}

// UnimplementedPlayerStatsServiceServer can be embedded to have forward compatible implementations.
type UnimplementedPlayerStatsServiceServer struct {
}

func (*UnimplementedPlayerStatsServiceServer) GetPlayerStatsForFixture(ctx context.Context, req *FixtureRequest) (*PlayerStatsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPlayerStatsForFixture not implemented")
}
func (*UnimplementedPlayerStatsServiceServer) GetLineUpForFixture(ctx context.Context, req *FixtureRequest) (*LineupResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLineUpForFixture not implemented")
}

func RegisterPlayerStatsServiceServer(s *grpc.Server, srv PlayerStatsServiceServer) {
	s.RegisterService(&_PlayerStatsService_serviceDesc, srv)
}

func _PlayerStatsService_GetPlayerStatsForFixture_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FixtureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlayerStatsServiceServer).GetPlayerStatsForFixture(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico_proto_data.PlayerStatsService/GetPlayerStatsForFixture",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlayerStatsServiceServer).GetPlayerStatsForFixture(ctx, req.(*FixtureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PlayerStatsService_GetLineUpForFixture_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FixtureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlayerStatsServiceServer).GetLineUpForFixture(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/statistico_proto_data.PlayerStatsService/GetLineUpForFixture",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlayerStatsServiceServer).GetLineUpForFixture(ctx, req.(*FixtureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _PlayerStatsService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "statistico_proto_data.PlayerStatsService",
	HandlerType: (*PlayerStatsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPlayerStatsForFixture",
			Handler:    _PlayerStatsService_GetPlayerStatsForFixture_Handler,
		},
		{
			MethodName: "GetLineUpForFixture",
			Handler:    _PlayerStatsService_GetLineUpForFixture_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "player_stats.proto",
}
