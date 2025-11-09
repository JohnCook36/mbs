import {
  ButtonLog,
  ButtonTitle,
  Container,
  Description,
  Input,
  InputComponentEmail,
  InputComponentPassword,
  InputComponents,
  Title,
  TitleComponent,
  Wrapper,
} from "./index.styles.ts";

export function SignIn() {
  return (
    <Wrapper>
      <Container>
        <TitleComponent>
          <Title> Вход в MyBookShelf</Title>
        </TitleComponent>
        <button color="secondary">
          <ButtonTitle>Войти через Google</ButtonTitle>
        </button>
        <Description>или</Description>

        <InputComponents>
          <InputComponentEmail>
            <Input
              title="Почта"
              placeholder="Введите почту"
              type="email"
              name="email"
            />
          </InputComponentEmail>

          <InputComponentPassword>
            <Input
              placeholder="Введите пароль"
              type="password"
              name="password"
            />
          </InputComponentPassword>
        </InputComponents>
        <ButtonLog color="primary">Войти</ButtonLog>
      </Container>
    </Wrapper>
  );
}
