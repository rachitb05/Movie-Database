import React, { useEffect, useState } from "react";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import "./Mic.css"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Mic({ setSearchQuery }) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    handleListen();
  }, [listening]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleListen = () => {
    // console.log(transcript);
    setSearchQuery(transcript);
    // console.log(voice);
  };

  return (
    <div>
      {/* <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}
      {/* <p>{transcript}</p> */}
       <MicRoundedIcon className="mic" onClick={SpeechRecognition.startListening}/>
    </div>
  );
}
export default Mic;
