# PBS EMBA Electives Picker 2025/26

Ferramenta interativa para selecionar electives do EMBA da Porto Business School.

Criada por José Ramos, com uso de AI.

## 🚀 Deploy no GitHub Pages

### Passo 1 — Cria o repositório

1. Vai a [github.com/new](https://github.com/new)
2. Nome do repo: `pbs-electives2526` (ou outro — mas atualiza `vite.config.js`)
3. Público
4. Não inicializes com README (vamos fazer push direto)

### Passo 2 — Push do código

```bash
cd pbs-electives2526
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/joseloramospt-ai/pbs-electives2526.git
git push -u origin main
```

### Passo 3 — Ativa GitHub Pages

1. No repo, vai a **Settings → Pages**
2. Em **Source**, escolhe **GitHub Actions**
3. O workflow já está configurado em `.github/workflows/deploy.yml`
4. Após o push, o deploy é automático

### Passo 4 — Acede ao site

O site fica disponível em:
```
https://joseloramospt-ai.github.io/pbs-electives2526/
```

## ⚠️ Se mudares o nome do repo

Edita `vite.config.js` e muda o `base`:

```js
base: '/NOME-DO-TEU-REPO/',
```

## 🛠 Desenvolvimento local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/pbs-electives2526/`
