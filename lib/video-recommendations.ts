export type VideoRecommendation = {
  id: string;
  title: string;
  speaker: string;
  youtubeUrl: string;
};

export type VideoThumbnailQuality = "maxres" | "hq720" | "sd" | "hq";

const thumbnailFileByQuality: Record<VideoThumbnailQuality, string> = {
  maxres: "maxresdefault.jpg",
  hq720: "hq720.jpg",
  sd: "sddefault.jpg",
  hq: "hqdefault.jpg",
};

const videoRecommendations: VideoRecommendation[] = [
  {
    id: "tGMrgcUeGeM",
    title: "Why We Get Sick: The Role of Metabolism in Health",
    speaker: "Ben Bikman",
    youtubeUrl: "https://www.youtube.com/watch?v=tGMrgcUeGeM",
  },
  {
    id: "7nJgHBbEgsE",
    title: "Fasting as a Therapeutic Option for Weight Loss",
    speaker: "Dr. Jason Fung",
    youtubeUrl: "https://www.youtube.com/watch?v=7nJgHBbEgsE",
  },
  {
    id: "wBsnk2PtPeo",
    title: "Low Carb from a Doctor's Perspective",
    speaker: "Dr. Paul Mason",
    youtubeUrl: "https://www.youtube.com/watch?v=wBsnk2PtPeo",
  },
  {
    id: "L9ZLJI-1ifs",
    title: "Red Meat and Health",
    speaker: "Nina Teicholz",
    youtubeUrl: "https://www.youtube.com/watch?v=L9ZLJI-1ifs",
  },
  {
    id: "fL5-9ZxamXc",
    title: "Medical Aspects of the Low Carbohydrate Lifestyle",
    speaker: "Prof. Tim Noakes",
    youtubeUrl: "https://www.youtube.com/watch?v=fL5-9ZxamXc",
  },
  {
    id: "TXlVfwJ6RQU",
    title:
      "Our Descent into Madness: Modern Diets and the Global Mental Health Crisis",
    speaker: "Dr. Georgia Ede",
    youtubeUrl: "https://www.youtube.com/watch?v=TXlVfwJ6RQU",
  },
  {
    id: "Jd8QFD5Ht18",
    title: "Insulin Resistance",
    speaker: "Dr. Ted Naiman",
    youtubeUrl: "https://www.youtube.com/watch?v=Jd8QFD5Ht18",
  },
  {
    id: "uncd7SvT94c",
    title: "Paleopathology and the Origins of the Low-carb Diet",
    speaker: "Dr. Michael Eades",
    youtubeUrl: "https://www.youtube.com/watch?v=uncd7SvT94c",
  },
  {
    id: "4KrmpK_Lckg",
    title: "What About Fiber?",
    speaker: "Dr. Zoe Harcombe",
    youtubeUrl: "https://www.youtube.com/watch?v=4KrmpK_Lckg",
  },
  {
    id: "Q_6dKfHApC0",
    title: "Low Carbohydrate Diet for Type 2 Diabetes Reversal",
    speaker: "Dr. Sarah Hallberg",
    youtubeUrl: "https://www.youtube.com/watch?v=Q_6dKfHApC0",
  },
  {
    id: "jIegMp5cWBY",
    title: "Undoing Atkins: A Cautionary Tale",
    speaker: "Dr. Jay Wortman",
    youtubeUrl: "https://www.youtube.com/watch?v=jIegMp5cWBY",
  },
  {
    id: "68TCOC-DhAE",
    title: "Ketosis Without Starvation: The Human Advantage",
    speaker: "L. Amber O'Hearn",
    youtubeUrl: "https://www.youtube.com/watch?v=68TCOC-DhAE",
  },
  {
    id: "3-BJzqMbsxI",
    title: "A Global Food Revolution",
    speaker: "Dr. Andreas Eenfeldt",
    youtubeUrl: "https://www.youtube.com/watch?v=3-BJzqMbsxI",
  },
  {
    id: "11x9PhlZuK0",
    title: "The Life of a Low Carb GP",
    speaker: "Dr. Penny Figtree",
    youtubeUrl: "https://www.youtube.com/watch?v=11x9PhlZuK0",
  },
  {
    id: "AoCzm9-J_Ok",
    title:
      "Why Black Swans Matter: The Difference N=1 and Noticing Success Can Make",
    speaker: "Dr. David Unwin",
    youtubeUrl: "https://www.youtube.com/watch?v=AoCzm9-J_Ok",
  },
  {
    id: "lzsEqV0Bjcs",
    title: "Ruminating on Protein: Plants & Animals",
    speaker: "Dr. Peter Ballerstedt",
    youtubeUrl: "https://www.youtube.com/watch?v=lzsEqV0Bjcs",
  },
];

export const topVideoRecommendations = videoRecommendations.slice(0, 5);

export function getVideoThumbnail(
  id: string,
  quality: VideoThumbnailQuality = "maxres",
) {
  return `https://i.ytimg.com/vi/${id}/${thumbnailFileByQuality[quality]}`;
}

export function getVideoThumbnailWebp(
  id: string,
  quality: VideoThumbnailQuality = "maxres",
) {
  const file = thumbnailFileByQuality[quality].replace(/\.jpg$/, ".webp");
  return `https://i.ytimg.com/vi_webp/${id}/${file}`;
}

export function getVideoThumbnailCandidates(id: string) {
  return [
    { src: getVideoThumbnailWebp(id, "maxres"), minWidth: 1200 },
    { src: getVideoThumbnail(id, "maxres"), minWidth: 1200 },
    { src: getVideoThumbnailWebp(id, "hq720"), minWidth: 1100 },
    { src: getVideoThumbnail(id, "hq720"), minWidth: 1100 },
    { src: getVideoThumbnail(id, "sd"), minWidth: 600 },
    { src: getVideoThumbnail(id, "hq"), minWidth: 0 },
  ] as const;
}

export { videoRecommendations };
