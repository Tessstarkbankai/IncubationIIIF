import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import v1 from '@/assets/incProgram1.mp4';

const VideoCards = () => {
  const videos = [
    {
      id: 1,
      title: "Empowering Student Startups: A Vision by Our Hon’ble Chancellor, Dr. Umesh Gautam",
      description: "At Invertis University, innovation and entrepreneurship are not just encouraged—they are nurtured. Our Hon’ble Chancellor, Dr. Umesh Gautam Sir, has been a beacon of inspiration for young minds, consistently motivating students to embark on their entrepreneurial journeys.With his vast experience and visionary leadership, he shares invaluable insights and real-life success stories that instill confidence and determination in aspiring entrepreneurs. His motivational words not only guide students through the challenges of starting a business but also inspire them to dream big and work hard to turn their ideas into reality. Through initiatives, mentorship, and unwavering support, Dr. Umesh Gautam Sir ensures that every student at Invertis has the opportunity to innovate, create, and contribute to the world of startups." ,
      videoUrl: v1
    },
    {
      id: 2,
      title: "Navigating Real-World Industry Challenges with Mr. Mayur Dhirwani",
      description: "At Invertis University, we believe in bridging the gap between academics and industry, preparing students for the challenges of the real world. Mr. Mayur Dhirwani, with his deep industry expertise, has been instrumental in guiding students through the complexities of modern business and technology landscapes. Through his insightful sessions and real-world case studies, he helps students understand the dynamics of the corporate world, the challenges of emerging industries, and the skills required to thrive in competitive environments. His experiences serve as a roadmap, equipping students with practical knowledge, strategic thinking, and a problem-solving mindset essential for success. By sharing valuable industry insights and real-life challenges, Mr. Mayur Dhirwani empowers students to adapt, innovate, and excel in their careers.",
      videoUrl: "https://cdn-cf-east.streamable.com/video/mp4/bvt8rl.mp4?Expires=1741631271747&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=dE1nyzJcd~nlEmXlchAgdHz-ju9sf1RkmSO7cDM8GMOEFL1dvvfFF8oL~IaULntD1iu0ggw8XBX87KBFWkBDNqdGS5NvMjkIovBBvRoEGpAAWYQPTdhMCQ2a-K5hKJBUelhAfw8gDxU-Y~nuPp29IarzdCaw3hxzfXwppLwyz9kxavxHtGutqzsWMkpbIVI7mRpRG3cKkYIEALQWUHUdqrIHYqdBtEW96UllKB3wTeF13raaZPQxJtFNFsIlw8OWq7paL493KxYSiky2d-ILiRlXsxY~U2s~2RXSMbhW5lV59bz-fEkvqgM4U5cj-umR8RLJ4ewP8NJnksv-u2d5QA__"
    },
    {
      id: 3,
      title: "From Concept to Creation with Mr. Alok Pandey (CEO, AIC IIT Delhi)",
      description: "At Invertis University, we believe that every great idea has the potential to become a groundbreaking innovation. Mr. Alok Pandey, CEO of AIC IIT Delhi, has been a guiding force in helping students transform their visionary concepts into real-world solutions. With his vast experience in startup incubation, innovation, and entrepreneurship, he provides students with the knowledge and tools needed to bring their ideas to life. Through his mentorship, students learn how to validate their ideas, develop viable business models, secure funding, and navigate the startup ecosystem. His inspiring journey and practical insights help bridge the gap between imagination and execution, empowering young entrepreneurs to take bold steps toward creating impactful ventures. At Invertis, we take pride in fostering an entrepreneurial mindset, and with the guidance of Mr. Alok Pandey, our students are equipped to turn their concepts into reality, shaping the future of innovation.",
      videoUrl: "https://cdn-cf-east.streamable.com/video/mp4/nyiqxo.mp4?Expires=1741631330478&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=HWPo5FQJ5srSM3HTj3qWUjEZL5xWzYRjA84SWEG50p3CbfrQwkAH3aeHoTQerSLrSpIiPdA9zlU5EuEKRqJ5DocR8driloToY48gPsn-OgxpHviQPrceE3pjDjuSTZVbweSUYRee5Ie33VFU0doh0TF-UElvamIiMd~J7hYDayXLU1UjcD9YHDgiX6FmQV0a5mWxbPmx5-WYjt-7yMP0hp~Mwwpe9YDwOtB2xNA5Vn2JCws677GIPwYcS1B6YuCJ~T480ORwO0gfivliOhI9i8em2tIGm7-KAIVb9~TNH44x7r1NaVnI~cyV~2fsJwtZXT3D1Xu7yCvn0dKS1vMMUA__"
    },
    {
      id: 4,
      title: "Urban Dance Tutorial",
      description: "Learn the fundamentals of urban dance with this step-by-step tutorial. We break down popular moves and combinations, helping you build confidence and style in your dancing. Suitable for all skill levels.",
      videoUrl: "https://cdn-cf-east.streamable.com/video/mp4/dlftl5.mp4?Expires=1741631364548&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=ARhL11mHzJ999h7tJrcw1vAyOzXQgZFVfd8QPz6DWTh7oFDm~MeQs1MSrcRkqge88wFpDFI6~~je3dtJuCXZg0h75RWJWy6djiqOsRA4HUAO7t154VZCDMTE4mYkhikQwMePBDRvVnNws7-TYEhGZhvm5koOK4odzndpy5W4Pl~UbHT-2nLEnv1YtgwGxXb9asjV6MrLnNF5J32bR~sRuofITglEOA932bJTU7JaWz3ml3PIXecyd-K6I3eOGjcrXNw8jmyTXcq1BWqXxwWzGLcLQVdYfMADEFQSu9~Plw52x7ieWv~JCczzpNmYzZIAqHqzCfl3-hjNf3Iehd4Dcw__"
    },
    {
      id: 5,
      title: "Urban Dance Tutorial",
      description: "Learn the fundamentals of urban dance with this step-by-step tutorial. We break down popular moves and combinations, helping you build confidence and style in your dancing. Suitable for all skill levels.",
      videoUrl: "https://cdn-cf-east.streamable.com/video/mp4/jd6uy7.mp4?Expires=1741631411994&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=DbXWdcRRYtlqLZShdavJ7JHhPdoycIBeWA0wPVONp-WQWhQTRwhL7NLlCu6OyX1zIZa1QopnY2I0eFddw2eHDymMSKdxiJbQGLg~zpyV4vXcw4gkn8tquasFlhpSoYev7pV-IvZ~fvSghD37OsZsFWL3XOA25hdI5-ac0blN~TG6Or1uIMgz2idSQXXTsa-ct0oqxFgUXriOPx2aqV54AgBkQV8PiDO-TaIE0F5w39qrHhvdvs-2XiM1riDL-9rpQL46mdzm8ff1P5~5OFRwSyV4QenzWi6ahgayXJCBe9MXPRwA5fAu1NXKifUfvvV3Ce9l3u7CEPhNebHERQyr3w__"
    },
    {
      id: 6,
      title: "Design Thinking & Innovation with Prof. Talha Khan",
      description: "At Invertis University, creativity and innovation are at the core of our learning culture. Prof. Talha has been instrumental in fostering a mindset of design thinking and problem-solving, enabling students to approach challenges with a user-centric perspective. Through his expertise, students gain a deep understanding of empathizing with users, defining problems, ideating creative solutions, prototyping, and iterating innovations that have real-world impact. His sessions encourage critical thinking, experimentation, and breakthrough innovations, helping young minds transform abstract ideas into practical solutions. With his guidance, students at Invertis develop the ability to innovate with purpose, adapt to industry trends, and create meaningful solutions that shape the future.",
      videoUrl: "https://cdn-cf-east.streamable.com/video/mp4/k94xmg.mp4?Expires=1741631443308&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=LKkJ0LI95Osb-vfB6dsmmbq9UPcQfowVgTN1qkNWOwWVH6h2Gw8XEzxeBy4Q~DDEgUF1UD6xBSBlxXoEqd2fgvIw4p3rrsZ9a4QerSVQnigDypvIHnvAbvUY4ISl2c0x1upaDrmdE8KbEaqTgjeS7XB6WrqSCN9oCYw3OPJ2bXb77BNSz60WW6mapeRYoFGrf5NLA8AF44cx5rxDPhU~-LmHAguPMd~gDOSLsMC9wqtKvfoNhBLkvfuyWNT~h4I7YzuUvAGzN0jgiaDv52P-C~~80rArVwRl~peFP5u~hyhGiDC7JeXLEGweOm~h4VT8Rn~SR~PwxXojjk8IaTdDaw__"
    },
    {
      id: 7,
      title: "Urban Dance Tutorial",
      description: "Learn the fundamentals of urban dance with this step-by-step tutorial. We break down popular moves and combinations, helping you build confidence and style in your dancing. Suitable for all skill levels.",
      videoUrl: "https://cdn-cf-east.streamable.com/video/mp4/vu8rod.mp4?Expires=1741631473179&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=b5ZMAJhh5Bo6KW6-lrsrgga8MRMrk2p9SeN3CllAswe4eLJVTkW~MQ-Pqg8aXwyhbema7xM8M~UMqL0wUjTWhY8xfQIoJt-cDGah91qJFBQeDWpM49vpWWmCk3cQQVJP3NN-V4HPe4KppaMV1F~Vx5km73pM-vr776BN5wtV5EnTdBxgE53LgoIXvWginEMmt2WGd1jyStw1ktxx-yKJMJC91xT6uZ54XqK2Wztldihn7WmRJpuqLdT~Z6YcjRWQVp4AV1mo8C4LnLcZBw0KIthrUS25vwhYN2ItxB6H~a59h9EKk-t2020XA7xnyf--eVhmtkKOaEbYAyvkYkax~A__"
    },
    {
      id: 8,
      title: "Cooking Masterclass",
      description: "Join Chef Maria as she demonstrates essential cooking techniques and shares her secret recipes. This episode focuses on creating delicious pasta dishes from scratch, with tips for perfect sauce consistency.",
      videoUrl: "https://cdn-cf-east.streamable.com/video/mp4/d8h71w.mp4?Expires=1741630479965&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=AG-pJlifNHQKYfm~VNF8usfeEX6eaYMjzE60qn4HlDIlVaHa55vmyLaa7aXJ75fVcJKXDl5w8da~bRh2DJfqlXP~yFw5RsCJDdwuiR8eprL1URdFALbZUQygyUSVE~N9Oh73fWYjVHKjfXXPfQ4dZLjWxzoqlGzIyeOSDJ09f5tkx9gSUA1T9tfhDzF~V7Mff-sjyJoypyZlWfCNCkOczjnR5f4GJpGESncwTkoa0Ftb2gYZSRclcdngFZELlk8-LVMW6g0QhFp0zKDVD9ZyXN5ztpIWM6IeaWdzW5V7tAGDoWVMJarpFsrIiE1jESc03pAnWPG8iY~ljBNgwDWaTA__"
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
                <p className="text-gray-600 text-xl leading-relaxed">
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