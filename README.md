# Frontend Mentor - Mortgage repayment calculator

![Design preview for the Mortgage repayment calculator coding challenge](./preview.jpg)
<div align="center">
    <a href="https://calculadora-hipoteca-ten.vercel.app/" target="_blank">Visualizar o projeto</a>
</div>

# Calculadora de Hipoteca

## Descrição

A Calculadora de Hipoteca é uma ferramenta interativa que permite aos usuários calcular o pagamento mensal de uma hipoteca e o valor total do pagamento após o envio do formulário. Utilizando Tailwind CSS, a aplicação é estilizada para ser responsiva e acessível em diferentes dispositivos e tamanhos de tela.

## Funcionalidades

- **Cálculo de Pagamento:** Insira as informações da hipoteca (valor do empréstimo, taxa de juros e prazo) e veja o pagamento mensal e o valor total do pagamento.
- **Validação do Formulário:** Receba mensagens de validação se algum campo estiver incompleto ou com informações inválidas.
- **Acessibilidade pelo Teclado:** Preencha o formulário utilizando apenas o teclado.
- **Responsividade:** A interface, estilizada com Tailwind CSS, se ajusta automaticamente ao tamanho da tela do dispositivo.
- **Estados de Foco:** Todos os elementos interativos na página têm estados de foco e desfoco bem definidos para melhorar a usabilidade.

## Tecnologias Usadas

- **HTML5** para a estrutura da página.
- **Tailwind CSS** para o estilo e design responsivo.
- **JavaScript** para a lógica de cálculo e validação do formulário.

## Instalação

Para rodar este projeto localmente, siga estes passos:

1. **Clone o Repositório:**

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. **Navegue até o Diretório do Projeto:**

    ```bash
    cd nome-do-repositorio
    ```

3. **Instale as Dependências:**

    Se você ainda não tiver o Node.js e o npm instalados, faça isso primeiro. Em seguida, instale as dependências do projeto:

    ```bash
    npm install
    ```

4. **Compile o CSS com Tailwind:**

    Certifique-se de ter o Tailwind CSS configurado. Para compilar o CSS, use:

    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```

5. **Abra o Arquivo HTML:**

    Abra `index.html` no seu navegador de preferência.

## Uso

1. **Preencha o Formulário:**
    - Insira o valor do empréstimo.
    - Insira a taxa de juros anual.
    - Insira o prazo da hipoteca em anos.

2. **Envie o Formulário:**
    - Clique no botão de envio para calcular o pagamento mensal e o valor total.

3. **Verifique os Resultados:**
    - Os valores calculados serão exibidos na interface.

4. **Valide os Campos:**
    - Se algum campo estiver vazio ou com informações inválidas, você verá mensagens de validação.

5. **Ajuste a Tela:**
    - Teste a responsividade ajustando o tamanho da tela para verificar como a interface se adapta.
