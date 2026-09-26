'use client'

import React from "react";
import styles from "./page.module.css";
import { Layout, Typography, Space, Button, Card } from 'antd'
import ThemeProvider from "../theme";

const { Content } = Layout
const { Title, Text } = Typography

export default function Home() {

  return (
    <ThemeProvider>
      <Layout className={styles.homeLayout}>

        <Content className={styles.homeContent}>
          <Card className={styles.homeCard}>
            <Space
              className={styles.homeSpace}
              direction="vertical"
              align="center"
              size='large'
            >
              <Title level={1}>LIGA DA SAÚDE</Title>
              <Title level={3}>INSTRUÇÕES:</Title>

              <Text className={styles.homeText}>Responda às perguntas sobre <strong>vitaminas e nutrientes</strong> e descubra o quanto você aprendeu com a Liga da Saúde!</Text>
              <Text className={styles.homeText}>São 20 perguntas sobre vitaminas, minerais, proteínas e fibras. No final, confira seu resultado e veja quantas perguntas você acertou!</Text>
              <Button
                className={styles.initButton}
                type="default"
                href="/quiz"
              >Iniciar
              </Button>

            </Space>
          </Card>
        </Content>

      </Layout>
    </ThemeProvider >
  );
}