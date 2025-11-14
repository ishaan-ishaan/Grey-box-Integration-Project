// small shared utility used by both Node and GAS
export function add(a: number, b: number): number {
  return a + b;
}

export function nowIso(): string {
  return new Date().toISOString();
}
