let _ = require("lodash");

let errorCodes = {
  OK: 0,
  InternalError: 1,
  BadValue: 2,
  OBSOLETE_DuplicateKey: 3,
  NoSuchKey: 4,
  GraphContainsCycle: 5,
  HostUnreachable: 6,
  HostNotFound: 7,
  UnknownError: 8,
  FailedToParse: 9,
  CannotMutateObject: 10,
  UserNotFound: 11,
  UnsupportedFormat: 12,
  Unauthorized: 13,
  TypeMismatch: 14,
  Overflow: 15,
  InvalidLength: 16,
  ProtocolError: 17,
  AuthenticationFailed: 18,
  CannotReuseObject: 19,
  IllegalOperation: 20,
  EmptyArrayOperation: 21,
  InvalidBSON: 22,
  AlreadyInitialized: 23,
  LockTimeout: 24,
  RemoteValidationError: 25,
  NamespaceNotFound: 26,
  IndexNotFound: 27,
  PathNotViable: 28,
  NonExistentPath: 29,
  InvalidPath: 30,
  RoleNotFound: 31,
  RolesNotRelated: 32,
  PrivilegeNotFound: 33,
  CannotBackfillArray: 34,
  UserModificationFailed: 35,
  RemoteChangeDetected: 36,
  FileRenameFailed: 37,
  FileNotOpen: 38,
  FileStreamFailed: 39,
  ConflictingUpdateOperators: 40,
  FileAlreadyOpen: 41,
  LogWriteFailed: 42,
  CursorNotFound: 43,
  UserDataInconsistent: 45,
  LockBusy: 46,
  NoMatchingDocument: 47,
  NamespaceExists: 48,
  InvalidRoleModification: 49,
  ExceededTimeLimit: 50,
  ManualInterventionRequired: 51,
  DollarPrefixedFieldName: 52,
  InvalidIdField: 53,
  NotSingleValueField: 54,
  InvalidDBRef: 55,
  EmptyFieldName: 56,
  DottedFieldName: 57,
  RoleModificationFailed: 58,
  CommandNotFound: 59,
  DatabaseNotFound: 60,
  ShardKeyNotFound: 61,
  OplogOperationUnsupported: 62,
  StaleShardVersion: 63,
  WriteConcernFailed: 64,
  MultipleErrorsOccurred: 65,
  ImmutableField: 66,
  CannotCreateIndex: 67,
  IndexAlreadyExists: 68,
  AuthSchemaIncompatible: 69,
  ShardNotFound: 70,
  ReplicaSetNotFound: 71,
  InvalidOptions: 72,
  InvalidNamespace: 73,
  NodeNotFound: 74,
  WriteConcernLegacyOK: 75,
  NoReplicationEnabled: 76,
  OperationIncomplete: 77,
  CommandResultSchemaViolation: 78,
  UnknownReplWriteConcern: 79,
  RoleDataInconsistent: 80,
  NoWhereParseContext: 81,
  NoProgressMade: 82,
  RemoteResultsUnavailable: 83,
  DuplicateKeyValue: 84,
  IndexOptionsConflict: 85,
  IndexKeySpecsConflict: 86,
  CannotSplit: 87,
  SplitFailed: 88,
  NetworkTimeout: 89,
  CallbackCanceled: 90,
  ShutdownInProgress: 91,
  SecondaryAheadOfPrimary: 92,
  InvalidReplicaSetConfig: 93,
  NotYetInitialized: 94,
  NotSecondary: 95,
  OperationFailed: 96,
  NoProjectionFound: 97,
  DBPathInUse: 98,
  WriteConcernNotDefined: 99,
  CannotSatisfyWriteConcern: 100,
  OutdatedClient: 101,
  IncompatibleAuditMetadata: 102,
  NewReplicaSetConfigurationIncompatible: 103,
  NodeNotElectable: 104,
  IncompatibleShardingMetadata: 105,
  DistributedClockSkewed: 106,
  LockFailed: 107,
  InconsistentReplicaSetNames: 108,
  ConfigurationInProgress: 109,
  CannotInitializeNodeWithData: 110,
  NotExactValueField: 111,
  WriteConflict: 112,
  InitialSyncFailure: 113,
  InitialSyncOplogSourceMissing: 114,
  CommandNotSupported: 115,
  DocTooLargeForCapped: 116,
  ConflictingOperationInProgress: 117,
  NamespaceNotSharded: 118,
  InvalidSyncSource: 119,
  OplogStartMissing: 120,
  DocumentValidationFailure: 121,
  OBSOLETE_ReadAfterOptimeTimeout: 122,
  NotAReplicaSet: 123,
  IncompatibleElectionProtocol: 124,
  CommandFailed: 125,
  RPCProtocolNegotiationFailed: 126,
  UnrecoverableRollbackError: 127,
  LockNotFound: 128,
  LockStateChangeFailed: 129,
  SymbolNotFound: 130,
  RLPInitializationFailed: 131,
  ConfigServersInconsistent: 132,
  FailedToSatisfyReadPreference: 133,
  XXX_TEMP_NAME_ReadCommittedCurrentlyUnavailable: 134,
  StaleTerm: 135,
  CappedPositionLost: 136,
  IncompatibleShardingConfigVersion: 137,
  RemoteOplogStale: 138,
  JSInterpreterFailure: 139,
  NotMaster: 10107,
  DuplicateKey: 11000,
  InterruptedAtShutdown: 11600,
  Interrupted: 11601,
  BackgroundOperationInProgressForDatabase: 12586,
  BackgroundOperationInProgressForNamespace: 12587,
  PrepareConfigsFailedCode: 13104,
  DatabaseDifferCase: 13297,
  ShardKeyTooBig: 13334,
  SendStaleConfig: 13388,
  NotMasterNoSlaveOkCode: 13435,
  NotMasterOrSecondaryCode: 13436,
  OutOfDiskSpace: 14031,
  KeyTooLong: 17280,
};

function findError(code) {
  return _.findKey(errorCodes, function (error) {
    return error === code;
  });
}

module.exports = findError;
