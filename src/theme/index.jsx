'use client'

import React from 'react'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/locale/pt_BR';

export default function ThemeProvider({ children }) {
    return (
        <ConfigProvider locale={ptBR}
            theme={{
                token: {
                    fontFamily: 'var(--font-principal)',
                    colorText: '#fddafd',
                },
                components: {
                    Button: {
                        defaultBg: 'transparent',
                        defaultBorderColor: '#fddafd',

                        defaultHoverBorderColor: 'transparent',
                        defaultHoverBg: '#fddafd',
                        defaultHoverColor: '#000000dd',
                    },
                }
            }}>

            {children}
        </ConfigProvider >
    )
}