---
title: Home Automation Setup
category: iot
excerpt: Home automation using open source @home_assistant
feature_text: <h2 class="whitetext highlighted">Home Automation with @home_assistant</h2>
image: https://pbs.twimg.com/media/EWF_1P3U0AE6F_X?format=jpg&name=large
tags: iot opensource
comments: true
---

As the digital network infrastructure has grown beyond computers and smartphones into more common household devices getting connected to the network, it has greatly enhanced the ability of our devices, turning homes into "Smart Homes" by enabling a myriad of complex functionalities with minimal or no manual intervention. For example: A normal light bulb gives you the ability to light up your living room whereas a "smart bulb" gives you the ability to light up your living room exactly when you enter the house (network) after work OR just when the sun is exactly 1° above the horizon !


But, with great abilities come greater headaches, like securely integrating devices to home automation network with a high privacy level because most of the devices don't play along well with components from data hungry competing vendors. To tackle this and explore the space of Internet of Things, edge network and home automation at a low cost I am playing around with @home_assistant which is supported by a strong community of developers and users who are enthusiastic automation. In this first post on home automation I will discuss my setup for @home_assistant and some of the components that I have used for it.

**Home Automation Setup**

My current home automation setup includes a few different components:
1. Z-wave sensor for collecting temperature, motion, humidity and luminance readings for the room
2. Z-wave/Zigbee USB hub for communicating between @home_assistant instance and "smart devices" 
3. A network connected power strip to remotely toggle electrical devices through network commands issued by @home_assistant instance.
4. Raspberry Pi Model-4 running a docker instance of @home_assistant on home wifi network

The @home_assistant docker instance running on raspberry pi acts as the brain of the network which tracks state of various sensors and devices connected to the network and uses this state information to trigger automations based on a set of specific rules and actions.

{% include figure.html image="/assets/img/home-assistant/ha-setup.png" position="center" %}

Running this setup has two main advantages: low power consumption for Raspberry Pi instance that needs to be kept on at all hours and ensuring that minimal sensitive data from network connected devices needs to be sent over public networks outside the home network (currently none).

A simple automation I have setup is to turn on/off the heater based on temperature changes recorded from the sensor. If the temperature is above or below pre-specified thresholds @home_assistant triggers the automation and upon satisfaction of all conditions takes the appropriate action as specified in the actions section for this automation shown in template code below:
<script src="https://gist.github.com/bawejakunal/b170e088720068b39d465dded2512c08.js"></script>

So far, the biggest advantage of using @home_assistant has been its ability to integrate with IoT enabled devices from different brands over basic networking protocols like Zigbee/Z-wave/Wifi supported by the open source integrations built by commmunity which has been helpful in overcoming the vendor lock-in challenges for using smart devices.