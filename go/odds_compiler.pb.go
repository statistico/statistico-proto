// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.12.4
// source: odds_compiler.proto

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

type EventRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	EventId uint64 `protobuf:"varint,1,opt,name=event_id,json=eventId,proto3" json:"event_id,omitempty"`
	Market  string `protobuf:"bytes,2,opt,name=market,proto3" json:"market,omitempty"`
}

func (x *EventRequest) Reset() {
	*x = EventRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_odds_compiler_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EventRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EventRequest) ProtoMessage() {}

func (x *EventRequest) ProtoReflect() protoreflect.Message {
	mi := &file_odds_compiler_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EventRequest.ProtoReflect.Descriptor instead.
func (*EventRequest) Descriptor() ([]byte, []int) {
	return file_odds_compiler_proto_rawDescGZIP(), []int{0}
}

func (x *EventRequest) GetEventId() uint64 {
	if x != nil {
		return x.EventId
	}
	return 0
}

func (x *EventRequest) GetMarket() string {
	if x != nil {
		return x.Market
	}
	return ""
}

type EventMarket struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	EventId uint64  `protobuf:"varint,1,opt,name=event_id,json=eventId,proto3" json:"event_id,omitempty"`
	Market  string  `protobuf:"bytes,2,opt,name=market,proto3" json:"market,omitempty"`
	Odds    []*Odds `protobuf:"bytes,3,rep,name=odds,proto3" json:"odds,omitempty"`
}

func (x *EventMarket) Reset() {
	*x = EventMarket{}
	if protoimpl.UnsafeEnabled {
		mi := &file_odds_compiler_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EventMarket) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EventMarket) ProtoMessage() {}

func (x *EventMarket) ProtoReflect() protoreflect.Message {
	mi := &file_odds_compiler_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EventMarket.ProtoReflect.Descriptor instead.
func (*EventMarket) Descriptor() ([]byte, []int) {
	return file_odds_compiler_proto_rawDescGZIP(), []int{1}
}

func (x *EventMarket) GetEventId() uint64 {
	if x != nil {
		return x.EventId
	}
	return 0
}

func (x *EventMarket) GetMarket() string {
	if x != nil {
		return x.Market
	}
	return ""
}

func (x *EventMarket) GetOdds() []*Odds {
	if x != nil {
		return x.Odds
	}
	return nil
}

var File_odds_compiler_proto protoreflect.FileDescriptor

var file_odds_compiler_proto_rawDesc = []byte{
	0x0a, 0x13, 0x6f, 0x64, 0x64, 0x73, 0x5f, 0x63, 0x6f, 0x6d, 0x70, 0x69, 0x6c, 0x65, 0x72, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x6f, 0x1a, 0x0c, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x41, 0x0a, 0x0c, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x19, 0x0a, 0x08, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x04, 0x52, 0x07, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x6d, 0x61,
	0x72, 0x6b, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6d, 0x61, 0x72, 0x6b,
	0x65, 0x74, 0x22, 0x66, 0x0a, 0x0b, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x4d, 0x61, 0x72, 0x6b, 0x65,
	0x74, 0x12, 0x19, 0x0a, 0x08, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x04, 0x52, 0x07, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x16, 0x0a, 0x06,
	0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6d, 0x61,
	0x72, 0x6b, 0x65, 0x74, 0x12, 0x24, 0x0a, 0x04, 0x6f, 0x64, 0x64, 0x73, 0x18, 0x03, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x10, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e,
	0x4f, 0x64, 0x64, 0x73, 0x52, 0x04, 0x6f, 0x64, 0x64, 0x73, 0x32, 0x5c, 0x0a, 0x13, 0x4f, 0x64,
	0x64, 0x73, 0x43, 0x6f, 0x6d, 0x70, 0x69, 0x6c, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x12, 0x45, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x4d, 0x61, 0x72,
	0x6b, 0x65, 0x74, 0x12, 0x18, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f,
	0x2e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e,
	0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x45, 0x76, 0x65, 0x6e, 0x74,
	0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x22, 0x00, 0x42, 0x33, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2d, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_odds_compiler_proto_rawDescOnce sync.Once
	file_odds_compiler_proto_rawDescData = file_odds_compiler_proto_rawDesc
)

func file_odds_compiler_proto_rawDescGZIP() []byte {
	file_odds_compiler_proto_rawDescOnce.Do(func() {
		file_odds_compiler_proto_rawDescData = protoimpl.X.CompressGZIP(file_odds_compiler_proto_rawDescData)
	})
	return file_odds_compiler_proto_rawDescData
}

var file_odds_compiler_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_odds_compiler_proto_goTypes = []interface{}{
	(*EventRequest)(nil), // 0: statistico.EventRequest
	(*EventMarket)(nil),  // 1: statistico.EventMarket
	(*Odds)(nil),         // 2: statistico.Odds
}
var file_odds_compiler_proto_depIdxs = []int32{
	2, // 0: statistico.EventMarket.odds:type_name -> statistico.Odds
	0, // 1: statistico.OddsCompilerService.GetEventMarket:input_type -> statistico.EventRequest
	1, // 2: statistico.OddsCompilerService.GetEventMarket:output_type -> statistico.EventMarket
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_odds_compiler_proto_init() }
func file_odds_compiler_proto_init() {
	if File_odds_compiler_proto != nil {
		return
	}
	file_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_odds_compiler_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EventRequest); i {
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
		file_odds_compiler_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EventMarket); i {
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
			RawDescriptor: file_odds_compiler_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_odds_compiler_proto_goTypes,
		DependencyIndexes: file_odds_compiler_proto_depIdxs,
		MessageInfos:      file_odds_compiler_proto_msgTypes,
	}.Build()
	File_odds_compiler_proto = out.File
	file_odds_compiler_proto_rawDesc = nil
	file_odds_compiler_proto_goTypes = nil
	file_odds_compiler_proto_depIdxs = nil
}
