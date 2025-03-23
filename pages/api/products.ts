import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const getRandomColorPair = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    const { r, g, b } = {
      r: parseInt(randomColor.slice(0, 2), 16),
      g: parseInt(randomColor.slice(2, 4), 16),
      b: parseInt(randomColor.slice(4, 6), 16),
    };
    const complementaryColor = [255 - r, 255 - g, 255 - b]
      .map((value) => value.toString(16).padStart(2, '0'))
      .join('');
    return { background: randomColor, text: complementaryColor };
  };

  const products = Array.from({ length: 10 }, (_, index) => {
    const { background, text } = getRandomColorPair();
    return {
      id: index + 1,
      title: `Product ${index + 1}`,
      price: (19.99 + index * 10).toFixed(2),
      image: `https://placehold.co/600x400/${background}/${text}?text=Product+${
        index + 1
      }`,
    };
  });

  res.status(200).json(products);
}
