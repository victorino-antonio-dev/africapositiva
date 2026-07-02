# Gestão do blog — África Positiva

O blog é administrado no Sanity Studio:

https://africa-positiva.sanity.studio/

## Publicar uma notícia

1. Entre no Studio com a conta autorizada.
2. Abra **Notícias** e clique em **Criar**.
3. Preencha o título e gere o slug.
4. Adicione resumo, imagem principal, categoria, autor, data e tempo de leitura.
5. Escreva o conteúdo no editor. Pode usar títulos, listas, links e imagens.
6. Preencha as perguntas frequentes e os campos de SEO quando forem relevantes.
7. Clique em **Publicar**.

O website lê apenas documentos publicados. Rascunhos não aparecem publicamente.

## Atualizar ou remover

- Para atualizar, abra a notícia, faça as alterações e publique novamente.
- Para retirar uma notícia do website sem a apagar, use **Despublicar**.
- Para eliminar definitivamente, abra o menu de ações do documento e escolha **Eliminar**.

## Desenvolvimento local

Website:

```bash
pnpm dev
```

Studio:

```bash
pnpm --dir studio dev
```

Variáveis opcionais do website:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=o84b2tuv
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-01
```
