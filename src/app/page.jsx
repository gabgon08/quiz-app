'use client'

import React from "react";
import styles from "./page.module.css";
import { Layout, Typography, Space, Button } from 'antd'
import ThemeProvider from "../theme";
import Link from "next/link";

const { Content } = Layout
const { Title, Text } = Typography

export default function Home() {

  return (
    <ThemeProvider>
      <Layout className={styles.layout}>

        <Content className={styles.content}>
          <Space direction="vertical" align="center" className={styles.space}>
            <Title level={1}>QUIZ REFLEXIVO</Title>
            <Title level={1}>COMO ESTÁ MEU TEMPO DE TELA?</Title>
            <Title level={2}>INSTRUÇÕES</Title>
            <Text strong>‼️Responda com sinceridade‼️</Text>
            <Text>Este quiz não tem certo ou errado, são 10 perguntas que servem para pensar sobre seus próprios hábitos com o celular, computador, TV ou outros aparelhos</Text>
            <Text>No final, descubra o que suas respostas dizem sobre o seu uso das telas
            </Text>
            <Button>
              <Link href='/quiz'>Iniciar</Link>
            </Button>
          </Space>
        </Content>

      </Layout>
    </ThemeProvider >
  );
}