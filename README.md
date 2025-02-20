# Projeto OrganizaAi

Interace desenvolvida para organização e gerenciamento de produtos usando a  **[FakeStore Api](https://fakestoreapi.com/)** 

## 🚀 Começando

Inicialmente foi desenvolvido a identidade visual do projeto:

**[Veja a identidade](https://www.behance.net/gallery/219774897/OrganizaAi-Identidade-Visual)**

Depois foi feito o protótipo das telas
* o protótipo contêm diferentes itens da versão codificada pois se trata apenas de uma pré visualização.

**[Veja o protótipo](https://www.figma.com/design/eNB2VXOZdDMmzRH6XSnJBo/prot%C3%B3tipo-OrganizaA%C3%AD?node-id=0-1&t=OUpgMmzLBiI2yM5Q-1)**

### 📋 Pré-requisitos
Instalar Node.js

```
nodejs.org/pt
```

### 🔧 Instalação

Para rodar o código siga esse passo a passo:

```
1° git clone https://github.com/abbarbosa/projeto-organizaai.git
```

```
2° npm i 
```
```
3° npm run dev
```




## 🛠️ Construído com

As ferramentas utiliazdas para o projeto foram:


* [NextJs](https://nextjs.org/) -  framework de desenvolvimento web
* [React](https://react.dev) - biblioteca JavaScript em SPA(Single Page  Applications)
* [Typescript](https://www.typescriptlang.org) - linguagem fortemente tipada

Além disso também foram utilizadas outras bibiliotecas:

* [Axios](https://axios-http.com) - requisições
* [Lottie](lottiefiles.com) - ícones animados
* [MUI](https://mui.com) -layout, reponsividade e toats
* [Recharts](https://recharts.org/en-US/) - desenvolvimento dos gráficos


## ✒️ Autor 

Esse projeto foi desenvolvido por Anna Beatriz Barbosa e dividido nas etapas de:

* **Identidade visual**
* **Prototipação**
* **Desenvolvimento** 

Você também pode [ver mais](https://annabiadesign.vercel.app) dos meus projetos

## 🖥️ Desenvolvimento

### Login:

* O usuário pode fazer login com seu username e senha salvos no local storage após uma verificação Axios com a api para saber se o usuário possui um token válido

### Cadastro:

* O usuário pode fazer cadastro com seu nome, email, senha e username que será salvo no local storage.

### Dashboard:

* Dois gráficos que mostram produtos por categoria e  distribuição de produtos por preços usando a biblioteca Recharts para gráficos.

### Produtos:

* Tela que lista todos os produtos com opção de filtrar por categoria além das opções de deletar e editar produto que usa a biblioteca MUI para responsividade e toats de ações.

### Detalhes do produto:
* Tela que mostra os detalhes do produto com base no id que passa na rota com opção de deletar o item.

#### Header:

* Presente em todas as telas exceto as de autenticação mas contêm o logotipo, as rotas pra produtos e dahsboard e uma botão para sair da sessão que remove o token.

##### Extra:

* Vale destacar que todas as telas precisam de autenticação para serem acessadas

## 📄 Licença

Todos os direitos reservados

---
Obrigada por chegar até aqui! [Veja outros repositórios](https://github.com/abbarbosa?tab=repositories) 😊
