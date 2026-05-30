import { useState, useEffect, useRef } from "react";

const initialClients = [
  {
    id: 1,
    name: "Love Chuka",
    rubro: "Retail indumentaria",
    via: "Directa",
    etapa: "Implementación",
    color: "#0891B2",
    accent: "#ECFEFF",
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
    rubro: "Gestión de residuos industriales",
    via: "PCH",
    etapa: "En curso",
    color: "#0D9488",
    accent: "#F0FDFA",
    icon: "🏭",
    ultimoAvance: "Reunión 3 completada: se trabajaron los 5 porqués en vivo. Emergieron verbos candidatos para el propósito (transformar, sostener, liberar, garantizar, ordenar) y la palabra espontánea 'seriedad'.",
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
    rubro: "Productos médicos y ortopédicos",
    via: "PCH",
    etapa: "Implementación",
    color: "#7C3AED",
    accent: "#F5F3FF",
    icon: "🩺",
    ultimoAvance: "Auditoría completa del proceso de pedidos con entrevistas a administración, depósito y producción. Plataforma de gestión de caja en uso por Silvana y Camila.",
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
    focoReunion: "Entrevista con vendedores + validación del proceso rediseñado de pedidos",
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
    color: "#DC2626",
    accent: "#FEF2F2",
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
    color: "#059669",
    accent: "#ECFDF5",
    icon: "🦋",
    ultimoAvance: "Se publicó la plataforma con agenda online (React + Supabase vía Lovable). A la espera del alta de los 12 profes.",
    misTareas: [
      { texto: "Enviar mensaje al grupo de profes con link, paso a paso y deadline de 48 hs", done: false },
      { texto: "Cerrar a mano las altas de profes que falten al vencer el plazo*", done: false },
      { texto: "Resolver presentación de factura C (taller Museo del Juguete, OC 1529) en portal San Isidro", done: false },
      { texto: "Avanzar integración con Google Calendar*", done: false },
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
      { nombre: "Plan de alianzas institucionales", estado: "pendiente" },
      { nombre: "Diseño de formatos replicables / expansión territorial", estado: "pendiente" },
      { nombre: "Activos de contenido escalable", estado: "pendiente" },
    ],
  },
  {
    id: 6,
    name: "Coch",
    rubro: "Industria",
    via: "PCH",
    etapa: "En curso",
    color: "#D97706",
    accent: "#FFFBEB",
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
  "completado": { label: "Completado", color: "#059669", bg: "#ECFDF5", dot: "#059669" },
  "en-progreso": { label: "En progreso", color: "#D97706", bg: "#FFFBEB", dot: "#D97706" },
  "pendiente": { label: "Pendiente", color: "#94A3B8", bg: "#F8FAFC", dot: "#CBD5E1" },
};

const estadoOrder = ["pendiente", "en-progreso", "completado"];

const etapaConfig = {
  "Diagnóstico": { color: "#2563EB", bg: "#EFF6FF" },
  "Inicio": { color: "#D97706", bg: "#FFFBEB" },
  "En curso": { color: "#0891B2", bg: "#ECFEFF" },
  "Implementación": { color: "#059669", bg: "#ECFDF5" },
  "Seguimiento": { color: "#7C3AED", bg: "#F5F3FF" },
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

function EditableText({ value, onSave, multiline }) {
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
    const base = {
      ref, value: val,
      onChange: e => setVal(e.target.value),
      onBlur: save, onKeyDown: handleKey,
      style: { background: "#F0FDFA", border: "1.5px solid #0D9488", borderRadius: 6, color: "#0F172A", padding: "4px 8px", fontSize: "inherit", fontFamily: "inherit", width: "100%", outline: "none", lineHeight: 1.5 }
    };
    return multiline ? <textarea {...base} rows={2} style={{ ...base.style, resize: "none" }} /> : <input {...base} />;
  }

  return (
    <span onClick={() => setEditing(true)} title="Clic para editar"
      style={{ cursor: "text", borderBottom: "1.5px dashed #CBD5E1", paddingBottom: 1 }}>
      {value}
    </span>
  );
}

export default function PanelConsultoria() {
  const STORAGE_KEY = "consultoria-v4";
  const [clients, setClients] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEY); return s ? JSON.parse(s) : initialClients; }
    catch { return initialClients; }
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

  const sc = clients.find(c => c.id === selected);
  const totalMias = clients.reduce((a, c) => a + c.misTareas.filter(t => !t.done).length, 0);
  const totalClientes = clients.reduce((a, c) => a + c.tareasCliente.filter(t => !t.done).length, 0);
  const proxima = [...clients].sort((a, b) => new Date(a.proximaReunion) - new Date(b.proximaReunion))[0];

  function upd(id, fn) { setClients(p => p.map(c => c.id === id ? fn(c) : c)); }
  function toggleTarea(id, field, idx) { upd(id, c => ({ ...c, [field]: c[field].map((t, i) => i === idx ? { ...t, done: !t.done } : t) })); }
  function editTarea(id, field, idx, texto) { upd(id, c => ({ ...c, [field]: c[field].map((t, i) => i === idx ? { ...t, texto } : t) })); }
  function deleteTarea(id, field, idx) { upd(id, c => ({ ...c, [field]: c[field].filter((_, i) => i !== idx) })); }
  function addTarea(id, field, texto) { if (!texto.trim()) return; upd(id, c => ({ ...c, [field]: [...c[field], { texto: texto.trim(), done: false }] })); }
  function editIni(id, idx, nombre) { upd(id, c => ({ ...c, iniciativas: c.iniciativas.map((ini, i) => i === idx ? { ...ini, nombre } : ini) })); }
  function cycleEstado(id, idx) { upd(id, c => ({ ...c, iniciativas: c.iniciativas.map((ini, i) => i !== idx ? ini : { ...ini, estado: estadoOrder[(estadoOrder.indexOf(ini.estado) + 1) % estadoOrder.length] }) })); }
  function deleteIni(id, idx) { upd(id, c => ({ ...c, iniciativas: c.iniciativas.filter((_, i) => i !== idx) })); }
  function addIni(id, nombre) { if (!nombre.trim()) return; upd(id, c => ({ ...c, iniciativas: [...c.iniciativas, { nombre: nombre.trim(), estado: "pendiente" }] })); }

  async function procesarUpdate() {
    if (!updateText.trim() || !sc) return;
    setProcesando(true); setUpdateResult(null);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514", max_tokens: 1000,
          system: `Sos el asistente de consultoría de Diego Selem. Procesá el resumen de reunión y devolvé SOLO un JSON válido con esta estructura, sin texto antes ni después:
{"ultimoAvance":"string","misTareas":["tarea1"],"tareasCliente":["tarea1"],"focoReunion":"string"}`,
          messages: [{ role: "user", content: `Cliente: ${sc.name}\nEtapa: ${sc.etapa}\nResumen: ${updateText}` }]
        })
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === "text")?.text || "";
      setUpdateResult(JSON.parse(text.replace(/```json|```/g, "").trim()));
    } catch { setUpdateResult({ error: "No se pudo procesar. Revisá el resumen e intentá de nuevo." }); }
    setProcesando(false);
  }

  function aplicarUpdate() {
    if (!updateResult || updateResult.error) return;
    upd(selected, c => ({
      ...c,
      ultimoAvance: updateResult.ultimoAvance || c.ultimoAvance,
      misTareas: [...updateResult.misTareas.map(t => ({ texto: t, done: false })), ...c.misTareas.filter(t => t.done)],
      tareasCliente: [...updateResult.tareasCliente.map(t => ({ texto: t, done: false })), ...c.tareasCliente.filter(t => t.done)],
      focoReunion: updateResult.focoReunion || c.focoReunion,
    }));
    setUpdateText(""); setUpdateResult(null); setView("detalle");
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC", fontFamily: "'Outfit', sans-serif", color: "#0F172A" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#CBD5E1;border-radius:3px}
        .card{background:#fff;border:1px solid #E2E8F0;border-radius:20px;transition:all .2s}
        .card-hover:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.08);border-color:#BAE6FD;cursor:pointer}
        .btn{cursor:pointer;border:none;font-family:inherit;transition:all .2s}
        .btn:hover{opacity:.88}
        .del-btn{cursor:pointer;border:none;background:transparent;color:#CBD5E1;font-size:13px;padding:2px 6px;border-radius:4px;transition:all .2s;font-family:inherit}
        .del-btn:hover{color:#EF4444;background:#FEF2F2}
        .tab{cursor:pointer;border:none;background:transparent;font-family:inherit;padding:10px 20px;font-size:13px;font-weight:600;color:#94A3B8;transition:all .2s;border-bottom:2px solid transparent}
        .tab:hover{color:#0D9488}
        .tab-active{color:#0D9488;border-bottom-color:#0D9488}
        .add-input{width:100%;background:#F8FAFC;border:1.5px dashed #CBD5E1;border-radius:10px;padding:9px 14px;color:#64748B;font-size:13px;font-family:inherit;outline:none;transition:all .2s}
        .add-input:focus{border-color:#0D9488;border-style:solid;background:#F0FDFA;color:#0F172A}
        textarea{font-family:inherit;outline:none;resize:none}
        input{font-family:inherit;outline:none}
      `}</style>

      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E2E8F0", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {view !== "panel" && (
            <button className="btn" onClick={() => { setView(view === "update" ? "detalle" : "panel"); setUpdateResult(null); setUpdateText(""); }}
              style={{ background: "#F1F5F9", color: "#64748B", padding: "7px 14px", borderRadius: 10, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
              ← Volver
            </button>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #0D9488, #0891B2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#fff" }}>D</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.3px" }}>DS <span style={{ color: "#0D9488" }}>Consultoría</span></div>
              <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>Panel de Control</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
            <div>
              <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>Mis tareas</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#0F172A", lineHeight: 1 }}>{totalMias}</div>
            </div>
          </div>
          <div style={{ width: 1, height: 28, background: "#E2E8F0" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0D9488" }} />
            <div>
              <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>Pendientes clientes</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#0F172A", lineHeight: 1 }}>{totalClientes}</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 24px" }}>

        {/* PANEL GENERAL */}
        {view === "panel" && <>
          {proxima && (
            <div style={{ background: "linear-gradient(135deg, #0D9488, #0891B2)", borderRadius: 20, padding: "20px 28px", marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 8px 32px rgba(13,148,136,.25)" }}>
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.7)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 4 }}>Próxima reunión</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>{proxima.name}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.8)", marginTop: 2 }}>{proxima.focoReunion}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>{formatDate(proxima.proximaReunion)}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", marginTop: 2 }}>en {getDaysUntil(proxima.proximaReunion)} días</div>
              </div>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {clients.map(c => {
              const pm = c.misTareas.filter(t => !t.done).length;
              const pc = c.tareasCliente.filter(t => !t.done).length;
              const dias = getDaysUntil(c.proximaReunion);
              const etapa = etapaConfig[c.etapa] || { color: "#64748B", bg: "#F1F5F9" };
              return (
                <div key={c.id} className="card card-hover" onClick={() => { setSelected(c.id); setView("detalle"); setActiveTab("tareas"); }}
                  style={{ padding: 0, overflow: "hidden" }}>
                  {/* Color bar */}
                  <div style={{ height: 5, background: c.color }} />
                  <div style={{ padding: "20px 22px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, background: c.accent, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{c.icon}</div>
                      <div style={{ background: etapa.bg, color: etapa.color, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: "0.3px" }}>{c.etapa}</div>
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", marginBottom: 3, letterSpacing: "-0.2px" }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: "#94A3B8", marginBottom: 18 }}>{c.rubro} · {c.via}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                      <div style={{ background: pm > 0 ? "#FFFBEB" : "#F0FDF4", borderRadius: 12, padding: "10px 14px" }}>
                        <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 2 }}>Mis tareas</div>
                        <div style={{ fontSize: 24, fontWeight: 800, color: pm > 0 ? "#D97706" : "#059669" }}>{pm}</div>
                      </div>
                      <div style={{ background: pc > 0 ? "#F0FDFA" : "#F0FDF4", borderRadius: 12, padding: "10px 14px" }}>
                        <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 2 }}>Cliente</div>
                        <div style={{ fontSize: 24, fontWeight: 800, color: pc > 0 ? "#0D9488" : "#059669" }}>{pc}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid #F1F5F9" }}>
                      <div style={{ fontSize: 12, color: "#64748B" }}>📅 {formatDate(c.proximaReunion)}</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: dias <= 2 ? "#EF4444" : "#94A3B8", background: dias <= 2 ? "#FEF2F2" : "#F8FAFC", padding: "2px 10px", borderRadius: 20 }}>
                        {dias === 0 ? "¡Hoy!" : dias < 0 ? "Vencida" : `${dias}d`}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>}

        {/* DETALLE */}
        {view === "detalle" && sc && (
          <div>
            <div className="card" style={{ padding: 28, marginBottom: 20, overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: sc.color }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 52, height: 52, background: sc.accent, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{sc.icon}</div>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.4px" }}>{sc.name}</div>
                    <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 2 }}>{sc.rubro} · Vía {sc.via}</div>
                    <div style={{ display: "inline-block", background: (etapaConfig[sc.etapa]?.bg || "#F1F5F9"), color: (etapaConfig[sc.etapa]?.color || "#64748B"), fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 20, marginTop: 8 }}>{sc.etapa}</div>
                  </div>
                </div>
                <button className="btn" onClick={() => setView("update")}
                  style={{ background: "linear-gradient(135deg, #0D9488, #0891B2)", color: "#fff", padding: "10px 20px", borderRadius: 12, fontSize: 13, fontWeight: 700, boxShadow: "0 4px 16px rgba(13,148,136,.3)" }}>
                  + Actualizar reunión
                </button>
              </div>

              <div style={{ marginTop: 20, background: "#F8FAFC", borderRadius: 14, padding: "14px 18px", borderLeft: `4px solid ${sc.color}` }}>
                <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 6 }}>Último avance</div>
                <div style={{ fontSize: 13, color: "#334155", lineHeight: 1.7 }}>{sc.ultimoAvance}</div>
              </div>

              <div style={{ marginTop: 14, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ fontSize: 13, color: "#64748B" }}>📅 Próxima reunión:</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: sc.color }}>{formatDate(sc.proximaReunion)}</div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>— {sc.focoReunion}</div>
              </div>
            </div>

            <div style={{ display: "flex", borderBottom: "1px solid #E2E8F0", marginBottom: 20 }}>
              {["tareas", "iniciativas"].map(tab => (
                <button key={tab} className={`tab ${activeTab === tab ? "tab-active" : ""}`} onClick={() => setActiveTab(tab)}>
                  {tab === "tareas" ? "Tareas" : "Iniciativas"}
                </button>
              ))}
            </div>

            {activeTab === "tareas" && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  { field: "misTareas", label: "Mis tareas", color: "#D97706", bg: "#FFFBEB", key: "mia" },
                  { field: "tareasCliente", label: "Tareas del cliente", color: "#0D9488", bg: "#F0FDFA", key: "cliente" }
                ].map(({ field, label, color, bg, key }) => (
                  <div key={field} className="card" style={{ padding: 22 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
                      <div style={{ fontSize: 12, fontWeight: 700, color, textTransform: "uppercase", letterSpacing: "0.8px" }}>{label}</div>
                      <div style={{ marginLeft: "auto", background: bg, color, fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 20 }}>
                        {sc[field].filter(t => !t.done).length} pendientes
                      </div>
                    </div>
                    {sc[field].length === 0 && <div style={{ fontSize: 13, color: "#CBD5E1", fontStyle: "italic", marginBottom: 12 }}>Sin tareas</div>}
                    {sc[field].map((tarea, idx) => (
                      <div key={idx} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "9px 0", borderBottom: idx < sc[field].length - 1 ? "1px solid #F1F5F9" : "none" }}>
                        <div onClick={() => toggleTarea(sc.id, field, idx)}
                          style={{ width: 20, height: 20, borderRadius: 6, border: tarea.done ? "none" : `2px solid ${color}`, background: tarea.done ? color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, cursor: "pointer", transition: "all .15s" }}>
                          {tarea.done && <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </div>
                        <div style={{ flex: 1, fontSize: 13, color: tarea.done ? "#CBD5E1" : "#334155", textDecoration: tarea.done ? "line-through" : "none", lineHeight: 1.6 }}>
                          <EditableText value={tarea.texto} onSave={txt => editTarea(sc.id, field, idx, txt)} multiline />
                        </div>
                        <button className="del-btn" onClick={() => deleteTarea(sc.id, field, idx)}>✕</button>
                      </div>
                    ))}
                    <div style={{ marginTop: 12 }}>
                      <input className="add-input" placeholder="+ Nueva tarea... (Enter para guardar)"
                        value={nuevaTarea[key]}
                        onChange={e => setNuevaTarea(p => ({ ...p, [key]: e.target.value }))}
                        onKeyDown={e => { if (e.key === "Enter" && nuevaTarea[key].trim()) { addTarea(sc.id, field, nuevaTarea[key]); setNuevaTarea(p => ({ ...p, [key]: "" })); } }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "iniciativas" && (
              <div className="card" style={{ padding: 22 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 20 }}>Iniciativas del proyecto</div>
                {sc.iniciativas.length === 0 && <div style={{ fontSize: 13, color: "#CBD5E1", fontStyle: "italic", marginBottom: 12 }}>Sin iniciativas cargadas.</div>}
                {sc.iniciativas.map((ini, idx) => {
                  const cfg = estadoConfig[ini.estado] || estadoConfig["pendiente"];
                  const progress = ini.estado === "completado" ? 100 : ini.estado === "en-progreso" ? 50 : 0;
                  return (
                    <div key={idx} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: idx < sc.iniciativas.length - 1 ? "1px solid #F1F5F9" : "none" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 8 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "#334155", flex: 1 }}>
                          <EditableText value={ini.nombre} onSave={txt => editIni(sc.id, idx, txt)} />
                        </div>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          <div onClick={() => cycleEstado(sc.id, idx)}
                            style={{ background: cfg.bg, color: cfg.color, fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 20, cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 5 }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.dot }} />
                            {cfg.label}
                          </div>
                          <button className="del-btn" onClick={() => deleteIni(sc.id, idx)}>✕</button>
                        </div>
                      </div>
                      <div style={{ background: "#F1F5F9", borderRadius: 4, height: 4, overflow: "hidden" }}>
                        <div style={{ background: `linear-gradient(90deg, ${sc.color}, ${cfg.color})`, height: "100%", width: `${progress}%`, borderRadius: 4, transition: "width .6s ease" }} />
                      </div>
                    </div>
                  );
                })}
                <div style={{ marginTop: 12 }}>
                  <input className="add-input" placeholder="+ Nueva iniciativa... (Enter para guardar)"
                    value={nuevaIniciativa}
                    onChange={e => setNuevaIniciativa(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter" && nuevaIniciativa.trim()) { addIni(sc.id, nuevaIniciativa); setNuevaIniciativa(""); } }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ACTUALIZAR */}
        {view === "update" && sc && (
          <div>
            <div className="card" style={{ padding: 28, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, background: sc.accent, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{sc.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Actualizar reunión</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#0F172A" }}>{sc.name}</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#64748B", marginBottom: 12 }}>
                Contame qué pasó en la reunión. Qué hiciste, qué quedó pendiente, qué tiene que hacer el cliente y cuál es el foco de la próxima.
              </div>
              <textarea value={updateText} onChange={e => setUpdateText(e.target.value)}
                placeholder="Ej: Hoy revisamos el dashboard, quedó funcionando. Le pedí que cargue las ventas de los 3 locales que faltan. La semana que viene vemos los números consolidados..."
                style={{ width: "100%", background: "#F8FAFC", border: "1.5px solid #E2E8F0", borderRadius: 14, padding: 18, color: "#0F172A", fontSize: 14, lineHeight: 1.7, minHeight: 150 }} />
              <div style={{ marginTop: 14 }}>
                <button className="btn" onClick={procesarUpdate} disabled={procesando || !updateText.trim()}
                  style={{ background: procesando || !updateText.trim() ? "#E2E8F0" : "linear-gradient(135deg, #0D9488, #0891B2)", color: procesando || !updateText.trim() ? "#94A3B8" : "#fff", padding: "12px 28px", borderRadius: 12, fontSize: 14, fontWeight: 700, boxShadow: procesando || !updateText.trim() ? "none" : "0 4px 16px rgba(13,148,136,.3)" }}>
                  {procesando ? "Procesando..." : "Procesar con IA →"}
                </button>
              </div>
            </div>

            {updateResult && !updateResult.error && (
              <div className="card" style={{ padding: 28, borderColor: "#6EE7B7" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#059669", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 20 }}>✓ Resultado — Revisá y confirmá</div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", marginBottom: 8 }}>Avance</div>
                  <div style={{ background: "#F8FAFC", borderRadius: 12, padding: 14, fontSize: 13, color: "#334155", lineHeight: 1.7 }}>{updateResult.ultimoAvance}</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[{ key: "misTareas", label: "Mis tareas", color: "#D97706" }, { key: "tareasCliente", label: "Tareas cliente", color: "#0D9488" }].map(({ key, label, color }) => (
                    <div key={key}>
                      <div style={{ fontSize: 11, color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 8 }}>{label}</div>
                      {updateResult[key]?.map((t, i) => <div key={i} style={{ background: "#F8FAFC", borderRadius: 10, padding: "9px 14px", fontSize: 13, marginBottom: 6, color: "#334155" }}>· {t}</div>)}
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", marginBottom: 8 }}>Foco próxima reunión</div>
                  <div style={{ background: "#F8FAFC", borderRadius: 12, padding: 14, fontSize: 13, color: "#334155" }}>{updateResult.focoReunion}</div>
                </div>
                <button className="btn" onClick={aplicarUpdate}
                  style={{ background: "linear-gradient(135deg, #059669, #0D9488)", color: "#fff", padding: "12px 28px", borderRadius: 12, fontSize: 14, fontWeight: 700, boxShadow: "0 4px 16px rgba(5,150,105,.3)" }}>
                  Aplicar actualización ✓
                </button>
              </div>
            )}
            {updateResult?.error && <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 14, padding: 16, fontSize: 13, color: "#DC2626" }}>{updateResult.error}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
