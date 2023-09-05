export const Catalog = () => {
  return (
    <section>
      <div>
        <div>
          <label for="price">Ціна</label>
          <select id="price" name="price">
            <option value="lessThan200">меньше 200 грн</option>
            <option value="200To500">200 - 500 грн</option>
            <option value="moreThan1000">больше 1000 грн</option>
          </select>
          <button type="submit">Застосувати</button>
        </div>

        <div>
          <label for="flowers">Квіти</label>
          <select id="flowers" name="flowers">
            <option value="rose">Троянда</option>
            <option value="eustoma">Еустома</option>
            <option value="chrysanthemum">Хризантема</option>
            <option value="lily">Лілія</option>
            <option value="tulip">Тюльпан</option>
            <option value="hydrangea">Гортензія</option>
            <option value="alstroemeria">Альстромерія</option>
          </select>
          <button type="submit">Застосувати</button>
        </div>
        <div>
          <label for="toWhom">Кому</label>
          <select name="toWhom" id="toWhom">
            <option value="woman">Жінці</option>
            <option value="man">Чоловіку</option>
          </select>
          <button type="submit">Застосувати</button>
        </div>
        <div>
          <label for="occasion">Привід</label>
          <select name="occasion" id="occasion">
            <option value="birthday">День народження</option>
            <option value="wedding">Весілля</option>
            <option value="love">Кохання</option>
            <option value="empathize">Співчуваю</option>
          </select>
          <button type="submit">Застосувати</button>
        </div>
        <div>
          <label for="style">
            <select name="style" id="style">
              <option value="free">Вільний</option>
              <option value="frame">Каркасний</option>
              <option value="box">В коробці</option>
              <option value="basket">В кошику</option>
              <option value="cascading">Каскадний</option>
            </select>
          </label>
          <button type="submit">Застосувати</button>
        </div>
      </div>

      <h2>Хіт продажів</h2>
      <ul>
        <li>
          <img src="./assets/flowers/image1.jpg" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </section>
  );
};
