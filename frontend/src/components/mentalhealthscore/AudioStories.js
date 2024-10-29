import React, { useState, useRef } from 'react';
import stress from "../../assets/Images/stress.png";
import anxiety from "../../assets/Images/Anxiety.png";
import happiness from "../../assets/Images/Happiness.png";
import Loneliness from "../../assets/Images/Loneliness.png";
import Manage_urge from "../../assets/Images/Manage_urge.png";
import Relaxation from "../../assets/Images/Relaxation.png";
import Manage_anger from "../../assets/Images/Manage_anger.png";
import Sleep from "../../assets/Images/Sleep.png";
import manage_anger from "../../audio/Manage_anger.mp3";
import manage_urge from "../../audio/Manage_urge.mp3";
import Anxiety from "../../audio/anxiety.mp3";
import happiness1 from "../../audio/happiness.mp3";
import loneliness1 from "../../audio/loneliness.mp3";
import relaxation1 from "../../audio/relaxation.mp3";
import sleep1 from "../../audio/sleep.mp3";
import stress1 from "../../audio/stress.mp3";


// import audio from "../audio/audio1.mp3"

const AudioStories = () => {
  const [activeStory, setActiveStory] = useState(null);
  const audioRef = useRef(null);

  const stories = [
    {
      id: 1,
      imageUrl:  stress, 
      audioUrl: stress1,
      userName: 'Stress'
    },
    {
      id: 2,
      imageUrl:  anxiety,
      audioUrl: Anxiety,
      userName: 'Anxiety'
    },
    {
      id: 3,
      imageUrl: happiness,
      audioUrl: happiness1,
      userName: 'Happiness'
    },
    {
      id: 4,
      imageUrl: Loneliness,
      audioUrl: loneliness1,
      userName: 'Loneliness'
    },
    {
      id: 5,
      imageUrl: Manage_urge,
      audioUrl: manage_urge,
      userName: 'Manage Urge'
    },
    {
      id: 6,
      imageUrl: Relaxation,
      audioUrl: relaxation1,
      userName: 'Relaxation'
    },
    {
      id: 7,
      imageUrl: Manage_anger,
      audioUrl: manage_anger,
      userName: 'Manage Anger'
    },
    {
      id: 8,
      imageUrl: Sleep,
      audioUrl: sleep1,
      userName: 'Sleep'
    }
  ];

  const handleStoryClick = (story) => {
    if (activeStory === story.id) {
      // Pause the audio if the active story is clicked again
      audioRef.current.pause();
      setActiveStory(null);
    } else {
      // Pause any active audio before playing the new story
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      // Set and play the new story's audio
      setActiveStory(story.id);
      audioRef.current.src = story.audioUrl;
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      {/* Hidden audio element for playback */}
      <audio ref={audioRef} className="hidden" />

      {/* Stories container */}
      <div className="flex justify-evenly space-x-1 overflow-x-auto pb-4 pt-6 ">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center">
            {/* Story circle */}
            <button
              onClick={() => handleStoryClick(story)}
              className={`relative w-20 h-20 rounded-full p-1 transition-transform ${
                activeStory === story.id 
                  ? 'bg-gradient-to-tr from-purple-500 to-pink-500 scale-110' 
                  : 'bg-gray-200'
              }`}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={story.imageUrl}
                  alt={`${story.userName}'s story`}
                  className="w-full h-full object-cover text-white"
                />
                {/* Audio playing indicator */}
                {activeStory === story.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-50">
                    <div className="h-full w-full bg-white animate-pulse" />
                  </div>
                )}
              </div>
            </button>
            
            {/* Username */}
            <span className="text-sm mt-1 text-white">{story.userName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioStories;