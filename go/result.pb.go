// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.6.1
// source: result.proto

package statistico

import (
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Result struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id            uint64      `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	HomeTeam      *Team       `protobuf:"bytes,2,opt,name=home_team,json=homeTeam,proto3" json:"home_team,omitempty"`
	AwayTeam      *Team       `protobuf:"bytes,3,opt,name=away_team,json=awayTeam,proto3" json:"away_team,omitempty"`
	Season        *Season     `protobuf:"bytes,4,opt,name=season,proto3" json:"season,omitempty"`
	Round         *Round      `protobuf:"bytes,5,opt,name=round,proto3" json:"round,omitempty"`
	Venue         *Venue      `protobuf:"bytes,6,opt,name=venue,proto3" json:"venue,omitempty"`
	DateTime      *Date       `protobuf:"bytes,7,opt,name=date_time,json=dateTime,proto3" json:"date_time,omitempty"`
	Stats         *MatchStats `protobuf:"bytes,8,opt,name=stats,proto3" json:"stats,omitempty"`
	HomeTeamStats *TeamStats  `protobuf:"bytes,9,opt,name=home_team_stats,json=homeTeamStats,proto3" json:"home_team_stats,omitempty"`
	AwayTeamStats *TeamStats  `protobuf:"bytes,10,opt,name=away_team_stats,json=awayTeamStats,proto3" json:"away_team_stats,omitempty"`
}

func (x *Result) Reset() {
	*x = Result{}
	if protoimpl.UnsafeEnabled {
		mi := &file_result_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Result) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Result) ProtoMessage() {}

func (x *Result) ProtoReflect() protoreflect.Message {
	mi := &file_result_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Result.ProtoReflect.Descriptor instead.
func (*Result) Descriptor() ([]byte, []int) {
	return file_result_proto_rawDescGZIP(), []int{0}
}

func (x *Result) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Result) GetHomeTeam() *Team {
	if x != nil {
		return x.HomeTeam
	}
	return nil
}

func (x *Result) GetAwayTeam() *Team {
	if x != nil {
		return x.AwayTeam
	}
	return nil
}

func (x *Result) GetSeason() *Season {
	if x != nil {
		return x.Season
	}
	return nil
}

func (x *Result) GetRound() *Round {
	if x != nil {
		return x.Round
	}
	return nil
}

func (x *Result) GetVenue() *Venue {
	if x != nil {
		return x.Venue
	}
	return nil
}

func (x *Result) GetDateTime() *Date {
	if x != nil {
		return x.DateTime
	}
	return nil
}

func (x *Result) GetStats() *MatchStats {
	if x != nil {
		return x.Stats
	}
	return nil
}

func (x *Result) GetHomeTeamStats() *TeamStats {
	if x != nil {
		return x.HomeTeamStats
	}
	return nil
}

func (x *Result) GetAwayTeamStats() *TeamStats {
	if x != nil {
		return x.AwayTeamStats
	}
	return nil
}

type MatchStats struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pitch              *wrappers.StringValue `protobuf:"bytes,1,opt,name=pitch,proto3" json:"pitch,omitempty"`
	HomeFormation      *wrappers.StringValue `protobuf:"bytes,2,opt,name=home_formation,json=homeFormation,proto3" json:"home_formation,omitempty"`
	AwayFormation      *wrappers.StringValue `protobuf:"bytes,3,opt,name=away_formation,json=awayFormation,proto3" json:"away_formation,omitempty"`
	HomeScore          *wrappers.UInt32Value `protobuf:"bytes,4,opt,name=home_score,json=homeScore,proto3" json:"home_score,omitempty"`
	AwayScore          *wrappers.UInt32Value `protobuf:"bytes,5,opt,name=away_score,json=awayScore,proto3" json:"away_score,omitempty"`
	HomePenScore       *wrappers.UInt32Value `protobuf:"bytes,6,opt,name=home_pen_score,json=homePenScore,proto3" json:"home_pen_score,omitempty"`
	AwayPenScore       *wrappers.UInt32Value `protobuf:"bytes,7,opt,name=away_pen_score,json=awayPenScore,proto3" json:"away_pen_score,omitempty"`
	HalfTimeScore      *wrappers.StringValue `protobuf:"bytes,8,opt,name=half_time_score,json=halfTimeScore,proto3" json:"half_time_score,omitempty"`
	FullTimeScore      *wrappers.StringValue `protobuf:"bytes,9,opt,name=full_time_score,json=fullTimeScore,proto3" json:"full_time_score,omitempty"`
	ExtraTimeScore     *wrappers.StringValue `protobuf:"bytes,10,opt,name=extra_time_score,json=extraTimeScore,proto3" json:"extra_time_score,omitempty"`
	HomeLeaguePosition *wrappers.UInt32Value `protobuf:"bytes,11,opt,name=home_league_position,json=homeLeaguePosition,proto3" json:"home_league_position,omitempty"`
	AwayLeaguePosition *wrappers.UInt32Value `protobuf:"bytes,12,opt,name=away_league_position,json=awayLeaguePosition,proto3" json:"away_league_position,omitempty"`
	Minutes            *wrappers.UInt32Value `protobuf:"bytes,13,opt,name=minutes,proto3" json:"minutes,omitempty"`
	AddedTime          *wrappers.UInt32Value `protobuf:"bytes,15,opt,name=added_time,json=addedTime,proto3" json:"added_time,omitempty"`
	ExtraTime          *wrappers.UInt32Value `protobuf:"bytes,16,opt,name=extra_time,json=extraTime,proto3" json:"extra_time,omitempty"`
	InjuryTime         *wrappers.UInt32Value `protobuf:"bytes,17,opt,name=injury_time,json=injuryTime,proto3" json:"injury_time,omitempty"`
}

func (x *MatchStats) Reset() {
	*x = MatchStats{}
	if protoimpl.UnsafeEnabled {
		mi := &file_result_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MatchStats) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MatchStats) ProtoMessage() {}

func (x *MatchStats) ProtoReflect() protoreflect.Message {
	mi := &file_result_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MatchStats.ProtoReflect.Descriptor instead.
func (*MatchStats) Descriptor() ([]byte, []int) {
	return file_result_proto_rawDescGZIP(), []int{1}
}

func (x *MatchStats) GetPitch() *wrappers.StringValue {
	if x != nil {
		return x.Pitch
	}
	return nil
}

func (x *MatchStats) GetHomeFormation() *wrappers.StringValue {
	if x != nil {
		return x.HomeFormation
	}
	return nil
}

func (x *MatchStats) GetAwayFormation() *wrappers.StringValue {
	if x != nil {
		return x.AwayFormation
	}
	return nil
}

func (x *MatchStats) GetHomeScore() *wrappers.UInt32Value {
	if x != nil {
		return x.HomeScore
	}
	return nil
}

func (x *MatchStats) GetAwayScore() *wrappers.UInt32Value {
	if x != nil {
		return x.AwayScore
	}
	return nil
}

func (x *MatchStats) GetHomePenScore() *wrappers.UInt32Value {
	if x != nil {
		return x.HomePenScore
	}
	return nil
}

func (x *MatchStats) GetAwayPenScore() *wrappers.UInt32Value {
	if x != nil {
		return x.AwayPenScore
	}
	return nil
}

func (x *MatchStats) GetHalfTimeScore() *wrappers.StringValue {
	if x != nil {
		return x.HalfTimeScore
	}
	return nil
}

func (x *MatchStats) GetFullTimeScore() *wrappers.StringValue {
	if x != nil {
		return x.FullTimeScore
	}
	return nil
}

func (x *MatchStats) GetExtraTimeScore() *wrappers.StringValue {
	if x != nil {
		return x.ExtraTimeScore
	}
	return nil
}

func (x *MatchStats) GetHomeLeaguePosition() *wrappers.UInt32Value {
	if x != nil {
		return x.HomeLeaguePosition
	}
	return nil
}

func (x *MatchStats) GetAwayLeaguePosition() *wrappers.UInt32Value {
	if x != nil {
		return x.AwayLeaguePosition
	}
	return nil
}

func (x *MatchStats) GetMinutes() *wrappers.UInt32Value {
	if x != nil {
		return x.Minutes
	}
	return nil
}

func (x *MatchStats) GetAddedTime() *wrappers.UInt32Value {
	if x != nil {
		return x.AddedTime
	}
	return nil
}

func (x *MatchStats) GetExtraTime() *wrappers.UInt32Value {
	if x != nil {
		return x.ExtraTime
	}
	return nil
}

func (x *MatchStats) GetInjuryTime() *wrappers.UInt32Value {
	if x != nil {
		return x.InjuryTime
	}
	return nil
}

var File_result_proto protoreflect.FileDescriptor

var file_result_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a,
	0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x77, 0x72, 0x61, 0x70,
	0x70, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0c, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0e, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0b, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0c, 0x73, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x0a, 0x74, 0x65, 0x61, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x10, 0x74, 0x65, 0x61, 0x6d, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x0b, 0x76, 0x65, 0x6e, 0x75, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xcf,
	0x03, 0x0a, 0x06, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x2d, 0x0a, 0x09, 0x68, 0x6f, 0x6d,
	0x65, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x73,
	0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x54, 0x65, 0x61, 0x6d, 0x52, 0x08,
	0x68, 0x6f, 0x6d, 0x65, 0x54, 0x65, 0x61, 0x6d, 0x12, 0x2d, 0x0a, 0x09, 0x61, 0x77, 0x61, 0x79,
	0x5f, 0x74, 0x65, 0x61, 0x6d, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x73, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x54, 0x65, 0x61, 0x6d, 0x52, 0x08, 0x61,
	0x77, 0x61, 0x79, 0x54, 0x65, 0x61, 0x6d, 0x12, 0x2a, 0x0a, 0x06, 0x73, 0x65, 0x61, 0x73, 0x6f,
	0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x6f, 0x2e, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x52, 0x06, 0x73, 0x65, 0x61,
	0x73, 0x6f, 0x6e, 0x12, 0x27, 0x0a, 0x05, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x11, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e,
	0x52, 0x6f, 0x75, 0x6e, 0x64, 0x52, 0x05, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x12, 0x27, 0x0a, 0x05,
	0x76, 0x65, 0x6e, 0x75, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x73, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x56, 0x65, 0x6e, 0x75, 0x65, 0x52, 0x05,
	0x76, 0x65, 0x6e, 0x75, 0x65, 0x12, 0x2d, 0x0a, 0x09, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69,
	0x6d, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x44, 0x61, 0x74, 0x65, 0x52, 0x08, 0x64, 0x61, 0x74, 0x65,
	0x54, 0x69, 0x6d, 0x65, 0x12, 0x2c, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x73, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f,
	0x2e, 0x4d, 0x61, 0x74, 0x63, 0x68, 0x53, 0x74, 0x61, 0x74, 0x73, 0x52, 0x05, 0x73, 0x74, 0x61,
	0x74, 0x73, 0x12, 0x3d, 0x0a, 0x0f, 0x68, 0x6f, 0x6d, 0x65, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x5f,
	0x73, 0x74, 0x61, 0x74, 0x73, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x73, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x54, 0x65, 0x61, 0x6d, 0x53, 0x74, 0x61,
	0x74, 0x73, 0x52, 0x0d, 0x68, 0x6f, 0x6d, 0x65, 0x54, 0x65, 0x61, 0x6d, 0x53, 0x74, 0x61, 0x74,
	0x73, 0x12, 0x3d, 0x0a, 0x0f, 0x61, 0x77, 0x61, 0x79, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x5f, 0x73,
	0x74, 0x61, 0x74, 0x73, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x73, 0x74, 0x61,
	0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x54, 0x65, 0x61, 0x6d, 0x53, 0x74, 0x61, 0x74,
	0x73, 0x52, 0x0d, 0x61, 0x77, 0x61, 0x79, 0x54, 0x65, 0x61, 0x6d, 0x53, 0x74, 0x61, 0x74, 0x73,
	0x22, 0xb1, 0x08, 0x0a, 0x0a, 0x4d, 0x61, 0x74, 0x63, 0x68, 0x53, 0x74, 0x61, 0x74, 0x73, 0x12,
	0x32, 0x0a, 0x05, 0x70, 0x69, 0x74, 0x63, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x05, 0x70, 0x69,
	0x74, 0x63, 0x68, 0x12, 0x43, 0x0a, 0x0e, 0x68, 0x6f, 0x6d, 0x65, 0x5f, 0x66, 0x6f, 0x72, 0x6d,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74,
	0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0d, 0x68, 0x6f, 0x6d, 0x65, 0x46,
	0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x43, 0x0a, 0x0e, 0x61, 0x77, 0x61, 0x79,
	0x5f, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0d,
	0x61, 0x77, 0x61, 0x79, 0x46, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x3b, 0x0a,
	0x0a, 0x68, 0x6f, 0x6d, 0x65, 0x5f, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x55, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52,
	0x09, 0x68, 0x6f, 0x6d, 0x65, 0x53, 0x63, 0x6f, 0x72, 0x65, 0x12, 0x3b, 0x0a, 0x0a, 0x61, 0x77,
	0x61, 0x79, 0x5f, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x55, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x09, 0x61, 0x77,
	0x61, 0x79, 0x53, 0x63, 0x6f, 0x72, 0x65, 0x12, 0x42, 0x0a, 0x0e, 0x68, 0x6f, 0x6d, 0x65, 0x5f,
	0x70, 0x65, 0x6e, 0x5f, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x55, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0c, 0x68,
	0x6f, 0x6d, 0x65, 0x50, 0x65, 0x6e, 0x53, 0x63, 0x6f, 0x72, 0x65, 0x12, 0x42, 0x0a, 0x0e, 0x61,
	0x77, 0x61, 0x79, 0x5f, 0x70, 0x65, 0x6e, 0x5f, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x55, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75,
	0x65, 0x52, 0x0c, 0x61, 0x77, 0x61, 0x79, 0x50, 0x65, 0x6e, 0x53, 0x63, 0x6f, 0x72, 0x65, 0x12,
	0x44, 0x0a, 0x0f, 0x68, 0x61, 0x6c, 0x66, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x5f, 0x73, 0x63, 0x6f,
	0x72, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e,
	0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0d, 0x68, 0x61, 0x6c, 0x66, 0x54, 0x69, 0x6d, 0x65,
	0x53, 0x63, 0x6f, 0x72, 0x65, 0x12, 0x44, 0x0a, 0x0f, 0x66, 0x75, 0x6c, 0x6c, 0x5f, 0x74, 0x69,
	0x6d, 0x65, 0x5f, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0d, 0x66, 0x75,
	0x6c, 0x6c, 0x54, 0x69, 0x6d, 0x65, 0x53, 0x63, 0x6f, 0x72, 0x65, 0x12, 0x46, 0x0a, 0x10, 0x65,
	0x78, 0x74, 0x72, 0x61, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x5f, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x18,
	0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x52, 0x0e, 0x65, 0x78, 0x74, 0x72, 0x61, 0x54, 0x69, 0x6d, 0x65, 0x53, 0x63,
	0x6f, 0x72, 0x65, 0x12, 0x4e, 0x0a, 0x14, 0x68, 0x6f, 0x6d, 0x65, 0x5f, 0x6c, 0x65, 0x61, 0x67,
	0x75, 0x65, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0b, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x55, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52,
	0x12, 0x68, 0x6f, 0x6d, 0x65, 0x4c, 0x65, 0x61, 0x67, 0x75, 0x65, 0x50, 0x6f, 0x73, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x4e, 0x0a, 0x14, 0x61, 0x77, 0x61, 0x79, 0x5f, 0x6c, 0x65, 0x61, 0x67,
	0x75, 0x65, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0c, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x55, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52,
	0x12, 0x61, 0x77, 0x61, 0x79, 0x4c, 0x65, 0x61, 0x67, 0x75, 0x65, 0x50, 0x6f, 0x73, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x36, 0x0a, 0x07, 0x6d, 0x69, 0x6e, 0x75, 0x74, 0x65, 0x73, 0x18, 0x0d,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x55, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c,
	0x75, 0x65, 0x52, 0x07, 0x6d, 0x69, 0x6e, 0x75, 0x74, 0x65, 0x73, 0x12, 0x3b, 0x0a, 0x0a, 0x61,
	0x64, 0x64, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x55, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x09, 0x61,
	0x64, 0x64, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x3b, 0x0a, 0x0a, 0x65, 0x78, 0x74, 0x72,
	0x61, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x10, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x55,
	0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x09, 0x65, 0x78, 0x74, 0x72,
	0x61, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x3d, 0x0a, 0x0b, 0x69, 0x6e, 0x6a, 0x75, 0x72, 0x79, 0x5f,
	0x74, 0x69, 0x6d, 0x65, 0x18, 0x11, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x55, 0x49, 0x6e,
	0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0a, 0x69, 0x6e, 0x6a, 0x75, 0x72, 0x79,
	0x54, 0x69, 0x6d, 0x65, 0x32, 0xc0, 0x02, 0x0a, 0x0d, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3a, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x42, 0x79, 0x49,
	0x64, 0x12, 0x19, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x52,
	0x65, 0x73, 0x75, 0x6c, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x12, 0x2e, 0x73,
	0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74,
	0x22, 0x00, 0x12, 0x5d, 0x0a, 0x1e, 0x47, 0x65, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x69,
	0x63, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x46, 0x6f, 0x72, 0x46, 0x69, 0x78,
	0x74, 0x75, 0x72, 0x65, 0x12, 0x23, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x6f, 0x2e, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x69, 0x63, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x75,
	0x6c, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x12, 0x2e, 0x73, 0x74, 0x61, 0x74,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x22, 0x00, 0x30,
	0x01, 0x12, 0x48, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x46,
	0x6f, 0x72, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x12, 0x19, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x12, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f,
	0x2e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x22, 0x00, 0x30, 0x01, 0x12, 0x4a, 0x0a, 0x11, 0x47,
	0x65, 0x74, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x46, 0x6f, 0x72, 0x54, 0x65, 0x61, 0x6d,
	0x12, 0x1d, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x54, 0x65,
	0x61, 0x6d, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x12, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x52, 0x65, 0x73,
	0x75, 0x6c, 0x74, 0x22, 0x00, 0x30, 0x01, 0x42, 0x33, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f,
	0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_result_proto_rawDescOnce sync.Once
	file_result_proto_rawDescData = file_result_proto_rawDesc
)

func file_result_proto_rawDescGZIP() []byte {
	file_result_proto_rawDescOnce.Do(func() {
		file_result_proto_rawDescData = protoimpl.X.CompressGZIP(file_result_proto_rawDescData)
	})
	return file_result_proto_rawDescData
}

var file_result_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_result_proto_goTypes = []interface{}{
	(*Result)(nil),                  // 0: statistico.Result
	(*MatchStats)(nil),              // 1: statistico.MatchStats
	(*Team)(nil),                    // 2: statistico.Team
	(*Season)(nil),                  // 3: statistico.Season
	(*Round)(nil),                   // 4: statistico.Round
	(*Venue)(nil),                   // 5: statistico.Venue
	(*Date)(nil),                    // 6: statistico.Date
	(*TeamStats)(nil),               // 7: statistico.TeamStats
	(*wrappers.StringValue)(nil),    // 8: google.protobuf.StringValue
	(*wrappers.UInt32Value)(nil),    // 9: google.protobuf.UInt32Value
	(*ResultRequest)(nil),           // 10: statistico.ResultRequest
	(*HistoricalResultRequest)(nil), // 11: statistico.HistoricalResultRequest
	(*SeasonRequest)(nil),           // 12: statistico.SeasonRequest
	(*TeamResultRequest)(nil),       // 13: statistico.TeamResultRequest
}
var file_result_proto_depIdxs = []int32{
	2,  // 0: statistico.Result.home_team:type_name -> statistico.Team
	2,  // 1: statistico.Result.away_team:type_name -> statistico.Team
	3,  // 2: statistico.Result.season:type_name -> statistico.Season
	4,  // 3: statistico.Result.round:type_name -> statistico.Round
	5,  // 4: statistico.Result.venue:type_name -> statistico.Venue
	6,  // 5: statistico.Result.date_time:type_name -> statistico.Date
	1,  // 6: statistico.Result.stats:type_name -> statistico.MatchStats
	7,  // 7: statistico.Result.home_team_stats:type_name -> statistico.TeamStats
	7,  // 8: statistico.Result.away_team_stats:type_name -> statistico.TeamStats
	8,  // 9: statistico.MatchStats.pitch:type_name -> google.protobuf.StringValue
	8,  // 10: statistico.MatchStats.home_formation:type_name -> google.protobuf.StringValue
	8,  // 11: statistico.MatchStats.away_formation:type_name -> google.protobuf.StringValue
	9,  // 12: statistico.MatchStats.home_score:type_name -> google.protobuf.UInt32Value
	9,  // 13: statistico.MatchStats.away_score:type_name -> google.protobuf.UInt32Value
	9,  // 14: statistico.MatchStats.home_pen_score:type_name -> google.protobuf.UInt32Value
	9,  // 15: statistico.MatchStats.away_pen_score:type_name -> google.protobuf.UInt32Value
	8,  // 16: statistico.MatchStats.half_time_score:type_name -> google.protobuf.StringValue
	8,  // 17: statistico.MatchStats.full_time_score:type_name -> google.protobuf.StringValue
	8,  // 18: statistico.MatchStats.extra_time_score:type_name -> google.protobuf.StringValue
	9,  // 19: statistico.MatchStats.home_league_position:type_name -> google.protobuf.UInt32Value
	9,  // 20: statistico.MatchStats.away_league_position:type_name -> google.protobuf.UInt32Value
	9,  // 21: statistico.MatchStats.minutes:type_name -> google.protobuf.UInt32Value
	9,  // 22: statistico.MatchStats.added_time:type_name -> google.protobuf.UInt32Value
	9,  // 23: statistico.MatchStats.extra_time:type_name -> google.protobuf.UInt32Value
	9,  // 24: statistico.MatchStats.injury_time:type_name -> google.protobuf.UInt32Value
	10, // 25: statistico.ResultService.GetById:input_type -> statistico.ResultRequest
	11, // 26: statistico.ResultService.GetHistoricalResultsForFixture:input_type -> statistico.HistoricalResultRequest
	12, // 27: statistico.ResultService.GetResultsForSeason:input_type -> statistico.SeasonRequest
	13, // 28: statistico.ResultService.GetResultsForTeam:input_type -> statistico.TeamResultRequest
	0,  // 29: statistico.ResultService.GetById:output_type -> statistico.Result
	0,  // 30: statistico.ResultService.GetHistoricalResultsForFixture:output_type -> statistico.Result
	0,  // 31: statistico.ResultService.GetResultsForSeason:output_type -> statistico.Result
	0,  // 32: statistico.ResultService.GetResultsForTeam:output_type -> statistico.Result
	29, // [29:33] is the sub-list for method output_type
	25, // [25:29] is the sub-list for method input_type
	25, // [25:25] is the sub-list for extension type_name
	25, // [25:25] is the sub-list for extension extendee
	0,  // [0:25] is the sub-list for field type_name
}

func init() { file_result_proto_init() }
func file_result_proto_init() {
	if File_result_proto != nil {
		return
	}
	file_common_proto_init()
	file_requests_proto_init()
	file_round_proto_init()
	file_season_proto_init()
	file_team_proto_init()
	file_team_stats_proto_init()
	file_venue_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_result_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Result); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_result_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MatchStats); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_result_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_result_proto_goTypes,
		DependencyIndexes: file_result_proto_depIdxs,
		MessageInfos:      file_result_proto_msgTypes,
	}.Build()
	File_result_proto = out.File
	file_result_proto_rawDesc = nil
	file_result_proto_goTypes = nil
	file_result_proto_depIdxs = nil
}
