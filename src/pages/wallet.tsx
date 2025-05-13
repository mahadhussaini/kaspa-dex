import React from "react";
import Head from "next/head";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "../styles/wallet.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const lineChartData = {
  labels: [
    "Mar 12",
    "Mar 14",
    "Mar 16",
    "Mar 18",
    "Mar 20",
    "Mar 22",
    "Mar 24",
    "Mar 26",
    "Apr 01",
    "Apr 03",
    "Apr 05",
    "Apr 07",
  ],
  datasets: [
    {
      label: "Asset 1",
      data: [42, 55, 67, 80, 67, 55, 42, 60, 70, 65, 55, 45],
      borderColor: "#FF6B6B",
      backgroundColor: "rgba(255, 107, 107, 0.2)",
      fill: true,
    },
    {
      label: "Asset 2",
      data: [50, 60, 70, 65, 55, 45, 50, 60, 70, 65, 55, 45],
      borderColor: "#4ECDC4",
      backgroundColor: "rgba(78, 205, 196, 0.2)",
      fill: true,
    },
    {
      label: "Asset 3",
      data: [45, 55, 65, 70, 60, 50, 45, 55, 65, 70, 60, 50],
      borderColor: "#45B7D1",
      backgroundColor: "rgba(69, 183, 209, 0.2)",
      fill: true,
    },
    {
      label: "Asset 4",
      data: [40, 50, 60, 70, 65, 55, 45, 50, 60, 70, 65, 55],
      borderColor: "#F7D794",
      backgroundColor: "rgba(247, 215, 148, 0.2)",
      fill: true,
    },
    {
      label: "Asset 5",
      data: [35, 45, 55, 65, 70, 60, 50, 45, 55, 65, 70, 60],
      borderColor: "#9B59B6",
      backgroundColor: "rgba(155, 89, 182, 0.2)",
      fill: true,
    },
  ],
};

const pieChartData = {
  labels: ["LSS", "VRA", "ILV", "AMP"],
  datasets: [
    {
      label: "Portfolio Balance",
      data: [46.07, 39.51, 8.02, 6.4],
      backgroundColor: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#F7D794"],
      borderColor: "#1F2937",
      borderWidth: 2,
    },
  ],
};

const assets = [
  {
    name: "Lossless - LSS",
    amount: 29.327,
    change: -0.6,
    price: 0.1732,
    total: 5.08,
    avgBuy: 1.15,
    "p/l": -0.49,
  },
  {
    name: "Versality - VRA",
    amount: 29.327,
    change: -0.6,
    price: 0.1732,
    total: 5.08,
    avgBuy: 1.15,
    "p/l": -0.49,
  },
  {
    name: "Illuvium - ILV",
    amount: 29.327,
    change: -0.6,
    price: 0.1732,
    total: 5.08,
    avgBuy: 1.15,
    "p/l": -0.49,
  },
  {
    name: "Amp - AMP",
    amount: 29.327,
    change: -0.6,
    price: 0.1732,
    total: 5.08,
    avgBuy: 1.15,
    "p/l": -0.49,
  },
];

const WalletPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Wallet - Kaspa DEX</title>
        <meta name="description" content="Wallet dashboard for Kaspa DEX" />
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
              <h1 className={styles.headerTitle}>
                Trending Tokens | Top Gainers
              </h1>
            </div>
          </div>
          <div className={styles.headerRight}>
            <button className={styles.walletButton}>Wallet</button>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFE5DwmKkGEgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700839156751?e=1752710400&v=beta&t=eeQi64obwr1Vq3bLM7ybamIzypHu34i6sy34TVxdN2g"
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.chartSection}>
            <div className={styles.chartContainer}>
              <h2 className={styles.chartTitle}>Chart</h2>
              <div className={styles.chart}>
                <Line
                  data={lineChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      x: { grid: { color: "#374151" } },
                      y: {
                        grid: { color: "#374151" },
                        ticks: { callback: (value) => `${value}%` },
                      },
                    },
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.walletSelect}>
                <h2 className={styles.chartTitle}>Select Wallet 1</h2>
                <select className={styles.select}>
                  <option>Wallet 1</option>
                </select>
              </div>
              <div className={styles.pieChartContainer}>
                <Pie
                  data={pieChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        callbacks: {
                          label: (tooltipItem) =>
                            `${tooltipItem.label}: ${tooltipItem.raw}%`,
                        },
                      },
                    },
                  }}
                />
                <div className={styles.pieChartInfo}>
                  <h3 className={styles.pieChartValue}>$14,744.45</h3>
                  <p className={styles.pieChartLabel}>Portfolio Balance</p>
                  <div className={styles.pieChartLegend}>
                    <span className={styles.legendItem}>LSS 46.07%</span>
                    <span className={styles.legendItem}>VRA 39.51%</span>
                    <span className={styles.legendItem}>ILV 8.02%</span>
                    <span className={styles.legendItem}>AMP 6.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.statsSection}>
            <div className={styles.stat}>
              24h Change
              <br />
              -$2,930.03
            </div>
            <div className={styles.stat}>
              Highest Balance
              <br />
              +$12,930.03
            </div>
            <div className={styles.stat}>
              Portfolio Age
              <br />2 Year, 3 Month, 30 Days
            </div>
            <div className={styles.stat}>
              Best 24h Asset
              <br />
              Bitcoin +2.8%
            </div>
            <div className={styles.stat}>
              Worst 24h Asset
              <br />
              Solana -0.5%
            </div>
          </div>

          <div className={styles.assetsContainer}>
            <h2 className={styles.assetsTitle}>Assets $1,102.8</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tableHeader}>
                    <th className={styles.tableHeaderCell}>Name</th>
                    <th className={styles.tableHeaderCell}>Amount</th>
                    <th className={styles.tableHeaderCell}>24h Change</th>
                    <th className={styles.tableHeaderCell}>Price</th>
                    <th className={styles.tableHeaderCell}>Total</th>
                    <th className={styles.tableHeaderCell}>Avg Buy</th>
                    <th className={styles.tableHeaderCell}>P/L</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset, index) => (
                    <tr key={index} className={styles.tableRow}>
                      <td className={styles.tableCell}>
                        <span className={styles.star}>★</span> {asset.name}
                      </td>
                      <td className={styles.tableCell}>{asset.amount}</td>
                      <td
                        className={styles.tableCell}
                        style={{ color: "#FF6B6B" }}
                      >
                        {asset.change}%
                      </td>
                      <td className={styles.tableCell}>${asset.price}</td>
                      <td className={styles.tableCell}>${asset.total}</td>
                      <td className={styles.tableCell}>${asset.avgBuy}</td>
                      <td
                        className={styles.tableCell}
                        style={{ color: "#FF6B6B" }}
                      >
                        {asset["p/l"]}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default WalletPage;
