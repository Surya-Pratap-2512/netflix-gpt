import React, { useState, useRef } from "react";
import { ReactComponent as MuteIcon } from "../../assets/icons/mute.svg";
import { ReactComponent as UnmuteIcon } from "../../assets/icons/unmute.svg";

const withMuteUnmuteBtn = (WrappedComponent) => (props) => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);

  const handleMuteUnMute = () => {
    if (iframeRef.current) {
      if (isMuted) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "unmute", args: "" }),
          "*"
        );
      } else {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "mute", args: "" }),
          "*"
        );
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      <button
        className="absolute bottom-0 right-0 p-4"
        onClick={handleMuteUnMute}
      >
        {isMuted ? <MuteIcon /> : <UnmuteIcon />}
      </button>
      <WrappedComponent iframeRef={iframeRef} {...props} />
    </div>
  );
};

export default withMuteUnmuteBtn;
