# 3.1、本章使用方法

RflySim3D在RflySim仿真平台中所处的位置如下图所示：

![image-20231023084821098](Image\image-20231023084821098.png)

CopterSim会根据从Pixhawk（或者PX4 SITL）传入的电机控制数据解算出无人机当前的状态（主要是位置、姿态数据），随后会将这些数据发送给RflySim3D，而RflySim3D会将这些数据应用至场景里相应的无人机上，从而使我们能更直观的看到无人机的状态。
	RflySim3D使用UDP通信，能够接受一些来自外部的命令，例如切换场景、创建无人机、开启UE内置的物理碰撞等，命令的细节将在RflySim3D接口与使用方法介绍中介绍，总之RflySim3D可以接受来自CopterSim、Python、Simulink的UDP命令。
	RflySim3D还支持通过XML文件进行一些配置，主要是用XML配置无人机的构型（四旋翼、六旋翼、固定翼等）、模型在列表中的优先级、飞机的名字、飞机的初始位置与姿态、各致动器（一般是旋翼）的初始位置、姿态、材质、旋转轴、运动模式，还可以定义摄像机的位置，还可以定义一些障碍组件（例如柱子、圆环）等等。

## 本讲API文件
本讲开发相关API接口平台地址为：<a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/API.pdf">🔗API🔗</a>
## 本讲PPT文件 
本讲内容的PPT文档的平台地址为：<a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/PPT.pdf">🔗PPT🔗</a>
## 本讲所有例程文件
本讲所有例程请见Readme文档，该文件的平台地址为：<a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/Readme.pdf">🔗Readme🔗</a>

| 序号 | 实验名称 | Readme | 最低版本 |
| ---- | ---- | ---- | ---- |
| 1 | 基本场景开发工具入门 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/0.ApiExps\e0_DevToolsUsage/Readme.pdf">Readme</a> | 免费版 |
| 2 | RflySim3D快捷键接口实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/0.ApiExps\e1_KeyboardAPI/Readme.pdf">Readme</a> | 免费版 |
| 3 | RflySim3D控制台命令接口实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/0.ApiExps\e2_CommandAPI/Readme.pdf">Readme</a> | 免费版 |
| 4 | RflySim3D启动txt控制脚本实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/0.ApiExps\e3_TXTAllCrtlScript/Readme.pdf">Readme</a> | 免费版 |
| 5 | Python场景控制接口验证实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/0.ApiExps\e4_UAVCrtlPy/Readme.pdf">Readme</a> | 免费版 |
| 6 | MATLAB获取高度矩阵接口实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/0.ApiExps\e5_GetTerrainMAT/Readme.pdf">Readme</a> | 免费版 |
| 7 | 基本场景控制接口实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/0.ApiExps\e6_RflySim3DCtrlAPI/Readme.pdf">Readme</a> | 免费版 |
| 8 | UE4默认场景导入实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/1.BasicExps\e0_StarterContent/Readme.pdf">Readme</a> | 免费版 |
| 9 | RflySim3D自定义多旋翼模型加载实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/1.BasicExps\e1_CusLoadDroneyeeX680/Readme.pdf">Readme</a> | 免费版 |
| 10 | SketchUp安装与简单使用实验  | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e0_DevToolsUsage\1.SketchUpUsage/Readme.pdf">Readme</a> | 个人版 |
| 11 | Twinmotion安装与使用实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e0_DevToolsUsage\2.TwinmotionUsage/Readme.pdf">Readme</a> | 个人版 |
| 12 | Cesium for Unreal安装与使用实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e0_DevToolsUsage\3.CesiumForUnrealUsage/Readme.pdf">Readme</a> | 个人版 |
| 13 | UE5默认场景导入实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e0_DevToolsUsage\4.UE5StarterContent/Readme.pdf">Readme</a> | 个人版 |
| 14 | 进阶场景开发工具入门实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e0_DevToolsUsage/Readme.pdf">Readme</a> | 个人版 |
| 15 | 通过快捷键与xml文件快速布置标靶场景实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\1.TargetCreateKey/Readme.pdf">Readme</a> | 个人版 |
| 16 | 基于Cesium的全球大场景使用 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\10.CesiumPlugin/Readme.pdf">Readme</a> | 个人版 |
| 17 | RflySim3D自带特效使用方法 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\11.EffectPlugins/Readme.pdf">Readme</a> | 个人版 |
| 18 | 爆炸特效触发实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\12.DamageModel/Readme.pdf">Readme</a> | 个人版 |
| 19 | 可视化UE显示接口调用 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\13.RflySim3DMsgDispDemo/Readme.pdf">Readme</a> | 个人版 |
| 20 | 通过python脚本布置标靶场景实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\2.TargetCreatePy/Readme.pdf">Readme</a> | 个人版 |
| 21 | 场景布置与快速地形匹配实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\3.TargetPlace/Readme.pdf">Readme</a> | 个人版 |
| 22 | Simulink获取地形并模拟物体运动轨迹实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\4.TrajGen/Readme.pdf">Readme</a> | 个人版 |
| 23 | Simulink同构模型运动轨迹实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\5.TrajGenMulti/Readme.pdf">Readme</a> | 个人版 |
| 24 | Simulink异构多物体运动轨迹实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\6.HeterTrajGenMulti/Readme.pdf">Readme</a> | 个人版 |
| 25 | 车队圆环轨迹实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\7.TenCarCircleCtrl/Readme.pdf">Readme</a> | 个人版 |
| 26 | RflySim3D切换地图控制脚本实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\8.TXTMapCrtlScript/Readme.pdf">Readme</a> | 个人版 |
| 27 | 获取RflySim3D内所有动态创建物体位置、碰撞数据实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl\9.RflySim3DPosGet/Readme.pdf">Readme</a> | 个人版 |
| 28 | 完整场景控制接口实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e1_UEMapCtrl/Readme.pdf">Readme</a> | 个人版 |
| 29 | 执行器绑定实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e2_UAVCtrl\1.ActuatorBinding/Readme.pdf">Readme</a> | 个人版 |
| 30 | 执行器控制实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e2_UAVCtrl\2.ActuatorCtrl/Readme.pdf">Readme</a> | 个人版 |
| 31 | Simulink载具模型绑定实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e2_UAVCtrl\3.ModelBindSim/Readme.pdf">Readme</a> | 个人版 |
| 32 | Python载具模型绑定实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e2_UAVCtrl\4.VehicleAttachPy/Readme.pdf">Readme</a> | 个人版 |
| 33 | 三维模型调整接口实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e0_AdvApiExps\e2_UAVCtrl/Readme.pdf">Readme</a> | 个人版 |
| 34 | RflySim3D蓝图接口实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e1_BlueprintModel\1.BlueprintBuild/Readme.pdf">Readme</a> | 集合版 |
| 35 | 虚幻商城固定翼蓝图模型导入 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e1_BlueprintModel\2.BPModelLoad/Readme.pdf">Readme</a> | 集合版 |
| 36 | Python场景控制高级接口验证实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e1_BlueprintModel\3.BPModelCrtlPy/Readme.pdf">Readme</a> | 集合版 |
| 37 | 蓝图模型导入 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e1_BlueprintModel/Readme.pdf">Readme</a> | 集合版 |
| 38 | 基于Cesium的全球大场景构建 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e2_CesiumScene\1.ObliModelMap/Readme.pdf">Readme</a> | 集合版 |
| 39 | 基于Cesium全球大场景的构建 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e2_CesiumScene/Readme.pdf">Readme</a> | 集合版 |
| 40 | Twinmotion演示场景导入实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/2.AdvExps\e3_TwinmotionContent/Readme.pdf">Readme</a> | 集合版 |
| 41 | 定制性接口实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/3.CustExps\e0_AdvApiExps/Readme.pdf">Readme</a> | 完整版 |
| 42 | 自定义场景创建实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/3.CustExps\e1_CusContentSU/Readme.pdf">Readme</a> | 完整版 |
| 43 | RflySim3D自定义固定翼模型加载实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/3.CustExps\e2_CusLoadFixWing/Readme.pdf">Readme</a> | 完整版 |
| 44 | CityEngine操作入门实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/3.CustExps\e3_CityEngineExp\1.CityEngineUsage/Readme.pdf">Readme</a> | 完整版 |
| 45 | 基于CityEngine城市场景创建实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/3.CustExps\e3_CityEngineExp\2.CitySceneBuild/Readme.pdf">Readme</a> | 完整版 |
| 46 | CityEngine大规模建筑场景实验 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/3.CustExps\e3_CityEngineExp/Readme.pdf">Readme</a> | 完整版 |
| 47 | 多级影像重叠白边处理流程 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/3.CustExps\e4_MultOverlapareasProcess/Readme.pdf">Readme</a> | 完整版 |
| 48 | Cesium离线大场景部署 | <a target="_blank" href="../RflySimAPIs/3.RflySim3DUE/3.CustExps\e5_CesiumOffline/Readme.pdf">Readme</a> | 完整版 |
