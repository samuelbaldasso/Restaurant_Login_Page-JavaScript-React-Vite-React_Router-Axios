# Restaurant Login Page - JavaScript, React, Vite, React Router, Axios

## Sobre o Projeto

O **Restaurant Login Page** é uma aplicação desenvolvida com **React** e **Vite**, projetada para fornecer uma interface amigável de login para um sistema de gerenciamento de restaurante. O projeto utiliza **React Router** para navegação, **Axios** para consumo de APIs e segue práticas modernas de desenvolvimento frontend.

---

## Tecnologias Utilizadas

- **JavaScript**: Linguagem principal do projeto.
- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta para configuração e execução rápida de projetos React.
- **React Router**: Gerenciamento de rotas e navegação.
- **Axios**: Consumo de APIs REST.

---

## Funcionalidades Principais

- **Tela de Login**: Formulário para autenticação de usuários.
- **Validação de Formulário**: Campos obrigatórios com validação de entrada.
- **Integração com API**: Envio de dados de login para o backend via Axios.
- **Navegação Protegida**: Redirecionamento baseado em autenticação.

---

## Pré-requisitos

- **Node.js 14 ou superior**
- **NPM ou Yarn**

---

## Como Executar o Projeto

### 1. Clone o Repositório
```bash
git clone https://github.com/samuelbaldasso/Restaurant_Login_Page-JavaScript-React-Vite-React_Router-Axios.git
```

### 2. Navegue para o Diretório do Projeto
```bash
cd Restaurant_Login_Page-JavaScript-React-Vite-React_Router-Axios
```

### 3. Instale as Dependências
```bash
npm install
# ou
yarn install
```

### 4. Inicie o Servidor de Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

### 5. Acesse no Navegador
Abra o navegador e navegue para `http://localhost:5173`.

---

## Estrutura do Projeto

```plaintext
Restaurant-Login-Page/
├── public/                   # Arquivos estáticos
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── LoginForm.jsx     # Formulário de login
│   │   └── Navbar.jsx        # Barra de navegação
│   ├── pages/                # Páginas principais
│   │   └── LoginPage.jsx     # Tela de login
│   ├── routes/               # Configuração de rotas
│   │   └── PrivateRoute.jsx  # Rota protegida
│   ├── services/             # Integração com APIs (Axios)
│   │   └── api.js            # Configuração do Axios
│   ├── App.jsx               # Componente principal
│   └── main.jsx              # Ponto de entrada
├── package.json              # Configuração do projeto
├── vite.config.js            # Configuração do Vite
└── README.md                 # Documentação
```

---

## Próximos Passos

- **Recuperação de Senha**: Implementar funcionalidade para recuperação de senha.
- **Design Responsivo**: Melhorar a interface para dispositivos móveis.
- **Autenticação com Tokens**: Implementar autenticação JWT para maior segurança.
- **Testes Automatizados**: Adicionar cobertura de testes unitários e de integração.

---

## Contribuindo

Contribuições são sempre bem-vindas! Para colaborar:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona minha feature'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).
