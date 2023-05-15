// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "utility.proto" (package "statistico", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { StakingPlanEnum } from "./enum";
/**
 * @generated from protobuf message statistico.StakingPlan
 */
export interface StakingPlan {
    /**
     * @generated from protobuf field: statistico.StakingPlanEnum name = 1;
     */
    name: StakingPlanEnum;
    /**
     * @generated from protobuf field: float value = 2;
     */
    value: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class StakingPlan$Type extends MessageType<StakingPlan> {
    constructor() {
        super("statistico.StakingPlan", [
            { no: 1, name: "name", kind: "enum", T: () => ["statistico.StakingPlanEnum", StakingPlanEnum] },
            { no: 2, name: "value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<StakingPlan>): StakingPlan {
        const message = { name: 0, value: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StakingPlan>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StakingPlan): StakingPlan {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* statistico.StakingPlanEnum name */ 1:
                    message.name = reader.int32();
                    break;
                case /* float value */ 2:
                    message.value = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: StakingPlan, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* statistico.StakingPlanEnum name = 1; */
        if (message.name !== 0)
            writer.tag(1, WireType.Varint).int32(message.name);
        /* float value = 2; */
        if (message.value !== 0)
            writer.tag(2, WireType.Bit32).float(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message statistico.StakingPlan
 */
export const StakingPlan = new StakingPlan$Type();
