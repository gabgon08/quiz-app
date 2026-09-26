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
                    colorText: '#ffffff',
                },
                components: {
                    Button: {
                        defaultBg: 'transparent',
                        defaultBorderColor: '#ffffff',

                        defaultHoverBorderColor: 'transparent',
                        defaultHoverBg: '#ffffff',
                        defaultHoverColor: '#000000dd',

                        textHoverBg: '#ffffff',
                        textTextHoverColor: '#000000dd'
                    },
                    Progress: {
                        defaultColor: '#ffffff'
                    },
                    Card: {
                        bodyPaddingSM: 16
                    }
                }
            }}>

            {children}
        </ConfigProvider >
    )
}