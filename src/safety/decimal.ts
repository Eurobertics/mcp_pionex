const DECIMAL = /^\d+(?:\.\d+)?$/;

function parts(value: string): [bigint, number] {
  if (!DECIMAL.test(value)) throw new Error(`Invalid non-negative decimal value: ${value}`);
  const [integer = "0", fraction = ""] = value.split(".");
  return [BigInt(integer + fraction), fraction.length];
}

export function compareDecimals(left: string, right: string): number {
  const [leftValue, leftScale] = parts(left);
  const [rightValue, rightScale] = parts(right);
  const scale = Math.max(leftScale, rightScale);
  const normalizedLeft = leftValue * 10n ** BigInt(scale - leftScale);
  const normalizedRight = rightValue * 10n ** BigInt(scale - rightScale);
  return normalizedLeft < normalizedRight ? -1 : normalizedLeft > normalizedRight ? 1 : 0;
}
