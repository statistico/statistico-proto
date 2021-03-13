// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.24.0
// 	protoc        v3.6.1
// source: enum.proto

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

type ActionEnum int32

const (
	ActionEnum_FOR     ActionEnum = 0
	ActionEnum_AGAINST ActionEnum = 1
)

// Enum value maps for ActionEnum.
var (
	ActionEnum_name = map[int32]string{
		0: "FOR",
		1: "AGAINST",
	}
	ActionEnum_value = map[string]int32{
		"FOR":     0,
		"AGAINST": 1,
	}
)

func (x ActionEnum) Enum() *ActionEnum {
	p := new(ActionEnum)
	*p = x
	return p
}

func (x ActionEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ActionEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_enum_proto_enumTypes[0].Descriptor()
}

func (ActionEnum) Type() protoreflect.EnumType {
	return &file_enum_proto_enumTypes[0]
}

func (x ActionEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ActionEnum.Descriptor instead.
func (ActionEnum) EnumDescriptor() ([]byte, []int) {
	return file_enum_proto_rawDescGZIP(), []int{0}
}

type LineEnum int32

const (
	LineEnum_CLOSING LineEnum = 0
	LineEnum_MAX     LineEnum = 1
)

// Enum value maps for LineEnum.
var (
	LineEnum_name = map[int32]string{
		0: "CLOSING",
		1: "MAX",
	}
	LineEnum_value = map[string]int32{
		"CLOSING": 0,
		"MAX":     1,
	}
)

func (x LineEnum) Enum() *LineEnum {
	p := new(LineEnum)
	*p = x
	return p
}

func (x LineEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (LineEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_enum_proto_enumTypes[1].Descriptor()
}

func (LineEnum) Type() protoreflect.EnumType {
	return &file_enum_proto_enumTypes[1]
}

func (x LineEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use LineEnum.Descriptor instead.
func (LineEnum) EnumDescriptor() ([]byte, []int) {
	return file_enum_proto_rawDescGZIP(), []int{1}
}

type MeasureEnum int32

const (
	MeasureEnum_TOTAL MeasureEnum = 0
	MeasureEnum_AVG   MeasureEnum = 1
)

// Enum value maps for MeasureEnum.
var (
	MeasureEnum_name = map[int32]string{
		0: "TOTAL",
		1: "AVG",
	}
	MeasureEnum_value = map[string]int32{
		"TOTAL": 0,
		"AVG":   1,
	}
)

func (x MeasureEnum) Enum() *MeasureEnum {
	p := new(MeasureEnum)
	*p = x
	return p
}

func (x MeasureEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (MeasureEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_enum_proto_enumTypes[2].Descriptor()
}

func (MeasureEnum) Type() protoreflect.EnumType {
	return &file_enum_proto_enumTypes[2]
}

func (x MeasureEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use MeasureEnum.Descriptor instead.
func (MeasureEnum) EnumDescriptor() ([]byte, []int) {
	return file_enum_proto_rawDescGZIP(), []int{2}
}

type MetricEnum int32

const (
	MetricEnum_GTE MetricEnum = 0
	MetricEnum_LTE MetricEnum = 1
)

// Enum value maps for MetricEnum.
var (
	MetricEnum_name = map[int32]string{
		0: "GTE",
		1: "LTE",
	}
	MetricEnum_value = map[string]int32{
		"GTE": 0,
		"LTE": 1,
	}
)

func (x MetricEnum) Enum() *MetricEnum {
	p := new(MetricEnum)
	*p = x
	return p
}

func (x MetricEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (MetricEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_enum_proto_enumTypes[3].Descriptor()
}

func (MetricEnum) Type() protoreflect.EnumType {
	return &file_enum_proto_enumTypes[3]
}

func (x MetricEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use MetricEnum.Descriptor instead.
func (MetricEnum) EnumDescriptor() ([]byte, []int) {
	return file_enum_proto_rawDescGZIP(), []int{3}
}

type ResultEnum int32

const (
	ResultEnum_WIN       ResultEnum = 0
	ResultEnum_LOSE      ResultEnum = 1
	ResultEnum_DRAW      ResultEnum = 2
	ResultEnum_WIN_DRAW  ResultEnum = 3
	ResultEnum_LOSE_DRAW ResultEnum = 4
)

// Enum value maps for ResultEnum.
var (
	ResultEnum_name = map[int32]string{
		0: "WIN",
		1: "LOSE",
		2: "DRAW",
		3: "WIN_DRAW",
		4: "LOSE_DRAW",
	}
	ResultEnum_value = map[string]int32{
		"WIN":       0,
		"LOSE":      1,
		"DRAW":      2,
		"WIN_DRAW":  3,
		"LOSE_DRAW": 4,
	}
)

func (x ResultEnum) Enum() *ResultEnum {
	p := new(ResultEnum)
	*p = x
	return p
}

func (x ResultEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ResultEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_enum_proto_enumTypes[4].Descriptor()
}

func (ResultEnum) Type() protoreflect.EnumType {
	return &file_enum_proto_enumTypes[4]
}

func (x ResultEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ResultEnum.Descriptor instead.
func (ResultEnum) EnumDescriptor() ([]byte, []int) {
	return file_enum_proto_rawDescGZIP(), []int{4}
}

type SideEnum int32

const (
	SideEnum_BACK SideEnum = 0
	SideEnum_LAY  SideEnum = 1
)

// Enum value maps for SideEnum.
var (
	SideEnum_name = map[int32]string{
		0: "BACK",
		1: "LAY",
	}
	SideEnum_value = map[string]int32{
		"BACK": 0,
		"LAY":  1,
	}
)

func (x SideEnum) Enum() *SideEnum {
	p := new(SideEnum)
	*p = x
	return p
}

func (x SideEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SideEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_enum_proto_enumTypes[5].Descriptor()
}

func (SideEnum) Type() protoreflect.EnumType {
	return &file_enum_proto_enumTypes[5]
}

func (x SideEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SideEnum.Descriptor instead.
func (SideEnum) EnumDescriptor() ([]byte, []int) {
	return file_enum_proto_rawDescGZIP(), []int{5}
}

type StatEnum int32

const (
	StatEnum_GOALS         StatEnum = 0
	StatEnum_SHOTS_ON_GOAL StatEnum = 1
	StatEnum_XG            StatEnum = 2
)

// Enum value maps for StatEnum.
var (
	StatEnum_name = map[int32]string{
		0: "GOALS",
		1: "SHOTS_ON_GOAL",
		2: "XG",
	}
	StatEnum_value = map[string]int32{
		"GOALS":         0,
		"SHOTS_ON_GOAL": 1,
		"XG":            2,
	}
)

func (x StatEnum) Enum() *StatEnum {
	p := new(StatEnum)
	*p = x
	return p
}

func (x StatEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (StatEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_enum_proto_enumTypes[6].Descriptor()
}

func (StatEnum) Type() protoreflect.EnumType {
	return &file_enum_proto_enumTypes[6]
}

func (x StatEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use StatEnum.Descriptor instead.
func (StatEnum) EnumDescriptor() ([]byte, []int) {
	return file_enum_proto_rawDescGZIP(), []int{6}
}

type TeamEnum int32

const (
	TeamEnum_HOME_TEAM TeamEnum = 0
	TeamEnum_AWAY_TEAM TeamEnum = 1
)

// Enum value maps for TeamEnum.
var (
	TeamEnum_name = map[int32]string{
		0: "HOME_TEAM",
		1: "AWAY_TEAM",
	}
	TeamEnum_value = map[string]int32{
		"HOME_TEAM": 0,
		"AWAY_TEAM": 1,
	}
)

func (x TeamEnum) Enum() *TeamEnum {
	p := new(TeamEnum)
	*p = x
	return p
}

func (x TeamEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TeamEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_enum_proto_enumTypes[7].Descriptor()
}

func (TeamEnum) Type() protoreflect.EnumType {
	return &file_enum_proto_enumTypes[7]
}

func (x TeamEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TeamEnum.Descriptor instead.
func (TeamEnum) EnumDescriptor() ([]byte, []int) {
	return file_enum_proto_rawDescGZIP(), []int{7}
}

type TradeResultEnum int32

const (
	TradeResultEnum_FAIL    TradeResultEnum = 0
	TradeResultEnum_SUCCESS TradeResultEnum = 1
)

// Enum value maps for TradeResultEnum.
var (
	TradeResultEnum_name = map[int32]string{
		0: "FAIL",
		1: "SUCCESS",
	}
	TradeResultEnum_value = map[string]int32{
		"FAIL":    0,
		"SUCCESS": 1,
	}
)

func (x TradeResultEnum) Enum() *TradeResultEnum {
	p := new(TradeResultEnum)
	*p = x
	return p
}

func (x TradeResultEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TradeResultEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_enum_proto_enumTypes[8].Descriptor()
}

func (TradeResultEnum) Type() protoreflect.EnumType {
	return &file_enum_proto_enumTypes[8]
}

func (x TradeResultEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TradeResultEnum.Descriptor instead.
func (TradeResultEnum) EnumDescriptor() ([]byte, []int) {
	return file_enum_proto_rawDescGZIP(), []int{8}
}

type VenueEnum int32

const (
	VenueEnum_HOME      VenueEnum = 0
	VenueEnum_AWAY      VenueEnum = 1
	VenueEnum_HOME_AWAY VenueEnum = 2
)

// Enum value maps for VenueEnum.
var (
	VenueEnum_name = map[int32]string{
		0: "HOME",
		1: "AWAY",
		2: "HOME_AWAY",
	}
	VenueEnum_value = map[string]int32{
		"HOME":      0,
		"AWAY":      1,
		"HOME_AWAY": 2,
	}
)

func (x VenueEnum) Enum() *VenueEnum {
	p := new(VenueEnum)
	*p = x
	return p
}

func (x VenueEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (VenueEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_enum_proto_enumTypes[9].Descriptor()
}

func (VenueEnum) Type() protoreflect.EnumType {
	return &file_enum_proto_enumTypes[9]
}

func (x VenueEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use VenueEnum.Descriptor instead.
func (VenueEnum) EnumDescriptor() ([]byte, []int) {
	return file_enum_proto_rawDescGZIP(), []int{9}
}

var File_enum_proto protoreflect.FileDescriptor

var file_enum_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x65, 0x6e, 0x75, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x73, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2a, 0x22, 0x0a, 0x0a, 0x41, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x45, 0x6e, 0x75, 0x6d, 0x12, 0x07, 0x0a, 0x03, 0x46, 0x4f, 0x52, 0x10, 0x00, 0x12,
	0x0b, 0x0a, 0x07, 0x41, 0x47, 0x41, 0x49, 0x4e, 0x53, 0x54, 0x10, 0x01, 0x2a, 0x20, 0x0a, 0x08,
	0x4c, 0x69, 0x6e, 0x65, 0x45, 0x6e, 0x75, 0x6d, 0x12, 0x0b, 0x0a, 0x07, 0x43, 0x4c, 0x4f, 0x53,
	0x49, 0x4e, 0x47, 0x10, 0x00, 0x12, 0x07, 0x0a, 0x03, 0x4d, 0x41, 0x58, 0x10, 0x01, 0x2a, 0x21,
	0x0a, 0x0b, 0x4d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x45, 0x6e, 0x75, 0x6d, 0x12, 0x09, 0x0a,
	0x05, 0x54, 0x4f, 0x54, 0x41, 0x4c, 0x10, 0x00, 0x12, 0x07, 0x0a, 0x03, 0x41, 0x56, 0x47, 0x10,
	0x01, 0x2a, 0x1e, 0x0a, 0x0a, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x45, 0x6e, 0x75, 0x6d, 0x12,
	0x07, 0x0a, 0x03, 0x47, 0x54, 0x45, 0x10, 0x00, 0x12, 0x07, 0x0a, 0x03, 0x4c, 0x54, 0x45, 0x10,
	0x01, 0x2a, 0x46, 0x0a, 0x0a, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x45, 0x6e, 0x75, 0x6d, 0x12,
	0x07, 0x0a, 0x03, 0x57, 0x49, 0x4e, 0x10, 0x00, 0x12, 0x08, 0x0a, 0x04, 0x4c, 0x4f, 0x53, 0x45,
	0x10, 0x01, 0x12, 0x08, 0x0a, 0x04, 0x44, 0x52, 0x41, 0x57, 0x10, 0x02, 0x12, 0x0c, 0x0a, 0x08,
	0x57, 0x49, 0x4e, 0x5f, 0x44, 0x52, 0x41, 0x57, 0x10, 0x03, 0x12, 0x0d, 0x0a, 0x09, 0x4c, 0x4f,
	0x53, 0x45, 0x5f, 0x44, 0x52, 0x41, 0x57, 0x10, 0x04, 0x2a, 0x1d, 0x0a, 0x08, 0x53, 0x69, 0x64,
	0x65, 0x45, 0x6e, 0x75, 0x6d, 0x12, 0x08, 0x0a, 0x04, 0x42, 0x41, 0x43, 0x4b, 0x10, 0x00, 0x12,
	0x07, 0x0a, 0x03, 0x4c, 0x41, 0x59, 0x10, 0x01, 0x2a, 0x30, 0x0a, 0x08, 0x53, 0x74, 0x61, 0x74,
	0x45, 0x6e, 0x75, 0x6d, 0x12, 0x09, 0x0a, 0x05, 0x47, 0x4f, 0x41, 0x4c, 0x53, 0x10, 0x00, 0x12,
	0x11, 0x0a, 0x0d, 0x53, 0x48, 0x4f, 0x54, 0x53, 0x5f, 0x4f, 0x4e, 0x5f, 0x47, 0x4f, 0x41, 0x4c,
	0x10, 0x01, 0x12, 0x06, 0x0a, 0x02, 0x58, 0x47, 0x10, 0x02, 0x2a, 0x28, 0x0a, 0x08, 0x54, 0x65,
	0x61, 0x6d, 0x45, 0x6e, 0x75, 0x6d, 0x12, 0x0d, 0x0a, 0x09, 0x48, 0x4f, 0x4d, 0x45, 0x5f, 0x54,
	0x45, 0x41, 0x4d, 0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09, 0x41, 0x57, 0x41, 0x59, 0x5f, 0x54, 0x45,
	0x41, 0x4d, 0x10, 0x01, 0x2a, 0x28, 0x0a, 0x0f, 0x54, 0x72, 0x61, 0x64, 0x65, 0x52, 0x65, 0x73,
	0x75, 0x6c, 0x74, 0x45, 0x6e, 0x75, 0x6d, 0x12, 0x08, 0x0a, 0x04, 0x46, 0x41, 0x49, 0x4c, 0x10,
	0x00, 0x12, 0x0b, 0x0a, 0x07, 0x53, 0x55, 0x43, 0x43, 0x45, 0x53, 0x53, 0x10, 0x01, 0x2a, 0x2e,
	0x0a, 0x09, 0x56, 0x65, 0x6e, 0x75, 0x65, 0x45, 0x6e, 0x75, 0x6d, 0x12, 0x08, 0x0a, 0x04, 0x48,
	0x4f, 0x4d, 0x45, 0x10, 0x00, 0x12, 0x08, 0x0a, 0x04, 0x41, 0x57, 0x41, 0x59, 0x10, 0x01, 0x12,
	0x0d, 0x0a, 0x09, 0x48, 0x4f, 0x4d, 0x45, 0x5f, 0x41, 0x57, 0x41, 0x59, 0x10, 0x02, 0x42, 0x33,
	0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x74, 0x61,
	0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69,
	0x63, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x3b, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_enum_proto_rawDescOnce sync.Once
	file_enum_proto_rawDescData = file_enum_proto_rawDesc
)

func file_enum_proto_rawDescGZIP() []byte {
	file_enum_proto_rawDescOnce.Do(func() {
		file_enum_proto_rawDescData = protoimpl.X.CompressGZIP(file_enum_proto_rawDescData)
	})
	return file_enum_proto_rawDescData
}

var file_enum_proto_enumTypes = make([]protoimpl.EnumInfo, 10)
var file_enum_proto_goTypes = []interface{}{
	(ActionEnum)(0),      // 0: statistico.ActionEnum
	(LineEnum)(0),        // 1: statistico.LineEnum
	(MeasureEnum)(0),     // 2: statistico.MeasureEnum
	(MetricEnum)(0),      // 3: statistico.MetricEnum
	(ResultEnum)(0),      // 4: statistico.ResultEnum
	(SideEnum)(0),        // 5: statistico.SideEnum
	(StatEnum)(0),        // 6: statistico.StatEnum
	(TeamEnum)(0),        // 7: statistico.TeamEnum
	(TradeResultEnum)(0), // 8: statistico.TradeResultEnum
	(VenueEnum)(0),       // 9: statistico.VenueEnum
}
var file_enum_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_enum_proto_init() }
func file_enum_proto_init() {
	if File_enum_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_enum_proto_rawDesc,
			NumEnums:      10,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_enum_proto_goTypes,
		DependencyIndexes: file_enum_proto_depIdxs,
		EnumInfos:         file_enum_proto_enumTypes,
	}.Build()
	File_enum_proto = out.File
	file_enum_proto_rawDesc = nil
	file_enum_proto_goTypes = nil
	file_enum_proto_depIdxs = nil
}
