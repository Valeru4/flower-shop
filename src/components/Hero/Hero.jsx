import { SpanFirst, SpanSecond, Title, Wrapper } from './Hero.styled';

export const Hero = () => {
  return (
    <section>
      <Wrapper>
        <Title>
          Неймовірні
          <br />
          <SpanSecond>БУКЕТИ </SpanSecond>зі свіжих квітів
        </Title>
        <button type="button">ЗАМОВИТИ КВІТИ</button>
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
    </section>
  );
};
