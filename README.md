# Integrating Voice Recognition feature in WebEx Teams

## Problem Statement:	

Cisco’s WebEx Teams is one of the leading collaboration apps used across the globe. The multitude of features provided by WebEx Teams delivers a complete seamless collaboration experience for the enterprise. 

Even though anything can be achieved via a single touch (creating a space, scheduling a meeting, a casual call, etc), the trend and technologies have evolved so drastically over the decade making users to search for solutions wherein not even a touch is required. 

So we came up with one which lets users to just say what he/she wants – “Call Mr.X” and boom, you can get connected! Connect with anyone from your Teams client with simple voice commands irrespective of the platform.


More than just viewing it as a technical aspect, voice recognition actually makes the lives of lots of people easier. It could become a boon for aged people and differently abled (visually impaired) people. 

Current generation finds it cool if the product is hands free. Thus, we provide a cross-platformed voice recognition feature which can be easily integrated with WebEx Teams.


!(https://github.com/Devang-25/CollabHacks-Project/tree/main/img/1.png)



## Solution:

## 1.Voice recognition: 

The provided solution is cross-platformed (Mac, Windows & Ubuntu). 

The initial step is to enable voice recognition (eg., you can find an AppleScript to use the Dictation app on Mac OS to catch phrases). 

AppleScripts and Python scripts are developed for this purpose. Once the voice command is detected, a shell script is run to process it and provide the necessary information to integrate with WebEx Teams.


## 2.WebEx integration: 


After the voice command is processed, it’s time to ask WebEx Teams to accomplish that task. WebEx APIs, Protocol handlers and SDKs are readily available for easier integrations! We make use of supported APIs to initiate the tasks.


Since the WebEx API and SDKs do not tie into one particular GUI, we also used the WebEx browser SDK to initiate a call using the browser. 
Protocol handlers of WebEx app made it possible to use the Desktop application by using the handler and passing the username as an argument.

# DEMO LINK
https://youtu.be/retZDawHbSA



## Advantages:

1.Simple Adaption – With the help of only a few scripts, the feature can be easily integrated.

2.Cross-Platformed.

3.Greater Ease of use – No need of navigation through a series of GUIs and multiple clicks making it hands free and on the go.

Next Steps:

1.Currently English is the only language supported. Multi-language support can be extended.

2.Multiple time-zone support can be extended.

## About the team:

(1) Devang Sharma

(2) Sarthak Jain

(3) Lakshmanan G


## References:  
https://developer.webex.com/docs/sdks/browser  
https://help.webex.com/en-us/n5yzg8y/Add-Links-for-Cisco-Webex-Teams-Meetings-or-Spaces-with-webexteams-Protocol  
