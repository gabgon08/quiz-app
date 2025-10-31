'use client'

import React, { useState } from "react";
import { Radio, Button, Card, Progress } from "antd";

const perguntas = [
    {
        id: 1,
        texto: "Qual cor você prefere?",
        opcoes: [
            { valor: "A", texto: "Azul" },
            { valor: "B", texto: "Vermelho" },
            { valor: "C", texto: "Verde" },
        ],
    },
    {
        id: 2,
        texto: "Qual estilo de música você mais gosta?",
        opcoes: [
            { valor: "A", texto: "Pop" },
            { valor: "B", texto: "Rock" },
            { valor: "C", texto: "MPB" },
        ],
    },
    {
        id: 3,
        texto: "Qual refeição você mais gosta?",
        opcoes: [
            { valor: "A", texto: "Café da manhã" },
            { valor: "B", texto: "Almoço" },
            { valor: "C", texto: "Jantar" },
        ],
    },
    // ... adicione até 10 perguntas se quiser
];

export default function Quiz() {
    const [indice, setIndice] = useState(0); // pergunta atual
    const [resposta, setResposta] = useState(""); // resposta escolhida
    const [contagem, setContagem] = useState({ A: 0, B: 0, C: 0 });
    const [finalizado, setFinalizado] = useState(false);

    const perguntaAtual = perguntas[indice];

    const proximaPergunta = () => {
        if (!resposta) {
            alert("Escolha uma opção antes de continuar!");
            return;
        }

        // Atualiza contagem
        setContagem((prev) => ({
            ...prev,
            [resposta]: prev[resposta] + 1,
        }));

        setResposta(""); // limpa seleção

        if (indice + 1 < perguntas.length) {
            setIndice(indice + 1); // vai pra próxima
        } else {
            setFinalizado(true); // terminou
        }
    };

    const handleRestart = () => {
        setIndice(0);
        setContagem({ A: 0, B: 0, C: 0 });
        setResposta('');
        setFinalizado(false);
    };
    if (finalizado) {
        return (
            <Card style={{ maxWidth: 600, margin: "0 auto", marginTop: 40, textAlign: "center" }}>
                <h2>Resultado do Quiz</h2>
                <p>Você escolheu:</p>
                <p>A: {contagem.A} vezes</p>
                <p>B: {contagem.B} vezes</p>
                <p>C: {contagem.C} vezes</p>
                <p>
                    Opção mais escolhida:{" "}
                    <b>
                        {
                            Object.entries(contagem).reduce((a, b) =>
                                a[1] > b[1] ? a : b
                            )[0]
                        }
                    </b>
                </p>
                <Button
                    type="primary"
                    onClick={handleRestart}
                    style={{ marginTop: 24 }}
                >
                    Refazer Quiz
                </Button>
            </Card>
        );
    }


    return (
        <Card style={{ maxWidth: 600, margin: "0 auto", marginTop: 40 }}>
            <h3>
                Pergunta {indice + 1} de {perguntas.length}
            </h3>
            <p>{perguntaAtual.texto}</p>

            <Radio.Group
                onChange={(e) => setResposta(e.target.value)}
                value={resposta}
                style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}
            >
                {perguntaAtual.opcoes.map((op) => (
                    <Radio key={op.valor} value={op.valor}>
                        {op.texto}
                    </Radio>
                ))}
            </Radio.Group>

            <Progress
                percent={Math.round(((indice + 1) / perguntas.length) * 100)}
                showInfo={false}
            />

            <Button type="primary" block onClick={proximaPergunta}>
                {indice + 1 < perguntas.length ? "Próxima" : "Finalizar"}
            </Button>

        </Card>
    );
}
