// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.14.0
// source: strategy.proto

package statistico

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	wrapperspb "google.golang.org/protobuf/types/known/wrapperspb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Strategy struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name           string                 `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	UserId         string                 `protobuf:"bytes,3,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Market         MarketEnum             `protobuf:"varint,4,opt,name=market,proto3,enum=statistico.MarketEnum" json:"market,omitempty"`
	Exchange       ExchangeEnum           `protobuf:"varint,5,opt,name=exchange,proto3,enum=statistico.ExchangeEnum" json:"exchange,omitempty"`
	MinOdds        *wrapperspb.FloatValue `protobuf:"bytes,6,opt,name=min_odds,json=minOdds,proto3" json:"min_odds,omitempty"`
	MaxOdds        *wrapperspb.FloatValue `protobuf:"bytes,7,opt,name=max_odds,json=maxOdds,proto3" json:"max_odds,omitempty"`
	CompetitionIds []uint64               `protobuf:"varint,8,rep,packed,name=competition_ids,json=competitionIds,proto3" json:"competition_ids,omitempty"`
	StakingPlan    *StakingPlan           `protobuf:"bytes,9,opt,name=staking_plan,json=stakingPlan,proto3" json:"staking_plan,omitempty"`
	Status         StrategyStatusEnum     `protobuf:"varint,10,opt,name=status,proto3,enum=statistico.StrategyStatusEnum" json:"status,omitempty"`
	Bankroll       float32                `protobuf:"fixed32,11,opt,name=bankroll,proto3" json:"bankroll,omitempty"`
	Timestamp      *timestamppb.Timestamp `protobuf:"bytes,12,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *Strategy) Reset() {
	*x = Strategy{}
	if protoimpl.UnsafeEnabled {
		mi := &file_strategy_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Strategy) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Strategy) ProtoMessage() {}

func (x *Strategy) ProtoReflect() protoreflect.Message {
	mi := &file_strategy_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Strategy.ProtoReflect.Descriptor instead.
func (*Strategy) Descriptor() ([]byte, []int) {
	return file_strategy_proto_rawDescGZIP(), []int{0}
}

func (x *Strategy) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Strategy) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Strategy) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *Strategy) GetMarket() MarketEnum {
	if x != nil {
		return x.Market
	}
	return MarketEnum_OVER_UNDER_25
}

func (x *Strategy) GetExchange() ExchangeEnum {
	if x != nil {
		return x.Exchange
	}
	return ExchangeEnum_BETFAIR
}

func (x *Strategy) GetMinOdds() *wrapperspb.FloatValue {
	if x != nil {
		return x.MinOdds
	}
	return nil
}

func (x *Strategy) GetMaxOdds() *wrapperspb.FloatValue {
	if x != nil {
		return x.MaxOdds
	}
	return nil
}

func (x *Strategy) GetCompetitionIds() []uint64 {
	if x != nil {
		return x.CompetitionIds
	}
	return nil
}

func (x *Strategy) GetStakingPlan() *StakingPlan {
	if x != nil {
		return x.StakingPlan
	}
	return nil
}

func (x *Strategy) GetStatus() StrategyStatusEnum {
	if x != nil {
		return x.Status
	}
	return StrategyStatusEnum_ARCHIVED
}

func (x *Strategy) GetBankroll() float32 {
	if x != nil {
		return x.Bankroll
	}
	return 0
}

func (x *Strategy) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

var File_strategy_proto protoreflect.FileDescriptor

var file_strategy_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x73, 0x74, 0x72, 0x61, 0x74, 0x65, 0x67, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0a, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x1a, 0x0a, 0x65, 0x6e,
	0x75, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0e, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x75, 0x74, 0x69, 0x6c, 0x69, 0x74,
	0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65,
	0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x90, 0x04, 0x0a, 0x08, 0x53, 0x74, 0x72,
	0x61, 0x74, 0x65, 0x67, 0x79, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72,
	0x49, 0x64, 0x12, 0x2e, 0x0a, 0x06, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x16, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e,
	0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x45, 0x6e, 0x75, 0x6d, 0x52, 0x06, 0x6d, 0x61, 0x72, 0x6b,
	0x65, 0x74, 0x12, 0x34, 0x0a, 0x08, 0x65, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x18, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x6f, 0x2e, 0x45, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x45, 0x6e, 0x75, 0x6d, 0x52, 0x08,
	0x65, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x36, 0x0a, 0x08, 0x6d, 0x69, 0x6e, 0x5f,
	0x6f, 0x64, 0x64, 0x73, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x6c, 0x6f,
	0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x07, 0x6d, 0x69, 0x6e, 0x4f, 0x64, 0x64, 0x73,
	0x12, 0x36, 0x0a, 0x08, 0x6d, 0x61, 0x78, 0x5f, 0x6f, 0x64, 0x64, 0x73, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52,
	0x07, 0x6d, 0x61, 0x78, 0x4f, 0x64, 0x64, 0x73, 0x12, 0x27, 0x0a, 0x0f, 0x63, 0x6f, 0x6d, 0x70,
	0x65, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x73, 0x18, 0x08, 0x20, 0x03, 0x28,
	0x04, 0x52, 0x0e, 0x63, 0x6f, 0x6d, 0x70, 0x65, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64,
	0x73, 0x12, 0x3a, 0x0a, 0x0c, 0x73, 0x74, 0x61, 0x6b, 0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6c, 0x61,
	0x6e, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x6f, 0x2e, 0x53, 0x74, 0x61, 0x6b, 0x69, 0x6e, 0x67, 0x50, 0x6c, 0x61, 0x6e,
	0x52, 0x0b, 0x73, 0x74, 0x61, 0x6b, 0x69, 0x6e, 0x67, 0x50, 0x6c, 0x61, 0x6e, 0x12, 0x36, 0x0a,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1e, 0x2e,
	0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x53, 0x74, 0x72, 0x61, 0x74,
	0x65, 0x67, 0x79, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x45, 0x6e, 0x75, 0x6d, 0x52, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x62, 0x61, 0x6e, 0x6b, 0x72, 0x6f, 0x6c,
	0x6c, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x02, 0x52, 0x08, 0x62, 0x61, 0x6e, 0x6b, 0x72, 0x6f, 0x6c,
	0x6c, 0x12, 0x38, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x0c,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x32, 0xb5, 0x01, 0x0a, 0x0f,
	0x53, 0x74, 0x72, 0x61, 0x74, 0x65, 0x67, 0x79, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x4b, 0x0a, 0x0e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x53, 0x74, 0x72, 0x61, 0x74, 0x65, 0x67,
	0x79, 0x12, 0x21, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x53, 0x74, 0x72, 0x61, 0x74, 0x65, 0x67, 0x79, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x14, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x6f, 0x2e, 0x53, 0x74, 0x72, 0x61, 0x74, 0x65, 0x67, 0x79, 0x22, 0x00, 0x12, 0x55, 0x0a, 0x12,
	0x4c, 0x69, 0x73, 0x74, 0x55, 0x73, 0x65, 0x72, 0x53, 0x74, 0x72, 0x61, 0x74, 0x65, 0x67, 0x69,
	0x65, 0x73, 0x12, 0x25, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e,
	0x4c, 0x69, 0x73, 0x74, 0x55, 0x73, 0x65, 0x72, 0x53, 0x74, 0x72, 0x61, 0x74, 0x65, 0x67, 0x69,
	0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x14, 0x2e, 0x73, 0x74, 0x61, 0x74,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2e, 0x53, 0x74, 0x72, 0x61, 0x74, 0x65, 0x67, 0x79, 0x22,
	0x00, 0x30, 0x01, 0x42, 0x33, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2f, 0x73, 0x74, 0x61,
	0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x3b, 0x73, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_strategy_proto_rawDescOnce sync.Once
	file_strategy_proto_rawDescData = file_strategy_proto_rawDesc
)

func file_strategy_proto_rawDescGZIP() []byte {
	file_strategy_proto_rawDescOnce.Do(func() {
		file_strategy_proto_rawDescData = protoimpl.X.CompressGZIP(file_strategy_proto_rawDescData)
	})
	return file_strategy_proto_rawDescData
}

var file_strategy_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_strategy_proto_goTypes = []interface{}{
	(*Strategy)(nil),                  // 0: statistico.Strategy
	(MarketEnum)(0),                   // 1: statistico.MarketEnum
	(ExchangeEnum)(0),                 // 2: statistico.ExchangeEnum
	(*wrapperspb.FloatValue)(nil),     // 3: google.protobuf.FloatValue
	(*StakingPlan)(nil),               // 4: statistico.StakingPlan
	(StrategyStatusEnum)(0),           // 5: statistico.StrategyStatusEnum
	(*timestamppb.Timestamp)(nil),     // 6: google.protobuf.Timestamp
	(*CreateStrategyRequest)(nil),     // 7: statistico.CreateStrategyRequest
	(*ListUserStrategiesRequest)(nil), // 8: statistico.ListUserStrategiesRequest
}
var file_strategy_proto_depIdxs = []int32{
	1, // 0: statistico.Strategy.market:type_name -> statistico.MarketEnum
	2, // 1: statistico.Strategy.exchange:type_name -> statistico.ExchangeEnum
	3, // 2: statistico.Strategy.min_odds:type_name -> google.protobuf.FloatValue
	3, // 3: statistico.Strategy.max_odds:type_name -> google.protobuf.FloatValue
	4, // 4: statistico.Strategy.staking_plan:type_name -> statistico.StakingPlan
	5, // 5: statistico.Strategy.status:type_name -> statistico.StrategyStatusEnum
	6, // 6: statistico.Strategy.timestamp:type_name -> google.protobuf.Timestamp
	7, // 7: statistico.StrategyService.CreateStrategy:input_type -> statistico.CreateStrategyRequest
	8, // 8: statistico.StrategyService.ListUserStrategies:input_type -> statistico.ListUserStrategiesRequest
	0, // 9: statistico.StrategyService.CreateStrategy:output_type -> statistico.Strategy
	0, // 10: statistico.StrategyService.ListUserStrategies:output_type -> statistico.Strategy
	9, // [9:11] is the sub-list for method output_type
	7, // [7:9] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_strategy_proto_init() }
func file_strategy_proto_init() {
	if File_strategy_proto != nil {
		return
	}
	file_enum_proto_init()
	file_requests_proto_init()
	file_utility_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_strategy_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Strategy); i {
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
			RawDescriptor: file_strategy_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_strategy_proto_goTypes,
		DependencyIndexes: file_strategy_proto_depIdxs,
		MessageInfos:      file_strategy_proto_msgTypes,
	}.Build()
	File_strategy_proto = out.File
	file_strategy_proto_rawDesc = nil
	file_strategy_proto_goTypes = nil
	file_strategy_proto_depIdxs = nil
}
