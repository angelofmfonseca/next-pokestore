import Head from "next/head";
import * as S from "./styles";

const Template = ({ children }) => {
  return (
    <S.Wrapper>
      <Head>
        <title>Superheroes App</title>
        <meta name="description" content="Superheroes app" />
      </Head>
      <S.Title>Superheroes</S.Title>
      <main>{children}</main>
      <footer>
        <span>Developed by Angelo Machado Fonseca</span>
      </footer>
    </S.Wrapper>
  );
};

export default Template;