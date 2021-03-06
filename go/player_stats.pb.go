// Code generated by protoc-gen-go. DO NOT EDIT.
// source: player_stats.proto

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
	proto.RegisterType((*PlayerStatsResponse)(nil), "statistico.PlayerStatsResponse")
	proto.RegisterType((*LineupResponse)(nil), "statistico.LineupResponse")
	proto.RegisterType((*PlayerStats)(nil), "statistico.PlayerStats")
	proto.RegisterType((*Lineup)(nil), "statistico.Lineup")
	proto.RegisterType((*LineupPlayer)(nil), "statistico.LineupPlayer")
}

func init() { proto.RegisterFile("player_stats.proto", fileDescriptor_2a7ed79357995cae) }

var fileDescriptor_2a7ed79357995cae = []byte{
	// 526 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x93, 0xcf, 0x6e, 0xd3, 0x40,
	0x10, 0xc6, 0x49, 0xff, 0x84, 0x64, 0xf2, 0x47, 0x62, 0x7b, 0xc0, 0x72, 0x11, 0xa0, 0x70, 0xe9,
	0x05, 0x47, 0x24, 0x70, 0x02, 0x81, 0x54, 0xa4, 0x46, 0x15, 0x48, 0xad, 0x9c, 0x16, 0x09, 0x2e,
	0xd6, 0xc6, 0x99, 0x26, 0x2b, 0xd9, 0x5e, 0xb3, 0x3b, 0xa6, 0xf4, 0xc8, 0x63, 0x71, 0xe3, 0x61,
	0x78, 0x10, 0xb4, 0xbb, 0x8e, 0xe3, 0xaa, 0xb4, 0xe9, 0x2d, 0x3b, 0xfe, 0x7e, 0xdf, 0x97, 0x9d,
	0xd9, 0x01, 0x96, 0x27, 0xfc, 0x0a, 0x55, 0xa4, 0x89, 0x93, 0x0e, 0x72, 0x25, 0x49, 0x32, 0x30,
	0x07, 0xa1, 0x49, 0xc4, 0xd2, 0x7f, 0xba, 0x90, 0x72, 0x91, 0xe0, 0xd0, 0x7e, 0x99, 0x15, 0x17,
	0xc3, 0x4b, 0xc5, 0xf3, 0x1c, 0x55, 0xa9, 0xf5, 0xfb, 0x0a, 0xbf, 0x17, 0xa8, 0x57, 0xec, 0xe0,
	0x57, 0x03, 0xf6, 0x4e, 0xad, 0xe5, 0xd4, 0x38, 0x86, 0xa8, 0x73, 0x99, 0x69, 0x64, 0xaf, 0xa1,
	0xbd, 0x94, 0x29, 0x46, 0x84, 0x3c, 0xf5, 0x1a, 0xcf, 0xb7, 0x0f, 0x3a, 0xa3, 0xc7, 0xc1, 0x3a,
	0x27, 0xa8, 0x33, 0x2d, 0xa3, 0x3c, 0x43, 0x9e, 0x1a, 0x8a, 0x5f, 0xf2, 0x2b, 0x47, 0x6d, 0x6d,
	0xa0, 0x8c, 0xd2, 0x50, 0x03, 0x05, 0xfd, 0xcf, 0x22, 0xc3, 0x22, 0xaf, 0xd2, 0x87, 0xd7, 0xd3,
	0x1b, 0x07, 0x9d, 0x11, 0xab, 0xfb, 0x94, 0xf2, 0x75, 0xf0, 0xf0, 0x7a, 0xf0, 0xad, 0x40, 0x95,
	0xf9, 0x77, 0x0b, 0x3a, 0xb5, 0x7f, 0xc3, 0xf6, 0xa1, 0x5d, 0x76, 0x56, 0xcc, 0x6d, 0xe2, 0x4e,
	0xd8, 0x72, 0x85, 0xe3, 0x39, 0x7b, 0x07, 0x1d, 0xbd, 0x94, 0xa4, 0x23, 0x92, 0xc4, 0x93, 0xd2,
	0x7f, 0x3f, 0x70, 0xad, 0x0e, 0x56, 0xad, 0x0e, 0x8e, 0x33, 0x1a, 0x8f, 0xbe, 0xf0, 0xa4, 0xc0,
	0x10, 0xac, 0xfe, 0xcc, 0xc8, 0xd9, 0x07, 0xe8, 0x39, 0x5a, 0x66, 0xd1, 0x42, 0xf2, 0xc4, 0xdb,
	0xde, 0xcc, 0xbb, 0xbc, 0x93, 0x6c, 0x22, 0x79, 0xc2, 0xde, 0x43, 0xd7, 0x70, 0x3a, 0xd2, 0xb1,
	0x54, 0x38, 0xf7, 0x76, 0xee, 0xc1, 0x5b, 0x60, 0x6a, 0xf5, 0xec, 0x10, 0xfa, 0x8e, 0x8f, 0x65,
	0x16, 0xe3, 0x1c, 0xe7, 0xde, 0xee, 0x66, 0x87, 0x9e, 0x45, 0x3e, 0x96, 0x04, 0x7b, 0x03, 0x0f,
	0xb9, 0xd6, 0x42, 0x93, 0xf6, 0x9a, 0x9b, 0xe1, 0x95, 0x76, 0xb0, 0x84, 0xa6, 0x6b, 0x3d, 0x0b,
	0x60, 0x57, 0x13, 0x57, 0x54, 0x3e, 0x26, 0xef, 0xe6, 0x74, 0xdc, 0x38, 0x42, 0x27, 0x33, 0xfa,
	0x19, 0x66, 0xf1, 0xb2, 0x7c, 0x46, 0x77, 0xe8, 0xad, 0x6c, 0xf0, 0xbb, 0x01, 0xdd, 0x7a, 0xfd,
	0xee, 0x89, 0xfa, 0xd0, 0xca, 0xa5, 0x16, 0x24, 0x64, 0x66, 0xc7, 0xd9, 0x0e, 0xab, 0x33, 0xfb,
	0x04, 0xec, 0x42, 0xaa, 0x94, 0x9b, 0x43, 0x54, 0xa9, 0xdc, 0xd0, 0x9e, 0xdc, 0xb8, 0xf5, 0x79,
	0xed, 0xda, 0x8f, 0x2a, 0xee, 0x74, 0x65, 0xf6, 0x02, 0x7a, 0x42, 0x47, 0xba, 0x98, 0x69, 0x12,
	0x54, 0x10, 0xda, 0xe1, 0xb5, 0xc2, 0xae, 0xd0, 0xd3, 0xaa, 0x36, 0xfa, 0xd3, 0x00, 0x56, 0x7b,
	0x8c, 0x53, 0x54, 0x3f, 0x44, 0x8c, 0xec, 0x2b, 0x78, 0x13, 0xa4, 0xda, 0x87, 0x23, 0xa9, 0x8e,
	0xc4, 0x4f, 0x2a, 0x14, 0x32, 0xbf, 0xde, 0x8f, 0xb2, 0x18, 0xba, 0xd5, 0xf6, 0x9f, 0xdd, 0xb6,
	0x72, 0xe5, 0x7a, 0x0d, 0x1e, 0xb0, 0x13, 0xd8, 0x9b, 0x20, 0x99, 0x7e, 0x9d, 0xe7, 0xf7, 0x74,
	0xf5, 0xff, 0xb3, 0x4f, 0x95, 0xe1, 0xe1, 0xf8, 0xdb, 0xab, 0x85, 0xa0, 0x65, 0x31, 0x0b, 0x62,
	0x99, 0x0e, 0xd7, 0xca, 0xda, 0xcf, 0x97, 0xb6, 0x67, 0x6f, 0xd7, 0x85, 0x59, 0xd3, 0x56, 0xc6,
	0xff, 0x02, 0x00, 0x00, 0xff, 0xff, 0x64, 0xed, 0xfa, 0x18, 0xd5, 0x04, 0x00, 0x00,
}
