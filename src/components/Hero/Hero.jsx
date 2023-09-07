import {
  Button,
  Section,
  SpanSecond,
  Text,
  Title,
  Wrapper,
} from './Hero.styled';

export const Hero = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          Неймовірні
          <br />
          <SpanSecond>БУКЕТИ </SpanSecond>зі свіжих квітів
        </Title>
        <Text>З Доставкою По Києву Протягом 1 Години</Text>
        <Button type="button">ЗАМОВИТИ КВІТИ</Button>
      </Wrapper>
      <ul>
        <li>
          <svg>
            <use href=""></use>
          </svg>
          <p>Щоденне оновлення свіжих квітів</p>
        </li>
        <li>
          <svg>
            <use href=""></use>
          </svg>
          <p>безкоштовна доставка в будь яку точку міста</p>
        </li>
        <li>
          <svg>
            <use href=""></use>
          </svg>
          <p>більше 1000 сортів квітів з усього світу</p>
        </li>
      </ul>
    </Section>
  );
};
