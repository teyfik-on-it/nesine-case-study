import clsx from "clsx";
import { get } from "lodash-es";
import { useCallback, useMemo, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useBasket } from "../../utils/BasketProvider";
import styles from "./Basket.module.scss";

export default function Basket() {
  const { items, select } = useBasket();
  const total = useMemo(
    () => (
      <NumericFormat
        decimalScale={2}
        decimalSeparator=","
        displayType={"text"}
        fixedDecimalScale
        suffix=" TRY"
        thousandSeparator="."
        value={items.reduce((p, c) => p * parseFloat(get(c.bet, c.prop)), 1)}
      />
    ),
    [items],
  );
  const [show, setShow] = useState(false);
  const toggle = useCallback(() => setShow((prev) => !prev), []);

  if (items.length > 0) {
    return (
      <section
        className={clsx(styles.basket, show ? styles.show : styles.hide)}
      >
        <header className={styles.header}>
          <h2 className={styles.title}>Sepet</h2>

          {show ? null : (
            <div>
              <span className={styles.totalLabel}>Toplam Tutar: </span>
              <span>{total}</span>
            </div>
          )}

          <span className={styles.action} onClick={toggle}>
            {show ? "Gizle" : "Göster"}
          </span>
        </header>

        <div className={styles.divider} />

        <main role="list" className={styles.list}>
          {items.map(({ bet, prop }) => (
            <li key={bet.C} className={styles.item}>
              <span>{bet.OCG["1"].MBS}</span>
              <span>Kod: {bet.C}</span>
              <span>Maç: {bet.N}</span>
              <span className={styles.odds}>Oran: {get(bet, prop)}</span>

              <button
                onClick={() => select(bet, prop)}
                className={styles.removeItem}
              >
                Sil
              </button>
            </li>
          ))}
        </main>

        <div className={styles.divider} />

        <footer>
          <span className={styles.totalLabel}>Toplam Tutar: </span>
          <span>{total}</span>
        </footer>
      </section>
    );
  }

  return (
    <section className={clsx(styles.basket, show ? styles.show : styles.hide)}>
      <header className={styles.header}>
        <h2 className={styles.title}>Sepet</h2>

        {show ? null : <span>Seçili bahis yok</span>}

        <span className={styles.action} onClick={toggle}>
          {show ? "Gizle" : "Göster"}
        </span>
      </header>

      <div className={styles.divider} />

      <main>
        <p>Seçili bahis yok</p>
      </main>
    </section>
  );
}
