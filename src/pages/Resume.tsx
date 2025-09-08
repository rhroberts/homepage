import { useState, useEffect } from "react";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import LoadingPdf from "../components/LoadingPdf.tsx";
import DownloadIcon from "../components/icons/DownloadIcon.tsx";
import ExternalLinkIcon from "../components/icons/ExternalLinkIcon.tsx";
import styles from "./Resume.module.css";
import { VIEWPORT_BREAKPOINTS } from "../constants/viewport.ts";

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= VIEWPORT_BREAKPOINTS.MOBILE);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <>
      <NavBar />
      <div id="content">
        <div id="main">
          <div className={styles.resume}>
            <div className={styles.resumeHeader}>
              <h1>Resume.</h1>
              <div className={styles.resumeActions}>
                <a
                  href="/documents/resume.pdf"
                  download="rusty-roberts-resume.pdf"
                  className={styles.downloadButton}
                  aria-label="Download PDF"
                >
                  {isMobile ? (
                    <DownloadIcon />
                  ) : (
                    <>
                      <span>Download PDF</span>
                      <DownloadIcon className={styles.buttonIcon} />
                    </>
                  )}
                </a>
                <a
                  href="/documents/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                  aria-label="Open in New Tab"
                >
                  {isMobile ? (
                    <ExternalLinkIcon />
                  ) : (
                    <>
                      <span>Open in New Tab</span>
                      <ExternalLinkIcon className={styles.buttonIcon} />
                    </>
                  )}
                </a>
              </div>
            </div>
            <div className={styles.pdfContainer}>
              <LoadingPdf
                src="/documents/resume.pdf"
                title="Rusty Roberts Resume"
                className={styles.pdfViewer}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
