export const RequestForm = () => {
  return (
    <section>
      <h2> Не можете визначитись з вибором букету?</h2>
      <p>Відправте заявку і Вам зателефонують протягом однієї хвилини</p>
      <form>
        <label>
          <input type="text" name="name" autofocus />
        </label>
        <label>
          <input type="tel" name="phone" autofocus />
        </label>
        <button type="submit">Залишити заявку</button>
      </form>
      <div>
        <h3>Наш менеджер:</h3>
        <ul>
          <li>
            <svg>
              <use></use>
            </svg>
            <p>Відповість на будь-які запитання</p>
          </li>
          <li>
            <svg>
              <use></use>
            </svg>
            <p>Підбере рішення відповідно до ваших запитів та бажань</p>
          </li>
          <li>
            <svg>
              <use></use>
            </svg>
            <p>
              Підготує унікальну пропозицію та детально розповість Вам про наші
              букети
            </p>
          </li>
          <li>
            <svg>
              <use></use>
            </svg>
            <p>Оформить для Вас подарунок-сюрприз</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
