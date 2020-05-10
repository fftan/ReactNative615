import React from 'react';
import { View, Text } from 'react-native';
import {
  RTCView,
  MediaStream,
  mediaDevices,
  registerGlobals,
  RTCIceCandidate,
  MediaStreamTrack,
  RTCPeerConnection,
  RTCSessionDescription,
} from 'react-native-webrtc';

// Components


// Stylesheets
import styles from './styles';

// Variables


export default class index extends React.Component {

  configRTC = () => {
    const configuration = { "iceServers": [{ "url": "stun:stun.l.google.com:19302" }] };
    const pc = new RTCPeerConnection(configuration);

    let isFront = true;
    mediaDevices.enumerateDevices().then(sourceInfos => {
      console.log(sourceInfos);
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (sourceInfo.kind == "videoinput" && sourceInfo.facing == (isFront ? "front" : "environment")) {
          videoSourceId = sourceInfo.deviceId;
        }
      }
      mediaDevices.getUserMedia({
        audio: true,
        video: {
          mandatory: {
            minWidth: 500, // Provide your own width, height and frame rate here
            minHeight: 300,
            minFrameRate: 30
          },
          facingMode: (isFront ? "user" : "environment"),
          optional: (videoSourceId ? [{ sourceId: videoSourceId }] : [])
        }
      })
        .then(stream => {
          // Got stream!
        })
        .catch(error => {
          // Log error
        });
    });

    pc.createOffer().then(desc => {
      pc.setLocalDescription(desc).then(() => {
        // Send pc.localDescription to peer
      });
    });

    pc.onicecandidate = function (event) {
      // send event.candidate to peer
    };
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Text>index</Text>
      </View>
    );
  }
}
