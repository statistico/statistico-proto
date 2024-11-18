// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.21.12
// source: utility.proto

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

type StakingPlan struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name  StakingPlanEnum `protobuf:"varint,1,opt,name=name,proto3,enum=statistico.StakingPlanEnum" json:"name,omitempty"`
	Value float32         `protobuf:"fixed32,2,opt,name=value,proto3" json:"value,omitempty"`
}

func (x *StakingPlan) Reset() {
	*x = StakingPlan{}
	if protoimpl.UnsafeEnabled {
		mi := &file_utility_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StakingPlan) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StakingPlan) ProtoMessage() {}

func (x *StakingPlan) ProtoReflect() protoreflect.Message {
	mi := &file_utility_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StakingPlan.ProtoReflect.Descriptor instead.
func (*StakingPlan) Descriptor() ([]byte, []int) {
	return file_utility_proto_rawDescGZIP(), []int{0}
}

func (x *StakingPlan) GetName() StakingPlanEnum {
	if x != nil {
		return x.Name
	}
	return StakingPlanEnum_FLAT_RATE
}

func (x *StakingPlan) GetValue() float32 {
	if x != nil {
		return x.Value
	}
	return 0
}

var File_utility_proto protoreflect.FileDescriptor

var file_utility_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x75, 0x74, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x0a, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x1a, 0x0a, 0x65, 0x6e, 0x75,
	0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x54, 0x0a, 0x0b, 0x53, 0x74, 0x61, 0x6b, 0x69,
	0x6e, 0x67, 0x50, 0x6c, 0x61, 0x6e, 0x12, 0x2f, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x1b, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x6f, 0x2e, 0x53, 0x74, 0x61, 0x6b, 0x69, 0x6e, 0x67, 0x50, 0x6c, 0x61, 0x6e, 0x45, 0x6e, 0x75,
	0x6d, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x02, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x33, 0x5a,
	0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x61, 0x74,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69,
	0x63, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_utility_proto_rawDescOnce sync.Once
	file_utility_proto_rawDescData = file_utility_proto_rawDesc
)

func file_utility_proto_rawDescGZIP() []byte {
	file_utility_proto_rawDescOnce.Do(func() {
		file_utility_proto_rawDescData = protoimpl.X.CompressGZIP(file_utility_proto_rawDescData)
	})
	return file_utility_proto_rawDescData
}

var file_utility_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_utility_proto_goTypes = []interface{}{
	(*StakingPlan)(nil),  // 0: statistico.StakingPlan
	(StakingPlanEnum)(0), // 1: statistico.StakingPlanEnum
}
var file_utility_proto_depIdxs = []int32{
	1, // 0: statistico.StakingPlan.name:type_name -> statistico.StakingPlanEnum
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_utility_proto_init() }
func file_utility_proto_init() {
	if File_utility_proto != nil {
		return
	}
	file_enum_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_utility_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StakingPlan); i {
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
			RawDescriptor: file_utility_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_utility_proto_goTypes,
		DependencyIndexes: file_utility_proto_depIdxs,
		MessageInfos:      file_utility_proto_msgTypes,
	}.Build()
	File_utility_proto = out.File
	file_utility_proto_rawDesc = nil
	file_utility_proto_goTypes = nil
	file_utility_proto_depIdxs = nil
}
