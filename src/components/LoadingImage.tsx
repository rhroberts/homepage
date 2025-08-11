import { useState, useEffect } from "react";
import styles from "./LoadingImage.module.css";
import {
  MOBILE_VIEWPORT,
  IMAGE_PADDING_RIGHT_REM,
} from "../constants/viewport";

interface LoadingImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function LoadingImage({
  src,
  alt,
  className,
  width = Math.min(400, window.innerWidth || MOBILE_VIEWPORT),
  height = 250,
}: LoadingImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [constrainedWidth, setConstrainedWidth] = useState(width);
  const [constrainedHeight, setConstrainedHeight] = useState(height);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      const paddingPx = IMAGE_PADDING_RIGHT_REM * rootFontSize;
      const maxWidth = viewportWidth - paddingPx;
      if (viewportWidth < width) {
        const ratio = height / width;
        setConstrainedWidth(Math.min(maxWidth, viewportWidth));
        setConstrainedHeight(
          Math.round(Math.min(maxWidth, viewportWidth) * ratio),
        );
      } else {
        setConstrainedWidth(width);
        setConstrainedHeight(height);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, height]);

  return (
    <div
      className={`${styles.imageContainer} ${className || ""}`}
      style={{ width: constrainedWidth, height: constrainedHeight }}
    >
      {!isLoaded && !hasError && (
        <div className={styles.placeholder} data-testid="loading-spinner">
          <div className={styles.spinner}></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${styles.image} ${isLoaded ? styles.loaded : ""}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{ width: constrainedWidth, height: constrainedHeight }}
      />
    </div>
  );
}
