import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import v1 from '@/assets/incProgram1.mp4';

const VideoCards = () => {
  const videos = [
    {
      id: 1,
      title: "Morning Yoga Routine",
      description: "Start your day with this energizing 15-minute yoga sequence designed to awaken your body and mind. Perfect for beginners and intermediate practitioners alike, this routine focuses on gentle stretches and mindful movements.",
      videoUrl: v1
    },
    {
      id: 2,
      title: "Urban Dance Tutorial",
      description: "Learn the fundamentals of urban dance with this step-by-step tutorial. We break down popular moves and combinations, helping you build confidence and style in your dancing. Suitable for all skill levels.",
      videoUrl: "/api/placeholder/270/480"
    },
    {
      id: 3,
      title: "Cooking Masterclass",
      description: "Join Chef Maria as she demonstrates essential cooking techniques and shares her secret recipes. This episode focuses on creating delicious pasta dishes from scratch, with tips for perfect sauce consistency.",
      videoUrl: "/api/placeholder/270/480"
    }
  ];

  return (
    <div className="container mx-auto p-4 space-y-6">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden hover:shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Video Section */}
              <div className="w-full md:w-1/3 bg-gray-100">
                <video autoPlay loop muted 
                  src={video.videoUrl}
                  alt={video.title}
                  className="w-full h-[480px] object-cover"
                />
              </div>
              
              {/* Description Section */}
              <div className="w-full md:w-2/3 p-6">
                <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VideoCards;