// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.12.4
// source: player_stats.proto

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

type TeamSeasonPlayStatsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TeamId     uint64 `protobuf:"varint,1,opt,name=team_id,json=teamId,proto3" json:"team_id,omitempty"`
	SeasonId   uint64 `protobuf:"varint,2,opt,name=season_id,json=seasonId,proto3" json:"season_id,omitempty"`
	DateBefore uint64 `protobuf:"varint,3,opt,name=date_before,json=dateBefore,proto3" json:"date_before,omitempty"`
}

func (x *TeamSeasonPlayStatsRequest) Reset() {
	*x = TeamSeasonPlayStatsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_player_stats_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TeamSeasonPlayStatsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TeamSeasonPlayStatsRequest) ProtoMessage() {}

func (x *TeamSeasonPlayStatsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_player_stats_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TeamSeasonPlayStatsRequest.ProtoReflect.Descriptor instead.
func (*TeamSeasonPlayStatsRequest) Descriptor() ([]byte, []int) {
	return file_player_stats_proto_rawDescGZIP(), []int{0}
}

func (x *TeamSeasonPlayStatsRequest) GetTeamId() uint64 {
	if x != nil {
		return x.TeamId
	}
	return 0
}

func (x *TeamSeasonPlayStatsRequest) GetSeasonId() uint64 {
	if x != nil {
		return x.SeasonId
	}
	return 0
}

func (x *TeamSeasonPlayStatsRequest) GetDateBefore() uint64 {
	if x != nil {
		return x.DateBefore
	}
	return 0
}

type PlayerStatsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	HomeTeam []*PlayerStats `protobuf:"bytes,1,rep,name=home_team,json=homeTeam,proto3" json:"home_team,omitempty"`
	AwayTeam []*PlayerStats `protobuf:"bytes,2,rep,name=away_team,json=awayTeam,proto3" json:"away_team,omitempty"`
}

func (x *PlayerStatsResponse) Reset() {
	*x = PlayerStatsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_player_stats_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlayerStatsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlayerStatsResponse) ProtoMessage() {}

func (x *PlayerStatsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_player_stats_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlayerStatsResponse.ProtoReflect.Descriptor instead.
func (*PlayerStatsResponse) Descriptor() ([]byte, []int) {
	return file_player_stats_proto_rawDescGZIP(), []int{1}
}

func (x *PlayerStatsResponse) GetHomeTeam() []*PlayerStats {
	if x != nil {
		return x.HomeTeam
	}
	return nil
}

func (x *PlayerStatsResponse) GetAwayTeam() []*PlayerStats {
	if x != nil {
		return x.AwayTeam
	}
	return nil
}

type LineupResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	HomeTeam *Lineup `protobuf:"bytes,1,opt,name=home_team,json=homeTeam,proto3" json:"home_team,omitempty"`
	AwayTeam *Lineup `protobuf:"bytes,2,opt,name=away_team,json=awayTeam,proto3" json:"away_team,omitempty"`
}

func (x *LineupResponse) Reset() {
	*x = LineupResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_player_stats_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LineupResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LineupResponse) ProtoMessage() {}

func (x *LineupResponse) ProtoReflect() protoreflect.Message {
	mi := &file_player_stats_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LineupResponse.ProtoReflect.Descriptor instead.
func (*LineupResponse) Descriptor() ([]byte, []int) {
	return file_player_stats_proto_rawDescGZIP(), []int{2}
}

func (x *LineupResponse) GetHomeTeam() *Lineup {
	if x != nil {
		return x.HomeTeam
	}
	return nil
}

func (x *LineupResponse) GetAwayTeam() *Lineup {
	if x != nil {
		return x.AwayTeam
	}
	return nil
}

type PlayerStats struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PlayerId      uint64               `protobuf:"varint,1,opt,name=player_id,json=playerId,proto3" json:"player_id,omitempty"`
	TeamId        uint64               `protobuf:"varint,2,opt,name=team_id,json=teamId,proto3" json:"team_id,omitempty"`
	FixtureId     uint64               `protobuf:"varint,3,opt,name=fixture_id,json=fixtureId,proto3" json:"fixture_id,omitempty"`
	IsSubstitute  bool                 `protobuf:"varint,4,opt,name=is_substitute,json=isSubstitute,proto3" json:"is_substitute,omitempty"`
	ShotsTotal    *wrappers.Int32Value `protobuf:"bytes,5,opt,name=shots_total,json=shotsTotal,proto3" json:"shots_total,omitempty"`
	ShotsOnGoal   *wrappers.Int32Value `protobuf:"bytes,6,opt,name=shots_on_goal,json=shotsOnGoal,proto3" json:"shots_on_goal,omitempty"`
	GoalsScored   *wrappers.Int32Value `protobuf:"bytes,7,opt,name=goals_scored,json=goalsScored,proto3" json:"goals_scored,omitempty"`
	GoalsConceded *wrappers.Int32Value `protobuf:"bytes,8,opt,name=goals_conceded,json=goalsConceded,proto3" json:"goals_conceded,omitempty"`
	Assists       *wrappers.Int32Value `protobuf:"bytes,9,opt,name=assists,proto3" json:"assists,omitempty"`
}

func (x *PlayerStats) Reset() {
	*x = PlayerStats{}
	if protoimpl.UnsafeEnabled {
		mi := &file_player_stats_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlayerStats) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlayerStats) ProtoMessage() {}

func (x *PlayerStats) ProtoReflect() protoreflect.Message {
	mi := &file_player_stats_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlayerStats.ProtoReflect.Descriptor instead.
func (*PlayerStats) Descriptor() ([]byte, []int) {
	return file_player_stats_proto_rawDescGZIP(), []int{3}
}

func (x *PlayerStats) GetPlayerId() uint64 {
	if x != nil {
		return x.PlayerId
	}
	return 0
}

func (x *PlayerStats) GetTeamId() uint64 {
	if x != nil {
		return x.TeamId
	}
	return 0
}

func (x *PlayerStats) GetFixtureId() uint64 {
	if x != nil {
		return x.FixtureId
	}
	return 0
}

func (x *PlayerStats) GetIsSubstitute() bool {
	if x != nil {
		return x.IsSubstitute
	}
	return false
}

func (x *PlayerStats) GetShotsTotal() *wrappers.Int32Value {
	if x != nil {
		return x.ShotsTotal
	}
	return nil
}

func (x *PlayerStats) GetShotsOnGoal() *wrappers.Int32Value {
	if x != nil {
		return x.ShotsOnGoal
	}
	return nil
}

func (x *PlayerStats) GetGoalsScored() *wrappers.Int32Value {
	if x != nil {
		return x.GoalsScored
	}
	return nil
}

func (x *PlayerStats) GetGoalsConceded() *wrappers.Int32Value {
	if x != nil {
		return x.GoalsConceded
	}
	return nil
}

func (x *PlayerStats) GetAssists() *wrappers.Int32Value {
	if x != nil {
		return x.Assists
	}
	return nil
}

type Lineup struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Start []*LineupPlayer `protobuf:"bytes,1,rep,name=start,proto3" json:"start,omitempty"`
	Bench []*LineupPlayer `protobuf:"bytes,2,rep,name=bench,proto3" json:"bench,omitempty"`
}

func (x *Lineup) Reset() {
	*x = Lineup{}
	if protoimpl.UnsafeEnabled {
		mi := &file_player_stats_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Lineup) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Lineup) ProtoMessage() {}

func (x *Lineup) ProtoReflect() protoreflect.Message {
	mi := &file_player_stats_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Lineup.ProtoReflect.Descriptor instead.
func (*Lineup) Descriptor() ([]byte, []int) {
	return file_player_stats_proto_rawDescGZIP(), []int{4}
}

func (x *Lineup) GetStart() []*LineupPlayer {
	if x != nil {
		return x.Start
	}
	return nil
}

func (x *Lineup) GetBench() []*LineupPlayer {
	if x != nil {
		return x.Bench
	}
	return nil
}

type LineupPlayer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PlayerId          uint64                `protobuf:"varint,1,opt,name=player_id,json=playerId,proto3" json:"player_id,omitempty"`
	Position          string                `protobuf:"bytes,2,opt,name=position,proto3" json:"position,omitempty"`
	FormationPosition *wrappers.UInt32Value `protobuf:"bytes,3,opt,name=formation_position,json=formationPosition,proto3" json:"formation_position,omitempty"`
	IsSubstitute      bool                  `protobuf:"varint,4,opt,name=is_substitute,json=isSubstitute,proto3" json:"is_substitute,omitempty"`
}

func (x *LineupPlayer) Reset() {
	*x = LineupPlayer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_player_stats_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LineupPlayer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LineupPlayer) ProtoMessage() {}

func (x *LineupPlayer) ProtoReflect() protoreflect.Message {
	mi := &file_player_stats_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LineupPlayer.ProtoReflect.Descriptor instead.
func (*LineupPlayer) Descriptor() ([]byte, []int) {
	return file_player_stats_proto_rawDescGZIP(), []int{5}
}

func (x *LineupPlayer) GetPlayerId() uint64 {
	if x != nil {
		return x.PlayerId
	}
	return 0
}

func (x *LineupPlayer) GetPosition() string {
	if x != nil {
		return x.Position
	}
	return ""
}

func (x *LineupPlayer) GetFormationPosition() *wrappers.UInt32Value {
	if x != nil {
		return x.FormationPosition
	}
	return nil
}

func (x *LineupPlayer) GetIsSubstitute() bool {
	if x != nil {
		return x.IsSubstitute
	}
	return false
}

var File_player_stats_proto protoreflect.FileDescriptor

var file_player_stats_proto_rawDesc = []byte{
	0x0a, 0x12, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f,
	0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x0e, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x73, 0x0a, 0x1a, 0x54, 0x65, 0x61, 0x6d, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x50, 0x6c,
	0x61, 0x79, 0x53, 0x74, 0x61, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17,
	0x0a, 0x07, 0x74, 0x65, 0x61, 0x6d, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52,
	0x06, 0x74, 0x65, 0x61, 0x6d, 0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x73, 0x65, 0x61, 0x73, 0x6f,
	0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x08, 0x73, 0x65, 0x61, 0x73,
	0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1f, 0x0a, 0x0b, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x62, 0x65, 0x66,
	0x6f, 0x72, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0a, 0x64, 0x61, 0x74, 0x65, 0x42,
	0x65, 0x66, 0x6f, 0x72, 0x65, 0x22, 0x81, 0x01, 0x0a, 0x13, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72,
	0x53, 0x74, 0x61, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x34, 0x0a,
	0x09, 0x68, 0x6f, 0x6d, 0x65, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x50, 0x6c,
	0x61, 0x79, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x73, 0x52, 0x08, 0x68, 0x6f, 0x6d, 0x65, 0x54,
	0x65, 0x61, 0x6d, 0x12, 0x34, 0x0a, 0x09, 0x61, 0x77, 0x61, 0x79, 0x5f, 0x74, 0x65, 0x61, 0x6d,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x6f, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x73, 0x52,
	0x08, 0x61, 0x77, 0x61, 0x79, 0x54, 0x65, 0x61, 0x6d, 0x22, 0x72, 0x0a, 0x0e, 0x4c, 0x69, 0x6e,
	0x65, 0x75, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2f, 0x0a, 0x09, 0x68,
	0x6f, 0x6d, 0x65, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12,
	0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x4c, 0x69, 0x6e, 0x65,
	0x75, 0x70, 0x52, 0x08, 0x68, 0x6f, 0x6d, 0x65, 0x54, 0x65, 0x61, 0x6d, 0x12, 0x2f, 0x0a, 0x09,
	0x61, 0x77, 0x61, 0x79, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x12, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x4c, 0x69, 0x6e,
	0x65, 0x75, 0x70, 0x52, 0x08, 0x61, 0x77, 0x61, 0x79, 0x54, 0x65, 0x61, 0x6d, 0x22, 0xc1, 0x03,
	0x0a, 0x0b, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x73, 0x12, 0x1b, 0x0a,
	0x09, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04,
	0x52, 0x08, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x74, 0x65,
	0x61, 0x6d, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x06, 0x74, 0x65, 0x61,
	0x6d, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x66, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x5f, 0x69,
	0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x09, 0x66, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65,
	0x49, 0x64, 0x12, 0x23, 0x0a, 0x0d, 0x69, 0x73, 0x5f, 0x73, 0x75, 0x62, 0x73, 0x74, 0x69, 0x74,
	0x75, 0x74, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0c, 0x69, 0x73, 0x53, 0x75, 0x62,
	0x73, 0x74, 0x69, 0x74, 0x75, 0x74, 0x65, 0x12, 0x3c, 0x0a, 0x0b, 0x73, 0x68, 0x6f, 0x74, 0x73,
	0x5f, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x49,
	0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0a, 0x73, 0x68, 0x6f, 0x74, 0x73,
	0x54, 0x6f, 0x74, 0x61, 0x6c, 0x12, 0x3f, 0x0a, 0x0d, 0x73, 0x68, 0x6f, 0x74, 0x73, 0x5f, 0x6f,
	0x6e, 0x5f, 0x67, 0x6f, 0x61, 0x6c, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x49,
	0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0b, 0x73, 0x68, 0x6f, 0x74, 0x73,
	0x4f, 0x6e, 0x47, 0x6f, 0x61, 0x6c, 0x12, 0x3e, 0x0a, 0x0c, 0x67, 0x6f, 0x61, 0x6c, 0x73, 0x5f,
	0x73, 0x63, 0x6f, 0x72, 0x65, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x49,
	0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0b, 0x67, 0x6f, 0x61, 0x6c, 0x73,
	0x53, 0x63, 0x6f, 0x72, 0x65, 0x64, 0x12, 0x42, 0x0a, 0x0e, 0x67, 0x6f, 0x61, 0x6c, 0x73, 0x5f,
	0x63, 0x6f, 0x6e, 0x63, 0x65, 0x64, 0x65, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0d, 0x67, 0x6f, 0x61,
	0x6c, 0x73, 0x43, 0x6f, 0x6e, 0x63, 0x65, 0x64, 0x65, 0x64, 0x12, 0x35, 0x0a, 0x07, 0x61, 0x73,
	0x73, 0x69, 0x73, 0x74, 0x73, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x49, 0x6e,
	0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x07, 0x61, 0x73, 0x73, 0x69, 0x73, 0x74,
	0x73, 0x22, 0x68, 0x0a, 0x06, 0x4c, 0x69, 0x6e, 0x65, 0x75, 0x70, 0x12, 0x2e, 0x0a, 0x05, 0x73,
	0x74, 0x61, 0x72, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x73, 0x74, 0x61,
	0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x4c, 0x69, 0x6e, 0x65, 0x75, 0x70, 0x50, 0x6c,
	0x61, 0x79, 0x65, 0x72, 0x52, 0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x12, 0x2e, 0x0a, 0x05, 0x62,
	0x65, 0x6e, 0x63, 0x68, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x73, 0x74, 0x61,
	0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x4c, 0x69, 0x6e, 0x65, 0x75, 0x70, 0x50, 0x6c,
	0x61, 0x79, 0x65, 0x72, 0x52, 0x05, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x22, 0xb9, 0x01, 0x0a, 0x0c,
	0x4c, 0x69, 0x6e, 0x65, 0x75, 0x70, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x12, 0x1b, 0x0a, 0x09,
	0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52,
	0x08, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x49, 0x64, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x6f, 0x73,
	0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x6f, 0x73,
	0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x4b, 0x0a, 0x12, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x55, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52,
	0x11, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x69, 0x73, 0x5f, 0x73, 0x75, 0x62, 0x73, 0x74, 0x69, 0x74,
	0x75, 0x74, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0c, 0x69, 0x73, 0x53, 0x75, 0x62,
	0x73, 0x74, 0x69, 0x74, 0x75, 0x74, 0x65, 0x32, 0xa1, 0x02, 0x0a, 0x12, 0x50, 0x6c, 0x61, 0x79,
	0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x73, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x59,
	0x0a, 0x18, 0x47, 0x65, 0x74, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x73,
	0x46, 0x6f, 0x72, 0x46, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x12, 0x1a, 0x2e, 0x73, 0x74, 0x61,
	0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x46, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x6f, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x73, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x4f, 0x0a, 0x13, 0x47, 0x65, 0x74,
	0x4c, 0x69, 0x6e, 0x65, 0x55, 0x70, 0x46, 0x6f, 0x72, 0x46, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65,
	0x12, 0x1a, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x46, 0x69,
	0x78, 0x74, 0x75, 0x72, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x73,
	0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x4c, 0x69, 0x6e, 0x65, 0x75, 0x70,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x5f, 0x0a, 0x18, 0x47, 0x65,
	0x74, 0x54, 0x65, 0x61, 0x6d, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x50, 0x6c, 0x61, 0x79, 0x65,
	0x72, 0x53, 0x74, 0x61, 0x74, 0x73, 0x12, 0x26, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x6f, 0x2e, 0x54, 0x65, 0x61, 0x6d, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x50, 0x6c,
	0x61, 0x79, 0x53, 0x74, 0x61, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17,
	0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x50, 0x6c, 0x61, 0x79,
	0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x73, 0x22, 0x00, 0x30, 0x01, 0x42, 0x33, 0x5a, 0x31, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2d,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_player_stats_proto_rawDescOnce sync.Once
	file_player_stats_proto_rawDescData = file_player_stats_proto_rawDesc
)

func file_player_stats_proto_rawDescGZIP() []byte {
	file_player_stats_proto_rawDescOnce.Do(func() {
		file_player_stats_proto_rawDescData = protoimpl.X.CompressGZIP(file_player_stats_proto_rawDescData)
	})
	return file_player_stats_proto_rawDescData
}

var file_player_stats_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_player_stats_proto_goTypes = []interface{}{
	(*TeamSeasonPlayStatsRequest)(nil), // 0: statistico.TeamSeasonPlayStatsRequest
	(*PlayerStatsResponse)(nil),        // 1: statistico.PlayerStatsResponse
	(*LineupResponse)(nil),             // 2: statistico.LineupResponse
	(*PlayerStats)(nil),                // 3: statistico.PlayerStats
	(*Lineup)(nil),                     // 4: statistico.Lineup
	(*LineupPlayer)(nil),               // 5: statistico.LineupPlayer
	(*wrappers.Int32Value)(nil),        // 6: google.protobuf.Int32Value
	(*wrappers.UInt32Value)(nil),       // 7: google.protobuf.UInt32Value
	(*FixtureRequest)(nil),             // 8: statistico.FixtureRequest
}
var file_player_stats_proto_depIdxs = []int32{
	3,  // 0: statistico.PlayerStatsResponse.home_team:type_name -> statistico.PlayerStats
	3,  // 1: statistico.PlayerStatsResponse.away_team:type_name -> statistico.PlayerStats
	4,  // 2: statistico.LineupResponse.home_team:type_name -> statistico.Lineup
	4,  // 3: statistico.LineupResponse.away_team:type_name -> statistico.Lineup
	6,  // 4: statistico.PlayerStats.shots_total:type_name -> google.protobuf.Int32Value
	6,  // 5: statistico.PlayerStats.shots_on_goal:type_name -> google.protobuf.Int32Value
	6,  // 6: statistico.PlayerStats.goals_scored:type_name -> google.protobuf.Int32Value
	6,  // 7: statistico.PlayerStats.goals_conceded:type_name -> google.protobuf.Int32Value
	6,  // 8: statistico.PlayerStats.assists:type_name -> google.protobuf.Int32Value
	5,  // 9: statistico.Lineup.start:type_name -> statistico.LineupPlayer
	5,  // 10: statistico.Lineup.bench:type_name -> statistico.LineupPlayer
	7,  // 11: statistico.LineupPlayer.formation_position:type_name -> google.protobuf.UInt32Value
	8,  // 12: statistico.PlayerStatsService.GetPlayerStatsForFixture:input_type -> statistico.FixtureRequest
	8,  // 13: statistico.PlayerStatsService.GetLineUpForFixture:input_type -> statistico.FixtureRequest
	0,  // 14: statistico.PlayerStatsService.GetTeamSeasonPlayerStats:input_type -> statistico.TeamSeasonPlayStatsRequest
	1,  // 15: statistico.PlayerStatsService.GetPlayerStatsForFixture:output_type -> statistico.PlayerStatsResponse
	2,  // 16: statistico.PlayerStatsService.GetLineUpForFixture:output_type -> statistico.LineupResponse
	3,  // 17: statistico.PlayerStatsService.GetTeamSeasonPlayerStats:output_type -> statistico.PlayerStats
	15, // [15:18] is the sub-list for method output_type
	12, // [12:15] is the sub-list for method input_type
	12, // [12:12] is the sub-list for extension type_name
	12, // [12:12] is the sub-list for extension extendee
	0,  // [0:12] is the sub-list for field type_name
}

func init() { file_player_stats_proto_init() }
func file_player_stats_proto_init() {
	if File_player_stats_proto != nil {
		return
	}
	file_requests_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_player_stats_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TeamSeasonPlayStatsRequest); i {
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
		file_player_stats_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlayerStatsResponse); i {
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
		file_player_stats_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LineupResponse); i {
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
		file_player_stats_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlayerStats); i {
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
		file_player_stats_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Lineup); i {
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
		file_player_stats_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LineupPlayer); i {
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
			RawDescriptor: file_player_stats_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_player_stats_proto_goTypes,
		DependencyIndexes: file_player_stats_proto_depIdxs,
		MessageInfos:      file_player_stats_proto_msgTypes,
	}.Build()
	File_player_stats_proto = out.File
	file_player_stats_proto_rawDesc = nil
	file_player_stats_proto_goTypes = nil
	file_player_stats_proto_depIdxs = nil
}
