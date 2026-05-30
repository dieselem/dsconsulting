import { useState, useEffect, useRef } from "react";

const initialClients = [
  {
    id: 1,
    name: "Love Chuka",
    rubro: "Retail indumentaria",
    via: "Directa",
    etapa: "Implementación",
    color: "#E8C547",
    icon: "👗",
    ultimoAvance: "Se presentaron a Mariela las dos plataformas desarrolladas con Claude Code (Administración y RRHH). Mariela validó con entusiasmo. Se unificó nómina de empleados para carga en Visma Way.",
    misTareas: [
      { texto: "Definir arquitectura modular: agregar Ficha de Local como módulo dentro de la plataforma de Administración", done: false },
      { texto: "Confirmar si exportación de Dragonfish coincide con formato Excel del estudio contable", done: false },
      { texto: "Definir fecha de corte del circuito Lince/Johana/José", done: false },
    ],
    tareasCliente: [
      { texto: "Mariela: consultar martes 3 preguntas sobre Ficha de Local (quién carga, qué registra, quién consulta)", done: false },
      { texto: "Isa: completar carga de documentación por local (plazo 1 mes)", done: false },
      { texto: "Definir auditor responsable de verificar que documentación esté completa al finalizar el mes*", done: false },
    ],
    proximaReunion: "2026-06-03",
    focoReunion: "Relevamiento de Ficha de Local: quién carga, qué registra y quién consulta.",
    iniciativas: [
      { nombre: "Plataforma Administración - Facturas", estado: "en-progreso" },
      { nombre: "Plataforma Administración - Documentación por local", estado: "en-progreso" },
      { nombre: "Plataforma Administración - Ficha de local", estado: "pendiente" },
      { nombre: "Plataforma RRHH - Grilla horaria", estado: "en-progreso" },
      { nombre: "Implementación Visma Way", estado: "en-progreso" },
      { nombre: "Migración Lince a Dragonfish (módulo tesorería)", estado: "pendiente" },
      { nombre: "Diagnóstico organizacional", estado: "completado" },
      { nombre: "Formalización de roles y autoridad (Diana, Miriam)", estado: "pendiente" },
    ],
  },
  {
    id: 2,
    name: "Indesam",
    rubro: "Gestión integral de residuos industriales y scrap metálico",
    via: "PCH",
    etapa: "En curso",
    color: "#4ECDC4",
    icon: "🏭",
    ultimoAvance: "Reunión 3 completada: se trabajaron los 5 porqués en vivo. Emergieron verbos candidatos para el propósito (transformar, sostener, liberar, garantizar, ordenar) y la palabra espontánea 'seriedad'. Se definió traer propósitos redactados a la próxima reunión.",
    misTareas: [
      { texto: "Redactar 3-4 opciones de propósito formateadas (verbo infinitivo + para quién + para qué)", done: false },
      { texto: "Preparar guión de Acciones + Profit per X + Sandbox para la próxima reunión", done: false },
      { texto: "Actualizar doc del guión con el propósito que elijan una vez cerrado", done: false },
      { texto: "Consultar contacto sobre consultora de diseño de planta (MP Ingeniería o similar)*", done: false },
    ],
    tareasCliente: [
      { texto: "Pensar cuál de los verbos los representa más y traer una preferencia a la próxima reunión", done: false },
      { texto: "Avanzar en el análisis de maquinaria que necesitan para la planta (viaje a China)*", done: false },
      { texto: "Evaluar posibilidad de hacer 2 reuniones por semana para acelerar el proceso*", done: false },
      { texto: "Revisar el documento de políticas/valores y cruzarlo con lo trabajado en las reuniones", done: false },
    ],
    proximaReunion: "2026-06-05",
    focoReunion: "Cierre de propósito + Acciones + Profit per X + Sandbox",
    iniciativas: [
      { nombre: "Definición de valores corporativos (8 identificados, reducir a 5-7)", estado: "en-progreso" },
      { nombre: "Definición de propósito", estado: "en-progreso" },
      { nombre: "Diseño del proceso comercial", estado: "en-progreso" },
      { nombre: "Registro como operador en RÍNA", estado: "pendiente" },
      { nombre: "Definición de sandbox", estado: "pendiente" },
      { nombre: "Viaje a China para evaluación de maquinaria", estado: "pendiente" },
      { nombre: "Selección de consultora de diseño de planta", estado: "pendiente" },
      { nombre: "Apertura de planta propia operativa", estado: "pendiente" },
      { nombre: "BHAG — objetivo a 10-15 años", estado: "pendiente" },
    ],
  },
  {
    id: 3,
    name: "Gelform",
    rubro: "Manufactura y comercialización de productos médicos/ortopédicos",
    via: "PCH",
    etapa: "Implementación",
    color: "#A78BFA",
    icon: "🧵",
    ultimoAvance: "Auditoría completa del proceso de pedidos con entrevistas a administración, depósito y producción. Documento Word entregado con mapeo de proceso, 10 situaciones críticas y próximos pasos. Plataforma de gestión de caja en uso por Silvana y Camila.",
    misTareas: [
      { texto: "Entrevistar a vendedores para completar el mapeo del proceso de pedidos", done: false },
      { texto: "Completar entrevista con Gustavo (grabación se cortó parcialmente)", done: false },
      { texto: "Diseñar proceso rediseñado de pedidos (propuesta formal con flujo nuevo)", done: false },
      { texto: "Definir e implementar formulario estándar de pedidos para vendedores", done: false },
      { texto: "Armar propuesta de criterio de prioridad de pedidos para depósito", done: false },
      { texto: "Diseñar protocolo formal de faltantes", done: false },
      { texto: "Proponer estructura de KPIs mínimos viables para Karina", done: false },
    ],
    tareasCliente: [
      { texto: "Karina: definir canal único oficial de ingreso de pedidos", done: false },
      { texto: "Karina: autorizar cambio de secuencia — control físico ANTES de facturar", done: false },
      { texto: "Silvana: activar visualización de importe en su copia de autorización*", done: false },
      { texto: "Ramiro: asegurar ingreso al sistema de compras en el día que se reciben", done: false },
      { texto: "Edwin/Camila: definir responsable de cierre diario de órdenes de producción", done: false },
      { texto: "Karina: confirmar plan de cobertura para ausencia de Silvana en junio*", done: false },
      { texto: "Karina: avanzar con auditoría de stock externa (ya en proceso)", done: false },
    ],
    proximaReunion: "2026-06-10",
    focoReunion: "Entrevista con equipo de vendedores + validación del proceso rediseñado de pedidos*",
    iniciativas: [
      { nombre: "Plataforma de gestión de caja", estado: "completado" },
      { nombre: "Auditoría y mapeo del proceso de pedidos", estado: "completado" },
      { nombre: "Canal único de ingreso de pedidos", estado: "pendiente" },
      { nombre: "Formulario estándar de pedidos para vendedores", estado: "pendiente" },
      { nombre: "Rediseño del proceso de control previo a facturación", estado: "pendiente" },
      { nombre: "Protocolo formal de faltantes", estado: "pendiente" },
      { nombre: "Auditoría de stock", estado: "en-progreso" },
      { nombre: "Tablero de KPIs mínimo viable", estado: "pendiente" },
      { nombre: "Entrevistas a vendedores", estado: "pendiente" },
    ],
  },
  {
    id: 4,
    name: "RE/MAX Urbana III",
    rubro: "Franquicia inmobiliaria",
    via: "Directa",
    etapa: "Diagnóstico",
    color: "#F97316",
    icon: "🏢",
    ultimoAvance: "Entrevistas realizadas con Jessica (marketing/pauta) y César (RRHH). Hallazgos procesados y validados.",
    misTareas: [
      { texto: "Entrevistar a Juli (administración)", done: false },
      { texto: "Entrevistar a Jorge (martillero)", done: false },
      { texto: "Entrevistar a Corina (asistente comercial)", done: false },
      { texto: "Entrevistar a Agustina (comercial, mano derecha de Checho)", done: false },
      { texto: "Entrevistar a Wanda (asistente martillero, por Zoom — está de reposo)", done: false },
      { texto: "Entrevistar a Carola (recepción — PRIORIZAR antes de que se vaya)*", done: false },
      { texto: "Entrevistar a Gonzalo (administración, recién ingresó)", done: false },
      { texto: "Seleccionar y entrevistar 5 agentes en distintos niveles de ranking", done: false },
      { texto: "Armar informe de diagnóstico final para presentar a Checho", done: false },
      { texto: "Preparar propuesta de implementación post-diagnóstico", done: false },
    ],
    tareasCliente: [
      { texto: "Firmar acuerdo de confidencialidad", done: false },
      { texto: "Definir días y horarios fijos para visitas de Diego (martes confirmado)*", done: false },
      { texto: "Validar formulario de relevamiento antes de enviarlo al equipo", done: false },
      { texto: "Implementar caja chica o tarjeta de gastos operativos", done: false },
      { texto: "Iniciar búsqueda de reemplazo para Carola en recepción", done: false },
    ],
    proximaReunion: "2026-06-03",
    focoReunion: "Entrevista con Juli (administración) y avance con mandos medios restantes",
    iniciativas: [
      { nombre: "Entrevistas mandos medios", estado: "en-progreso" },
      { nombre: "Entrevistas agentes", estado: "pendiente" },
      { nombre: "Formulario de relevamiento interno", estado: "pendiente" },
      { nombre: "Informe de diagnóstico", estado: "pendiente" },
      { nombre: "Videos de inducción para nuevos agentes", estado: "pendiente" },
      { nombre: "Propuesta de implementación (roles, organigrama, manual de procesos)", estado: "pendiente" },
    ],
  },
  {
    id: 5,
    name: "Los Invertebrados",
    rubro: "Educación y experiencias infantiles",
    via: "Propio",
    etapa: "Implementación",
    color: "#34D399",
    icon: "🦋",
    ultimoAvance: "Se publicó la plataforma con agenda online (React + Supabase vía Lovable). A la espera del alta de los 12 profes.",
    misTareas: [
      { texto: "Enviar mensaje al grupo de profes con link, paso a paso y deadline de 48 hs", done: false },
      { texto: "Cerrar a mano las altas de profes que falten al vencer el plazo*", done: false },
      { texto: "Resolver presentación de factura C (taller Museo del Juguete, OC 1529) en portal San Isidro", done: false },
      { texto: "Avanzar integración con Google Calendar (próximo paso pendiente)*", done: false },
      { texto: "Construir módulo de honorario extraordinario para pagos no asociados a eventos*", done: false },
    ],
    tareasCliente: [
      { texto: "Profes: darse de alta en la plataforma", done: false },
    ],
    proximaReunion: "2026-06-02",
    focoReunion: "Confirmar adopción de la plataforma por los profes y definir próximo paso*",
    iniciativas: [
      { nombre: "Plataforma de gestión / agenda online (webapp)", estado: "en-progreso" },
      { nombre: "Sistema comercial y pricing de cumpleaños", estado: "en-progreso" },
      { nombre: "Integración con Google Calendar", estado: "pendiente" },
      { nombre: "Módulo honorario extraordinario", estado: "pendiente" },
      { nombre: "Alianza con Ecovita", estado: "en-progreso" },
      { nombre: "Plan de alianzas institucionales (escuelas, municipios, empresas/RSE)", estado: "pendiente" },
      { nombre: "Diseño de formatos replicables / modelo de expansión territorial", estado: "pendiente" },
      { nombre: "Activos de contenido escalable (obra, canción Ligia Piro, productos/kits)", estado: "pendiente" },
    ],
  },
  {
    id: 6,
    name: "Coch",
    rubro: "Industria",
    via: "PCH",
    etapa: "En curso",
    color: "#FF6B6B",
    icon: "⚙️",
    ultimoAvance: "Pendiente de carga. Ejecutá el prompt en el proyecto de Coch para completar.",
    misTareas: [],
    tareasCliente: [],
    proximaReunion: "2026-06-10",
    focoReunion: "A definir",
    iniciativas: [],
  },
];

const estadoConfig = {
  "completado": { label: "Completado", color: "#34D399", bg: "rgba(52,211,153,0.15)" },
  "en-progreso": { label: "En progreso", color: "#F97316", bg: "rgba(249,115,22,0.15)" },
  "pendiente": { label: "Pendiente", color: "#94A3B8", bg: "rgba(148,163,184,0.15)" },
};

const estadoOrder = ["pendiente", "en-progreso", "completado"];

const etapaConfig = {
  "Diagnóstico": { color: "#60A5FA" },
  "Inicio": { color: "#FBBF24" },
  "En curso": { color: "#F97316" },
  "Implementación": { color: "#34D399" },
  "Seguimiento": { color: "#A78BFA" },
};

function getDaysUntil(dateStr) {
  const today = new Date();
  const target = new Date(dateStr);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("es-AR", { weekday: "short", day: "numeric", month: "short" });
}

function EditableText({ value, onSave, style, multiline }) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value);
  const ref = useRef();

  useEffect(() => { if (editing && ref.current) ref.current.focus(); }, [editing]);

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); save(); }
    if (e.key === "Escape") { setVal(value); setEditing(false); }
  }

  function save() {
    if (val.trim()) onSave(val.trim());
    setEditing(false);
  }

  if (editing) {
    const props = {
      ref,
      value: val,
      onChange: e => setVal(e.target.value),
      onBlur: save,
      onKeyDown: handleKey,
      style: {
        background: "#1E2A3A", border: "1px solid #E8C547", borderRadius: 6,
        color: "#E2E8F0", padding: "4px 8px", fontSize: "inherit",
        fontFamily: "inherit", width: "100%", outline: "none",
        lineHeight: 1.5, ...style
      }
    };
    return multiline ? <textarea {...props} rows={2} style={{ ...props.style, resize: "none" }} /> : <input {...props} />;
  }

  return (
    <span onClick={() => setEditing(true)} title="Clic para editar"
      style={{ cursor: "text", borderBottom: "1px dashed #2D3748", paddingBottom: 1, ...style }}>
      {value}
    </span>
  );
}

export default function PanelConsultoria() {
  const STORAGE_KEY = "consultoria-v3";
  const [clients, setClients] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialClients;
    } catch { return initialClients; }
  });
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState("panel");
  const [updateText, setUpdateText] = useState("");
  const [procesando, setProcesando] = useState(false);
  const [updateResult, setUpdateResult] = useState(null);
  const [activeTab, setActiveTab] = useState("tareas");
  const [nuevaTarea, setNuevaTarea] = useState({ mia: "", cliente: "" });
  const [nuevaIniciativa, setNuevaIniciativa] = useState("");

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(clients)); } catch {}
  }, [clients]);

  const selectedClient = clients.find(c => c.id === selected);
  const totalMias = clients.reduce((a, c) => a + c.misTareas.filter(t => !t.done).length, 0);
  const totalClientes = clients.reduce((a, c) => a + c.tareasCliente.filter(t => !t.done).length, 0);
  const proxima = [...clients].sort((a, b) => new Date(a.proximaReunion) - new Date(b.proximaReunion))[0];

  function updateClient(id, fn) {
    setClients(prev => prev.map(c => c.id === id ? fn(c) : c));
  }

  function toggleTarea(clientId, field, idx) {
    updateClient(clientId, c => ({
      ...c, [field]: c[field].map((t, i) => i === idx ? { ...t, done: !t.done } : t)
    }));
  }

  function editTarea(clientId, field, idx, texto) {
    updateClient(clientId, c => ({
      ...c, [field]: c[field].map((t, i) => i === idx ? { ...t, texto } : t)
    }));
  }

  function deleteTarea(clientId, field, idx) {
    updateClient(clientId, c => ({
      ...c, [field]: c[field].filter((_, i) => i !== idx)
    }));
  }

  function addTarea(clientId, field, texto) {
    if (!texto.trim()) return;
    updateClient(clientId, c => ({
      ...c, [field]: [...c[field], { texto: texto.trim(), done: false }]
    }));
  }

  function editIniciativa(clientId, idx, nombre) {
    updateClient(clientId, c => ({
      ...c, iniciativas: c.iniciativas.map((ini, i) => i === idx ? { ...ini, nombre } : ini)
    }));
  }

  function cycleEstado(clientId, idx) {
    updateClient(clientId, c => ({
      ...c, iniciativas: c.iniciativas.map((ini, i) => {
        if (i !== idx) return ini;
        const next = estadoOrder[(estadoOrder.indexOf(ini.estado) + 1) % estadoOrder.length];
        return { ...ini, estado: next };
      })
    }));
  }

  function deleteIniciativa(clientId, idx) {
    updateClient(clientId, c => ({
      ...c, iniciativas: c.iniciativas.filter((_, i) => i !== idx)
    }));
  }

  function addIniciativa(clientId, nombre) {
    if (!nombre.trim()) return;
    updateClient(clientId, c => ({
      ...c, iniciativas: [...c.iniciativas, { nombre: nombre.trim(), estado: "pendiente" }]
    }));
  }

  async function procesarUpdate() {
    if (!updateText.trim() || !selectedClient) return;
    setProcesando(true); setUpdateResult(null);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514", max_tokens: 1000,
          system: `Sos el asistente de consultoría de Diego Selem. Procesá el resumen de reunión y devolvé SOLO un JSON válido con esta estructura exacta, sin texto antes ni después:
{"ultimoAvance":"string","misTareas":["tarea1","tarea2"],"tareasCliente":["tarea1","tarea2"],"focoReunion":"string"}`,
          messages: [{ role: "user", content: `Cliente: ${selectedClient.name}\nEtapa: ${selectedClient.etapa}\nResumen: ${updateText}` }]
        })
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === "text")?.text || "";
      setUpdateResult(JSON.parse(text.replace(/```json|```/g, "").trim()));
    } catch {
      setUpdateResult({ error: "No se pudo procesar. Revisá el resumen e intentá de nuevo." });
    }
    setProcesando(false);
  }

  function aplicarUpdate() {
    if (!updateResult || updateResult.error) return;
    updateClient(selected, c => ({
      ...c,
      ultimoAvance: updateResult.ultimoAvance || c.ultimoAvance,
      misTareas: [...updateResult.misTareas.map(t => ({ texto: t, done: false })), ...c.misTareas.filter(t => t.done)],
      tareasCliente: [...updateResult.tareasCliente.map(t => ({ texto: t, done: false })), ...c.tareasCliente.filter(t => t.done)],
      focoReunion: updateResult.focoReunion || c.focoReunion,
    }));
    setUpdateText(""); setUpdateResult(null); setView("detalle");
  }

  const S = {
    page: { minHeight: "100vh", background: "#0A0E1A", fontFamily: "'DM Sans', sans-serif", color: "#E2E8F0" },
    header: { background: "#0D1220", borderBottom: "1px solid #1E2A3A", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 },
    card: { background: "#0D1220", border: "1px solid #1E2A3A", borderRadius: 16, padding: 20 },
    btn: { cursor: "pointer", border: "none", fontFamily: "inherit", transition: "all .2s" },
    iconBtn: { cursor: "pointer", border: "none", background: "transparent", color: "#4A5568", fontSize: 14, padding: "2px 6px", borderRadius: 4, transition: "all .2s" },
  };

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#2D3748;border-radius:2px}
        .ch{transition:transform .2s,box-shadow .2s;cursor:pointer}.ch:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,.4)}
        .ib:hover{color:#E2E8F0!important;background:#2D3748!important}
        .del:hover{color:#FF6B6B!important}
        .tab-active{border-bottom:2px solid #E8C547;color:#E8C547}
        textarea{resize:none;outline:none;font-family:inherit}
        input{outline:none;font-family:inherit}
        textarea:focus,input:focus{border-color:#E8C547!important}
        .add-row input{background:#131929;border:1px dashed #2D3748;border-radius:8px;padding:8px 12px;color:#E2E8F0;font-size:13px;width:100%}
        .add-row input:focus{border-color:#E8C547!important;border-style:solid}
      `}</style>

      {/* Header */}
      <div style={S.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {view !== "panel" && (
            <button style={{ ...S.btn, background: "#1E2A3A", color: "#94A3B8", padding: "6px 12px", borderRadius: 8, fontSize: 13 }}
              onClick={() => { setView(view === "update" ? "detalle" : "panel"); setUpdateResult(null); setUpdateText(""); }}>
              ← Volver
            </button>
          )}
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, color: "#fff" }}>DS <span style={{ color: "#E8C547" }}>Consultoría</span></div>
            <div style={{ fontSize: 11, color: "#4A5568", fontWeight: 500, letterSpacing: ".5px" }}>PANEL DE CONTROL</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "#4A5568" }}>MIS TAREAS</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#E8C547" }}>{totalMias}</div>
          </div>
          <div style={{ width: 1, height: 32, background: "#1E2A3A" }} />
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "#4A5568" }}>CLIENTES</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#4ECDC4" }}>{totalClientes}</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "24px 16px" }}>

        {/* PANEL */}
        {view === "panel" && <>
          {proxima && (
            <div style={{ background: "linear-gradient(135deg,#1A2035,#1E2A3A)", border: "1px solid #2D3748", borderRadius: 16, padding: "16px 20px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 11, color: "#4A5568", fontWeight: 600, letterSpacing: "1px", marginBottom: 4 }}>PRÓXIMA REUNIÓN</div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{proxima.name} <span style={{ color: "#94A3B8", fontWeight: 400 }}>— {proxima.focoReunion}</span></div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#E8C547" }}>{formatDate(proxima.proximaReunion)}</div>
                <div style={{ fontSize: 12, color: "#4A5568" }}>en {getDaysUntil(proxima.proximaReunion)} días</div>
              </div>
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(265px,1fr))", gap: 16 }}>
            {clients.map(c => {
              const pm = c.misTareas.filter(t => !t.done).length;
              const pc = c.tareasCliente.filter(t => !t.done).length;
              const dias = getDaysUntil(c.proximaReunion);
              return (
                <div key={c.id} className="ch" onClick={() => { setSelected(c.id); setView("detalle"); setActiveTab("tareas"); }}
                  style={{ ...S.card, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: c.color }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ fontSize: 28 }}>{c.icon}</div>
                    <div style={{ background: (etapaConfig[c.etapa]?.color || "#94A3B8") + "20", color: etapaConfig[c.etapa]?.color || "#94A3B8", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{c.etapa}</div>
                  </div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: "#4A5568", marginBottom: 14 }}>{c.rubro} · {c.via}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                    <div style={{ background: "#131929", borderRadius: 10, padding: "8px 12px" }}>
                      <div style={{ fontSize: 10, color: "#4A5568", marginBottom: 2 }}>MIS TAREAS</div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: pm > 0 ? "#E8C547" : "#34D399" }}>{pm}</div>
                    </div>
                    <div style={{ background: "#131929", borderRadius: 10, padding: "8px 12px" }}>
                      <div style={{ fontSize: 10, color: "#4A5568", marginBottom: 2 }}>CLIENTE</div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: pc > 0 ? "#4ECDC4" : "#34D399" }}>{pc}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 12, color: "#4A5568" }}>📅 {formatDate(c.proximaReunion)}</div>
                    <div style={{ fontSize: 11, color: dias <= 2 ? "#FF6B6B" : "#4A5568" }}>{dias === 0 ? "¡Hoy!" : dias < 0 ? "Vencida" : `${dias}d`}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>}

        {/* DETALLE */}
        {view === "detalle" && selectedClient && (
          <div>
            <div style={{ ...S.card, marginBottom: 16, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: selectedClient.color }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 30, marginBottom: 4 }}>{selectedClient.icon}</div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800 }}>{selectedClient.name}</div>
                  <div style={{ fontSize: 13, color: "#4A5568" }}>{selectedClient.rubro} · Vía {selectedClient.via}</div>
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                  <div style={{ background: (etapaConfig[selectedClient.etapa]?.color || "#94A3B8") + "20", color: etapaConfig[selectedClient.etapa]?.color || "#94A3B8", fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 20 }}>{selectedClient.etapa}</div>
                  <button style={{ ...S.btn, background: "#E8C547", color: "#0A0E1A", padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 700 }}
                    onClick={() => setView("update")}>+ Actualizar reunión</button>
                </div>
              </div>
              <div style={{ marginTop: 16, background: "#131929", borderRadius: 12, padding: "12px 16px" }}>
                <div style={{ fontSize: 11, color: "#4A5568", marginBottom: 4, fontWeight: 600 }}>ÚLTIMO AVANCE</div>
                <div style={{ fontSize: 13, color: "#CBD5E0", lineHeight: 1.6 }}>{selectedClient.ultimoAvance}</div>
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ fontSize: 13, color: "#4A5568" }}>📅 Próxima reunión:</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#E8C547" }}>{formatDate(selectedClient.proximaReunion)}</div>
                <div style={{ fontSize: 12, color: "#4A5568" }}>— {selectedClient.focoReunion}</div>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid #1E2A3A", marginBottom: 16 }}>
              {["tareas", "iniciativas"].map(tab => (
                <button key={tab} className={`${activeTab === tab ? "tab-active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                  style={{ ...S.btn, background: "transparent", color: activeTab === tab ? "#E8C547" : "#4A5568", padding: "10px 20px", fontSize: 13, fontWeight: 600, textTransform: "capitalize" }}>
                  {tab === "tareas" ? "Tareas" : "Iniciativas"}
                </button>
              ))}
            </div>

            {/* TAREAS */}
            {activeTab === "tareas" && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { field: "misTareas", label: "MIS TAREAS", color: "#E8C547", key: "mia" },
                  { field: "tareasCliente", label: "TAREAS DEL CLIENTE", color: "#4ECDC4", key: "cliente" }
                ].map(({ field, label, color, key }) => (
                  <div key={field} style={S.card}>
                    <div style={{ fontSize: 11, color, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>{label}</div>
                    {selectedClient[field].length === 0 && <div style={{ fontSize: 13, color: "#4A5568", marginBottom: 12 }}>Sin tareas</div>}
                    {selectedClient[field].map((tarea, idx) => (
                      <div key={idx} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "7px 0", borderBottom: idx < selectedClient[field].length - 1 ? "1px solid #131929" : "none" }}>
                        {/* Checkbox */}
                        <div onClick={() => toggleTarea(selectedClient.id, field, idx)}
                          style={{ width: 18, height: 18, borderRadius: 5, border: tarea.done ? "none" : `2px solid ${color}`, background: tarea.done ? color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, cursor: "pointer" }}>
                          {tarea.done && <span style={{ fontSize: 11, color: "#0A0E1A", fontWeight: 700 }}>✓</span>}
                        </div>
                        {/* Texto editable */}
                        <div style={{ flex: 1, fontSize: 13, color: tarea.done ? "#4A5568" : "#CBD5E0", textDecoration: tarea.done ? "line-through" : "none", lineHeight: 1.5 }}>
                          <EditableText
                            value={tarea.texto}
                            onSave={(txt) => editTarea(selectedClient.id, field, idx, txt)}
                            multiline
                          />
                        </div>
                        {/* Borrar */}
                        <button className="ib del" style={S.iconBtn} onClick={() => deleteTarea(selectedClient.id, field, idx)} title="Eliminar">✕</button>
                      </div>
                    ))}
                    {/* Agregar tarea */}
                    <div className="add-row" style={{ marginTop: 10 }}>
                      <input
                        placeholder="+ Nueva tarea..."
                        value={nuevaTarea[key]}
                        onChange={e => setNuevaTarea(p => ({ ...p, [key]: e.target.value }))}
                        onKeyDown={e => {
                          if (e.key === "Enter" && nuevaTarea[key].trim()) {
                            addTarea(selectedClient.id, field, nuevaTarea[key]);
                            setNuevaTarea(p => ({ ...p, [key]: "" }));
                          }
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* INICIATIVAS */}
            {activeTab === "iniciativas" && (
              <div style={S.card}>
                <div style={{ fontSize: 11, color: "#4A5568", fontWeight: 700, letterSpacing: "1px", marginBottom: 16 }}>INICIATIVAS DEL PROYECTO</div>
                {selectedClient.iniciativas.length === 0 && <div style={{ fontSize: 13, color: "#4A5568", marginBottom: 12 }}>Sin iniciativas cargadas.</div>}
                {selectedClient.iniciativas.map((ini, idx) => {
                  const cfg = estadoConfig[ini.estado] || estadoConfig["pendiente"];
                  const progress = ini.estado === "completado" ? 100 : ini.estado === "en-progreso" ? 50 : 8;
                  return (
                    <div key={idx} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: idx < selectedClient.iniciativas.length - 1 ? "1px solid #131929" : "none" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 7 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, flex: 1 }}>
                          <EditableText value={ini.nombre} onSave={txt => editIniciativa(selectedClient.id, idx, txt)} />
                        </div>
                        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                          {/* Ciclar estado */}
                          <div onClick={() => cycleEstado(selectedClient.id, idx)}
                            style={{ background: cfg.bg, color: cfg.color, fontSize: 11, fontWeight: 600, padding: "2px 10px", borderRadius: 20, whiteSpace: "nowrap", cursor: "pointer" }}
                            title="Clic para cambiar estado">
                            {cfg.label}
                          </div>
                          <button className="ib del" style={S.iconBtn} onClick={() => deleteIniciativa(selectedClient.id, idx)} title="Eliminar">✕</button>
                        </div>
                      </div>
                      <div style={{ background: "#131929", borderRadius: 4, height: 4, overflow: "hidden" }}>
                        <div style={{ background: cfg.color, height: "100%", width: `${progress}%`, borderRadius: 4, transition: "width .5s" }} />
                      </div>
                    </div>
                  );
                })}
                {/* Agregar iniciativa */}
                <div className="add-row" style={{ marginTop: 10 }}>
                  <input
                    placeholder="+ Nueva iniciativa..."
                    value={nuevaIniciativa}
                    onChange={e => setNuevaIniciativa(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === "Enter" && nuevaIniciativa.trim()) {
                        addIniciativa(selectedClient.id, nuevaIniciativa);
                        setNuevaIniciativa("");
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ACTUALIZAR */}
        {view === "update" && selectedClient && (
          <div>
            <div style={{ ...S.card, marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "#4A5568", fontWeight: 700, letterSpacing: "1px", marginBottom: 6 }}>ACTUALIZAR REUNIÓN</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>{selectedClient.icon} {selectedClient.name}</div>
              <div style={{ fontSize: 13, color: "#94A3B8", marginBottom: 10 }}>Contame qué pasó en la reunión. Qué hiciste, qué quedó pendiente, qué tiene que hacer el cliente y cuál es el foco de la próxima.</div>
              <textarea value={updateText} onChange={e => setUpdateText(e.target.value)}
                placeholder="Ej: Hoy revisamos el dashboard, quedó funcionando. Le pedí que cargue las ventas de los 3 locales que faltan. La semana que viene vemos los números consolidados..."
                style={{ width: "100%", background: "#131929", border: "1px solid #2D3748", borderRadius: 12, padding: 16, color: "#E2E8F0", fontSize: 14, lineHeight: 1.7, minHeight: 140, transition: "border-color .2s" }} />
              <div style={{ marginTop: 12 }}>
                <button style={{ ...S.btn, background: procesando ? "#2D3748" : "#E8C547", color: "#0A0E1A", padding: "10px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, opacity: (!updateText.trim() || procesando) ? 0.5 : 1 }}
                  onClick={procesarUpdate} disabled={procesando || !updateText.trim()}>
                  {procesando ? "Procesando..." : "Procesar con IA"}
                </button>
              </div>
            </div>

            {updateResult && !updateResult.error && (
              <div style={{ ...S.card, border: "1px solid #34D399" }}>
                <div style={{ fontSize: 11, color: "#34D399", fontWeight: 700, letterSpacing: "1px", marginBottom: 16 }}>RESULTADO — REVISÁ Y CONFIRMÁ</div>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 11, color: "#4A5568", marginBottom: 6 }}>AVANCE</div>
                  <div style={{ background: "#131929", borderRadius: 10, padding: 12, fontSize: 13, color: "#CBD5E0", lineHeight: 1.6 }}>{updateResult.ultimoAvance}</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                  {[{ key: "misTareas", label: "MIS TAREAS", color: "#E8C547" }, { key: "tareasCliente", label: "TAREAS CLIENTE", color: "#4ECDC4" }].map(({ key, label, color }) => (
                    <div key={key}>
                      <div style={{ fontSize: 11, color, marginBottom: 6 }}>{label}</div>
                      {updateResult[key]?.map((t, i) => <div key={i} style={{ background: "#131929", borderRadius: 8, padding: "8px 12px", fontSize: 13, marginBottom: 6, color: "#CBD5E0" }}>· {t}</div>)}
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: "#4A5568", marginBottom: 6 }}>FOCO PRÓXIMA REUNIÓN</div>
                  <div style={{ background: "#131929", borderRadius: 10, padding: 12, fontSize: 13, color: "#CBD5E0" }}>{updateResult.focoReunion}</div>
                </div>
                <button style={{ ...S.btn, background: "#34D399", color: "#0A0E1A", padding: "10px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700 }} onClick={aplicarUpdate}>
                  Aplicar actualización
                </button>
              </div>
            )}
            {updateResult?.error && <div style={{ background: "#1A1020", border: "1px solid #FF6B6B", borderRadius: 12, padding: 16, fontSize: 13, color: "#FF6B6B" }}>{updateResult.error}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
