/* eslint-disable */
"use strict"

const ApiDump = (() => {
	const Data = {
		Categories: [
			"Appearance","Behavior","Data","Derived Data","Derived World Data","State","Shape","Goals","Thrust","Turn","Camera","Image","Attachments","AlignOrientation","Compliance","AlignPosition","Torque","BallSocket","Limits","TwistLimits","Hinge","Servo","Motor","Derived","LineForce","Rod","Rope","Slider","Cylinder","AngularLimits","AngularServo","AngularMotor","Spring","VectorForce","Localization","Text","Scrolling","Sizing","Jump Settings","Control","Game","Accessories","Scale","Animation","Body Parts","Clothes","Body Colors","Parts","Surface Inputs","Surface","Part ","Teams","Forcefield","Link","Motion","Particles","Emission","JobInfo","Input"
		],
		Enums: [
			["BinType",["Script","GameTool","Grab","Clone","Hammer"]],["TextureMode",["Stretch","Wrap","Static"]],["CameraType",["Fixed","Attach","Watch","Track","Follow","Custom","Scriptable","Orbital"]],["BodyPart",["Head","Torso","LeftArm","RightArm","LeftLeg","RightLeg"]],["AlignType",["Parallel","Perpendicular"]],["ActuatorRelativeTo",["Attachment0","Attachment1","World"]],["ActuatorType",["None","Motor","Servo"]],["MeshType",["Head","Torso","Wedge","Sphere","Cylinder","FileMesh","Brick","Prism","Pyramid","ParallelRamp","RightAngleRamp","CornerWedge"]],["DialogBehaviorType",["SinglePlayer","MultiplePlayers"]],["DialogPurpose",["Quest","Help","Shop"]],["DialogTone",["Neutral","Friendly","Enemy"]],["ExplosionType",["NoCraters","Craters","CratersAndDebris"]],["NormalId",["Right","Top","Back","Left","Bottom","Front"]],["InOut",["Edge","Inset","Center"]],["LeftRight",["Left","Center","Right"]],["TopBottom",["Top","Center","Bottom"]],["SizeConstraint",["RelativeXY","RelativeXX","RelativeYY"]],["FrameStyle",["Custom","ChatBlue","RobloxSquare","RobloxRound","ChatGreen","ChatRed","DropShadow"]],["ButtonStyle",["Custom","RobloxButtonDefault","RobloxButton","RobloxRoundButton","RobloxRoundDefaultButton","RobloxRoundDropdownButton"]],["ScaleType",["Stretch","Slice","Tile","Fit","Crop"]],["Font",["Legacy","Arial","ArialBold","SourceSans","SourceSansBold","SourceSansLight","SourceSansItalic","Bodoni","Garamond","Cartoon","Code","Highway","SciFi","Arcade","Fantasy","Antique","SourceSansSemibold","Gotham","GothamSemibold","GothamBold","GothamBlack"]],["FontSize",["Size8","Size9","Size10","Size11","Size12","Size14","Size18","Size24","Size36","Size48","Size28","Size32","Size42","Size60","Size96"]],["TextTruncate",["None","AtEnd"]],["TextXAlignment",["Left","Right","Center"]],["TextYAlignment",["Top","Center","Bottom"]],["ElasticBehavior",["WhenScrollable","Always","Never"]],["ScrollBarInset",["None","ScrollBar","Always"]],["ScrollingDirection",["X","Y",,"XY"]],["VerticalScrollBarPosition",["Right","Left"]],["ZIndexBehavior",["Global","Sibling"]],["SurfaceGuiSizingMode",["FixedSize","PixelsPerStud"]],["HandlesStyle",["Resize","Movement"]],["HumanoidCollisionType",["OuterBox","InnerBox"]],["HumanoidDisplayDistanceType",["Viewer","Subject","None"]],["Material",{256:"Plastic",272:"SmoothPlastic",288:"Neon",512:"Wood",528:"WoodPlanks",784:"Marble",788:"Basalt",800:"Slate",804:"CrackedLava",816:"Concrete",820:"Limestone",832:"Granite",836:"Pavement",848:"Brick",864:"Pebble",880:"Cobblestone",896:"Rock",912:"Sandstone",1040:"CorrodedMetal",1056:"DiamondPlate",1072:"Foil",1088:"Metal",1280:"Grass",1284:"LeafyGrass",1296:"Sand",1312:"Fabric",1328:"Snow",1344:"Mud",1360:"Ground",1376:"Asphalt",1392:"Salt",1536:"Ice",1552:"Glacier",1568:"Glass",1584:"ForceField",1792:"Air",2048:"Water"}],["HumanoidHealthDisplayType",["DisplayWhenDamaged","AlwaysOn","AlwaysOff"]],["NameOcclusion",["NoOcclusion","EnemyOcclusion","OccludeAll"]],["HumanoidRigType",["R6","R15"]],["AnimationPriority",{0:"Idle",1:"Movement",2:"Action",1000:"Core"}],["SurfaceType",["Smooth","Glue","Weld","Studs","Inlet","Universal","Hinge","Motor","SteppingMotor",,"SmoothNoOutlines"]],["InputType",{0:"NoInput",12:"Constant",13:"Sin"}],["FormFactor",["Symmetric","Brick","Plate","Custom"]],["PartType",["Ball","Block","Cylinder"]],["CollisionFidelity",["Default","Hull","Box"]],["RenderFidelity",["Automatic","Precise"]],["Style",["AlternatingSupports","BridgeStyleSupports","NoSupports"]],["PoseEasingDirection",["In","Out","InOut"]],["PoseEasingStyle",["Linear","Constant","Elastic","Cubic","Bounce"]],["CreatorType",["User","Group"]],["GearGenreSetting",["AllGenres","MatchingGenreOnly"]],["Genre",["All","TownAndCity","Fantasy","SciFi","Ninja","Scary","Pirate","Adventure","Sports","Funny","WildWest","War","SkatePark","Tutorial"]],["RollOffMode",["Inverse","Linear","LinearSquare","InverseTapered"]],["AspectType",["FitWithinMaxSize","ScaleWithParentSize"]],["DominantAxis",["Width","Height"]],["FillDirection",["Horizontal","Vertical"]],["HorizontalAlignment",["Center","Left","Right"]],["SortOrder",["Name","Custom","LayoutOrder"]],["VerticalAlignment",["Center","Top","Bottom"]],["StartCorner",["TopLeft","TopRight","BottomLeft","BottomRight"]],["InlineAlignment",["Bottom","Center","Top"]],["EasingDirection",["In","Out","InOut"]],["EasingStyle",["Linear","Sine","Back","Quad","Quart","Quint","Bounce","Elastic"]],["TableMajorAxis",["RowMajor","ColumnMajor"]]
		],
		Classes: [
			["Instance",{Archivable:1,ClassName:2,DataCost:2,Name:2,Parent:2,RobloxLocked:2,className:2,ClassName:2,Archivable:1}],["Accoutrement",{AttachmentForward:0,AttachmentPoint:0,AttachmentPos:0,AttachmentRight:0,AttachmentUp:0},[20,32]],["Accessory",1,,[30,32]],["Hat",1,,[30,45]],["Animation",{AnimationId:2},[220,60]],["AnimationController",,[220,60]],["Attachment",{Axis:3,CFrame:2,Orientation:2,Position:2,SecondaryAxis:3,Visible:0,WorldAxis:4,WorldCFrame:4,WorldOrientation:4,WorldPosition:4,WorldSecondaryAxis:4},[30,81]],["Backpack",,[30,20]],["BackpackItem",{TextureId:2},20],["HopperBin",8,{Active:2,BinType:[]},[240,22]],["Tool",8,{CanBeDropped:1,Enabled:5,Grip:0,GripForward:0,GripPos:0,GripRight:0,GripUp:0,ManualActivationOnly:1,RequiresHandle:1,ToolTip:0},[30,17]],["Flag",10,{TeamColor:2},[30,38]],["Beam",{Attachment0:6,Attachment1:6,Color:0,CurveSize0:6,CurveSize1:6,Enabled:0,FaceCamera:6,LightEmission:0,LightInfluence:0,Segments:6,Texture:0,TextureLength:0,TextureMode:[,1],TextureSpeed:0,Transparency:0,Width0:6,Width1:6,ZOffset:0},[30,96]],["BindableEvent",,[50,67]],["BindableFunction",,[40,66]],["BodyAngularVelocity",{AngularVelocity:7,MaxTorque:7,P:7,angularvelocity:7,maxTorque:7},[140,14]],["BodyForce",{Force:7,force:7},[140,14]],["BodyGyro",{CFrame:7,D:7,MaxTorque:7,P:7,cframe:7,maxTorque:7},[140,14]],["BodyPosition",{D:7,MaxForce:7,P:7,Position:7,maxForce:7,position:7},[140,14]],["BodyThrust",{Force:7,Location:7,force:7,location:7},[140,14]],["BodyVelocity",{MaxForce:7,P:7,Velocity:7,maxForce:7,velocity:7},[140,14]],["RocketPropulsion",{CartoonFactor:7,MaxSpeed:8,MaxThrust:8,MaxTorque:9,Target:7,TargetOffset:7,TargetRadius:7,ThrustD:8,ThrustP:8,TurnD:9,TurnP:9},[140,14]],["Camera",{CFrame:2,CameraSubject:10,CameraType:[10,2],FieldOfView:2,Focus:2,HeadLocked:2,HeadScale:2,NearPlaneZ:2,ViewportSize:2,focus:2},[5,5]],["BodyColors",{HeadColor:0,HeadColor3:0,LeftArmColor:0,LeftArmColor3:0,LeftLegColor:0,LeftLegColor3:0,RightArmColor:0,RightArmColor3:0,RightLegColor:0,RightLegColor3:0,TorsoColor:0,TorsoColor3:0},20],["CharacterMesh",{BaseTextureId:2,BodyPart:[2,3],MeshId:2,OverlayTextureId:2},[220,60]],["Clothing",{Color3:0},20],["Pants",25,{PantsTemplate:0},[20,44]],["Shirt",25,{ShirtTemplate:0},[20,43]],["ShirtGraphic",{Color3:0,Graphic:0},[20,40]],["Skin",{SkinColor:0},20],["ClickDetector",{CursorIcon:11,MaxActivationDistance:2},[30,41]],["Configuration",,[220,58]],["Constraint",{Active:1,Attachment0:12,Attachment1:12,Color:0,Enabled:1,Visible:0},[30,86]],["AlignOrientation",32,{AlignType:[13,4],MaxAngularVelocity:14,MaxTorque:14,PrimaryAxisOnly:13,ReactionTorqueEnabled:13,Responsiveness:14,RigidityEnabled:13},[30,100]],["AlignPosition",32,{ApplyAtCenterOfMass:15,MaxForce:14,MaxVelocity:14,ReactionForceEnabled:15,Responsiveness:14,RigidityEnabled:15},[30,99]],["AngularVelocity",32,{AngularVelocity:16,MaxTorque:16,RelativeTo:[16,5]},[30,103]],["BallSocketConstraint",32,{LimitsEnabled:17,Radius:0,Restitution:18,TwistLimitsEnabled:18,TwistLowerAngle:19,TwistUpperAngle:19,UpperAngle:18},[30,86]],["HingeConstraint",32,{ActuatorType:[20,6],AngularSpeed:21,AngularVelocity:22,CurrentAngle:23,LimitsEnabled:20,LowerAngle:18,MotorMaxAcceleration:22,MotorMaxTorque:22,Radius:0,Restitution:18,ServoMaxTorque:21,TargetAngle:21,UpperAngle:18},[30,87]],["LineForce",32,{ApplyAtCenterOfMass:24,InverseSquareLaw:24,Magnitude:24,MaxForce:24,ReactionForceEnabled:24},[30,101]],["RodConstraint",32,{CurrentDistance:23,Length:25,Thickness:0},[30,90]],["RopeConstraint",32,{CurrentDistance:23,Length:26,Restitution:26,Thickness:0},[30,89]],["SlidingBallConstraint",32,{ActuatorType:[27,6],CurrentPosition:23,LimitsEnabled:27,LowerLimit:18,MotorMaxAcceleration:22,MotorMaxForce:22,Restitution:18,ServoMaxForce:21,Size:0,Speed:21,TargetPosition:21,UpperLimit:18,Velocity:22},[30,88]],["CylindricalConstraint",41,{AngularActuatorType:[28,6],AngularLimitsEnabled:28,AngularRestitution:29,AngularSpeed:30,AngularVelocity:31,CurrentAngle:23,InclinationAngle:28,LowerAngle:29,MotorMaxAngularAcceleration:31,MotorMaxTorque:31,RotationAxisVisible:0,ServoMaxTorque:30,TargetAngle:30,UpperAngle:29,WorldRotationAxis:23},[30,95]],["PrismaticConstraint",41,,[30,88]],["SpringConstraint",32,{Coils:0,CurrentLength:23,Damping:32,FreeLength:32,LimitsEnabled:32,MaxForce:32,MaxLength:18,MinLength:18,Radius:0,Stiffness:32,Thickness:0},[30,91]],["Torque",32,{RelativeTo:[16,5],Torque:16},[30,103]],["VectorForce",32,{ApplyAtCenterOfMass:33,Force:33,RelativeTo:[33,5]},[30,102]],["CustomEvent",,[30,4]],["CustomEventReceiver",{Source:2},[30,4]],["DataModelMesh",{Offset:2,Scale:2,VertexColor:2}],["BevelMesh",49],["BlockMesh",49,,[30,8]],["CylinderMesh",49,,[30,8]],["FileMesh",49,{MeshId:2,TextureId:2}],["SpecialMesh",53,{MeshType:[2,7]},[30,8]],["Dialog",{BehaviorType:[2,8],ConversationDistance:2,GoodbyeChoiceActive:2,GoodbyeDialog:2,InUse:2,InitialPrompt:2,Purpose:[2,9],Tone:[2,10],TriggerDistance:2,TriggerOffset:2},[220,62]],["DialogChoice",{GoodbyeChoiceActive:2,GoodbyeDialog:2,ResponseDialog:2,UserDialog:2},[220,63]],["Explosion",{BlastPressure:2,BlastRadius:2,DestroyJointRadiusPercent:2,ExplosionType:[2,11],Position:2,Visible:2},[30,36]],["FaceInstance",{Face:[2,12]}],["Decal",58,{Color3:0,Shiny:0,Specular:0,Texture:0,Transparency:0},[40,7]],["Texture",59,{OffsetStudsU:0,OffsetStudsV:0,StudsPerTileU:0,StudsPerTileV:0},[40,10]],["Feature",{FaceId:[2,12],InOut:[2,13],LeftRight:[2,14],TopBottom:[2,15]},20],["Hole",61,,20],["MotorFeature",61],["Fire",{Color:2,Enabled:2,Heat:2,SecondaryColor:2,Size:2,size:2},[30,61]],["Folder",,[10,77]],["ForceField",{Visible:2},[30,37]],["GuiBase2d",{AbsolutePosition:2,AbsoluteRotation:2,AbsoluteSize:2,AutoLocalize:34,RootLocalizationTable:34}],["GuiObject",67,{Active:2,AnchorPoint:2,BackgroundColor3:2,BackgroundTransparency:2,BorderColor3:2,BorderSizePixel:2,ClipsDescendants:1,Draggable:1,LayoutOrder:2,NextSelectionDown:1,NextSelectionLeft:1,NextSelectionRight:1,NextSelectionUp:1,Position:2,Rotation:2,Selectable:2,SelectionImageObject:0,Size:2,SizeConstraint:[2,16],Visible:2,ZIndex:2}],["Frame",68,{Style:[2,17]},[150,48]],["GuiButton",68,{AutoButtonColor:2,Modal:2,Selected:2,Style:[2,18]},[160,52]],["ImageButton",70,{HoverImage:11,Image:11,ImageColor3:11,ImageRectOffset:11,ImageRectSize:11,ImageTransparency:11,IsLoaded:11,PressedImage:11,ScaleType:[11,19],SliceCenter:11,SliceScale:11,TileSize:11},[160,52]],["TextButton",70,{Font:[35,20],FontSize:[35,21],LineHeight:35,Text:35,TextBounds:35,TextColor3:35,TextFits:35,TextScaled:35,TextSize:35,TextStrokeColor3:35,TextStrokeTransparency:35,TextTransparency:35,TextTruncate:[35,22],TextWrap:35,TextWrapped:35,TextXAlignment:[35,23],TextYAlignment:[35,24]},[170,51]],["GuiLabel",68],["ImageLabel",68,{Image:11,ImageColor3:11,ImageRectOffset:11,ImageRectSize:11,ImageTransparency:11,IsLoaded:11,ScaleType:[11,19],SliceCenter:11,SliceScale:11,TileSize:11},[180,49]],["TextLabel",68,{Font:[35,20],FontSize:[35,21],LineHeight:35,Text:35,TextBounds:35,TextColor3:35,TextFits:35,TextScaled:35,TextSize:35,TextStrokeColor3:35,TextStrokeTransparency:35,TextTransparency:35,TextTruncate:[35,22],TextWrap:35,TextWrapped:35,TextXAlignment:[35,23],TextYAlignment:[35,24]},[190,50]],["ScrollingFrame",68,{AbsoluteWindowSize:36,BottomImage:36,CanvasPosition:36,CanvasSize:36,ElasticBehavior:[36,25],HorizontalScrollBarInset:[36,26],MidImage:36,ScrollBarImageColor3:36,ScrollBarImageTransparency:36,ScrollBarThickness:36,ScrollingDirection:[36,27],ScrollingEnabled:36,TopImage:36,VerticalScrollBarInset:[36,26],VerticalScrollBarPosition:[36,28]},[150,48]],["TextBox",68,{ClearTextOnFocus:2,CursorPosition:2,Font:[35,20],FontSize:[35,21],IsPassword:2,LineHeight:35,ManualFocusRelease:2,MultiLine:2,OverlayNativeInput:2,PlaceholderColor3:35,PlaceholderText:35,SelectionStart:2,ShowNativeInput:2,Text:35,TextBounds:35,TextColor3:35,TextEditable:2,TextFits:35,TextScaled:35,TextSize:35,TextStrokeColor3:35,TextStrokeTransparency:35,TextTransparency:35,TextTruncate:[35,22],TextWrap:35,TextWrapped:35,TextXAlignment:[35,23],TextYAlignment:[35,24]},[170,51]],["ViewportFrame",68,{Ambient:0,CurrentCamera:2,ImageColor3:11,ImageTransparency:11,LightColor:0,LightDirection:0},[30,52]],["LayerCollector",67,{Enabled:2,ResetOnSpawn:2,ZIndexBehavior:[2,29]}],["BillboardGui",79,{Active:2,Adornee:2,AlwaysOnTop:2,ClipsDescendants:1,CurrentDistance:2,DistanceLowerLimit:2,DistanceStep:2,DistanceUpperLimit:2,ExtentsOffset:2,ExtentsOffsetWorldSpace:2,LightInfluence:2,MaxDistance:2,PlayerToHideFrom:2,Size:2,SizeOffset:2,StudsOffset:2,StudsOffsetWorldSpace:2},[140,64]],["ScreenGui",79,{DisplayOrder:2,IgnoreGuiInset:2},[140,47]],["GuiMain",81,,[140,47]],["SurfaceGui",79,{Active:2,Adornee:2,AlwaysOnTop:2,CanvasSize:37,ClipsDescendants:1,Face:[2,12],LightInfluence:2,PixelsPerStud:37,SizingMode:[37,30],ToolPunchThroughDistance:2,ZOffset:0},[140,64]],["GuiBase3d",{Color3:0,Transparency:0,Visible:2}],["FloorWire",84,{CycleOffset:2,From:2,StudsBetweenTextures:2,Texture:0,TextureSize:0,To:2,Velocity:2,WireRadius:2},[30,4]],["PVAdornment",84,{Adornee:2}],["HandleAdornment",86,{AlwaysOnTop:2,CFrame:2,SizeRelativeOffset:2,ZIndex:2}],["BoxHandleAdornment",87,{Size:2}],["ConeHandleAdornment",87,{Height:2,Radius:2}],["CylinderHandleAdornment",87,{Height:2,Radius:2}],["ImageHandleAdornment",87,{Image:2,Size:2}],["LineHandleAdornment",87,{Length:2,Thickness:2}],["SphereHandleAdornment",87,{Radius:2}],["ParabolaAdornment",86,{A:2,B:2,C:2,Range:2,Thickness:2}],["SelectionBox",86,{LineThickness:0,SurfaceColor3:0,SurfaceTransparency:0},[210,54]],["SelectionSphere",86,{SurfaceColor3:0,SurfaceTransparency:0},[210,54]],["PartAdornment",84,{Adornee:2}],["HandlesBase",97],["ArcHandles",97,{Axes:2},[200,56]],["Handles",97,{Faces:2,Style:[,31]},[190,53]],["SurfaceSelection",97,{TargetSurface:[2,12]},[210,55]],["SelectionLasso",84,{Humanoid:2}],["SelectionPartLasso",102,{Part:2},[220,57]],["SelectionPointLasso",102,{Point:2},[220,57]],["Humanoid",{AutoJumpEnabled:38,AutoRotate:39,AutomaticScalingEnabled:40,BreakJointsOnDeath:1,CameraOffset:2,CollisionType:[1,32],DisplayDistanceType:[2,33],FloorMaterial:[39,34],Health:40,HealthDisplayDistance:2,HealthDisplayType:[2,35],HipHeight:40,Jump:39,JumpHeight:38,JumpPower:38,MaxHealth:40,MaxSlopeAngle:40,MoveDirection:39,NameDisplayDistance:2,NameOcclusion:[2,36],PlatformStand:39,RigType:[2,37],RootPart:2,SeatPart:39,Sit:39,TargetPoint:39,UseJumpPower:38,WalkSpeed:40,WalkToPart:39,WalkToPoint:39,maxHealth:40},[30,9]],["HumanoidDescription",{BackAccessory:41,BodyTypeScale:42,ClimbAnimation:43,DepthScale:42,Face:44,FaceAccessory:41,FallAnimation:43,FrontAccessory:41,GraphicTShirt:45,HairAccessory:41,HatAccessory:41,Head:44,HeadColor:46,HeadScale:42,HeightScale:42,IdleAnimation:43,JumpAnimation:43,LeftArm:44,LeftArmColor:46,LeftLeg:44,LeftLegColor:46,NeckAccessory:41,Pants:45,ProportionScale:42,RightArm:44,RightArmColor:46,RightLeg:44,RightLegColor:46,RunAnimation:43,Shirt:45,ShouldersAccessory:41,SwimAnimation:43,Torso:44,TorsoColor:46,WaistAccessory:41,WalkAnimation:43,WidthScale:42},[22,104]],["JointInstance",{Active:1,C0:2,C1:2,Part0:2,Part1:2},[200,34]],["DynamicRotate",107,{BaseAngle:2}],["RotateP",108],["RotateV",108],["Glue",107,{F0:2,F1:2,F2:2,F3:2}],["ManualSurfaceJointInstance",107],["ManualGlue",107],["ManualWeld",107],["Motor",107,{CurrentAngle:2,DesiredAngle:2,MaxVelocity:2},20],["Motor6D",115],["Rotate",107],["Snap",107,,[200,34]],["VelocityMotor",107,{CurrentAngle:2,DesiredAngle:2,Hole:2,MaxVelocity:2}],["Weld",107,,[200,34]],["Keyframe",{Time:2},[220,60]],["KeyframeMarker",{Value:2},[220,60]],["KeyframeSequence",{AuthoredHipHeight:2,Loop:2,Priority:[2,38]}],["Light",{Brightness:0,Color:0,Enabled:0,Shadows:0},[30,13]],["PointLight",124,{Range:0},[30,13]],["SpotLight",124,{Angle:0,Face:[,12],Range:0},[30,13]],["SurfaceLight",124,{Angle:0,Face:[,12],Range:0},[30,13]],["LocalizationTable",{SourceLocaleId:34},[30,97]],["LuaSourceContainer",{CurrentEditor:2}],["BaseScript",129,{Disabled:1,LinkedSource:2}],["CoreScript",130],["Script",130,{Source:2},[30,6]],["LocalScript",132,,[40,18]],["ModuleScript",129,{LinkedSource:2,Source:2},[50,76]],["Message",{Text:0},[110,33]],["Hint",135,,[110,33]],["NoCollisionConstraint",{Enabled:1,Part0:47,Part1:47},[30,105]],["BasePart",{Anchored:1,BackParamA:48,BackParamB:48,BackSurface:[49,39],BackSurfaceInput:[48,40],BottomParamA:48,BottomParamB:48,BottomSurface:[49,39],BottomSurfaceInput:[48,40],BrickColor:0,CFrame:2,CanCollide:1,CastShadow:0,CenterOfMass:2,CollisionGroupId:1,Color:0,CustomPhysicalProperties:50,FrontParamA:48,FrontParamB:48,FrontSurface:[49,39],FrontSurfaceInput:[48,40],LeftParamA:48,LeftParamB:48,LeftSurface:[49,39],LeftSurfaceInput:[48,40],Locked:1,Massless:1,Material:[,34],Orientation:2,Position:2,Reflectance:0,ResizeIncrement:1,ResizeableFaces:1,RightParamA:48,RightParamB:48,RightSurface:[49,39],RightSurfaceInput:[48,40],RootPriority:50,RotVelocity:2,Rotation:2,Size:50,SpecificGravity:2,TopParamA:48,TopParamB:48,TopSurface:[49,39],TopSurfaceInput:[48,40],Transparency:0,Velocity:2,brickColor:0},3],["CornerWedgePart",138,,[120,1]],["FormFactorPart",138,{FormFactor:[50,41]}],["Part",140,{Shape:[50,42]},[110,1]],["FlagStand",141,{TeamColor:2},[30,39]],["Platform",141,,[30,35]],["Seat",141,{Disabled:39,Occupant:39},[30,35]],["SkateboardPlatform",141,{Controller:39,ControllingHumanoid:39,Steer:39,StickyWheels:39,Throttle:39},[30,35]],["SpawnLocation",141,{AllowTeamChangeOnTouch:51,Duration:52,Enabled:1,Neutral:51,TeamColor:51},[30,25]],["WedgePart",140,,[120,1]],["Terrain",138,{IsSmooth:2,MaterialColors:0,MaxExtents:2,WaterColor:0,WaterReflectance:0,WaterTransparency:0,WaterWaveSize:0,WaterWaveSpeed:0},[5,65]],["TriangleMeshPart",138,{CollisionFidelity:[1,43]}],["MeshPart",149,{MeshID:0,MeshId:0,RenderFidelity:[,44],TextureID:0},[105,73]],["PartOperation",149,{RenderFidelity:[,44],TriangleCount:2,UsePartColor:2}],["NegateOperation",151,,[104,72]],["UnionOperation",151,,[105,73]],["TrussPart",138,{Style:[50,45]},[120,1]],["VehicleSeat",138,{AreHingesDetected:39,Disabled:39,HeadsUpDisplay:39,MaxSpeed:39,Occupant:39,Steer:39,SteerFloat:39,Throttle:39,ThrottleFloat:39,Torque:39,TurnSpeed:39},[30,35]],["Model",{PrimaryPart:2},[100,2]],["Status",156,,[100,2]],["PackageLink",{AutoUpdate:53,PackageId:53,Status:53,VersionNumber:53},[1,98]],["ParticleEmitter",{Acceleration:54,Color:0,Drag:55,EmissionDirection:[56,12],Enabled:56,Lifetime:56,LightEmission:0,LightInfluence:0,LockedToPart:55,Rate:56,RotSpeed:56,Rotation:56,Size:0,Speed:56,SpreadAngle:56,Texture:0,Transparency:0,VelocityInheritance:55,VelocitySpread:56,ZOffset:0},[30,80]],["PlayerScripts",,[130,78]],["PluginMenu",{Icon:0,Title:0}],["PluginToolbarButton",{ClickableWhenViewportHidden:0,Enabled:0,Icon:0}],["Pose",{CFrame:2,EasingDirection:[2,46],EasingStyle:[2,47],MaskWeight:2,Weight:2},[220,60]],["PostEffect",{Enabled:5}],["BloomEffect",164,{Intensity:5,Size:5,Threshold:5},[20,83]],["BlurEffect",164,{Size:5},[20,83]],["ColorCorrectionEffect",164,{Brightness:5,Contrast:5,Saturation:5,TintColor:5},[20,83]],["SunRaysEffect",164,{Intensity:5,Spread:5},[20,83]],["RemoteEvent",,[50,75]],["RemoteFunction",,[40,74]],["DataModel",{CreatorId:5,CreatorType:[5,48],GameId:5,GearGenreSetting:[5,49],Genre:[5,50],IsSFFlagsLoaded:2,JobId:57,PlaceId:5,PlaceVersion:5,PrivateServerId:2,PrivateServerOwnerId:2,Workspace:2,lighting:2,workspace:2}],["Sky",{CelestialBodiesShown:0,MoonAngularSize:0,MoonTextureId:0,SkyboxBk:0,SkyboxDn:0,SkyboxFt:0,SkyboxLf:0,SkyboxRt:0,SkyboxUp:0,StarCount:0,SunAngularSize:0,SunTextureId:0},[5,28]],["Smoke",{Color:2,Enabled:2,Opacity:2,RiseVelocity:2,Size:2},[30,59]],["Sound",{EmitterSize:2,IsLoaded:2,IsPaused:2,IsPlaying:2,Looped:2,MaxDistance:2,MinDistance:2,Pitch:2,PlayOnRemove:1,PlaybackLoudness:2,PlaybackSpeed:2,Playing:2,RollOffMode:[2,51],SoundGroup:2,SoundId:2,TimeLength:2,TimePosition:2,Volume:2,isPlaying:2},[10,11]],["SoundEffect",{Enabled:5,Priority:5}],["ChorusSoundEffect",175,{Depth:5,Mix:5,Rate:5},[20,84]],["CompressorSoundEffect",175,{Attack:5,GainMakeup:5,Ratio:5,Release:5,SideChain:5,Threshold:5},[20,84]],["DistortionSoundEffect",175,{Level:5},[20,84]],["EchoSoundEffect",175,{Delay:5,DryLevel:5,Feedback:5,WetLevel:5},[20,84]],["EqualizerSoundEffect",175,{HighGain:5,LowGain:5,MidGain:5},[20,84]],["FlangeSoundEffect",175,{Depth:5,Mix:5,Rate:5},[20,84]],["PitchShiftSoundEffect",175,{Octave:5},[20,84]],["ReverbSoundEffect",175,{DecayTime:5,Density:5,Diffusion:5,DryLevel:5,WetLevel:5},[20,84]],["TremoloSoundEffect",175,{Depth:5,Duty:5,Frequency:5},[20,84]],["SoundGroup",{Volume:5},[20,85]],["Sparkles",{Enabled:2,SparkleColor:2},[30,42]],["StarterGear",,[30,20]],["StarterPlayerScripts",,[130,78]],["StarterCharacterScripts",188,,[130,78]],["Team",{AutoAssignable:2,AutoColorCharacters:2,Score:2,TeamColor:2},[10,24]],["TerrainRegion",{IsSmooth:2,SizeInCells:2},[20,65]],["TouchTransmitter",,[30,37]],["Trail",{Attachment0:2,Attachment1:2,Color:0,Enabled:56,FaceCamera:0,Lifetime:56,LightEmission:0,LightInfluence:0,MaxLength:56,MinLength:56,Texture:0,TextureLength:0,TextureMode:[,1],Transparency:0,WidthScale:56},[30,93]],["UIAspectRatioConstraint",{AspectRatio:1,AspectType:[1,52],DominantAxis:[1,53]},[30,26]],["UISizeConstraint",{MaxSize:1,MinSize:1},[30,26]],["UITextSizeConstraint",{MaxTextSize:1,MinTextSize:1},[30,26]],["UIGridStyleLayout",{AbsoluteContentSize:2,FillDirection:[1,54],HorizontalAlignment:[1,55],SortOrder:[1,56],VerticalAlignment:[1,57]}],["UIGridLayout",197,{CellPadding:0,CellSize:0,FillDirectionMaxCells:1,StartCorner:[1,58]},[30,26]],["UIInlineLayout",197,{InlineAlignment:[1,59],InlinePadding:0},[30,26]],["UIListLayout",197,{Padding:0},[30,26]],["UIPageLayout",197,{Animated:0,Circular:0,CurrentPage:2,EasingDirection:[,60],EasingStyle:[,61],GamepadInputEnabled:58,Padding:0,ScrollWheelInputEnabled:58,TouchInputEnabled:58,TweenTime:0},[30,26]],["UITableLayout",197,{FillEmptySpaceColumns:0,FillEmptySpaceRows:0,MajorAxis:[1,62],Padding:0},[30,26]],["UIPadding",{PaddingBottom:1,PaddingLeft:1,PaddingRight:1,PaddingTop:1},[30,26]],["UIScale",{Scale:1},[30,26]],["ValueBase",,[30,4]],["BinaryStringValue",205],["BoolValue",205,{Value:2},[30,4]],["BrickColorValue",205,{Value:2},[30,4]],["CFrameValue",205,{Value:2},[30,4]],["Color3Value",205,{Value:2},[30,4]],["DoubleConstrainedValue",205,{MaxValue:2,MinValue:2,Value:2},[30,4]],["IntConstrainedValue",205,{MaxValue:2,MinValue:2,Value:2},[30,4]],["IntValue",205,{Value:2},[30,4]],["NumberValue",205,{Value:2},[30,4]],["ObjectValue",205,{Value:2},[30,4]],["RayValue",205,{Value:2},[30,4]],["StringValue",205,{Value:2},[30,4]],["Vector3Value",205,{Value:2},[30,4]],["WeldConstraint",{Active:1,Enabled:1,Part0:47,Part1:47},[30,94]]
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
						const [cat, enumType] = value
	
						members[prop] = {
							Group: cat === -1 ? "HIDDEN" : Data.Categories[cat || 0],
							Enum: enums[enumType || 0][1]
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
			return (propInfo && propInfo.Enum) ? propInfo.Enum[value] : null
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