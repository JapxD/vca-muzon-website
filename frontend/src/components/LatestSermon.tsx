import React, { useEffect, useState } from "react";
import axios from "axios";
import type { AxiosResponse } from "axios";

interface VideoSnippet {
  title: string;
  thumbnails: { high: { url: string } };
}
interface VideoItem {
  id: { videoId: string };
  snippet: VideoSnippet;
}
interface YouTubeResponse {
  items: VideoItem[];
}
const LatestSermon: React.FC = () => {
  const [video, setVideo] = useState<VideoItem | null>(null);
  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res: AxiosResponse<YouTubeResponse> = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              channelId: import.meta.env.VITE_YOUTUBE_CHANNEL_ID,
              maxResults: 1,
              order: "date", // newest first
              type: "video",
              key: import.meta.env.VITE_YOUTUBE_API_KEY,
            },
          },
        );
        if (res.data.items.length > 0) {
          setVideo(res.data.items[0]);
        }
      } catch (err) {
        console.error("Error fetching latest video:", err);
      }
    };
    fetchLatestVideo();
  }, []);
  if (!video) return null;
  return (
    <div className="aspect-video">
      <iframe
        className="rounded-xl border border-[var(--color-primary)]"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title={video.snippet.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
export default LatestSermon;
