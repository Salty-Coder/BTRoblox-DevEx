/* eslint-disable */
"use strict"

const ApiDump = (() => {
	const Data = {
		Categories: [
			"Appearance","Behavior","Data","State","Derived Data","Derived World Data","Tuning","Debug","Shape","Goals","Thrust","Turn","Camera","Image","Attachments","AlignOrientation","Compliance","AlignPosition","Torque","BallSocket","Friction","Limits","TwistLimits","Hinge","Servo","Motor","Derived","LineForce","Rod","Rope","Slider","Cylinder","AngularLimits","AngularServo","AngularMotor","Spring","Universal","VectorForce","Localization","Text","Scrolling","Video","Sizing","Jump Settings","Control","Game","Accessories","Scale","Animation","Body Parts","Clothes","Body Colors","Animatable","Parts","Assembly ","Surface Inputs","Surface","Part ","Teams","Forcefield","Link","Motion","Particles","Emission","JobInfo","Input"
		],
		Enums: [
			["BinType",["Script","GameTool","Grab","Clone","Hammer"]],["WrapLayerDebugMode",["None","BoundCage","LayerCage","BoundCageAndLinks","Reference"]],["WrapTargetDebugMode",["None","TargetCage"]],["TextureMode",["Stretch","Wrap","Static"]],["CameraType",["Fixed","Attach","Watch","Track","Follow","Custom","Scriptable","Orbital"]],["FieldOfViewMode",["Vertical","Diagonal","MaxAxis"]],["BodyPart",["Head","Torso","LeftArm","RightArm","LeftLeg","RightLeg"]],["AlignType",["Parallel","Perpendicular"]],["ActuatorRelativeTo",["Attachment0","Attachment1","World"]],["ActuatorType",["None","Motor","Servo"]],["MeshType",["Head","Torso","Wedge","Sphere","Cylinder","FileMesh","Brick","Prism","Pyramid","ParallelRamp","RightAngleRamp","CornerWedge"]],["StudioDataModelType",["Edit",,"PlayClient","PlayServer","RobloxPlugin","UserPlugin","None"]],["DialogBehaviorType",["SinglePlayer","MultiplePlayers"]],["DialogPurpose",["Quest","Help","Shop"]],["DialogTone",["Neutral","Friendly","Enemy"]],["ExplosionType",["NoCraters","Craters"]],["NormalId",["Right","Top","Back","Left","Bottom","Front"]],["InOut",["Edge","Inset","Center"]],["LeftRight",["Left","Center","Right"]],["TopBottom",["Top","Center","Bottom"]],["AutomaticSize",["None","X","Y","XY"]],["BorderMode",["Outline","Middle","Inset"]],["SizeConstraint",["RelativeXY","RelativeXX","RelativeYY"]],["FrameStyle",["Custom","ChatBlue","RobloxSquare","RobloxRound","ChatGreen","ChatRed","DropShadow"]],["ButtonStyle",["Custom","RobloxButtonDefault","RobloxButton","RobloxRoundButton","RobloxRoundDefaultButton","RobloxRoundDropdownButton"]],["ScaleType",["Stretch","Slice","Tile","Fit","Crop"]],["Font",["Legacy","Arial","ArialBold","SourceSans","SourceSansBold","SourceSansLight","SourceSansItalic","Bodoni","Garamond","Cartoon","Code","Highway","SciFi","Arcade","Fantasy","Antique","SourceSansSemibold","Gotham","GothamSemibold","GothamBold","GothamBlack","AmaticSC","Bangers","Creepster","DenkOne","Fondamento","FredokaOne","GrenzeGotisch","IndieFlower","JosefinSans","Jura","Kalam","LuckiestGuy","Merriweather","Michroma","Nunito","Oswald","PatrickHand","PermanentMarker","Roboto","RobotoCondensed","RobotoMono","Sarpanch","SpecialElite","TitilliumWeb","Ubuntu"]],["FontSize",["Size8","Size9","Size10","Size11","Size12","Size14","Size18","Size24","Size36","Size48","Size28","Size32","Size42","Size60","Size96"]],["TextTruncate",["None","AtEnd"]],["TextXAlignment",["Left","Right","Center"]],["TextYAlignment",["Top","Center","Bottom"]],["ElasticBehavior",["WhenScrollable","Always","Never"]],["ScrollBarInset",["None","ScrollBar","Always"]],["ScrollingDirection",["X","Y",,"XY"]],["VerticalScrollBarPosition",["Right","Left"]],["ReturnKeyType",["Default","Done","Go","Next","Search","Send"]],["TextInputType",["Default","NoSuggestions","Number","Email","Phone","Password","PasswordShown","Username"]],["ZIndexBehavior",["Global","Sibling"]],["SurfaceGuiSizingMode",["FixedSize","PixelsPerStud"]],["AdornCullingMode",["Automatic","Never"]],["HandlesStyle",["Resize","Movement"]],["HumanoidCollisionType",["OuterBox","InnerBox"]],["HumanoidDisplayDistanceType",["Viewer","Subject","None"]],["Material",{256:"Plastic",272:"SmoothPlastic",288:"Neon",512:"Wood",528:"WoodPlanks",784:"Marble",788:"Basalt",800:"Slate",804:"CrackedLava",816:"Concrete",820:"Limestone",832:"Granite",836:"Pavement",848:"Brick",864:"Pebble",880:"Cobblestone",896:"Rock",912:"Sandstone",1040:"CorrodedMetal",1056:"DiamondPlate",1072:"Foil",1088:"Metal",1280:"Grass",1284:"LeafyGrass",1296:"Sand",1312:"Fabric",1328:"Snow",1344:"Mud",1360:"Ground",1376:"Asphalt",1392:"Salt",1536:"Ice",1552:"Glacier",1568:"Glass",1584:"ForceField",1792:"Air",2048:"Water"}],["HumanoidHealthDisplayType",["DisplayWhenDamaged","AlwaysOn","AlwaysOff"]],["NameOcclusion",["NoOcclusion","EnemyOcclusion","OccludeAll"]],["HumanoidRigType",["R6","R15"]],["AnimationPriority",{0:"Idle",1:"Movement",2:"Action",1000:"Core"}],["SurfaceType",["Smooth","Glue","Weld","Studs","Inlet","Universal","Hinge","Motor","SteppingMotor",,"SmoothNoOutlines"]],["InputType",{0:"NoInput",12:"Constant",13:"Sin"}],["FormFactor",["Symmetric","Brick","Plate","Custom"]],["PartType",["Ball","Block","Cylinder"]],["CollisionFidelity",["Default","Hull","Box","PreciseConvexDecomposition"]],["RenderFidelity",["Automatic","Precise","Performance"]],["Style",["AlternatingSupports","BridgeStyleSupports","NoSupports"]],["ModelLevelOfDetail",["Automatic","StreamingMesh","Disabled"]],["ParticleOrientation",["FacingCamera","FacingCameraWorldUp","VelocityParallel","VelocityPerpendicular"]],["PoseEasingDirection",["In","Out","InOut"]],["PoseEasingStyle",["Linear","Constant","Elastic","Cubic","Bounce"]],["ProximityPromptExclusivity",["OnePerButton","OneGlobally","AlwaysShow"]],["KeyCode",{0:"Unknown",8:"Backspace",9:"Tab",12:"Clear",13:"Return",19:"Pause",27:"Escape",32:"Space",34:"QuotedDouble",35:"Hash",36:"Dollar",37:"Percent",38:"Ampersand",39:"Quote",40:"LeftParenthesis",41:"RightParenthesis",42:"Asterisk",43:"Plus",44:"Comma",45:"Minus",46:"Period",47:"Slash",48:"Zero",49:"One",50:"Two",51:"Three",52:"Four",53:"Five",54:"Six",55:"Seven",56:"Eight",57:"Nine",58:"Colon",59:"Semicolon",60:"LessThan",61:"Equals",62:"GreaterThan",63:"Question",64:"At",91:"LeftBracket",92:"BackSlash",93:"RightBracket",94:"Caret",95:"Underscore",96:"Backquote",97:"A",98:"B",99:"C",100:"D",101:"E",102:"F",103:"G",104:"H",105:"I",106:"J",107:"K",108:"L",109:"M",110:"N",111:"O",112:"P",113:"Q",114:"R",115:"S",116:"T",117:"U",118:"V",119:"W",120:"X",121:"Y",122:"Z",123:"LeftCurly",124:"Pipe",125:"RightCurly",126:"Tilde",127:"Delete",160:"World0",161:"World1",162:"World2",163:"World3",164:"World4",165:"World5",166:"World6",167:"World7",168:"World8",169:"World9",170:"World10",171:"World11",172:"World12",173:"World13",174:"World14",175:"World15",176:"World16",177:"World17",178:"World18",179:"World19",180:"World20",181:"World21",182:"World22",183:"World23",184:"World24",185:"World25",186:"World26",187:"World27",188:"World28",189:"World29",190:"World30",191:"World31",192:"World32",193:"World33",194:"World34",195:"World35",196:"World36",197:"World37",198:"World38",199:"World39",200:"World40",201:"World41",202:"World42",203:"World43",204:"World44",205:"World45",206:"World46",207:"World47",208:"World48",209:"World49",210:"World50",211:"World51",212:"World52",213:"World53",214:"World54",215:"World55",216:"World56",217:"World57",218:"World58",219:"World59",220:"World60",221:"World61",222:"World62",223:"World63",224:"World64",225:"World65",226:"World66",227:"World67",228:"World68",229:"World69",230:"World70",231:"World71",232:"World72",233:"World73",234:"World74",235:"World75",236:"World76",237:"World77",238:"World78",239:"World79",240:"World80",241:"World81",242:"World82",243:"World83",244:"World84",245:"World85",246:"World86",247:"World87",248:"World88",249:"World89",250:"World90",251:"World91",252:"World92",253:"World93",254:"World94",255:"World95",256:"KeypadZero",257:"KeypadOne",258:"KeypadTwo",259:"KeypadThree",260:"KeypadFour",261:"KeypadFive",262:"KeypadSix",263:"KeypadSeven",264:"KeypadEight",265:"KeypadNine",266:"KeypadPeriod",267:"KeypadDivide",268:"KeypadMultiply",269:"KeypadMinus",270:"KeypadPlus",271:"KeypadEnter",272:"KeypadEquals",273:"Up",274:"Down",275:"Right",276:"Left",277:"Insert",278:"Home",279:"End",280:"PageUp",281:"PageDown",282:"F1",283:"F2",284:"F3",285:"F4",286:"F5",287:"F6",288:"F7",289:"F8",290:"F9",291:"F10",292:"F11",293:"F12",294:"F13",295:"F14",296:"F15",300:"NumLock",301:"CapsLock",302:"ScrollLock",303:"RightShift",304:"LeftShift",305:"RightControl",306:"LeftControl",307:"RightAlt",308:"LeftAlt",309:"RightMeta",310:"LeftMeta",311:"LeftSuper",312:"RightSuper",313:"Mode",314:"Compose",315:"Help",316:"Print",317:"SysReq",318:"Break",319:"Menu",320:"Power",321:"Euro",322:"Undo",1000:"ButtonX",1001:"ButtonY",1002:"ButtonA",1003:"ButtonB",1004:"ButtonR1",1005:"ButtonL1",1006:"ButtonR2",1007:"ButtonL2",1008:"ButtonR3",1009:"ButtonL3",1010:"ButtonStart",1011:"ButtonSelect",1012:"DPadLeft",1013:"DPadRight",1014:"DPadUp",1015:"DPadDown",1016:"Thumbstick1",1017:"Thumbstick2"}],["ProximityPromptStyle",["Default","Custom"]],["CreatorType",["User","Group"]],["GearGenreSetting",["AllGenres","MatchingGenreOnly"]],["Genre",["All","TownAndCity","Fantasy","SciFi","Ninja","Scary","Pirate","Adventure","Sports","Funny","WildWest","War","SkatePark","Tutorial"]],["RollOffMode",["Inverse","Linear","LinearSquare","InverseTapered"]],["AlphaMode",["Overlay","Transparency"]],["AspectType",["FitWithinMaxSize","ScaleWithParentSize"]],["DominantAxis",["Width","Height"]],["FillDirection",["Horizontal","Vertical"]],["HorizontalAlignment",["Center","Left","Right"]],["SortOrder",["Name","Custom","LayoutOrder"]],["VerticalAlignment",["Center","Top","Bottom"]],["StartCorner",["TopLeft","TopRight","BottomLeft","BottomRight"]],["EasingDirection",["In","Out","InOut"]],["EasingStyle",["Linear","Sine","Back","Quad","Quart","Quint","Bounce","Elastic","Exponential","Circular","Cubic"]],["TableMajorAxis",["RowMajor","ColumnMajor"]],["CustomCameraMode",["Default","Classic","Follow"]],["ComputerCameraMovementMode",["Default","Classic","Follow","Orbital","CameraToggle"]],["ComputerMovementMode",["Default","KeyboardMouse","ClickToMove"]],["ControlMode",["Classic","MouseLockSwitch"]],["RotationType",["MovementRelative","CameraRelative"]],["SavedQualitySetting",["Automatic","QualityLevel1","QualityLevel2","QualityLevel3","QualityLevel4","QualityLevel5","QualityLevel6","QualityLevel7","QualityLevel8","QualityLevel9","QualityLevel10"]],["TouchCameraMovementMode",["Default","Classic","Follow","Orbital"]],["TouchMovementMode",["Default","Thumbstick","DPad","Thumbpad","ClickToMove","DynamicThumbstick"]]
		],
		Classes: [
			["Instance",{Archivable:1,ClassName:2,DataCost:2,Name:2,Parent:2,RobloxLocked:2,className:2,ClassName:2,Archivable:1}],["Accoutrement",{AttachmentForward:0,AttachmentPoint:0,AttachmentPos:0,AttachmentRight:0,AttachmentUp:0},[20,32]],["Accessory",1,,[30,32]],["Hat",1,,[30,45]],["Animation",{AnimationId:2},[220,60]],["AnimationController",,[220,60]],["Atmosphere",{Color:3,Decay:3,Density:0,Glare:3,Haze:3,Offset:0},[5,28]],["Attachment",{Axis:4,CFrame:2,Orientation:2,Position:2,SecondaryAxis:4,Visible:0,WorldAxis:5,WorldCFrame:5,WorldOrientation:5,WorldPosition:5,WorldSecondaryAxis:5},[30,81]],["Bone",7,{Transform:2,TransformedCFrame:2,TransformedWorldCFrame:2},[30,114]],["Backpack",,[30,20]],["BackpackItem",{TextureId:2},20],["HopperBin",10,{Active:2,BinType:[]},[240,22]],["Tool",10,{CanBeDropped:1,Enabled:3,Grip:0,GripForward:0,GripPos:0,GripRight:0,GripUp:0,ManualActivationOnly:1,RequiresHandle:1,ToolTip:0},[30,17]],["Flag",12,{TeamColor:2},[30,38]],["BaseWrap",{CageMeshId:0,CageOrigin:0,CageOriginWorld:2,ImportOrigin:0,ImportOriginWorld:2}],["WrapLayer",14,{BindOffset:6,Color:7,DebugMode:[7,1],Enabled:1,Order:0,Puffiness:0,ReferenceMeshId:0,ReferenceOrigin:0,ReferenceOriginWorld:2,ShrinkFactor:6},[32,121]],["WrapTarget",14,{Color:7,DebugMode:[7,2],Stiffness:0},[32,122]],["Beam",{Attachment0:8,Attachment1:8,Color:0,CurveSize0:8,CurveSize1:8,Enabled:0,FaceCamera:8,LightEmission:0,LightInfluence:0,Segments:8,Texture:0,TextureLength:0,TextureMode:[,3],TextureSpeed:0,Transparency:0,Width0:8,Width1:8,ZOffset:0},[30,96]],["BindableEvent",,[50,67]],["BindableFunction",,[40,66]],["BodyAngularVelocity",{AngularVelocity:9,MaxTorque:9,P:9,angularvelocity:9,maxTorque:9},[140,14]],["BodyForce",{Force:9,force:9},[140,14]],["BodyGyro",{CFrame:9,D:9,MaxTorque:9,P:9,cframe:9,maxTorque:9},[140,14]],["BodyPosition",{D:9,MaxForce:9,P:9,Position:9,maxForce:9,position:9},[140,14]],["BodyThrust",{Force:9,Location:9,force:9,location:9},[140,14]],["BodyVelocity",{MaxForce:9,P:9,Velocity:9,maxForce:9,velocity:9},[140,14]],["RocketPropulsion",{CartoonFactor:9,MaxSpeed:10,MaxThrust:10,MaxTorque:11,Target:9,TargetOffset:9,TargetRadius:9,ThrustD:10,ThrustP:10,TurnD:11,TurnP:11},[140,14]],["Camera",{CFrame:2,CameraSubject:12,CameraType:[12,4],DiagonalFieldOfView:12,FieldOfView:12,FieldOfViewMode:[12,5],Focus:2,HeadLocked:2,HeadScale:2,MaxAxisFieldOfView:12,NearPlaneZ:2,ViewportSize:2,focus:2},[5,5]],["BodyColors",{HeadColor:0,HeadColor3:0,LeftArmColor:0,LeftArmColor3:0,LeftLegColor:0,LeftLegColor3:0,RightArmColor:0,RightArmColor3:0,RightLegColor:0,RightLegColor3:0,TorsoColor:0,TorsoColor3:0},20],["CharacterMesh",{BaseTextureId:2,BodyPart:[2,6],MeshId:2,OverlayTextureId:2},[220,60]],["Clothing",{Color3:0},20],["Pants",30,{PantsTemplate:0},[20,44]],["Shirt",30,{ShirtTemplate:0},[20,43]],["ShirtGraphic",{Color3:0,Graphic:0},[20,40]],["Skin",{SkinColor:0},20],["ClickDetector",{CursorIcon:13,MaxActivationDistance:2},[30,41]],["Clouds",{Cover:0,Density:0},[5,28]],["Configuration",,[220,58]],["Constraint",{Active:1,Attachment0:14,Attachment1:14,Color:0,Enabled:1,Visible:0},[30,86]],["AlignOrientation",38,{AlignType:[15,7],MaxAngularVelocity:16,MaxTorque:16,PrimaryAxisOnly:15,ReactionTorqueEnabled:15,Responsiveness:16,RigidityEnabled:15},[30,100]],["AlignPosition",38,{ApplyAtCenterOfMass:17,MaxForce:16,MaxVelocity:16,ReactionForceEnabled:17,Responsiveness:16,RigidityEnabled:17},[30,99]],["AngularVelocity",38,{AngularVelocity:18,MaxTorque:18,ReactionTorqueEnabled:18,RelativeTo:[18,8]},[30,103]],["BallSocketConstraint",38,{LimitsEnabled:19,MaxFrictionTorque:20,Radius:0,Restitution:21,TwistLimitsEnabled:21,TwistLowerAngle:22,TwistUpperAngle:22,UpperAngle:21},[30,86]],["HingeConstraint",38,{ActuatorType:[23,9],AngularSpeed:24,AngularVelocity:25,CurrentAngle:26,LimitsEnabled:23,LowerAngle:21,MotorMaxAcceleration:25,MotorMaxTorque:25,Radius:0,Restitution:21,ServoMaxTorque:24,TargetAngle:24,UpperAngle:21},[30,87]],["LineForce",38,{ApplyAtCenterOfMass:27,InverseSquareLaw:27,Magnitude:27,MaxForce:27,ReactionForceEnabled:27},[30,101]],["RodConstraint",38,{CurrentDistance:26,Length:28,Thickness:0},[30,90]],["RopeConstraint",38,{CurrentDistance:26,Length:29,Restitution:29,Thickness:0},[30,89]],["SlidingBallConstraint",38,{ActuatorType:[30,9],CurrentPosition:26,LimitsEnabled:30,LowerLimit:21,MotorMaxAcceleration:25,MotorMaxForce:25,Restitution:21,ServoMaxForce:24,Size:0,Speed:24,TargetPosition:24,UpperLimit:21,Velocity:25},[30,88]],["CylindricalConstraint",47,{AngularActuatorType:[31,9],AngularLimitsEnabled:31,AngularRestitution:32,AngularSpeed:33,AngularVelocity:34,CurrentAngle:26,InclinationAngle:31,LowerAngle:32,MotorMaxAngularAcceleration:34,MotorMaxTorque:34,RotationAxisVisible:0,ServoMaxTorque:33,TargetAngle:33,UpperAngle:32,WorldRotationAxis:26},[30,95]],["PrismaticConstraint",47,,[30,88]],["SpringConstraint",38,{Coils:0,CurrentLength:26,Damping:35,FreeLength:35,LimitsEnabled:35,MaxForce:35,MaxLength:21,MinLength:21,Radius:0,Stiffness:35,Thickness:0},[30,91]],["Torque",38,{RelativeTo:[18,8],Torque:18},[30,103]],["UniversalConstraint",38,{LimitsEnabled:36,MaxAngle:21,Radius:0,Restitution:21},[30,123]],["VectorForce",38,{ApplyAtCenterOfMass:37,Force:37,RelativeTo:[37,8]},[30,102]],["CustomEvent",,[30,4]],["CustomEventReceiver",{Source:2},[30,4]],["DataModelMesh",{Offset:2,Scale:2,VertexColor:2}],["BevelMesh",56],["BlockMesh",56,,[30,8]],["CylinderMesh",56,,[30,8]],["FileMesh",56,{MeshId:2,TextureId:2}],["SpecialMesh",60,{MeshType:[2,10]},[30,8]],["DataModelSession",{CurrentDataModelType:[2,11],SessionId:2}],["DataStoreInfo",{CreatedTime:2,DataStoreName:2,UpdatedTime:2}],["DataStoreKeyInfo",{KeyName:2}],["DataStoreKeyVersionInfo",{CreatedTime:2,UpdatedTime:2,Version:2}],["Dialog",{BehaviorType:[2,12],ConversationDistance:2,GoodbyeChoiceActive:2,GoodbyeDialog:2,InUse:2,InitialPrompt:2,Purpose:[2,13],Tone:[2,14],TriggerDistance:2,TriggerOffset:2},[220,62]],["DialogChoice",{GoodbyeChoiceActive:2,GoodbyeDialog:2,ResponseDialog:2,UserDialog:2},[220,63]],["Explosion",{BlastPressure:2,BlastRadius:2,DestroyJointRadiusPercent:2,ExplosionType:[2,15],Position:2,Visible:2},[30,36]],["FaceInstance",{Face:[2,16]}],["Decal",69,{Color3:0,Shiny:0,Specular:0,Texture:0,Transparency:0},[40,7]],["Texture",70,{OffsetStudsU:0,OffsetStudsV:0,StudsPerTileU:0,StudsPerTileV:0},[40,10]],["Feature",{FaceId:[2,16],InOut:[2,17],LeftRight:[2,18],TopBottom:[2,19]},20],["Hole",72,,20],["MotorFeature",72],["Fire",{Color:2,Enabled:2,Heat:2,SecondaryColor:2,Size:2,size:2},[30,61]],["Folder",,[10,77]],["ForceField",{Visible:2},[30,37]],["GuiBase2d",{AbsolutePosition:2,AbsoluteRotation:2,AbsoluteSize:2,AutoLocalize:38,RootLocalizationTable:38}],["GuiObject",78,{Active:2,AnchorPoint:2,AutomaticSize:[2,20],BackgroundColor3:2,BackgroundTransparency:2,BorderColor3:2,BorderMode:[2,21],BorderSizePixel:2,ClipsDescendants:1,Draggable:1,LayoutOrder:2,NextSelectionDown:1,NextSelectionLeft:1,NextSelectionRight:1,NextSelectionUp:1,Position:2,Rotation:2,Selectable:2,SelectionImageObject:0,Size:2,SizeConstraint:[2,22],Visible:2,ZIndex:2}],["Frame",79,{Style:[2,23]},[150,48]],["GuiButton",79,{AutoButtonColor:2,Modal:2,Selected:2,Style:[2,24]},[160,52]],["ImageButton",81,{HoverImage:13,Image:13,ImageColor3:13,ImageRectOffset:13,ImageRectSize:13,ImageTransparency:13,IsLoaded:13,PressedImage:13,ScaleType:[13,25],SliceCenter:13,SliceScale:13,TileSize:13},[160,52]],["TextButton",81,{Font:[39,26],FontSize:[39,27],LineHeight:39,RichText:39,Text:39,TextBounds:39,TextColor3:39,TextFits:39,TextScaled:39,TextSize:39,TextStrokeColor3:39,TextStrokeTransparency:39,TextTransparency:39,TextTruncate:[39,28],TextWrap:39,TextWrapped:39,TextXAlignment:[39,29],TextYAlignment:[39,30]},[170,51]],["GuiLabel",79],["ImageLabel",79,{Image:13,ImageColor3:13,ImageRectOffset:13,ImageRectSize:13,ImageTransparency:13,IsLoaded:13,ScaleType:[13,25],SliceCenter:13,SliceScale:13,TileSize:13},[180,49]],["TextLabel",79,{Font:[39,26],FontSize:[39,27],LineHeight:39,RichText:39,Text:39,TextBounds:39,TextColor3:39,TextFits:39,TextScaled:39,TextSize:39,TextStrokeColor3:39,TextStrokeTransparency:39,TextTransparency:39,TextTruncate:[39,28],TextWrap:39,TextWrapped:39,TextXAlignment:[39,29],TextYAlignment:[39,30]},[190,50]],["ScrollingFrame",79,{AbsoluteWindowSize:40,AutomaticCanvasSize:[40,20],BottomImage:40,CanvasPosition:40,CanvasSize:40,ElasticBehavior:[40,31],HorizontalScrollBarInset:[40,32],MidImage:40,ScrollBarImageColor3:40,ScrollBarImageTransparency:40,ScrollBarThickness:40,ScrollingDirection:[40,33],ScrollingEnabled:40,TopImage:40,VerticalScrollBarInset:[40,32],VerticalScrollBarPosition:[40,34]},[150,48]],["TextBox",79,{ClearTextOnFocus:2,CursorPosition:2,EnableRealtimeFilteringHints:39,Font:[39,26],FontSize:[39,27],LineHeight:39,ManualFocusRelease:2,MultiLine:2,OverlayNativeInput:2,PlaceholderColor3:39,PlaceholderText:39,ReturnKeyType:[2,35],RichText:39,SelectionStart:2,ShowNativeInput:2,Text:39,TextBounds:39,TextColor3:39,TextEditable:2,TextFits:39,TextInputType:[2,36],TextScaled:39,TextSize:39,TextStrokeColor3:39,TextStrokeTransparency:39,TextTransparency:39,TextTruncate:[39,28],TextWrap:39,TextWrapped:39,TextXAlignment:[39,29],TextYAlignment:[39,30]},[170,51]],["VideoFrame",79,{IsLoaded:41,Looped:41,Playing:41,Resolution:41,TimeLength:41,TimePosition:41,Video:41,Volume:41},[18,120]],["ViewportFrame",79,{Ambient:0,CurrentCamera:2,ImageColor3:13,ImageTransparency:13,LightColor:0,LightDirection:0},[30,52]],["LayerCollector",78,{Enabled:2,ResetOnSpawn:2,ZIndexBehavior:[2,37]}],["BillboardGui",91,{Active:2,Adornee:2,AlwaysOnTop:2,ClipsDescendants:1,CurrentDistance:2,DistanceLowerLimit:2,DistanceStep:2,DistanceUpperLimit:2,ExtentsOffset:2,ExtentsOffsetWorldSpace:2,LightInfluence:2,MaxDistance:2,PlayerToHideFrom:2,Size:2,SizeOffset:2,StudsOffset:2,StudsOffsetWorldSpace:2},[140,64]],["ScreenGui",91,{DisplayOrder:2,IgnoreGuiInset:2},[140,47]],["GuiMain",93,,[140,47]],["SurfaceGui",91,{Active:2,Adornee:2,AlwaysOnTop:2,CanvasSize:42,ClipsDescendants:1,Face:[2,16],LightInfluence:2,PixelsPerStud:42,SizingMode:[42,38],ToolPunchThroughDistance:2,ZOffset:0},[140,64]],["GuiBase3d",{Color3:0,Transparency:0,Visible:2}],["FloorWire",96,{CycleOffset:2,From:2,StudsBetweenTextures:2,Texture:0,TextureSize:0,To:2,Velocity:2,WireRadius:2},[30,4]],["InstanceAdornment",96,{Adornee:2}],["SelectionBox",98,{LineThickness:0,SurfaceColor3:0,SurfaceTransparency:0},[210,54]],["PVAdornment",96,{Adornee:2}],["HandleAdornment",100,{AdornCullingMode:[2,39],AlwaysOnTop:2,CFrame:2,SizeRelativeOffset:2,ZIndex:2}],["BoxHandleAdornment",101,{Size:2},[205,111]],["ConeHandleAdornment",101,{Height:2,Radius:2},[205,110]],["CylinderHandleAdornment",101,{Angle:2,Height:2,InnerRadius:2,Radius:2},[205,109]],["ImageHandleAdornment",101,{Image:2,Size:2},[205,108]],["LineHandleAdornment",101,{Length:2,Thickness:2},[205,107]],["SphereHandleAdornment",101,{Radius:2},[205,112]],["ParabolaAdornment",100,{A:2,B:2,C:2,Range:2,Thickness:2}],["SelectionSphere",100,{SurfaceColor3:0,SurfaceTransparency:0},[210,54]],["PartAdornment",96,{Adornee:2}],["HandlesBase",110],["ArcHandles",110,{Axes:2},[200,56]],["Handles",110,{Faces:2,Style:[,40]},[190,53]],["SurfaceSelection",110,{TargetSurface:[2,16]},[210,55]],["SelectionLasso",96,{Humanoid:2}],["SelectionPartLasso",115,{Part:2},[220,57]],["SelectionPointLasso",115,{Point:2},[220,57]],["Humanoid",{AutoJumpEnabled:43,AutoRotate:44,AutomaticScalingEnabled:45,BreakJointsOnDeath:1,CameraOffset:2,CollisionType:[1,41],DisplayDistanceType:[2,42],DisplayName:2,FloorMaterial:[44,43],Health:45,HealthDisplayDistance:2,HealthDisplayType:[2,44],HipHeight:45,Jump:44,JumpHeight:43,JumpPower:43,MaxHealth:45,MaxSlopeAngle:45,MoveDirection:44,NameDisplayDistance:2,NameOcclusion:[2,45],PlatformStand:44,RequiresNeck:1,RigType:[2,46],RootPart:2,SeatPart:44,Sit:44,TargetPoint:44,UseJumpPower:43,WalkSpeed:45,WalkToPart:44,WalkToPoint:44,maxHealth:45},[30,9]],["HumanoidDescription",{BackAccessory:46,BodyTypeScale:47,ClimbAnimation:48,DepthScale:47,Face:49,FaceAccessory:46,FallAnimation:48,FrontAccessory:46,GraphicTShirt:50,HairAccessory:46,HatAccessory:46,Head:49,HeadColor:51,HeadScale:47,HeightScale:47,IdleAnimation:48,JumpAnimation:48,LeftArm:49,LeftArmColor:51,LeftLeg:49,LeftLegColor:51,NeckAccessory:46,Pants:50,ProportionScale:47,RightArm:49,RightArmColor:51,RightLeg:49,RightLegColor:51,RunAnimation:48,Shirt:50,ShouldersAccessory:46,SwimAnimation:48,Torso:49,TorsoColor:51,WaistAccessory:46,WalkAnimation:48,WidthScale:47},[22,104]],["JointInstance",{Active:1,C0:2,C1:2,Enabled:1,Part0:2,Part1:2},[200,34]],["DynamicRotate",120,{BaseAngle:2}],["RotateP",121],["RotateV",121],["Glue",120,{F0:2,F1:2,F2:2,F3:2}],["ManualSurfaceJointInstance",120],["ManualGlue",120],["ManualWeld",120],["Motor",120,{CurrentAngle:2,DesiredAngle:2,MaxVelocity:2},20],["Motor6D",128,{ChildName:52,ParentName:52},[200,106]],["Rotate",120],["Snap",120,,[200,34]],["VelocityMotor",120,{CurrentAngle:2,DesiredAngle:2,Hole:2,MaxVelocity:2}],["Weld",120,,[200,34]],["Keyframe",{Time:2},[220,60]],["KeyframeMarker",{Value:2},[220,60]],["KeyframeSequence",{AuthoredHipHeight:2,Loop:2,Priority:[2,47]}],["Light",{Brightness:0,Color:0,Enabled:0,Shadows:0},[30,13]],["PointLight",137,{Range:0},[30,13]],["SpotLight",137,{Angle:0,Face:[,16],Range:0},[30,13]],["SurfaceLight",137,{Angle:0,Face:[,16],Range:0},[30,13]],["LocalizationTable",{SourceLocaleId:38},[30,97]],["LuaSourceContainer",{CurrentEditor:2,IsDifferentFromFileSystem:2}],["BaseScript",142,{Disabled:1,LinkedSource:2}],["CoreScript",143],["Script",143,{Source:2},[30,6]],["LocalScript",145,,[40,18]],["ModuleScript",142,{LinkedSource:2,Source:2},[50,76]],["Message",{Text:0},[110,33]],["Hint",148,,[110,33]],["MultipleDocumentInterfaceInstance",{FocusedDataModelSession:2}],["NoCollisionConstraint",{Enabled:1,Part0:53,Part1:53},[30,105]],["ObjectVersionInfo",{CreatedTime:2,IsDeleted:2,Version:2}],["BasePart",{Anchored:1,AssemblyAngularVelocity:54,AssemblyCenterOfMass:54,AssemblyLinearVelocity:54,AssemblyMass:54,AssemblyRootPart:54,BackParamA:55,BackParamB:55,BackSurface:[56,48],BackSurfaceInput:[55,49],BottomParamA:55,BottomParamB:55,BottomSurface:[56,48],BottomSurfaceInput:[55,49],BrickColor:0,CFrame:2,CanCollide:1,CanTouch:1,CastShadow:0,CenterOfMass:2,CollisionGroupId:1,Color:0,CustomPhysicalProperties:57,FrontParamA:55,FrontParamB:55,FrontSurface:[56,48],FrontSurfaceInput:[55,49],LeftParamA:55,LeftParamB:55,LeftSurface:[56,48],LeftSurfaceInput:[55,49],Locked:1,Mass:2,Massless:1,Material:[,43],Orientation:2,Position:2,Reflectance:0,ResizeIncrement:1,ResizeableFaces:1,RightParamA:55,RightParamB:55,RightSurface:[56,48],RightSurfaceInput:[55,49],RootPriority:57,RotVelocity:2,Rotation:2,Size:57,SpecificGravity:2,TopParamA:55,TopParamB:55,TopSurface:[56,48],TopSurfaceInput:[55,49],Transparency:0,Velocity:2,brickColor:0},3],["CornerWedgePart",153,,[120,1]],["FormFactorPart",153,{FormFactor:[57,50]}],["Part",155,{Shape:[57,51]},[110,1]],["FlagStand",156,{TeamColor:2},[30,39]],["Platform",156,,[30,35]],["Seat",156,{Disabled:44,Occupant:44},[30,35]],["SkateboardPlatform",156,{Controller:44,ControllingHumanoid:44,Steer:44,StickyWheels:44,Throttle:44},[30,35]],["SpawnLocation",156,{AllowTeamChangeOnTouch:58,Duration:59,Enabled:1,Neutral:58,TeamColor:58},[30,25]],["WedgePart",155,,[120,1]],["Terrain",153,{Decoration:0,IsSmooth:2,MaterialColors:0,MaxExtents:2,WaterColor:0,WaterReflectance:0,WaterTransparency:0,WaterWaveSize:0,WaterWaveSpeed:0},[5,65]],["TriangleMeshPart",153,{CollisionFidelity:[1,52]}],["MeshPart",164,{DoubleSided:0,MeshID:0,MeshId:0,MeshSize:2,RenderFidelity:[,53],TextureID:0},[105,73]],["PartOperation",164,{RenderFidelity:[,53],SmoothingAngle:0,TriangleCount:2,UsePartColor:2}],["NegateOperation",166,,[104,72]],["UnionOperation",166,,[105,73]],["TrussPart",153,{Style:[57,54]},[120,1]],["VehicleSeat",153,{AreHingesDetected:44,Disabled:44,HeadsUpDisplay:44,MaxSpeed:44,Occupant:44,Steer:44,SteerFloat:44,Throttle:44,ThrottleFloat:44,Torque:44,TurnSpeed:44},[30,35]],["Model",{LevelOfDetail:[,55],PrimaryPart:2},[100,2]],["Actor",171,,[10,113]],["Status",171,,[100,2]],["WorldRoot",171],["WorldModel",171,,[22,19]],["PackageLink",{AutoUpdate:60,PackageId:60,Status:60,VersionNumber:60},[1,98]],["ParticleEmitter",{Acceleration:61,Color:0,Drag:62,EmissionDirection:[63,16],Enabled:63,Lifetime:63,LightEmission:0,LightInfluence:0,LockedToPart:62,Orientation:[,56],Rate:63,RotSpeed:63,Rotation:63,Size:0,Speed:63,SpreadAngle:63,Texture:0,Transparency:0,VelocityInheritance:62,VelocitySpread:63,ZOffset:0},[30,80]],["PlayerScripts",,[130,78]],["PluginMenu",{Icon:0,Title:0}],["PluginToolbarButton",{ClickableWhenViewportHidden:0,Enabled:0,Icon:0}],["PoseBase",{EasingDirection:[2,57],EasingStyle:[2,58],Weight:2},[220,60]],["NumberPose",181,{Value:2},[220,60]],["Pose",181,{CFrame:2,MaskWeight:2},[220,60]],["PostEffect",{Enabled:3}],["BloomEffect",184,{Intensity:3,Size:3,Threshold:3},[20,83]],["BlurEffect",184,{Size:3},[20,83]],["ColorCorrectionEffect",184,{Brightness:3,Contrast:3,Saturation:3,TintColor:3},[20,83]],["DepthOfFieldEffect",184,{FarIntensity:3,FocusDistance:3,InFocusRadius:3,NearIntensity:3},[20,83]],["SunRaysEffect",184,{Intensity:3,Spread:3},[20,83]],["ProximityPrompt",{ActionText:2,AutoLocalize:38,ClickablePrompt:2,Enabled:2,Exclusivity:[2,59],GamepadKeyCode:[2,60],HoldDuration:2,KeyboardKeyCode:[2,60],MaxActivationDistance:2,ObjectText:2,RequiresLineOfSight:2,RootLocalizationTable:38,Style:[2,61],UIOffset:2},[30,124]],["RemoteEvent",,[50,75]],["RemoteFunction",,[40,74]],["DataModel",{CreatorId:3,CreatorType:[3,62],GameId:3,GearGenreSetting:[3,63],Genre:[3,64],IsSFFlagsLoaded:2,JobId:64,PlaceId:3,PlaceVersion:3,PrivateServerId:2,PrivateServerOwnerId:2,Workspace:2,lighting:2,workspace:2}],["Sky",{CelestialBodiesShown:0,MoonAngularSize:0,MoonTextureId:0,SkyboxBk:0,SkyboxDn:0,SkyboxFt:0,SkyboxLf:0,SkyboxRt:0,SkyboxUp:0,StarCount:0,SunAngularSize:0,SunTextureId:0},[5,28]],["Smoke",{Color:2,Enabled:2,Opacity:2,RiseVelocity:2,Size:2},[30,59]],["Sound",{EmitterSize:2,IsLoaded:2,IsPaused:2,IsPlaying:2,Looped:2,MaxDistance:2,MinDistance:2,Pitch:2,PlayOnRemove:1,PlaybackLoudness:2,PlaybackSpeed:2,Playing:2,RollOffMaxDistance:2,RollOffMinDistance:2,RollOffMode:[2,65],SoundGroup:2,SoundId:2,TimeLength:2,TimePosition:2,Volume:2,isPlaying:2},[10,11]],["SoundEffect",{Enabled:3,Priority:3}],["ChorusSoundEffect",197,{Depth:3,Mix:3,Rate:3},[20,84]],["CompressorSoundEffect",197,{Attack:3,GainMakeup:3,Ratio:3,Release:3,SideChain:3,Threshold:3},[20,84]],["DistortionSoundEffect",197,{Level:3},[20,84]],["EchoSoundEffect",197,{Delay:3,DryLevel:3,Feedback:3,WetLevel:3},[20,84]],["EqualizerSoundEffect",197,{HighGain:3,LowGain:3,MidGain:3},[20,84]],["FlangeSoundEffect",197,{Depth:3,Mix:3,Rate:3},[20,84]],["PitchShiftSoundEffect",197,{Octave:3},[20,84]],["ReverbSoundEffect",197,{DecayTime:3,Density:3,Diffusion:3,DryLevel:3,WetLevel:3},[20,84]],["TremoloSoundEffect",197,{Depth:3,Duty:3,Frequency:3},[20,84]],["SoundGroup",{Volume:3},[20,85]],["Sparkles",{Enabled:2,SparkleColor:2},[30,42]],["StandalonePluginScripts",,[130,78]],["StarterGear",,[30,20]],["StarterPlayerScripts",,[130,78]],["StarterCharacterScripts",211,,[130,78]],["SurfaceAppearance",{AlphaMode:[,66],ColorMap:0,MetalnessMap:0,NormalMap:0,RoughnessMap:0},[40,10]],["Team",{AutoAssignable:2,AutoColorCharacters:2,Score:2,TeamColor:2},[10,24]],["TeleportAsyncResult",{PrivateServerId:2,ReservedServerAccessCode:2}],["TeleportOptions",{ReservedServerAccessCode:2,ServerInstanceId:2,ShouldReserveServer:2}],["TerrainRegion",{IsSmooth:2,SizeInCells:2},[20,65]],["TouchTransmitter",,[30,37]],["Trail",{Attachment0:2,Attachment1:2,Color:0,Enabled:63,FaceCamera:0,Lifetime:63,LightEmission:0,LightInfluence:0,MaxLength:63,MinLength:63,Texture:0,TextureLength:0,TextureMode:[,3],Transparency:0,WidthScale:63},[30,93]],["UIAspectRatioConstraint",{AspectRatio:1,AspectType:[1,67],DominantAxis:[1,68]},[30,26]],["UISizeConstraint",{MaxSize:1,MinSize:1},[30,26]],["UITextSizeConstraint",{MaxTextSize:1,MinTextSize:1},[30,26]],["UICorner",{CornerRadius:0},[30,26]],["UIGradient",{Color:0,Enabled:0,Offset:0,Rotation:0,Transparency:0},[30,26]],["UIGridStyleLayout",{AbsoluteContentSize:2,FillDirection:[1,69],HorizontalAlignment:[1,70],SortOrder:[1,71],VerticalAlignment:[1,72]}],["UIGridLayout",225,{AbsoluteCellCount:2,AbsoluteCellSize:2,CellPadding:0,CellSize:0,FillDirectionMaxCells:1,StartCorner:[1,73]},[30,26]],["UIListLayout",225,{Padding:0},[30,26]],["UIPageLayout",225,{Animated:0,Circular:0,CurrentPage:2,EasingDirection:[,74],EasingStyle:[,75],GamepadInputEnabled:65,Padding:0,ScrollWheelInputEnabled:65,TouchInputEnabled:65,TweenTime:0},[30,26]],["UITableLayout",225,{FillEmptySpaceColumns:0,FillEmptySpaceRows:0,MajorAxis:[1,76],Padding:0},[30,26]],["UIPadding",{PaddingBottom:1,PaddingLeft:1,PaddingRight:1,PaddingTop:1},[30,26]],["UIScale",{Scale:1},[30,26]],["UserGameSettings",{AllTutorialsDisabled:2,CameraMode:[44,77],ChatVisible:2,ComputerCameraMovementMode:[44,78],ComputerMovementMode:[44,79],ControlMode:[44,80],Fullscreen:2,GamepadCameraSensitivity:2,GraphicsQualityLevel:0,HasEverUsedVR:2,MasterVolume:2,MouseSensitivity:2,OnboardingsCompleted:2,RCCProfilerRecordFrameRate:2,RCCProfilerRecordTimeFrame:2,RotationType:[44,81],SavedQualityLevel:[,82],StartMaximized:2,StartScreenPosition:2,StartScreenSize:2,TouchCameraMovementMode:[44,83],TouchMovementMode:[44,84],UsedCoreGuiIsVisibleToggle:2,UsedCustomGuiIsVisibleToggle:2,UsedHideHudShortcut:2,VREnabled:2,VRRotationIntensity:2}],["ValueBase",,[30,4]],["BinaryStringValue",233],["BoolValue",233,{Value:2},[30,4]],["BrickColorValue",233,{Value:2},[30,4]],["CFrameValue",233,{Value:2},[30,4]],["Color3Value",233,{Value:2},[30,4]],["DoubleConstrainedValue",233,{MaxValue:2,MinValue:2,Value:2},[30,4]],["IntConstrainedValue",233,{MaxValue:2,MinValue:2,Value:2},[30,4]],["IntValue",233,{Value:2},[30,4]],["NumberValue",233,{Value:2},[30,4]],["ObjectValue",233,{Value:2},[30,4]],["RayValue",233,{Value:2},[30,4]],["StringValue",233,{Value:2},[30,4]],["Vector3Value",233,{Value:2},[30,4]],["WeldConstraint",{Active:1,Enabled:1,Part0:53,Part1:53},[30,94]]
		]
	}

	const BrickColors = {
		1:"White",2:"Grey",3:"Light yellow",5:"Brick yellow",6:"Light green (Mint)",9:"Light reddish violet",11:"Pastel Blue",12:"Light orange brown",18:"Nougat",21:"Bright red",22:"Med. reddish violet",23:"Bright blue",24:"Bright yellow",25:"Earth orange",26:"Black",27:"Dark grey",28:"Dark green",29:"Medium green",36:"Lig. Yellowich orange",37:"Bright green",38:"Dark orange",39:"Light bluish violet",40:"Transparent",41:"Tr. Red",42:"Tr. Lg blue",43:"Tr. Blue",44:"Tr. Yellow",45:"Light blue",47:"Tr. Flu. Reddish orange",48:"Tr. Green",49:"Tr. Flu. Green",50:"Phosph. White",100:"Light red",101:"Medium red",102:"Medium blue",103:"Light grey",104:"Bright violet",105:"Br. yellowish orange",106:"Bright orange",107:"Bright bluish green",108:"Earth yellow",110:"Bright bluish violet",111:"Tr. Brown",112:"Medium bluish violet",113:"Tr. Medi. reddish violet",115:"Med. yellowish green",116:"Med. bluish green",118:"Light bluish green",119:"Br. yellowish green",120:"Lig. yellowish green",121:"Med. yellowish orange",123:"Br. reddish orange",124:"Bright reddish violet",125:"Light orange",126:"Tr. Bright bluish violet",127:"Gold",128:"Dark nougat",131:"Silver",133:"Neon orange",134:"Neon green",135:"Sand blue",136:"Sand violet",137:"Medium orange",138:"Sand yellow",140:"Earth blue",141:"Earth green",143:"Tr. Flu. Blue",145:"Sand blue metallic",146:"Sand violet metallic",147:"Sand yellow metallic",148:"Dark grey metallic",149:"Black metallic",150:"Light grey metallic",151:"Sand green",153:"Sand red",154:"Dark red",157:"Tr. Flu. Yellow",158:"Tr. Flu. Red",168:"Gun metallic",176:"Red flip/flop",178:"Yellow flip/flop",179:"Silver flip/flop",180:"Curry",190:"Fire Yellow",191:"Flame yellowish orange",192:"Reddish brown",193:"Flame reddish orange",194:"Medium stone grey",195:"Royal blue",196:"Dark Royal blue",198:"Bright reddish lilac",199:"Dark stone grey",200:"Lemon metalic",208:"Light stone grey",209:"Dark Curry",210:"Faded green",211:"Turquoise",212:"Light Royal blue",213:"Medium Royal blue",216:"Rust",217:"Brown",218:"Reddish lilac",219:"Lilac",220:"Light lilac",221:"Bright purple",222:"Light purple",223:"Light pink",224:"Light brick yellow",225:"Warm yellowish orange",226:"Cool yellow",232:"Dove blue",268:"Medium lilac",301:"Slime green",302:"Smoky grey",303:"Dark blue",304:"Parsley green",305:"Steel blue",306:"Storm blue",307:"Lapis",308:"Dark indigo",309:"Sea green",310:"Shamrock",311:"Fossil",312:"Mulberry",313:"Forest green",314:"Cadet blue",315:"Electric blue",316:"Eggplant",317:"Moss",318:"Artichoke",319:"Sage green",320:"Ghost grey",321:"Lilac",322:"Plum",323:"Olivine",324:"Laurel green",325:"Quill grey",327:"Crimson",328:"Mint",329:"Baby blue",330:"Carnation pink",331:"Persimmon",332:"Maroon",333:"Gold",334:"Daisy orange",335:"Pearl",336:"Fog",337:"Salmon",338:"Terra Cotta",339:"Cocoa",340:"Wheat",341:"Buttermilk",342:"Mauve",343:"Sunrise",344:"Tawny",345:"Rust",346:"Cashmere",347:"Khaki",348:"Lily white",349:"Seashell",350:"Burgundy",351:"Cork",352:"Burlap",353:"Beige",354:"Oyster",355:"Pine Cone",356:"Fawn brown",357:"Hurricane grey",358:"Cloudy grey",359:"Linen",360:"Copper",361:"Dirt brown",362:"Bronze",363:"Flint",364:"Dark taupe",365:"Burnt Sienna",1001:"Institutional white",1002:"Mid gray",1003:"Really black",1004:"Really red",1005:"Deep orange",1006:"Alder",1007:"Dusty Rose",1008:"Olive",1009:"New Yeller",1010:"Really blue",1011:"Navy blue",1012:"Deep blue",1013:"Cyan",1014:"CGA brown",1015:"Magenta",1016:"Pink",1017:"Deep orange",1018:"Teal",1019:"Toothpaste",1020:"Lime green",1021:"Camo",1022:"Grime",1023:"Lavender",1024:"Pastel light blue",1025:"Pastel orange",1026:"Pastel violet",1027:"Pastel blue-green",1028:"Pastel green",1029:"Pastel yellow",1030:"Pastel brown",1031:"Royal purple",1032:"Hot pink"
	}
	
	const ZeroClassName = Data.Classes[0][0]
	let isPrepared = false
	const prepare = () => {
		if(isPrepared) { return }
		isPrepared = true

		const enums = Data.Enums
		const enumDict = Data.Enums = {}
		enums.forEach(([name, items]) => enumDict[name] = items)

		const classes = Data.Classes
		const classDict = Data.Classes = {}
		classes.forEach(([className, superClass, members, rmd]) => {
			if(typeof superClass !== "number") {
				rmd = members
				members = superClass
				superClass = null
			}

			superClass = classes[superClass || 0][0]
			superClass = className === superClass ? null : classDict[superClass]
			
			if(members) {
				Object.entries(members).forEach(([prop, value]) => {
					if(typeof value === "number") {
						members[prop] = {
							Group: value === -1 ? "HIDDEN" : Data.Categories[value]
						}
					} else {
						const [cat, enumIndex] = value
						const [enumType, enumItems] = enums[enumIndex || 0]
	
						members[prop] = {
							Group: cat === -1 ? "HIDDEN" : Data.Categories[cat || 0],
							EnumType: enumType,
							EnumItems: enumItems
						}
					}
				})
			}

			classDict[className] = {
				Name: className,
				Superclass: superClass,
				Members: members,
				ExplorerOrder: typeof rmd === "number" ? rmd : rmd ? rmd[0] : undefined,
				ExplorerIcon: Array.isArray(rmd) ? rmd[1] : undefined
			}
		})
	}

	const getPropInfo = (className, prop) => {
		prepare()
		let target = Data.Classes[className] || Data.Classes[ZeroClassName]

		while(target) {
			if(target.Members) {
				const propInfo = target.Members[prop]
				if(propInfo) { return propInfo }
			}
			target = target.Superclass
		}

		return null
	}

	return {
		getEnum(name) {
			prepare()
			return Data.Enums[name]
		},
		getPropertyGroup(className, prop) {
			prepare()
			const propInfo = getPropInfo(className, prop)
			return propInfo ? propInfo.Group : IS_DEV_MODE ? "Unknown" : "Data"
		},
		getPropertyEnumName(className, prop, value) {
			prepare()
			const propInfo = getPropInfo(className, prop)
			return (propInfo && propInfo.EnumItems) ? propInfo.EnumItems[value] : null
		},
		getBrickColorName(value) {
			return BrickColors[value]
		},
		getExplorerIconIndex(className) {
			prepare()
			const data = Data.Classes[className]
			if(data && data.ExplorerIcon !== undefined) { return data.ExplorerIcon }
			return 0
		},
		getExplorerOrder(className) {
			prepare()
			const data = Data.Classes[className]
			if(data && data.ExplorerOrder !== undefined) { return data.ExplorerOrder }
			return -1
		}
	}
})()