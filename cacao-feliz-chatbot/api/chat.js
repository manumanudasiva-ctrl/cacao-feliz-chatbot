// api/chat.js — Cacao Feliz chatbot endpoint
// Deployed on Vercel as a serverless function

const KNOWLEDGE_BASE = `
# CACAO FELIZ — BASE DE CONOCIMIENTO VERIFICADA
# Fuente: Daniel Acosta (Director Ejecutivo), junio 2026
# Todos los datos son exactos salvo los marcados PENDIENTE

---

## ORGANIZACIÓN

Cacao Feliz es una marca de chocolate ecológico creada por Co&Coa, una Asociación Sin Ánimo de Lucro española (NIF G56654239). No existe como entidad jurídica separada. Los ingresos financian el proyecto social, no generan beneficio privado.

**No somos una marca de chocolate. Somos un proyecto social.**

Historia: 2019 Daniel Acosta viaja a São Tomé, surge la idea. 2022 se incorporan Jorge Martínez y Pol Contreras. 2025 se incorpora Juan Ángel Rodrigálvarez (Kankel) y comienza la producción.

"Happy Origin" se refiere a justicia social — que las comunidades reciban valor justo por su cacao y que los niños que viven junto a las plantaciones puedan por fin probarlo. La justicia trae felicidad. El cacao contiene feniletilamina (bienestar), pero eso es secundario.

---

## PROGRAMA ESCOLAR

- Escuela: Escuela de Água-Izé, São Tomé y Príncipe
- Beneficiarios: 550 niños y niñas (confirmado por Daniel Acosta, junio 2026)
- Impacto: Un equipo de nutricionistas y un equipo de psicología miden el impacto del consumo diario de cacao. Estudio pionero de validación científica.
- Cada tableta = 9 desayunos para un niño

Destino del dinero: programa de alimentación escolar, logística del cacao granulado local y seguimiento nutricional y psicológico. No hay desglose porcentual público.

---

## PRODUCTO

Tableta (75g): Chocolate negro ecológico al 81%. Origen único: Cooperativa CECAQ-11, región de Cantagalo, São Tomé y Príncipe. Variedades Amelonado y Criollo.

Ingredientes (únicos, confirmados): Cacao ecológico, manteca de cacao ecológica, azúcar de caña ecológica.

Vegano: Sí — sin lácteos, sin grasa animal.
Frutos secos: No contiene.
Sin gluten: PENDIENTE DE CONFIRMACIÓN — no responder esta pregunta, derivar a la etiqueta o a contacto directo.

Conservación: Lugar fresco, seco, alejado de luz solar y olores fuertes. 16-20°C ideal. En climas cálidos: nevera bien cerrada.
Caducidad: 24 meses en condiciones ideales, puede ser más.

Certificaciones (en el envase): FLO ID 23883 (Fairtrade), ST-BIO-154 (ecológico), Naturland 990023.
EUDR: Cumple — cacao en agroforestería desde hace casi dos siglos.

Perfil de cata (versión corta): 81% de cacao ecológico de São Tomé. Chasquido limpio, textura sedosa. Notas de cacao puro, panela, flores secas y corteza de árbol en nariz. En boca: amargor elegante que cede a ciruela madura, té negro y nuez tostada. Retrogusto largo, mineral y terroso.

Información nutricional (por 100g): 228 kcal | 14g grasas | 25.5g proteínas | 16.3g carbohidratos | 31.7g fibra | 13.9mg hierro | 128mg calcio.

---

## CATÁLOGO Y PRECIOS

- Give Me Five (5 tabletas) — 50€, envío gratuito incluido. También disponible en suscripción (verificar precios exactos en cacaofeliz.org).
- Chocolate Bites (bolsas individuales 12.5g) — 50€ por caja. Cantidad de bolsas por caja: consultar en cacaofeliz.org.
- Cobertura Profesional 1kg — 50€. Disponible para profesionales y particulares.
- Camisetas — 20€ cada una. 100% de los ingresos va al proyecto social.

Camisetas disponibles: Riso Girl · Yellow, Big Boy Bean · Light, Big Boy Bean · Dark, Happy, Happy Cacao (en 6 colores: Chocolate Forest, Berry, Camo, Chocolate Orange, Rose, Dexa).

---

## TIENDA Y ENVÍOS

Tienda online: cacaofeliz.org (Shopify)
Transportista: Seur Frío
Coste de envío estándar: 7€
Give Me Five: envío gratuito incluido
Cobertura 1kg: envío gratuito en pedidos de 3+ paquetes de kilo
Chocolate Bites: coste de envío consultar en cacaofeliz.org
Internacional: No hay envíos fuera de España.
Devoluciones: Solo si el producto llega en mal estado.

---

## PUNTOS DE VENTA FÍSICOS

- Supernormal — Madrid (chocolate)
- Abacería de Barceló — Mercado Barceló, Madrid (chocolate)
- Club del Chocolate (chocolate)
- Bima Vinos y Más (chocolate)
- Bendito Alimento — Cádiz (SOLO vende nibs de cacao tostado, NO la tableta de chocolate)

---

## RESTAURANTES QUE USAN CACAO FELIZ

Mugaritz, Akelarre, Coque, Don Giovanni, Hotel Algadir Delta, Casa Borrego, Cocinandos, Coscolo, La Martina de Tarancón CB, Bodegas Rioja Alta.

Mugaritz: 2 estrellas Michelin. Grabaron un vídeo apoyando el proyecto. En 2025 crearon el plato "Sigue tu olfato" con Cacao Feliz.

---

## EURO-TOQUES

Asociación profesional de chefs distribuidora del proyecto. Hacerse Amigo de Euro-Toques: comprar un pack Give Me Five a través del enlace de Euro-Toques específicamente (no desde cacaofeliz.org directamente). Acceso a área privada con promociones y descuentos en eventos.

---

## SORTEO — VIAJE A SÃO TOMÉ

Periodo: 11 mayo 2026 — 28 febrero 2027. Sorteo: 1 marzo 2027.
Cada tableta incluye un flyer numerado con QR. No hace falta conservar el papel físico, vale una foto.
Pasos: compra tableta → foto al flyer → sigue @cacaofeliz_stp en Instagram → consulta número ganador el 1 marzo 2027 → contacta en 15 días si ganas.

Premio incluye: vuelo ida y vuelta Lisboa-São Tomé, 7 noches con desayuno, visitas a plantaciones, cooperativa CECAQ-11, workshop, escuela Água-Izé, excursiones, desplazamientos internos.
No incluye: seguro de viaje, comidas, gastos personales, tasas de documentación.

---

## ORIGEN Y PROCESO

São Tomé y Príncipe: primer lugar fuera de América donde se cultivó cacao (portugueses). Llegó a ser el mayor productor mundial de cacao, reconocido por su calidad y sabor excepcionales.

Proceso bean to bar: fermentación 7 días en cajas de madera → secado 10-12 días → refinado 2 días → conchado 3 días → elaboración del chocolate en Kankel Cacao (La Rioja, España).

Selección en origen: Pol Contreras. Importación y logística: Daarnhouwer & Co.

---

## EQUIPO

Daniel Acosta — Director Ejecutivo
Jorge Martínez — Director Creativo
Pol Contreras — Chocolatero / Desarrollo de Producto
Juan Ángel Rodrigálvarez — Chocolatero / Kankel
Amil López — Nutricionista
Raquel Moreno — Psicóloga
María Salvadora Jiménez — Daarnhouwer & Co

---

## REDES Y CONTACTO

Instagram: @cacaofeliz_stp
Web: cacaofeliz.org
`;

// ─── CORS helper ───────────────────────────────────────────────────────────────
function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // tighten to cacaofeliz.org once live
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// ─── Main handler (CommonJS — required by Vercel Node.js runtime) ──────────────
module.exports = async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, language } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' });
  }

  // Keep last 10 messages to control token usage
  const recentMessages = messages.slice(-10);

  const lang = language === 'en' ? 'English' : 'Spanish';

  const systemPrompt = `You are the assistant for Cacao Feliz, an organic chocolate social project. You answer questions about the organisation, products, the school programme in São Tomé and Príncipe, orders, and shipping.

LANGUAGE: The user is writing in ${lang}. Respond in ${lang}. If they switch language, adapt immediately.

TONE: Warm, direct, honest. Cacao Feliz identity is "social project first, chocolate second." Reflect that in every answer.

LENGTH: Short, useful answers. Maximum 3–4 sentences unless the question genuinely requires more. Avoid unnecessary bullet lists.

CRITICAL RULES:
1. GLUTEN: NEVER confirm the product is gluten-free. If asked, say exactly: "Los ingredientes no contienen gluten, pero no podemos confirmar la ausencia de trazas en el proceso de fabricación. Para alérgicos al gluten, consulta la etiqueta o escríbenos directamente." (adapt to English if needed)
2. PENDING DATA: If asked about number of bags in Chocolate Bites box or Bites shipping cost, direct to cacaofeliz.org or suggest contacting the team.
3. SUBSCRIPTION PRICES: Direct to the online store for exact figures.
4. DO NOT INVENT: If the information is not in the knowledge base, say "No tengo ese dato — puedes consultarlo en cacaofeliz.org o escribirnos directamente."
5. NEVER mention Albert Roca, Food Idea Lab, or PNUD/Maite Mendizábal.

VERIFIED KNOWLEDGE BASE:
${KNOWLEDGE_BASE}`;

  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: systemPrompt,
        messages: recentMessages,
      }),
    });

    if (!anthropicRes.ok) {
      const error = await anthropicRes.json();
      console.error('Anthropic API error:', JSON.stringify(error));
      return res.status(500).json({ error: 'API error', detail: error });
    }

    const data = await anthropicRes.json();
    const reply = data.content?.[0]?.text || '';

    return res.status(200).json({ reply });

  } catch (err) {
    console.error('Handler error:', err.message);
    return res.status(500).json({ error: 'Internal server error', detail: err.message });
  }
};
}
