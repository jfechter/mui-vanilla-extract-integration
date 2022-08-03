import type { NextPage } from "next"
import Head from "next/head"

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  styled,
} from "@mui/material/styles"

import Button from "@mui/material/Button"

import * as styles from "../styles/homepage.css"

const theme = extendTheme({})

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainContainer}>
        <CssVarsProvider theme={theme}>
          <Button
            variant="contained"
            // classes={{
            //   contained: styles.customButton,
            // }}
          >
            My button
          </Button>
        </CssVarsProvider>
      </div>
    </div>
  )
}

export default Home
