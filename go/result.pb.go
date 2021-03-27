// Code generated by protoc-gen-go. DO NOT EDIT.
// source: result.proto

package statistico

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	wrapperspb "google.golang.org/protobuf/types/known/wrapperspb"
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

type Result struct {
	Id                   uint64      `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	HomeTeam             *Team       `protobuf:"bytes,2,opt,name=home_team,json=homeTeam,proto3" json:"home_team,omitempty"`
	AwayTeam             *Team       `protobuf:"bytes,3,opt,name=away_team,json=awayTeam,proto3" json:"away_team,omitempty"`
	Season               *Season     `protobuf:"bytes,4,opt,name=season,proto3" json:"season,omitempty"`
	Round                *Round      `protobuf:"bytes,5,opt,name=round,proto3" json:"round,omitempty"`
	Venue                *Venue      `protobuf:"bytes,6,opt,name=venue,proto3" json:"venue,omitempty"`
	DateTime             *Date       `protobuf:"bytes,7,opt,name=date_time,json=dateTime,proto3" json:"date_time,omitempty"`
	Stats                *MatchStats `protobuf:"bytes,8,opt,name=stats,proto3" json:"stats,omitempty"`
	HomeTeamStats        *TeamStats  `protobuf:"bytes,9,opt,name=home_team_stats,json=homeTeamStats,proto3" json:"home_team_stats,omitempty"`
	AwayTeamStats        *TeamStats  `protobuf:"bytes,10,opt,name=away_team_stats,json=awayTeamStats,proto3" json:"away_team_stats,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *Result) Reset()         { *m = Result{} }
func (m *Result) String() string { return proto.CompactTextString(m) }
func (*Result) ProtoMessage()    {}
func (*Result) Descriptor() ([]byte, []int) {
	return fileDescriptor_4feee897733d2100, []int{0}
}

func (m *Result) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Result.Unmarshal(m, b)
}
func (m *Result) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Result.Marshal(b, m, deterministic)
}
func (m *Result) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Result.Merge(m, src)
}
func (m *Result) XXX_Size() int {
	return xxx_messageInfo_Result.Size(m)
}
func (m *Result) XXX_DiscardUnknown() {
	xxx_messageInfo_Result.DiscardUnknown(m)
}

var xxx_messageInfo_Result proto.InternalMessageInfo

func (m *Result) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Result) GetHomeTeam() *Team {
	if m != nil {
		return m.HomeTeam
	}
	return nil
}

func (m *Result) GetAwayTeam() *Team {
	if m != nil {
		return m.AwayTeam
	}
	return nil
}

func (m *Result) GetSeason() *Season {
	if m != nil {
		return m.Season
	}
	return nil
}

func (m *Result) GetRound() *Round {
	if m != nil {
		return m.Round
	}
	return nil
}

func (m *Result) GetVenue() *Venue {
	if m != nil {
		return m.Venue
	}
	return nil
}

func (m *Result) GetDateTime() *Date {
	if m != nil {
		return m.DateTime
	}
	return nil
}

func (m *Result) GetStats() *MatchStats {
	if m != nil {
		return m.Stats
	}
	return nil
}

func (m *Result) GetHomeTeamStats() *TeamStats {
	if m != nil {
		return m.HomeTeamStats
	}
	return nil
}

func (m *Result) GetAwayTeamStats() *TeamStats {
	if m != nil {
		return m.AwayTeamStats
	}
	return nil
}

type MatchStats struct {
	Pitch                *wrapperspb.StringValue `protobuf:"bytes,1,opt,name=pitch,proto3" json:"pitch,omitempty"`
	HomeFormation        *wrapperspb.StringValue `protobuf:"bytes,2,opt,name=home_formation,json=homeFormation,proto3" json:"home_formation,omitempty"`
	AwayFormation        *wrapperspb.StringValue `protobuf:"bytes,3,opt,name=away_formation,json=awayFormation,proto3" json:"away_formation,omitempty"`
	HomeScore            *wrapperspb.UInt32Value `protobuf:"bytes,4,opt,name=home_score,json=homeScore,proto3" json:"home_score,omitempty"`
	AwayScore            *wrapperspb.UInt32Value `protobuf:"bytes,5,opt,name=away_score,json=awayScore,proto3" json:"away_score,omitempty"`
	HomePenScore         *wrapperspb.UInt32Value `protobuf:"bytes,6,opt,name=home_pen_score,json=homePenScore,proto3" json:"home_pen_score,omitempty"`
	AwayPenScore         *wrapperspb.UInt32Value `protobuf:"bytes,7,opt,name=away_pen_score,json=awayPenScore,proto3" json:"away_pen_score,omitempty"`
	HalfTimeScore        *wrapperspb.StringValue `protobuf:"bytes,8,opt,name=half_time_score,json=halfTimeScore,proto3" json:"half_time_score,omitempty"`
	FullTimeScore        *wrapperspb.StringValue `protobuf:"bytes,9,opt,name=full_time_score,json=fullTimeScore,proto3" json:"full_time_score,omitempty"`
	ExtraTimeScore       *wrapperspb.StringValue `protobuf:"bytes,10,opt,name=extra_time_score,json=extraTimeScore,proto3" json:"extra_time_score,omitempty"`
	HomeLeaguePosition   *wrapperspb.UInt32Value `protobuf:"bytes,11,opt,name=home_league_position,json=homeLeaguePosition,proto3" json:"home_league_position,omitempty"`
	AwayLeaguePosition   *wrapperspb.UInt32Value `protobuf:"bytes,12,opt,name=away_league_position,json=awayLeaguePosition,proto3" json:"away_league_position,omitempty"`
	Minutes              *wrapperspb.UInt32Value `protobuf:"bytes,13,opt,name=minutes,proto3" json:"minutes,omitempty"`
	AddedTime            *wrapperspb.UInt32Value `protobuf:"bytes,15,opt,name=added_time,json=addedTime,proto3" json:"added_time,omitempty"`
	ExtraTime            *wrapperspb.UInt32Value `protobuf:"bytes,16,opt,name=extra_time,json=extraTime,proto3" json:"extra_time,omitempty"`
	InjuryTime           *wrapperspb.UInt32Value `protobuf:"bytes,17,opt,name=injury_time,json=injuryTime,proto3" json:"injury_time,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                `json:"-"`
	XXX_unrecognized     []byte                  `json:"-"`
	XXX_sizecache        int32                   `json:"-"`
}

func (m *MatchStats) Reset()         { *m = MatchStats{} }
func (m *MatchStats) String() string { return proto.CompactTextString(m) }
func (*MatchStats) ProtoMessage()    {}
func (*MatchStats) Descriptor() ([]byte, []int) {
	return fileDescriptor_4feee897733d2100, []int{1}
}

func (m *MatchStats) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MatchStats.Unmarshal(m, b)
}
func (m *MatchStats) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MatchStats.Marshal(b, m, deterministic)
}
func (m *MatchStats) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MatchStats.Merge(m, src)
}
func (m *MatchStats) XXX_Size() int {
	return xxx_messageInfo_MatchStats.Size(m)
}
func (m *MatchStats) XXX_DiscardUnknown() {
	xxx_messageInfo_MatchStats.DiscardUnknown(m)
}

var xxx_messageInfo_MatchStats proto.InternalMessageInfo

func (m *MatchStats) GetPitch() *wrapperspb.StringValue {
	if m != nil {
		return m.Pitch
	}
	return nil
}

func (m *MatchStats) GetHomeFormation() *wrapperspb.StringValue {
	if m != nil {
		return m.HomeFormation
	}
	return nil
}

func (m *MatchStats) GetAwayFormation() *wrapperspb.StringValue {
	if m != nil {
		return m.AwayFormation
	}
	return nil
}

func (m *MatchStats) GetHomeScore() *wrapperspb.UInt32Value {
	if m != nil {
		return m.HomeScore
	}
	return nil
}

func (m *MatchStats) GetAwayScore() *wrapperspb.UInt32Value {
	if m != nil {
		return m.AwayScore
	}
	return nil
}

func (m *MatchStats) GetHomePenScore() *wrapperspb.UInt32Value {
	if m != nil {
		return m.HomePenScore
	}
	return nil
}

func (m *MatchStats) GetAwayPenScore() *wrapperspb.UInt32Value {
	if m != nil {
		return m.AwayPenScore
	}
	return nil
}

func (m *MatchStats) GetHalfTimeScore() *wrapperspb.StringValue {
	if m != nil {
		return m.HalfTimeScore
	}
	return nil
}

func (m *MatchStats) GetFullTimeScore() *wrapperspb.StringValue {
	if m != nil {
		return m.FullTimeScore
	}
	return nil
}

func (m *MatchStats) GetExtraTimeScore() *wrapperspb.StringValue {
	if m != nil {
		return m.ExtraTimeScore
	}
	return nil
}

func (m *MatchStats) GetHomeLeaguePosition() *wrapperspb.UInt32Value {
	if m != nil {
		return m.HomeLeaguePosition
	}
	return nil
}

func (m *MatchStats) GetAwayLeaguePosition() *wrapperspb.UInt32Value {
	if m != nil {
		return m.AwayLeaguePosition
	}
	return nil
}

func (m *MatchStats) GetMinutes() *wrapperspb.UInt32Value {
	if m != nil {
		return m.Minutes
	}
	return nil
}

func (m *MatchStats) GetAddedTime() *wrapperspb.UInt32Value {
	if m != nil {
		return m.AddedTime
	}
	return nil
}

func (m *MatchStats) GetExtraTime() *wrapperspb.UInt32Value {
	if m != nil {
		return m.ExtraTime
	}
	return nil
}

func (m *MatchStats) GetInjuryTime() *wrapperspb.UInt32Value {
	if m != nil {
		return m.InjuryTime
	}
	return nil
}

func init() {
	proto.RegisterType((*Result)(nil), "statistico.Result")
	proto.RegisterType((*MatchStats)(nil), "statistico.MatchStats")
}

func init() { proto.RegisterFile("result.proto", fileDescriptor_4feee897733d2100) }

var fileDescriptor_4feee897733d2100 = []byte{
	// 731 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x95, 0xdb, 0x4e, 0x1b, 0x49,
	0x10, 0x86, 0xd7, 0x06, 0x1f, 0x28, 0x1b, 0x63, 0x7a, 0x0f, 0x9a, 0x45, 0xbb, 0x08, 0xb1, 0x17,
	0x8b, 0x56, 0x8b, 0x49, 0x8c, 0x94, 0x8b, 0x20, 0x6e, 0x08, 0x32, 0x10, 0x25, 0x11, 0x1a, 0x13,
	0x2e, 0x22, 0x45, 0x56, 0x33, 0x53, 0xb6, 0x3b, 0x9a, 0x99, 0x76, 0x7a, 0x7a, 0x38, 0x3c, 0x56,
	0xde, 0x20, 0x6f, 0x90, 0x57, 0x8a, 0xba, 0x7a, 0x0e, 0xc6, 0x56, 0xc8, 0xdc, 0xf5, 0xb8, 0xfe,
	0xff, 0x73, 0xf5, 0xdf, 0xa5, 0x6e, 0x68, 0x2b, 0x8c, 0x93, 0x40, 0xf7, 0x66, 0x4a, 0x6a, 0xc9,
	0x20, 0xd6, 0x5c, 0x8b, 0x58, 0x0b, 0x4f, 0x6e, 0x6d, 0x4f, 0xa4, 0x9c, 0x04, 0x78, 0x40, 0x95,
	0x9b, 0x64, 0x7c, 0x70, 0xa7, 0xf8, 0x6c, 0x86, 0x2a, 0xb6, 0xda, 0xad, 0xb6, 0x27, 0xc3, 0x50,
	0x46, 0xe9, 0x57, 0x47, 0xe1, 0xe7, 0x04, 0x63, 0x9d, 0x55, 0x5b, 0x4a, 0x26, 0x91, 0x9f, 0x49,
	0x63, 0xe4, 0x71, 0x2e, 0x05, 0x8d, 0x3c, 0x4c, 0xd7, 0x5d, 0xb3, 0x1e, 0x99, 0x7f, 0xcd, 0x8d,
	0xb7, 0x18, 0x25, 0x68, 0x3f, 0x76, 0xbf, 0xad, 0x40, 0xdd, 0xa5, 0x06, 0x59, 0x07, 0xaa, 0xc2,
	0x77, 0x2a, 0x3b, 0x95, 0xbd, 0x55, 0xb7, 0x2a, 0x7c, 0xb6, 0x0f, 0x6b, 0x53, 0x19, 0xe2, 0xc8,
	0x00, 0x9c, 0xea, 0x4e, 0x65, 0xaf, 0xd5, 0xef, 0xf6, 0x8a, 0xf6, 0x7b, 0x57, 0xc8, 0x43, 0xb7,
	0x69, 0x24, 0x66, 0x65, 0xe4, 0xfc, 0x8e, 0x3f, 0x58, 0xf9, 0xca, 0x8f, 0xe4, 0x46, 0x42, 0xf2,
	0xff, 0xa0, 0x6e, 0x7b, 0x76, 0x56, 0x49, 0xcb, 0xe6, 0xb5, 0x43, 0xaa, 0xb8, 0xa9, 0x82, 0xfd,
	0x0b, 0x35, 0xda, 0xac, 0x53, 0x23, 0xe9, 0xe6, 0xbc, 0xd4, 0x35, 0x05, 0xd7, 0xd6, 0x8d, 0x90,
	0x36, 0xe7, 0xd4, 0x97, 0x85, 0xd7, 0xa6, 0xe0, 0xda, 0xba, 0x69, 0xd6, 0xe7, 0x1a, 0x47, 0x5a,
	0x84, 0xe8, 0x34, 0x96, 0x9b, 0x3d, 0xe5, 0x1a, 0xdd, 0xa6, 0x91, 0x5c, 0x89, 0x10, 0xd9, 0xff,
	0x50, 0xa3, 0x04, 0x9d, 0x26, 0x49, 0xff, 0x98, 0x97, 0xbe, 0xe5, 0xda, 0x9b, 0x0e, 0x4d, 0xd5,
	0xb5, 0x22, 0x76, 0x0c, 0x1b, 0x79, 0x70, 0x36, 0x79, 0x67, 0x8d, 0x7c, 0xbf, 0x2f, 0xe6, 0x61,
	0x6d, 0xeb, 0x59, 0x86, 0xc3, 0xcc, 0x9e, 0x07, 0x99, 0xda, 0xe1, 0x49, 0x7b, 0x96, 0x29, 0x7d,
	0xee, 0x7e, 0x69, 0x02, 0x14, 0x3d, 0xb1, 0x3e, 0xd4, 0x66, 0x42, 0x7b, 0x53, 0x3a, 0xd8, 0x56,
	0xff, 0xaf, 0x9e, 0x1d, 0xba, 0x5e, 0x36, 0x74, 0xbd, 0xa1, 0x56, 0x22, 0x9a, 0x5c, 0xf3, 0xc0,
	0xa4, 0x43, 0x52, 0xf6, 0x0a, 0x3a, 0xb4, 0x81, 0xb1, 0x54, 0x21, 0xd7, 0x42, 0x46, 0xe9, 0xf1,
	0x3f, 0x6d, 0xa6, 0x6d, 0x0c, 0x32, 0x8b, 0x81, 0xd0, 0x36, 0x0a, 0xc8, 0x4a, 0x19, 0x88, 0xf1,
	0x14, 0x90, 0x23, 0x00, 0xea, 0x24, 0xf6, 0xa4, 0xc2, 0x74, 0x52, 0x96, 0x01, 0xef, 0x2f, 0x22,
	0x7d, 0xd8, 0xb7, 0x00, 0x9a, 0xd9, 0xa1, 0x91, 0x1b, 0x33, 0x75, 0x60, 0xcd, 0xb5, 0x32, 0x66,
	0xa3, 0xb7, 0xe6, 0x93, 0x34, 0x83, 0x19, 0x46, 0x29, 0xa0, 0x5e, 0x02, 0xd0, 0x36, 0x9e, 0x4b,
	0x8c, 0x72, 0x06, 0x35, 0x50, 0x30, 0x1a, 0x65, 0x18, 0xc6, 0x93, 0x33, 0x4e, 0x61, 0x63, 0xca,
	0x83, 0x31, 0x4d, 0x6a, 0x0a, 0x69, 0x96, 0x3a, 0x0c, 0x1e, 0x8c, 0xcd, 0xec, 0xe6, 0x94, 0x71,
	0x12, 0x04, 0xf3, 0x94, 0xb5, 0x32, 0x14, 0x63, 0x2a, 0x28, 0x03, 0xe8, 0xe2, 0xbd, 0x56, 0x7c,
	0x1e, 0x03, 0x25, 0x30, 0x1d, 0x72, 0x15, 0x9c, 0x77, 0xf0, 0x1b, 0x65, 0x1b, 0x20, 0x9f, 0x24,
	0x38, 0x9a, 0xc9, 0x58, 0xd0, 0x80, 0xb4, 0x4a, 0xa4, 0xc3, 0x8c, 0xf3, 0x0d, 0x19, 0x2f, 0x53,
	0x9f, 0xe1, 0x51, 0xce, 0x8b, 0xbc, 0x76, 0x19, 0x9e, 0x71, 0x2e, 0xf0, 0x5e, 0x40, 0x23, 0x14,
	0x51, 0xa2, 0x31, 0x76, 0xd6, 0x4b, 0x20, 0x32, 0x31, 0x0d, 0x9c, 0xef, 0xa3, 0x6f, 0xaf, 0x95,
	0x8d, 0x52, 0x03, 0x67, 0xf4, 0x74, 0xc7, 0x1c, 0x01, 0x14, 0xe1, 0x3a, 0xdd, 0x32, 0xe6, 0x3c,
	0x56, 0x76, 0x0c, 0x2d, 0x11, 0x7d, 0x4a, 0xd4, 0x83, 0x75, 0x6f, 0x96, 0x70, 0x83, 0x35, 0x18,
	0x7b, 0xff, 0x6b, 0x15, 0xd6, 0xed, 0x2b, 0x30, 0x44, 0x75, 0x2b, 0x3c, 0x64, 0x2f, 0xa1, 0x71,
	0x86, 0xfa, 0xe4, 0xe1, 0xc2, 0x67, 0x7f, 0x3e, 0xba, 0x6e, 0x49, 0xe5, 0xda, 0xa7, 0x68, 0x8b,
	0x2d, 0x97, 0x76, 0x7f, 0x61, 0x1f, 0x61, 0xfb, 0x0c, 0xf5, 0xb9, 0x88, 0xb5, 0x54, 0xc2, 0xe3,
	0x81, 0x2d, 0xc4, 0x03, 0xa9, 0x06, 0xe2, 0x5e, 0x27, 0x0a, 0xd9, 0x3f, 0xf3, 0xbe, 0x45, 0xe1,
	0x93, 0xf0, 0x67, 0x15, 0x76, 0x0e, 0xbf, 0x9e, 0xa1, 0x2e, 0xa0, 0xf6, 0xb1, 0x78, 0xdc, 0x66,
	0xfa, 0x80, 0xfc, 0x84, 0xf4, 0x1a, 0x36, 0x1f, 0x91, 0xe8, 0x61, 0xfa, 0x7b, 0xe9, 0xd1, 0x2a,
	0xd3, 0xd5, 0xc9, 0xe1, 0x87, 0xe7, 0x13, 0xa1, 0xa7, 0xc9, 0x4d, 0xcf, 0x93, 0xe1, 0x41, 0xa1,
	0x99, 0x5b, 0xee, 0xd3, 0x39, 0x1c, 0x15, 0x3f, 0xdc, 0xd4, 0xe9, 0x97, 0xc3, 0xef, 0x01, 0x00,
	0x00, 0xff, 0xff, 0xee, 0x13, 0xf1, 0x1d, 0x24, 0x08, 0x00, 0x00,
}
