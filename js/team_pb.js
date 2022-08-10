// source: team.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var requests_pb = require('./requests_pb.js');
goog.object.extend(proto, requests_pb);
goog.exportSymbol('proto.statistico.CompetitionTeamsRequest', null, global);
goog.exportSymbol('proto.statistico.Team', null, global);
goog.exportSymbol('proto.statistico.TeamsResponse', null, global);
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
proto.statistico.Team = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.statistico.Team, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.statistico.Team.displayName = 'proto.statistico.Team';
}
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
proto.statistico.CompetitionTeamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.statistico.CompetitionTeamsRequest.repeatedFields_, null);
};
goog.inherits(proto.statistico.CompetitionTeamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.statistico.CompetitionTeamsRequest.displayName = 'proto.statistico.CompetitionTeamsRequest';
}
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
proto.statistico.TeamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.statistico.TeamsResponse.repeatedFields_, null);
};
goog.inherits(proto.statistico.TeamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.statistico.TeamsResponse.displayName = 'proto.statistico.TeamsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.statistico.Team.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.Team.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.Team} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.Team.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shortCode: (f = msg.getShortCode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    countryId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    venueId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isNationalTeam: (f = msg.getIsNationalTeam()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    founded: (f = msg.getFounded()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    logo: (f = msg.getLogo()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.statistico.Team}
 */
proto.statistico.Team.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.Team;
  return proto.statistico.Team.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.Team} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.Team}
 */
proto.statistico.Team.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setShortCode(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCountryId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVenueId(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setIsNationalTeam(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setFounded(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setLogo(value);
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
proto.statistico.Team.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.Team.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.Team} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.Team.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShortCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCountryId();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getVenueId();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getIsNationalTeam();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFounded();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getLogo();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.statistico.Team.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.statistico.Team} returns this
 */
proto.statistico.Team.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.statistico.Team.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.statistico.Team} returns this
 */
proto.statistico.Team.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue short_code = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.statistico.Team.prototype.getShortCode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.statistico.Team} returns this
*/
proto.statistico.Team.prototype.setShortCode = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.statistico.Team} returns this
 */
proto.statistico.Team.prototype.clearShortCode = function() {
  return this.setShortCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.statistico.Team.prototype.hasShortCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 country_id = 4;
 * @return {number}
 */
proto.statistico.Team.prototype.getCountryId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.statistico.Team} returns this
 */
proto.statistico.Team.prototype.setCountryId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 venue_id = 5;
 * @return {number}
 */
proto.statistico.Team.prototype.getVenueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.statistico.Team} returns this
 */
proto.statistico.Team.prototype.setVenueId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.BoolValue is_national_team = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.statistico.Team.prototype.getIsNationalTeam = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.statistico.Team} returns this
*/
proto.statistico.Team.prototype.setIsNationalTeam = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.statistico.Team} returns this
 */
proto.statistico.Team.prototype.clearIsNationalTeam = function() {
  return this.setIsNationalTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.statistico.Team.prototype.hasIsNationalTeam = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.UInt64Value founded = 7;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.statistico.Team.prototype.getFounded = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 7));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.statistico.Team} returns this
*/
proto.statistico.Team.prototype.setFounded = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.statistico.Team} returns this
 */
proto.statistico.Team.prototype.clearFounded = function() {
  return this.setFounded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.statistico.Team.prototype.hasFounded = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.StringValue logo = 8;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.statistico.Team.prototype.getLogo = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.statistico.Team} returns this
*/
proto.statistico.Team.prototype.setLogo = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.statistico.Team} returns this
 */
proto.statistico.Team.prototype.clearLogo = function() {
  return this.setLogo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.statistico.Team.prototype.hasLogo = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.statistico.CompetitionTeamsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.statistico.CompetitionTeamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.CompetitionTeamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.CompetitionTeamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.CompetitionTeamsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    competitionIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.statistico.CompetitionTeamsRequest}
 */
proto.statistico.CompetitionTeamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.CompetitionTeamsRequest;
  return proto.statistico.CompetitionTeamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.CompetitionTeamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.CompetitionTeamsRequest}
 */
proto.statistico.CompetitionTeamsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCompetitionIds(values[i]);
      }
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
proto.statistico.CompetitionTeamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.CompetitionTeamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.CompetitionTeamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.CompetitionTeamsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompetitionIdsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
};


/**
 * repeated uint64 competition_ids = 1;
 * @return {!Array<number>}
 */
proto.statistico.CompetitionTeamsRequest.prototype.getCompetitionIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.statistico.CompetitionTeamsRequest} returns this
 */
proto.statistico.CompetitionTeamsRequest.prototype.setCompetitionIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.statistico.CompetitionTeamsRequest} returns this
 */
proto.statistico.CompetitionTeamsRequest.prototype.addCompetitionIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.statistico.CompetitionTeamsRequest} returns this
 */
proto.statistico.CompetitionTeamsRequest.prototype.clearCompetitionIdsList = function() {
  return this.setCompetitionIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.statistico.TeamsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.statistico.TeamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.TeamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.TeamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.TeamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamsList: jspb.Message.toObjectList(msg.getTeamsList(),
    proto.statistico.Team.toObject, includeInstance)
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
 * @return {!proto.statistico.TeamsResponse}
 */
proto.statistico.TeamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.TeamsResponse;
  return proto.statistico.TeamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.TeamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.TeamsResponse}
 */
proto.statistico.TeamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.statistico.Team;
      reader.readMessage(value,proto.statistico.Team.deserializeBinaryFromReader);
      msg.addTeams(value);
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
proto.statistico.TeamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.TeamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.TeamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.TeamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.statistico.Team.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Team teams = 1;
 * @return {!Array<!proto.statistico.Team>}
 */
proto.statistico.TeamsResponse.prototype.getTeamsList = function() {
  return /** @type{!Array<!proto.statistico.Team>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.statistico.Team, 1));
};


/**
 * @param {!Array<!proto.statistico.Team>} value
 * @return {!proto.statistico.TeamsResponse} returns this
*/
proto.statistico.TeamsResponse.prototype.setTeamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.statistico.Team=} opt_value
 * @param {number=} opt_index
 * @return {!proto.statistico.Team}
 */
proto.statistico.TeamsResponse.prototype.addTeams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.statistico.Team, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.statistico.TeamsResponse} returns this
 */
proto.statistico.TeamsResponse.prototype.clearTeamsList = function() {
  return this.setTeamsList([]);
};


goog.object.extend(exports, proto.statistico);
