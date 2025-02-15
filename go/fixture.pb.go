// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.21.12
// source: fixture.proto

package statistico

import (
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

type Fixture struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          int64        `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Competition *Competition `protobuf:"bytes,2,opt,name=competition,proto3" json:"competition,omitempty"`
	Season      *Season      `protobuf:"bytes,3,opt,name=season,proto3" json:"season,omitempty"`
	HomeTeam    *Team        `protobuf:"bytes,4,opt,name=home_team,json=homeTeam,proto3" json:"home_team,omitempty"`
	AwayTeam    *Team        `protobuf:"bytes,5,opt,name=away_team,json=awayTeam,proto3" json:"away_team,omitempty"`
	Round       *Round       `protobuf:"bytes,6,opt,name=round,proto3" json:"round,omitempty"`
	Venue       *Venue       `protobuf:"bytes,7,opt,name=venue,proto3" json:"venue,omitempty"`
	DateTime    *Date        `protobuf:"bytes,8,opt,name=date_time,json=dateTime,proto3" json:"date_time,omitempty"`
}

func (x *Fixture) Reset() {
	*x = Fixture{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fixture_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Fixture) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Fixture) ProtoMessage() {}

func (x *Fixture) ProtoReflect() protoreflect.Message {
	mi := &file_fixture_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Fixture.ProtoReflect.Descriptor instead.
func (*Fixture) Descriptor() ([]byte, []int) {
	return file_fixture_proto_rawDescGZIP(), []int{0}
}

func (x *Fixture) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Fixture) GetCompetition() *Competition {
	if x != nil {
		return x.Competition
	}
	return nil
}

func (x *Fixture) GetSeason() *Season {
	if x != nil {
		return x.Season
	}
	return nil
}

func (x *Fixture) GetHomeTeam() *Team {
	if x != nil {
		return x.HomeTeam
	}
	return nil
}

func (x *Fixture) GetAwayTeam() *Team {
	if x != nil {
		return x.AwayTeam
	}
	return nil
}

func (x *Fixture) GetRound() *Round {
	if x != nil {
		return x.Round
	}
	return nil
}

func (x *Fixture) GetVenue() *Venue {
	if x != nil {
		return x.Venue
	}
	return nil
}

func (x *Fixture) GetDateTime() *Date {
	if x != nil {
		return x.DateTime
	}
	return nil
}

var File_fixture_proto protoreflect.FileDescriptor

var file_fixture_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x66, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x0a, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x1a, 0x0c, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x63, 0x6f, 0x6d, 0x70, 0x65,
	0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0e, 0x72, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0b, 0x72, 0x6f,
	0x75, 0x6e, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0c, 0x73, 0x65, 0x61, 0x73, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0a, 0x74, 0x65, 0x61, 0x6d, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x0b, 0x76, 0x65, 0x6e, 0x75, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0xdf, 0x02, 0x0a, 0x07, 0x46, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x39, 0x0a, 0x0b,
	0x63, 0x6f, 0x6d, 0x70, 0x65, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x17, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x43,
	0x6f, 0x6d, 0x70, 0x65, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x63, 0x6f, 0x6d, 0x70,
	0x65, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2a, 0x0a, 0x06, 0x73, 0x65, 0x61, 0x73, 0x6f,
	0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x6f, 0x2e, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x52, 0x06, 0x73, 0x65, 0x61,
	0x73, 0x6f, 0x6e, 0x12, 0x2d, 0x0a, 0x09, 0x68, 0x6f, 0x6d, 0x65, 0x5f, 0x74, 0x65, 0x61, 0x6d,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x6f, 0x2e, 0x54, 0x65, 0x61, 0x6d, 0x52, 0x08, 0x68, 0x6f, 0x6d, 0x65, 0x54, 0x65,
	0x61, 0x6d, 0x12, 0x2d, 0x0a, 0x09, 0x61, 0x77, 0x61, 0x79, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69,
	0x63, 0x6f, 0x2e, 0x54, 0x65, 0x61, 0x6d, 0x52, 0x08, 0x61, 0x77, 0x61, 0x79, 0x54, 0x65, 0x61,
	0x6d, 0x12, 0x27, 0x0a, 0x05, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x11, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x52, 0x6f,
	0x75, 0x6e, 0x64, 0x52, 0x05, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x12, 0x27, 0x0a, 0x05, 0x76, 0x65,
	0x6e, 0x75, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x73, 0x74, 0x61, 0x74,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x56, 0x65, 0x6e, 0x75, 0x65, 0x52, 0x05, 0x76, 0x65,
	0x6e, 0x75, 0x65, 0x12, 0x2d, 0x0a, 0x09, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x6f, 0x2e, 0x44, 0x61, 0x74, 0x65, 0x52, 0x08, 0x64, 0x61, 0x74, 0x65, 0x54, 0x69,
	0x6d, 0x65, 0x32, 0xe8, 0x01, 0x0a, 0x0e, 0x46, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x4f, 0x0a, 0x12, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x61,
	0x73, 0x6f, 0x6e, 0x46, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x73, 0x12, 0x20, 0x2e, 0x73, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x46,
	0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e,
	0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x46, 0x69, 0x78, 0x74, 0x75,
	0x72, 0x65, 0x22, 0x00, 0x30, 0x01, 0x12, 0x40, 0x0a, 0x0b, 0x46, 0x69, 0x78, 0x74, 0x75, 0x72,
	0x65, 0x42, 0x79, 0x49, 0x44, 0x12, 0x1a, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69,
	0x63, 0x6f, 0x2e, 0x46, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x13, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x46,
	0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x22, 0x00, 0x12, 0x43, 0x0a, 0x06, 0x53, 0x65, 0x61, 0x72,
	0x63, 0x68, 0x12, 0x20, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e,
	0x46, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x6f, 0x2e, 0x46, 0x69, 0x78, 0x74, 0x75, 0x72, 0x65, 0x22, 0x00, 0x30, 0x01, 0x42, 0x33, 0x5a,
	0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x61, 0x74,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69,
	0x63, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_fixture_proto_rawDescOnce sync.Once
	file_fixture_proto_rawDescData = file_fixture_proto_rawDesc
)

func file_fixture_proto_rawDescGZIP() []byte {
	file_fixture_proto_rawDescOnce.Do(func() {
		file_fixture_proto_rawDescData = protoimpl.X.CompressGZIP(file_fixture_proto_rawDescData)
	})
	return file_fixture_proto_rawDescData
}

var file_fixture_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_fixture_proto_goTypes = []interface{}{
	(*Fixture)(nil),              // 0: statistico.Fixture
	(*Competition)(nil),          // 1: statistico.Competition
	(*Season)(nil),               // 2: statistico.Season
	(*Team)(nil),                 // 3: statistico.Team
	(*Round)(nil),                // 4: statistico.Round
	(*Venue)(nil),                // 5: statistico.Venue
	(*Date)(nil),                 // 6: statistico.Date
	(*SeasonFixtureRequest)(nil), // 7: statistico.SeasonFixtureRequest
	(*FixtureRequest)(nil),       // 8: statistico.FixtureRequest
	(*FixtureSearchRequest)(nil), // 9: statistico.FixtureSearchRequest
}
var file_fixture_proto_depIdxs = []int32{
	1,  // 0: statistico.Fixture.competition:type_name -> statistico.Competition
	2,  // 1: statistico.Fixture.season:type_name -> statistico.Season
	3,  // 2: statistico.Fixture.home_team:type_name -> statistico.Team
	3,  // 3: statistico.Fixture.away_team:type_name -> statistico.Team
	4,  // 4: statistico.Fixture.round:type_name -> statistico.Round
	5,  // 5: statistico.Fixture.venue:type_name -> statistico.Venue
	6,  // 6: statistico.Fixture.date_time:type_name -> statistico.Date
	7,  // 7: statistico.FixtureService.ListSeasonFixtures:input_type -> statistico.SeasonFixtureRequest
	8,  // 8: statistico.FixtureService.FixtureByID:input_type -> statistico.FixtureRequest
	9,  // 9: statistico.FixtureService.Search:input_type -> statistico.FixtureSearchRequest
	0,  // 10: statistico.FixtureService.ListSeasonFixtures:output_type -> statistico.Fixture
	0,  // 11: statistico.FixtureService.FixtureByID:output_type -> statistico.Fixture
	0,  // 12: statistico.FixtureService.Search:output_type -> statistico.Fixture
	10, // [10:13] is the sub-list for method output_type
	7,  // [7:10] is the sub-list for method input_type
	7,  // [7:7] is the sub-list for extension type_name
	7,  // [7:7] is the sub-list for extension extendee
	0,  // [0:7] is the sub-list for field type_name
}

func init() { file_fixture_proto_init() }
func file_fixture_proto_init() {
	if File_fixture_proto != nil {
		return
	}
	file_common_proto_init()
	file_competition_proto_init()
	file_requests_proto_init()
	file_round_proto_init()
	file_season_proto_init()
	file_team_proto_init()
	file_venue_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_fixture_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Fixture); i {
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
			RawDescriptor: file_fixture_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_fixture_proto_goTypes,
		DependencyIndexes: file_fixture_proto_depIdxs,
		MessageInfos:      file_fixture_proto_msgTypes,
	}.Build()
	File_fixture_proto = out.File
	file_fixture_proto_rawDesc = nil
	file_fixture_proto_goTypes = nil
	file_fixture_proto_depIdxs = nil
}
