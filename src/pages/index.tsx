import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/wallet.module.css";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kaspa DEX</title>
        <meta name="description" content="Welcome to Kaspa DEX" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <img
              src="/dextool-logo.png"
              alt="DEXTool Logo"
              className={styles.logo}
            />
            <div>
              <h1 className={styles.headerTitle}>Kaspa DEX</h1>
            </div>
          </div>
        </header>

        <main className={styles.main}>
          <h2 className={styles.chartTitle}>Welcome to Kaspa DEX</h2>
          <p style={{ marginBottom: "16px" }}>
            Explore your wallet dashboard to track assets, view charts, and
            analyze your portfolio on the Kaspa blockchain.
          </p>
          <Link href="/wallet">
            <button className={styles.walletButton}>Go to Wallet</button>
          </Link>
        </main>
      </div>
    </>
  );
};

export default HomePage;
