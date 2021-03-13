/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var enum_pb = require('./enum_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.exportSymbol('proto.statistico.MarketRunner', null, global);
goog.exportSymbol('proto.statistico.MarketRunnerRequest', null, global);
goog.exportSymbol('proto.statistico.Price', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.statistico.MarketRunnerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.statistico.MarketRunnerRequest.repeatedFields_, null);
};
goog.inherits(proto.statistico.MarketRunnerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.statistico.MarketRunnerRequest.displayName = 'proto.statistico.MarketRunnerRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.statistico.MarketRunnerRequest.repeatedFields_ = [7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.statistico.MarketRunnerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.MarketRunnerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.MarketRunnerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.MarketRunnerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    runner: jspb.Message.getFieldWithDefault(msg, 2, ""),
    minOdds: (f = msg.getMinOdds()) && google_protobuf_wrappers_pb.FloatValue.toObject(includeInstance, f),
    maxOdds: (f = msg.getMaxOdds()) && google_protobuf_wrappers_pb.FloatValue.toObject(includeInstance, f),
    line: jspb.Message.getFieldWithDefault(msg, 5, ""),
    side: jspb.Message.getFieldWithDefault(msg, 6, 0),
    competitionIdsList: jspb.Message.getRepeatedField(msg, 7),
    seasonIdsList: jspb.Message.getRepeatedField(msg, 8),
    datefrom: (f = msg.getDatefrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateto: (f = msg.getDateto()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.statistico.MarketRunnerRequest}
 */
proto.statistico.MarketRunnerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.MarketRunnerRequest;
  return proto.statistico.MarketRunnerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.MarketRunnerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.MarketRunnerRequest}
 */
proto.statistico.MarketRunnerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunner(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.FloatValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.FloatValue.deserializeBinaryFromReader);
      msg.setMinOdds(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.FloatValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.FloatValue.deserializeBinaryFromReader);
      msg.setMaxOdds(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLine(value);
      break;
    case 6:
      var value = /** @type {!proto.statistico.SideEnum} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 7:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setCompetitionIdsList(value);
      break;
    case 8:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setSeasonIdsList(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDatefrom(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateto(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.statistico.MarketRunnerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.MarketRunnerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.MarketRunnerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.MarketRunnerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRunner();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMinOdds();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.FloatValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxOdds();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.FloatValue.serializeBinaryToWriter
    );
  }
  f = message.getLine();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCompetitionIdsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      7,
      f
    );
  }
  f = message.getSeasonIdsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      8,
      f
    );
  }
  f = message.getDatefrom();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateto();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.statistico.MarketRunnerRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.statistico.MarketRunnerRequest.prototype.setMarket = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string runner = 2;
 * @return {string}
 */
proto.statistico.MarketRunnerRequest.prototype.getRunner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.statistico.MarketRunnerRequest.prototype.setRunner = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.FloatValue min_odds = 3;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.statistico.MarketRunnerRequest.prototype.getMinOdds = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.FloatValue, 3));
};


/** @param {?proto.google.protobuf.FloatValue|undefined} value */
proto.statistico.MarketRunnerRequest.prototype.setMinOdds = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.statistico.MarketRunnerRequest.prototype.clearMinOdds = function() {
  this.setMinOdds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.statistico.MarketRunnerRequest.prototype.hasMinOdds = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FloatValue max_odds = 4;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.statistico.MarketRunnerRequest.prototype.getMaxOdds = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.FloatValue, 4));
};


/** @param {?proto.google.protobuf.FloatValue|undefined} value */
proto.statistico.MarketRunnerRequest.prototype.setMaxOdds = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.statistico.MarketRunnerRequest.prototype.clearMaxOdds = function() {
  this.setMaxOdds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.statistico.MarketRunnerRequest.prototype.hasMaxOdds = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string line = 5;
 * @return {string}
 */
proto.statistico.MarketRunnerRequest.prototype.getLine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.statistico.MarketRunnerRequest.prototype.setLine = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional SideEnum side = 6;
 * @return {!proto.statistico.SideEnum}
 */
proto.statistico.MarketRunnerRequest.prototype.getSide = function() {
  return /** @type {!proto.statistico.SideEnum} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.statistico.SideEnum} value */
proto.statistico.MarketRunnerRequest.prototype.setSide = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated uint64 competition_ids = 7;
 * @return {!Array<number>}
 */
proto.statistico.MarketRunnerRequest.prototype.getCompetitionIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<number>} value */
proto.statistico.MarketRunnerRequest.prototype.setCompetitionIdsList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.statistico.MarketRunnerRequest.prototype.addCompetitionIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


proto.statistico.MarketRunnerRequest.prototype.clearCompetitionIdsList = function() {
  this.setCompetitionIdsList([]);
};


/**
 * repeated uint64 season_ids = 8;
 * @return {!Array<number>}
 */
proto.statistico.MarketRunnerRequest.prototype.getSeasonIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<number>} value */
proto.statistico.MarketRunnerRequest.prototype.setSeasonIdsList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.statistico.MarketRunnerRequest.prototype.addSeasonIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.statistico.MarketRunnerRequest.prototype.clearSeasonIdsList = function() {
  this.setSeasonIdsList([]);
};


/**
 * optional google.protobuf.Timestamp dateFrom = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.statistico.MarketRunnerRequest.prototype.getDatefrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.statistico.MarketRunnerRequest.prototype.setDatefrom = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.statistico.MarketRunnerRequest.prototype.clearDatefrom = function() {
  this.setDatefrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.statistico.MarketRunnerRequest.prototype.hasDatefrom = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp dateTo = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.statistico.MarketRunnerRequest.prototype.getDateto = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.statistico.MarketRunnerRequest.prototype.setDateto = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.statistico.MarketRunnerRequest.prototype.clearDateto = function() {
  this.setDateto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.statistico.MarketRunnerRequest.prototype.hasDateto = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.statistico.MarketRunner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.statistico.MarketRunner.repeatedFields_, null);
};
goog.inherits(proto.statistico.MarketRunner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.statistico.MarketRunner.displayName = 'proto.statistico.MarketRunner';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.statistico.MarketRunner.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.statistico.MarketRunner.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.MarketRunner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.MarketRunner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.MarketRunner.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    runnerName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    eventId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    competitionId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    seasonId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    eventDate: (f = msg.getEventDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    side: jspb.Message.getFieldWithDefault(msg, 8, ""),
    exchange: jspb.Message.getFieldWithDefault(msg, 9, ""),
    pricesList: jspb.Message.toObjectList(msg.getPricesList(),
    proto.statistico.Price.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.statistico.MarketRunner}
 */
proto.statistico.MarketRunner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.MarketRunner;
  return proto.statistico.MarketRunner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.MarketRunner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.MarketRunner}
 */
proto.statistico.MarketRunner.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunnerName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEventId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCompetitionId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeasonId(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEventDate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSide(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 10:
      var value = new proto.statistico.Price;
      reader.readMessage(value,proto.statistico.Price.deserializeBinaryFromReader);
      msg.addPrices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.statistico.MarketRunner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.MarketRunner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.MarketRunner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.MarketRunner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRunnerName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEventId();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getCompetitionId();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getSeasonId();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getEventDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSide();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getExchange();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPricesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.statistico.Price.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.statistico.MarketRunner.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.statistico.MarketRunner.prototype.setMarketId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_name = 2;
 * @return {string}
 */
proto.statistico.MarketRunner.prototype.getMarketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.statistico.MarketRunner.prototype.setMarketName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string runner_name = 3;
 * @return {string}
 */
proto.statistico.MarketRunner.prototype.getRunnerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.statistico.MarketRunner.prototype.setRunnerName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 event_id = 4;
 * @return {number}
 */
proto.statistico.MarketRunner.prototype.getEventId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.statistico.MarketRunner.prototype.setEventId = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 competition_id = 5;
 * @return {number}
 */
proto.statistico.MarketRunner.prototype.getCompetitionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.statistico.MarketRunner.prototype.setCompetitionId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 season_id = 6;
 * @return {number}
 */
proto.statistico.MarketRunner.prototype.getSeasonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.statistico.MarketRunner.prototype.setSeasonId = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp event_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.statistico.MarketRunner.prototype.getEventDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.statistico.MarketRunner.prototype.setEventDate = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.statistico.MarketRunner.prototype.clearEventDate = function() {
  this.setEventDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.statistico.MarketRunner.prototype.hasEventDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string side = 8;
 * @return {string}
 */
proto.statistico.MarketRunner.prototype.getSide = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.statistico.MarketRunner.prototype.setSide = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string exchange = 9;
 * @return {string}
 */
proto.statistico.MarketRunner.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.statistico.MarketRunner.prototype.setExchange = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated Price prices = 10;
 * @return {!Array<!proto.statistico.Price>}
 */
proto.statistico.MarketRunner.prototype.getPricesList = function() {
  return /** @type{!Array<!proto.statistico.Price>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.statistico.Price, 10));
};


/** @param {!Array<!proto.statistico.Price>} value */
proto.statistico.MarketRunner.prototype.setPricesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.statistico.Price=} opt_value
 * @param {number=} opt_index
 * @return {!proto.statistico.Price}
 */
proto.statistico.MarketRunner.prototype.addPrices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.statistico.Price, opt_index);
};


proto.statistico.MarketRunner.prototype.clearPricesList = function() {
  this.setPricesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.statistico.Price = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.statistico.Price, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.statistico.Price.displayName = 'proto.statistico.Price';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.statistico.Price.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.Price.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.Price} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.Price.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    size: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.statistico.Price}
 */
proto.statistico.Price.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.Price;
  return proto.statistico.Price.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.Price} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.Price}
 */
proto.statistico.Price.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.statistico.Price.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.Price.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.Price} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.Price.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.statistico.Price.prototype.getValue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.statistico.Price.prototype.setValue = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float size = 2;
 * @return {number}
 */
proto.statistico.Price.prototype.getSize = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.statistico.Price.prototype.setSize = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.statistico.Price.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.statistico.Price.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.statistico);