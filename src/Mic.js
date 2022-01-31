import React, { useEffect, useState } from "react";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import "./Mic.css";
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
    <MicRoundedIcon
      className="mic "
      onClick={SpeechRecognition.startListening}
    />
  );
}
export default Mic;
