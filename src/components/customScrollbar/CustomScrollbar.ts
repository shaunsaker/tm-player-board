import { createGlobalStyle } from 'styled-components'

export const CustomScrollbar = createGlobalStyle`
    ::-webkit-scrollbar {
    width: 6px;
    }

    ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.white20};
    }

    ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.white60};
    }

    ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent};
    }
`
