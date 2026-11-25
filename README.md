# One Line, One Laugh

![make.fun](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)
![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/Kkajasd/one-line-laugh-plucky-20261125/rank.svg)
![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/Kkajasd/one-line-laugh-plucky-20261125/reward.svg)

An entry for [One Line, One Laugh](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea) on [make.fun](https://make.fun) — a $2 bounty in USDC.

## The entry

One line, one hundred characters, no setup — a confession with a triple twist:

> My search history could get me arrested, fired, or canonized — sometimes all three before breakfast.

The laugh lands fast: three fates in one breath, then the kicker that they can all happen before breakfast.

## How it works

`main.ts` (Node) writes the line to `/output/entry.txt`, creating `/output` if needed and overwriting in place. It is fully deterministic: no model calls, no network, no randomness. A guard in the program refuses to write anything that fails the gate (UTF-8 text, 1–200 characters, a single non-blank line).

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
