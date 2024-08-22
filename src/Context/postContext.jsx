import React from "react";

export const PostInfo = React.createContext();

const posts = [
  {
    id: 1,
    name: "Designsta",
    username: "@inner",
    time: "25m",
    content:
      "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
    img: "https://picsum.photos/350/400",
    reactions: {
      likes: 123,
      retweets: 45,
      comments: 67,
    },
  },

  {
    id: 2,
    name: "cloutexhibition",
    username: "@RajLahoti",
    time: "22m",
    content:
      "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
    img: "https://picsum.photos/350/400",
    reactions: {
      likes: 13,
      retweets: 5,
      comments: 9,
    },
  },

  {
    id: 3,
    name: "CreativePhoto",
    username: "@cloutexhibition",
    time: "1h",
    content: "Обетда..... Кечиринглар",
    img: "https://picsum.photos/450/400",
    reactions: {
      likes: 123,
      retweets: 45,
      comments: 7,
    },
  },
];

function PostContext({ children }) {
  return <PostInfo.Provider value={posts}>{children}</PostInfo.Provider>;
}

export default PostContext;
