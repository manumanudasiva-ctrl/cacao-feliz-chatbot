/**
 * Cacao Feliz — Chat Widget
 * Inject this script in Shopify Admin → Online Store → Themes → Edit code → theme.liquid
 * Place just before </body>
 *
 * Replace VERCEL_URL below with your actual Vercel deployment URL.
 */

(function () {
    const API_URL = 'cacao-feliz-chatbot.vercel.app/demo.html';
  
    // Brand colours
    const BROWN = '#3B1F0A';
    const CREAM = '#FDF6EC';
    const ACCENT = '#C8862A';
  
    // Detect language from page
    const lang = document.documentElement.lang?.startsWith('en') ? 'en' : 'es';
  
    const STRINGS = {
      es: {
        title: 'Cacao Feliz',
        subtitle: 'Proyecto social · São Tomé',
        placeholder: '¿En qué puedo ayudarte?',
        send: 'Enviar',
        welcome: '¡Hola! Soy el asistente de Cacao Feliz 🍫\n\nPuedo ayudarte con preguntas sobre nuestro chocolate, el proyecto social en São Tomé, pedidos o el sorteo del viaje. ¿En qué puedo ayudarte?',
        error: 'Algo ha ido mal. Inténtalo de nuevo o escríbenos a cacaofeliz.org.',
        open: 'Abrir chat',
        close: 'Cerrar chat',
      },
      en: {
        title: 'Cacao Feliz',
        subtitle: 'Social project · São Tomé',
        placeholder: 'How can I help you?',
        send: 'Send',
        welcome: 'Hi! I\'m the Cacao Feliz assistant 🍫\n\nI can help with questions about our chocolate, the social project in São Tomé, orders, or the travel raffle. What would you like to know?',
        error: 'Something went wrong. Try again or contact us at cacaofeliz.org.',
        open: 'Open chat',
        close: 'Close chat',
      },
    };
  
    const t = STRINGS[lang];
    let messages = [];
    let isOpen = false;
    let isLoading = false;
  
    // ── Inject styles ──────────────────────────────────────────────
    const style = document.createElement('style');
    style.textContent = `
      #cf-chat-widget * { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
  
      #cf-bubble {
        position: fixed; bottom: 24px; right: 24px; z-index: 9999;
        width: 56px; height: 56px; border-radius: 50%;
        background: ${BROWN}; color: #fff;
        border: none; cursor: pointer; font-size: 24px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        display: flex; align-items: center; justify-content: center;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      #cf-bubble:hover { transform: scale(1.08); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }
  
      #cf-window {
        position: fixed; bottom: 92px; right: 24px; z-index: 9998;
        width: 360px; max-width: calc(100vw - 32px);
        height: 520px; max-height: calc(100vh - 120px);
        background: ${CREAM}; border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        display: flex; flex-direction: column;
        overflow: hidden; opacity: 0; pointer-events: none;
        transform: translateY(12px) scale(0.97);
        transition: opacity 0.2s, transform 0.2s;
      }
      #cf-window.open { opacity: 1; pointer-events: all; transform: translateY(0) scale(1); }
  
      #cf-header {
        background: ${BROWN}; color: #fff; padding: 14px 16px;
        display: flex; align-items: center; gap: 10px;
      }
      #cf-header-icon { font-size: 22px; }
      #cf-header-text { flex: 1; }
      #cf-header-title { font-size: 15px; font-weight: 600; margin: 0; }
      #cf-header-sub { font-size: 11px; opacity: 0.75; margin: 2px 0 0; }
      #cf-close-btn {
        background: none; border: none; color: #fff;
        font-size: 20px; cursor: pointer; padding: 0 4px; line-height: 1;
        opacity: 0.8;
      }
      #cf-close-btn:hover { opacity: 1; }
  
      #cf-messages {
        flex: 1; overflow-y: auto; padding: 16px;
        display: flex; flex-direction: column; gap: 10px;
        scroll-behavior: smooth;
      }
  
      .cf-msg {
        max-width: 82%; padding: 10px 13px;
        border-radius: 14px; font-size: 14px; line-height: 1.45;
        white-space: pre-wrap; word-break: break-word;
      }
      .cf-msg.assistant {
        background: #fff; color: ${BROWN};
        border-bottom-left-radius: 4px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
        align-self: flex-start;
      }
      .cf-msg.user {
        background: ${BROWN}; color: #fff;
        border-bottom-right-radius: 4px;
        align-self: flex-end;
      }
  
      .cf-typing {
        display: flex; gap: 4px; align-items: center;
        padding: 12px 14px; background: #fff;
        border-radius: 14px; border-bottom-left-radius: 4px;
        align-self: flex-start;
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      }
      .cf-typing span {
        width: 7px; height: 7px; background: ${ACCENT};
        border-radius: 50%; animation: cf-bounce 1.2s infinite;
      }
      .cf-typing span:nth-child(2) { animation-delay: 0.2s; }
      .cf-typing span:nth-child(3) { animation-delay: 0.4s; }
      @keyframes cf-bounce {
        0%, 60%, 100% { transform: translateY(0); }
        30% { transform: translateY(-6px); }
      }
  
      #cf-input-area {
        padding: 12px; border-top: 1px solid #e8ddd0;
        display: flex; gap: 8px; background: ${CREAM};
      }
      #cf-input {
        flex: 1; padding: 10px 13px; border-radius: 20px;
        border: 1.5px solid #d4c4b0; background: #fff;
        font-size: 14px; color: ${BROWN}; outline: none;
        resize: none; font-family: inherit; line-height: 1.4;
      }
      #cf-input:focus { border-color: ${ACCENT}; }
      #cf-send-btn {
        width: 40px; height: 40px; border-radius: 50%;
        background: ${BROWN}; color: #fff; border: none;
        cursor: pointer; font-size: 18px; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        transition: background 0.15s;
      }
      #cf-send-btn:hover:not(:disabled) { background: ${ACCENT}; }
      #cf-send-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  
      #cf-powered {
        text-align: center; font-size: 10px; color: #b0a090;
        padding: 4px 0 8px; background: ${CREAM};
      }
    `;
    document.head.appendChild(style);
  
    // ── Build DOM ──────────────────────────────────────────────────
    const root = document.createElement('div');
    root.id = 'cf-chat-widget';
    root.setAttribute('aria-label', t.title);
    root.innerHTML = `
      <button id="cf-bubble" aria-label="${t.open}" title="${t.open}">🍫</button>
      <div id="cf-window" role="dialog" aria-modal="true" aria-label="${t.title}">
        <div id="cf-header">
          <div id="cf-header-icon">🍫</div>
          <div id="cf-header-text">
            <p id="cf-header-title">${t.title}</p>
            <p id="cf-header-sub">${t.subtitle}</p>
          </div>
          <button id="cf-close-btn" aria-label="${t.close}">×</button>
        </div>
        <div id="cf-messages"></div>
        <div id="cf-input-area">
          <textarea id="cf-input" placeholder="${t.placeholder}" rows="1" maxlength="500"></textarea>
          <button id="cf-send-btn" aria-label="${t.send}">➤</button>
        </div>
        <div id="cf-powered">Powered by Cacao Feliz</div>
      </div>
    `;
    document.body.appendChild(root);
  
    // ── DOM refs ───────────────────────────────────────────────────
    const bubble = document.getElementById('cf-bubble');
    const win = document.getElementById('cf-window');
    const messagesEl = document.getElementById('cf-messages');
    const input = document.getElementById('cf-input');
    const sendBtn = document.getElementById('cf-send-btn');
    const closeBtn = document.getElementById('cf-close-btn');
  
    // ── Helpers ────────────────────────────────────────────────────
    function addMessage(role, text) {
      const el = document.createElement('div');
      el.className = `cf-msg ${role}`;
      el.textContent = text;
      messagesEl.appendChild(el);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return el;
    }
  
    function showTyping() {
      const el = document.createElement('div');
      el.className = 'cf-typing';
      el.id = 'cf-typing';
      el.innerHTML = '<span></span><span></span><span></span>';
      messagesEl.appendChild(el);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  
    function removeTyping() {
      document.getElementById('cf-typing')?.remove();
    }
  
    function setLoading(val) {
      isLoading = val;
      sendBtn.disabled = val;
      input.disabled = val;
    }
  
    // Auto-resize textarea
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });
  
    // ── Toggle open/close ──────────────────────────────────────────
    function openChat() {
      isOpen = true;
      win.classList.add('open');
      bubble.setAttribute('aria-label', t.close);
      bubble.innerHTML = '×';
      bubble.style.fontSize = '22px';
      if (messages.length === 0) {
        addMessage('assistant', t.welcome);
      }
      setTimeout(() => input.focus(), 200);
    }
  
    function closeChat() {
      isOpen = false;
      win.classList.remove('open');
      bubble.setAttribute('aria-label', t.open);
      bubble.innerHTML = '🍫';
      bubble.style.fontSize = '24px';
    }
  
    bubble.addEventListener('click', () => isOpen ? closeChat() : openChat());
    closeBtn.addEventListener('click', closeChat);
  
    // ── Send message ───────────────────────────────────────────────
    async function sendMessage() {
      const text = input.value.trim();
      if (!text || isLoading) return;
  
      input.value = '';
      input.style.height = 'auto';
      addMessage('user', text);
  
      messages.push({ role: 'user', content: text });
  
      setLoading(true);
      showTyping();
  
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages, language: lang }),
        });
  
        removeTyping();
  
        if (!res.ok) throw new Error('API error');
  
        const data = await res.json();
        const reply = data.reply || t.error;
  
        addMessage('assistant', reply);
        messages.push({ role: 'assistant', content: reply });
  
      } catch (err) {
        removeTyping();
        addMessage('assistant', t.error);
        console.error('Cacao Feliz chat error:', err);
      } finally {
        setLoading(false);
        input.focus();
      }
    }
  
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  
  })();
