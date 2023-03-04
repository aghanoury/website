import { useState, useEffect } from "react";

const jokes_list = [
  "I have a photographic memory, but I always forget to put film in the camera.",
  "I'm not short, I'm fun-size.",
  "I'm not procrastinating, I'm just prioritizing my tasks in a non-linear fashion.",
  "I don't have a shopping addiction, I'm just helping the economy.",
  "I don't get older, I level up.",
  "I'm not weird, I'm limited edition.",
  "I'm not forgetful, I'm just living in the moment.",
  "I don't suffer from insanity, I enjoy every minute of it.",
  "I'm not a morning person, I'm a coffee person.",
  "I'm not late, everyone else is just early.",
  "I'm not a control freak, I'm a control enthusiast.",
  "I'm not always right, but I'm never wrong.",
  "I'm not addicted to the internet, I just prefer it to real life.",
  "I always feel like somebody's watching me, and my webcam confirms it.",
  "I'm not procrastinating, I'm just doing research.",
];

const Jokes = () => {
  return jokes_list[Math.floor(Math.random() * jokes_list.length)];
};

export default Jokes;
