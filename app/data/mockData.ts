export type TemplateItem = {
  id: string;
  image: string;
  category: string;
  isSelected?: boolean;
};

export const templateData: TemplateItem[] = [
  {
    id: "1",
    image: "https://picsum.photos/200/300?random=1",
    category: "Studio",
  },
  {
    id: "2",
    image: "https://picsum.photos/200/300?random=2",
    category: "Outdoor",
  },
  {
    id: "3",
    image: "https://picsum.photos/200/300?random=3",
    category: "Minimal",
  },
  {
    id: "4",
    image: "https://picsum.photos/200/300?random=4",
    category: "Elegant",
  },
  {
    id: "5",
    image: "https://picsum.photos/200/300?random=5",
    category: "Bold",
  },
  {
    id: "6",
    image: "https://picsum.photos/200/300?random=6",
    category: "Flat",
  },
];

export const monochromeData: TemplateItem[] = [
  {
    id: "7",
    image: "https://picsum.photos/200/300?grayscale&random=7",
    category: "BW 1",
  },
  {
    id: "8",
    image: "https://picsum.photos/200/300?grayscale&random=8",
    category: "BW 2",
  },
  {
    id: "9",
    image: "https://picsum.photos/200/300?grayscale&random=9",
    category: "BW 3",
  },
  {
    id: "8",
    image: "https://picsum.photos/200/300?grayscale&random=8",
    category: "BW 2",
  },
  {
    id: "8",
    image: "https://picsum.photos/200/300?grayscale&random=8",
    category: "BW 2",
  },
  {
    id: "8",
    image: "https://picsum.photos/200/300?grayscale&random=8",
    category: "BW 2",
  },
];
