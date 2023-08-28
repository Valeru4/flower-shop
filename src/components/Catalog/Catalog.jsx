export const Catalog = () => {
  return (
    <section>
      <div>
        <label for="price">Ціна</label>
        <select id="price" name="price">
          <option value="lessThan200">меньше 200 грн</option>
          <option value="200To500">200 - 500 грн</option>
          <option value="moreThan1000">больше 1000 грн</option>
        </select>
      </div>
    </section>
  );
};
