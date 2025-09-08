import { useState, useRef } from "react";
import styles from "./LoadingImage.module.css";

interface LoadingPdfProps {
  src: string;
  title: string;
  className?: string;
}

export default function LoadingPdf({ src, title, className }: LoadingPdfProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`${styles.imageContainer} ${className || ""}`}>
      {!isLoaded && !hasError && (
        <div className={styles.placeholder} data-testid="loading-spinner">
          <div className={styles.spinner}></div>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className={`${styles.image} ${isLoaded ? styles.loaded : ""}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}
