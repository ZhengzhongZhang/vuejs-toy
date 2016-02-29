export function valueToPoint (value, index, total) {
  const r = value * 0.8
  const angle = Math.PI * 2 / total * index
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  const tx = r * sin + 100
  const ty = -r * cos + 100
  return {
    x: tx,
    y: ty
  }
}

export let stats = [
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 }
]
