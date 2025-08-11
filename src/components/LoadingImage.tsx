import { useState } from "react";
import styles from "./LoadingImage.module.css";

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
  width = 400,
  height = 250,
}: LoadingImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`${styles.imageContainer} ${className || ""}`}
      style={{ width, height }}
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
        style={{ width, height }}
      />
    </div>
  );
}
