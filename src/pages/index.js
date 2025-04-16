import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Documentation
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: "12px" }}
            to="/api"
          >
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="API Documentation with Redoc and Docusaurus"
    >
      <HomepageHeader />
      <main>
        <div className="container padding-vert--lg">
          <div className="row">
            <div className="col col--6">
              <h2>Comprehensive Documentation</h2>
              <p>
                Our documentation provides detailed guides to help you
                understand and utilize our API effectively.
              </p>
            </div>
            <div className="col col--6">
              <h2>Interactive API Reference</h2>
              <p>
                Explore our API endpoints using the interactive Redoc interface
                with code samples and request/response examples.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
