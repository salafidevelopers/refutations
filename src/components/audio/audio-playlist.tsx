import React from "react";

const AudioPlaylist: React.FC = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Audio Playlist</h2>
      <ul className="space-y-2">
        {/* Example playlist items */}
        <li className="p-3 border rounded">Audio Item 1</li>
        <li className="p-3 border rounded">Audio Item 2</li>
        <li className="p-3 border rounded">Audio Item 3</li>
      </ul>
    </div>
  );
};

export default AudioPlaylist;
