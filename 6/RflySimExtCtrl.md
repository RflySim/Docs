# 6.1、本章使用方法

无人机作为一种具有自主飞行能力的飞行器，其外部控制能力对于实现精确的飞行任务和安全的飞行操作至关重要。通常常见的控制方式有：遥控器控制、地面站控制、半自主控制、和通过计算机相应接口控制。其中外部控制理论主要涉及飞行器在空中的稳定性，一般为理解为对无人机的位置和姿态控制，对此我们将深入探讨无人机的飞行控制刚体模型，也就是制导模型。

轨迹规划问题是多旋翼决策层面的一个重要问题，是指在特定约束条件下，寻找满足多旋翼机动性能及飞行环境信息限制的，从起始点到目标点的最优飞行轨迹。它是多旋翼任务规划系统的关键技术，也是多旋翼实现自主飞行的技术保障。其主要功能包括：在飞行前，帮助任务规划人员为即将执行任务的多旋翼选择一条最优的路径；在飞行过程中，能够在一定程度上根据现场情况进行在线路径重规划。规划出来的路径作为多旋翼飞行的参考路径，引导多旋翼在控制律的作用下完成飞行任务。。

## 本讲API文件
本讲开发相关API接口平台地址为：<a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/API.pdf">🔗API🔗</a>
## 本讲PPT文件 
本讲内容的PPT文档的平台地址为：<a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/PPT.pdf">🔗PPT🔗</a>
## 本讲所有例程文件
本讲所有例程请见Readme文档，该文件的平台地址为：<a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/Readme.pdf">🔗Readme🔗</a>

| 序号 | 实验名称 | Readme | 最低版本 |
| ---- | ---- | ---- | ---- |
| 1 | 无人机通过UDP_Full通信实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e10_UDPMode0Test/Readme.pdf">Readme</a> | 免费版 |
| 2 | 无人机通过UDP_Simple通信实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e11_UDPMode1Test/Readme.pdf">Readme</a> | 免费版 |
| 3 | 无人机通过MAVLink_Full通信实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e12_UDPMode2DefaultTest/Readme.pdf">Readme</a> | 免费版 |
| 4 | 无人机通过MAVLink_Simple通信实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e13_UDPMode3Test/Readme.pdf">Readme</a> | 免费版 |
| 5 | CopterSim-UDP通信模式 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e14_UDPMode4Test/Readme.pdf">Readme</a> | 免费版 |
| 6 | 飞机、物体、相机信息获取实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e15_CamObjGet/Readme.pdf">Readme</a> | 免费版 |
| 7 | 时间戳获取实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e16_ReadTimeStmpGet/Readme.pdf">Readme</a> | 免费版 |
| 8 | 无人机控制接口调试实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e1_PX4MavCtrlAPITest/Readme.pdf">Readme</a> | 免费版 |
| 9 | 数传连接Pixhawk 6C飞控硬件在环仿真实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e2_PX4ComAPITest/Readme.pdf">Readme</a> | 免费版 |
| 10 | 无人机飞行控制实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e3_PX4MavGPSCtrlTest/Readme.pdf">Readme</a> | 免费版 |
| 11 | 无人机电机转速PWM控制实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e4_PX4RcCtrlAPITest/Readme.pdf">Readme</a> | 免费版 |
| 12 | 多机SITL软件在环控制实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e5_PX4MultiUavTest/Readme.pdf">Readme</a> | 免费版 |
| 13 | 无人机飞行加速度控制实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e6_PX4MavAccCtrlTest/Readme.pdf">Readme</a> | 免费版 |
| 14 | 无人机飞行控制实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e7_PX4MavAttCtrlTest/Readme.pdf">Readme</a> | 免费版 |
| 15 | UE地图坐标系与无人机坐标系转换实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e8_GeoAPITest/Readme.pdf">Readme</a> | 免费版 |
| 16 | 视觉控制撞击小球实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/0.ApiExps\e9_UDPMode1TestShootBall/Readme.pdf">Readme</a> | 免费版 |
| 17 | 基础功能性实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e0_ExtAPIUsage/Readme.pdf">Readme</a> | 免费版 |
| 18 | Offboard模式控制无人机位置控制实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e1_PosCtrl/Readme.pdf">Readme</a> | 免费版 |
| 19 | Offboard模式控制无人机速度控制实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e2_VelCtrl/Readme.pdf">Readme</a> | 免费版 |
| 20 | 遥控器模式单机控制 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e3_RCCtrl/Readme.pdf">Readme</a> | 免费版 |
| 21 | Python-Offboard单机控制实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e4_PyOffboardCtrl/Readme.pdf">Readme</a> | 免费版 |
| 22 | 多旋翼路径跟踪控制器仿真实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e6_PathTrackingCtrl/Readme.pdf">Readme</a> | 免费版 |
| 23 | 滤波器设计实验 (基础实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\2.KalmanFiltre\e2.1/Readme.pdf">Readme</a> | 免费版 |
| 24 | 滤波器设计实验 (分析实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\2.KalmanFiltre\e2.2/Readme.pdf">Readme</a> | 免费版 |
| 25 | 滤波器设计实验(定点控制实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\2.KalmanFiltre\e2.3/Readme.pdf">Readme</a> | 免费版 |
| 26 | 滤波器设计实验(实飞实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\2.KalmanFiltre\e2.4/Readme.pdf">Readme</a> | 免费版 |
| 27 | 跟踪控制器设计实验 (基础实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\3.TrajectoireFollowing_Segment\e3.1/Readme.pdf">Readme</a> | 免费版 |
| 28 | 跟踪控制器设计实验 (分析实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\3.TrajectoireFollowing_Segment\e3.2/Readme.pdf">Readme</a> | 免费版 |
| 29 | 跟踪控制器设计实验 (设计实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\3.TrajectoireFollowing_Segment\e3.3/Readme.pdf">Readme</a> | 免费版 |
| 30 | 路径跟踪控制器设计实验 (基础实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\4.TrajectoirePlanning\e4.1/Readme.pdf">Readme</a> | 免费版 |
| 31 | 路径跟踪控制器设计实验 (分析实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\4.TrajectoirePlanning\e4.2/Readme.pdf">Readme</a> | 免费版 |
| 32 | 路径跟随控制器设计实验 (设计实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\4.TrajectoirePlanning\e4.3/Readme.pdf">Readme</a> | 免费版 |
| 33 | 路径跟随控制器设计实验(实飞实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\4.TrajectoirePlanning\e4.4/Readme.pdf">Readme</a> | 免费版 |
| 34 | 避障控制器设计实验 (基础实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\5.Avoidance_Segment\e5.1/Readme.pdf">Readme</a> | 免费版 |
| 35 | 避障控制器设计实验 (分析实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\5.Avoidance_Segment\e5.2/Readme.pdf">Readme</a> | 免费版 |
| 36 | 避障控制器设计实验 (设计实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\5.Avoidance_Segment\e5.3/Readme.pdf">Readme</a> | 免费版 |
| 37 | 避障控制器设计实验(实飞实验) | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl\5.Avoidance_Segment\e5.4/Readme.pdf">Readme</a> | 免费版 |
| 38 | 基础功能性实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/1.BasicExps\e7_MutUAVRemoteCtrl/Readme.pdf">Readme</a> | 免费版 |
| 39 | MAVSfun解锁HIL实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/2.AdvExps\e1_MavlinkCtrl\1.MavSfunTest_Arm/Readme.pdf">Readme</a> | 集合版 |
| 40 | MAVLink控制HIL实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/2.AdvExps\e1_MavlinkCtrl\2.MavSfunTest_Con/Readme.pdf">Readme</a> | 集合版 |
| 41 | 进阶接口类实验 | <a target="_blank" href="../RflySimAPIs/6.RflySimExtCtrl/2.AdvExps\e1_MavlinkCtrl/Readme.pdf">Readme</a> | 集合版 |
