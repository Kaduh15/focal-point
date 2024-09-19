# Focal Point

## Descrição do Projeto

Focal Point é uma aplicação simples de lista de tarefas para o dia atual, desenvolvida como parte de um desafio para uma vaga na Legaplan. O objetivo foi replicar o design apresentado no Figma, criando uma interface amigável e funcional.

### Link do Projeto

- [Legaplan](https://www.legaplan.com.br/)
- [Design Figma](https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=V2Bhqt5xjlKz6MSy-0)
- [Deploy no Render](https://focal-point.onrender.com)  
  *Aguarde alguns segundos ao acessar, pois o serviço pode demorar a inicializar após inatividade.*

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web.
- **Sass**: Pré-processador CSS para estilização.
- **ZSA**: Para a criação das server actions.
- **Drizzle ORM**: Para interações com o banco de dados.
- **Zod**: Para validação de dados.

## Como Rodar o Projeto Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Kaduh15/focal-point.git
   ```

2. **Entre na pasta do projeto**:
   ```bash
   cd focal-point
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Rode a aplicação**:
   ```bash
   npm run dev
   ```

   Acesse a aplicação no seu navegador em `http://localhost:3000`.

### Rodando com Docker

1. **Clone o repositório** e entre na pasta do projeto:
   ```bash
   git clone https://github.com/Kaduh15/focal-point.git
   cd focal-point
   ```

2. **Crie a imagem com o Dockerfile** que está na raiz do projeto e suba o container:
   ```bash
   docker build -t focal-point .
   docker run -p 3000:3000 -v $(pwd)/sqlite.db:/app/sqlite.db focal-point
   ```

## Considerações Finais

Este projeto foi uma experiência desafiadora e enriquecedora. O objetivo de criar uma aplicação próxima ao design do Figma, utilizando Sass, foi uma oportunidade incrível de aprendizado, pois trabalhei com uma ferramenta que nunca tinha utilizado antes. Acredito que a experiência adquirida ao longo do desenvolvimento será valiosa para minha carreira.

## Contribuições

Sinta-se à vontade para contribuir ou sugerir melhorias!