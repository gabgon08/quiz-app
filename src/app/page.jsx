'use client'

import React from "react";
import styles from "./page.module.css";
import { Layout } from 'antd'
import ThemeProvider from "../theme";

export default function Home() {

  return (
    <ThemeProvider>
      <Layout>
        <div className={styles.teste}>
          Rock Doido
        </div>
      </Layout>
    </ThemeProvider>
  );
}