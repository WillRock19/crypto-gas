## Introduction

## What is this project about?

## Our technologies

### Client-side

We use ReactJs created with [Vite Js](https://vitejs.dev/guide/why.html) tooling instead of webpack. The idea here is first of all test vite js, since using it is probably an overkill for the objectives of this project.

Cotação dólar obtida em: Direto do [Banco central](https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/recursos/CotacaoDolarDia#eyJmb3JtdWxhcmlvIjp7IiRmb3JtYXQiOiJqc29uIiwiJHRvcCI6MTAwLCJkYXRhQ290YWNhbyI6IjA1LTA0LTIwMjIifSwicHJvcHJpZWRhZGVzIjpbMCwxXSwicGVzcXVpc2FkbyI6dHJ1ZSwiYWN0aXZlVGFiIjoidGFibGUiLCJncmlkU3RhdGUiOnsDMAM6W3sDQgMiBDAEIiwDQQN9LHsDQgMiBDEEIiwDQQN9XSwDMQM6e30sAzIDOltdLAMzAzp7fSwDNAM6e30sAzUDOnt9fSwicGl2b3RPcHRpb25zIjp7A2EDOnt9LANiAzpbXSwDYwM6NTAwLANkAzpbXSwDZQM6W10sA2YDOltdLANnAzoia2V5X2FfdG9feiIsA2gDOiJrZXlfYV90b196IiwDaQM6e30sA2oDOnt9LANrAzo4NSwDbAM6ZmFsc2UsA20DOnt9LANuAzp7fSwDbwM6IkNvbnRhZ2VtIiwDcAM6IlRhYmxlIn19), porém, caso a API deles desmonstre estar fora do ar (o que aconteceu algumas vezes), usamos de fallback as APIs do [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas).

Cotação de ETH obtida em: Obtido através de uma requisição para o Infura que é direcionada para dentro da Ethereum SmartChain, extraímos a cotação atual do ETH usando este [SmartContract](https://etherscan.io/address/0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419#code), sugerido na [documentação da Chainlink](https://docs.chain.link/docs/ethereum-addresses/).

GasFees obtida em: Obtido diretamente da Etherscan através de uma [API que retorna os dados de Gás](https://docs.etherscan.io/api-endpoints/gas-tracker) para transações rápidas, médias e lentas.

### Smart contract

We use [Solidity](https://docs.soliditylang.org/en/v0.8.11/) programming language.

## How to run?

