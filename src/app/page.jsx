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
              <Title level={1}>COMO ESTÁ MEU TEMPO DE TELA?</Title>
              <Title level={3}>‼️Responda com sinceridade‼️</Title>
              <Text className={styles.homeText}>Este quiz não tem certo ou errado, são 10 perguntas que servem para pensar sobre seus próprios hábitos com o celular, computador, TV ou outros aparelhos</Text>
              <Text className={styles.homeText}>No final, descubra o que suas respostas dizem sobre o seu uso das telas</Text>
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