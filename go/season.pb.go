// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.6.1
// source: season.proto

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

type TeamSeasonsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TeamId uint64 `protobuf:"varint,1,opt,name=team_id,json=teamId,proto3" json:"team_id,omitempty"`
	// Order the name column to return seasons in specific order
	Sort *wrappers.StringValue `protobuf:"bytes,2,opt,name=sort,proto3" json:"sort,omitempty"`
	// Boolean flag to include seasons for cup competitions in response
	IncludeCup *wrappers.BoolValue `protobuf:"bytes,3,opt,name=include_cup,json=includeCup,proto3" json:"include_cup,omitempty"`
}

func (x *TeamSeasonsRequest) Reset() {
	*x = TeamSeasonsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_season_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TeamSeasonsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TeamSeasonsRequest) ProtoMessage() {}

func (x *TeamSeasonsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_season_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TeamSeasonsRequest.ProtoReflect.Descriptor instead.
func (*TeamSeasonsRequest) Descriptor() ([]byte, []int) {
	return file_season_proto_rawDescGZIP(), []int{0}
}

func (x *TeamSeasonsRequest) GetTeamId() uint64 {
	if x != nil {
		return x.TeamId
	}
	return 0
}

func (x *TeamSeasonsRequest) GetSort() *wrappers.StringValue {
	if x != nil {
		return x.Sort
	}
	return nil
}

func (x *TeamSeasonsRequest) GetIncludeCup() *wrappers.BoolValue {
	if x != nil {
		return x.IncludeCup
	}
	return nil
}

type TeamSeasonsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Seasons []*Season `protobuf:"bytes,1,rep,name=seasons,proto3" json:"seasons,omitempty"`
}

func (x *TeamSeasonsResponse) Reset() {
	*x = TeamSeasonsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_season_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TeamSeasonsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TeamSeasonsResponse) ProtoMessage() {}

func (x *TeamSeasonsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_season_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TeamSeasonsResponse.ProtoReflect.Descriptor instead.
func (*TeamSeasonsResponse) Descriptor() ([]byte, []int) {
	return file_season_proto_rawDescGZIP(), []int{1}
}

func (x *TeamSeasonsResponse) GetSeasons() []*Season {
	if x != nil {
		return x.Seasons
	}
	return nil
}

type Season struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        uint64              `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name      string              `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	IsCurrent *wrappers.BoolValue `protobuf:"bytes,3,opt,name=is_current,json=isCurrent,proto3" json:"is_current,omitempty"`
}

func (x *Season) Reset() {
	*x = Season{}
	if protoimpl.UnsafeEnabled {
		mi := &file_season_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Season) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Season) ProtoMessage() {}

func (x *Season) ProtoReflect() protoreflect.Message {
	mi := &file_season_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Season.ProtoReflect.Descriptor instead.
func (*Season) Descriptor() ([]byte, []int) {
	return file_season_proto_rawDescGZIP(), []int{2}
}

func (x *Season) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Season) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Season) GetIsCurrent() *wrappers.BoolValue {
	if x != nil {
		return x.IsCurrent
	}
	return nil
}

var File_season_proto protoreflect.FileDescriptor

var file_season_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x73, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a,
	0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x77, 0x72, 0x61, 0x70,
	0x70, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0e, 0x72, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9c, 0x01, 0x0a, 0x12, 0x54,
	0x65, 0x61, 0x6d, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x17, 0x0a, 0x07, 0x74, 0x65, 0x61, 0x6d, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x04, 0x52, 0x06, 0x74, 0x65, 0x61, 0x6d, 0x49, 0x64, 0x12, 0x30, 0x0a, 0x04, 0x73, 0x6f,
	0x72, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e,
	0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x12, 0x3b, 0x0a, 0x0b,
	0x69, 0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x5f, 0x63, 0x75, 0x70, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x42, 0x6f, 0x6f, 0x6c, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0a, 0x69,
	0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x43, 0x75, 0x70, 0x22, 0x43, 0x0a, 0x13, 0x54, 0x65, 0x61,
	0x6d, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x2c, 0x0a, 0x07, 0x73, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x12, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x53,
	0x65, 0x61, 0x73, 0x6f, 0x6e, 0x52, 0x07, 0x73, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x73, 0x22, 0x67,
	0x0a, 0x06, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x39, 0x0a, 0x0a,
	0x69, 0x73, 0x5f, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x42, 0x6f, 0x6f, 0x6c, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x09, 0x69, 0x73,
	0x43, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x32, 0xc1, 0x01, 0x0a, 0x0d, 0x53, 0x65, 0x61, 0x73,
	0x6f, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x58, 0x0a, 0x18, 0x47, 0x65, 0x74,
	0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x73, 0x46, 0x6f, 0x72, 0x43, 0x6f, 0x6d, 0x70, 0x65, 0x74,
	0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x24, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69,
	0x63, 0x6f, 0x2e, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x43, 0x6f, 0x6d, 0x70, 0x65, 0x74, 0x69,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x12, 0x2e, 0x73, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x22,
	0x00, 0x30, 0x01, 0x12, 0x56, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e,
	0x73, 0x46, 0x6f, 0x72, 0x54, 0x65, 0x61, 0x6d, 0x12, 0x1e, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x54, 0x65, 0x61, 0x6d, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x54, 0x65, 0x61, 0x6d, 0x53, 0x65, 0x61, 0x73, 0x6f, 0x6e,
	0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x33, 0x5a, 0x31, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2d,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_season_proto_rawDescOnce sync.Once
	file_season_proto_rawDescData = file_season_proto_rawDesc
)

func file_season_proto_rawDescGZIP() []byte {
	file_season_proto_rawDescOnce.Do(func() {
		file_season_proto_rawDescData = protoimpl.X.CompressGZIP(file_season_proto_rawDescData)
	})
	return file_season_proto_rawDescData
}

var file_season_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_season_proto_goTypes = []interface{}{
	(*TeamSeasonsRequest)(nil),       // 0: statistico.TeamSeasonsRequest
	(*TeamSeasonsResponse)(nil),      // 1: statistico.TeamSeasonsResponse
	(*Season)(nil),                   // 2: statistico.Season
	(*wrappers.StringValue)(nil),     // 3: google.protobuf.StringValue
	(*wrappers.BoolValue)(nil),       // 4: google.protobuf.BoolValue
	(*SeasonCompetitionRequest)(nil), // 5: statistico.SeasonCompetitionRequest
}
var file_season_proto_depIdxs = []int32{
	3, // 0: statistico.TeamSeasonsRequest.sort:type_name -> google.protobuf.StringValue
	4, // 1: statistico.TeamSeasonsRequest.include_cup:type_name -> google.protobuf.BoolValue
	2, // 2: statistico.TeamSeasonsResponse.seasons:type_name -> statistico.Season
	4, // 3: statistico.Season.is_current:type_name -> google.protobuf.BoolValue
	5, // 4: statistico.SeasonService.GetSeasonsForCompetition:input_type -> statistico.SeasonCompetitionRequest
	0, // 5: statistico.SeasonService.GetSeasonsForTeam:input_type -> statistico.TeamSeasonsRequest
	2, // 6: statistico.SeasonService.GetSeasonsForCompetition:output_type -> statistico.Season
	1, // 7: statistico.SeasonService.GetSeasonsForTeam:output_type -> statistico.TeamSeasonsResponse
	6, // [6:8] is the sub-list for method output_type
	4, // [4:6] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_season_proto_init() }
func file_season_proto_init() {
	if File_season_proto != nil {
		return
	}
	file_requests_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_season_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TeamSeasonsRequest); i {
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
		file_season_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TeamSeasonsResponse); i {
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
		file_season_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Season); i {
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
			RawDescriptor: file_season_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_season_proto_goTypes,
		DependencyIndexes: file_season_proto_depIdxs,
		MessageInfos:      file_season_proto_msgTypes,
	}.Build()
	File_season_proto = out.File
	file_season_proto_rawDesc = nil
	file_season_proto_goTypes = nil
	file_season_proto_depIdxs = nil
}
