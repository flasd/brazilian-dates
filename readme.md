# @flasd/brazilian-dates

Este é um README para a biblioteca `@flasd/brazilian-dates`, uma ferramenta utilitária que fornece funções para manipular e verificar datas no contexto brasileiro.

## Funções:

A biblioteca exporta as seguintes funções:

- `isBrazilianHoliday(date: Date, stateCode?: string)`: Verifica se a data fornecida é um feriado no Brasil. A verificação pode ser mais específica se o código de estado for fornecido (ex: 'SP' para São Paulo, 'RJ' para Rio de Janeiro, etc).
- `isBrazilianBusinessDay(date: Date, stateCode?: string)`: Verifica se a data fornecida é um dia útil no Brasil. Assim como a função anterior, a verificação pode ser mais específica se o código de estado for fornecido.
- `formatToBrazilianDate(date: Date)`: Formata a data fornecida para o formato brasileiro (dd/mm/aaaa).

- `parseFromBrazilianDate(date: string)`: Converte uma data no formato brasileiro para um objeto Date do JavaScript.

## Como instalar

Você pode instalar esta biblioteca através do npm com o seguinte comando:

```bash
yarn add @flasd/brazilian-dates
```

## Como usar

Aqui estão alguns exemplos de como usar as funções:

```javascript
import {
  isBrazilianHoliday,
  isBrazilianBusinessDay,
  formatToBrazilianDate,
  parseFromBrazilianDate,
} from "@flasd/brazilian-dates"

const date = new Date()

// Verifica se uma data é um feriado brasileiro
if (isBrazilianHoliday(date)) {
  console.log("Hoje é feriado no Brasil!")
}

// Verifica se uma data é um dia útil brasileiro
if (isBrazilianBusinessDay(date)) {
  console.log("Hoje é um dia útil no Brasil!")
}

// Formata uma data para o formato brasileiro
const formattedDate = formatToBrazilianDate(date)
console.log(`A data atual no formato brasileiro é: ${formattedDate}`)

// Converte uma data do formato brasileiro para um objeto Date
const parsedDate = parseFromBrazilianDate("31/12/2023")
console.log(parsedDate)
```

Espero que esta biblioteca seja útil para você! Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma issue no nosso repositório do GitHub.
