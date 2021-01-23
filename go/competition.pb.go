// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.24.0
// 	protoc        v3.6.1
// source: competition.proto

package statistico

import (
	proto "github.com/golang/protobuf/proto"
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

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type Competition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name      string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	IsCup     bool   `protobuf:"varint,3,opt,name=is_cup,json=isCup,proto3" json:"is_cup,omitempty"`
	CountryId uint64 `protobuf:"varint,4,opt,name=country_id,json=countryId,proto3" json:"country_id,omitempty"`
}

func (x *Competition) Reset() {
	*x = Competition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_competition_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Competition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Competition) ProtoMessage() {}

func (x *Competition) ProtoReflect() protoreflect.Message {
	mi := &file_competition_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Competition.ProtoReflect.Descriptor instead.
func (*Competition) Descriptor() ([]byte, []int) {
	return file_competition_proto_rawDescGZIP(), []int{0}
}

func (x *Competition) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Competition) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Competition) GetIsCup() bool {
	if x != nil {
		return x.IsCup
	}
	return false
}

func (x *Competition) GetCountryId() uint64 {
	if x != nil {
		return x.CountryId
	}
	return 0
}

var File_competition_proto protoreflect.FileDescriptor

var file_competition_proto_rawDesc = []byte{
	0x0a, 0x11, 0x63, 0x6f, 0x6d, 0x70, 0x65, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x1a,
	0x0e, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x67, 0x0a, 0x0b, 0x43, 0x6f, 0x6d, 0x70, 0x65, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x15, 0x0a, 0x06, 0x69, 0x73, 0x5f, 0x63, 0x75, 0x70, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x08, 0x52, 0x05, 0x69, 0x73, 0x43, 0x75, 0x70, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x72, 0x79, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x04, 0x52, 0x09, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x49, 0x64, 0x32, 0x65, 0x0a, 0x12, 0x43, 0x6f, 0x6d, 0x70,
	0x65, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x4f,
	0x0a, 0x10, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x6f, 0x6d, 0x70, 0x65, 0x74, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x12, 0x1e, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e,
	0x43, 0x6f, 0x6d, 0x70, 0x65, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x17, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e,
	0x43, 0x6f, 0x6d, 0x70, 0x65, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x00, 0x30, 0x01, 0x42,
	0x33, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_competition_proto_rawDescOnce sync.Once
	file_competition_proto_rawDescData = file_competition_proto_rawDesc
)

func file_competition_proto_rawDescGZIP() []byte {
	file_competition_proto_rawDescOnce.Do(func() {
		file_competition_proto_rawDescData = protoimpl.X.CompressGZIP(file_competition_proto_rawDescData)
	})
	return file_competition_proto_rawDescData
}

var file_competition_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_competition_proto_goTypes = []interface{}{
	(*Competition)(nil),        // 0: statistico.Competition
	(*CompetitionRequest)(nil), // 1: statistico.CompetitionRequest
}
var file_competition_proto_depIdxs = []int32{
	1, // 0: statistico.CompetitionService.ListCompetitions:input_type -> statistico.CompetitionRequest
	0, // 1: statistico.CompetitionService.ListCompetitions:output_type -> statistico.Competition
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_competition_proto_init() }
func file_competition_proto_init() {
	if File_competition_proto != nil {
		return
	}
	file_requests_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_competition_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Competition); i {
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
			RawDescriptor: file_competition_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_competition_proto_goTypes,
		DependencyIndexes: file_competition_proto_depIdxs,
		MessageInfos:      file_competition_proto_msgTypes,
	}.Build()
	File_competition_proto = out.File
	file_competition_proto_rawDesc = nil
	file_competition_proto_goTypes = nil
	file_competition_proto_depIdxs = nil
}
