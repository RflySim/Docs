# 7.1、本章使用方法

RflySim采用基于模型设计（Model-Based Design，MBD）的思想，可用于无人系统的控制和安全测试。通过以下五个阶段：建模阶段、控制器设计阶段、软件在环仿真阶段（Software-In-the-Loop，SIL）、硬件在环仿真阶段（Hardware-In-the-Loop，HIL）和实飞测试阶段。通过MATLAB/Simulink的自动代码生成技术，控制器能够被方便地自动下载到硬件中，用于HIL仿真和实际飞行测试。

![Alt text](Image/%E5%9B%BE%E7%89%871.png)

RflySim故障注入架构由实物模块、仿真模块与评估模块组成。实物模块由飞控硬件组成，负责与仿真计算机连接，接收来自外部的控制指令并作出姿态响应，组成半物理仿真闭环，可通过飞控进行硬件在环的实时故障注入。仿真模块由CopterSim、RFlySim3D、QGC组成，负责整机的故障消息发送和三维故障注入，进行实时的故障模拟。评估模块负责输出故障注入之后的安全状况。

## 本讲API文件
本讲开发相关API接口平台地址为：<a target="_blank" href="../RflySimAPIs/7.RflySimPHM/API.pdf">🔗API🔗</a>
## 本讲PPT文件 
本讲内容的PPT文档的平台地址为：<a target="_blank" href="../RflySimAPIs/7.RflySimPHM/PPT.pdf">🔗PPT🔗</a>
## 本讲所有例程文件
本讲所有例程请见Readme文档，该文件的平台地址为：<a target="_blank" href="../RflySimAPIs/7.RflySimPHM/Readme.pdf">🔗Readme🔗</a>

| 序号 | 实验名称 | Readme | 最低版本 |
| ---- | ---- | ---- | ---- |
| 1 | 信号标签模块的学习与使用 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/0.ApiExps\e1_SignTAG/Readme.pdf">Readme</a> | 免费版 |
| 2 | 故障参数与模块封装参数引用的学习与使用 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/0.ApiExps\e2_FaultParamStruct/Readme.pdf">Readme</a> | 免费版 |
| 3 | UDP模式发送故障注入参数模块的学习与使用 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/0.ApiExps\e3_FaultInjectAPITest_mat/Readme.pdf">Readme</a> | 免费版 |
| 4 | UDP模式发送故障注入参数模块的学习与使用 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/0.ApiExps\e4_FaultInjectAPITest_py/Readme.pdf">Readme</a> | 免费版 |
| 5 | PX4外部消息发送与接收模块的学习与使用 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/0.ApiExps\e5_ExtMsgSender/Readme.pdf">Readme</a> | 免费版 |
| 6 | 电机故障建模原理的学习与使用 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/0.ApiExps\e6_UseFaultLib/Readme.pdf">Readme</a> | 免费版 |
| 7 | 故障注入模块的最小模板 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/0.ApiExps\e7_NoFaultModelMinTemplate/Readme.pdf">Readme</a> | 免费版 |
| 8 | 基于最小模板的电机故障注入的学习与使用 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/0.ApiExps\e8_BaseMotorFault/Readme.pdf">Readme</a> | 免费版 |
| 9 | 故障注入模块的最大模板 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/1.BasicExps\e1_NoFaultModelMaxTemplate/Readme.pdf">Readme</a> | 免费版 |
| 10 | 基于最大模板的GPS模块故障注入的原理 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/1.BasicExps\e2_GPSFault/Readme.pdf">Readme</a> | 免费版 |
| 11 | 基于最大模板的电机模块故障注入的原理 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/1.BasicExps\e3_MotorFault/Readme.pdf">Readme</a> | 免费版 |
| 12 | 基于最大模板的传感器模块故障注入的原理 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/1.BasicExps\e4_SensorFault/Readme.pdf">Readme</a> | 免费版 |
| 13 | 基于最大模板的环境风模块故障注入的原理 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/1.BasicExps\e5_WindFault/Readme.pdf">Readme</a> | 免费版 |
| 14 | 基于最大模板的负载模块故障注入的原理 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/1.BasicExps\e6_LoadFault/Readme.pdf">Readme</a> | 免费版 |
| 15 | 基于最大模板的螺旋桨模块故障注入的原理 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/1.BasicExps\e7_PropFault/Readme.pdf">Readme</a> | 免费版 |
| 16 | 基于最大模板的电池模块故障注入的原理 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/1.BasicExps\e8_BatteryFault/Readme.pdf">Readme</a> | 免费版 |
| 17 | 基于最大模板的全故障模块注入的原理 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/2.AdvExps\e1_FullFaultModelTemplate/Readme.pdf">Readme</a> | 集合版 |
| 18 | 故障生成注入界面应用程序 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/2.AdvExps\e2_FailureGenerator GUI APP/Readme.pdf">Readme</a> | 集合版 |
| 19 | 飞控源码故障注入实验 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/2.AdvExps\e3_PX4 FailureGenerator/Readme.pdf">Readme</a> | 集合版 |
| 20 | 电机故障安全评估实验 | <a target="_blank" href="../RflySimAPIs/7.RflySimPHM/3.CustExps\e1_HealthProjPlatform/Readme.pdf">Readme</a> | 完整版 |
