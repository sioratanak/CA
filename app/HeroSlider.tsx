"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./page.module.css";

const slides = [
  {
    src: "/ca-slider-1.jpg",
    label: "Angkor Wat",
    title: "Cambodian culture and community",
    text: (
      <>
        Ancient Khmer Empire
        <br />
        UNESCO World Heritage Site
      </>
    ),
  },
  {
    src: "/ca-slider-2.jpg",
    label: "Koh Rong",
    title: "Food, friendship, and tradition",
    text: (
      <>
        White sand beaches
        <br />
        Crystal-clear turquoise water
      </>
    ),
  },
  {
    src: "/ca-slider-3.jpg",
    label: "Featured photo",
    title: "Tourism, heritage, and connection",
    text: "Sharing Cambodia's places, stories, and cultural richness with Czechia.",
  },
  {
    src: "/ca-slider-4.jpg",
    label: "Featured photo",
    title: "Events, performances, and celebrations",
    text: "Public programs where Cambodian culture can be seen, heard, and enjoyed.",
  },
  {
    src: "/ca-slider-5.jpg",
    label: "Featured photo",
    title: "Building bridges in Czechia",
    text: "Creating warm connections between Cambodian and Czech communities.",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <div className={styles.heroSlider}>
      <div className={styles.heroSlideImageWrap}>
        <Image
          className={styles.heroSlideImage}
          src={slide.src}
          alt={slide.title}
          fill
          sizes="(max-width: 1100px) calc(100vw - 40px), 45vw"
          priority
        />
      </div>
      <div className={styles.heroSlideFooter}>
        <span>{slide.label}</span>
        <p>{slide.text}</p>
        <div className={styles.heroSlideDots} aria-label="Hero photo slide progress">
          {slides.map((item, index) => (
            <button
              aria-label={`Show ${item.title}`}
              aria-current={index === activeSlide ? "true" : undefined}
              className={index === activeSlide ? styles.heroSlideDotActive : undefined}
              key={item.src}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
