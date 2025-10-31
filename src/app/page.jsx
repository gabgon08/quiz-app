'use client'

import React from "react";
import styles from "./page.module.css";
import { Layout, Flex, Typography, Space } from 'antd'
import ThemeProvider from "../theme";

const { Header, Content } = Layout
const { Title, Text } = Typography

export default function Home() {

  return (
    <ThemeProvider>
      <Layout>
        <Header>
          <Title>QUIZ REFLEXIVO</Title>
          <Title>COMO ESTÁ MEU TEMPO DE TELA?</Title>
        </Header>
        <Content>
          <Space direction="vertical">
            <Text>INSTRUÇÕES</Text>
            <Text>Responda com sinceridade</Text>
            <Text>Este quiz não tem certo ou errado, são 10 perguntas que servem para pensar sobre seus próprios hábitos com o celular, computador, TV ou outros aparelhos</Text>
            <Text>No final, descubra o que suas respostas dizem sobre o seu uso das telas
            </Text>
          </Space>
        </Content>
      </Layout>
    </ThemeProvider >
  );
}