# Cacao Feliz Chatbot — Deployment Guide

## Stack

- **Backend:** Vercel serverless function (`api/chat.js`)
- **Model:** Claude Haiku (fast + cheap for FAQ use)
- **Frontend:** Vanilla JS widget injected into Shopify `theme.liquid`
- **KB:** Embedded directly in the system prompt (no vector DB needed for Phase 1)

---

## Step 1 — Deploy to Vercel

### Option A: Via GitHub (recommended)

1. Push this `chatbot/` folder to a GitHub repo (e.g. `cacao-feliz-chatbot`)
2. Go to [vercel.com](https://vercel.com/) → New Project → Import that repo
3. Vercel auto-detects the `api/` folder — no build settings needed
4. Click Deploy

### Option B: Via Vercel CLI

```bash
npm i -g vercel
cd chatbot/
vercel

```

---

## Step 2 — Add your Anthropic API key to Vercel

1. Vercel Dashboard → your project → Settings → Environment Variables
2. Add:
  - **Name:** `ANTHROPIC_API_KEY`
  - **Value:** your key (starts with `sk-ant-...`)
  - **Environment:** Production (and Preview if you want)
3. Redeploy after adding the variable

---

## Step 3 — Update widget.js with your Vercel URL

After deploying, Vercel gives you a URL like: `https://cacao-feliz-chatbot-abc123.vercel.app`

Open `widget.js` and replace line 9:

```js
const API_URL = 'https://YOUR_VERCEL_URL.vercel.app/api/chat';

```

with your actual URL:

```js
const API_URL = 'https://cacao-feliz-chatbot-abc123.vercel.app/api/chat';

```

---

## Step 4 — Inject into Shopify

1. Shopify Admin → Online Store → Themes → your active theme → Edit code
2. Open `Layout/theme.liquid`
3. Find `</body>` (near the very bottom)
4. Paste the entire contents of `widget.js` wrapped in a script tag:

```html
<script>
  // paste entire widget.js content here
</script>

```

1. Save. The chat bubble appears on every page of the store.

---

## Step 5 — Test

Open cacaofeliz.org and try these questions:

- "¿Qué es Cacao Feliz?" → should explain the social project
- "¿Es vegano?" → should confirm yes
- "¿Es sin gluten?" → must NOT confirm — must redirect to label/contact
- "¿Cuántos niños beneficia?" → should say 550
- "¿Dónde puedo comprarlo?" → should list physical points of sale
- "What is Cacao Feliz?" → should respond in English automatically

---

## Pending items (update KB in api/chat.js when resolved)

See `PENDING.md` in the KB repo for full tracker.

1. **Gluten** — ask Daniel about Kankel cross-contamination
2. **Bites bag count** — Daniel confirms Monday
3. **Bites shipping** — Daniel confirms Monday
4. **Subscription prices** — verify against live Shopify store Tuesday

---

## Phase 2 (future)

- Add Shopify Admin API integration for order tracking
- Move KB to GitHub-fetched files (dynamic updates without redeployment)
- Add RAG indexing via `generate_kb_index.py` for richer responses

