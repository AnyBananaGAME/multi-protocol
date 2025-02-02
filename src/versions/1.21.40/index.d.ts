import { DataType, ValidTypes, BasePacket } from '@serenityjs/raknet';
import { BinaryStream, Endianness, VarInt } from '@serenityjs/binarystream';
import { CompoundTag } from '@serenityjs/nbt';
import { Buffer as Buffer$1 } from 'node:buffer';

declare enum Packet {
    Login = 1,// 1
    PlayStatus = 2,// 2
    ServerToClientHandshake = 3,// 3
    ClientToServerHandshake = 4,// 4
    Disconnect = 5,// 5
    ResourcePacksInfo = 6,// 6
    ResourcePackStack = 7,// 7
    ResourcePackClientResponse = 8,// 8
    Text = 9,// 9
    SetTime = 10,// 10
    StartGame = 11,// 11
    AddPlayer = 12,// 12
    AddEntity = 13,// 13 // TODO: Rename this to AddActor
    RemoveEntity = 14,// 14 // TODO: Rename this to RemoveActor
    AddItemActor = 15,// 15
    TakeItemActor = 17,// 17
    MoveActorAbsolute = 18,// 18
    MovePlayer = 19,// 19
    RiderJump = 20,// 20
    UpdateBlock = 21,// 21
    LevelEvent = 25,// 25
    BlockEvent = 26,// 26
    ActorEvent = 27,// 27
    MobEffect = 28,// 28
    UpdateAttributes = 29,// 29
    InventoryTransaction = 30,// 30
    MobEquipment = 31,// 31
    MobArmorEquipment = 32,// 32
    Interact = 33,// 33
    BlockPickRequest = 34,// 34
    EntityPickRequest = 35,// 35
    PlayerAction = 36,// 36
    HurtArmor = 38,// 38
    SetActorData = 39,// 39
    SetActorMotion = 40,// 40
    SetActorLink = 41,// 41
    SetHealth = 42,// 42
    SetSpawnPosition = 43,// 43
    Animate = 44,// 44
    Respawn = 45,// 45
    ContainerOpen = 46,// 46
    ContainerClose = 47,// 47
    PlayerHotbar = 48,// 48
    InventoryContent = 49,// 49
    InventorySlot = 50,// 50
    ContainerSetData = 51,// 51
    CraftingData = 52,// 52
    BlockActorData = 56,// 56
    LevelChunk = 58,// 58
    SetCommandsEnabled = 59,// 59
    SetDifficulty = 60,// 60
    ChangeDimension = 61,// 61
    SetPlayerGameType = 62,// 62
    PlayerList = 63,// 63
    LegacyTelemetryEvent = 65,// 65
    RequestChunkRadius = 69,// 69
    ChunkRadiusUpdate = 70,// 70
    GameRulesChanged = 72,// 72
    BossEvent = 74,// 74
    ShowCredits = 75,// 75
    AvailableCommands = 76,// 76
    CommandRequest = 77,// 77
    CommandBlockUpdate = 78,// 78
    CommandOutput = 79,// 79
    ResourcePackDataInfo = 82,// 82
    ResourcePackChunkData = 83,// 83
    ResourcePackChunkRequest = 84,// 84
    Transfer = 85,// 85
    PlaySound = 86,// 86
    StopSound = 87,// 87
    SetTitle = 88,// 88
    StructureBlockUpdate = 90,// 90
    PlayerSkin = 93,// 93
    BookEdit = 97,// 97
    NpcRequest = 98,// 98
    ModalFormRequest = 100,// 100
    ModalFormResponse = 101,// 101
    ServerSettingsResponse = 103,// 103
    RemoveObjective = 106,// 106
    SetDisplayObjective = 107,// 107
    SetScore = 108,// 108
    MoveActorDelta = 111,// 111
    SetScoreboardIdentity = 112,// 112
    SetLocalPlayerAsInitialized = 113,// 113
    NetworkStackLatency = 115,// 115
    SpawnParticleEffect = 118,// 118
    AvailableActorIdentifiers = 119,// 119
    NetworkChunkPublisherUpdate = 121,// 121
    BiomeDefinitionList = 122,// 122
    LevelSoundEvent = 123,// 123
    LevelEventGeneric = 124,// 124
    OnScreenTextureAnimation = 130,// 130
    Emote = 138,// 138
    CompletedUsingItem = 142,// 142
    NetworkSettings = 143,// 143
    PlayerAuthInput = 144,// 144
    CreativeContent = 145,// 145
    PlayerEnchantOptions = 146,// 146
    ItemStackRequest = 147,// 147
    ItemStackResponse = 148,// 148
    EmoteList = 152,// 152
    PacketViolationWarning = 156,// 156
    AnimateEntity = 158,// 158
    CameraShake = 159,// 159
    PlayerFog = 160,// 160
    ItemComponent = 162,// 162
    SyncActorProperty = 165,// 165
    NpcDialogue = 169,// 169
    PlayerStartItemCooldown = 176,// 176
    ScriptMessage = 177,// 177
    DimensionData = 180,// 180
    RequestPermissions = 185,// 185
    ToastRequest = 186,// 186
    UpdateAbilities = 187,// 187
    UpdateAdventureSettings = 188,// 188
    DeathInfo = 189,// 189
    RequestNetworkSettings = 193,// 193
    UpdateClientInputLocks = 196,// 196
    CameraPresetsPacket = 198,// 198
    UnlockedRecipes = 199,// 199
    CameraInstructions = 300,// 300
    TrimData = 302,// 302
    OpenSign = 303,// 303
    SetPlayerInventoryOptions = 307,// 307
    SetHud = 308,// 308
    AwardAchievement = 309,// 309
    ClientboundCloseForm = 310,// 310
    ServerboundLoadingScreenPacket = 312,// 312
    CurrentStructureFeature = 314,// 314
    ServerboundDiagnosticPacket = 315
}

declare enum DisconnectReason {
    Unknown = 0,
    CantConnectNoInternet = 1,
    NoPermissions = 2,
    UnrecoverableError = 3,
    ThirdPartyBlocked = 4,
    ThirdPartyNoInternet = 5,
    ThirdPartyBadIp = 6,
    ThirdPartyNoServerOrServerLocked = 7,
    VersionMismatch = 8,
    SkinIssue = 9,
    InviteSessionNotFound = 10,
    EduLevelSettingsMissing = 11,
    LocalServerNotFound = 12,
    LegacyDisconnect = 13,
    UserLeaveGameAttempted = 14,
    PlatformLockedSkinsError = 15,
    RealmsWorldUnassigned = 16,
    RealmsServerCantConnect = 17,
    RealmsServerHidden = 18,
    RealmsServerDisabledBeta = 19,
    RealmsServerDisabled = 20,
    CrossPlatformDisallowed = 21,
    CantConnect = 22,
    SessionNotFound = 23,
    ClientSettingsIncompatibleWithServer = 24,
    ServerFull = 25,
    InvalidPlatformSkin = 26,
    EditionVersionMismatch = 27,
    EditionMismatch = 28,
    LevelNewerThanExeVersion = 29,
    NoFailOccurred = 30,
    BannedSkin = 31,
    Timeout = 32,
    ServerNotFound = 33,
    OutdatedServer = 34,
    OutdatedClient = 35,
    NoPremiumPlatform = 36,
    MultiplayerDisabled = 37,
    NoWifi = 38,
    WorldCorruption = 39,
    NoReason = 40,
    Disconnected = 41,
    InvalidPlayer = 42,
    LoggedInOtherLocation = 43,
    ServerIdConflict = 44,
    NotAllowed = 45,
    NotAuthenticated = 46,
    InvalidTenant = 47,
    UnknownPacket = 48,
    UnexpectedPacket = 49,
    InvalidCommandRequestPacket = 50,
    HostSuspended = 51,
    LoginPacketNoRequest = 52,
    LoginPacketNoCert = 53,
    MissingClient = 54,
    Kicked = 55,
    KickedForExploit = 56,
    KickedForIdle = 57,
    ResourcePackProblem = 58,
    IncompatiblePack = 59,
    OutOfStorage = 60,
    InvalidLevel = 61,
    DisconnectPacketDeprecated = 62,
    BlockMismatch = 63,
    InvalidHeights = 64,
    InvalidWidths = 65,
    ConnectionLost = 66,
    ZombieConnection = 67,
    Shutdown = 68,
    ReasonNotSet = 69,
    LoadingStateTimeout = 70,
    ResourcePackLoadingFailed = 71,
    SearchingForSessionLoadingScreenFailed = 72,
    ConnProtocolVersion = 73,
    SubsystemStatusError = 74,
    EmptyAuthFromDiscovery = 75,
    EmptyUrlFromDiscovery = 76,
    ExpiredAuthFromDiscovery = 77,
    UnknownSignalServiceSignInFailure = 78,
    XblJoinLobbyFailure = 79,
    UnspecifiedClientInstanceDisconnection = 80,
    ConnSessionNotFound = 81,
    ConnCreatePeerConnection = 82,
    ConnIce = 83,
    ConnConnectRequest = 84,
    ConnConnectResponse = 85,
    ConnNegotiationTimeout = 86,
    ConnInactivityTimeout = 87,
    StaleConnectionBeingReplaced = 88,
    RealmsSessionNotFound = 89,
    BadPacket = 90
}

declare enum CompressionMethod {
    Zlib = 0,
    Snappy = 1,
    NotPresent = 2,
    None = 255
}

declare enum PlayStatus {
    LoginSuccess = 0,
    FailedClient = 1,
    FailedServer = 2,
    PlayerSpawn = 3,
    FailedInvalidTenant = 4,
    FailedVanillaEdu = 5,
    FailedIncompatible = 6,
    FailedServerFull = 7,
    FailedEditorVanillaMismatch = 8,
    FailedVanillaEditorMismatch = 9
}

declare enum ResourcePackResponse {
    None = 0,
    Refused = 1,
    SendPacks = 2,
    HaveAllPacks = 3,
    Completed = 4
}

declare enum Gamemode {
    Survival = 0,
    Creative = 1,
    Adventure = 2,
    SurvivalSpectator = 3,
    CreativeSpectator = 4,
    Fallback = 5,
    Spectator = 6
}

declare enum Difficulty {
    Peaceful = 0,
    Easy = 1,
    Normal = 2,
    Hard = 3
}

declare enum GameRuleType {
    Bool = 1,
    Int = 2,
    Float = 3
}

declare enum PermissionLevel {
    Visitor = 0,
    Member = 1,
    Operator = 2,
    Custom = 3
}

declare enum MoveMode {
    Normal = 0,
    Reset = 1,
    Teleport = 2,
    Rotation = 3
}

declare enum PlayerListAction {
    Add = 0,
    Remove = 1
}

declare enum ViolationType {
    Malformed = 0
}

declare enum ViolationSeverity {
    Warning = 0,
    FanalWarning = 1,
    Terminating = 2
}

declare enum CommandPermissionLevel {
    Normal = 0,
    Operator = 1,
    Automation = 2,
    Host = 3,
    Owner = 4,
    Internal = 5
}

declare enum CommandParameterType {
    Int = 1,
    Float = 3,
    Value = 4,
    WildcardInt = 5,
    Operator = 6,
    CompareOperator = 7,
    Target = 8,
    WildcardTarget = 10,
    Filepath = 17,
    FullIntegerRange = 23,
    EquipmentSlot = 47,
    String = 48,
    IntPosition = 64,
    FloatPosition = 65,
    Message = 67,
    RawText = 70,
    Json = 74,
    BlockState = 84,
    Command = 87
}

declare enum AbilityLayerType {
    CustomCache = 0,
    Base = 1,
    Spectator = 2,
    Commands = 3,
    Editor = 4
}

declare enum AbilityIndex {
    Build = 0,
    Mine = 1,
    DoorsAndSwitches = 2,
    OpenContainers = 3,
    AttackPlayers = 4,
    AttackMobs = 5,
    OperatorCommands = 6,
    Teleport = 7,
    Invulnerable = 8,
    Flying = 9,
    MayFly = 10,
    InstantBuild = 11,
    Lightning = 12,
    FlySpeed = 13,
    WalkSpeed = 14,
    Muted = 15,
    WorldBuilder = 16,
    NoClip = 17,
    PrivilegedBuilder = 18,
    Count = 19
}

declare enum TextPacketType {
    Raw = 0,
    Chat = 1,
    Translation = 2,
    Popup = 3,
    JukeboxPopup = 4,
    Tip = 5,
    System = 6,
    Whisper = 7,
    Announcement = 8,
    JsonWhisper = 9,
    Json = 10,
    JsonAnnouncement = 11
}

declare enum TitleType {
    Clear = 0,
    Reset = 1,
    Title = 2,
    Subtitle = 3,
    Actionbar = 4,
    Times = 5,
    TitleTextObject = 6,
    SubtitleTextObject = 7,
    ActionbarTextObject = 8
}

declare enum InteractAction {
    Invalid = 0,
    StopRiding = 3,
    InteractUpdate = 4,
    NpcOpen = 5,
    OpenInventory = 6
}

declare enum ContainerId {
    None = -1,
    Inventory = 0,
    First = 1,
    Last = 100,
    Offhand = 119,
    Armor = 120,
    SelectionSlots = 122,
    Ui = 124,
    Registry = 125
}

declare enum ContainerName {
    AnvilInput = 0,
    AnvilMaterial = 1,
    AnvilResult = 2,
    SmithingTableInput = 3,
    SmithingTableMaterial = 4,
    SmithingTableResult = 5,
    Armor = 6,
    Container = 7,
    BeaconPayment = 8,
    BrewingInput = 9,
    BrewingResult = 10,
    BrewingFuel = 11,
    HotbarAndInventory = 12,
    CraftingInput = 13,
    CraftingOutput = 14,
    RecipeConstruction = 15,
    RecipeNature = 16,
    RecipeItems = 17,
    RecipeSearch = 18,
    RecipeSearchBar = 19,
    RecipeEquipment = 20,
    RecipeBook = 21,
    EnchantingInput = 22,
    EnchantingLapis = 23,
    FurnaceFuel = 24,
    FurnaceIngredient = 25,
    FurnaceOutput = 26,
    HorseEquip = 27,
    Hotbar = 28,
    Inventory = 29,
    Shulker = 30,
    TradeIngredient1 = 31,
    TradeIngredient2 = 32,
    TradeResult = 33,
    Offhand = 34,
    CompCreateInput = 35,
    CompCreateOutput = 36,
    ElementConstructOutput = 37,
    MatReduceInput = 38,
    MatReduceOutput = 39,
    LabTableInput = 40,
    LoomInput = 41,
    LoomDye = 42,
    LoomMaterial = 43,
    LoomResult = 44,
    BlastFurnaceIngredient = 45,
    SmokerIngredient = 46,
    Trade2Ingredient1 = 47,
    Trade2Ingredient2 = 48,
    Trade2Result = 49,
    GrindstoneInput = 50,
    GrindstoneAdditional = 51,
    GrindstoneResult = 52,
    StonecutterInput = 53,
    StonecutterResult = 54,
    CartographyInput = 55,
    CartographyAdditional = 56,
    CartographyResult = 57,
    Barrel = 58,
    Cursor = 59,
    CreativeOutput = 60,
    SmithingTableTemplate = 61,
    Crafter = 62,
    Dynamic = 63
}

declare enum ContainerType {
    None = -9,
    Inventory = -1,
    Container = 0,
    Workbench = 1,
    Furnace = 2,
    Enchantment = 3,
    BrewingStand = 4,
    Anvil = 5,
    Dispenser = 6,
    Dropper = 7,
    Hopper = 8,
    Cauldron = 9,
    MinecartChest = 10,
    MinecartHopper = 11,
    Horse = 12,
    Beacon = 13,
    StructureEditor = 14,
    Trading = 15,
    CommandBlock = 16,
    Jukebox = 17,
    Armor = 18,
    Hand = 19,
    CompoundCreator = 20,
    ElementConstructor = 21,
    MaterialReducer = 22,
    LabTable = 23,
    Loom = 24,
    Lectern = 25,
    Grindstone = 26,
    BlastFurnace = 27,
    Smoker = 28,
    Stonecutter = 29,
    Cartography = 30,
    Hud = 31,
    JigsawEditor = 32,
    SmithingTable = 33,
    ChestBoat = 34,
    DecoratedPot = 35,
    Crafter = 36
}

declare enum PlayerActionType {
    Unknown = -1,
    StartDestroyBlock = 0,
    AbortDestroyBlock = 1,
    StopDestroyBlock = 2,
    GetUpdatedBlock = 3,
    DropItem = 4,
    StartSleeping = 5,
    StopSleeping = 6,
    Respawn = 7,
    StartJump = 8,
    StartSprinting = 9,
    StopSprinting = 10,
    StartSneaking = 11,
    StopSneaking = 12,
    CreativeDestroyBlock = 13,
    ChangeDimensionAck = 14,
    StartGliding = 15,
    StopGliding = 16,
    DenyDestroyBlock = 17,
    CrackBlock = 18,
    ChangeSkin = 19,
    DEPRECATED_UpdatedEnchantingSeed = 20,
    StartSwimming = 21,
    StopSwimming = 22,
    StartSpinAttack = 23,
    StopSpinAttack = 24,
    InteractWithBlock = 25,
    PredictDestroyBlock = 26,
    ContinueDestroyBlock = 27,
    StartItemUseOn = 28,
    StopItemUseOn = 29,
    HandledTeleport = 30,
    MissedSwing = 31,
    StartCrawling = 32,
    StopCrawling = 33,
    StartFlying = 34,
    StopFlying = 35,
    ClientAckServerData = 36,
    StartUsingItem = 37,
    Count = 38
}

declare enum AttributeName {
    Absorption = "minecraft:absorption",
    AttackDamage = "minecraft:attack_damage",
    FallDamage = "minecraft:fall_damage",
    FollowRange = "minecraft:follow_range",
    Health = "minecraft:health",
    HorseJumpStrength = "minecraft:horse.jump_strength",
    KnockbackResistence = "minecraft:knockback_resistance",
    LavaMovement = "minecraft:lava_movement",
    Luck = "minecraft:luck",
    Movement = "minecraft:movement",
    PlayerExhaustion = "minecraft:player.exhaustion",
    PlayerExperience = "minecraft:player.experience",
    PlayerHunger = "minecraft:player.hunger",
    PlayerLevel = "minecraft:player.level",
    PlayerSaturation = "minecraft:player.saturation",
    UnderwaterMovement = "minecraft:underwater_movement",
    ZombieSpawnReinforcements = "minecraft:zombie.spawn_reinforcements"
}

declare enum ComplexInventoryTransaction {
    NormalTransaction = 0,
    InventoryMismatch = 1,
    ItemUseTransaction = 2,
    ItemUseOnEntityTransaction = 3,
    ItemReleaseTransaction = 4
}

declare enum TransactionSourceType {
    Container = 0,
    Global = 1,
    WorldInteraction = 2,
    Creative = 3,
    CraftSlot = 100,
    Craft = 9999
}

declare enum DeviceOS {
    Undefined = 0,
    Android = 1,
    Ios = 2,
    MacOS = 3,
    FireOS = 4,
    GearVR = 5,
    Hololens = 6,
    Win10 = 7,
    Win32 = 8,
    Dedicated = 9,
    TVOS = 10,
    Orbis = 11,
    Switch = 12,
    Xbox = 13,
    WindowsPhone = 14,
    Linux = 15
}

declare enum RespawnState {
    ServerSearchingForSpawn = 0,
    ServerReadyToSpawn = 1,
    ClientReadyToSpawn = 2
}

declare enum ModalFormType {
    Action = "form",
    Message = "modal",
    Modal = "custom_form"
}

declare enum UpdateBlockLayerType {
    Normal = 0,
    WaterLogged = 1
}

declare enum UpdateBlockFlagsType {
    None = 0,
    Neighbors = 1,
    Network = 2,
    NoGraphic = 4,
    Priority = 8
}

declare enum DimensionType {
    Overworld = 0,
    Nether = 1,
    End = 2
}

declare enum ModalFormCanceledReason {
    Closed = 0,
    Busy = 1
}

declare enum ItemStackRequestActionType {
    Take = 0,
    Place = 1,
    Swap = 2,
    Drop = 3,
    Destroy = 4,
    Consume = 5,
    Create = 6,
    PlaceInItemContainer_DEPRECATED = 7,
    TakeFromItemContainer_DEPRECATED = 8,
    ScreenLabTableCombine = 9,
    ScreenBeaconPayment = 10,
    ScreenHUDMineBlock = 11,
    CraftRecipe = 12,
    CraftRecipeAuto = 13,
    CraftCreative = 14,
    CraftRecipeOptional = 15,
    CraftRepairAndDisenchant = 16,
    CraftLoom = 17,
    CraftNonImplemented_DEPRECATEDASKTYLAING = 18,
    CraftResults_DEPRECATEDASKTYLAING = 19,
    ifdef = 20,
    TEST_INFRASTRUCTURE_ENABLED = 21,
    Test = 22,
    endif = 23
}

declare enum ItemStackStatus {
    Ok = 0,
    Error = 1
}

declare enum AbilitySetId {
    AttackMobs = "attack_mobs",
    AttackPlayers = "attack_players",
    Build = "build",
    Count = "count",
    DoorsAndSwitches = "doors_and_switches",
    FlySpeed = "fly_speed",
    Flying = "flying",
    InstantBuild = "instant_build",
    Invulnerable = "invulnerable",
    Lightning = "lightning",
    MayFly = "may_fly",
    Mine = "mine",
    Muted = "muted",
    NoClip = "no_clip",
    OpenContainers = "open_containers",
    OperatorCommands = "operator_commands",
    PrivilegedBuilder = "privileged_builder",
    Teleport = "teleport",
    WalkSpeed = "walk_speed",
    WorldBuilder = "world_builder"
}

declare enum AnimateId {
    None = 0,
    SwingArm = 1,
    Unknown = 2,
    WakeUp = 3,
    CriticalHit = 4,
    MagicCriticalHit = 5,
    RowRight = 128,
    RowLeft = 129
}

declare enum LevelEvent {
    Undefined = 0,
    SoundClick = 1000,
    SoundClickFail = 1001,
    SoundLaunch = 1002,
    SoundOpenDoor = 1003,
    SoundFizz = 1004,
    SoundFuse = 1005,
    SoundPlayRecording = 1006,
    SoundGhastWarning = 1007,
    SoundGhastFireball = 1008,
    SoundBlazeFireball = 1009,
    SoundZombieWoodenDoor = 1010,
    SoundZombieDoorCrash = 1012,
    SoundZombieInfected = 1016,
    SoundZombieConverted = 1017,
    SoundEndermanTeleport = 1018,
    SoundAnvilBroken = 1020,
    SoundAnvilUsed = 1021,
    SoundAnvilLand = 1022,
    SoundInfinityArrowPickup = 1030,
    SoundTeleportEnderPearl = 1032,
    SoundAddItem = 1040,
    SoundItemFrameBreak = 1041,
    SoundItemFramePlace = 1042,
    SoundItemFrameRemoveItem = 1043,
    SoundItemFrameRotateItem = 1044,
    SoundExperienceOrbPickup = 1051,
    SoundTotemUsed = 1052,
    SoundArmorStandBreak = 1060,
    SoundArmorStandHit = 1061,
    SoundArmorStandLand = 1062,
    SoundArmorStandPlace = 1063,
    SoundPointedDripstoneLand = 1064,
    SoundDyeUsed = 1065,
    SoundInkSacUsed = 1066,
    SoundAmethystResonate = 1067,
    QueueCustomMusic = 1900,
    PlayCustomMusic = 1901,
    StopCustomMusic = 1902,
    SetMusicVolume = 1903,
    ParticlesShoot = 2000,
    ParticlesDestroyBlock = 2001,
    ParticlesPotionSplash = 2002,
    ParticlesEyeOfEnderDeath = 2003,
    ParticlesMobBlockSpawn = 2004,
    ParticleCropGrowth = 2005,
    ParticleSoundGuardianGhost = 2006,
    ParticleDeathSmoke = 2007,
    ParticleDenyBlock = 2008,
    ParticleGenericSpawn = 2009,
    ParticlesDragonEgg = 2010,
    ParticlesCropEaten = 2011,
    ParticlesCrit = 2012,
    ParticlesTeleport = 2013,
    ParticlesCrackBlock = 2014,
    ParticlesBubble = 2015,
    ParticlesEvaporate = 2016,
    ParticlesDestroyArmorStand = 2017,
    ParticlesBreakingEgg = 2018,
    ParticleDestroyEgg = 2019,
    ParticlesEvaporateWater = 2020,
    ParticlesDestroyBlockNoSound = 2021,
    ParticlesKnockbackRoar = 2022,
    ParticlesTeleportTrail = 2023,
    ParticlesPointCloud = 2024,
    ParticlesExplosion = 2025,
    ParticlesBlockExplosion = 2026,
    ParticlesVibrationSignal = 2027,
    ParticlesDripstoneDrip = 2028,
    ParticlesFizzEffect = 2029,
    WaxOn = 2030,
    WaxOff = 2031,
    Scrape = 2032,
    ParticlesElectricSpark = 2033,
    ParticleTurtleEgg = 2034,
    ParticlesSculkShriek = 2035,
    SculkCatalystBloom = 2036,
    SculkCharge = 2037,
    SculkChargePop = 2038,
    SonicExplosion = 2039,
    DustPlume = 2040,
    StartRaining = 3001,
    StartThunderstorm = 3002,
    StopRaining = 3003,
    StopThunderstorm = 3004,
    GlobalPause = 3005,
    SimTimeStep = 3006,
    SimTimeScale = 3007,
    ActivateBlock = 3500,
    CauldronExplode = 3501,
    CauldronDyeArmor = 3502,
    CauldronCleanArmor = 3503,
    CauldronFillPotion = 3504,
    CauldronTakePotion = 3505,
    CauldronFillWater = 3506,
    CauldronTakeWater = 3507,
    CauldronAddDye = 3508,
    CauldronCleanBanner = 3509,
    CauldronFlush = 3510,
    AgentSpawnEffect = 3511,
    CauldronFillLava = 3512,
    CauldronTakeLava = 3513,
    CauldronFillPowderSnow = 3514,
    CauldronTakePowderSnow = 3515,
    StartBlockCracking = 3600,
    StopBlockCracking = 3601,
    UpdateBlockCracking = 3602,
    ParticlesCrackBlockDown = 3603,
    ParticlesCrackBlockUp = 3604,
    ParticlesCrackBlockNorth = 3605,
    ParticlesCrackBlockSouth = 3606,
    ParticlesCrackBlockWest = 3607,
    ParticlesCrackBlockEast = 3608,
    ParticlesShootWhiteSmoke = 3609,
    ParticlesBreezeWindExplosion = 3610,
    ParticlesTrialSpawnerDetection = 3611,
    ParticlesTrialSpawnerSpawning = 3612,
    ParticlesTrialSpawnerEjecting = 3613,
    ParticlesWindExplosion = 3614,
    AllPlayersSleeping = 3615,
    deprecated = 3616,
    SleepingPlayers = 9801,
    JumpPrevented = 9810,
    AnimationVaultActivate = 9811,
    AnimationVaultDeactivate = 9812,
    AnimationVaultEjectItem = 9813,
    ParticleLegacyEvent = 16384
}

declare enum LevelSoundEvent {
    ItemUseOn = 0,
    Hit = 1,
    Step = 2,
    Fly = 3,
    Jump = 4,
    Break = 5,
    Place = 6,
    HeavyStep = 7,
    Gallop = 8,
    Fall = 9,
    Ambient = 10,
    AmbientBaby = 11,
    AmbientInWater = 12,
    Breathe = 13,
    Death = 14,
    DeathInWater = 15,
    DeathToZombie = 16,
    Hurt = 17,
    HurtInWater = 18,
    Mad = 19,
    Boost = 20,
    Bow = 21,
    SquishBig = 22,
    SquishSmall = 23,
    FallBig = 24,
    FallSmall = 25,
    Splash = 26,
    Fizz = 27,
    Flap = 28,
    Swim = 29,
    Drink = 30,
    Eat = 31,
    Takeoff = 32,
    Shake = 33,
    Plop = 34,
    Land = 35,
    Saddle = 36,
    Armor = 37,
    ArmorPlace = 38,
    AddChest = 39,
    Throw = 40,
    Attack = 41,
    AttackNoDamage = 42,
    AttackStrong = 43,
    Warn = 44,
    Shear = 45,
    Milk = 46,
    Thunder = 47,
    Explode = 48,
    Fire = 49,
    Ignite = 50,
    Fuse = 51,
    Stare = 52,
    Spawn = 53,
    Shoot = 54,
    BreakBlock = 55,
    Launch = 56,
    Blast = 57,
    LargeBlast = 58,
    Twinkle = 59,
    Remedy = 60,
    Unfect = 61,
    LevelUp = 62,
    BowHit = 63,
    BulletHit = 64,
    ExtinguishFire = 65,
    ItemFizz = 66,
    ChestOpen = 67,
    ChestClosed = 68,
    ShulkerBoxOpen = 69,
    ShulkerBoxClosed = 70,
    EnderChestOpen = 71,
    EnderChestClosed = 72,
    PowerOn = 73,
    PowerOff = 74,
    Attach = 75,
    Detach = 76,
    Deny = 77,
    Tripod = 78,
    Pop = 79,
    DropSlot = 80,
    Note = 81,
    Thorns = 82,
    PistonIn = 83,
    PistonOut = 84,
    Portal = 85,
    Water = 86,
    LavaPop = 87,
    Lava = 88,
    Burp = 89,
    BucketFillWater = 90,
    BucketFillLava = 91,
    BucketEmptyWater = 92,
    BucketEmptyLava = 93,
    EquipChain = 94,
    EquipDiamond = 95,
    EquipGeneric = 96,
    EquipGold = 97,
    EquipIron = 98,
    EquipLeather = 99,
    EquipElytra = 100,
    Record13 = 101,
    RecordCat = 102,
    RecordBlocks = 103,
    RecordChirp = 104,
    RecordFar = 105,
    RecordMall = 106,
    RecordMellohi = 107,
    RecordStal = 108,
    RecordStrad = 109,
    RecordWard = 110,
    Record11 = 111,
    RecordWait = 112,
    RecordNull = 113,
    Flop = 114,
    GuardianCurse = 115,
    MobWarning = 116,
    MobWarningBaby = 117,
    Teleport = 118,
    ShulkerOpen = 119,
    ShulkerClose = 120,
    Haggle = 121,
    HaggleYes = 122,
    HaggleNo = 123,
    HaggleIdle = 124,
    ChorusGrow = 125,
    ChorusDeath = 126,
    Glass = 127,
    PotionBrewed = 128,
    CastSpell = 129,
    PrepareAttackSpell = 130,
    PrepareSummon = 131,
    PrepareWololo = 132,
    Fang = 133,
    Charge = 134,
    TakePicture = 135,
    PlaceLeashKnot = 136,
    BreakLeashKnot = 137,
    AmbientGrowl = 138,
    AmbientWhine = 139,
    AmbientPant = 140,
    AmbientPurr = 141,
    AmbientPurreow = 142,
    DeathMinVolume = 143,
    DeathMidVolume = 144,
    ImitateBlaze = 145,
    ImitateCaveSpider = 146,
    ImitateCreeper = 147,
    ImitateElderGuardian = 148,
    ImitateEnderDragon = 149,
    ImitateEnderman = 150,
    ImitateEndermite = 151,
    ImitateEvocationIllager = 152,
    ImitateGhast = 153,
    ImitateHusk = 154,
    ImitateIllusionIllager = 155,
    ImitateMagmaCube = 156,
    ImitatePolarBear = 157,
    ImitateShulker = 158,
    ImitateSilverfish = 159,
    ImitateSkeleton = 160,
    ImitateSlime = 161,
    ImitateSpider = 162,
    ImitateStray = 163,
    ImitateVex = 164,
    ImitateVindicationIllager = 165,
    ImitateWitch = 166,
    ImitateWither = 167,
    ImitateWitherSkeleton = 168,
    ImitateWolf = 169,
    ImitateZombie = 170,
    ImitateZombiePigman = 171,
    ImitateZombieVillager = 172,
    EnderEyePlaced = 173,
    EndPortalCreated = 174,
    AnvilUse = 175,
    BottleDragonBreath = 176,
    PortalTravel = 177,
    TridentHit = 178,
    TridentReturn = 179,
    TridentRiptide_1 = 180,
    TridentRiptide_2 = 181,
    TridentRiptide_3 = 182,
    TridentThrow = 183,
    TridentThunder = 184,
    TridentHitGround = 185,
    Default = 186,
    FletchingTableUse = 187,
    ElementConstructOpen = 188,
    IceBombHit = 189,
    BalloonPop = 190,
    LTReactionIceBomb = 191,
    LTReactionBleach = 192,
    LTReactionElephantToothpaste = 193,
    LTReactionElephantToothpaste2 = 194,
    LTReactionGlowStick = 195,
    LTReactionGlowStick2 = 196,
    LTReactionLuminol = 197,
    LTReactionSalt = 198,
    LTReactionFertilizer = 199,
    LTReactionFireball = 200,
    LTReactionMagnesiumSalt = 201,
    LTReactionMiscFire = 202,
    LTReactionFire = 203,
    LTReactionMiscExplosion = 204,
    LTReactionMiscMystical = 205,
    LTReactionMiscMystical2 = 206,
    LTReactionProduct = 207,
    SparklerUse = 208,
    GlowStickUse = 209,
    SparklerActive = 210,
    ConvertToDrowned = 211,
    BucketFillFish = 212,
    BucketEmptyFish = 213,
    BubbleColumnUpwards = 214,
    BubbleColumnDownwards = 215,
    BubblePop = 216,
    BubbleUpInside = 217,
    BubbleDownInside = 218,
    HurtBaby = 219,
    DeathBaby = 220,
    StepBaby = 221,
    SpawnBaby = 222,
    Born = 223,
    TurtleEggBreak = 224,
    TurtleEggCrack = 225,
    TurtleEggHatched = 226,
    LayEgg = 227,
    TurtleEggAttacked = 228,
    BeaconActivate = 229,
    BeaconAmbient = 230,
    BeaconDeactivate = 231,
    BeaconPower = 232,
    ConduitActivate = 233,
    ConduitAmbient = 234,
    ConduitAttack = 235,
    ConduitDeactivate = 236,
    ConduitShort = 237,
    Swoop = 238,
    BambooSaplingPlace = 239,
    PreSneeze = 240,
    Sneeze = 241,
    AmbientTame = 242,
    Scared = 243,
    ScaffoldingClimb = 244,
    CrossbowLoadingStart = 245,
    CrossbowLoadingMiddle = 246,
    CrossbowLoadingEnd = 247,
    CrossbowShoot = 248,
    CrossbowQuickChargeStart = 249,
    CrossbowQuickChargeMiddle = 250,
    CrossbowQuickChargeEnd = 251,
    AmbientAggressive = 252,
    AmbientWorried = 253,
    CantBreed = 254,
    ShieldBlock = 255,
    LecternBookPlace = 256,
    GrindstoneUse = 257,
    Bell = 258,
    CampfireCrackle = 259,
    Roar = 260,
    Stun = 261,
    SweetBerryBushHurt = 262,
    SweetBerryBushPick = 263,
    CartographyTableUse = 264,
    StonecutterUse = 265,
    ComposterEmpty = 266,
    ComposterFill = 267,
    ComposterFillLayer = 268,
    ComposterReady = 269,
    BarrelOpen = 270,
    BarrelClose = 271,
    RaidHorn = 272,
    LoomUse = 273,
    AmbientInRaid = 274,
    UICartographyTableUse = 275,
    UIStonecutterUse = 276,
    UILoomUse = 277,
    SmokerUse = 278,
    BlastFurnaceUse = 279,
    SmithingTableUse = 280,
    Screech = 281,
    Sleep = 282,
    FurnaceUse = 283,
    MooshroomConvert = 284,
    MilkSuspiciously = 285,
    Celebrate = 286,
    JumpPrevent = 287,
    AmbientPollinate = 288,
    BeehiveDrip = 289,
    BeehiveEnter = 290,
    BeehiveExit = 291,
    BeehiveWork = 292,
    BeehiveShear = 293,
    HoneybottleDrink = 294,
    AmbientCave = 295,
    Retreat = 296,
    ConvertToZombified = 297,
    Admire = 298,
    StepLava = 299,
    Tempt = 300,
    Panic = 301,
    Angry = 302,
    AmbientMoodWarpedForest = 303,
    AmbientMoodSoulsandValley = 304,
    AmbientMoodNetherWastes = 305,
    AmbientMoodBasaltDeltas = 306,
    AmbientMoodCrimsonForest = 307,
    RespawnAnchorCharge = 308,
    RespawnAnchorDeplete = 309,
    RespawnAnchorSetSpawn = 310,
    RespawnAnchorAmbient = 311,
    SoulEscapeQuiet = 312,
    SoulEscapeLoud = 313,
    RecordPigstep = 314,
    LinkCompassToLodestone = 315,
    UseSmithingTable = 316,
    EquipNetherite = 317,
    AmbientLoopWarpedForest = 318,
    AmbientLoopSoulsandValley = 319,
    AmbientLoopNetherWastes = 320,
    AmbientLoopBasaltDeltas = 321,
    AmbientLoopCrimsonForest = 322,
    AmbientAdditionWarpedForest = 323,
    AmbientAdditionSoulsandValley = 324,
    AmbientAdditionNetherWastes = 325,
    AmbientAdditionBasaltDeltas = 326,
    AmbientAdditionCrimsonForest = 327,
    SculkSensorPowerOn = 328,
    SculkSensorPowerOff = 329,
    BucketFillPowderSnow = 330,
    BucketEmptyPowderSnow = 331,
    PointedDripstoneCauldronDripWater = 332,
    PointedDripstoneCauldronDripLava = 333,
    PointedDripstoneDripWater = 334,
    PointedDripstoneDripLava = 335,
    CaveVinesPickBerries = 336,
    BigDripleafTiltDown = 337,
    BigDripleafTiltUp = 338,
    CopperWaxOn = 339,
    CopperWaxOff = 340,
    Scrape = 341,
    PlayerHurtDrown = 342,
    PlayerHurtOnFire = 343,
    PlayerHurtFreeze = 344,
    UseSpyglass = 345,
    StopUsingSpyglass = 346,
    AmethystBlockChime = 347,
    AmbientScreamer = 348,
    HurtScreamer = 349,
    DeathScreamer = 350,
    MilkScreamer = 351,
    JumpToBlock = 352,
    PreRam = 353,
    PreRamScreamer = 354,
    RamImpact = 355,
    RamImpactScreamer = 356,
    SquidInkSquirt = 357,
    GlowSquidInkSquirt = 358,
    ConvertToStray = 359,
    CakeAddCandle = 360,
    ExtinguishCandle = 361,
    AmbientCandle = 362,
    BlockClick = 363,
    BlockClickFail = 364,
    SculkCatalystBloom = 365,
    SculkShriekerShriek = 366,
    NearbyClose = 367,
    NearbyCloser = 368,
    NearbyClosest = 369,
    Agitated = 370,
    RecordOtherside = 371,
    Tongue = 372,
    CrackIronGolem = 373,
    RepairIronGolem = 374,
    Listening = 375,
    Heartbeat = 376,
    HornBreak = 377,
    SculkSpread = 379,
    SculkCharge = 380,
    SculkSensorPlace = 381,
    SculkShriekerPlace = 382,
    GoatCall0 = 383,
    GoatCall1 = 384,
    GoatCall2 = 385,
    GoatCall3 = 386,
    GoatCall4 = 387,
    GoatCall5 = 388,
    GoatCall6 = 389,
    GoatCall7 = 390,
    ImitateWarden = 426,
    ListeningAngry = 427,
    Item_Given = 428,
    Item_Taken = 429,
    Disappeared = 430,
    Reappeared = 431,
    DrinkMilk = 432,
    FrogspawnHatched = 433,
    LaySpawn = 434,
    FrogspawnBreak = 435,
    SonicBoom = 436,
    SonicCharge = 437,
    Item_Thrown = 438,
    Record5 = 439,
    ConvertToFrog = 440,
    RecordPlaying = 441,
    EnchantingTableUse = 442,
    StepSand = 443,
    DashReady = 444,
    BundleDropContents = 445,
    BundleInsert = 446,
    BundleRemoveOne = 447,
    PressurePlateClickOff = 448,
    PressurePlateClickOn = 449,
    ButtonClickOff = 450,
    ButtonClickOn = 451,
    DoorOpen = 452,
    DoorClose = 453,
    TrapdoorOpen = 454,
    TrapdoorClose = 455,
    FenceGateOpen = 456,
    FenceGateClose = 457,
    Insert = 458,
    Pickup = 459,
    InsertEnchanted = 460,
    PickupEnchanted = 461,
    Brush = 462,
    BrushCompleted = 463,
    ShatterDecoratedPot = 464,
    BreakDecoratedPot = 465,
    SnifferEggCrack = 466,
    SnifferEggHatched = 467,
    WaxedSignInteractFail = 468,
    RecordRelic = 469,
    Bump = 470,
    PumpkinCarve = 471,
    ConvertHuskToZombie = 472,
    PigDeath = 473,
    HoglinConvertToZombified = 474,
    AmbientUnderwaterEnter = 475,
    AmbientUnderwaterExit = 476,
    BottleFill = 477,
    BottleEmpty = 478,
    CrafterCraft = 479,
    CrafterFail = 480,
    DecoratedPotInsert = 481,
    DecoratedPotInsertFail = 482,
    CrafterDisableSlot = 483,
    CopperBulbTurnOn = 490,
    CopperBulbTurnOff = 491,
    Undefined = 492
}

declare enum PackType {
    Addon = 1,
    Cached = 2,
    CopyProtected = 3,
    Behaviour = 4,
    PersonaPiece = 5,
    Resources = 6,
    Skins = 7,
    WorldTemplate = 8
}

declare enum InventorySourceType {
    ContainerInventory = 0,
    GlobalInventory = 1,
    WorldInteraction = 2,
    CreativeInventory = 3,
    NonImplementedFeatureTODO = 99999
}

declare enum ItemUseInventoryTransactionType {
    Place = 0,
    Use = 1,
    Destroy = 2
}

declare enum ItemUseOnEntityInventoryTransactionType {
    Interact = 0,
    Attack = 1
}

declare enum ItemReleaseInventoryTransactionType {
    Release = 0,
    Consume = 1
}

declare enum BlockFace {
    Bottom = 0,
    Top = 1,
    North = 2,
    South = 3,
    West = 4,
    East = 5
}

declare enum ObjectiveSortOrder {
    Ascending = 0,
    Descending = 1
}

declare enum DisplaySlotType {
    List = "slot",
    Sidebar = "sidebar",
    BelowName = "belowname"
}

declare enum ScoreboardIdentityAction {
    Register = 0,
    Clear = 1
}

declare enum HudElement {
    PaperDoll = 0,
    Armor = 1,
    ToolTips = 2,
    TouchControls = 3,
    Crosshair = 4,
    HotBar = 5,
    Health = 6,
    ProgressBar = 7,
    Hunger = 8,
    AirBubbles = 9,
    HorseHealth = 10,
    StatusEffects = 11,
    ItemText = 12,
    Count = 13
}

declare enum HudVisibility {
    Hide = 0,
    Reset = 1,
    Count = 2
}

declare enum Enchantment {
    Protection = 0,
    FireProtection = 1,
    FeatherFalling = 2,
    BlastProtection = 3,
    ProjectileProtection = 4,
    Thorns = 5,
    Respiration = 6,
    DepthStrider = 7,
    AquaAffinity = 8,
    Sharpness = 9,
    Smite = 10,
    BaneOfArthropods = 11,
    Knockback = 12,
    FireAspect = 13,
    Looting = 14,
    Efficiency = 15,
    SilkTouch = 16,
    Unbreaking = 17,
    Fortune = 18,
    Power = 19,
    Punch = 20,
    Flame = 21,
    Infinity = 22,
    LuckOfTheSea = 23,
    Lure = 24,
    FrostWalker = 25,
    Mending = 26,
    CurseOfBinding = 27,
    CurseOfVanishing = 28,
    Impaling = 29,
    Riptide = 30,
    Loyalty = 31,
    Channeling = 32,
    Multishot = 33,
    Piercing = 34,
    QuickCharge = 35,
    SoulSpeed = 36,
    SweepingEdge = 37,
    None = 38,
    Unknown = 39
}

declare enum BossEventUpdateType {
    Add = 0,
    PlayerAdded = 1,
    Remove = 2,
    PlayerRemoved = 3,
    UpdatePercent = 4,
    UpdateName = 5,
    UpdateProperties = 6,
    UpdateStyle = 7,
    Query = 8
}

declare enum BossEventColor {
    Pink = 0,
    Blue = 1,
    Red = 2,
    Green = 3,
    Yellow = 4,
    Magenta = 5,
    Purple = 6,
    White = 7
}

declare enum NpcDialogueAction {
    Open = 0,
    Close = 1
}

declare enum ActorEventIds {
    JUMP = 1,
    HURT_ANIMATION = 2,
    DEATH_ANIMATION = 3,
    ARM_SWING = 4,
    STOP_ATTACK = 5,
    TAME_FAIL = 6,
    TAME_SUCCESS = 7,
    SHAKE_WET = 8,
    USE_ITEM = 9,
    EAT_GRASS_ANIMATION = 10,
    FISH_HOOK_BUBBLE = 11,
    FISH_HOOK_POSITION = 12,
    FISH_HOOK_HOOK = 13,
    FISH_HOOK_TEASE = 14,
    SQUID_INK_CLOUD = 15,
    ZOMBIE_VILLAGER_CURE = 16,
    PLAY_AMBIENT_SOUND = 17,
    RESPAWN = 18,
    IRON_GOLEM_OFFER_FLOWER = 19,
    IRON_GOLEM_WITHDRAW_FLOWER = 20,
    LOVE_PARTICLES = 21,
    VILLAGER_ANGRY = 22,
    VILLAGER_HAPPY = 23,
    WITCH_SPELL_PARTICLES = 24,
    FIREWORK_PARTICLES = 25,
    IN_LOVE_PARTICLES = 26,
    SILVERFISH_SPAWN_ANIMATION = 27,
    GUARDIAN_ATTACK = 28,
    WITCH_DRINK_POTION = 29,
    WITCH_THROW_POTION = 30,
    MINECART_TNT_PRIME_FUSE = 31,
    CREEPER_PRIME_FUSE = 32,
    AIR_SUPPLY_EXPIRED = 33,
    PLAYER_ADD_XP_LEVELS = 34,
    ELDER_GUARDIAN_CURSE = 35,
    AGENT_ARM_SWING = 36,
    ENDER_DRAGON_DEATH = 37,
    DUST_PARTICLES = 38,
    ARROW_SHAKE = 39,
    EATING_ITEM = 57,
    BABY_ANIMAL_FEED = 60,
    DEATH_SMOKE_CLOUD = 61,
    COMPLETE_TRADE = 62,
    REMOVE_LEASH = 63,
    CARAVAN_UPDATED = 64,
    CONSUME_TOTEM = 65,
    PLAYER_CHECK_TREASURE_HUNTER_ACHIEVEMENT = 66,
    ENTITY_SPAWN = 67,
    DRAGON_PUKE = 68,
    ITEM_ENTITY_MERGE = 69,
    START_SWIM = 70,
    BALLOON_POP = 71,
    TREASURE_HUNT = 72,
    AGENT_SUMMON = 73,
    CHARGED_ITEM = 74,
    FALL = 75,
    GROW_UP = 76,
    VIBRATION_DETECTED = 77,
    DRINK_MILK = 78
}

declare enum EmoteFlags {
    SERVER = 0,
    MUTE_CHAT = 1
}

declare enum EquipmentSlot {
    Head = 0,
    Chest = 1,
    Legs = 2,
    Feet = 3
}

declare enum EffectType {
    Speed = 1,
    Slowness = 2,
    Haste = 3,
    MiningFatigue = 4,
    Strength = 5,
    InstantHealth = 6,
    InstantDamage = 7,
    JumpBoost = 8,
    Nausea = 9,
    Regeneration = 10,
    Resistance = 11,
    FireResistance = 12,
    WaterBreathing = 13,
    Invisibility = 14,
    Blindness = 15,
    NightVision = 16,
    Hunger = 17,
    Weakness = 18,
    Poison = 19,
    Wither = 20,
    HealthBoost = 21,
    Absorption = 22,
    Saturation = 23,
    Levitation = 24,
    FatalPoison = 25,
    ConduitPower = 26,
    SlowFalling = 27,
    BadOmen = 28,
    HeroOfTheVillage = 29,
    Darkness = 30,
    TrialOmen = 31,
    WindCharged = 32,
    Weaving = 33,
    Oozing = 34,
    Infested = 35
}

declare enum MobEffectEvents {
    EffectAdd = 1,
    EffectModify = 2,
    EffectRemove = 3
}

declare enum InventoryLayout {
    NONE = 0,
    SURVIVAL = 1,
    RECIPE_BOOK = 2,
    CREATIVE = 3
}

declare enum InventoryLeftTab {
    NONE = 0,
    CONSTRUCTION = 1,
    EQUIPMENT = 2,
    ITEMS = 3,
    NATURE = 4,
    SEARCH = 5,
    SURVIVAL = 6
}

declare enum InventoryRightTab {
    NONE = 0,
    FULL_SCREEN = 1,
    CRAFTING = 2,
    ARMOR = 3
}

declare enum ActorDataId {
    Reserved0 = 0,
    StructuralIntegrity = 1,
    Variant = 2,
    ColorIndex = 3,
    Name = 4,
    Owner = 5,
    Target = 6,
    AirSupply = 7,
    EffectColor = 8,
    Reserved009 = 9,
    Reserved010 = 10,
    Hurt = 11,
    HurtDirection = 12,
    RowTimeLeft = 13,
    RowTimeRight = 14,
    Value = 15,
    DisplayTileRuntimeId = 16,
    DisplayOffset = 17,
    CustomDisplay = 18,
    Swell = 19,
    OldSwell = 20,
    SwellDirection = 21,
    ChargeAmount = 22,
    CarryBlockRuntimeId = 23,
    ClientEvent = 24,
    UsingItem = 25,
    PlayerFlags = 26,
    PlayerIndex = 27,
    BedPosition = 28,
    XPower = 29,
    YPower = 30,
    ZPower = 31,
    AuxPower = 32,
    Fishx = 33,
    Fishz = 34,
    Fishangle = 35,
    AuxValueData = 36,
    LeashHolder = 37,
    Reserved038 = 38,
    HasNpc = 39,
    NpcData = 40,
    Actions = 41,
    AirSupplyMax = 42,
    MarkVariant = 43,
    ContainerType = 44,
    ContainerSize = 45,
    ContainerStrengthModifier = 46,
    BlockTarget = 47,
    Inv = 48,
    TargetA = 49,
    TargetB = 50,
    TargetC = 51,
    AerialAttack = 52,
    Reserved053 = 53,
    Reserved054 = 54,
    FuseTime = 55,
    Reserved056 = 56,
    SeatLockPassengerRotation = 57,
    SeatLockPassengerRotationDegrees = 58,
    SeatRotationOffset = 59,
    SeatRotationOffsetDegrees = 60,
    DataRadius = 61,
    DataWaiting = 62,
    DataParticle = 63,
    PeekId = 64,
    AttachFace = 65,
    Attached = 66,
    AttachPos = 67,
    TradeTarget = 68,
    Career = 69,
    HasCommandBlock = 70,
    CommandName = 71,
    LastCommandOutput = 72,
    TrackCommandOutput = 73,
    Reserved074 = 74,
    Strength = 75,
    StrengthMax = 76,
    DataSpellCastingColor = 77,
    DataLifetimeTicks = 78,
    PoseIndex = 79,
    DataTickOffset = 80,
    NametagAlwaysShow = 81,
    Color2Index = 82,
    NameAuthor = 83,
    Score = 84,
    BalloonAnchor = 85,
    PuffedState = 86,
    BubbleTime = 87,
    Agent = 88,
    SittingAmount = 89,
    SittingAmountPrevious = 90,
    EatingCounter = 91,
    Reserved092 = 92,
    LayingAmount = 93,
    LayingAmountPrevious = 94,
    DataDuration = 95,
    DataSpawnTimeDeprecated = 96,
    DataChangeRate = 97,
    DataChangeOnPickup = 98,
    DataPickupCount = 99,
    InteractText = 100,
    TradeTier = 101,
    MaxTradeTier = 102,
    TradeExperience = 103,
    SkinId = 104,
    SpawningFrames = 105,
    CommandBlockTickDelay = 106,
    CommandBlockExecuteOnFirstTick = 107,
    AmbientSoundInterval = 108,
    AmbientSoundIntervalRange = 109,
    AmbientSoundEventName = 110,
    FallDamageMultiplier = 111,
    NameRawText = 112,
    CanRideTarget = 113,
    LowTierCuredTradeDiscount = 114,
    HighTierCuredTradeDiscount = 115,
    NearbyCuredTradeDiscount = 116,
    NearbyCuredDiscountTimeStamp = 117,
    Hitbox = 118,
    IsBuoyant = 119,
    FreezingEffectStrength = 120,
    BuoyancyData = 121,
    GoatHornCount = 122,
    BaseRuntimeId = 123,
    MovementSoundDistanceOffset = 124,
    HeartbeatIntervalTicks = 125,
    HeartbeatSoundEvent = 126,
    PlayerLastDeathPos = 127,
    PlayerLastDeathDimension = 128,
    PlayerHasDied = 129,
    CollisionBox = 130,
    VisibleMobEffects = 131,
    Count = 132
}

declare enum ActorFlag {
    Unknown = -1,
    OnFire = 0,
    Sneaking = 1,
    Riding = 2,
    Sprinting = 3,
    UsingItem = 4,
    Invisible = 5,
    Tempted = 6,
    InLove = 7,
    Saddled = 8,
    Powered = 9,
    Ignited = 10,
    Baby = 11,
    Converting = 12,
    Critical = 13,
    CanShowName = 14,
    AlwaysShowName = 15,
    NoAi = 16,
    Silent = 17,
    WallClimbing = 18,
    CanClimb = 19,
    CanSwim = 20,
    CanFly = 21,
    CanWalk = 22,
    Resting = 23,
    Sitting = 24,
    Angry = 25,
    Interested = 26,
    Charged = 27,
    Tamed = 28,
    Orphaned = 29,
    Leashed = 30,
    Sheared = 31,
    Gliding = 32,
    Elder = 33,
    Moving = 34,
    Breathing = 35,
    Chested = 36,
    Stackable = 37,
    ShowBottom = 38,
    Standing = 39,
    Shaking = 40,
    Idling = 41,
    Casting = 42,
    Charging = 43,
    WasdControlled = 44,
    CanPowerJump = 45,
    CanDash = 46,
    Lingering = 47,
    HasCollision = 48,
    HasGravity = 49,
    FireImmune = 50,
    Dancing = 51,
    Enchanted = 52,
    ReturnTrident = 53,
    ContainerIsPrivate = 54,
    IsTransforming = 55,
    DamageNearbyMobs = 56,
    Swimming = 57,
    Bribed = 58,
    IsPregnant = 59,
    LayingEgg = 60,
    PassengerCanPick = 61,
    TransitionSitting = 62,
    Eating = 63,
    LayingDown = 64,
    Sneezing = 65,
    Trusting = 66,
    Rolling = 67,
    Scared = 68,
    InScaffolding = 69,
    OverScaffolding = 70,
    DescendThroughBlock = 71,
    Blocking = 72,
    TransitionBlocking = 73,
    BlockedUsingShield = 74,
    BlockedUsingDamagedShield = 75,
    Sleeping = 76,
    WantsToWake = 77,
    TradeInterest = 78,
    DoorBreaker = 79,
    BreakingObstruction = 80,
    DoorOpener = 81,
    IsIllagerCaptain = 82,
    Stunned = 83,
    Roaring = 84,
    DelayedAttack = 85,
    IsAvoidingMobs = 86,
    IsAvoidingBlock = 87,
    FacingTargetToRangeAttack = 88,
    HiddenWhenInvisible = 89,
    IsInUi = 90,
    Stalking = 91,
    Emoting = 92,
    Celebrating = 93,
    Admiring = 94,
    CelebratingSpecial = 95,
    OutOfControl = 96,
    RamAttack = 97,
    PlayingDead = 98,
    InAscendableBlock = 99,
    OverDescendableBlock = 100,
    Croaking = 101,
    EatMob = 102,
    JumpGoalJump = 103,
    Emerging = 104,
    Sniffing = 105,
    Digging = 106,
    SonicBoom = 107,
    HasDashCooldown = 108,
    PushTowardsClosestSpace = 109,
    Deprecated1 = 110,
    Deprecated2 = 111,
    Deprecated3 = 112,
    Searching = 113,
    Crawling = 114,
    TimerFlag1 = 115,
    TimerFlag2 = 116,
    TimerFlag3 = 117,
    BodyRotationBlocked = 118,
    Count = 119
}

declare enum ActorDataType {
    Byte = 0,
    Short = 1,
    Int = 2,
    Float = 3,
    String = 4,
    CompoundTag = 5,
    BlockPos = 6,
    Long = 7,
    Vec3 = 8
}

declare enum ActorDamageCause {
    None = -1,
    Override = 0,
    Contact = 1,
    EntityAttack = 2,
    Projectile = 3,
    Suffocation = 4,
    Fall = 5,
    Fire = 6,
    FireTick = 7,
    Lava = 8,
    Drowning = 9,
    BlockExplosion = 10,
    EntityExplosion = 11,
    Void = 12,
    SelfDestruct = 13,
    Magic = 14,
    Wither = 15,
    Starve = 16,
    Anvil = 17,
    Thorns = 18,
    FallingBlock = 19,
    Piston = 20,
    FlyIntoWall = 21,
    Magma = 22,
    Fireworks = 23,
    Lightning = 24,
    Charging = 25,
    Temperature = 26,
    Freezing = 27,
    Stalactite = 28,
    Stalagmite = 29,
    RamAttack = 30,
    SonicBoom = 31,
    Campfire = 32,
    SoulCampfire = 33,
    All = 34
}

declare enum ItemUseMethod {
    Unknown = -1,
    EquipArmor = 0,
    Eat = 1,
    Attack = 2,
    Consume = 3,
    Throw = 4,
    Shoot = 5,
    Place = 6,
    FillBottle = 7,
    FillBucket = 8,
    PourBucket = 9,
    UseTool = 10,
    Interact = 11,
    Retrieved = 12,
    Dyed = 13,
    Traded = 14,
    BrushingCompleted = 15,
    OpenedVault = 16,
    _Count = 17
}

declare enum NpcRequestType {
    SetActions = 0,
    ExecuteAction = 1,
    ExecuteClosingCommands = 2,
    SetName = 3,
    SetSkin = 4,
    SetInteractText = 5,
    ExecuteOpeningCommands = 6
}

declare enum ServerboundLoadingScreenType {
    Unknown = 0,
    StartLoadingScreen = 1,
    EndLoadingScreen = 2
}

declare enum ShakeType {
    Positional = 0,
    Rotational = 1
}

declare enum ShakeAction {
    Add = 0,
    Stop = 1
}

declare enum BookEditAction {
    ReplacePage = 0,
    AddPage = 1,
    DeletePage = 2,
    SwapPage = 3,
    Finalize = 4
}

declare enum CameraAudioListener {
    Camera = 0,
    Player = 1
}

declare enum EasingType {
    Linear = 0,
    Spring = 1,
    InQuad = 2,
    OutQuad = 3,
    InOutQuad = 4,
    InCubic = 5,
    OutCubic = 6,
    InOutCubic = 7,
    InQuart = 8,
    OutQuart = 9,
    InOutQuart = 10,
    InQuint = 11,
    OutQuint = 12,
    InOutQuint = 13,
    InSine = 14,
    OutSine = 15,
    InOutSine = 16,
    InExpo = 17,
    OutExpo = 18,
    InOutExpo = 19,
    InCirc = 20,
    OutCirc = 21,
    InOutCirc = 22,
    InBounce = 23,
    OutBounce = 24,
    InOutBounce = 25,
    InBack = 26,
    OutBack = 27,
    InOutBack = 28,
    InElastic = 29,
    OutElastic = 30,
    InOutElastic = 31
}

declare enum CraftingDataEntryType {
    ShapelessRecipe = 0,
    ShapedRecipe = 1,
    FurnaceRecipe = 2,
    FurnaceAuxRecipe = 3,
    MultiRecipe = 4,
    UserDataShapelessRecipe = 5,
    ShapelessChemistryRecipe = 6,
    ShapedChemistryRecipe = 7,
    SmithingTransformRecipe = 8,
    SmithingTrimRecipe = 9,
    COUNT = 10
}

declare enum InternalType {
    Invalid = 0,
    Default = 1,
    Molang = 2,
    ItemTag = 3,
    Deferred = 4,
    ComplexAlias = 5
}

declare enum UnlockingContext {
    None = 0,
    AlwaysUnlocked = 1,
    PlayerInWater = 2,
    PlayerHasManyItems = 3
}

declare enum ContainerDataType {
    FurnanceTickCount = 0,
    FurnaceLitTime = 1,
    FurnaceLitDuration = 2,
    FurnaceStoredXp = 3,
    FurnaceFuelAux = 4,
    BrewTime = 5,
    BrewFuelAmount = 6,
    BrewFuelTotal = 7
}

declare enum ScoreboardIdentityType {
    Invalid = 0,
    Player = 1,
    Entity = 2,
    FakePlayer = 3
}

declare enum ScoreboardActionType {
    Change = 0,
    Remove = 1
}

declare enum GeneratorType {
    Legacy = 0,
    Overworld = 1,
    Flat = 2,
    Nether = 3,
    TheEnd = 4,
    Void = 5
}

declare enum TriggerType {
    Unknown = 0,
    PlayerInput = 1,
    SimulationTick = 2
}

declare enum InputData {
    Ascend = 0,
    Descend = 1,
    NorthJump_DEPRECATED = 2,
    JumpDown = 3,
    SprintDown = 4,
    ChangeHeight = 5,
    Jumping = 6,
    AutoJumpingInWater = 7,
    Sneaking = 8,
    SneakDown = 9,
    Up = 10,
    Down = 11,
    Left = 12,
    Right = 13,
    UpLeft = 14,
    UpRight = 15,
    WantUp = 16,
    WantDown = 17,
    WantDownSlow = 18,
    WantUpSlow = 19,
    Sprinting = 20,
    AscendBlock = 21,
    DescendBlock = 22,
    SneakToggleDown = 23,
    PersistSneak = 24,
    StartSprinting = 25,
    StopSprinting = 26,
    StartSneaking = 27,
    StopSneaking = 28,
    StartSwimming = 29,
    StopSwimming = 30,
    StartJumping = 31,
    StartGliding = 32,
    StopGliding = 33,
    PerformItemInteraction = 34,
    PerformBlockActions = 35,
    PerformItemStackRequest = 36,
    HandledTeleport = 37,
    Emoting = 38,
    MissedSwing = 39,
    StartCrawling = 40,
    StopCrawling = 41,
    StartFlying = 42,
    StopFlying = 43,
    ClientAckServerData = 44,
    IsInClientPredictedVehicle = 45,
    PaddlingLeft = 46,
    PaddlingRight = 47,
    BlockBreakingDelayEnabled = 48,
    HorizontalCollision = 49,
    VerticalCollision = 50,
    DownLeft = 51,
    DownRight = 52,
    StartUsingItem = 53,
    IsCameraRelativeMovementEnabled = 54,
    IsRotControlledByMoveDirection = 55,
    StartSpinAttack = 56,
    StopSpinAttack = 57,
    INPUT_NUM = 58
}

declare enum PlayMode {
    Normal = 0,
    Teaser = 1,
    Screen = 2,
    Viewer = 3,
    Reality = 4,
    Placement = 5,
    LivingRoom = 6,
    ExitLevel = 7,
    ExitLevelLivingRoom = 8,
    NumberModes = 9
}

declare enum InputMode {
    Unknown = 0,
    Mouse = 1,
    Touch = 2,
    GamePad = 3,
    MotionController = 4
}

declare enum InteractionMode {
    Touch = 0,
    Crosshair = 1,
    Classic = 2
}

declare enum BlockEventType {
    Sound = 0,
    ChangeState = 1
}

declare enum InputLockFlags {
    None = 0,
    Camera = 2,
    Movement = 4
}

declare enum ActorLinkType {
    Remove = 0,
    Rider = 1,
    Passenger = 2
}

declare enum DebuggerProtocolVersion {
    Initial = 1,
    SupportTargetModuleUuid = 2,
    SupportTargetSelection = 3,
    SupportPasscode = 4
}

declare enum MoveDeltaFlags {
    HasX = 1,
    HasY = 2,
    HasZ = 4,
    HasRotationX = 8,
    HasRotationY = 16,
    HasRotationZ = 32,
    OnGround = 64,
    Teleport = 128,
    ForceMove = 256,
    All = 63
}

declare enum TelemetryEventType {
    AchievementAwarded = 0,
    EntityInteract = 1,
    PortalBuilt = 2,
    PortalUsed = 3,
    MobKilled = 4,
    CauldronUsed = 5,
    PlayerDeath = 6,
    BossKilled = 7,
    AgentCommand = 8,
    AgentCreated = 9,
    BannerPatternRemoved = 10,
    CommandExecuted = 11,
    FishBucketed = 12,
    MobBorn = 13,
    PetDied = 14,
    CauldronBlockUsed = 15,
    ComposterBlockUsed = 16,
    BellBlockUsed = 17,
    ActorDefinition = 18,
    RaidUpdate = 19,
    PlayerMovementAnomaly = 20,
    PlayerMovementCorrected = 21,
    HoneyHarvested = 22,
    TargetBlockHit = 23,
    PiglinBarter = 24,
    WaxedOrUnwaxedCopper = 25,
    CodeBuilderRuntimeAction = 26,
    CodeBuilderScoreboard = 27,
    StriderRiddenInLavaInOverworld = 28,
    SneakCloseToSculkSensor = 29,
    CarefulRestoration = 30,
    ItemUsed = 31
}

declare enum SpawnType {
    Player = 0,
    World = 1
}

declare enum ServerAuthMovementMode {
    LegacyClientAuthoritativeV1 = 0,
    ClientAuthoritativeV2 = 1,
    ServerAuthoritativeV3 = 2
}

declare enum MemoryTier {
    Undetermined = 0,
    SuperLow = 1,
    Low = 2,
    Mid = 3,
    Hight = 4,
    SuperHigh = 5
}

declare enum PermissionFlag {
    Build = 1,
    Mine = 2,
    DoorsAndSwitches = 4,
    OpenContainers = 8,
    AttackPlayers = 16,
    AttackMobs = 32,
    OperatorCommands = 64,
    Teleport = 128
}

declare enum CommandBlockMode {
    Impulse = 0,
    Repeating = 1,
    Chain = 2
}

declare class LoginTokens extends DataType {
    client: string;
    identity: string;
    constructor(client: string, identity: string);
    static read(stream: BinaryStream): LoginTokens;
    static write(stream: BinaryStream, value: LoginTokens): void;
}

declare class BehaviorPackInfo extends DataType {
    contentIdentity: string;
    contentKey: string;
    hasScripts: boolean;
    size: number;
    subpackName: string;
    uuid: string;
    version: string;
    addonPack: boolean;
    constructor(contentIdentity: string, contentKey: string, hasScripts: boolean, size: number, subpackName: string, uuid: string, version: string, addonPack: boolean);
    static read(stream: BinaryStream): Array<BehaviorPackInfo>;
    static write(stream: BinaryStream, value: Array<BehaviorPackInfo>): void;
}

declare class TexturePackInfo extends DataType {
    contentIdentity: string;
    contentKey: string;
    hasScripts: boolean;
    rtxEnabled: boolean;
    size: bigint;
    subpackName: string;
    uuid: string;
    version: string;
    addonPack: boolean;
    cdnLink: string;
    constructor(contentIdentity: string, contentKey: string, hasScripts: boolean, rtxEnabled: boolean, size: bigint, subpackName: string, uuid: string, version: string, addonPack: boolean, cdnLink: string);
    static read(stream: BinaryStream): Array<TexturePackInfo>;
    static write(stream: BinaryStream, value: Array<TexturePackInfo>): void;
}

declare class PackLinks extends DataType {
    id: string;
    url: string;
    constructor(id: string, url: string);
    static read(stream: BinaryStream): Array<PackLinks>;
    static write(stream: BinaryStream, value: Array<PackLinks>): void;
}

declare class ResourcePackIds extends DataType {
    static read(stream: BinaryStream): Array<string>;
    static write(stream: BinaryStream, value: Array<string>): void;
}

declare class ResourceIdVersions extends DataType {
    name: string;
    uuid: string;
    version: string;
    constructor(name: string, uuid: string, version: string);
    static read(stream: BinaryStream): Array<ResourceIdVersions>;
    static write(stream: BinaryStream, value: Array<ResourceIdVersions>): void;
}

declare class Experiments extends DataType {
    enabled: boolean;
    name: string;
    constructor(name: string, enabled: boolean);
    static read(stream: BinaryStream): Array<Experiments>;
    static write(stream: BinaryStream, value: Array<Experiments>): void;
}

interface ClientData {
    AnimatedImageData: Array<AnimatedImageData>;
    ArmSize: string;
    CapeData: string;
    CapeId: string;
    CapeImageHeight: number;
    CapeImageWidth: number;
    CapeOnClassicSkin: boolean;
    ClientRandomId: number;
    CompatibleWithClientSideChunkGen: true;
    CurrentInputMode: number;
    DefaultInputMode: number;
    DeviceId: string;
    DeviceModel: string;
    DeviceOS: number;
    GameVersion: string;
    GuiScale: number;
    IsEditorMode: boolean;
    LanguageCode: string;
    MaxViewDistance: number;
    MemoryTier: number;
    OverrideSkin: boolean;
    PersonaPieces: Array<PersonaPiece>;
    PersonaSkin: boolean;
    PieceTintColors: Array<PieceTintColor>;
    PlatformOfflineId: string;
    PlatformOnlineId: string;
    PlayFabId: string;
    PremiumSkin: boolean;
    SelfSignedId: string;
    ServerAddress: string;
    SkinAnimationData: string;
    SkinColor: string;
    SkinData: string;
    SkinGeometryData: string;
    SkinGeometryDataEngineVersion: string;
    SkinId: string;
    SkinImageHeight: number;
    SkinImageWidth: number;
    SkinResourcePatch: string;
    ThirdPartyName: string;
    ThirdPartyNameOnly: boolean;
    TrustedSkin: boolean;
    UIProfile: number;
}
interface AnimatedImageData {
    AnimationExpression: number;
    Frames: 2;
    Image: string;
    ImageHeight: number;
    ImageWidth: number;
    Type: number;
}
interface PersonaPiece {
    IsDefault: boolean;
    PackId: string;
    PieceId: string;
    PieceType: string;
    ProductId: string;
}
interface PieceTintColor {
    Colors: Array<string>;
    PieceType: string;
}
interface IdentityData {
    XUID: string;
    displayName: string;
    identity: string;
    sandBoxId: string;
    titleId: string;
}
interface LoginTokenData {
    clientData: ClientData;
    identityData: IdentityData;
    publicKey: string;
}

interface IPosition {
    x: number;
    y: number;
    z: number;
}

type LegacyTelemetryEventData = {
    AchievementAwarded: {
        achievementId: number;
    };
    EntityInteract: {
        interactedEntityId: bigint;
        interactionType: number;
        interactionActorType: number;
        interactionActorVariant: number;
        interactionActorColor: number;
    };
    PortalBuilt: {
        dimensionId: number;
    };
    PortalUsed: {
        fromDimensionId: number;
        toDimensionId: number;
    };
    MobKilled: {
        instigatorActorId: bigint;
        targetActorId: bigint;
        instigatorChildActorType: number;
        damageSource: number;
        tradeTier: number;
        traderName: string;
    };
    CauldronUsed: {
        contentsColor: number;
        contentsType: number;
        fillLevel: number;
    };
    PlayerDeath: {
        instigatorActorId: bigint;
        instigatorMobVariant: number;
        damageSource: number;
        diedInRaid: boolean;
    };
    BossKilled: {
        bossActorId: bigint;
        partySize: number;
        bossType: number;
    };
    AgentCommand: {
        result: number;
        resultNumber: number;
        commandName: string;
        resultKey: string;
        resultString: string;
    };
    AgentCreated: Record<string, never>;
    BannerPatternRemoved: Record<string, never>;
    CommandExecuted: {
        successCount: number;
        errorCount: number;
        commandName: string;
        errorList: string;
    };
    FishBucketed: Record<string, never>;
    MobBorn: {
        entityType: number;
        entityVariant: number;
        color: number;
    };
    PetDied: {
        killedPetEntityType: number;
        killedPetVariant: number;
        killerEntityType: number;
        killerVariant: number;
        damageSource: number;
    };
    CauldronBlockUsed: {
        blockInteractionType: number;
        itemId: number;
    };
    ComposterBlockUsed: {
        blockInteractionType: number;
        itemId: number;
    };
    BellBlockUsed: {
        itemId: number;
    };
    ActorDefinition: {
        eventName: string;
    };
    RaidUpdate: {
        currentRaidWave: number;
        totalRaidWaves: number;
        wonRaid: boolean;
    };
    PlayerMovementA: Record<string, never>;
    PlayerMovementCorrected: Record<string, never>;
    HoneyHarvested: Record<string, never>;
    TargetBlockHit: {
        redstoneLevel: number;
    };
    PiglinBarter: {
        itemId: number;
        wasTargetingBarteringPlayer: boolean;
    };
    WaxedOrUnwaxedCopper: {
        playerWaxedOrUnwaxedCopperBlockId: number;
    };
    CodeBuilderRuntimeAction: {
        codeBuilderRuntimeAction: string;
    };
    CodeBuilderScoreboard: {
        objectiveName: string;
        codeBuilderScoreboardScore: number;
    };
    StriderRiddenInLavaInOverworld: Record<string, never>;
    SneakCloseToSculkSensor: Record<string, never>;
    CarefulRestoration: Record<string, never>;
    ItemUsed: {
        itemId: number;
        itemAux: number;
        useMethod: number;
        useCount: number;
    };
};

type TrimDataPattern = {
    item_name: string;
    pattern: string;
};

type TrimDataMaterial = {
    material: string;
    color: string;
    item_name: string;
};

declare enum UnlockedRecipesType {
    EMPTY = 0,
    INITIALLY_UNLOCKED = 1,
    NEWLY_UNLOCKED = 2,
    REMOVED = 3,
    REMOVED_ALL = 4
}

declare class BlockPosition extends DataType implements IPosition {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    /**
     * Rounds the coordinates of the 3D position to the nearest whole number.
     * @returns
     */
    round(): BlockPosition;
    /**
     * Ceils the coordinates of the 3D position.
     * @returns The 3D position with the coordinates ceiled.
     */
    ceil(): BlockPosition;
    /**
     * Floors the coordinates of the 3D position.
     * @returns The 3D position with the coordinates floored.
     */
    floor(): BlockPosition;
    /**
     * Adds another 3D position to this 3D position.
     * @param other The other 3D position to add.
     * @returns The result of the addition.
     */
    add(other: IPosition): BlockPosition;
    /**
     * Subtracts another 3D position from this 3D position.
     * @param other The other 3D position to subtract.
     * @returns The result of the subtraction.
     */
    subtract(other: IPosition): BlockPosition;
    /**
     * Multiplies this 3D position with a scalar.
     * @param scalar The scalar to multiply with.
     * @returns The result of the multiplication.
     */
    multiply(scalar: number): BlockPosition;
    /**
     * Divides this 3D position with a scalar.
     * @param scalar The scalar to divide with.
     * @returns The result of the division.
     */
    divide(scalar: number): BlockPosition;
    /**
     * Calculates the dot product between this 3D position and another 3D position.
     * @param other The other 3D position to calculate the dot product with.
     * @returns The result of the dot product.
     */
    dot(other: IPosition): number;
    /**
     * Calculates the cross product between this 3D position and another 3D position.
     * @param other The other 3D position to calculate the cross product with.
     * @returns The result of the cross product.
     */
    cross(other: IPosition): BlockPosition;
    /**
     * Calculates the length of this 3D position.
     * @returns The length of the 3D position.
     */
    length(): number;
    /**
     * Calculates the square length of this 3D position.
     * @returns the square length of the 3D position.
     */
    lengthSqrt(): number;
    /**
     * Normalizes this 3D position.
     * @returns The normalized 3D position.
     */
    normalize(): BlockPosition;
    /**
     * Linearly interpolates between this 3D position and another 3D position.
     * @param other The other 3D position to interpolate with.
     * @param t The interpolation factor.
     * @returns The interpolated 3D position.
     */
    lerp(other: IPosition, t: number): BlockPosition;
    /**
     * Spherically interpolates between this 3D position and another 3D position.
     * @param other The other 3D position to interpolate with.
     * @param t The interpolation factor.
     * @returns The interpolated 3D position.
     */
    slerp(other: BlockPosition | Vector3f, t: number): BlockPosition;
    /**
     * Returns a string representation of this 3D position.
     * @returns The string representation of this 3D position.
     */
    equals(other: IPosition): boolean;
    /**
     * Gets the distance between this 3D position and another 3D position.
     * @param other The other 3D position to get the distance to.
     * @returns The distance between the 3D positions.
     */
    distance(other: IPosition): number;
    /**
     * Computes the absolute value of each coordinate of the 3D vector.
     * @returnsthe absolute value of this 3D vector.
     */
    absolute(): BlockPosition;
    static read(stream: BinaryStream): BlockPosition;
    static write(stream: BinaryStream, value: BlockPosition): void;
    /**
     * Converts a BlockPosition to a BlockPosition
     * @param position - The BlockPosition to convert
     * @returns The converted BlockPosition
     */
    static fromVector3f(position: Vector3f): BlockPosition;
    /**
     * Gets the block position from a positional object.
     * @param position The positional object.
     * @returns The block position.
     */
    static from(position: IPosition): BlockPosition;
    /**
     * Converts the BlockPosition to a BlockPosition
     * @returns The converted BlockPosition
     */
    static toVector3f(coordinates: BlockPosition): Vector3f;
    /**
     * Convert the block position to a hash.
     * @param coords The block position.
     * @returns The hash of the block position.
     */
    static hash(position: BlockPosition): bigint;
    /**
     * Convert the hash to block position.
     * @param hash The hash.
     * @returns The block position.
     */
    static unhash(hash: bigint): BlockPosition;
}

/**
 * A 3D vector with floating point precision.
 *
 */
declare class Vector3f extends DataType implements IPosition {
    /**
     * The x coordinate of the vector.
     */
    x: number;
    /**
     * The y coordinate of the vector.
     */
    y: number;
    /**
     * The z coordinate of the vector.
     */
    z: number;
    /**
     * Creates a new 3D vector.
     *
     * @param x The x coordinate of the vector.
     * @param y The y coordinate of the vector.
     * @param z The z coordinate of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * Sets the coordinates of the 3D vector.
     * @param other The other 3D vector to set the coordinates to.
     */
    set(other: IPosition): void;
    /**
     * Rounds the coordinates of the 3D vector to the nearest whole number.
     * @returns
     */
    round(): Vector3f;
    /**
     * Ceils the coordinates of the 3D vector.
     * @returns The 3D vector with the coordinates ceiled.
     */
    ceil(): Vector3f;
    /**
     * Floors the coordinates of the 3D vector.
     * @returns The 3D vector with the coordinates floored.
     */
    floor(): Vector3f;
    /**
     * Adds another 3D vector to this 3D vector.
     * @param other The other 3D vector to add.
     * @returns The result of the addition.
     */
    add(other: IPosition): Vector3f;
    /**
     * Subtracts another 3D vector from this 3D vector.
     * @param other The other 3D vector to subtract.
     * @returns The result of the subtraction.
     */
    subtract(other: IPosition): Vector3f;
    /**
     * Multiplies this 3D vector with a scalar.
     * @param scalar The scalar to multiply with.
     * @returns The result of the multiplication.
     */
    multiply(scalar: number): Vector3f;
    /**
     * Divides this 3D vector with a scalar.
     * @param scalar The scalar to divide with.
     * @returns The result of the division.
     */
    divide(scalar: number): Vector3f;
    /**
     * Calculates the dot product between this 3D vector and another 3D vector.
     * @param other The other 3D vector to calculate the dot product with.
     * @returns The result of the dot product.
     */
    dot(other: IPosition): number;
    /**
     * Calculates the cross product between this 3D vector and another 3D vector.
     * @param other The other 3D vector to calculate the cross product with.
     * @returns The result of the cross product.
     */
    cross(other: IPosition): Vector3f;
    /**
     * Calculates the length of this 3D vector.
     * @returns The length of the 3D vector.
     */
    length(): number;
    /**
     * Calculates the square length of this 3D vector.
     * @returns the square length of the 3D vector.
     */
    lengthSqrt(): number;
    /**
     * Normalizes this 3D vector.
     * @returns The normalized 3D vector.
     */
    normalize(): Vector3f;
    /**
     * Linearly interpolates between this 3D vector and another 3D vector.
     * @param other The other 3D vector to interpolate with.
     * @param t The interpolation factor.
     * @returns The interpolated 3D vector.
     */
    lerp(other: IPosition, t: number): Vector3f;
    /**
     * Spherically interpolates between this 3D vector and another 3D vector.
     * @param other The other 3D vector to interpolate with.
     * @param t The interpolation factor.
     * @returns The interpolated 3D vector.
     */
    slerp(other: Vector3f | BlockPosition, t: number): Vector3f;
    /**
     * Returns a string representation of this 3D vector.
     * @returns The string representation of this 3D vector.
     */
    equals(other: IPosition): boolean;
    /**
     * Gets the distance between this 3D vector and another 3D vector.
     * @param other The other 3D vector to get the distance to.
     * @returns The distance between the 3D vectors.
     */
    distance(other: IPosition): number;
    /**
     * Computes the absolute value of each coordinate of the 3D vector.
     * @returns the absolute value of this 3D vector.
     */
    absolute(): Vector3f;
    /**
     * Checks if the 3D vector is zero.
     * @returns true if the 3D vector is zero, false otherwise.
     */
    isZero(): boolean;
    /**
     * Converts this array to a 3D vector.
     * @returns The 3D vector that was converted.
     */
    static fromArray(array: [number, number, number] | Array<number>): Vector3f;
    /**
     * Reads a 3D vector from the stream.
     *
     * @param stream The stream to read from.
     * @returns The 3D vector that was read.
     */
    static read(stream: BinaryStream): Vector3f;
    /**
     * Writes a 3D vector to the stream.
     *
     * @param stream The stream to write to.
     * @param value The 3D vector to write.
     */
    static write(stream: BinaryStream, value: Vector3f): void;
}

/**
 * A 2D vector with floating point precision.
 *
 */
declare class Vector2f extends DataType {
    /**
     * The x coordinate of the vector.
     */
    x: number;
    /**
     * The y coordinate of the vector.
     */
    y: number;
    /**
     * Creates a new 2D vector.
     *
     * @param x The x coordinate of the vector.
     * @param y The y coordinate of the vector.
     */
    constructor(x: number, y: number);
    static read(stream: BinaryStream): Vector2f;
    static write(stream: BinaryStream, value: Vector2f): void;
}

declare class GameRules extends DataType {
    editable: boolean;
    name: string;
    type: GameRuleType;
    value: boolean | number | string;
    constructor(editable: boolean, name: string, type: GameRuleType, value: boolean | number | string);
    static read(stream: BinaryStream): Array<GameRules>;
    static write(stream: BinaryStream, value: Array<GameRules>): void;
}

declare class BlockProperty extends DataType {
    name: string;
    nbt: CompoundTag<unknown>;
    constructor(name: string, nbt: CompoundTag<unknown>);
    static read(stream: BinaryStream): Array<BlockProperty>;
    static write(stream: BinaryStream, value: Array<BlockProperty>): void;
}

declare class ItemData extends DataType {
    componentBased: boolean;
    name: string;
    networkId: number;
    constructor(componentBased: boolean, name: string, networkId: number);
    static read(stream: BinaryStream): Array<ItemData>;
    static write(stream: BinaryStream, value: Array<ItemData>): void;
}

declare class TeleportCause extends DataType {
    cause: number;
    sourceEntityType: number;
    constructor(cause: number, sourceEntityType: number);
    static read(stream: BinaryStream, endian: Endianness, mode: MoveMode): TeleportCause | null;
    static write(stream: BinaryStream, value: TeleportCause, endian: Endianness, mode: MoveMode): void;
}

/**
 * Represents a skin related image.
 */
declare class SkinImage extends DataType {
    /**
     * The width of the image.
     */
    readonly width: number;
    /**
     * The height of the image.
     */
    readonly height: number;
    /**
     * The data of the image.
     */
    readonly data: Buffer;
    /**
     * Creates a new skin image.
     *
     * @param width The width of the image.
     * @param height The height of the image.
     * @param data The data of the image.
     */
    constructor(width: number, height: number, data: Buffer);
    static read(stream: BinaryStream): SkinImage;
    static write(stream: BinaryStream, image: SkinImage): void;
}

/**
 * Represents an animation of a skin.
 */
declare class SkinAnimation extends DataType {
    /**
     * The image of the animation.
     */
    readonly image: SkinImage;
    /**
     * The type of the animation.
     */
    readonly type: number;
    /**
     * The amount of frames of the animation.
     */
    readonly frames: number;
    /**
     * The type of the expression of the animation.
     */
    readonly expression: number;
    /**
     * Creates a new skin animation.
     *
     * @param image The image of the animation.
     * @param type The type of the animation.
     * @param frames The amount of frames of the animation.
     * @param expression The type of the expression of the animation.
     */
    constructor(image: SkinImage, type: number, frames: number, expression: number);
    static read(stream: BinaryStream): SkinAnimation;
    static write(stream: BinaryStream, animation: SkinAnimation): void;
}

/**
 * Represents a piece of a persona skin.
 */
declare class SkinPersonaPiece extends DataType {
    /**
     * The identifier of the piece.
     */
    readonly identifier: string;
    /**
     * The type of the piece.
     */
    readonly type: string;
    /**
     * The pack identifier of the piece.
     */
    readonly packIdentifier: string;
    /**
     * The is default state of the piece.
     */
    readonly isDefault: boolean;
    /**
     * The product identifier of the piece.
     */
    readonly productIdentifier: string;
    /**
     * Creates a new piece of a persona skin.
     *
     * @param identifier The identifier of the piece.
     * @param type The type of the piece.
     * @param packIdentifier The pack identifier of the piece.
     * @param isDefault The is default state of the piece.
     * @param productIdentifier The product identifier of the piece.
     */
    constructor(identifier: string, type: string, packIdentifier: string, isDefault: boolean, productIdentifier: string);
    static read(stream: BinaryStream): SkinPersonaPiece;
    static write(stream: BinaryStream, piece: SkinPersonaPiece): void;
}

/**
 * Represents a tint piece of a persona skin.
 */
declare class SkinPersonaTintPiece extends DataType {
    /**
     * The identifier of the tint piece.
     */
    readonly type: string;
    /**
     * The colors of the tint piece.
     */
    readonly colors: Array<string>;
    /**
     * Creates a new tint piece of a persona skin.
     *
     * @param type The identifier of the tint piece.
     * @param colors The colors of the tint piece.
     */
    constructor(type: string, colors: Array<string>);
    static read(stream: BinaryStream): SkinPersonaTintPiece;
    static write(stream: BinaryStream, tintPiece: SkinPersonaTintPiece): void;
}

/**
 * Represents a skin.
 */
declare class SerializedSkin extends DataType {
    /**
     * The identifier of the skin.
     */
    identifier: string;
    /**
     * The playfab identifier of the skin.
     */
    playFabIdentifier: string;
    /**
     * The resource patch of the skin.
     */
    resourcePatch: string;
    /**
     * The skin image.
     */
    skinImage: SkinImage;
    /**
     * The animations of the skin.
     */
    animations: Array<SkinAnimation>;
    /**
     * The cape image.
     */
    capeImage: SkinImage;
    /**
     * The geometry data of the skin.
     */
    geometryData: string;
    /**
     * The geometry version of the skin.
     */
    geometryVersion: string;
    /**
     * The animation data of the skin.
     */
    animationData: string;
    /**
     * The animation engine of the skin.
     */
    capeIdentifier: string;
    /**
     * The full identifier of the skin.
     */
    fullIdentifier: string;
    /**
     * The arm size of the skin.
     */
    armSize: string;
    /**
     * The skin color of the skin.
     */
    skinColor: string;
    /**
     * The persona pieces of the skin.
     */
    personaPieces: Array<SkinPersonaPiece>;
    /**
     * The tint pieces of the skin.
     */
    tintPieces: Array<SkinPersonaTintPiece>;
    /**
     * If the skin is premium.
     */
    isPremium: boolean;
    /**
     * If the skin is persona.
     */
    isPersona: boolean;
    /**
     * If there is a persona cape on classic skin.
     */
    isPersonaCapeOnClassic: boolean;
    /**
     * If the skin is used by its primary user.
     */
    isPrimaryUser: boolean;
    /**
     * If the skin will override the player appearance.
     */
    overridingPlayerAppearance: boolean;
    /**
     * Creates a new serialized skin.
     *
     * @param identifier The identifier of the skin.
     * @param playFabIdentifier The playfab identifier of the skin.
     * @param resourcePatch The resource patch of the skin.
     * @param skinImage The skin image.
     * @param animations The animations of the skin.
     * @param capeImage The cape image.
     * @param geometryData The geometry data of the skin.
     * @param geometryVersion The geometry version of the skin.
     * @param animationData The animation data of the skin.
     * @param capeIdentifier The cape identifier of the skin.
     * @param fullIdentifier The full identifier of the skin.
     * @param armSize The arm size of the skin.
     * @param skin
     * @param personaPieces The persona pieces of the skin.
     * @param tintPieces The tint pieces of the skin.
     * @param isPremium If the skin is premium.
     * @param isPersona If the skin is persona.
     * @param isPersonaCapeOnClassic If there is a persona cape on classic skin.
     * @param isPrimaryUser If the skin is used by its primary user.
     * @param overridingPlayerAppearance If the skin will override the player appearance.
     * @returns A new serialized skin.
     */
    constructor(identifier: string, playFabIdentifier: string, resourcePatch: string, skinImage: SkinImage, animations: Array<SkinAnimation>, capeImage: SkinImage, geometryData: string, geometryVersion: string, animationData: string, capeIdentifier: string, fullIdentifier: string, armSize: string, skinColor: string, personaPieces: Array<SkinPersonaPiece>, tintPieces: Array<SkinPersonaTintPiece>, isPremium: boolean, isPersona: boolean, isPersonaCapeOnClassic: boolean, isPrimaryUser: boolean, overridingPlayerAppearance: boolean);
    static read(stream: BinaryStream): SerializedSkin;
    static write(stream: BinaryStream, skin: SerializedSkin): void;
    /**
     * Converts the client data to a serialized skin.
     * @param data The client data to convert.
     * @returns The serialized skin.
     */
    static from(data: ClientData): SerializedSkin;
    /**
     * Returns an empty serialized skin.
     * @returns An empty serialized skin.
     */
    static empty(): SerializedSkin;
}

declare class PlayerListRecord extends DataType {
    /**
     * The uuid of the player.
     */
    readonly uuid: string;
    /**
     * The unique actor id of the player.
     */
    readonly uniqueId: bigint | null;
    /**
     * The username of the player.
     */
    readonly username: string | null;
    /**
     * The xbox user id of the player.
     */
    readonly xuid: string | null;
    /**
     * The platform chat identifier of the player.
     */
    readonly platformChatIdentifier: string | null;
    /**
     * The platform build of the player.
     */
    readonly platformBuild: number | null;
    /**
     * The skin of the player.
     */
    readonly skin: SerializedSkin | null;
    /**
     * Whether the player is a teacher.
     */
    readonly isTeacher: boolean | null;
    /**
     * Whether the player is a host.
     */
    readonly isHost: boolean | null;
    /**
     * Whether the player is a visitor.
     */
    readonly isVisitor: boolean | null;
    /**
     * Creates a new player record.
     *
     * @param uuid The uuid of the player.
     * @param uniqueId The unique actor id of the player.
     * @param username The username of the player.
     * @param xuid The xbox user id of the player.
     * @param platformChatIdentifier The platform chat identifier of the player.
     * @param platformBuild The platform build of the player.
     * @param skin The skin of the player.
     * @param isTeacher Whether the player is a teacher.
     * @param isHost Whether the player is a host.
     * @param isVisitor Whether the player is a visitor.
     */
    constructor(uuid: string, uniqueId?: bigint | null, username?: string | null, xuid?: string | null, platformChatIdentifier?: string | null, platformBuild?: number | null, skin?: SerializedSkin | null, isTeacher?: boolean | null, isHost?: boolean | null, isVisitor?: boolean | null);
    static read(stream: BinaryStream, _endian: Endianness, action: PlayerListAction): Array<PlayerListRecord>;
    static write(stream: BinaryStream, records: Array<PlayerListRecord>, _endian: Endianness, action: PlayerListAction): void;
}

declare class AbilitySet extends DataType {
    /**
     * The ability index of the flag.
     */
    readonly ability: AbilityIndex;
    /**
     * The value of the flag.
     */
    readonly value: boolean;
    /**
     * Creates a new ability flag.
     * @param ability The ability index of the flag.
     * @param value The value of the flag
     */
    constructor(ability: AbilityIndex, value: boolean);
    static read(stream: BinaryStream): Array<AbilitySet>;
    static write(stream: BinaryStream, flags: Array<AbilitySet>): void;
}

declare class AbilityLayer extends DataType {
    /**
     * The type of the layer.
     */
    readonly type: AbilityLayerType;
    /**
     * The abilities of the layer.
     */
    readonly abilities: Array<AbilitySet>;
    /**
     * The fly speed of the layer.
     */
    readonly flySpeed: number;
    /**
     * The walk speed of the layer.
     */
    readonly walkSpeed: number;
    /**
     * Creates a new ability layer.
     * @param type The type of the layer.
     * @param abilities The abilities of the layer.
     * @param flySpeed The fly speed of the layer.
     * @param walkSpeed The walk speed of the layer.
     */
    constructor(type: AbilityLayerType, abilities: Array<AbilitySet>, flySpeed: number, walkSpeed: number);
    static read(stream: BinaryStream): Array<AbilityLayer>;
    static write(stream: BinaryStream, value: Array<AbilityLayer>): void;
}

declare class TextSource extends DataType {
    static read(stream: BinaryStream, _: Endianness, type: TextPacketType): string | null;
    static write(stream: BinaryStream, value: string, _: Endianness, type: TextPacketType): void;
}

declare class TextParameters extends DataType {
    static read(stream: BinaryStream, _: Endianness, type: TextPacketType): Array<string> | null;
    static write(stream: BinaryStream, value: Array<string>, _: Endianness, type: TextPacketType): void;
}

declare class InteractPosition extends DataType {
    static read(stream: BinaryStream, _: 0, action: InteractAction): Vector3f | null;
    static write(stream: BinaryStream, value: Vector3f, _: 0, action: InteractAction): void;
}

declare class AttributeModifier extends DataType {
    /**
     * The id of the modifier.
     */
    readonly id: string;
    /**
     * The name of the modifier.
     */
    readonly name: string;
    /**
     * The amount of the modifier.
     */
    readonly amount: number;
    /**
     * The operation of the modifier.
     */
    readonly operation: number;
    /**
     * The operand of the modifier.
     */
    readonly operand: number;
    /**
     * If the modifier is serializable.
     */
    readonly serializable: boolean;
    /**
     * Creates a new attribute modifier.
     *
     * @param id The id of the modifier.
     * @param name The name of the modifier.
     * @param amount The amount of the modifier.
     * @param operation The operation of the modifier.
     * @param operand The operand of the modifier.
     * @param serializable If the modifier is serializable.
     * @returns A new attribute modifier.
     */
    constructor(id: string, name: string, amount: number, operation: number, operand: number, serializable: boolean);
    static read(stream: BinaryStream): AttributeModifier;
    static write(stream: BinaryStream, value: AttributeModifier): void;
}

declare class Attribute extends DataType {
    /**
     * The minimum value of the attribute.
     */
    min: number;
    /**
     * The maximum value of the attribute
     */
    max: number;
    /**
     * The current value of the attribute.
     */
    current: number;
    /**
     * The default minimum value of the attribute.
     */
    defaultMin: number;
    /**
     * The default maximum value of the attribute.
     */
    defaultMax: number;
    /**
     * The default value of the attribute.
     */
    default: number;
    /**
     * The name of the attribute.
     */
    name: AttributeName;
    /**
     * The modifiers of the attribute.
     */
    modifiers: Array<AttributeModifier>;
    /**
     * Creates a new instance of Attribute.
     * @param min - The minimum value of the attribute.
     * @param max - The maximum value of the attribute.
     * @param current - The current value of the attribute.
     * @param defaultMin - The default maximum value of the attribute.
     * @param defaultMax - The default minimum value of the attribute.
     * @param default - The default value of the attribute.
     * @param name - The name of the attribute.
     * @param modifiers - The modifiers of the attribute.
     */
    constructor(min: number, max: number, current: number, defaultMin: number, defaultMax: number, default_: number, name: AttributeName, modifiers: Array<AttributeModifier>);
    static read(stream: BinaryStream): Array<Attribute>;
    static write(stream: BinaryStream, value: Array<Attribute>): void;
}

declare class ChunkCoords extends DataType {
    x: number;
    z: number;
    constructor(x: number, z: number);
    static read(stream: BinaryStream): Array<ChunkCoords>;
    static write(stream: BinaryStream, value: Array<ChunkCoords>): void;
    /**
     * Convert the chunk coordinates to a hash.
     * @param coords The chunk coordinates.
     * @returns The hash of the chunk coordinates.
     */
    static hash(coords: ChunkCoords): bigint;
    /**
     * Convert the hash to chunk coordinates.
     * @param hash The hash.
     * @returns The chunk coordinates.
     */
    static unhash(hash: bigint): ChunkCoords;
}

declare class Links extends DataType {
    immediate: boolean;
    riddenEntityId: bigint;
    riderEntityId: bigint;
    riderInitiated: boolean;
    type: number;
    constructor(immediate: boolean, riddenEntityId: bigint, riderEntityId: bigint, riderInitiated: boolean, type: number);
    static read(stream: BinaryStream): Array<Links>;
    static write(stream: BinaryStream, value: Array<Links>): void;
}

declare class ModalFormData extends DataType {
    static read(stream: BinaryStream, _endian: Endianness, response: boolean): string | null;
    static write(stream: BinaryStream, value: string | null, _endian: Endianness, response: boolean): void;
}

declare class ModalFormCanceled extends DataType {
    static read(stream: BinaryStream, _endian: Endianness, canceled: boolean): ModalFormCanceledReason | null;
    static write(stream: BinaryStream, value: ModalFormCanceledReason | null, _endian: Endianness, canceled: boolean): void;
}

declare class EntityAttributes extends DataType {
    /**
     * The name of the attribute.
     */
    name: string;
    /**
     * The minimum value of the attribute.
     */
    min: number;
    /**
     * The current value of the attribute.
     */
    value: number;
    /**
     * The maximum value of the attribute.
     */
    max: number;
    /**
     * Construct an instance of the class.
     *
     * @param name - The name of the attribute.
     * @param min - The minimum value of the attribute.
     * @param value - The current value of the attribute.
     * @param max - The maximum value of the attribute.
     */
    constructor(name: string, min: number, value: number, max: number);
    /**
     * Read the attributes from the stream.
     *
     * @param stream - The stream to read the attributes from.
     * @returns An array of attributes.
     */
    static read(stream: BinaryStream): Array<EntityAttributes>;
    /**
     * Write the attributes to the stream.
     *
     * @param stream - The stream to write the attributes to.
     * @param value - The attributes to write.
     */
    static write(stream: BinaryStream, value: Array<EntityAttributes>): void;
}

declare class FullContainerName extends DataType {
    /**
     * The identifier of the container.
     */
    readonly identifier: ContainerName;
    /**
     * The identifier of the container, if it is dynamic.
     */
    readonly dynamicIdentifier?: number;
    /**
     * Creates a new instance of FullContainerName.
     * @param identifier - The identifier of the container.
     * @param dynamicIdentifier - The identifier of the container, if it is dynamic.
     */
    constructor(identifier: ContainerName, dynamicIdentifier?: number);
    static read(stream: BinaryStream): FullContainerName;
    static write(stream: BinaryStream, value: FullContainerName): void;
}

declare class ItemStackRequestSlotInfo extends DataType {
    /**
     * The container of the stack request slot info.
     */
    readonly container: FullContainerName;
    /**
     * The slot of the stack request slot info.
     */
    readonly slot: number;
    /**
     * The stack id of the stack request slot info.
     */
    readonly stackId: number;
    /**
     * Creates a new instance of ItemStackRequestSlotInfo.
     * @param container - The container of the stack request slot info.
     * @param slot - The slot of the stack request slot info.
     * @param stackId - The stack id of the stack request slot info.
     */
    constructor(container: FullContainerName, slot: number, stackId: number);
    static read(stream: BinaryStream): ItemStackRequestSlotInfo;
    static write(stream: BinaryStream, value: ItemStackRequestSlotInfo): void;
}

interface ItemStackContainer {
    slots: Array<ContainerSlot>;
    type: ContainerName;
}
interface ContainerSlot {
    amount: number;
    durabilityCorrection: number;
    hotbarSlot: number;
    nametag: string;
    runtimeId: number;
    slot: number;
}
declare class ItemStackResponses extends DataType {
    status: ItemStackStatus;
    id: number;
    containers?: Array<ItemStackContainer>;
    constructor(status: number, id: number, containers?: Array<ItemStackContainer>);
    static read(stream: BinaryStream): Array<ItemStackResponses>;
    static write(stream: BinaryStream, value: Array<ItemStackResponses>): void;
}

declare class ItemInstanceUserData extends DataType {
    /**
     * The NBT data for the item.
     */
    nbt: CompoundTag | null;
    /**
     * Blocks the item can be placed on.
     */
    canPlaceOn: Array<string>;
    /**
     * Blocks the item can destroy.
     */
    canDestroy: Array<string>;
    /**
     * The ticking for the item.
     */
    ticking?: bigint | null;
    /**
     * Creates an instance of ItemInstanceUserData.
     * @param nbt NBT data for the item.
     * @param canPlaceOn Blocks the item can be placed on.
     * @param canDestroy Blocks the item can destroy.
     */
    constructor(nbt: CompoundTag | null, canPlaceOn: Array<string>, canDestroy: Array<string>, ticking?: bigint | null);
    static read(stream: BinaryStream, _endian: Endianness, id: number): ItemInstanceUserData;
    static write(stream: BinaryStream, value: ItemInstanceUserData, _endian: Endianness, id: number): void;
}

/**
 * Represents a network item stack descriptor.
 */
declare class NetworkItemStackDescriptor extends DataType {
    /**
     * The network id of the item.
     */
    readonly network: number;
    /**
     * The size of the stack.
     */
    readonly stackSize: number | null;
    /**
     * The metadata of the item.
     */
    readonly metadata: number | null;
    /**
     * The stack net id of the item.
     */
    readonly stackNetId: number | null;
    /**
     * The network block id of the item.
     */
    readonly networkBlockId: number | null;
    /**
     * The extra data of the item.
     */
    readonly extras: ItemInstanceUserData | null;
    /**
     * Creates an instance of NetworkItemStackDescriptor.
     * @param id The network id of the item.
     * @param stackSize The size of the stack.
     * @param metadata The metadata of the item.
     * @param stackNetId The stack net id of the item.
     * @param networkBlockid The network block id of the item.
     * @param extras The extra data of the item.
     */
    constructor(network: number, stackSize?: number | null, metadata?: number | null, stackNetId?: number | null, networkBlockid?: number | null, extras?: ItemInstanceUserData | null);
    static read(stream: BinaryStream): NetworkItemStackDescriptor;
    static write(stream: BinaryStream, value: NetworkItemStackDescriptor): void;
}

declare class ItemStacks extends DataType {
    static read(stream: BinaryStream): Array<NetworkItemStackDescriptor>;
    static write(stream: BinaryStream, value: Array<NetworkItemStackDescriptor>): void;
}

declare class VariableStringArray extends DataType {
    static read(stream: BinaryStream): Array<string>;
    static write(stream: BinaryStream, value: Array<string>): void;
}

/**
 * Represents a enum for the available command packet.
 */
declare class Enums extends DataType {
    /**
     * The name of the enum.
     */
    readonly name: string;
    /**
     * The indexed values of the enum.
     */
    readonly values: Array<number>;
    /**
     * Creates a new enum.
     * @param name The name of the enum.
     * @param values The indexed values of the enum.
     */
    constructor(name: string, values: Array<number>);
    static read(stream: BinaryStream, endian: Endianness, enumValues: Array<string>): Array<Enums>;
    static write(stream: BinaryStream, value: Array<Enums>, endian: Endianness, enumValues: Array<string>): void;
}

interface SubcommandValue {
    index: number;
    value: number;
}
declare class Subcommands extends DataType {
    name: string;
    values: Array<SubcommandValue>;
    constructor(name: string, values: Array<SubcommandValue>);
    static read(stream: BinaryStream): Array<Subcommands>;
    static write(stream: BinaryStream, value: Array<Subcommands>): void;
}

interface CommandsOverload {
    chaining: boolean;
    parameters: Array<OverloadParameter>;
}
interface OverloadParameter {
    symbol: number;
    name: string;
    optional: boolean;
    options: number;
}
/**
 * Represents the commands of a available command packet.
 */
declare class Commands extends DataType {
    /**
     * The name of the command.
     */
    readonly name: string;
    /**
     * The description of the command.
     */
    readonly description: string;
    /**
     * The flags of the command. Setting this value to 1 will make the command blue.
     */
    readonly flags: number;
    /**
     * The permission level of the command.
     */
    readonly permissionLevel: number;
    /**
     * The alias of the command.
     */
    readonly alias: number;
    /**
     * The subcommands of the command.
     */
    readonly subcommands: Array<number>;
    /**
     * The overloads of the command.
     */
    readonly overloads: Array<CommandsOverload>;
    constructor(name: string, description: string, flags: number, permissionLevel: number, alias: number, subcommands: Array<number>, overloads: Array<CommandsOverload>);
    static read(stream: BinaryStream): Array<Commands>;
    static write(stream: BinaryStream, value: Array<Commands>): void;
}

declare class DynamicEnums extends DataType {
    name: string;
    values: Array<string>;
    constructor(name: string, values: Array<string>);
    static read(stream: BinaryStream): Array<DynamicEnums>;
    static write(stream: BinaryStream, value: Array<DynamicEnums>): void;
}

declare class EnumConstraints extends DataType {
    valueIndex: number;
    enumIndex: number;
    constaints: Array<number>;
    constructor(valueIndex: number, enumIndex: number, constaints: Array<number>);
    static read(stream: BinaryStream): Array<EnumConstraints>;
    static write(stream: BinaryStream, value: Array<EnumConstraints>): void;
}

declare class AnimateAction extends DataType {
    static read(stream: BinaryStream, endian: Endianness, id: AnimateId): number | null;
    static write(stream: BinaryStream, value: number | null): void;
}

declare enum CommandOriginDataTypes {
    ORIGIN_PLAYER = 0,
    ORIGIN_BLOCK = 1,
    ORIGIN_MINECART_BLOCK = 2,
    ORIGIN_DEV_CONSOLE = 3,
    ORIGIN_TEST = 4,
    ORIGIN_AUTOMATION_PLAYER = 5,
    ORIGIN_CLIENT_AUTOMATION = 6,
    ORIGIN_DEDICATED_SERVER = 7,
    ORIGIN_ENTITY = 8,
    ORIGIN_VIRTUAL = 9,
    ORIGIN_GAME_ARGUMENT = 10,
    ORIGIN_ENTITY_SERVER = 11
}
declare class CommandOriginData extends DataType {
    origin: CommandOriginDataTypes;
    uuid: string;
    requestId: string;
    playerActorUniqueId: bigint;
    constructor(origin: CommandOriginDataTypes, uuid: string, requestId: string, playerActorUniqueId: bigint);
    static read(stream: BinaryStream): CommandOriginData;
    static write(stream: BinaryStream, value: CommandOriginData): void;
}

declare class CommandOutputMessage extends DataType {
    isInternal: boolean;
    messageId: string;
    parameters: Array<string>;
    constructor(isInternal: boolean, messageId: string, parameters: Array<string>);
    static read(stream: BinaryStream): CommandOutputMessage;
    static write(stream: BinaryStream, value: CommandOutputMessage): void;
}

declare enum CommandOutputType {
    TYPE_LAST = 0,
    TYPE_SILENT = 1,
    TYPE_ALL = 2,
    TYPE_DATA_SET = 3
}
declare class CommandOutputData extends DataType {
    originData: CommandOriginData;
    outputType: CommandOutputType;
    successCount: number;
    messages: Array<CommandOutputMessage>;
    data: string;
    constructor(originData: CommandOriginData, outputType: CommandOutputType, successCount: number, messages: Array<CommandOutputMessage>, data: string);
    static read(stream: BinaryStream): CommandOutputData;
    static write(stream: BinaryStream, value: CommandOutputData): void;
}

declare class Rotation extends DataType {
    /**
     * The yaw of the vector.
     */
    yaw: number;
    /**
     * The pitch of the vector.
     */
    pitch: number;
    /**
     * The head yaw of the vector.
     */
    headYaw: number;
    /**
     * Rotation
     *
     * @param yaw The yaw of the vector.
     * @param pitch The pitch of the vector.
     * @param headYaw The head yaw of the vector.
     */
    constructor(yaw: number, pitch: number, headYaw: number);
    /**
     * Sets the coordinates of the 3D vector.
     * @param other The other 3D vector to set the coordinates to.
     */
    set(other: Rotation): void;
    /**
     * Floors the coordinates of the 3D vector.
     *
     * @returns The 3D vector with the coordinates floored.
     */
    floor(): this;
    /**
     * Converts the rotation to a vector3f.
     *
     * @returns The vector3f that was converted.
     */
    static fromVector3f(vector: Vector3f): Rotation;
    /**
     * Reads a rotation from the stream.
     *
     * @param stream The stream to read from.
     * @returns The rotation that was read.
     */
    static read(stream: BinaryStream): Rotation;
    /**
     * Writes a rotation to the stream.
     *
     * @param stream The stream to write to.
     * @param value The rotation to write.
     */
    static write(stream: BinaryStream, value: Rotation): void;
}

declare class NetworkItemInstanceDescriptor extends DataType {
    network: number;
    stackSize: number | null;
    metadata: number | null;
    networkBlockId: number | null;
    extras: ItemInstanceUserData | null;
    /**
     * Creates an instance of NetworkItemInstanceDescriptor.
     * @param id The network id of the item.
     * @param stackSize The size of the stack.
     * @param metadata The metadata of the item.
     * @param auxValue The aux value of the item.
     * @param userData The user data of the item.
     */
    constructor(network: number, stackSize?: number | null, metadata?: number | null, networkBlockId?: number | null, extras?: ItemInstanceUserData | null);
    static read(stream: BinaryStream): NetworkItemInstanceDescriptor;
    static write(stream: BinaryStream, value: NetworkItemInstanceDescriptor): void;
}

declare class CreativeItems extends DataType {
    static read(stream: BinaryStream): Array<NetworkItemInstanceDescriptor>;
    static write(stream: BinaryStream, value: Array<NetworkItemInstanceDescriptor>): void;
}

declare class ComponentItem extends DataType {
    readonly name: string;
    readonly data: CompoundTag;
    constructor(name: string, data: CompoundTag);
    static read(stream: BinaryStream): Array<ComponentItem>;
    static write(stream: BinaryStream, value: Array<ComponentItem>): void;
}

interface Transactions {
    containerId: ContainerId;
    changedSlots: Array<number>;
}
/**
 * The LegacyTransaction class is used to represent a legacy transaction.
 * This system is still used for some inventory related transactions.
 */
declare class LegacyTransaction extends DataType {
    /**
     * The request identifier of the legacy transaction.
     */
    readonly request: number;
    /**
     * The actions of the legacy transaction.
     * If the request identifier is 0, then this value will not be present.
     */
    readonly actions: Array<Transactions> | null;
    /**
     * Creates an instance of LegacyTransaction.
     *
     * @param request The request identifier of the legacy transaction.
     * @param actions The actions of the legacy transaction.
     */
    constructor(request: number, actions?: Array<Transactions> | null);
    static read(stream: BinaryStream): LegacyTransaction;
    static write(stream: BinaryStream, value: LegacyTransaction): void;
}

/**
 * Represents the source of an inventory action.
 */
declare class InventorySource extends DataType {
    /**
     * The source type of the inventory action.
     */
    readonly type: InventorySourceType;
    /**
     * The container id of the inventory source.
     * If the source type is not ContainerInventory, then this value will not be present.
     */
    readonly containerId: ContainerId | null;
    /**
     * The bit flags of the inventory source.
     * If the source type is not GlobalInteraction, then this value will not be present.
     */
    readonly bitFlags: number | null;
    /**
     * Creates an instance of InventorySource.
     *
     * @param type The source type of the inventory action.
     * @param containerId The container id of the inventory source.
     * @param bitFlags The bit flags of the inventory source.
     */
    constructor(type: InventorySourceType, containerId?: ContainerId | null, bitFlags?: number | null);
    static read(stream: BinaryStream): InventorySource;
    static write(stream: BinaryStream, value: InventorySource): void;
}

/**
 * Represents an inventory action with in a inventory transaction.
 */
declare class InventoryAction extends DataType {
    /**
     * The source type of the inventory action.
     */
    readonly source: InventorySource;
    /**
     * The slot of the inventory action.
     */
    readonly slot: number;
    /**
     * The old item of the inventory action.
     */
    readonly oldItem: NetworkItemStackDescriptor;
    /**
     * The new item of the inventory action.
     */
    readonly newItem: NetworkItemStackDescriptor;
    /**
     * Creates a new instance of InventoryAction.
     *
     * @param source - The source type of the inventory action.
     * @param slot - The slot of the inventory action.
     * @param oldItem - The old item of the inventory action.
     * @param newItem - The new item of the inventory action.
     */
    constructor(source: InventorySource, slot: number, oldItem: NetworkItemStackDescriptor, newItem: NetworkItemStackDescriptor);
    static read(stream: BinaryStream): InventoryAction;
    static write(stream: BinaryStream, value: InventoryAction): void;
}

/**
 * Represents an item use inventory transaction.
 */
declare class ItemUseInventoryTransaction extends DataType {
    /**
     * The type of the item use inventory transaction.
     */
    readonly type: ItemUseInventoryTransactionType;
    /**
     * The trigger type of the item use inventory transaction.
     */
    readonly triggerType: TriggerType;
    /**
     * The block position of the item use inventory transaction.
     */
    readonly blockPosition: BlockPosition;
    /**
     * The block face of the item use inventory transaction.
     */
    readonly face: BlockFace;
    /**
     * The slot of the item use inventory transaction.
     */
    readonly slot: number;
    /**
     * The item of the item use inventory transaction.
     */
    readonly item: NetworkItemStackDescriptor;
    /**
     * The from position of the item use inventory transaction.
     */
    readonly fromPosition: Vector3f;
    /**
     * The click position of the item use inventory transaction.
     */
    readonly clickPosition: Vector3f;
    /**
     * The network block id of the item use inventory transaction.
     */
    readonly networkBlockId: number;
    /**
     * Whether or not the transaction is an initial transaction.
     */
    readonly initialTransaction: boolean;
    /**
     * Creates an instance of ItemUseInventoryTransaction.
     *
     * @param type The type of the item use inventory transaction.
     * @param triggerType The trigger type of the item use inventory transaction.
     * @param blockPosition The block position of the item use inventory transaction.
     * @param face The block face of the item use inventory transaction.
     * @param slot The slot of the item use inventory transaction.
     * @param item The item of the item use inventory transaction.
     * @param fromPosition The from position of the item use inventory transaction.
     * @param clickPosition The click position of the item use inventory transaction.
     * @param networkBlockId The network block id of the item use inventory transaction.
     * @param initialTransaction Whether or not the transaction is an initial transaction.
     */
    constructor(type: ItemUseInventoryTransactionType, triggerType: TriggerType, blockPosition: BlockPosition, face: BlockFace, slot: number, item: NetworkItemStackDescriptor, fromPosition: Vector3f, clickPosition: Vector3f, networkBlockId: number, initialTransaction: boolean);
    static read(stream: BinaryStream): ItemUseInventoryTransaction;
    static write(stream: BinaryStream, value: ItemUseInventoryTransaction): void;
}

/**
 * Represents an item use on entity inventory transaction.
 */
declare class ItemUseOnEntityInventoryTransaction extends DataType {
    /**
     * The runtime ID of the actor.
     */
    readonly actorRuntimeId: bigint;
    /**
     * The type of the item use on entity inventory transaction.
     */
    readonly type: ItemUseOnEntityInventoryTransactionType;
    /**
     * The slot of the item use on entity inventory transaction.
     */
    readonly slot: number;
    /**
     * The item of the item use on entity inventory transaction.
     */
    readonly item: NetworkItemStackDescriptor;
    /**
     * The from position of the item use on entity inventory transaction.
     */
    readonly fromPosition: Vector3f;
    /**
     * The click position of the item use on entity inventory transaction.
     */
    readonly clickPosition: Vector3f;
    /**
     * Creates an instance of ItemUseOnEntityInventoryTransaction.
     * @param actorRuntimeId - The runtime ID of the actor.
     * @param type - The type of the item use on entity inventory transaction.
     * @param slot - The slot of the item use on entity inventory transaction.
     * @param item - The item of the item use on entity inventory transaction.
     * @param fromPosition - The from position of the item use on entity inventory transaction.
     * @param clickPosition - The click position of the item use on entity inventory transaction.
     */
    constructor(actorRuntimeId: bigint, type: ItemUseOnEntityInventoryTransactionType, slot: number, item: NetworkItemStackDescriptor, fromPosition: Vector3f, clickPosition: Vector3f);
    static read(stream: BinaryStream): ItemUseOnEntityInventoryTransaction;
    static write(stream: BinaryStream, value: ItemUseOnEntityInventoryTransaction): void;
}

declare class ItemReleaseInventoryTransaction extends DataType {
    /**
     * The type of the item release inventory transaction.
     */
    readonly type: ItemReleaseInventoryTransactionType;
    /**
     * The slot of the item release inventory transaction.
     */
    readonly slot: number;
    /**
     * The item of the item release inventory transaction.
     */
    readonly item: NetworkItemStackDescriptor;
    /**
     * The head position of the item release inventory transaction.
     */
    readonly headPosition: Vector3f;
    /**
     * Creates an instance of ItemReleaseInventoryTransaction.
     * @param type - The type of the item release inventory transaction.
     * @param slot - The slot of the item release inventory transaction.
     * @param item - The item of the item release inventory transaction.
     * @param headPosition - The head position of the item release inventory transaction.
     */
    constructor(type: ItemReleaseInventoryTransactionType, slot: number, item: NetworkItemStackDescriptor, headPosition: Vector3f);
    static read(stream: BinaryStream): ItemReleaseInventoryTransaction;
    static write(stream: BinaryStream, value: ItemReleaseInventoryTransaction): void;
}

/**
 * Represents an inventory transaction.
 */
declare class InventoryTransaction extends DataType {
    /**
     * The type of the inventory transaction.
     */
    readonly type: ComplexInventoryTransaction;
    /**
     * The actions of the inventory transaction.
     */
    readonly actions: Array<InventoryAction>;
    /**
     * The item use of the inventory transaction.
     */
    readonly itemUse: ItemUseInventoryTransaction | null;
    /**
     * The item use on entity of the inventory transaction.
     */
    readonly itemUseOnEntity: ItemUseOnEntityInventoryTransaction | null;
    /**
     * The item release of the inventory transaction.
     */
    readonly itemRelease: ItemReleaseInventoryTransaction | null;
    /**
     * Creates a new instance of InventoryTransaction.
     * @param actions - The actions of the inventory transaction.
     * @param type - The type of the inventory transaction.
     * @param itemUse - The item use of the inventory transaction.
     * @param itemUseOnEntity - The item use on entity of the inventory transaction.
     * @param itemRelease - The item release of the inventory transaction.
     */
    constructor(type: ComplexInventoryTransaction, actions: Array<InventoryAction>, itemUse?: ItemUseInventoryTransaction | null, itemUseOnEntity?: ItemUseOnEntityInventoryTransaction | null, itemRelease?: ItemReleaseInventoryTransaction | null);
    static read(stream: BinaryStream): InventoryTransaction;
    static write(stream: BinaryStream, value: InventoryTransaction): void;
}

/**
 * Represents the enum values of a available command packet.
 */
declare class EnumValues extends DataType {
    static read(stream: BinaryStream): Array<string>;
    static write(stream: BinaryStream, enumValues: Array<string>): void;
}

/**
 * Represents the chained subcommand values of a available command packet.
 */
declare class ChainedSubcommandValues extends DataType {
    static read(stream: BinaryStream): Array<string>;
    static write(stream: BinaryStream, chainedSubcommandValues: Array<string>): void;
}

/**
 * Represents the post fixes of a available command packet.
 */
declare class PostFixes extends DataType {
    static read(stream: BinaryStream): Array<string>;
    static write(stream: BinaryStream, postFixes: Array<string>): void;
}

declare class ScoreEntry extends DataType {
    /**
     * The global unique identifier of the scoreboard.
     */
    readonly scoreboardId: bigint;
    /**
     * The name of the objective.
     */
    readonly objectiveName: string;
    /**
     * The score of the entry.
     */
    readonly score: number;
    /**
     * The identity type of the score entry.
     */
    readonly identityType: ScoreboardIdentityType | null;
    /**
     * The unique identifier type of the entity.
     */
    readonly actorUniqueId: bigint | null;
    /**
     * The type of the entry.
     */
    readonly customName: string | null;
    /**
     * Creates a new score entry.
     * @param scoreboardId
     * @param objectiveName
     * @param score
     * @param identityType
     * @param actorUniqueId
     * @param customName
     */
    constructor(scoreboardId: bigint, objectiveName: string, score: number, identityType: ScoreboardIdentityType | null, actorUniqueId: bigint | null, customName: string | null);
    static read(stream: BinaryStream, _: Endianness, type: ScoreboardActionType): Array<ScoreEntry>;
    static write(stream: BinaryStream, value: Array<ScoreEntry>, _: Endianness, type: ScoreboardActionType): void;
}

declare class ScoreboardIdentity extends DataType {
    scoreboardId: bigint;
    entityUniqueId: bigint;
    constructor(scoreboardId: bigint, entityUniqueId: bigint);
    static read(stream: BinaryStream): Array<ScoreboardIdentity>;
    static write(stream: BinaryStream, value: Array<ScoreboardIdentity>): void;
}

declare class HudElementData extends DataType {
    /**
     * The element of the hud.
     */
    readonly element: HudElement;
    /**
     * Creates a new hud element data.
     * @param element The element of the hud.
     */
    constructor(element: HudElement);
    static read(stream: BinaryStream): Array<HudElementData>;
    static write(stream: BinaryStream, value: Array<HudElementData>): void;
}

declare class BossEventAdd extends DataType {
    readonly title: string;
    readonly percent: number;
    readonly darkenScreen: number;
    readonly color: BossEventColor;
    readonly overlay: number;
    constructor(title: string, percent: number, darkenScreen: number, color: BossEventColor, overlay: number);
    static read(stream: BinaryStream, _endian: Endianness, type: BossEventUpdateType): BossEventAdd | null;
    static write(stream: BinaryStream, value: BossEventAdd, _endian: Endianness, type: BossEventUpdateType): void;
}

declare class BossEventUpdate extends DataType {
    readonly playerUniqueId?: bigint | null;
    readonly percent?: number | null;
    readonly title?: string | null;
    readonly darkenScreen?: number | null;
    readonly color?: BossEventColor | null;
    readonly overlay?: number | null;
    constructor(playerUniqueId?: bigint | null, percent?: number | null, title?: string | null, darkenScreen?: number | null, color?: BossEventColor | null, overlay?: number | null);
    static read(stream: BinaryStream, _endian: Endianness, type: BossEventUpdateType): BossEventUpdate | null;
    static write(stream: BinaryStream, value: BossEventUpdate, _endian: Endianness, type: BossEventUpdateType): void;
}

declare class AnimateEntity extends DataType {
    actorRuntimeId: bigint;
    constructor(actorRuntimeId: bigint);
    static read(stream: BinaryStream): Array<AnimateEntity>;
    static write(stream: BinaryStream, value: Array<AnimateEntity>): void;
}

declare class Emotes extends DataType {
    uuid: string;
    constructor(uuid: string);
    static read(stream: BinaryStream): Array<Emotes>;
    static write(stream: BinaryStream, value: Array<Emotes>): void;
}

declare class DeathParameters extends DataType {
    message: string;
    constructor(message: string);
    static read(stream: BinaryStream): Array<DeathParameters>;
    static write(stream: BinaryStream, value: Array<DeathParameters>): void;
}

/**
 * ARGB Color class that
 * Ranges from 0-255
 */
declare class Color extends DataType {
    /**
     * The alpha value of the color
     */
    alpha: number;
    /**
     * The red amount of the color
     */
    red: number;
    /**
     * The red amount of the color
     */
    green: number;
    /**
     * The blue amount of the color
     */
    blue: number;
    /**
     * Creates a new ARGB color
     * @param alpha number the alpha value of the color
     * @param red number the red value of the color
     * @param green number the green value of the color
     * @param blue number the blue value of the color
     */
    constructor(alpha: number, red: number, green: number, blue: number);
    /**
     * Creates a new color based on 2 colors
     * @param color1 First color to mix
     * @param color2 Second color to mix
     * @returns Color The resulting color
     */
    static mix(color1: Color, color2: Color): Color;
    /**
     * Returns the serialized color
     * @returns number The serialzed color
     */
    toInt(): number;
    /**
     * Gets an color from the serialized color number
     * @param color number The serialized color to deserialize
     * @returns Color
     */
    static fromInt(color: number): Color;
    static write(stream: BinaryStream, value: Color): void;
}

declare class DataItem<T = unknown> extends DataType {
    /**
     * The identifier of the data item.
     */
    readonly identifier: ActorDataId;
    /**
     * The type of the data item.
     */
    readonly type: ActorDataType;
    /**
     * The value of the data item.
     */
    readonly value: T;
    /**
     * Creates a new data item.
     * @param identifier The identifier of the data item.
     * @param type The type of the data item.
     * @param value The value of the data item.
     */
    constructor(identifier: ActorDataId, type: ActorDataType, value: T);
    static read(stream: BinaryStream): Array<DataItem>;
    static write(stream: BinaryStream, data: Array<DataItem>): void;
}

interface Data {
    index: number;
    value: number;
}
declare class PropertySyncData extends DataType {
    /**
     * The floats of the property sync data.
     */
    readonly floats: Array<Data>;
    /**
     * The ints of the property sync data.
     */
    readonly ints: Array<Data>;
    /**
     * Creates a new property sync data.
     * @param floats The floats of the property sync data.
     * @param ints The ints of the property sync data.
     */
    constructor(floats: Array<Data>, ints: Array<Data>);
    static read(stream: BinaryStream): PropertySyncData;
    static write(stream: BinaryStream, value: PropertySyncData): void;
}

declare class BookActions extends DataType {
    pageIndex: number;
    pageIndexB: number;
    textA: string;
    textB: string;
    xuid: string;
    constructor(pageIndex: number, textA: string, textB: string, xuid: string, pageIndexB: number);
    static read(stream: BinaryStream, _: Endianness, action: BookEditAction): BookActions;
    static write(stream: BinaryStream, value: BookActions, _: Endianness, action: BookEditAction): void;
}

declare class Optional extends DataType {
    static read<T extends typeof DataType>(stream: BinaryStream, endian?: Endianness, parameter?: unknown, type?: T | ValidTypes): unknown | undefined;
    static write<T extends typeof DataType>(stream: BinaryStream, value: unknown, endian?: Endianness, parameter?: unknown, type?: T | ValidTypes): void;
    static getType(value: unknown): ValidTypes | undefined;
}

declare class CameraPreset extends DataType {
    name: string;
    parent: string;
    position?: Vector3f;
    rotation?: Vector2f;
    speed?: number;
    snapToTarget?: boolean;
    viewOffset?: Vector2f;
    entityOffset?: Vector3f;
    radius?: number;
    listener?: CameraAudioListener;
    effects?: boolean;
    constructor(name: string, parent: string, position?: Vector3f, rotation?: Vector2f, speed?: number, snapToTarget?: boolean, viewOffset?: Vector2f, entityOffset?: Vector3f, radius?: number, listener?: CameraAudioListener, effects?: boolean);
    static read(stream: BinaryStream): Array<CameraPreset>;
    static write(stream: BinaryStream, presets: Array<CameraPreset>): void;
}

declare class CameraSetEasing extends DataType {
    type: EasingType;
    duration: number;
    constructor(type: EasingType, duration: number);
    static write(stream: BinaryStream, value: CameraSetEasing): void;
}

declare class CameraSetInstruction extends DataType {
    runtimeId: number;
    easing?: CameraSetEasing;
    position?: Vector3f;
    rotation?: Vector2f;
    facing?: Vector3f;
    constructor(runtimeId: number, easing?: CameraSetEasing, position?: Vector3f, rotation?: Vector2f, facing?: Vector3f);
    static write(stream: BinaryStream, value: CameraSetInstruction): void;
}

declare class CameraFadeDuration extends DataType {
    fadeIn: number;
    hold: number;
    fadeOut: number;
    constructor(fadeIn: number, holdDuration: number, fadeOut: number);
    static write(stream: BinaryStream, value: CameraFadeDuration): void;
}

declare class CameraFadeInstruction extends DataType {
    duration?: CameraFadeDuration;
    color?: Vector3f;
    constructor(duration?: CameraFadeDuration, color?: Vector3f);
    static write(stream: BinaryStream, value: CameraFadeInstruction): void;
}

declare class CameraInstructions extends DataType {
    Set?: CameraSetInstruction;
    Clear?: boolean;
    Fade?: unknown;
    constructor(Set?: CameraSetInstruction, Clear?: boolean, Fade?: CameraFadeInstruction);
    static write(stream: BinaryStream, value: CameraInstructions): void;
}

interface RecipeIngredientDefault {
    networkId: number;
    metadata: number;
}
interface RecipeIngredientMolang {
    molang: string;
    version: number;
}
interface RecipeIngredientItemTag {
    tag: string;
}
interface RecipeIngredientDeferred {
    name: string;
    metadata: number;
}
interface RecipeIngredientComplexAlias {
    name: string;
}
declare class RecipeIngredient extends DataType {
    /**
     * The type of the ingredient.
     */
    readonly type: InternalType;
    /**
     * If the ingredient is a default item, this is the item's network ID and metadata.
     */
    readonly default: RecipeIngredientDefault | null;
    /**
     * If the ingredient is a molang item, this is the molang string and version
     */
    readonly molang: RecipeIngredientMolang | null;
    /**
     * If the ingredient is an item tag, this is the tag.
     */
    readonly itemTag: RecipeIngredientItemTag | null;
    /**
     * If the ingredient is a deferred item, this is the name and metadata.
     */
    readonly deferred: RecipeIngredientDeferred | null;
    /**
     * If the ingredient is a complex alias, this is the name
     */
    readonly complexAlias: RecipeIngredientComplexAlias | null;
    /**
     * The stack size of the ingredient
     */
    readonly stackSize: number;
    /**
     * Constructor for the RecipeIngredient class
     * @param type The type of the ingredient.
     * @param default_ If the ingredient is a default item, this is the item's network ID and metadata.
     * @param molang If the ingredient is a molang item, this is the molang string and version
     * @param itemTag If the ingredient is an item tag, this is the tag.
     * @param deferred If the ingredient is a deferred item, this is the name and metadata.
     * @param complexAlias If the ingredient is a complex alias, this is the name
     * @param stackSize The stack size of the ingredient
     */
    constructor(type: InternalType, default_: RecipeIngredientDefault | null, molang: RecipeIngredientMolang | null, itemTag: RecipeIngredientItemTag | null, deferred: RecipeIngredientDeferred | null, complexAlias: RecipeIngredientComplexAlias | null, stackSize: number);
    static read(stream: BinaryStream): RecipeIngredient;
    static write(stream: BinaryStream, value: RecipeIngredient): void;
}

declare class RecipeUnlockingRequirement extends DataType {
    /**
     * The context in which the recipe is unlocked.
     */
    readonly context: UnlockingContext;
    /**
     * The ingredients required to unlock the recipe.
     * Only used in the `UnlockingContext.None` context.
     */
    readonly ingredients: Array<RecipeIngredient> | null;
    /**
     * @param context The context in which the recipe is unlocked.
     * @param ingredients The ingredients required to unlock the recipe.
     * Only used in the `UnlockingContext.None` context.
     */
    constructor(context: UnlockingContext, ingredients: Array<RecipeIngredient> | null);
    static read(stream: BinaryStream): RecipeUnlockingRequirement;
    static write(stream: BinaryStream, value: RecipeUnlockingRequirement): void;
}

declare class ShapelessRecipe extends DataType {
    /**
     * The identifier of the recipe.
     */
    readonly identifier: string;
    /**
     * The ingredients required to craft the recipe.
     */
    readonly ingredients: Array<RecipeIngredient>;
    /**
     * The resultants of the recipe.
     */
    readonly resultants: Array<NetworkItemInstanceDescriptor>;
    /**
     * The UUID of the recipe.
     * why Mojank why...
     */
    readonly uuid: string;
    /**
     * The tag of the recipe.
     */
    readonly tag: string;
    /**
     * The priority of the recipe.
     */
    readonly priority: number;
    /**
     * The requirement to unlock the recipe.
     */
    readonly requirement: RecipeUnlockingRequirement;
    /**
     * The network ID of the recipe
     */
    readonly recipeNetorkId: number;
    /**
     * @param identifier The identifier of the recipe.
     * @param ingredients The ingredients required to craft the recipe.
     * @param resultants The resultants of the recipe.
     * @param uuid The UUID of the recipe.
     * @param tag The tag of the recipe.
     * @param priority The priority of the recipe.
     * @param requirement The requirement to unlock the recipe.
     * @param recipeNetorkId The network ID of the recipe
     */
    constructor(identifier: string, ingredients: Array<RecipeIngredient>, resultants: Array<NetworkItemInstanceDescriptor>, uuid: string, tag: string, priority: number, requirement: RecipeUnlockingRequirement, recipeNetorkId: number);
    static read(stream: BinaryStream): ShapelessRecipe;
    static write(stream: BinaryStream, value: ShapelessRecipe): void;
}

declare class SmithingTransformRecipe extends DataType {
    /**
     * The identifier of the recipe
     */
    readonly identifier: string;
    /**
     * The template ingredient
     */
    readonly templateIngredient: RecipeIngredient;
    /**
     * The base ingredient
     */
    readonly baseIngredient: RecipeIngredient;
    /**
     * The additional ingredient
     */
    readonly additionalIngredient: RecipeIngredient;
    /**
     * The resultant of the recipe
     */
    readonly resultant: NetworkItemInstanceDescriptor;
    /**
     * The tag of the recipe
     */
    readonly tag: string;
    /**
     * The network ID of the recipe
     */
    readonly recipeNetworkId: number;
    /**
     * @param identifier The identifier of the recipe
     * @param templateIngredient The template ingredient
     * @param baseIngredient The base ingredient
     * @param additionalIngredient The additional ingredient
     * @param resultant The resultant of the recipe
     * @param tag The tag of the recipe
     * @param recipeNetworkId The network ID of the recipe
     */
    constructor(identifier: string, templateIngredient: RecipeIngredient, baseIngredient: RecipeIngredient, additionalIngredient: RecipeIngredient, resultant: NetworkItemInstanceDescriptor, tag: string, recipeNetworkId: number);
    static read(stream: BinaryStream): SmithingTransformRecipe;
    static write(stream: BinaryStream, value: SmithingTransformRecipe): void;
}

declare class MultiRecipe extends DataType {
    /**
     * The uuid of the recipe.
     */
    readonly uuid: string;
    /**
     * The network id of the recipe.
     */
    readonly networkId: number;
    /**
     * Creates an instance of MultiRecipe.
     * @param uuid The uuid of the recipe.
     * @param networkId The network id of the recipe.
     */
    constructor(uuid: string, networkId: number);
    static read(stream: BinaryStream): MultiRecipe;
    static write(stream: BinaryStream, value: MultiRecipe): void;
}

declare class FurnanceAuxRecipe extends DataType {
    /**
     * The input of the recipe.
     */
    readonly data: number;
    /**
     * The metadata of the recipe input.
     */
    readonly metadata: number;
    /**
     * The result of the recipe.
     */
    readonly resultant: NetworkItemInstanceDescriptor;
    /**
     * The tag of the recipe.
     */
    readonly tag: string;
    /**
     * Creates an instance of FurnanceAuxRecipe.
     * @param data The input of the recipe.
     * @param metadata The metadata of the recipe input.
     * @param resultant The result of the recipe.
     * @param tag The tag of the recipe.
     */
    constructor(data: number, metadata: number, resultant: NetworkItemInstanceDescriptor, tag: string);
    static read(stream: BinaryStream): FurnanceAuxRecipe;
    static write(stream: BinaryStream, value: FurnanceAuxRecipe): void;
}

declare class FurnanceRecipe extends DataType {
    /**
     * The input of the recipe.
     */
    readonly data: number;
    /**
     * The result of the recipe.
     */
    readonly resultant: NetworkItemInstanceDescriptor;
    /**
     * The tag of the recipe.
     */
    readonly tag: string;
    /**
     * Creates an instance of FurnanceRecipe.
     * @param data The input of the recipe.
     * @param resultant The result of the recipe.
     * @param tag The tag of the recipe.
     */
    constructor(data: number, resultant: NetworkItemInstanceDescriptor, tag: string);
    static read(stream: BinaryStream): FurnanceRecipe;
    static write(stream: BinaryStream, value: FurnanceRecipe): void;
}

declare class ShapedRecipe extends DataType {
    /**
     * The identifier of the recipe.
     */
    readonly identifier: string;
    /**
     * The width of the recipe.
     */
    readonly width: number;
    /**
     * The height of the recipe.
     */
    readonly height: number;
    /**
     * The ingredients required to craft the recipe.
     * `width` * `height` array
     */
    readonly ingredients: Array<RecipeIngredient>;
    /**
     * The resultants of the recipe
     */
    readonly resultants: Array<NetworkItemInstanceDescriptor>;
    /**
     * The UUID of the recipe.
     */
    readonly uuid: string;
    /**
     * The tag of the recipe.
     */
    readonly tag: string;
    /**
     * The priority of the recipe
     */
    readonly priority: number;
    /**
     * Whether the recipe is symmetrical
     */
    readonly symmetrical: boolean;
    /**
     * The requirement to unlock the recipe
     */
    readonly requirement: RecipeUnlockingRequirement;
    /**
     * The network ID of the recipe
     */
    readonly recipeNetorkId: number;
    /**
     * @param identifier The identifier of the recipe
     * @param width The width of the recipe
     * @param height The height of the recipe
     * @param ingredients The ingredients required to craft the recipe
     * @param resultants The resultants of the recipe
     * @param uuid The UUID of the recipe
     * @param tag The tag of the recipe
     * @param priority The priority of the recipe
     * @param symmetrical Whether the recipe is symmetrical
     * @param requirement The requirement to unlock the recipe
     * @param recipeNetorkId The network ID of the recipe
     */
    constructor(identifier: string, width: number, height: number, ingredients: Array<RecipeIngredient>, resultants: Array<NetworkItemInstanceDescriptor>, uuid: string, tag: string, priority: number, symmetrical: boolean, requirement: RecipeUnlockingRequirement, recipeNetorkId: number);
    static read(stream: BinaryStream): ShapedRecipe;
    static write(stream: BinaryStream, value: ShapedRecipe): void;
}

declare class SmithingTrimRecipe extends DataType {
    /**
     * The identifier of the recipe
     */
    readonly identifier: string;
    /**
     * The template ingredient
     */
    readonly templateIngredient: RecipeIngredient;
    /**
     * The base ingredient
     */
    readonly baseIngredient: RecipeIngredient;
    /**
     * The additional ingredient
     */
    readonly additionalIngredient: RecipeIngredient;
    /**
     * The tag of the recipe
     */
    readonly tag: string;
    /**
     * The network ID of the recipe
     */
    readonly recipeNetworkId: number;
    /**
     * @param identifier The identifier of the recipe
     * @param templateIngredient The template ingredient
     * @param baseIngredient The base ingredient
     * @param additionalIngredient The additional ingredient
     * @param tag The tag of the recipe
     * @param recipeNetworkId The network ID of the recipe
     */
    constructor(identifier: string, templateIngredient: RecipeIngredient, baseIngredient: RecipeIngredient, additionalIngredient: RecipeIngredient, tag: string, recipeNetworkId: number);
    static read(stream: BinaryStream): SmithingTrimRecipe;
    static write(stream: BinaryStream, value: SmithingTrimRecipe): void;
}

declare class UserDataShapelessRecipe extends DataType {
    /**
     * The identifier of the recipe.
     */
    readonly identifier: string;
    /**
     * The ingredients required to craft the recipe.
     */
    readonly ingredients: Array<RecipeIngredient>;
    /**
     * The resultants of the recipe.
     */
    readonly resultants: Array<NetworkItemInstanceDescriptor>;
    /**
     * The UUID of the recipe.
     * why Mojank why...
     */
    readonly uuid: string;
    /**
     * The tag of the recipe.
     */
    readonly tag: string;
    /**
     * The priority of the recipe.
     */
    readonly priority: number;
    /**
     * The requirement to unlock the recipe.
     */
    readonly requirement: RecipeUnlockingRequirement;
    /**
     * @param identifier The identifier of the recipe.
     * @param ingredients The ingredients required to craft the recipe.
     * @param resultants The resultants of the recipe.
     * @param uuid The UUID of the recipe.
     * @param tag The tag of the recipe.
     * @param priority The priority of the recipe.
     */
    constructor(identifier: string, ingredients: Array<RecipeIngredient>, resultants: Array<NetworkItemInstanceDescriptor>, uuid: string, tag: string, priority: number, requirement: RecipeUnlockingRequirement);
    static read(stream: BinaryStream): UserDataShapelessRecipe;
    static write(stream: BinaryStream, value: UserDataShapelessRecipe): void;
}

declare class CraftingDataEntry extends DataType {
    readonly type: CraftingDataEntryType;
    readonly shapeless: ShapelessRecipe | null;
    readonly shaped: ShapedRecipe | null;
    readonly furnace: FurnanceRecipe | null;
    readonly furnaceAux: FurnanceAuxRecipe | null;
    readonly multi: MultiRecipe | null;
    readonly userDataShapeless: UserDataShapelessRecipe | null;
    readonly shapelessChemistry: ShapelessRecipe | null;
    readonly shapedChemistry: ShapedRecipe | null;
    readonly smithingTransform: SmithingTransformRecipe | null;
    readonly smithingTrim: SmithingTrimRecipe | null;
    constructor(type: CraftingDataEntryType, shapeless: ShapelessRecipe | null, shaped: ShapedRecipe | null, furnace: FurnanceRecipe | null, furnaceAux: FurnanceAuxRecipe | null, multi: MultiRecipe | null, userDataShapeless: UserDataShapelessRecipe | null, shapelessChemistry: ShapelessRecipe | null, shapedChemistry: ShapedRecipe | null, smithingTransform: SmithingTransformRecipe | null, smithingTrim: SmithingTrimRecipe | null);
    static read(stream: BinaryStream): Array<CraftingDataEntry>;
    static write(stream: BinaryStream, entries: Array<CraftingDataEntry>): void;
}

declare class PotionMixDataEntry extends DataType {
    /**
     * The input network ID.
     */
    readonly inputNetworkId: number;
    /**
     * The input metadata.
     */
    readonly inputMetadata: number;
    /**
     * The ingredient network ID.
     */
    readonly ingredientNetworkId: number;
    /**
     * The ingredient metadata.
     */
    readonly ingredientMetadata: number;
    /**
     * The output network ID.
     */
    readonly resultantNetworkId: number;
    /**
     * The output metadata.
     */
    readonly resultantMetadata: number;
    /**
     * Creates an instance of PotionMixDataEntry.
     * @param inputNetworkId The input network ID.
     * @param inputMetadata The input metadata.
     * @param ingredientNetworkId The ingredient network ID.
     * @param ingredientMetadata The ingredient metadata.
     * @param resultantNetworkId The output network ID.
     * @param resultantMetadata The output metadata.
     */
    constructor(inputNetworkId: number, inputMetadata: number, ingredientNetworkId: number, ingredientMetadata: number, resultantNetworkId: number, resultantMetadata: number);
    static read(stream: BinaryStream): Array<PotionMixDataEntry>;
    static write(stream: BinaryStream, data: Array<PotionMixDataEntry>): void;
}

declare class ContainerMixDataEntry extends DataType {
    /**
     * The input network ID.
     */
    readonly inputNetworkId: number;
    /**
     * The ingredient network ID.
     */
    readonly reactantNetworkId: number;
    /**
     * The output network ID.
     */
    readonly resultantNetworkId: number;
    /**
     * Creates an instance of ContainerMixDataEntry.
     * @param inputNetworkId The input network ID.
     * @param reactantNetworkId The ingredient network ID.
     * @param resultantNetworkId The output network ID.
     */
    constructor(inputNetworkId: number, reactantNetworkId: number, resultantNetworkId: number);
    static read(stream: BinaryStream): Array<ContainerMixDataEntry>;
    static write(stream: BinaryStream, entries: Array<ContainerMixDataEntry>): void;
}

declare class MaterialReducerDataEntry extends DataType {
    /**
     * The input network ID.
     */
    readonly inputNetworkId: number;
    /**
     * The network ID of the resultant.
     */
    readonly resultantNetworkId: number;
    /**
     * The stack size of the resultant.
     */
    readonly resultantStackSize: number;
    constructor(inputNetworkId: number, resultantNetworkId: number, resultantStackSize: number);
    static read(stream: BinaryStream): Array<MaterialReducerDataEntry>;
    static write(stream: BinaryStream, entries: Array<MaterialReducerDataEntry>): void;
}

declare class StructureSettings extends DataType {
    structurePalletName: string;
    ignoreEntities: boolean;
    ignoreBlocks: boolean;
    allowNonTicking: boolean;
    size: BlockPosition;
    offset: BlockPosition;
    lastEdit: bigint;
    rotation: number;
    mirror: number;
    animationMode: number;
    animationSeconds: number;
    integrityValue: number;
    integritySeed: number;
    rotationPivot: Vector3f;
    constructor(structurePalletName: string, ignoreEntities: boolean, ignoreBlocks: boolean, allowNonTicking: boolean, size: BlockPosition, offset: BlockPosition, lastEdit: bigint, rotation: number, mirror: number, animationMode: number, animationSeconds: number, integrityValue: number, integritySeed: number, rotationPivot: Vector3f);
    static write(stream: BinaryStream, value: StructureSettings): void;
    static read(stream: BinaryStream): StructureSettings;
}

declare class StructureEditorData extends DataType {
    structureName: string;
    dataField: string;
    includePlayers: boolean;
    showBoundingBox: boolean;
    blockType: number;
    structureSetting: StructureSettings;
    redstoneSaveMode: number;
    constructor(structureName: string, dataField: string, includePlayers: boolean, showBoundingBox: boolean, blockType: number, structureSettings: StructureSettings, redstoneSaveMode: number);
    static write(stream: BinaryStream, value: StructureEditorData): void;
    static read(stream: BinaryStream): StructureEditorData;
}

declare class DimensionDefinition extends DataType {
    identifier: string;
    heightMax: number;
    heightMin: number;
    generatorType: GeneratorType;
    constructor(identifier: string, heightMax: number, heightMin: number, generatorType: GeneratorType);
    static write(stream: BinaryStream, value: DimensionDefinition): void;
    static read(stream: BinaryStream): DimensionDefinition;
}

declare class DimensionDefinitionGroup extends DataType {
    definitions: Array<DimensionDefinition>;
    constructor(definitions: Array<DimensionDefinition>);
    static write(stream: BinaryStream, value: DimensionDefinitionGroup): void;
    static read(stream: BinaryStream): DimensionDefinitionGroup;
}

declare class ItemStackActionTakePlace extends DataType {
    /**
     * The amount of the item stack request action.
     */
    readonly amount: number;
    /**
     * The source of the item stack request action.
     */
    readonly source: ItemStackRequestSlotInfo;
    /**
     * The destination of the item stack request action.
     */
    readonly destination: ItemStackRequestSlotInfo;
    /**
     * Creates a new instance of ItemStackRequestAction.
     * @param amount - The amount of the item stack request action.
     * @param source - The source of the item stack request action.
     * @param destination - The destination of the item stack request action.
     */
    constructor(amount: number, source: ItemStackRequestSlotInfo, destination: ItemStackRequestSlotInfo);
    static read(stream: BinaryStream): ItemStackActionTakePlace;
    static write(stream: BinaryStream, value: ItemStackActionTakePlace): void;
}

declare class ItemStackRequestActionSwap extends DataType {
    /**
     * The source of the item stack request action.
     */
    readonly source: ItemStackRequestSlotInfo;
    /**
     * The destination of the item stack request action.
     */
    readonly destination: ItemStackRequestSlotInfo;
    /**
     * Creates a new instance of ItemStackRequestActionSwap.
     * @param source - The source of the item stack request action.
     * @param destination - The destination of the item stack request action.
     */
    constructor(source: ItemStackRequestSlotInfo, destination: ItemStackRequestSlotInfo);
    static read(stream: BinaryStream): ItemStackRequestActionSwap;
    static write(stream: BinaryStream, value: ItemStackRequestActionSwap): void;
}

declare class ItemStackRequestActionDrop extends DataType {
    /**
     * The amount of the item stack request action.
     */
    readonly amount: number;
    /**
     * The source of the item stack request action.
     */
    readonly source: ItemStackRequestSlotInfo;
    /**
     * Whether the item stack was dropped randomly.
     */
    readonly randomly: boolean;
    /**
     * Creates a new instance of ItemStackRequestActionDrop.
     * @param amount - The amount of the item stack request action.
     * @param source - The source of the item stack request action.
     * @param randomly - Whether the item stack was dropped randomly.
     */
    constructor(amount: number, source: ItemStackRequestSlotInfo, randomly: boolean);
    static read(stream: BinaryStream): ItemStackRequestActionDrop;
    static write(stream: BinaryStream, value: ItemStackRequestActionDrop): void;
}

declare class ItemStackRequestActionDestroyConsume extends DataType {
    /**
     * The amount of the item stack request action.
     */
    readonly amount: number;
    /**
     * The source of the item stack request action.
     */
    readonly source: ItemStackRequestSlotInfo;
    /**
     * Creates a new instance of ItemStackRequestActionDestroyConsume.
     * @param amount - The amount of the item stack request action.
     * @param source - The source of the item stack request action.
     */
    constructor(amount: number, source: ItemStackRequestSlotInfo);
    static read(stream: BinaryStream): ItemStackRequestActionDestroyConsume;
    static write(stream: BinaryStream, value: ItemStackRequestActionDestroyConsume): void;
}

declare class ItemStackRequestActionCreate extends DataType {
    /**
     * The slot of the stack request create action.
     */
    readonly slot: number;
    /**
     * Creates a new instance of ItemStackRequestActionCreate.
     * @param slot - The slot of the stack request create action.
     */
    constructor(slot: number);
    static read(stream: BinaryStream): ItemStackRequestActionCreate;
    static write(stream: BinaryStream, value: ItemStackRequestActionCreate): void;
}

declare class ItemStackRequestActionBeanconPayment extends DataType {
    /**
     * The primary effect of the item stack request action beacon payment.
     */
    readonly primaryEffect: EffectType;
    /**
     * The secondary effect of the item stack request action
     */
    readonly secondaryEffect: EffectType;
    /**
     * Creates a new instance of ItemStackRequestActionBeanconPayment.
     * @param primaryEffect - The primary effect of the item stack request action beacon payment.
     * @param secondaryEffect - The secondary effect of the item stack request action
     */
    constructor(primaryEffect: EffectType, secondaryEffect: EffectType);
    static read(stream: BinaryStream): ItemStackRequestActionBeanconPayment;
    static write(stream: BinaryStream, value: ItemStackRequestActionBeanconPayment): void;
}

declare class ItemStackRequestActionMineBlock extends DataType {
    /**
     * The slot of the item stack request action.
     */
    readonly slot: number;
    /**
     * The predicted durability of the item stack request action.
     */
    readonly predictedDurability: number;
    /**
     * The network id of the block of the item stack request action.
     */
    readonly networkId: number;
    /**
     * Creates a new instance of ItemStackRequestActionMineBlock.
     * @param slot - The slot of the item stack request action.
     * @param predictedDurability - The predicted durability of the item stack request action.
     * @param networkId - The network id of the block of the item stack request action.
     */
    constructor(slot: number, predictedDurability: number, networkId: number);
    static read(stream: BinaryStream): ItemStackRequestActionMineBlock;
    static write(stream: BinaryStream, value: ItemStackRequestActionMineBlock): void;
}

declare class ItemStackRequestActionCraftRecipe extends DataType {
    /**
     * The recipe id of the stack request craft recipe action.
     */
    readonly recipeId: number;
    /**
     * The amount of the stack request craft recipe action.
     */
    readonly amount: number;
    /**
     * Creates a new instance of ItemStackRequestActionCraftRecipe.
     * @param recipeId - The recipe id of the stack request craft
     * @param amount - The amount of the stack request craft recipe action.
     */
    constructor(recipeId: number, amount: number);
    static read(stream: BinaryStream): ItemStackRequestActionCraftRecipe;
    static write(stream: BinaryStream, value: ItemStackRequestActionCraftRecipe): void;
}

declare class ItemStackRequestActionCraftRecipeAuto extends DataType {
    /**
     * The recipe id of the stack request craft recipe action.
     */
    readonly recipeId: number;
    /**
     * The times crafted of the stack request craft recipe action.
     */
    readonly timesCrafted: number;
    /**
     * The ingredients of the stack request craft recipe action.
     */
    readonly ingredients: Array<RecipeIngredient>;
    /**
     * Creates a new instance of ItemStackRequestActionCraftRecipeAuto.
     * @param recipeId - The recipe id of the stack request craft
     * @param timesCrafted - The times crafted of the stack request craft recipe action.
     * @param ingredients - The ingredients of the stack request craft recipe action.
     */
    constructor(recipeId: number, timesCrafted: number, ingredients: Array<RecipeIngredient>);
    static read(stream: BinaryStream): ItemStackRequestActionCraftRecipeAuto;
    static write(stream: BinaryStream, value: ItemStackRequestActionCraftRecipeAuto): void;
}

declare class ItemStackRequestActionCraftCreative extends DataType {
    /**
     * The creative index of the stack request craft.
     */
    readonly creativeIndex: number;
    /**
     * The amount of the stack request craft.
     */
    readonly amount: number;
    /**
     * Creates a new instance of ItemStackRequestActionCraftCreative.
     * @param creativeIndex - The creative index of the stack request craft.
     * @param amount - The amount of the stack request craft.
     */
    constructor(creativeIndex: number, amount: number);
    static read(stream: BinaryStream): ItemStackRequestActionCraftCreative;
    static write(stream: BinaryStream, value: ItemStackRequestActionCraftCreative): void;
}

declare class ItemStackRequestActionOptional extends DataType {
    /**
     * The recipe id of the stack request craft recipe action.
     */
    readonly recipeId: number;
    /**
     * The times crafted of the stack request craft recipe action.
     */
    readonly filteredStringIndex: number;
    /**
     * Creates a new instance of ItemStackRequestActionCraftRecipeAuto.
     * @param recipeId - The recipe id of the stack request craft
     * @param timesCrafted - The times crafted of the stack request craft recipe action.
     */
    constructor(recipeId: number, filteredStringIndex: number);
    static read(stream: BinaryStream): ItemStackRequestActionOptional;
    static write(stream: BinaryStream, value: ItemStackRequestActionOptional): void;
}

declare class ItemStackRequestActionCraftGrindstoneRequest extends DataType {
    /**
     * The recipe id of the stack request craft grindstone action.
     */
    readonly recipeId: number;
    /**
     * The cost of the stack request craft grindstone action.
     */
    readonly cost: number;
    /**
     * The amount of the stack request craft grindstone action.
     */
    readonly amount: number;
    /**
     * Creates a new instance of ItemStackRequestActionCraftGrindstoneRequest.
     * @param recipeId - The recipe id of the stack request craft
     * @param cost - The cost of the stack request craft grindstone action.
     * @param amount - The amount of the stack request craft grindstone action.
     */
    constructor(recipeId: number, cost: number, amount: number);
    static read(stream: BinaryStream): ItemStackRequestActionCraftGrindstoneRequest;
    static write(stream: BinaryStream, value: ItemStackRequestActionCraftGrindstoneRequest): void;
}

declare class ItemStackRequestActionCraftLoomRequest extends DataType {
    /**
     * The pattern of the stack request craft loom action.
     */
    readonly pattern: string;
    /**
     * Creates a new instance of ItemStackRequestActionCraftLoomRequest.
     * @param pattern - The pattern of the stack request craft
     */
    constructor(pattern: string);
    static read(stream: BinaryStream): ItemStackRequestActionCraftLoomRequest;
    static write(stream: BinaryStream, value: ItemStackRequestActionCraftLoomRequest): void;
}

declare class ItemStackRequestActionResultsDeprecated extends DataType {
    /**
     * The resultants of the item stack request action results deprecated.
     */
    readonly resultants: Array<NetworkItemInstanceDescriptor>;
    /**
     * The amount of the item stack request action results deprecated.
     */
    readonly amount: number;
    /**
     * Creates a new instance of ItemStackRequestActionResultsDeprecated.
     * @param resultants - The resultants of the item stack request action results deprecated.
     * @param amount - The amount of the item stack request action results deprecated.
     */
    constructor(resultants: Array<NetworkItemInstanceDescriptor>, amount: number);
    static read(stream: BinaryStream): ItemStackRequestActionResultsDeprecated;
    static write(stream: BinaryStream, value: ItemStackRequestActionResultsDeprecated): void;
}

declare class ItemStackRequestAction extends DataType {
    /**
     * The action of the item stack request action.
     */
    readonly action: ItemStackRequestActionType;
    /**
     * The take or place of the item stack request action.
     */
    readonly takeOrPlace: ItemStackActionTakePlace | null;
    /**
     * The swap of the item stack request action.
     */
    readonly swap: ItemStackRequestActionSwap | null;
    /**
     * The drop of the item stack request action.
     */
    readonly drop: ItemStackRequestActionDrop | null;
    /**
     * The destroy or consume of the item stack request action.
     */
    readonly destroyOrConsume: ItemStackRequestActionDestroyConsume | null;
    /**
     * The create of the item stack request action.
     */
    readonly create: ItemStackRequestActionCreate | null;
    /**
     * The beacon payment of the item stack request action.
     */
    readonly beaconPayment: ItemStackRequestActionBeanconPayment | null;
    /**
     * The mine block of the item stack request action.
     */
    readonly mineBlock: ItemStackRequestActionMineBlock | null;
    /**
     * The craft recipe of the item stack request action.
     */
    readonly craftRecipe: ItemStackRequestActionCraftRecipe | null;
    /**
     * The craft recipe auto of the item stack request action.
     */
    readonly craftRecipeAuto: ItemStackRequestActionCraftRecipeAuto | null;
    /**
     * The craft creative of the item stack request action.
     */
    readonly craftCreative: ItemStackRequestActionCraftCreative | null;
    /**
     * The optional of the item stack request action.
     */
    readonly optional: ItemStackRequestActionOptional | null;
    /**
     * The craft grindstone request of the item stack request action.
     */
    readonly craftGrindstoneRequest: ItemStackRequestActionCraftGrindstoneRequest | null;
    /**
     * The craft loom request of the item stack request action.
     */
    readonly craftLoomRequest: ItemStackRequestActionCraftLoomRequest | null;
    /**
     * The results deprecated of the item stack request action.
     */
    readonly resultsDeprecated: ItemStackRequestActionResultsDeprecated | null;
    /**
     * Creates a new instance of ItemStackRequestAction.
     * @param action - The action of the item stack request action.
     * @param takeOrPlace - The take or place of the item stack request action.
     * @param swap - The swap of the item stack request action.
     * @param drop - The drop of the item stack request action.
     * @param destroyOrConsume - The destroy or consume of the item stack request action.
     * @param create - The create of the item stack request action.
     * @param beaconPayment - The beacon payment of the item stack request action.
     * @param mineBlock - The mine block of the item stack request action.
     * @param craftRecipe - The craft recipe of the item stack request action.
     * @param craftRecipeAuto - The craft recipe auto of the item stack request action.
     * @param craftCreative - The craft creative of the item stack request action.
     * @param optional - The optional of the item stack request action.
     * @param craftGrindstoneRequest - The craft grindstone request of the item stack request action.
     * @param craftLoomRequest - The craft loom request of the item stack request action.
     * @param resultsDeprecated - The results deprecated of the item stack request action.
     */
    constructor(action: ItemStackRequestActionType, takeOrPlace?: ItemStackActionTakePlace | null, swap?: ItemStackRequestActionSwap | null, drop?: ItemStackRequestActionDrop | null, destroyOrConsume?: ItemStackRequestActionDestroyConsume | null, create?: ItemStackRequestActionCreate | null, beaconPayment?: ItemStackRequestActionBeanconPayment | null, mineBlock?: ItemStackRequestActionMineBlock | null, craftRecipe?: ItemStackRequestActionCraftRecipe | null, craftRecipeAuto?: ItemStackRequestActionCraftRecipeAuto | null, craftCreative?: ItemStackRequestActionCraftCreative | null, optional?: ItemStackRequestActionOptional | null, craftGrindstoneRequest?: ItemStackRequestActionCraftGrindstoneRequest | null, craftLoomRequest?: ItemStackRequestActionCraftLoomRequest | null, resultsDeprecated?: ItemStackRequestActionResultsDeprecated | null);
    static read(stream: BinaryStream): ItemStackRequestAction;
}

declare class ItemStackRequest extends DataType {
    /**
     * The item stack request id.
     */
    readonly clientRequestId: number;
    /**
     * The item stack request actions.
     */
    readonly actions: Array<ItemStackRequestAction>;
    /**
     * The filter strings of the item stack request.
     */
    readonly filterStrings: Array<string>;
    /**
     * The origin of the strings filter.
     */
    readonly stringsFilterOrigin: number;
    /**
     * Creates a new instance of ItemStackRequest.
     * @param clientRequestId - The item stack request id.
     * @param actions - The item stack request actions.
     * @param filterStrings - The filter strings of the item stack request.
     * @param stringsFilterOrigin - The origin of the strings filter.
     */
    constructor(clientRequestId: number, actions: Array<ItemStackRequestAction>, filterStrings: Array<string>, stringsFilterOrigin: number);
    static read(stream: BinaryStream): Array<ItemStackRequest>;
    static write(stream: BinaryStream, value: Array<ItemStackRequest>): void;
}

declare class DisconnectMessage extends DataType {
    /**
     * The message of the disconnect message.
     */
    message: string | null;
    /**
     * The filtered message of the disconnect message.
     */
    filtered: string | null;
    /**
     * Creates a new instance of DisconnectMessage.
     * @param message - The message of the disconnect message.
     * @param filtered - The filtered message of the disconnect message.
     */
    constructor(message?: string | null, filtered?: string | null);
    static read(stream: BinaryStream, _: Endianness, hideDisconnectScreen: boolean): DisconnectMessage;
    static write(stream: BinaryStream, value: DisconnectMessage, _: Endianness, hideDisconnectScreen: boolean): void;
}

declare class Enchant extends DataType {
    id: number;
    level: number;
    constructor(id: number, level: number);
    static read(stream: BinaryStream): Array<Enchant>;
    static write(stream: BinaryStream, value: Array<Enchant>): void;
}

declare class EnchantOption extends DataType {
    cost: number;
    slotFlags: number;
    equipEnchantments: Array<Enchant>;
    heldEnchantments: Array<Enchant>;
    selfEnchantments: Array<Enchant>;
    name: string;
    optionId: number;
    constructor(cost: number, slotFlags: number, equipEnchantments: Array<Enchant>, heldEnchantments: Array<Enchant>, selfEnchantments: Array<Enchant>, name: string, optionId: number);
    static read(stream: BinaryStream): Array<EnchantOption>;
    static write(stream: BinaryStream, value: Array<EnchantOption>): void;
}

declare class ActorData extends DataType {
    readonly identifier: string;
    readonly position: Vector3f;
    readonly rotation: Rotation;
    readonly extra?: Buffer;
    constructor(identifier: string, position: Vector3f, rotation: Rotation, extra?: Buffer);
    static read(stream: BinaryStream): ActorData;
    static write(stream: BinaryStream, value: ActorData): void;
}

declare class PlayerAuthInputData extends DataType {
    /**
     * The flags of the input data.
     */
    flags: bigint;
    /**
     * Creates a new instance of PlayerAuthInputData.
     * @param flags The flags of the input data.
     */
    constructor(flags: bigint);
    /**
     * Set a flag of the input data.
     * @param flag The flag to set.
     * @param value The value to set the flag to.
     */
    setFlag(flag: InputData, value: boolean): void;
    /**
     * Check if the input data has a flag.
     * @param flag The flag to check.
     * @returns Whether the input data has the flag.
     */
    hasFlag(flag: InputData): boolean;
    /**
     * Gets all the flags of the input data.
     * @returns An array of flags.
     */
    getFlags(): Array<InputData>;
    static write(stream: BinaryStream, value: PlayerAuthInputData): void;
    static read(stream: BinaryStream): PlayerAuthInputData;
}

declare class ClientPredictedVehicle extends DataType {
    /**
     * The rotation of the vehicle.
     */
    vehicleRotation: Vector2f;
    /**
     * The unique id of the vehicle actor.
     */
    actorUniqueId: number;
    /**
     * Creates a new instance of the ClientPredictedVehicle class.
     * @param vehicleRotation The rotation of the vehicle.
     * @param actorUniqueId The unique id of the vehicle actor.
     */
    constructor(vehicleRotation: Vector2f, actorUniqueId: number);
    static read(stream: BinaryStream, _: unknown, data: PlayerAuthInputData): ClientPredictedVehicle | null;
    static write(stream: BinaryStream, value: ClientPredictedVehicle, _: unknown, data: PlayerAuthInputData): void;
}

declare class InputTransaction extends DataType {
    legacyTransaction: LegacyTransaction;
    actions: Array<InventoryAction>;
    trasactionUseItem: ItemUseInventoryTransaction;
    constructor(legacyTransactionn: LegacyTransaction, actions: Array<InventoryAction>, transactionUseItem: ItemUseInventoryTransaction);
    static write(stream: BinaryStream, value: InputTransaction): void;
    static read(stream: BinaryStream): InputTransaction;
}

declare class BlockAction extends DataType {
    action: PlayerActionType;
    /**  If action is startBreak or abortBreak or crackBreak or predictBreak or continueBreak */
    position: Vector3f | undefined;
    /**  If action is startBreak or abortBreak or crackBreak or predictBreak or continueBreak */
    face: number | undefined;
    constructor(action: PlayerActionType, position?: Vector3f, face?: number);
    static write(stream: BinaryStream, value: BlockAction): void;
    static read(stream: BinaryStream): BlockAction;
}

declare class ActorLink extends DataType {
    riddenEntityUnique: bigint;
    riderEntityUnique: bigint;
    type: ActorLinkType;
    immediate: boolean;
    riderInitiated: boolean;
    vehicleAngularVelocity: number;
    constructor(riddenEntityUnique: bigint, riderEntityUnique: bigint, type: ActorLinkType, immediate: boolean, riderInitiated: boolean, vehicleAngularVelocity: number);
    static write(stream: BinaryStream, value: ActorLink): void;
    static read(stream: BinaryStream): ActorLink;
}

declare class SignedBlockPosition extends BlockPosition {
    static read(stream: BinaryStream): SignedBlockPosition;
    static write(stream: BinaryStream, value: SignedBlockPosition): void;
}

declare class PlayerBlockActionData extends DataType {
    /**
     * The action type of the player.
     */
    type: PlayerActionType;
    /**
     * The position of the block.
     */
    position: SignedBlockPosition;
    /**
     * The face of the interacted block.
     */
    face: BlockFace;
    /**
     * Creates a new instance of the PlayerBlockActionData class.
     * @param type The action type of the player.
     * @param position The position of the block.
     * @param face The face of the interacted block.
     */
    constructor(type: PlayerActionType, position: SignedBlockPosition, face: BlockFace);
    static read(stream: BinaryStream): PlayerBlockActionData;
    static write(stream: BinaryStream, value: PlayerBlockActionData): void;
}

declare class PlayerBlockActions extends DataType {
    /**
     * The block actions performed by the player.
     */
    readonly actions: Array<PlayerBlockActionData>;
    /**
     * Creates a new instance of the PlayerBlockActions class.
     * @param actions The block actions performed by the player.
     */
    constructor(actions: Array<PlayerBlockActionData>);
    static read(stream: BinaryStream, _: unknown, data: PlayerAuthInputData): PlayerBlockActions | null;
    static write(stream: BinaryStream, value: PlayerBlockActions, _: unknown, data: PlayerAuthInputData): void;
}

declare class PlayerInputTick extends DataType {
    static read(stream: BinaryStream): bigint;
    static write(stream: BinaryStream, value: bigint): void;
}

declare class RotationByte extends DataType {
    static read(stream: BinaryStream): number;
    static write(stream: BinaryStream, value: number): void;
}

declare class Fogs extends DataType {
    fogs: string[];
    constructor(fogs?: string[]);
    static read(stream: BinaryStream): Fogs;
    static write(stream: BinaryStream, value: Fogs): void;
}

declare class NbtLoop extends DataType {
    data: CompoundTag | null;
    constructor(data: CompoundTag | null);
    static read(stream: BinaryStream): NbtLoop;
    static write(stream: BinaryStream, entry: NbtLoop): void;
}

declare class Patterns extends DataType {
    patterns: TrimDataPattern[];
    constructor(patterns?: TrimDataPattern[]);
    static read(stream: BinaryStream): Patterns;
    static write(stream: BinaryStream, value: Patterns): void;
}

declare class Materials extends DataType {
    materials: TrimDataMaterial[];
    constructor(materials?: TrimDataMaterial[]);
    static read(stream: BinaryStream): Materials;
    static write(stream: BinaryStream, value: Materials): void;
}

declare class UnlockedRecipesEntry extends DataType {
    type: UnlockedRecipesType;
    recipes: string[];
    constructor(type: UnlockedRecipesType, recipes: string[]);
    static write(stream: BinaryStream, value: UnlockedRecipesEntry): void;
    static read(stream: BinaryStream): UnlockedRecipesEntry;
}

declare class PlayerAuthItemStackRequest extends DataType {
    /**
     * The item stack request id.
     */
    readonly clientRequestId: number;
    /**
     * The item stack request actions.
     */
    readonly actions: Array<ItemStackRequestAction>;
    /**
     * The filter strings of the item stack request.
     */
    readonly filterStrings: Array<string>;
    /**
     * The origin of the strings filter.
     */
    readonly stringsFilterOrigin: number;
    /**
     * Creates a new instance of ItemStackRequest.
     * @param clientRequestId - The item stack request id.
     * @param actions - The item stack request actions.
     * @param filterStrings - The filter strings of the item stack request.
     * @param stringsFilterOrigin - The origin of the strings filter.
     */
    constructor(clientRequestId: number, actions: Array<ItemStackRequestAction>, filterStrings: Array<string>, stringsFilterOrigin: number);
    static read(stream: BinaryStream, _: unknown, data: PlayerAuthInputData): PlayerAuthItemStackRequest | null;
    static write(stream: BinaryStream, value: ItemStackRequest, _: unknown, data: PlayerAuthInputData): void;
}

declare class CommandBlockActorRuntimeId extends DataType {
    static read(stream: BinaryStream, _: 0, isBlock: boolean): bigint | null;
    static write(stream: BinaryStream, value: bigint, _: 0, isBlock: boolean): void;
}

declare class CommandBlockSettings extends DataType {
    /**
     * The position of the command block.
     */
    readonly position: BlockPosition;
    /**
     * The command mode of the command block.
     */
    readonly commandMode: CommandBlockMode;
    /**
     * Whether the command block is in redstone mode.
     */
    readonly redstoneMode: boolean;
    /**
     * Whether the command block is in conditional mode.
     */
    readonly conditionalMode: boolean;
    /**
     * Create a new command block settings data type.
     * @param position The position of the command block.
     * @param commandMode The command mode of the command block.
     * @param redstoneMode Whether the command block is in redstone mode.
     * @param conditionalMode Whether the command block is in conditional mode.
     */
    constructor(position: BlockPosition, commandMode: CommandBlockMode, redstoneMode: boolean, conditionalMode: boolean);
    static read(stream: BinaryStream, _: 0, isBlock: boolean): CommandBlockSettings | null;
    static write(stream: BinaryStream, value: CommandBlockSettings, _: 0, isBlock: boolean): void;
}

/**
 * Represents a Minecraft Bedrock Edition data packet
 */
declare abstract class DataPacket extends BasePacket {
    static readonly id: Packet;
    static readonly id_type: typeof VarInt;
    serialize(): Buffer;
    deserialize(): this;
}

declare class AddEntityPacket extends DataPacket {
    uniqueEntityId: bigint;
    runtimeId: bigint;
    identifier: string;
    position: Vector3f;
    velocity: Vector3f;
    pitch: number;
    yaw: number;
    headYaw: number;
    bodyYaw: number;
    attributes: Array<EntityAttributes>;
    data: Array<DataItem>;
    properties: PropertySyncData;
    links: Array<Links>;
}

declare class AddItemActorPacket extends DataPacket {
    uniqueId: bigint;
    runtimeId: bigint;
    item: NetworkItemStackDescriptor;
    position: Vector3f;
    velocity: Vector3f;
    data: Array<DataItem>;
    fromFishing: boolean;
}

declare class AddPlayerPacket extends DataPacket {
    uuid: string;
    username: string;
    runtimeId: bigint;
    platformChatId: string;
    position: Vector3f;
    velocity: Vector3f;
    pitch: number;
    yaw: number;
    headYaw: number;
    heldItem: NetworkItemStackDescriptor;
    gamemode: Gamemode;
    data: Array<DataItem>;
    properties: PropertySyncData;
    uniqueEntityId: bigint;
    premissionLevel: PermissionLevel;
    commandPermission: CommandPermissionLevel;
    abilities: Array<AbilityLayer>;
    links: Array<Links>;
    deviceId: string;
    deviceOS: DeviceOS;
}

declare class AnimatePacket extends DataPacket {
    id: AnimateId;
    runtimeEntityId: bigint;
    boatRowingTime: number | null;
}

declare class AvailableCommandsPacket extends DataPacket {
    enumValues: Array<string>;
    chainedSubcommandValues: Array<string>;
    postFixes: Array<string>;
    enums: Array<Enums>;
    subcommands: Array<Subcommands>;
    commands: Array<Commands>;
    dynamicEnums: Array<DynamicEnums>;
    enumConstraints: Array<EnumConstraints>;
}

declare class BiomeDefinitionListPacket extends DataPacket {
    biomes: Buffer$1;
    serialize(): Buffer$1;
    deserialize(): this;
}

declare class BlockPickRequestPacket extends DataPacket {
    x: number;
    y: number;
    z: number;
    addData: boolean;
    selectedSlot: number;
}

declare class ChangeDimensionPacket extends DataPacket {
    dimension: DimensionType;
    position: Vector3f;
    respawn: boolean;
    hasLoadingScreen: boolean;
}

declare class ChunkRadiusUpdatePacket extends DataPacket {
    radius: number;
}

declare class CommandOutputPacket extends DataPacket {
    originData: CommandOutputData;
}

declare class CommandRequestPacket extends DataPacket {
    command: string;
    origin: CommandOriginData;
    isInternal: boolean;
    version: number;
}

declare class ContainerClosePacket extends DataPacket {
    identifier: ContainerId;
    type: ContainerType;
    serverInitiated: boolean;
}

declare class ContainerOpenPacket extends DataPacket {
    identifier: ContainerId;
    type: ContainerType;
    position: BlockPosition;
    uniqueId: bigint;
}

declare class CreativeContentPacket extends DataPacket {
    items: Array<NetworkItemInstanceDescriptor>;
}

declare class DisconnectPacket extends DataPacket {
    reason: DisconnectReason;
    hideDisconnectScreen: boolean;
    message: DisconnectMessage;
}

declare class InteractPacket extends DataPacket {
    action: InteractAction;
    actorRuntimeId: bigint;
    position: Vector3f;
}

declare class InventoryContentPacket extends DataPacket {
    containerId: ContainerId;
    items: Array<NetworkItemStackDescriptor>;
    fullContainerName: FullContainerName;
    storageItem: NetworkItemStackDescriptor;
}

declare class InventorySlotPacket extends DataPacket {
    containerId: ContainerId;
    slot: number;
    fullContainerName: FullContainerName;
    storageItem: NetworkItemStackDescriptor;
    item: NetworkItemStackDescriptor;
}

declare class InventoryTransactionPacket extends DataPacket {
    legacy: LegacyTransaction;
    transaction: InventoryTransaction;
}

declare class ItemComponentPacket extends DataPacket {
    items: Array<ComponentItem>;
}

declare class ItemStackRequestPacket extends DataPacket {
    requests: Array<ItemStackRequest>;
}

declare class ItemStackResponsePacket extends DataPacket {
    responses: Array<ItemStackResponses>;
}

declare class LevelChunkPacket extends DataPacket {
    x: number;
    z: number;
    dimension: DimensionType;
    subChunkCount: number;
    cacheEnabled: boolean;
    blobs: Array<bigint>;
    data: Buffer$1;
    serialize(): Buffer$1;
    deserialize(): this;
}

declare class LevelEventPacket extends DataPacket {
    event: LevelEvent;
    position: Vector3f;
    data: number;
}

declare class LevelSoundEventPacket extends DataPacket {
    event: LevelSoundEvent;
    position: Vector3f;
    data: number;
    actorIdentifier: string;
    isBabyMob: boolean;
    isGlobal: boolean;
}

declare class LoginPacket extends DataPacket {
    protocol: number;
    tokens: LoginTokens;
}

declare class MobEquipmentPacket extends DataPacket {
    runtimeEntityId: bigint;
    item: NetworkItemStackDescriptor;
    slot: number;
    selectedSlot: number;
    containerId: ContainerId;
}

declare class ModalFormRequestPacket extends DataPacket {
    id: number;
    payload: string;
}

declare class ModalFormResponsePacket extends DataPacket {
    id: number;
    response: boolean;
    data: string | null;
    canceled: boolean;
    reason: ModalFormCanceledReason | null;
}

declare class MoveActorAbsolutePacket extends DataPacket {
    runtimeId: bigint;
    flags: number;
    position: Vector3f;
    rotation: Rotation;
}

declare class MovePlayerPacket extends DataPacket {
    runtimeId: bigint;
    position: Vector3f;
    pitch: number;
    yaw: number;
    headYaw: number;
    mode: MoveMode;
    onGround: boolean;
    riddenRuntimeId: bigint;
    cause: TeleportCause | null;
    inputTick: bigint;
}

declare class NetworkChunkPublisherUpdatePacket extends DataPacket {
    coordinate: BlockPosition;
    radius: number;
    savedChunks: Array<ChunkCoords>;
}

declare class NetworkSettingsPacket extends DataPacket {
    compressionThreshold: number;
    compressionMethod: CompressionMethod;
    clientThrottle: boolean;
    clientThreshold: number;
    clientScalar: number;
}

declare class PacketViolationWarningPacket extends DataPacket {
    type: ViolationType;
    severity: ViolationSeverity;
    packet: Packet;
    context: string;
}

declare class PlayStatusPacket extends DataPacket {
    status: PlayStatus;
}

declare class PlayerActionPacket extends DataPacket {
    entityRuntimeId: bigint;
    action: PlayerActionType;
    blockPosition: BlockPosition;
    resultPosition: BlockPosition;
    face: number;
}

declare class PlayerAuthInputPacket extends DataPacket {
    rotation: Vector2f;
    position: Vector3f;
    motion: Vector2f;
    headYaw: number;
    inputData: PlayerAuthInputData;
    inputMode: InputMode;
    playMode: PlayMode;
    interactionMode: InteractionMode;
    interactRotation: Vector2f;
    inputTick: bigint;
    positionDelta: Vector3f;
    itemStackRequest: PlayerAuthItemStackRequest | null;
    blockActions: PlayerBlockActions | null;
    predictedVehicle: ClientPredictedVehicle | null;
    analogueMotion: Vector2f;
    cameraOrientation: Vector3f;
}

declare class PlayerHotbarPacket extends DataPacket {
    selectedSlot: number;
    windowId: number;
    selectSlot: boolean;
}

declare class PlayerListPacket extends DataPacket {
    action: PlayerListAction;
    records: Array<PlayerListRecord>;
}

declare class RemoveEntityPacket extends DataPacket {
    uniqueEntityId: bigint;
}

declare class RequestChunkRadiusPacket extends DataPacket {
    radius: number;
    maxRadius: number;
}

declare class RequestNetworkSettingsPacket extends DataPacket {
    protocol: number;
}

declare class ResourcePackClientResponsePacket extends DataPacket {
    response: ResourcePackResponse;
    packs: Array<string>;
}

declare class ResourcePackDataInfoPacket extends DataPacket {
    packId: string;
    maxChunkSize: number;
    chunkCount: number;
    fileSize: bigint;
    fileHash: Buffer;
    isPremium: boolean;
    packType: PackType;
    serialize(): Buffer;
    deserialize(): this;
}

declare class ResourcePackChunkDataPacket extends DataPacket {
    packId: string;
    chunkId: number;
    byteOffset: bigint;
    chunkData: Buffer;
    serialize(): Buffer;
    deserialize(): this;
}

declare class ResourcePackChunkRequestPacket extends DataPacket {
    packId: string;
    chunkId: number;
}

declare class ResourcePackStackPacket extends DataPacket {
    mustAccept: boolean;
    behaviorPacks: Array<ResourceIdVersions>;
    texturePacks: Array<ResourceIdVersions>;
    gameVersion: string;
    experiments: Array<Experiments>;
    experimentsPreviouslyToggled: boolean;
    hasEditorPacks: boolean;
}

declare class ResourcePacksInfoPacket extends DataPacket {
    mustAccept: boolean;
    hasAddons: boolean;
    hasScripts: boolean;
    packs: Array<TexturePackInfo>;
}

declare class RespawnPacket extends DataPacket {
    position: Vector3f;
    state: RespawnState;
    runtimeEntityId: bigint;
}

declare class ScriptMessagePacket extends DataPacket {
    messageId: string;
    data: string;
}

declare class SetActorMotionPacket extends DataPacket {
    runtimeId: bigint;
    motion: Vector3f;
    inputTick: bigint;
}

declare class SetCommandsEnabledPacket extends DataPacket {
    enabled: boolean;
}

declare class SetActorDataPacket extends DataPacket {
    runtimeEntityId: bigint;
    data: Array<DataItem>;
    properties: PropertySyncData;
    inputTick: bigint;
    /**
     * The first set of flags of the actor.
     */
    private flagKeyset1;
    /**
     * The second set of flags of the actor.
     */
    private flagKeyset2;
    /**
     * Sets the flag of the actor.
     * @param flag The flag to set.
     * @param enabled Whether the flag should be enabled.
     */
    setFlag(flag: ActorFlag, enabled: boolean): void;
    /**
     * Gets the flag of the actor.
     * @param flag The flag to get.
     * @returns Whether the flag is enabled.
     */
    getFlag(flag: ActorFlag): boolean;
}

declare class SetLocalPlayerAsInitializedPacket extends DataPacket {
    runtimeEntityId: bigint;
}

declare class SetPlayerGameTypePacket extends DataPacket {
    gamemode: Gamemode;
}

declare class SetTitlePacket extends DataPacket {
    type: TitleType;
    text: string;
    fadeInTime: number;
    stayTime: number;
    fadeOutTime: number;
    xuid: string;
    platformOnlineId: string;
    filteredText: string;
}

declare class StartGamePacket extends DataPacket {
    entityId: bigint;
    runtimeEntityId: bigint;
    playerGamemode: Gamemode;
    playerPosition: Vector3f;
    pitch: number;
    yaw: number;
    seed: bigint;
    biomeType: number;
    biomeName: string;
    dimension: number;
    generator: number;
    worldGamemode: Gamemode;
    hardcore: boolean;
    difficulty: Difficulty;
    spawnPosition: BlockPosition;
    achievementsDisabled: boolean;
    editorWorldType: number;
    createdInEdior: boolean;
    exportedFromEdior: boolean;
    dayCycleStopTime: number;
    eduOffer: number;
    eduFeatures: boolean;
    eduProductUuid: string;
    rainLevel: number;
    lightningLevel: number;
    confirmedPlatformLockedContent: boolean;
    multiplayerGame: boolean;
    broadcastToLan: boolean;
    xblBroadcastMode: number;
    platformBroadcastMode: number;
    commandsEnabled: boolean;
    texturePacksRequired: boolean;
    gamerules: Array<GameRules>;
    experiments: Array<Experiments>;
    experimentsPreviouslyToggled: boolean;
    bonusChest: boolean;
    mapEnabled: boolean;
    permissionLevel: PermissionLevel;
    serverChunkTickRange: number;
    hasLockedBehaviorPack: boolean;
    hasLockedResourcePack: boolean;
    isFromLockedWorldTemplate: boolean;
    useMsaGamertagsOnly: boolean;
    isFromWorldTemplate: boolean;
    isWorldTemplateOptionLocked: boolean;
    onlySpawnV1Villagers: boolean;
    personaDisabled: boolean;
    customSkinsDisabled: boolean;
    emoteChatMuted: boolean;
    gameVersion: string;
    limitedWorldWidth: number;
    limitedWorldLength: number;
    isNewNether: boolean;
    eduResourceUriButtonName: string;
    eduResourceUriLink: string;
    experimentalGameplayOverride: boolean;
    chatRestrictionLevel: number;
    disablePlayerInteractions: boolean;
    serverIdentfier: string;
    worldIdentifier: string;
    scenarioIdentifier: string;
    levelId: string;
    worldName: string;
    premiumWorldTemplateId: string;
    isTrial: boolean;
    movementAuthority: ServerAuthMovementMode;
    rewindHistorySize: number;
    serverAuthoritativeBlockBreaking: boolean;
    currentTick: bigint;
    enchantmentSeed: number;
    blockProperties: Array<BlockProperty>;
    items: Array<ItemData>;
    multiplayerCorrelationId: string;
    serverAuthoritativeInventory: boolean;
    engine: string;
    propertyData1: unknown;
    propertyData2: unknown;
    propertyData3: unknown;
    blockPaletteChecksum: bigint;
    worldTemplateId: string;
    clientSideGeneration: boolean;
    blockNetworkIdsAreHashes: boolean;
    serverControlledSounds: boolean;
}

declare class TextPacket extends DataPacket {
    type: TextPacketType;
    needsTranslation: boolean;
    source: string | null;
    message: string;
    parameters: Array<string> | null;
    xuid: string;
    platformChatId: string;
    filtered: string;
}

declare class ToastRequestPacket extends DataPacket {
    title: string;
    message: string;
}

declare class UpdateAbilitiesPacket extends DataPacket {
    entityUniqueId: bigint;
    permissionLevel: PermissionLevel;
    commandPermissionLevel: CommandPermissionLevel;
    abilities: Array<AbilityLayer>;
}

declare class UpdateAdventureSettingsPacket extends DataPacket {
    noPvm: boolean;
    noPvp: boolean;
    immutableWorld: boolean;
    showNameTags: boolean;
    autoJump: boolean;
}

declare class UpdateAttributesPacket extends DataPacket {
    runtimeActorId: bigint;
    attributes: Array<Attribute>;
    inputTick: bigint;
}

declare class UpdateBlockPacket extends DataPacket {
    position: BlockPosition;
    networkBlockId: number;
    flags: UpdateBlockFlagsType;
    layer: UpdateBlockLayerType;
}

declare class SetTimePacket extends DataPacket {
    time: number;
}

declare class RemoveObjectivePacket extends DataPacket {
    objectiveName: string;
}

declare class SetDisplayObjectivePacket extends DataPacket {
    displaySlot: DisplaySlotType;
    objectiveName: string;
    displayName: string;
    criteriaName: string;
    sortOrder: ObjectiveSortOrder;
}

declare class SetScorePacket extends DataPacket {
    type: ScoreboardActionType;
    entries: Array<ScoreEntry>;
}

declare class SetScoreboardIdentityPacket extends DataPacket {
    action: ScoreboardIdentityAction;
    entries: ScoreboardIdentity;
}

declare class TransferPacket extends DataPacket {
    address: string;
    port: number;
    reloadWorld: boolean;
}

declare class SetHudPacket extends DataPacket {
    elements: Array<HudElementData>;
    visibility: HudVisibility;
}

declare class TakeItemActorPacket extends DataPacket {
    itemRuntimeId: bigint;
    targetRuntimeId: bigint;
}

declare class NetworkStackLatencyPacket extends DataPacket {
    timestamp: bigint;
    fromServer: boolean;
}

declare class BossEventPacket extends DataPacket {
    targetUniqueId: bigint;
    type: BossEventUpdateType;
    add: BossEventAdd;
    update: BossEventUpdate;
}

declare class NpcDialoguePacket extends DataPacket {
    uniqueEntityId: bigint;
    action: NpcDialogueAction;
    dialogue: string;
    scene: string;
    name: string;
    json: string;
}

declare class ActorEventPacket extends DataPacket {
    actorRuntimeId: bigint;
    eventId: number;
    eventData: number;
}

declare class AnimateEntityPacket extends DataPacket {
    animation: string;
    nextState: string;
    stopExpression: string;
    stopExpressionVersion: number;
    controller: string;
    blendOutTime: number;
    actorRuntimeIds: AnimateEntity;
}

declare class EmoteListPacket extends DataPacket {
    runtimeId: bigint;
    emoteIds: Array<Emotes>;
}

declare class EmotePacket extends DataPacket {
    actorRuntimeId: bigint;
    emoteId: string;
    tickLength: number;
    xuid: string;
    platformChatId: string;
    flags: EmoteFlags;
}

declare class PlayerSkinPacket extends DataPacket {
    uuid: string;
    skin: SerializedSkin;
    skinName: string;
    oldSkinName: string;
    isVerified: boolean;
}

declare class BlockActorDataPacket extends DataPacket {
    position: BlockPosition;
    nbt: CompoundTag<unknown>;
}

declare class AwardAchievementPacket extends DataPacket {
    identifier: number;
}

declare class ServerToClientHandshakePacket extends DataPacket {
    token: string;
}

declare class DeathInfoPacket extends DataPacket {
    cause: string;
    deathParameters: Array<DeathParameters>;
}

declare class SetPlayerInventoryOptionsPacket extends DataPacket {
    leftTab: InventoryLeftTab;
    rightTab: InventoryRightTab;
    filtering: boolean;
    layout: InventoryLayout;
    craftingLayout: InventoryLayout;
}

declare class ClientboundCloseFormPacket extends DataPacket {
}

declare class MobEffectPacket extends DataPacket {
    runtimeId: bigint;
    eventId: MobEffectEvents;
    effectId: EffectType;
    amplifier: number;
    particles: boolean;
    duration: number;
    inputTick: bigint;
}

declare class CompletedUsingItemPacket extends DataPacket {
    itemId: number;
    itemUseMethod: ItemUseMethod;
}

declare class NpcRequestPacket extends DataPacket {
    runtimeActorId: bigint;
    type: NpcRequestType;
    actions: string;
    index: number;
    scene: string;
}

declare class OpenSignPacket extends DataPacket {
    position: BlockPosition;
    isFrontSide: boolean;
}

declare class ServerboundLoadingScreenPacketPacket extends DataPacket {
    type: ServerboundLoadingScreenType;
    hasScreenId: boolean;
}

declare class CameraShakePacket extends DataPacket {
    intensity: number;
    duration: number;
    shakeType: ShakeType;
    shakeAction: ShakeAction;
}

declare class BookEditPacket extends DataPacket {
    action: BookEditAction;
    bookSlot: number;
    actions: BookActions;
}

declare class PlayerStartItemCooldownPacket extends DataPacket {
    category: string;
    duration: number;
}

declare class CameraPresetsPacket extends DataPacket {
    presets: Array<CameraPreset>;
}

declare class CameraInstructionsPacket extends DataPacket {
    instruction: CameraInstructions;
}

declare class CraftingDataPacket extends DataPacket {
    crafting: Array<CraftingDataEntry>;
    potions: Array<PotionMixDataEntry>;
    containers: Array<ContainerMixDataEntry>;
    materitalReducers: Array<MaterialReducerDataEntry>;
    clearRecipes: boolean;
}

declare class SpawnParticleEffectPacket extends DataPacket {
    dimensionId: number;
    uniqueId: bigint;
    position: Vector3f;
    effectName: string;
    molangVariables: string | null;
}

declare class ContainerSetDataPacket extends DataPacket {
    containerId: ContainerId;
    type: ContainerDataType;
    value: number;
}

declare class AvailableActorIdentifiersPacket extends DataPacket {
    data: CompoundTag<unknown>;
}

declare class StructureBlockUpdatePacket extends DataPacket {
    blockPosition: BlockPosition;
    structureEditData: StructureEditorData;
    trigger: boolean;
    isWaterLogged: boolean;
}

declare class DimensionDataPacket extends DataPacket {
    definitionGroup: DimensionDefinitionGroup;
}

declare class PlayerEnchantOptionsPacket extends DataPacket {
    enchantOptions: Array<EnchantOption>;
}

declare class ClientToServerHandshakePacket extends DataPacket {
}

declare class MobArmorEquipmentPacket extends DataPacket {
    runtimeId: bigint;
    helmet: NetworkItemStackDescriptor;
    chestplate: NetworkItemStackDescriptor;
    leggings: NetworkItemStackDescriptor;
    boots: NetworkItemStackDescriptor;
    body: NetworkItemStackDescriptor;
}

declare class RiderJumpPacket extends DataPacket {
    strength: number;
}

declare class BlockEventPacket extends DataPacket {
    position: BlockPosition;
    type: BlockEventType;
    data: number;
}

declare class EntityPickRequestPacket extends DataPacket {
    runtimeEntityId: bigint;
    slot: number;
    hasData: boolean;
}

declare class HurtArmorPacket extends DataPacket {
    cause: number;
    damage: number;
    slots: number;
}

declare class ShowCreditsPacket extends DataPacket {
    playerRuntimeId: bigint;
    creditsState: number;
}

declare class UpdateClientInputLocksPacket extends DataPacket {
    flags: number;
    position: Vector3f;
}

declare class OnScreenTextureAnimationPacket extends DataPacket {
    effectId: EffectType;
}

declare class ServerboundDiagnosticsPacket extends DataPacket {
    fps: number;
    serverSimTickTime: number;
    clientSimTickTime: number;
    beginFrameTime: number;
    inputTime: number;
    renderTime: number;
    endFrameTime: number;
    remainderTimePercent: number;
    unaccountedTimePercent: number;
}

declare class PlaySoundPacket extends DataPacket {
    name: string;
    position: BlockPosition;
    volume: number;
    pitch: number;
}

declare class SetActorLinkPacket extends DataPacket {
    link: ActorLink;
}

declare class StopSoundPacket extends DataPacket {
    soundName: string;
    stopAllSounds: boolean;
    stopMusic: boolean;
}

declare class MoveActorDeltaPacket extends DataPacket {
    runtimeId: bigint;
    flags: number;
    x: number;
    y: number;
    z: number;
    pitch: number;
    yaw: number;
    headYaw: number;
}

declare class PlayerFogPacket extends DataPacket {
    fogs: Fogs;
}

declare class CurrectStructureFeaturePacket extends DataPacket {
    featureId: string;
}

declare class GameRulesChangedPacket extends DataPacket {
    rules: GameRules;
}

declare class LegacyTelemetryEventPacket extends DataPacket {
    unique_id: bigint;
    type: TelemetryEventType;
    use_player_id: number;
    event_data: LegacyTelemetryEventData[keyof LegacyTelemetryEventData] | undefined;
    serialize(): Buffer;
    deserialize(): this;
}

declare class LevelEventGenericPacket extends DataPacket {
    eventId: number;
    nbtData: NbtLoop;
}

declare class SetDifficultyPacket extends DataPacket {
    difficulty: Difficulty;
}

declare class SetSpawnPositionPacket extends DataPacket {
    spawnType: SpawnType;
    playerPosition: BlockPosition;
    dimension: number;
    worldPosition: BlockPosition;
}

declare class SetHealthPacket extends DataPacket {
    health: number;
}

declare class SyncActorPropertyPacket extends DataPacket {
    properties: CompoundTag;
}

declare class TrimDataPacket extends DataPacket {
    patterns: Patterns;
    materials: Materials;
}

declare class UnlockedRecipesPacket extends DataPacket {
    recipes: UnlockedRecipesEntry;
}

declare class RequestPermissionsPacket extends DataPacket {
    actorUniqueId: bigint;
    permissionLevel: PermissionLevel;
    flags: number;
    getFlag(flag: PermissionFlag): boolean;
    setFlag(flag: PermissionFlag, value: boolean): void;
}

declare class ServerSettingsResponsePacket extends DataPacket {
    formId: number;
    payload: string;
}

declare class CommandBlockUpdatePacket extends DataPacket {
    isBlock: boolean;
    actorRuntimeId: bigint | null;
    settings: CommandBlockSettings | null;
    command: string;
    lastOutput: string;
    customName: string;
    trackOutput: boolean;
    tickDelay: number;
    executeFirstTick: boolean;
}

declare const Packets: {
    1: typeof LoginPacket;
    2: typeof PlayStatusPacket;
    3: typeof ServerToClientHandshakePacket;
    4: typeof ClientToServerHandshakePacket;
    5: typeof DisconnectPacket;
    6: typeof ResourcePacksInfoPacket;
    7: typeof ResourcePackStackPacket;
    8: typeof ResourcePackClientResponsePacket;
    9: typeof TextPacket;
    10: typeof SetTimePacket;
    11: typeof StartGamePacket;
    12: typeof AddPlayerPacket;
    13: typeof AddEntityPacket;
    14: typeof RemoveEntityPacket;
    15: typeof AddItemActorPacket;
    17: typeof TakeItemActorPacket;
    18: typeof MoveActorAbsolutePacket;
    19: typeof MovePlayerPacket;
    20: typeof RiderJumpPacket;
    21: typeof UpdateBlockPacket;
    25: typeof LevelEventPacket;
    26: typeof BlockEventPacket;
    27: typeof ActorEventPacket;
    28: typeof MobEffectPacket;
    29: typeof UpdateAttributesPacket;
    30: typeof InventoryTransactionPacket;
    31: typeof MobEquipmentPacket;
    32: typeof MobArmorEquipmentPacket;
    33: typeof InteractPacket;
    34: typeof BlockPickRequestPacket;
    35: typeof EntityPickRequestPacket;
    36: typeof PlayerActionPacket;
    38: typeof HurtArmorPacket;
    39: typeof SetActorDataPacket;
    40: typeof SetActorMotionPacket;
    41: typeof SetActorLinkPacket;
    42: typeof SetHealthPacket;
    43: typeof SetSpawnPositionPacket;
    44: typeof AnimatePacket;
    45: typeof RespawnPacket;
    46: typeof ContainerOpenPacket;
    47: typeof ContainerClosePacket;
    48: typeof PlayerHotbarPacket;
    49: typeof InventoryContentPacket;
    50: typeof InventorySlotPacket;
    51: typeof ContainerSetDataPacket;
    52: typeof CraftingDataPacket;
    56: typeof BlockActorDataPacket;
    58: typeof LevelChunkPacket;
    59: typeof SetCommandsEnabledPacket;
    60: typeof SetDifficultyPacket;
    61: typeof ChangeDimensionPacket;
    62: typeof SetPlayerGameTypePacket;
    63: typeof PlayerListPacket;
    65: typeof LegacyTelemetryEventPacket;
    69: typeof RequestChunkRadiusPacket;
    70: typeof ChunkRadiusUpdatePacket;
    72: typeof GameRulesChangedPacket;
    75: typeof ShowCreditsPacket;
    74: typeof BossEventPacket;
    76: typeof AvailableCommandsPacket;
    77: typeof CommandRequestPacket;
    78: typeof CommandBlockUpdatePacket;
    79: typeof CommandOutputPacket;
    82: typeof ResourcePackDataInfoPacket;
    83: typeof ResourcePackChunkDataPacket;
    84: typeof ResourcePackChunkRequestPacket;
    85: typeof TransferPacket;
    86: typeof PlaySoundPacket;
    87: typeof StopSoundPacket;
    88: typeof SetTitlePacket;
    90: typeof StructureBlockUpdatePacket;
    93: typeof PlayerSkinPacket;
    97: typeof BookEditPacket;
    98: typeof NpcRequestPacket;
    100: typeof ModalFormRequestPacket;
    101: typeof ModalFormResponsePacket;
    103: typeof ServerSettingsResponsePacket;
    106: typeof RemoveObjectivePacket;
    107: typeof SetDisplayObjectivePacket;
    108: typeof SetScorePacket;
    111: typeof MoveActorDeltaPacket;
    112: typeof SetScoreboardIdentityPacket;
    113: typeof SetLocalPlayerAsInitializedPacket;
    115: typeof NetworkStackLatencyPacket;
    118: typeof SpawnParticleEffectPacket;
    119: typeof AvailableActorIdentifiersPacket;
    121: typeof NetworkChunkPublisherUpdatePacket;
    122: typeof BiomeDefinitionListPacket;
    123: typeof LevelSoundEventPacket;
    124: typeof LevelEventGenericPacket;
    130: typeof OnScreenTextureAnimationPacket;
    138: typeof EmotePacket;
    142: typeof CompletedUsingItemPacket;
    143: typeof NetworkSettingsPacket;
    144: typeof PlayerAuthInputPacket;
    145: typeof CreativeContentPacket;
    146: typeof PlayerEnchantOptionsPacket;
    147: typeof ItemStackRequestPacket;
    148: typeof ItemStackResponsePacket;
    152: typeof EmoteListPacket;
    156: typeof PacketViolationWarningPacket;
    158: typeof AnimateEntityPacket;
    159: typeof CameraShakePacket;
    160: typeof PlayerFogPacket;
    162: typeof ItemComponentPacket;
    165: typeof SyncActorPropertyPacket;
    169: typeof NpcDialoguePacket;
    176: typeof PlayerStartItemCooldownPacket;
    177: typeof ScriptMessagePacket;
    180: typeof DimensionDataPacket;
    185: typeof RequestPermissionsPacket;
    186: typeof ToastRequestPacket;
    187: typeof UpdateAbilitiesPacket;
    188: typeof UpdateAdventureSettingsPacket;
    189: typeof DeathInfoPacket;
    193: typeof RequestNetworkSettingsPacket;
    196: typeof UpdateClientInputLocksPacket;
    198: typeof CameraPresetsPacket;
    199: typeof UnlockedRecipesPacket;
    300: typeof CameraInstructionsPacket;
    302: typeof TrimDataPacket;
    303: typeof OpenSignPacket;
    307: typeof SetPlayerInventoryOptionsPacket;
    308: typeof SetHudPacket;
    309: typeof AwardAchievementPacket;
    310: typeof ClientboundCloseFormPacket;
    312: typeof ServerboundLoadingScreenPacketPacket;
    314: typeof CurrectStructureFeaturePacket;
    315: typeof ServerboundDiagnosticsPacket;
};

declare class DebugEventPacket extends DataPacket {
    /**
     * The even data for the debug event
     */
    data: Record<string, unknown>;
    serialize(): Buffer;
    deserialize(): this;
}

declare class Framer {
    static unframe(buffer: Buffer): Array<Buffer>;
    static frame(...buffers: Array<Buffer>): Buffer;
}

/**
 * Get the packet ID from a buffer. ( VarInt )
 *
 * @param buffer
 * @returns {number}
 */
declare function getPacketId(buffer: Buffer): Packet;

declare const DefaultAbilityValues: {
    0: boolean;
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
    6: boolean;
    7: boolean;
    8: boolean;
    9: boolean;
    10: boolean;
    11: boolean;
    12: boolean;
    13: boolean;
    14: boolean;
    15: boolean;
    16: boolean;
    17: boolean;
    18: boolean;
    19: boolean;
};

declare const PROTOCOL_VERSION = 748;
declare const MINECRAFT_VERSION = "1.21.41";
declare const MINECRAFT_TICK_SPEED = 50;
declare const SHIELD_NETWORK_ID = 380;

export { AbilityIndex, AbilityLayer, AbilityLayerType, AbilitySet, AbilitySetId, ActorDamageCause, ActorData, ActorDataId, ActorDataType, ActorEventIds, ActorEventPacket, ActorFlag, ActorLink, ActorLinkType, AddEntityPacket, AddItemActorPacket, AddPlayerPacket, AnimateAction, AnimateEntity, AnimateEntityPacket, AnimateId, AnimatePacket, Attribute, AttributeModifier, AttributeName, AvailableActorIdentifiersPacket, AvailableCommandsPacket, AwardAchievementPacket, BehaviorPackInfo, BiomeDefinitionListPacket, BlockAction, BlockActorDataPacket, BlockEventPacket, BlockEventType, BlockFace, BlockPickRequestPacket, BlockPosition, BlockProperty, BookActions, BookEditAction, BookEditPacket, BossEventAdd, BossEventColor, BossEventPacket, BossEventUpdate, BossEventUpdateType, CameraAudioListener, CameraFadeDuration, CameraFadeInstruction, CameraInstructions, CameraInstructionsPacket, CameraPreset, CameraPresetsPacket, CameraSetEasing, CameraSetInstruction, CameraShakePacket, ChainedSubcommandValues, ChangeDimensionPacket, ChunkCoords, ChunkRadiusUpdatePacket, type ClientData, ClientPredictedVehicle, ClientToServerHandshakePacket, ClientboundCloseFormPacket, Color, CommandBlockActorRuntimeId, CommandBlockMode, CommandBlockSettings, CommandBlockUpdatePacket, CommandOriginData, CommandOutputData, CommandOutputMessage, CommandOutputPacket, CommandParameterType, CommandPermissionLevel, CommandRequestPacket, Commands, CompletedUsingItemPacket, ComplexInventoryTransaction, ComponentItem, CompressionMethod, ContainerClosePacket, ContainerDataType, ContainerId, ContainerMixDataEntry, ContainerName, ContainerOpenPacket, ContainerSetDataPacket, ContainerType, CraftingDataEntry, CraftingDataEntryType, CraftingDataPacket, CreativeContentPacket, CreativeItems, CurrectStructureFeaturePacket, DataItem, DataPacket, DeathInfoPacket, DeathParameters, DebugEventPacket, DebuggerProtocolVersion, DefaultAbilityValues, DeviceOS, Difficulty, DimensionDataPacket, DimensionDefinition, DimensionDefinitionGroup, DimensionType, DisconnectMessage, DisconnectPacket, DisconnectReason, DisplaySlotType, DynamicEnums, EasingType, EffectType, EmoteFlags, EmoteListPacket, EmotePacket, Emotes, EnchantOption, Enchantment, EntityAttributes, EntityPickRequestPacket, EnumConstraints, EnumValues, Enums, EquipmentSlot, Experiments, Fogs, Framer, FullContainerName, FurnanceRecipe, GameRuleType, GameRules, GameRulesChangedPacket, Gamemode, GeneratorType, HudElement, HudElementData, HudVisibility, HurtArmorPacket, type IPosition, type IdentityData, InputData, InputLockFlags, InputMode, InputTransaction, InteractAction, InteractPacket, InteractPosition, InteractionMode, InternalType, InventoryAction, InventoryContentPacket, InventoryLayout, InventoryLeftTab, InventoryRightTab, InventorySlotPacket, InventorySource, InventorySourceType, InventoryTransaction, InventoryTransactionPacket, ItemComponentPacket, ItemData, ItemInstanceUserData, ItemReleaseInventoryTransaction, ItemReleaseInventoryTransactionType, ItemStackActionTakePlace, type ItemStackContainer, ItemStackRequest, ItemStackRequestAction, ItemStackRequestActionBeanconPayment, ItemStackRequestActionCraftCreative, ItemStackRequestActionCraftGrindstoneRequest, ItemStackRequestActionCraftLoomRequest, ItemStackRequestActionCraftRecipe, ItemStackRequestActionCraftRecipeAuto, ItemStackRequestActionCreate, ItemStackRequestActionDestroyConsume, ItemStackRequestActionDrop, ItemStackRequestActionMineBlock, ItemStackRequestActionOptional, ItemStackRequestActionResultsDeprecated, ItemStackRequestActionSwap, ItemStackRequestActionType, ItemStackRequestPacket, ItemStackRequestSlotInfo, ItemStackResponsePacket, ItemStackResponses, ItemStackStatus, ItemStacks, ItemUseInventoryTransaction, ItemUseInventoryTransactionType, ItemUseMethod, ItemUseOnEntityInventoryTransaction, ItemUseOnEntityInventoryTransactionType, type LegacyTelemetryEventData, LegacyTelemetryEventPacket, LegacyTransaction, LevelChunkPacket, LevelEvent, LevelEventGenericPacket, LevelEventPacket, LevelSoundEvent, LevelSoundEventPacket, Links, LoginPacket, type LoginTokenData, LoginTokens, MINECRAFT_TICK_SPEED, MINECRAFT_VERSION, MaterialReducerDataEntry, Materials, MemoryTier, MobArmorEquipmentPacket, MobEffectEvents, MobEffectPacket, MobEquipmentPacket, ModalFormCanceled, ModalFormCanceledReason, ModalFormData, ModalFormRequestPacket, ModalFormResponsePacket, ModalFormType, MoveActorAbsolutePacket, MoveActorDeltaPacket, MoveDeltaFlags, MoveMode, MovePlayerPacket, NbtLoop, NetworkChunkPublisherUpdatePacket, NetworkItemInstanceDescriptor, NetworkItemStackDescriptor, NetworkSettingsPacket, NetworkStackLatencyPacket, NpcDialogueAction, NpcDialoguePacket, NpcRequestPacket, NpcRequestType, ObjectiveSortOrder, OnScreenTextureAnimationPacket, OpenSignPacket, Optional, PROTOCOL_VERSION, PackLinks, PackType, Packet, PacketViolationWarningPacket, Packets, Patterns, PermissionFlag, PermissionLevel, PlayMode, PlaySoundPacket, PlayStatus, PlayStatusPacket, PlayerActionPacket, PlayerActionType, PlayerAuthInputData, PlayerAuthInputPacket, PlayerAuthItemStackRequest, PlayerBlockActionData, PlayerBlockActions, PlayerEnchantOptionsPacket, PlayerFogPacket, PlayerHotbarPacket, PlayerInputTick, PlayerListAction, PlayerListPacket, PlayerListRecord, PlayerSkinPacket, PlayerStartItemCooldownPacket, PostFixes, PotionMixDataEntry, PropertySyncData, RecipeIngredient, RecipeUnlockingRequirement, RemoveEntityPacket, RemoveObjectivePacket, RequestChunkRadiusPacket, RequestNetworkSettingsPacket, RequestPermissionsPacket, ResourceIdVersions, ResourcePackChunkDataPacket, ResourcePackChunkRequestPacket, ResourcePackClientResponsePacket, ResourcePackDataInfoPacket, ResourcePackIds, ResourcePackResponse, ResourcePackStackPacket, ResourcePacksInfoPacket, RespawnPacket, RespawnState, RiderJumpPacket, Rotation, RotationByte, SHIELD_NETWORK_ID, ScoreEntry, ScoreboardActionType, ScoreboardIdentity, ScoreboardIdentityAction, ScoreboardIdentityType, ScriptMessagePacket, SerializedSkin, ServerAuthMovementMode, ServerSettingsResponsePacket, ServerToClientHandshakePacket, ServerboundDiagnosticsPacket, ServerboundLoadingScreenPacketPacket, ServerboundLoadingScreenType, SetActorDataPacket, SetActorLinkPacket, SetActorMotionPacket, SetCommandsEnabledPacket, SetDifficultyPacket, SetDisplayObjectivePacket, SetHealthPacket, SetHudPacket, SetLocalPlayerAsInitializedPacket, SetPlayerGameTypePacket, SetPlayerInventoryOptionsPacket, SetScorePacket, SetScoreboardIdentityPacket, SetSpawnPositionPacket, SetTimePacket, SetTitlePacket, ShakeAction, ShakeType, ShapedRecipe, ShapelessRecipe, ShowCreditsPacket, SignedBlockPosition, SkinAnimation, SkinImage, SkinPersonaPiece, SkinPersonaTintPiece, SpawnParticleEffectPacket, SpawnType, StartGamePacket, StopSoundPacket, StructureBlockUpdatePacket, StructureEditorData, StructureSettings, Subcommands, SyncActorPropertyPacket, TakeItemActorPacket, TelemetryEventType, TeleportCause, TextPacket, TextPacketType, TextParameters, TextSource, TexturePackInfo, TitleType, ToastRequestPacket, TransactionSourceType, TransferPacket, TriggerType, type TrimDataMaterial, TrimDataPacket, type TrimDataPattern, UnlockedRecipesEntry, UnlockedRecipesPacket, UnlockedRecipesType, UnlockingContext, UpdateAbilitiesPacket, UpdateAdventureSettingsPacket, UpdateAttributesPacket, UpdateBlockFlagsType, UpdateBlockLayerType, UpdateBlockPacket, UpdateClientInputLocksPacket, UserDataShapelessRecipe, VariableStringArray as VarStringArray, Vector2f, Vector3f, ViolationSeverity, ViolationType, getPacketId };
