"use client"

import "@/app/globals.css"
import MainContainer from "@/components/Container"
import { useTheme } from "@/styles/useTheme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps, router }: AppProps) {
  const theme = useTheme()

  if (router.pathname === "/") {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ThemeProvider>
  )
}
