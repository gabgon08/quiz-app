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
                    colorText: '#fadefa',
                },
                components: {
                    Button: {
                        defaultBg: 'transparent',
                        defaultBorderColor: '#fadefa',

                        defaultHoverBorderColor: 'transparent',
                        defaultHoverBg: '#E6FF47',
                        defaultHoverColor: '#000000dd',
                    },
                    Progress: {
                        defaultColor: '#E6FF47'
                    }
                }
            }}>

            {children}
        </ConfigProvider >
    )
}