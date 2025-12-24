import { useEffect, useRef, useState } from "react";
import { useCalcPriceMutation } from "@/api/exchangeApi";
import type { CalcResponse } from "@/common/types";
import { roundNumber } from "@/common/utils";

const RUR_MIN = 10_000;
const RUR_MAX = 70_000_000;
const RUR_STEP = 100;
const ETH_STEP = 0.01; // вопрос по поводу шести знаков после запятой - бэк округляет до двух всегда ??
const DELAY = 300;

export function useCalculator() {
  const [calcPrice, isLoading] = useCalcPriceMutation();
  const [isError, setIsError] = useState(false);

  const [eth, setEth] = useState(0);
  const [rur, setRur] = useState(RUR_MIN);

  const [ethMin, setEthMin] = useState(0);
  const [ethMax, setEthMax] = useState(0);

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestId = useRef(0);

  const numericData = (data: CalcResponse) => ({
    inAmount: Number(data.inAmount),
    outAmount: Number(data.outAmount),
    price: [Number(data.price[0]), Number(data.price[1])],
  });

  const updateValues = (data: CalcResponse) => {
    const { inAmount, outAmount, price } = numericData(data);

    setRur(inAmount);
    setEth(outAmount);

    setEthMin(roundNumber(RUR_MIN * price[0]));
    setEthMax(roundNumber(RUR_MAX * price[0]));
  };

  const debounce = (func: () => void, delay = DELAY) => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(func, delay);
  };

  const calc = async (direction: "rur" | "eth", value: number) => {
    const id = ++requestId.current;

    try {
      setIsError(false);

      const data = await calcPrice({
        inAmount: direction === "rur" ? value : null,
        outAmount: direction === "eth" ? value : null,
      }).unwrap();

      if (id !== requestId.current) return;
      updateValues(data);

      return data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      if (id !== requestId.current) return;

      setIsError(true);
    }
  };

  const onEthChange = (value: number) => {
    const stepped = Number(
      (Math.round(value / ETH_STEP) * ETH_STEP).toFixed(6)
    );
    setEth(stepped);

    debounce(() => calc("eth", stepped));
  };

  const onRurChange = (value: number) => {
    const stepped = Math.round(value / RUR_STEP) * RUR_STEP;
    setRur(stepped);

    debounce(() => calc("rur", stepped));
  };

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      const data = await calc("rur", RUR_MIN);
      if (cancelled || !data) return;
    };

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return {
    rur: {
      value: rur,
      min: RUR_MIN,
      max: RUR_MAX,
      step: RUR_STEP,
      onChange: onRurChange,
    },
    eth: {
      value: eth,
      min: ethMin,
      max: ethMax,
      step: ETH_STEP,
      onChange: onEthChange,
    },
    isLoading,
    isError,
  };
}
