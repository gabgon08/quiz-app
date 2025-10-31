'use client'

import React, { useState } from "react";
import { Radio, Button, Card, Progress, message, Typography, Space, Layout } from "antd";

const perguntas = [
    {
        id: 1,
        texto: "Quanto tempo, em média, você passa por dia em frente a uma tela (celular, computador, tablet, TV, etc.) fora o horário de aula?",
        opcoes: [
            { valor: "A", texto: "Menos de 2 horas" },
            { valor: "B", texto: "De 2 a 4 horas" },
            { valor: "C", texto: "Mais de 4 horas" },
        ],
    },
    {
        id: 2,
        texto: "Você costuma usar o celular ou ver vídeos antes de dormir?",
        opcoes: [
            { valor: "A", texto: "Não, evito usar antes de dormir" },
            { valor: "B", texto: "Às vezes, uso rapidinho" },
            { valor: "C", texto: "Sim, quase sempre uso até dormir" },
        ],
    },
    {
        id: 3,
        texto: "Quando alguém pede para você parar de usar o celular ou o videogame, como você reage?",
        opcoes: [
            { valor: "A", texto: "Desligo tranquilamente" },
            { valor: "B", texto: "Me irrito um pouco, mas desligo" },
            { valor: "C", texto: "Odeio e quero continuar" },
        ],
    },
    {
        id: 4,
        texto: "Você costuma fazer pausas durante o uso das telas para se alongar, descansar os olhos, se movimentar ou conversar com alguém?",
        opcoes: [
            { valor: "A", texto: "Sim, com frequência" },
            { valor: "B", texto: "Às vezes lembro" },
            { valor: "C", texto: "Quase nunca" },
        ],
    },
    {
        id: 5,
        texto: "Quando está com tempo livre ou com tédio, o que costuma fazer primeiro?",
        opcoes: [
            { valor: "A", texto: "Procuro algo fora das telas (ler, conversar, brincar, caminhar)" },
            { valor: "B", texto: "Pego o celular ou o videogame, mas depois faço outras coisas" },
            { valor: "C", texto: "Vou direto para o celular, TV ou computador" },
        ],
    },
    {
        id: 6,
        texto: "Você costuma usar o celular durante as refeições ou enquanto conversa com a família?",
        opcoes: [
            { valor: "A", texto: "Não, guardo o aparelho nesses momentos" },
            { valor: "B", texto: "Às vezes" },
            { valor: "C", texto: "Sim, quase sempre" },
        ],
    },
    {
        id: 7,
        texto: "Já deixou de fazer alguma atividade (brincar, esportes, leitura, conversar, sair) por estar no celular?",
        opcoes: [
            { valor: "A", texto: "Não, consigo equilibrar bem" },
            { valor: "B", texto: "Às vezes acontece" },
            { valor: "C", texto: "Sim, muitas vezes" },
        ],
    },
    {
        id: 8,
        texto: "Se você passasse um dia inteiro sem telas, como se sentiria?",
        opcoes: [
            { valor: "A", texto: "Tranquilo(a), encontraria outras coisas para fazer" },
            { valor: "B", texto: "Com tédio, mas daria um jeito" },
            { valor: "C", texto: "Ansiedade a mil e com vontade de usar" },
        ],
    },
    {
        id: 9,
        texto: "Você costuma sentir cansaço, dor nos olhos ou sono ruim depois de muito tempo nas telas?",
        opcoes: [
            { valor: "A", texto: "Não" },
            { valor: "B", texto: "Às vezes" },
            { valor: "C", texto: "Sim, frequentemente" },
        ],
    },
    {
        id: 10,
        texto: "Você conversa com alguém da sua família sobre quanto tempo passa nas telas e combinam limites juntos?",
        opcoes: [
            { valor: "A", texto: "Sim, temos combinado" },
            { valor: "B", texto: "Às vezes conversamos" },
            { valor: "C", texto: "Não costumo falar sobre isso" },
        ],
    },

];

export default function Quiz() {
    const { Title, Text } = Typography
    const [indice, setIndice] = useState(0);
    const [resposta, setResposta] = useState("");
    const [contagem, setContagem] = useState({ A: 0, B: 0, C: 0 });
    const [finalizado, setFinalizado] = useState(false);

    const perguntaAtual = perguntas[indice];

    const proximaPergunta = () => {
        if (!resposta) {
            message.warning("Escolha uma opção antes de continuar!")
            return;
        }

        setContagem((prev) => ({
            ...prev,
            [resposta]: prev[resposta] + 1,
        }));

        setResposta("");

        if (indice + 1 < perguntas.length) {
            setIndice(indice + 1);
        } else {
            setFinalizado(true);
        }
    };

    const handleRestart = () => {
        setIndice(0);
        setContagem({ A: 0, B: 0, C: 0 });
        setResposta('');
        setFinalizado(false);
    };
    if (finalizado) {
        const maisEscolhida = Object.entries(contagem).reduce((a, b) =>
            a[1] > b[1] ? a : b
        )[0];

        const mensagens = {
            A: {
                titulo: '🟢 Controle equilibrado 🟢',
                subtitulo: 'Você está usando as telas de forma saudável!',
                mensagem: 'Sabe aproveitar o mundo digital, mas também valoriza o tempo fora dele. Continue assim: faça pausas, durma bem e mantenha o controle nas suas mãos!'
            },
            B: {
                titulo: '🟡 Atenção ao equilíbrio 🟡',
                subtitulo: 'Você usa as telas de forma moderada, mas às vezes elas dominam um pouco seu tempo',
                mensagem: 'Tente criar momentos sem tela, especialmente antes de dormir e nas refeições. Assim você vai ter mais energia e tempo para outras experiências reais'
            },
            C: {
                titulo: '🔴 Cuidado! Uso excessivo 🔴',
                mensagem: 'As telas estão ocupando mais espaço do que deveriam\nTente estabelecer horários, fazer pausas, brincar ao ar livre e conversar mais com amigos e família. Lembre-se: o controle pode, e deve, estar nas suas mãos!'
            },
        }

        return (
            <Card
            >
                <Space direction="vertical" align="center">

                    <Title level={1}>RESULTADO</Title>
                    <Title level={2}>{mensagens[maisEscolhida].titulo}</Title>
                    <Title level={3}>{mensagens[maisEscolhida].subtitulo}</Title>

                    <Text>{mensagens[maisEscolhida].mensagem}</Text>

                    <Card>
                        <Text>Obrigado por participar!</Text>
                    </Card>

                    <Button
                        type="primary"
                        onClick={handleRestart}
                    >
                        Refazer Quiz
                    </Button>
                </Space>
            </Card>
        );
    }


    return (
        <Layout>
            <Progress
                percent={Math.round(((indice + 1) / perguntas.length) * 100)}
                showInfo={false}
            />
            <Card>
                <Space direction="vertical" align="center">
                    <Title level={3}>
                        Pergunta {indice + 1} de {perguntas.length}
                    </Title>
                    <Text>{perguntaAtual.texto}</Text>

                    <Radio.Group
                        onChange={(e) => setResposta(e.target.value)}
                        value={resposta}
                        optionType="button"
                        options={perguntaAtual.opcoes.map((opcao, index) => ({
                            label: opcao.texto,
                            value: opcao.valor
                        }))}
                    />


                    <Button
                        type="primary"
                        block
                        onClick={proximaPergunta}
                    >
                        {indice + 1 < perguntas.length ? "Próxima" : "Finalizar"}
                    </Button>
                </Space>
            </Card>
        </Layout>
    );
}
