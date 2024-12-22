export interface audios {
  title: string;
  desc: string;
  body: string;
  author: string;
  date: string;
  img: string;
}
export interface channels {
  name: string;
  desc: string;
  link: string;
  img: string;
}

export interface reads {
  name: string;
  num: string;
}
export const audioList: audios[] = [
  {
    title: "Understanding TypeScript",
    desc: "An introduction to TypeScript and its features.",
    body: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. In this blog, we will explore its core features, benefits, and how to get started.",
    author: "John Doe",
    date: "2024-11-30",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "React Hooks Explained",
    desc: "A deep dive into React's powerful hooks.",
    body: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. This article will focus on commonly used hooks like useState, useEffect, and custom hooks.",
    author: "Jane Smith",
    date: "2024-11-25",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Next.js for Beginners",
    desc: "A beginner's guide to building with Next.js.",
    body: "Next.js is a powerful React framework for building production-ready applications. Learn how to set up your first Next.js project and explore its features like server-side rendering and API routes.",
    author: "Alice Brown",
    date: "2024-11-20",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Mastering CSS Grid",
    desc: "Learn how to create responsive layouts with CSS Grid.",
    body: "CSS Grid is a two-dimensional layout system that provides powerful capabilities for creating grid-based layouts. This guide will cover the basics and advanced techniques to create stunning designs.",
    author: "Bob Williams",
    date: "2024-11-15",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Understanding JavaScript Closures",
    desc: "A deep dive into closures and their use cases.",
    body: "Closures are a fundamental concept in JavaScript. They allow functions to access variables from their outer scope even after the outer function has executed. This blog explains closures with practical examples.",
    author: "Emily Davis",
    date: "2024-11-10",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Understanding JavaScript Closures",
    desc: "A deep dive into closures and their use cases.",
    body: "Closures are a fundamental concept in JavaScript. They allow functions to access variables from their outer scope even after the outer function has executed. This blog explains closures with practical examples.",
    author: "Emily Davis",
    date: "2024-11-10",
    img: "https://via.placeholder.com/150",
  },
];

export const channelList: channels[] = [
  {
    name: "Pristine Methodology",
    desc: "Nigeria Salafi Channel",
    link: "www.pristinemethodology.com",
    img: "/images/PristineLogo.png",
  },
  {
    name: "Arrisalah Publication",
    desc: "Nigeria Salafi Channel",
    link: "www.pristinemethodology.com",
    img: "/images/ArrisalahLoo.png",
  },
  {
    name: "Pristine Methodology",
    desc: "Nigeria Salafi Channel",
    link: "www.pristinemethodology.com",
    img: "/images/PristineLogo.png",
  },
  {
    name: "Arrisalah Publication",
    desc: "Nigeria Salafi Channel",
    link: "www.pristinemethodology.com",
    img: "/images/ArrisalahLoo.png",
  },
];

export const readList: reads[] = [
  {
    name: "Aqeedah",
    num: "09",
  },
  {
    name: "Manhaj",
    num: "09",
  },
  {
    name: "Tarbiyah",
    num: "06",
  },
  {
    name: "Tafseer",
    num: "08",
  },
  {
    name: "Musa'afiqah",
    num: "09",
  },
];
