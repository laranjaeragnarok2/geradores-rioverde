# Auditoria de Design e SEO - Geradores Rio Verde

**URL Analisada:** [https://geradoresrioverde.com.br/](https://geradoresrioverde.com.br/)

Esta auditoria detalha melhorias necessárias para elevar a qualidade do design (UX/UI), solucionar problemas técnicos críticos e otimizar o site para os mecanismos de busca (SEO) e performance.

---

## 🎨 1. Auditoria de Design (UX/UI)

Com base no layout atual e melhores práticas para empresas do setor industrial e de serviços:

### Imagens de Serviços (Desalinhadas e Pequenas)
*   **Problema:** As imagens para "Vendas e Instalações", "Manutenção", etc., estão pequenas, contêm bordas irregulares e algumas parecem estar com a proporção (aspect ratio) distorcida.
*   **Solução:** 
    *   Padronizar o tamanho e proporção de todas as imagens (ex: 4:3 ou 16:9).
    *   Aplicar um raio de borda suave (`border-radius: 8px`) para modernizar o visual.
    *   Fazer com que a imagem ocupe 100% da largura do seu respectivo "card".
    *   Adicionar um leve efeito de elevação (`box-shadow`) nos cards de serviço para destacar o conteúdo do fundo branco.

### Gestão de Espaço Branco (Whitespace)
*   **Problema:** Há um excesso de espaço vazio desnecessário, especialmente entre o bloco de "Produtos", o bloco de "Serviços" e entre as linhas da grade de serviços. A página parece longa sem justificativa.
*   **Solução:** Reduzir o uso de "Espaçadores" (Spacer widget) do Elementor e padronizar o *padding/margin* entre as seções. O conteúdo deve se agrupar de forma mais coesa.

### Hierarquia Visual e Call-to-Actions (CTAs)
*   **Problema:** O link "+ Veja todos os produtos" não tem aparência de um botão de ação primária (CTA). É apenas um texto sublinhado que não encoraja o clique.
*   **Solução:** Transformar "+ Veja todos os produtos" em um botão de tamanho adequado, com padding generoso, cor de fundo contrastante (ex: cor principal da marca) e efeito *hover* interativo.

### Rodapé (Footer) Incompleto
*   **Problema:** As colunas "Nossos Produtos" e "Links úteis" no rodapé estão vazias, contendo apenas os títulos. Isso transmite uma sensação de abandono ou de "site em construção".
*   **Solução:** Inserir os links correspondentes (Categorias de produtos, Política de Privacidade, Termos, etc.) ou remover essas colunas temporalmente, reorganizando o rodapé para utilizar o espaço disponível adequadamente.

---

## 💻 2. Auditoria Técnica (Código, Performance e SEO)

Analisando a estrutura HTML e a performance de carregamento:

### 🚨 Links Apontando para Ambiente de Teste (CRÍTICO)
*   **Problema:** Vários links no site de produção ainda apontam para o domínio de staging (`web2179.uni5.net`).
    *   Botão "+ Veja todos os produtos": Aponta para `http://geradoresrioverde.web2179.uni5.net/index.php/product-category/produtos/`.
    *   Link de email no rodapé: Em vez de `mailto:contato@geradoresrioverde.com.br`, ele aponta para `http://geradoresrioverde.web2179.uni5.net/index.php/shop/#`.
*   **Impacto:** Usuários são enviados para fora do site principal (podendo resultar em erro SSL ou páginas não existentes), e mecanismos de busca indexam URLs incorretas.
*   **Solução:** Executar um *Search & Replace* seguro no banco de dados do WordPress para substituir todas as ocorrências de `geradoresrioverde.web2179.uni5.net` pelo domínio oficial.

### 🔍 Falhas de SEO (Otimização para Buscadores)
*   **Problema:** Ausência da tag `<meta name="description">` na página inicial.
*   **Impacto:** O Google não exibe um resumo controlado nos resultados de busca, diminuindo a taxa de clique (CTR).
*   **Solução:** Instalar um plugin de SEO (Yoast SEO ou RankMath) e configurar a meta description da página Home.
*   **Problema:** Falta de atributos `alt` descritivos em várias imagens.
*   **Impacto:** Perda de oportunidade de ranqueamento no Google Imagens e problemas de acessibilidade.
*   **Solução:** Preencher os atributos textuais alternativos de todas as imagens cadastradas.

### 🐌 Performance e Carregamento
*   **Problema:** Excesso de elementos na DOM. O uso intensivo de widgets espaçadores e seções aninhadas geradas pelo Elementor infla excessivamente o código HTML.
*   **Problema:** Imagens de serviços estão carregando em alta resolução (`1280x960` pixels) e sendo redimensionadas via CSS para caber no celular/desktop.
*   **Impacto:** Atraso no carregamento da página (LCP - Largest Contentful Paint), prejudicando a pontuação no Google PageSpeed Insights.
*   **Solução:** 
    1. Utilizar imagens otimizadas em WebP e configurá-las para carregar em tamanhos adequados à exibição.
    2. Remover ao máximo os widgets desnecessários de "Spacer" no Elementor, substituindo-os por configurações globais de padding nas seções.

---

## 🚀 Plano de Ação Imediata

1.  **Resolver Links Quebrados/Staging:** Ação prioritária. Consertar os links que apontam para a uni5.net para evitar perda de tráfego.
2.  **Otimizar ou Ocultar Rodapé:** Preencher as colunas vazias ou reorganizar o footer.
3.  **Melhorar Imagens de Serviços e Botões:** Refatorar a seção de serviços utilizando cartões (cards) estéticos e transformar o link de ver produtos em um botão real e chamativo.
4.  **Configurações Básicas de SEO:** Inserir a Meta Description no header da página inicial.
