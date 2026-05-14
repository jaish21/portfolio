"use client";

import Lottie from "lottie-react";

type LottieAnimationProps = {
  animationData: object;
  className?: string;
};

export function LottieAnimation({
  animationData,
  className,
}: LottieAnimationProps) {
  return (
    <Lottie animationData={animationData} loop autoplay className={className} />
  );
}
