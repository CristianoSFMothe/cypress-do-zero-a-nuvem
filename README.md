# Cypress: Do Zero à Nuvem ☁️

Este repositório contém a estrutura básica de testes automatizados utilizando o [Cypress](https://www.cypress.io/), com exemplos práticos como o "Central de Atendimento ao Cliente TAT" e a política de privacidade.

---

## 📂 Estrutura do Projeto

```plaintext
cypress-do-zero-a-nuvem/
├── cypress/
│   ├── e2e/
│   │   ├── CAC-TAT.cy.js          # Testes relacionados ao projeto principal (CAC-TAT)
│   │   └── privacyPolicy.cy.js    # Testes relacionados à política de privacidade
│   ├── fixtures/
│   │   └── example.json           # Arquivo de dados de entrada para testes
│   ├── support/
│       ├── commands.js            # Comandos personalizados para o Cypress
│       └── e2e.js                 # Configurações globais de suporte para testes
├── node_modules/                  # Dependências instaladas via npm
├── .gitignore                     # Arquivos e diretórios ignorados pelo Git
├── cypress.config.js              # Configuração do Cypress (caso esteja usando o Cypress v10+)
├── package.json                   # Dependências e scripts do projeto
├── package-lock.json              # Detalhes das dependências instaladas
└── README.md                      # Documentação do projeto
```

---

## 📖 Descrição da Estrutura

1. **📂 `cypress/e2e/`**

   - **`CAC-TAT.cy.js`**: Contém os testes principais do projeto "Central de Atendimento ao Cliente TAT".
   - **`privacyPolicy.cy.js`**: Testes relacionados à página de política de privacidade.

2. **📂 `cypress/fixtures/`**

   - **`example.json`**: Arquivo JSON contendo dados de entrada para os testes (como mocks ou valores estáticos).

3. **📂 `cypress/support/`**

   - **`commands.js`**: Arquivo onde comandos personalizados do Cypress são definidos.
   - **`e2e.js`**: Arquivo de configuração global, executado antes dos testes.

4. **📂 Arquivos e Diretórios Adicionais**:
   - **`node_modules/`**: Diretório de dependências do projeto.
   - **`.gitignore`**: Arquivo que define o que não deve ser versionado no Git.
   - **`cypress.config.js`**: Configuração principal do Cypress.
   - **`package.json`**: Lista de dependências e scripts npm do projeto.
   - **`README.md`**: Documentação para entender e configurar o projeto.

---

## 🚀 Como Usar

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/CristianoSFMothe/cypress-do-zero-a-nuvem.git
   cd cypress-do-zero-a-nuvem
   ```

2. **Instale as Dependências**:

   ```bash
   npm install
   ```

3. **Execute os Testes**:

   ```bash
   npx cypress open
   ```

4. **Estrutura de Testes**:
   - `CAC-TAT.cy.js`: Testa funcionalidades do sistema CAC-TAT.
   - `privacyPolicy.cy.js`: Garante que a política de privacidade é exibida corretamente.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar sugestões ou melhorias via [pull requests](https://github.com/CristianoSFMothe/cypress-do-zero-a-nuvem/pulls).

---

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

## 👨‍💻 Autor

Este projeto foi desenvolvido por **Cristiano S. F. Mothe**. Para mais informações, confira o portfólio abaixo:

- 🌐 <a href="https://portfolio-qa-cristiano.vercel.app/">**Portfólio**</a>

- 💼 <a href="https://www.linkedin.com/in/cristiano-da-silva-ferreira/">**LinkedIn**</a>
