'use client'

import React, { useState } from "react";
import { Button, Card, Progress, message, Typography, Space, Layout } from "antd";
import styles from './quiz.module.css'
import { motion, AnimatePresence } from "framer-motion";

const perguntas = [
    {
        id: 1,
        texto: "Qual é uma das principais funções da Vitamina A?",
        opcoes: [
            { valor: "A", texto: "Formar as fibras do intestino" },
            { valor: "B", texto: "Transportar oxigênio pelo sangue" },
            { valor: "C", texto: "Ajudar no funcionamento da visão" },
            { valor: "D", texto: "Formar exclusivamente os músculos" },
        ],
        resposta: "C",
    },
    {
        id: 2,
        texto: "Qual destes alimentos é uma fonte de Vitamina A?",
        opcoes: [
            { valor: "A", texto: "Cenoura" },
            { valor: "B", texto: "Açúcar" },
            { valor: "C", texto: "Refrigerante" },
            { valor: "D", texto: "Óleo de cozinha" },
        ],
        resposta: "A",
    },
    {
        id: 3,
        texto: "A Vitamina B é, na verdade, um grupo de vitaminas. Qual alternativa apresenta uma função relacionada às vitaminas do complexo B?",
        opcoes: [
            {
                valor: "A",
                texto: "Participar de processos importantes para o funcionamento do organismo, como o metabolismo dos nutrientes",
            },
            { valor: "B", texto: "Formar somente os dentes" },
            { valor: "C", texto: "Substituir todas as outras vitaminas" },
            { valor: "D", texto: "Ser responsável exclusivamente pela visão" },
        ],
        resposta: "A",
    },
    {
        id: 4,
        texto: "Qual destes alimentos pode fornecer vitaminas do complexo B?",
        opcoes: [
            { valor: "A", texto: "Açúcar" },
            { valor: "B", texto: "Feijão" },
            { valor: "C", texto: "Refrigerante" },
            { valor: "D", texto: "Bala" },
        ],
        resposta: "B",
    },
    {
        id: 5,
        texto: "Qual vitamina auxilia na absorção do ferro?",
        opcoes: [
            { valor: "A", texto: "Vitamina A" },
            { valor: "B", texto: "Vitamina B" },
            { valor: "C", texto: "Vitamina C" },
            { valor: "D", texto: "Vitamina D" },
        ],
        resposta: "C",
    },
    {
        id: 6,
        texto: "Qual destes alimentos é conhecido por ser fonte de Vitamina C?",
        opcoes: [
            { valor: "A", texto: "Manteiga" },
            { valor: "B", texto: "Arroz branco" },
            { valor: "C", texto: "Queijo" },
            { valor: "D", texto: "Laranja" },
        ],
        resposta: "D",
    },
    {
        id: 7,
        texto: "Além de auxiliar na absorção do ferro, a Vitamina C participa de qual processo?",
        opcoes: [
            { valor: "A", texto: "Formação exclusiva dos ossos" },
            { valor: "B", texto: "Produção de fibras alimentares" },
            { valor: "C", texto: "Formação de colágeno e cicatrização" },
            { valor: "D", texto: "Formação do esmalte dos lápis" },
        ],
        resposta: "C",
    },
    {
        id: 8,
        texto: "Qual vitamina está relacionada à formação e à manutenção dos ossos e dentes?",
        opcoes: [
            { valor: "A", texto: "Vitamina A" },
            { valor: "B", texto: "Vitamina D" },
            { valor: "C", texto: "Vitamina B" },
            { valor: "D", texto: "Vitamina C" },
        ],
        resposta: "B",
    },
    {
        id: 9,
        texto: "A Vitamina D ajuda o organismo a aproveitar qual mineral?",
        opcoes: [
            { valor: "A", texto: "Cálcio" },
            { valor: "B", texto: "Ferro" },
            { valor: "C", texto: "Sódio" },
            { valor: "D", texto: "Potássio" },
        ],
        resposta: "A",
    },
    {
        id: 10,
        texto: "Qual mineral é muito importante para a formação e manutenção dos ossos e dentes?",
        opcoes: [
            { valor: "A", texto: "Ferro" },
            { valor: "B", texto: "Cálcio" },
            { valor: "C", texto: "Sódio" },
            { valor: "D", texto: "Zinco" },
        ],
        resposta: "B",
    },
    {
        id: 11,
        texto: "Qual destes alimentos é uma fonte conhecida de cálcio?",
        opcoes: [
            { valor: "A", texto: "Açúcar" },
            { valor: "B", texto: "Refrigerante" },
            { valor: "C", texto: "Bala" },
            { valor: "D", texto: "Leite" },
        ],
        resposta: "D",
    },
    {
        id: 12,
        texto: "Qual é uma importante função do ferro no organismo?",
        opcoes: [
            { valor: "A", texto: "Formar exclusivamente os dentes" },
            { valor: "B", texto: "Produzir fibras alimentares" },
            { valor: "C", texto: "Participar da formação da hemoglobina e do transporte de oxigênio" },
            { valor: "D", texto: "Substituir as vitaminas" },
        ],
        resposta: "C",
    },
    {
        id: 13,
        texto: "Qual destes alimentos pode ser uma fonte de ferro?",
        opcoes: [
            { valor: "A", texto: "Açúcar" },
            { valor: "B", texto: "Refrigerante" },
            { valor: "C", texto: "Feijão" },
            { valor: "D", texto: "Bala de frutas" },
        ],
        resposta: "C",
    },
    {
        id: 14,
        texto: "Para que as proteínas são importantes no nosso organismo?",
        opcoes: [
            {
                valor: "A",
                texto: "Para participar da construção e manutenção dos tecidos do corpo",
            },
            { valor: "B", texto: "Para substituir todas as vitaminas" },
            { valor: "C", texto: "Para formar apenas os dentes" },
            { valor: "D", texto: "Para produzir exclusivamente fibras" },
        ],
        resposta: "A",
    },
    {
        id: 15,
        texto: "Qual destes alimentos é uma fonte de proteínas?",
        opcoes: [
            { valor: "A", texto: "Açúcar" },
            { valor: "B", texto: "Óleo" },
            { valor: "C", texto: "Refrigerante" },
            { valor: "D", texto: "Ovo" },
        ],
        resposta: "D",
    },
    {
        id: 16,
        texto: "Qual é uma importante função das fibras alimentares?",
        opcoes: [
            { valor: "A", texto: "Formar a hemoglobina" },
            { valor: "B", texto: "Contribuir para o bom funcionamento do intestino" },
            { valor: "C", texto: "Formar exclusivamente os ossos" },
            { valor: "D", texto: "Substituir a água do organismo" },
        ],
        resposta: "B",
    },
    {
        id: 17,
        texto: "Em qual grupo podemos encontrar boas fontes de fibras?",
        opcoes: [
            { valor: "A", texto: "Frutas, verduras e cereais" },
            { valor: "B", texto: "Refrigerantes e balas" },
            { valor: "C", texto: "Açúcar e óleo" },
            { valor: "D", texto: "Manteiga e refrigerante" },
        ],
        resposta: "A",
    },
    {
        id: 18,
        texto: "Qual alternativa apresenta somente nutrientes estudados pela Liga da Saúde?",
        opcoes: [
            { valor: "A", texto: "Vitamina C, plástico, cálcio e proteínas" },
            { valor: "B", texto: "Vitamina C, cálcio, ferro e proteínas" },
            { valor: "C", texto: "Ferro, papel, fibras e Vitamina D" },
            { valor: "D", texto: "Cálcio, ferro, madeira e Vitamina A" },
        ],
        resposta: "B",
    },
    {
        id: 19,
        texto: "Uma criança quer aprender mais sobre os nutrientes dos alimentos. O que pode ajudá-la nessa investigação?",
        opcoes: [
            { valor: "A", texto: "Escolher um alimento apenas pela cor da embalagem" },
            { valor: "B", texto: "Ignorar a tabela nutricional" },
            { valor: "C", texto: "Observar as informações presentes nos rótulos dos alimentos" },
            { valor: "D", texto: "Escolher sempre o alimento com a embalagem mais bonita" },
        ],
        resposta: "C",
    },
    {
        id: 20,
        texto: "Qual frase representa melhor a principal descoberta da Liga da Saúde?",
        opcoes: [
            { valor: "A", texto: "Todos os nutrientes possuem exatamente a mesma função" },
            { valor: "B", texto: "Apenas as vitaminas são importantes para o nosso corpo" },
            {
                valor: "C",
                texto: "Um único nutriente consegue realizar todas as funções necessárias ao corpo",
            },
            {
                valor: "D",
                texto: "Diferentes vitaminas e nutrientes possuem diferentes funções no organismo",
            },
        ],
        resposta: "D",
    },
];
export default function Quiz() {
    const { Title, Text } = Typography;
    const { Content } = Layout;

    const [indice, setIndice] = useState(0);
    const [resposta, setResposta] = useState("");
    const [contagem, setContagem] = useState({
        certas: 0,
        erradas: 0,
    });
    const [finalizado, setFinalizado] = useState(false);

    const perguntaAtual = perguntas[indice];

    const proximaPergunta = (opcaoSelecionada) => {
        if (!opcaoSelecionada) {
            message.warning("Escolha uma opção antes de continuar!");
            return;
        }

        const acertou = opcaoSelecionada === perguntaAtual.resposta;

        setContagem((prev) => ({
            certas: prev.certas + (acertou ? 1 : 0),
            erradas: prev.erradas + (acertou ? 0 : 1),
        }));

        setResposta("");

        if (indice + 1 < perguntas.length) {
            setIndice(indice + 1);
        } else {
            setFinalizado(true);
        }
    };

    if (finalizado) {
        // Como o último setContagem é assíncrono,
        // calculamos o resultado incluindo a última resposta.
        const ultimaRespostaFoiCerta =
            resposta === perguntaAtual.resposta;

        const totalCertas =
            contagem.certas + (ultimaRespostaFoiCerta ? 1 : 0);

        let resultado;

        if (totalCertas <= 10) {
            resultado = {
                titulo: "Precisa melhorar",
                subtitulo: "Continue aprendendo sobre vitaminas e nutrientes!",
                mensagem:
                    "Você ainda pode aprender bastante sobre a importância dos nutrientes para o nosso corpo. Continue estudando e descobrindo como uma alimentação variada pode ajudar na nossa saúde!",
                classe: styles.bgVermelho,
            };
        } else if (totalCertas <= 15) {
            resultado = {
                titulo: "Está quase lá!",
                subtitulo: "Você já sabe bastante sobre vitaminas e nutrientes!",
                mensagem:
                    "Você demonstrou um bom conhecimento sobre os nutrientes estudados pela Liga da Saúde. Continue aprendendo para ficar ainda melhor!",
                classe: styles.bgAmarelo,
            };
        } else {
            resultado = {
                titulo: "Excelente!",
                subtitulo: "Você mandou muito bem!",
                mensagem:
                    "Você demonstrou excelente conhecimento sobre vitaminas, minerais, proteínas e fibras. Parabéns por cuidar da sua saúde e aprender tanto!",
                classe: styles.bgVerde,
            };
        }

        return (
            <Layout className={styles.quizLayout}>
                <Content className={styles.quizContent}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="resultado"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            className={styles.quizMotionDiv}
                        >
                            <Card
                                className={`${styles.finishCard} ${resultado.classe}`}
                            >
                                <Space
                                    direction="vertical"
                                    align="center"
                                    size="large"
                                >
                                    <Title level={1}>RESULTADO</Title>

                                    <Title level={2}>
                                        {resultado.titulo}
                                    </Title>

                                    <Title level={3}>
                                        Você acertou {totalCertas} de{" "}
                                        {perguntas.length} perguntas
                                    </Title>

                                    <Title level={4}>
                                        {resultado.subtitulo}
                                    </Title>

                                    <Text className={styles.finishText}>
                                        {resultado.mensagem}
                                    </Text>

                                    <Card
                                        className={styles.thxCard}
                                        size="small"
                                    >
                                        <Space direction="vertical">
                                            <Text
                                                className={styles.thxText}
                                            >
                                                Obrigado por participar!
                                            </Text>

                                            <Button
                                                className={styles.thxButton}
                                                type="text"
                                                href="/"
                                            >
                                                Refazer
                                            </Button>
                                        </Space>
                                    </Card>
                                </Space>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </Content>
            </Layout>
        );
    }

    return (
        <Layout className={styles.quizLayout}>
            <Progress
                percent={Math.round(
                    ((indice + 1) / perguntas.length) * 100
                )}
                showInfo={false}
            />

            <Content className={styles.quizContent}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`pergunta-${indice}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeIn",
                        }}
                        className={styles.quizMotionDiv}
                    >
                        <Card className={styles.quizCard}>
                            <Space
                                className={styles.quizSpace}
                                direction="vertical"
                                align="center"
                                size="large"
                            >
                                <Title level={3}>
                                    Pergunta {indice + 1} de{" "}
                                    {perguntas.length}
                                </Title>

                                <Text className={styles.quizText}>
                                    {perguntaAtual.texto}
                                </Text>

                                <div className={styles.divButton}>
                                    {perguntaAtual.opcoes.map((opcao) => (
                                        <Button
                                            className={styles.optButton}
                                            key={opcao.valor}
                                            type={
                                                resposta === opcao.valor
                                                    ? "primary"
                                                    : "default"
                                            }
                                            shape="round"
                                            block
                                            onClick={() => {
                                                setResposta(opcao.valor);
                                                proximaPergunta(
                                                    opcao.valor
                                                );
                                            }}
                                        >
                                            {opcao.texto}
                                        </Button>
                                    ))}
                                </div>
                            </Space>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </Content>
        </Layout>
    );
}