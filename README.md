# CollabHacks
Integrating WebEx Teams with voice recognition on Mac

Two subparts - voice recognition with Siri and using WebEx to start a call

Voice recognition:  
Using Siri (SiriKit) would require rewriting code at the application level so chose to use dictation instead for proof of concept  
Wrote an AppleScript (voice_recognition.scpt) to use the Dictation app on Mac OS to catch phrases and run a shell script when those phrases are caught  

WebEx integration:  
Since the WebEx API and SDKs do not tie in to one particular GUI, we used the WebEx browser SDK to initiate a call using the browser as a backup in case working with the Desktop application was not possible. Harcoded the values for testing (JS, Python and HTML files)  
Found protocol handlers for WebEx app on Mac OS which made it possible to use the Desktop application by using the handler and passing the username as an argument (app_script.sh)  

References:  
https://developer.webex.com/docs/sdks/browser  
https://help.webex.com/en-us/n5yzg8y/Add-Links-for-Cisco-Webex-Teams-Meetings-or-Spaces-with-webexteams-Protocol  
