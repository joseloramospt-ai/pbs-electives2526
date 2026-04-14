import { useState, useRef, useEffect } from “react”;

const ELECTIVES = [
{ group: “Finance & Investments”, color: “#1a5c3a”, courses: [
{ id: “pevc”, name: “Private Equity and Venture Capital”, faculty: “Pedro Pinheiro + Miguel Sousa”, links: [“https://www.linkedin.com/in/pedromontespinheiro/”], format: “In Person OR Online”, desc: “Long-term equity investment into private companies. PE&VC firms actively manage investee companies for value creation. Industry growing fast globally — $3.8T AUM. In Portugal still in infancy but expanding. Covers deal structures, fund types, value creation strategies.”, concentrations: [“Finance & Investments”, “Innovation & Entrepreneurship”] },
{ id: “blockchain”, name: “Blockchain & Fintech”, faculty: “Christian von Eitzen Delgado”, links: [“https://www.linkedin.com/in/christiandelgadovoneitzen/”], format: “100% Online”, desc: “Business models disrupting Financial Services. Blockchain, AI, data wars, regulation, real-life cases of technology convergence in heavily regulated environments.”, concentrations: [“Finance & Investments”, “Innovation & Entrepreneurship”, “Data, Tech & AI”] },
{ id: “vbm”, name: “Value Based Management”, faculty: “Jorge Farinha”, links: [“https://www.linkedin.com/in/jorgefarinha”], format: “Hybrid”, desc: “Economic Profit concepts, Firm Value relationship, incentive schemes. Practical calculation, reporting, incentive compensation systems.”, concentrations: [“Finance & Investments”] },
{ id: “vic”, name: “Valuing Innovative Companies”, faculty: “Jay Dahya (Columbia)”, links: [“https://business.columbia.edu/faculty/people/jay-dahya”], format: “100% Online”, desc: “Capstone (cap 25). Valuation approaches, growth drivers, innovation-growth connection. Extremely challenging, case-driven. Columbia Business School.”, concentrations: [“Finance & Investments”, “Innovation & Entrepreneurship”] },
{ id: “esgfin”, name: “ESG & Finance”, faculty: “Pedro Gete”, links: [“https://www.linkedin.com/in/pedro-gete-4b1b0615b/”], format: “In Person OR Online”, desc: “Finance × sustainability. ESG criteria, green investments, impact investing, sustainable risk management, technology’s role.”, concentrations: [“Finance & Investments”, “Sustainability Certificate”], esg: true },
]},
{ group: “Branding, Marketing & Sales”, color: “#8b2252”, courses: [
{ id: “brands”, name: “Building Meaningful Brands”, faculty: “Gustavo Mendes”, links: [“https://www.linkedin.com/in/gustavomendes”], format: “Hybrid”, desc: “Brands on innate meaning perform better. Brand experience, consumer behavior, meaning-led brands, customer-centric models, performance indicators.”, concentrations: [“Branding, Marketing & Sales”] },
{ id: “sales”, name: “Strategic Sales Management”, faculty: “Luís Sequeira”, links: [“https://www.isg.pt/home/oferta-formativa/docentes/biografia-41/”], format: “Hybrid”, desc: “Sales as strategic component. Financial measurement, consumer behavior, team management. VBS, DDS, Omnichannel.”, concentrations: [“Branding, Marketing & Sales”] },
{ id: “narrative”, name: “Narrative Strategy, Promotion & Advertising”, faculty: “Victor Gay Zaragoza”, links: [], format: “Hybrid”, desc: “Storytelling shapes brand perception. Brand narratives, business alignment, differentiation, integrated promotional strategies.”, concentrations: [“Branding, Marketing & Sales”, “Strategy & Business”] },
{ id: “aimarketing”, name: “AI-Driven Marketing”, faculty: “Manuel Alonso”, links: [“https://www.linkedin.com/in/manuelalonsocoto”], format: “Hybrid”, desc: “AI impact on marketing. Automated content, predictive analytics, AR, chatbots. Persona development, SEO, ethical considerations.”, concentrations: [“Branding, Marketing & Sales”, “Data, Tech & AI”] },
{ id: “servicedesign”, name: “Service Design & CX”, faculty: “Luís Garrido Marques”, links: [“https://www.linkedin.com/in/luisgarridomarques/”], format: “Hybrid”, desc: “Service design and CX with omnichannel. Customer journey mapping, service blueprinting, trend analysis.”, concentrations: [“Branding, Marketing & Sales”, “Data, Tech & AI”] },
]},
{ group: “Strategy & Business”, color: “#2a4a7f”, courses: [
{ id: “foresight”, name: “Strategic Foresight”, faculty: “Alexander Van de Putte”, links: [“https://www.linkedin.com/in/alexandervdp”], format: “Hybrid”, desc: “Self-disruption before external forces do. Multiple plausible futures, scenario testing, strategic flexibility, resilience.”, concentrations: [“Strategy & Business”, “Innovation & Entrepreneurship”] },
{ id: “intbiz”, name: “International Business”, faculty: “Pedro Vieira”, links: [“https://www.linkedin.com/in/pedroavieira/”], format: “Hybrid”, desc: “Cross-border business: strategic, operational, cultural dimensions. Market entry, international expansion, cross-cultural management.”, concentrations: [“Strategy & Business”] },
{ id: “advstrategy”, name: “Advanced Strategy”, faculty: “Daniel Gelsing”, links: [“https://www.linkedin.com/in/daniel-gelsing-771342157”], format: “Hybrid”, desc: “Corporate strategy: acquisition/divestiture, deal sourcing, post-merger complexities. Present solutions convincingly.”, concentrations: [“Strategy & Business”] },
{ id: “china”, name: “China: Economy, Tech & Geopolitics”, faculty: “Sherley Ze Yu”, links: [“https://www.linkedin.com/in/shirleyzeyu/”], format: “Hybrid”, desc: “China to global power. 3×5h. Made in China 2025, AI Vision 2030, semiconductors, US CHIPS Act, US-China tech competition.”, concentrations: [“Strategy & Business”] },
{ id: “geopolitics”, name: “Corporate Geopolitics & Economics”, faculty: “Jorge Rodrigues”, links: [“https://www.linkedin.com/in/jorge-rodrigues-685b94b”], format: “Hybrid”, desc: “Geopolitical foundation for strategic decisions. Business continuity, supply chains, risk/opportunity. Real-world cases.”, concentrations: [“Strategy & Business”] },
{ id: “legal”, name: “Legal Intelligence for Strategic Mgmt”, faculty: “Marisa Borsboom”, links: [“https://www.linkedin.com/in/marisamborsboom”], format: “Hybrid”, desc: “Law as strategic leadership. Data governance, platform regulation, AI oversight, litigation risk. Legal mindset.”, concentrations: [“Strategy & Business”] },
{ id: “esgsustainability”, name: “ESG | Sustainability for Impact”, faculty: “Oliver Balch”, links: [“https://www.linkedin.com/in/oliver-balch-phd-7b20966/”], format: “Hybrid”, desc: “Beyond CSR: progressive models, regenerative capitalism, stakeholder management. Group business planning.”, concentrations: [“Finance & Investments”,“Branding, Marketing & Sales”,“Strategy & Business”,“Leadership & Human Skills”,“Data, Tech & AI”,“Operations & Supply Chain”,“Sustainability Certificate”], esg: true },
]},
{ group: “Innovation & Entrepreneurship”, color: “#b85c00”, courses: [
{ id: “eta”, name: “Entrepreneurship Through Acquisitions”, faculty: “Diogo Almeida Alves”, links: [“https://www.linkedin.com/in/diogoalmeidalves”], format: “Hybrid”, desc: “Full ETA lifecycle: targets, due diligence, deal structuring, financing, post-acquisition value creation.”, concentrations: [“Finance & Investments”,“Innovation & Entrepreneurship”] },
{ id: “elab”, name: “Entrepreneurial Lab”, faculty: “Alberto Levy”, links: [“https://www.linkedin.com/in/betolevy”], format: “Hybrid”, desc: “4 ECTS, 30h. Requires business idea ready to pitch. Groups of 3+. Part of Entrepreneurship Track.”, concentrations: [“Innovation & Entrepreneurship”], note: “= 2 electives” },
{ id: “investready”, name: “Investment Readiness”, faculty: “Rodrigo Alvarenga”, links: [“https://www.linkedin.com/in/rodrigodealvarenga”], format: “Hybrid”, desc: “Preparing ventures for investment. Business model, financial metrics, valuation, pitch building, investor types. Open to all.”, concentrations: [“Finance & Investments”,“Innovation & Entrepreneurship”] },
{ id: “systemic”, name: “Systemic Thinking for Innovation”, faculty: “Rui Quinta + H. Nascimento”, links: [“https://www.linkedin.com/in/rquinta/”], format: “Hybrid”, desc: “Systems perspective on complexity. Mapping systems, deriving opportunities, value chain forces, resilient solutions.”, concentrations: [“Strategy & Business”,“Innovation & Entrepreneurship”] },
{ id: “esginnovation”, name: “ESG | Tech & Innovation for Sustainability”, faculty: “Telmo Machado”, links: [“https://www.linkedin.com/in/telmo-machado”], format: “Hybrid”, desc: “Circular Economy, decarbonisation. Circular business models, biomimicry, policy, KPIs for circular performance.”, concentrations: [“Innovation & Entrepreneurship”,“Data, Tech & AI”,“Sustainability Certificate”], esg: true },
]},
{ group: “Data, Tech & AI”, color: “#5b21b6”, courses: [
{ id: “aidesign”, name: “AI Design Thinking”, faculty: “Sérgio Ferreira”, links: [“https://www.linkedin.com/in/sergiofe/”], format: “100% Online”, desc: “Human-centered business and design principles. Stakeholder journeys. Shared value and societal impact.”, concentrations: [“Innovation & Entrepreneurship”,“Data, Tech & AI”] },
{ id: “prompting”, name: “Strategic Prompt Engineering”, faculty: “Stephan Berwanger”, links: [“https://www.linkedin.com/in/sthefanberwanger”], format: “100% Online”, desc: “Prompts for GenAI and Agentic AI across all business functions. Evaluating results, automating workflows.”, concentrations: [“Finance & Investments”,“Branding, Marketing & Sales”,“Strategy & Business”,“Leadership & Human Skills”,“Innovation & Entrepreneurship”,“Data, Tech & AI”,“Operations & Supply Chain”] },
{ id: “analytics”, name: “Advanced Analytics”, faculty: “André Santana”, links: [“https://www.linkedin.com/in/almsantana”], format: “Hybrid”, desc: “Strategic issues with advanced analytics. Business as analytical problems. Model building. Customer-focused.”, concentrations: [“Data, Tech & AI”] },
{ id: “securingai”, name: “Securing Enterprise AI”, faculty: “André Sousa”, links: [“https://www.linkedin.com/in/andremcsousa/”], format: “Hybrid”, desc: “AI at scale without compromising security. Copilots amplify weaknesses. Governance models, control frameworks.”, concentrations: [“Finance & Investments”,“Branding, Marketing & Sales”,“Strategy & Business”,“Data, Tech & AI”] },
]},
{ group: “Ops & Supply Chain”, color: “#4a5568”, courses: [
{ id: “esgchains”, name: “ESG | Sustainable Global Value Chains”, faculty: “Henrique Correa”, links: [“https://www.linkedin.com/in/henrique-correa-ab992a2/”], format: “100% Online”, desc: “Supply chain × business strategy. Competitive advantage through costs, flexibility, satisfaction. Two business games.”, concentrations: [“Operations & Supply Chain”,“Sustainability Certificate”], esg: true },
{ id: “process”, name: “Process Thinking”, faculty: “Américo Azevedo”, links: [“https://www.linkedin.com/in/americo-azevedo-02920627/”], format: “In-Person (PT)”, desc: “Functional to process-oriented. Critical processes, multi-level models, strategy alignment. In Portuguese.”, concentrations: [“Operations & Supply Chain”] },
{ id: “genaiprod”, name: “GenAI Product Development”, faculty: “Nicolle Merril”, links: [“https://www.linkedin.com/in/nicollemerrill”], format: “Hybrid”, desc: “AI product categories (assistants, generators, agents). Build AI assistant with Custom GPTs. Testing, iteration.”, concentrations: [“Innovation & Entrepreneurship”,“Data, Tech & AI”,“Operations & Supply Chain”] },
{ id: “projmgmt”, name: “Project Management”, faculty: “Alina Yaneva-Betcheva”, links: [“https://www.linkedin.com/in/Alina-Yaneva2021”], format: “Hybrid”, desc: “Project lifecycle, agile PM, Triple Bottom Line, charters, change management. Real-world examples.”, concentrations: [“Finance & Investments”,“Branding, Marketing & Sales”,“Leadership & Human Skills”,“Innovation & Entrepreneurship”,“Data, Tech & AI”,“Operations & Supply Chain”] },
]},
{ group: “Leadership”, color: “#9b1c1c”, courses: [
{ id: “transflead”, name: “Transformational Leadership”, faculty: “Reinier Starink”, links: [“https://www.linkedin.com/in/reinier-starink”], format: “In Person (EN)”, desc: “Public, private, individual level. Interactive: cases, exercises. Two C-suite guests.”, concentrations: [“Strategy & Business”,“Leadership & Human Skills”] },
{ id: “negotiation”, name: “Advanced Negotiation”, faculty: “Frederico Falcão”, links: [“https://www.linkedin.com/in/fredericodearrudafalcao/”], format: “Hybrid”, desc: “Simulation-based. Pairs/teams: pharma, film, M&A, multiparty/cross-cultural. Increasing complexity.”, concentrations: [“Strategy & Business”,“Leadership & Human Skills”] },
{ id: “collab”, name: “Building a Collaborative Culture”, faculty: “Blaire Palmer”, links: [“https://www.linkedin.com/in/blairepalmer/”], format: “Hybrid”, desc: “Why collaboration fails. Silos reinforced unintentionally. Contradictory tensions in org cultures.”, concentrations: [“Leadership & Human Skills”] },
{ id: “crosscultural”, name: “Cross Cultural Communication”, faculty: “Katziaryna Myznikava”, links: [“https://www.linkedin.com/in/myznikava”], format: “Hybrid”, desc: “Cross-cultural communication. Frameworks, diverse teams, negotiation pitfalls, conflict management.”, concentrations: [“Leadership & Human Skills”] },
{ id: “esgdiversity”, name: “ESG | Social Capital Through Diversity”, faculty: “Margarita Alonso”, links: [“https://www.linkedin.com/in/margarita-alonso-alvarez-ph-d-54438a2a/”], format: “Hybrid”, desc: “Strategic DEI as growth driver. All dimensions. DEI across value chain. AI biases, productive aging.”, concentrations: [“Leadership & Human Skills”,“Sustainability Certificate”], esg: true },
]},
];

const ALL = ELECTIVES.flatMap(g => g.courses.map(c => ({ …c, group: g.group, groupColor: g.color })));
const TOTAL = ALL.length;

const SYS = `You are an advisor helping an EMBA student at Porto Business School choose elective courses 2025/26. Answer in Portuguese (European) unless they write English. Be concise. RULES: 5 electives (10 ECTS). Each=2 ECTS/15h except Entrepreneurial Lab=4 ECTS/30h. Concentration=3 from same area, max 1. Sustainability Certificate=3 ESG. Min 15 students. Round 1: Apr 13-19. Round 2: May 6-13. ELECTIVES:\n${ALL.map(c => `[${c.group}] ${c.name} | ${c.faculty} | ${c.format} | ${c.concentrations.join(”, “)}${c.esg?” | ESG”:””}${c.note?” | “+c.note:””}\n${c.desc}`).join("\n\n")}`;

const fb=f=>{if(f.includes(“100% Online”))return{bg:”#ede9fe”,tx:”#5b21b6”};if(f.includes(“In Person”)||f.includes(“In-Person”))return{bg:”#fef3c7”,tx:”#92400e”};return{bg:”#e0f2fe”,tx:”#0369a1”}};

const CONC_TAG={
“Finance & Investments”:{label:“FIN”,bg:”#dcfce7”,tx:”#166534”},
“Branding, Marketing & Sales”:{label:“MKT”,bg:”#fce7f3”,tx:”#9d174d”},
“Strategy & Business”:{label:“STR”,bg:”#dbeafe”,tx:”#1e40af”},
“Leadership & Human Skills”:{label:“LEAD”,bg:”#fee2e2”,tx:”#991b1b”},
“Innovation & Entrepreneurship”:{label:“INNOV”,bg:”#ffedd5”,tx:”#9a3412”},
“Data, Tech & AI”:{label:“AI”,bg:”#ede9fe”,tx:”#5b21b6”},
“Operations & Supply Chain”:{label:“OPS”,bg:”#f1f5f9”,tx:”#334155”},
“Sustainability Certificate”:{label:“ESG”,bg:”#d1fae5”,tx:”#065f46”},
};

function buildReportHTML(fC,iC,fE,name,chosenConc,tECTS,track){
const targetE=tECTS||10;
const d=new Date().toLocaleDateString(“pt-PT”,{day:“numeric”,month:“long”,year:“numeric”});
const areas=[“Finance & Investments”,“Branding, Marketing & Sales”,“Strategy & Business”,“Leadership & Human Skills”,“Innovation & Entrepreneurship”,“Data, Tech & AI”,“Operations & Supply Chain”,“Sustainability Certificate”];
const areaShort=[“FIN”,“MKT”,“STR”,“LEAD”,“INNOV”,“AI”,“OPS”,“ESG”];
const areaColors=[”#1a5c3a”,”#8b2252”,”#2a4a7f”,”#9b1c1c”,”#b85c00”,”#5b21b6”,”#4a5568”,”#059669”];

// Concentration counts for finals
const cc={};fC.forEach(c=>(c.concentrations||[]).forEach(con=>{if(con!==“Sustainability Certificate”)cc[con]=(cc[con]||0)+1}));
const conc=Object.entries(cc).filter(([,v])=>v>=3);const eN=fC.filter(c=>c.esg).length;

// Build matrix for finals
const matrixFinal=fC.map(c=>({name:c.name,esg:c.esg,note:c.note,matches:areas.map(a=>c.concentrations.includes(a))}));

// Area totals for finals
const areaTotals=areas.map((_,i)=>matrixFinal.filter(r=>r.matches[i]).length);

// Build matrix for shortlist (non-final)
const slOnly=iC.filter(c=>!fC.some(f=>f.id===c.id));
const matrixShort=slOnly.map(c=>({name:c.name,esg:c.esg,note:c.note,matches:areas.map(a=>c.concentrations.includes(a))}));

const matrixCSS=`.mtx{border-collapse:collapse;width:100%;font-size:10px;margin-top:8px} .mtx th{padding:4px 3px;text-align:center;font-weight:700;font-size:8px;border:1px solid #e2e8f0;background:#f8fafc;writing-mode:vertical-lr;text-orientation:mixed;min-width:28px;height:80px} .mtx th.rh{writing-mode:horizontal-tb;text-align:left;font-size:10px;font-weight:500;min-width:auto;height:auto;padding:4px 8px} .mtx td{padding:3px;text-align:center;border:1px solid #e2e8f0;min-width:28px} .mtx td.rn{text-align:left;padding:4px 8px;font-size:10px;white-space:nowrap} .mtx .dot{display:inline-block;width:12px;height:12px;border-radius:2px;background:#2563eb} .mtx .dot-f{background:#059669} .mtx tr.totals td{font-weight:700;font-size:10px;background:#f8fafc} .mtx tr.totals td.hi{color:#059669}`;

const renderMatrix=(rows,isFinals)=>{
if(!rows.length)return””;
const totals=areas.map((_,i)=>rows.filter(r=>r.matches[i]).length);
return `<table class="mtx"> <tr><th class="rh">Elective</th>${areaShort.map((a,i)=>`<th style="color:${areaColors[i]}">${a}</th>`).join("")}</tr> ${rows.map(r=>`<tr>
<td class="rn">${r.name}${r.esg?’ <span class="tag te" style="font-size:8px">ESG</span>’:””}${r.note?` <span class="tag" style="font-size:8px;background:#fef9c3;color:#854d0e">${r.note}</span>`:””}</td>
${r.matches.map(m=>`<td>${m?`<span class=“dot${isFinals?” dot-f”:””}”></span>`:""}</td>`).join(””)}
</tr>`).join("")} <tr class="totals"><td class="rn" style="font-weight:700">Total</td>${totals.map(t=>`<td class=”${t>=3?“hi”:””}”>${t}</td>`).join("")}</tr> </table>`;
};

const h=`<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Electives — ${name||“EMBA”}</title>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'DM Sans',sans-serif;color:#1e293b;padding:40px;max-width:820px;margin:0 auto}
  h1{font-family:'Instrument Serif',Georgia,serif;font-size:26px;font-weight:400;margin-bottom:2px}
  h2{font-family:'Instrument Serif',Georgia,serif;font-size:18px;font-weight:400;margin:24px 0 10px;padding-bottom:4px;border-bottom:2px solid #e2e8f0}
  .sub{font-size:12px;color:#64748b;margin-bottom:20px}
  .meta{display:flex;gap:16px;margin-bottom:20px;font-size:12px}
  .mi{padding:6px 12px;border-radius:6px;background:#f8fafc;border:1px solid #e2e8f0}
  .mi strong{color:#059669}
  .fc{padding:8px 12px;border-radius:6px;border-left:3px solid #059669;background:#f0fdf4;margin-bottom:6px;font-size:12px}
  .fc .n{font-weight:600;font-size:13px}.fc .dd{color:#64748b;margin-top:1px}
  .fc .dc{color:#475569;margin-top:4px;line-height:1.4}
  .tags{display:flex;flex-wrap:wrap;gap:3px;margin-top:4px}
  .tag{font-size:9px;padding:1px 5px;border-radius:3px;background:#f1f5f9;color:#475569}
  .te{background:#d1fae5;color:#065f46;font-weight:700}
  .al{padding:6px 10px;border-radius:6px;font-size:11px;margin-top:6px}
  .as{background:#f0fdf4;color:#059669;border:1px solid #bbf7d0}
  .aw{background:#fffbeb;color:#b45309;border:1px solid #fde68a}
  .ii{font-size:12px;color:#475569;padding:2px 0}
  .legend{display:flex;gap:16px;margin-top:10px;font-size:10px;color:#64748b;align-items:center}
  .legend-dot{display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:3px;vertical-align:middle}
  .conc-note{font-size:11px;color:#475569;margin-top:8px;line-height:1.5;padding:8px 12px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0}
  .ft{margin-top:32px;padding-top:12px;border-top:1px solid #e2e8f0;font-size:10px;color:#94a3b8;text-align:center}
  ${matrixCSS}
  @media print{body{padding:20px}.mtx{page-break-inside:avoid}}
</style></head><body>

<h1>PBS EMBA Electives 2025/26</h1>
<div class="sub">${name?name+" · ":""}${d} · Round 1: 13–19 Abril</div>
<div class="meta">
  <div class="mi"><strong>${fC.length}</strong> electives finais</div>
  <div class="mi"><strong>${fE}/${targetE}</strong> ECTS</div>
  <div class="mi"><strong>${iC.length}</strong> na shortlist</div>
  ${track==="entrepreneurship"?'<div class="mi" style="background:#fff7ed;border-color:#fed7aa;color:#b85c00"><strong>🚀 Entrepreneurship Track</strong></div>':""}
  ${track==="sustainability"?'<div class="mi" style="background:#f0fdf4;border-color:#bbf7d0;color:#059669"><strong>🌱 Sustainability Certificate</strong></div>':""}
</div>

${fC.length?`<h2>★ Seleção Final</h2> ${fC.map((c,i)=>`<div class="fc">

  <div class="n">${i+1}. ${c.name}${c.esg?' <span class="tag te">ESG</span>':""}${c.note?` <span class="tag" style="background:#fef9c3;color:#854d0e">${c.note}</span>`:""}</div>
  <div class="dd">${c.faculty} · ${c.format} · ${c.group}</div>
  <div class="dc">${c.desc}</div>
  <div class="tags">${c.concentrations.map(x=>`<span class="tag">${x}</span>`).join("")}</div>
</div>`).join("")}
${fE>=targetE?`<div class="al as">✓ ${targetE} ECTS atingidos</div>`:`<div class="al aw">⚠ Faltam ${targetE-fE} ECTS</div>`}
${conc.map(([k,v])=>`<div class="al as">✓ Concentração elegível: ${k} (${v} cursos)</div>`).join("")}
${chosenConc?`<div class="al as" style="font-weight:700;font-size:13px">🏆 Certificado de Concentração: ${chosenConc}</div>`:""}
${eN>=3?`<div class="al as">✓ Certificado Sustentabilidade elegível (${eN} cursos ESG)</div>`:""}`
:`<h2>★ Seleção Final</h2><p style="color:#94a3b8;font-size:12px">Nenhuma elective finalizada.</p>`}

${fC.length?`<h2>Concentrations — Seleção Final</h2>

<p style="font-size:11px;color:#64748b;margin-bottom:4px">Mapeamento das electives finais por área de concentração (3 electives na mesma área = concentração).</p>
${renderMatrix(matrixFinal,true)}
<div class="legend">
  <span><span class="legend-dot" style="background:#059669"></span> Match</span>
  <span style="color:#059669;font-weight:600">Verde no total = ≥3 (concentração possível)</span>
</div>
<div class="conc-note">
  <strong>Resumo:</strong> ${conc.length?conc.map(([k,v])=>`<strong style="color:#059669">${k}</strong> (${v} cursos)`).join(", ")+" — concentração elegível.":"Nenhuma concentração atingida com a seleção atual."}
  ${eN>0?` Cursos ESG selecionados: ${eN}/3 necessários para Certificado Sustentabilidade.`:""}
</div>`:""}

${slOnly.length?`<h2>Concentrations — Restante Shortlist</h2>

<p style="font-size:11px;color:#64748b;margin-bottom:4px">Electives na shortlist que não foram selecionadas como finais.</p>
${renderMatrix(matrixShort,false)}`:""}

${iC.length?`<h2>Shortlist Completa</h2> ${ELECTIVES.map(g=>{const ig=iC.filter(c=>c.group===g.group);if(!ig.length)return"";return`<p style="font-size:12px;font-weight:600;color:${g.color};margin:10px 0 3px">${g.group}</p>
${ig.map(c=>`<div class="ii">• ${c.name} — ${c.faculty} · ${c.format}${fC.some(f=>f.id===c.id)?' <strong style="color:#059669">★ FINAL</strong>':""}</div>`).join(””)}`}).join("")}`:””}

${track&&track!==“none”?`<h2>Track</h2> ${track==="entrepreneurship"?`<div class="al as" style="font-size:13px;font-weight:700">🚀 Entrepreneurship Track

<div style="font-size:11px;font-weight:400;margin-top:4px">Inclui Entrepreneurial Lab (4 ECTS, obrigatória) + pelo menos 1 elective adicional da área Innovation & Entrepreneurship. Requer business idea pronta para pitch e grupo de 3+ pessoas.</div></div>`:""}
${track==="sustainability"?`<div class="al as" style="font-size:13px;font-weight:700">🌱 Sustainability Certificate
<div style="font-size:11px;font-weight:400;margin-top:4px">Requer pelo menos 3 electives ESG (6 ECTS). Cursos ESG selecionados: ${eN}/3.${eN>=3?" ✓ Elegível.":""}</div></div>`:""}
`:""}

<div class="ft">Página criada por José Ramos, com uso de AI · PBS EMBA 2025/26</div>
</body></html>`;
  return h;
}

function LoadingScreen({onDone}){
const[p,setP]=useState(0);const steps=[“A carregar electives…”,“A preparar catálogo…”,“A inicializar agente AI…”,“Quase pronto…”];
useEffect(()=>{const i=setInterval(()=>setP(v=>{if(v>=100){clearInterval(i);setTimeout(onDone,200);return 100}return v+3}),25);return()=>clearInterval(i)},[onDone]);
return(<div style={{height:“100vh”,display:“flex”,flexDirection:“column”,alignItems:“center”,justifyContent:“center”,fontFamily:”‘DM Sans’,sans-serif”,background:”#fafbfc”}}>
<div style={{fontFamily:”‘Instrument Serif’,Georgia,serif”,fontSize:30,fontWeight:400,color:”#0f172a”,marginBottom:2}}>PBS EMBA</div>
<div style={{fontSize:15,color:”#2563eb”,fontWeight:600,marginBottom:28,letterSpacing:1}}>Electives 2025/26</div>
<div style={{width:220,height:4,borderRadius:2,background:”#e2e8f0”,overflow:“hidden”,marginBottom:14}}><div style={{height:“100%”,background:”#2563eb”,borderRadius:2,width:`${p}%`,transition:“width .12s”}}/></div>
<div style={{fontSize:12,color:”#94a3b8”}}>{steps[Math.min(Math.floor(p/25),3)]}</div>

  </div>);
}

/* ── Guided Selection ── */
function GuidedSelection({ candidates, alreadyFinal, onFinish, targetECTS }) {
const [idx, setIdx] = useState(0);
const [selected, setSelected] = useState(new Set(alreadyFinal));
const [skipped, setSkipped] = useState(new Set());
const [aiText, setAiText] = useState(””);
const [aiLoading, setAiLoading] = useState(false);
const [done, setDone] = useState(false);
const [showChat, setShowChat] = useState(false);
const [chatMsgs, setChatMsgs] = useState([]);
const [chatInput, setChatInput] = useState(””);
const [chatLoading, setChatLoading] = useState(false);
const chatEnd = useRef(null);

const maxECTS = targetECTS;
const calcECTS = (ids) => ALL.filter(c => ids.has(c.id)).reduce((s, c) => s + (c.note === “= 2 electives” ? 4 : 2), 0);
const selectedECTS = calcECTS(selected);
const ectsLeft = maxECTS - selectedECTS;
const isFull = selectedECTS >= maxECTS;
const current = candidates[idx];

// Count remaining unprocessed candidates
let remainCount = 0;
for (let i = idx; i < candidates.length; i++) {
if (!selected.has(candidates[i].id) && !skipped.has(candidates[i].id)) remainCount++;
}

const fetchAI = async () => {
if (!current) return;
setAiText(””); setAiLoading(true);
const selNames = ALL.filter(c => selected.has(c.id)).map(c => `${c.name} (${c.note === "= 2 electives" ? 4 : 2} ECTS)`);
const prompt = `O aluno está a decidir as electives finais (objetivo: ${maxECTS} ECTS). Já selecionou (${selectedECTS} ECTS): ${selNames.length ? selNames.join(”, “) : “nenhuma”}. Faltam ${ectsLeft} ECTS.
NOTA: Entrepreneurial Lab = 4 ECTS (conta como 2 electives). Todas as outras = 2 ECTS.

Agora avalia: “${current.name}” (${current.faculty}, ${current.format}, ${current.group}, ${current.note === “= 2 electives” ? “4 ECTS” : “2 ECTS”}).
Descrição: ${current.desc}
Concentrações: ${current.concentrations.join(”, “)}${current.esg ? “ | ESG” : “”}

Análise BREVE (3-4 frases). Recomendação clara: INCLUIR ou SALTAR com justificação curta.`;
try {
const r = await fetch(“https://api.anthropic.com/v1/messages”, {
method: “POST”, headers: { “Content-Type”: “application/json” },
body: JSON.stringify({ model: “claude-sonnet-4-20250514”, max_tokens: 400, system: SYS, messages: [{ role: “user”, content: prompt }] }),
});
const d = await r.json();
setAiText(d.content?.map(b => b.text || “”).join(””) || “Sem resposta.”);
} catch(e) { setAiText(“Erro ao obter análise.”); }
setAiLoading(false);
};

// Reset AI and chat when moving to next candidate
useEffect(() => { setAiText(””); setChatMsgs([]); setShowChat(false); }, [idx]);
useEffect(() => { chatEnd.current?.scrollIntoView({ behavior: “smooth” }); }, [chatMsgs, chatLoading]);

const handleSelect = () => {
const ns = new Set(selected); ns.add(current.id);
setSelected(ns);
if (calcECTS(ns) >= maxECTS) { setDone(true); return; }
advance(ns, skipped);
};

const handleSkip = () => {
const ns = new Set(skipped); ns.add(current.id);
setSkipped(ns);
advance(selected, ns);
};

const advance = (sel, sk) => {
let next = idx + 1;
while (next < candidates.length && (sel.has(candidates[next].id) || sk.has(candidates[next].id))) next++;
if (next >= candidates.length || calcECTS(sel) >= maxECTS) { setDone(true); return; }
setIdx(next);
};

const sendChat = async () => {
const q = chatInput.trim(); if (!q || chatLoading) return;
const selNames = ALL.filter(c => selected.has(c.id)).map(c => c.name);
const context = `Contexto: a avaliar "${current.name}" (${current.note === "= 2 electives" ? "4 ECTS" : "2 ECTS"}). Selecionadas (${selectedECTS} ECTS): ${selNames.join(", ") || "nenhuma"}. Faltam ${ectsLeft} ECTS.`;
const msgs = […chatMsgs, { role: “user”, content: q }];
setChatMsgs(msgs); setChatInput(””); setChatLoading(true);
try {
const r = await fetch(“https://api.anthropic.com/v1/messages”, {
method: “POST”, headers: { “Content-Type”: “application/json” },
body: JSON.stringify({ model: “claude-sonnet-4-20250514”, max_tokens: 500, system: SYS + “\n\n” + context, messages: msgs.map(m => ({ role: m.role, content: m.content })) }),
});
const d = await r.json();
setChatMsgs(p => […p, { role: “assistant”, content: d.content?.map(b => b.text || “”).join(””) || “Erro.” }]);
} catch(e) { setChatMsgs(p => […p, { role: “assistant”, content: “Erro.” }]); }
setChatLoading(false);
};

const b = current ? fb(current.format) : {};

if (done) {
const finalList = ALL.filter(c => selected.has(c.id));
const ects = calcECTS(selected);
return (
<div style={{ padding: 20, maxWidth: 500, margin: “0 auto”, overflowY: “auto”, height: “100%” }}>
<div style={{ textAlign: “center”, marginBottom: 16 }}>
<div style={{ fontSize: 32, marginBottom: 6 }}>✅</div>
<h2 style={{ fontFamily: “‘Instrument Serif’,Georgia,serif”, fontSize: 20, fontWeight: 400, margin: “0 0 4px” }}>Seleção Completa</h2>
<p style={{ fontSize: 12, color: “#64748b” }}>{finalList.length} electives · {ects} ECTS</p>
</div>
{finalList.map((c, i) => (
<div key={c.id} style={{ padding: “8px 12px”, borderRadius: 8, borderLeft: “3px solid #059669”, background: “#f0fdf4”, marginBottom: 5 }}>
<div style={{ fontWeight: 600, fontSize: 13 }}>{i + 1}. {c.name} <span style={{ fontWeight: 400, color: “#94a3b8”, fontSize: 11 }}>{c.note === “= 2 electives” ? “4 ECTS” : “2 ECTS”}</span></div>
<div style={{ fontSize: 10, color: “#64748b” }}>{c.faculty} · {c.format}</div>
</div>
))}
<div style={{ display: “flex”, gap: 6, marginTop: 14, justifyContent: “center”, flexWrap: “wrap” }}>
<button onClick={() => onFinish(selected)} style={{ padding: “8px 18px”, borderRadius: 8, border: “none”, background: “#059669”, color: “#fff”, fontWeight: 600, fontSize: 12, cursor: “pointer” }}>Confirmar</button>
<button onClick={() => { setDone(false); setIdx(0); setSelected(new Set(alreadyFinal)); setSkipped(new Set()); }} style={{ padding: “8px 18px”, borderRadius: 8, border: “1px solid #d1d5db”, background: “#fff”, color: “#64748b”, fontSize: 12, cursor: “pointer” }}>Recomeçar</button>
<button onClick={() => onFinish(null)} style={{ padding: “8px 18px”, borderRadius: 8, border: “1px solid #d1d5db”, background: “#fff”, color: “#64748b”, fontSize: 12, cursor: “pointer” }}>Voltar</button>
</div>
</div>
);
}

if (!current) return null;

const courseECTS = current.note === “= 2 electives” ? 4 : 2;
const wouldExceed = selectedECTS + courseECTS > maxECTS;
const cantAdd = isFull || wouldExceed;

return (
<div style={{ display: “flex”, flexDirection: “column”, height: “100%”, fontFamily: “‘DM Sans’,sans-serif” }}>
{/* Top bar */}
<div style={{ display: “flex”, justifyContent: “space-between”, alignItems: “center”, padding: “8px 12px”, borderBottom: “1px solid #e2e8f0”, flexShrink: 0, flexWrap: “wrap”, gap: 4 }}>
<button onClick={() => onFinish(null)} style={{ background: “none”, border: “none”, color: “#64748b”, fontSize: 11, cursor: “pointer” }}>← Voltar</button>
<div style={{ display: “flex”, gap: 8, fontSize: 10 }}>
<span style={{ color: “#059669”, fontWeight: 700 }}>★ {selectedECTS}/{maxECTS} ECTS</span>
<span style={{ color: “#94a3b8” }}>{remainCount} restantes</span>
</div>
</div>

```
  {/* Selected chips */}
  {selected.size > 0 && <div style={{ display: "flex", flexWrap: "wrap", gap: 3, padding: "6px 12px", borderBottom: "1px solid #f1f5f9", flexShrink: 0 }}>
    {ALL.filter(c => selected.has(c.id)).map(c => (
      <span key={c.id} style={{ fontSize: 9, padding: "2px 6px", borderRadius: 3, background: "#d1fae5", color: "#065f46", fontWeight: 600 }}>
        {c.name.split(" ").slice(0, 3).join(" ")} ({c.note === "= 2 electives" ? "4" : "2"})
      </span>
    ))}
  </div>}

  {/* Scrollable content */}
  <div style={{ flex: 1, overflowY: "auto", padding: "12px" }}>
    {/* Current card */}
    <div style={{ border: "2px solid #2563eb", borderRadius: 10, padding: "12px", background: "#eff6ff", marginBottom: 10 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4, marginBottom: 3 }}>
        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: 16, fontWeight: 600, color: "#1e293b" }}>{current.name}</span>
        <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 5px", borderRadius: 3, background: "#dbeafe", color: "#1e40af" }}>{courseECTS} ECTS</span>
        {current.esg && <span style={{ fontSize: 8, fontWeight: 700, background: "#d1fae5", color: "#065f46", padding: "1px 4px", borderRadius: 2 }}>ESG</span>}
        {current.note && <span style={{ fontSize: 8, fontWeight: 600, background: "#fef9c3", color: "#854d0e", padding: "1px 4px", borderRadius: 2 }}>{current.note}</span>}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center", marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: "#64748b" }}>{current.faculty}</span>
        {current.links.map((l, i) => <a key={i} href={l} target="_blank" rel="noopener noreferrer" style={{ fontSize: 9, color: "#2563eb" }}>LinkedIn ↗</a>)}
        <span style={{ fontSize: 9, fontWeight: 600, padding: "1px 5px", borderRadius: 3, background: b.bg, color: b.tx }}>{current.format}</span>
      </div>
      <p style={{ fontSize: 11, color: "#475569", lineHeight: 1.45, marginBottom: 4 }}>{current.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {current.concentrations.map(c => { const t = CONC_TAG[c]; return t ? <span key={c} style={{ fontSize: 7, fontWeight: 700, padding: "0 4px", borderRadius: 2, background: t.bg, color: t.tx }}>{t.label}</span> : null; })}
      </div>
    </div>

    {/* Warning if would exceed */}
    {wouldExceed && !isFull && <div style={{ fontSize: 10, color: "#b45309", background: "#fffbeb", padding: "6px 10px", borderRadius: 6, marginBottom: 8, textAlign: "center" }}>⚠ {courseECTS} ECTS excederia o limite ({selectedECTS} + {courseECTS} = {selectedECTS + courseECTS} > {maxECTS})</div>}

    {/* Action buttons */}
    <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
      <button onClick={handleSelect} disabled={cantAdd} style={{
        flex: 1, padding: "10px 0", borderRadius: 8, border: "none", cursor: cantAdd ? "not-allowed" : "pointer",
        background: cantAdd ? "#cbd5e1" : "#059669", color: "#fff", fontWeight: 700, fontSize: 13,
      }}>✓ Incluir ({courseECTS} ECTS)</button>
      <button onClick={handleSkip} style={{
        flex: 1, padding: "10px 0", borderRadius: 8, border: "1px solid #d1d5db", cursor: "pointer",
        background: "#fff", color: "#64748b", fontWeight: 600, fontSize: 13,
      }}>Saltar →</button>
    </div>

    {/* AI analysis - only on demand */}
    <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, background: "#f8fafc", marginBottom: 8 }}>
      {!aiText && !aiLoading ? (
        <button onClick={fetchAI} style={{ width: "100%", padding: "10px", background: "none", border: "none", cursor: "pointer", fontSize: 12, color: "#5b21b6", fontWeight: 600 }}>
          🤖 Pedir análise do agente
        </button>
      ) : (
        <div style={{ padding: "10px" }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#5b21b6", marginBottom: 4 }}>🤖 Análise do Agente</div>
          {aiLoading ? <div style={{ fontSize: 11, color: "#94a3b8" }}>A analisar...</div>
            : <div style={{ fontSize: 11, color: "#1e293b", lineHeight: 1.45, whiteSpace: "pre-wrap" }}>{aiText}</div>}
        </div>
      )}
    </div>

    {/* Chat - collapsible */}
    <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, background: "#fff" }}>
      <button onClick={() => setShowChat(!showChat)} style={{ width: "100%", padding: "8px 10px", background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "#64748b", fontWeight: 600, textAlign: "left" }}>
        💬 {showChat ? "Ocultar chat" : "Perguntar sobre esta elective"}
      </button>
      {showChat && (
        <div style={{ borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxHeight: 200, overflowY: "auto", padding: "8px", display: "flex", flexDirection: "column", gap: 6 }}>
            {chatMsgs.length === 0 && <div style={{ color: "#94a3b8", fontSize: 10, textAlign: "center", padding: 8 }}>Pergunta o que quiseres sobre esta elective.</div>}
            {chatMsgs.map((m, i) => <div key={i} style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "85%", padding: "5px 9px", borderRadius: 8, background: m.role === "user" ? "#2563eb" : "#f1f5f9", color: m.role === "user" ? "#fff" : "#1e293b", fontSize: 11, lineHeight: 1.4, whiteSpace: "pre-wrap" }}>{m.content}</div>)}
            {chatLoading && <div style={{ fontSize: 10, color: "#94a3b8" }}>A pensar...</div>}
            <div ref={chatEnd} />
          </div>
          <div style={{ borderTop: "1px solid #e2e8f0", padding: 6, display: "flex", gap: 4 }}>
            <input value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendChat())} placeholder="Pergunta..." style={{ flex: 1, padding: "6px 8px", borderRadius: 6, border: "1px solid #d1d5db", fontSize: 11, outline: "none" }} />
            <button onClick={sendChat} disabled={chatLoading || !chatInput.trim()} style={{ padding: "6px 10px", borderRadius: 6, border: "none", background: chatLoading || !chatInput.trim() ? "#cbd5e1" : "#2563eb", color: "#fff", fontSize: 10, fontWeight: 600, cursor: "pointer" }}>→</button>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
```

);
}

/* ── Card ── */
function Card({course,status,onInterest,onDiscard,onClear,isFinal,onToggleFinal,canAddFinal,onAsk,isLocked}){
const[exp,setExp]=useState(false);const b=fb(course.format);const disc=status===“discarded”,int=status===“interested”;
const brd=isLocked?”#b85c00”:isFinal?”#059669”:int?”#2563eb”:disc?”#fca5a5”:”#e2e8f0”;
const bg=isLocked?”#fff7ed”:isFinal?”#f0fdf4”:int?”#eff6ff”:disc?”#fef2f2”:”#fff”;
return(<div style={{border:`${int||isFinal||disc||isLocked?2:1}px solid ${brd}`,borderRadius:8,padding:disc?“4px 8px”:“7px 8px”,background:bg,transition:“all .12s”,opacity:disc?0.45:1,minWidth:0}}>
<div style={{display:“flex”,alignItems:“center”,gap:6}}>
{isLocked?(
<div style={{display:“flex”,alignItems:“center”,justifyContent:“center”,width:17,height:17,fontSize:11,flexShrink:0}} title=“Obrigatória (track)”>🔒</div>
):(
<div style={{display:“flex”,gap:2}}>
<button onClick={disc?onClear:onInterest} style={{width:17,height:17,borderRadius:3,cursor:“pointer”,border:int?“2px solid #2563eb”:“1.5px solid #cbd5e1”,background:int?”#2563eb”:”#fff”,color:”#fff”,fontSize:10,display:“flex”,alignItems:“center”,justifyContent:“center”,padding:0,flexShrink:0}}>{int?“✓”:””}</button>
<button onClick={disc?onClear:onDiscard} style={{width:17,height:17,borderRadius:3,cursor:“pointer”,border:disc?“2px solid #ef4444”:“1.5px solid #cbd5e1”,background:disc?”#ef4444”:”#fff”,color:disc?”#fff”:”#ef4444”,fontSize:10,display:“flex”,alignItems:“center”,justifyContent:“center”,padding:0,flexShrink:0}}>{disc?“↺”:“✕”}</button>
</div>
)}
<div style={{flex:1,minWidth:0}}>
<div style={{display:“flex”,flexWrap:“wrap”,alignItems:“center”,gap:3}}>
<span style={{fontFamily:”‘Instrument Serif’,Georgia,serif”,fontSize:disc?11:13,fontWeight:600,color:disc?”#94a3b8”:”#1e293b”,textDecoration:disc?“line-through”:“none”,lineHeight:1.2}}>{course.name}</span>
{course.esg&&<span style={{fontSize:7,fontWeight:700,background:”#d1fae5”,color:”#065f46”,padding:“0 4px”,borderRadius:2}}>ESG</span>}
{course.note&&<span style={{fontSize:7,fontWeight:600,background:”#fef9c3”,color:”#854d0e”,padding:“0 4px”,borderRadius:2}}>{course.note}</span>}
{isLocked&&<span style={{fontSize:7,fontWeight:700,background:”#ffedd5”,color:”#b85c00”,padding:“0 4px”,borderRadius:2}}>🔒 OBRIGATÓRIA</span>}
{isFinal&&!isLocked&&<span style={{fontSize:7,fontWeight:700,background:”#d1fae5”,color:”#059669”,padding:“0 4px”,borderRadius:2}}>★ FINAL</span>}
</div>
{!disc&&<div style={{display:“flex”,flexWrap:“wrap”,alignItems:“center”,gap:4,marginTop:2}}>
<span style={{fontSize:10,color:”#64748b”}}>{course.faculty}</span>
{course.links.map((l,i)=><a key={i} href={l} target=”_blank” rel=“noopener noreferrer” style={{fontSize:9,color:”#2563eb”}}>LI↗</a>)}
<span style={{fontSize:8.5,fontWeight:600,padding:“0 5px”,borderRadius:3,background:b.bg,color:b.tx}}>{course.format}</span>
</div>}
{!disc&&<div style={{display:“flex”,flexWrap:“wrap”,gap:2,marginTop:3}}>
{course.concentrations.map(c=>{const t=CONC_TAG[c];return t?<span key={c} style={{fontSize:7,fontWeight:700,padding:“0 4px”,borderRadius:2,background:t.bg,color:t.tx,letterSpacing:0.3}}>{t.label}</span>:null})}
</div>}
</div>
</div>
{!disc&&!isLocked&&<div style={{display:“flex”,gap:6,alignItems:“center”,marginTop:3,paddingLeft:38}}>
<button onClick={()=>setExp(!exp)} style={{background:“none”,border:“none”,color:”#6b7280”,fontSize:10,cursor:“pointer”,padding:0}}>{exp?“▾”:“▸ Desc”}</button>
<button onClick={()=>onAsk(course.name)} style={{background:“none”,border:“none”,color:”#8b5cf6”,fontSize:10,cursor:“pointer”,padding:0}}>💬</button>
<button onClick={onToggleFinal} disabled={!canAddFinal&&!isFinal} style={{background:“none”,border:“none”,fontSize:10,cursor:!canAddFinal&&!isFinal?“not-allowed”:“pointer”,padding:0,fontWeight:600,color:isFinal?”#059669”:!canAddFinal?”#cbd5e1”:”#059669”,opacity:(!canAddFinal&&!isFinal)?0.35:1}}>{isFinal?“★ Final”:“☆ Final”}</button>
</div>}
{isLocked&&<div style={{display:“flex”,gap:6,alignItems:“center”,marginTop:3,paddingLeft:24}}>
<button onClick={()=>setExp(!exp)} style={{background:“none”,border:“none”,color:”#6b7280”,fontSize:10,cursor:“pointer”,padding:0}}>{exp?“▾”:“▸ Desc”}</button>
<button onClick={()=>onAsk(course.name)} style={{background:“none”,border:“none”,color:”#8b5cf6”,fontSize:10,cursor:“pointer”,padding:0}}>💬</button>
</div>}
{exp&&!disc&&<div style={{fontSize:10.5,color:”#475569”,lineHeight:1.4,marginTop:3,paddingLeft:isLocked?24:38}}>{course.desc}</div>}

  </div>);
}

/* ── Chat Panel ── */
function ChatPanel({askTrigger}){
const[msgs,setMsgs]=useState([]);const[input,setInput]=useState(””);const[ld,setLd]=useState(false);const endRef=useRef(null);const inputRef=useRef(null);
useEffect(()=>{endRef.current?.scrollIntoView({behavior:“smooth”})},[msgs,ld]);
useEffect(()=>{if(askTrigger?.name){setInput(`Fala-me da "${askTrigger.name}". Vale a pena?`);setTimeout(()=>inputRef.current?.focus(),100)}},[askTrigger]);
const send=async()=>{const q=input.trim();if(!q||ld)return;const u=[…msgs,{role:“user”,content:q}];setMsgs(u);setInput(””);setLd(true);
try{const r=await fetch(“https://api.anthropic.com/v1/messages”,{method:“POST”,headers:{“Content-Type”:“application/json”},body:JSON.stringify({model:“claude-sonnet-4-20250514”,max_tokens:1000,system:SYS,messages:u.map(m=>({role:m.role,content:m.content}))})});const d=await r.json();setMsgs(p=>[…p,{role:“assistant”,content:d.content?.map(b=>b.text||””).join(””)||“Erro.”}])} catch(e) {setMsgs(p=>[…p,{role:“assistant”,content:“Erro.”}])}setLd(false)};
return(<div style={{display:“flex”,flexDirection:“column”,height:“100%”}}>
<div style={{flex:1,overflowY:“auto”,padding:“8px 10px”,display:“flex”,flexDirection:“column”,gap:6}}>
{msgs.length===0&&<div style={{color:”#94a3b8”,fontSize:11,textAlign:“center”,marginTop:20,lineHeight:1.6}}>Pergunta o que quiseres.<br/><span style={{fontSize:10}}>“Compara X com Y” · “Que 5 sugeres?”</span></div>}
{msgs.map((m,i)=><div key={i} style={{alignSelf:m.role===“user”?“flex-end”:“flex-start”,maxWidth:“88%”,padding:“6px 10px”,borderRadius:8,background:m.role===“user”?”#2563eb”:”#f1f5f9”,color:m.role===“user”?”#fff”:”#1e293b”,fontSize:12,lineHeight:1.45,whiteSpace:“pre-wrap”}}>{m.content}</div>)}
{ld&&<div style={{fontSize:11,color:”#94a3b8”,padding:“2px 8px”}}>A pensar…</div>}
<div ref={endRef}/>
</div>
<div style={{borderTop:“1px solid #e2e8f0”,padding:6,display:“flex”,gap:4}}>
<input ref={inputRef} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key===“Enter”&&!e.shiftKey&&(e.preventDefault(),send())} placeholder=“Pergunta…” style={{flex:1,padding:“6px 8px”,borderRadius:6,border:“1px solid #d1d5db”,fontSize:12,outline:“none”}}/>
<button onClick={send} disabled={ld||!input.trim()} style={{padding:“6px 12px”,borderRadius:6,border:“none”,background:ld||!input.trim()?”#cbd5e1”:”#2563eb”,color:”#fff”,fontSize:11,fontWeight:600,cursor:ld?“wait”:“pointer”}}>→</button>
</div>

  </div>);
}

/* ── Main App ── */
export default function App(){
const[loaded,setLoaded]=useState(false);
const[statuses,setStatuses]=useState({});
const[finals,setFinals]=useState(new Set());
const[expanded,setExpanded]=useState(()=>new Set(ELECTIVES.map(g=>g.group)));
const[filter,setFilter]=useState(“all”);
const[showDisc,setShowDisc]=useState(false);
const[chatOpen,setChatOpen]=useState(false);
const[askTrigger,setAskTrigger]=useState(null);
const[sName,setSName]=useState(””);const[showName,setShowName]=useState(false);
const[guidedMode,setGuidedMode]=useState(false);
const[chosenConc,setChosenConc]=useState(null);
const[targetN,setTargetN]=useState(5);
const[track,setTrack]=useState(“none”);
const[concModal,setConcModal]=useState(false);
const[reportHTML,setReportHTML]=useState(null); // “none” | “entrepreneurship” | “sustainability”

const targetECTS=targetN*2;
const etLocked=track===“entrepreneurship”;
const lockedIds=etLocked?new Set([“elab”]):new Set();

const setSt=(id,s)=>setStatuses(p=>{const n={…p};if(n[id]===s)delete n[id];else n[id]=s;return n});
const getECTS=(ids)=>ALL.filter(c=>ids.has(c.id)).reduce((s,c)=>s+(c.note===”= 2 electives”?4:2),0);
const togF=id=>{
if(lockedIds.has(id))return;
setFinals(p=>{const n=new Set(p);if(n.has(id)){n.delete(id)}else{const c=ALL.find(x=>x.id===id);const add=c&&c.note===”= 2 electives”?4:2;if(getECTS(p)+add<=targetECTS){n.add(id);setStatuses(prev=>({…prev,[id]:“interested”}))}}return n});
};
const togG=g=>setExpanded(p=>{const n=new Set(p);n.has(g)?n.delete(g):n.add(g);return n});

// Handle track change
const changeTrack=(t)=>{
const newTrack=track===t?“none”:t;
setTrack(newTrack);
if(newTrack===“entrepreneurship”){
setFinals(p=>{const n=new Set(p);n.add(“elab”);return n});
setStatuses(p=>({…p,elab:“interested”}));
}
if(newTrack===“sustainability”&&targetN<6){
setTargetN(6);
}
};

const int=Object.entries(statuses).filter(([,v])=>v===“interested”).map(([k])=>k);
const disc=Object.entries(statuses).filter(([,v])=>v===“discarded”).map(([k])=>k);
const und=TOTAL-int.length-disc.length;
const fCourses=ALL.filter(c=>finals.has(c.id));
const fECTS=fCourses.reduce((s,c)=>s+(c.note===”= 2 electives”?4:2),0);
const iCourses=ALL.filter(c=>statuses[c.id]===“interested”);

// Concentration tracking — counts from interested (shortlisted) courses
const CONC_AREAS=[“Finance & Investments”,“Branding, Marketing & Sales”,“Strategy & Business”,“Leadership & Human Skills”,“Innovation & Entrepreneurship”,“Data, Tech & AI”,“Operations & Supply Chain”];
const concCounts={};CONC_AREAS.forEach(a=>{concCounts[a]=0});
iCourses.forEach(c=>(c.concentrations||[]).forEach(con=>{if(concCounts[con]!==undefined)concCounts[con]++}));
const esgCount=iCourses.filter(c=>c.esg).length;
// Unlocked only counts from finals (for certificate)
const concCountsFinal={};CONC_AREAS.forEach(a=>{concCountsFinal[a]=0});
fCourses.forEach(c=>(c.concentrations||[]).forEach(con=>{if(concCountsFinal[con]!==undefined)concCountsFinal[con]++}));
const esgCountFinal=fCourses.filter(c=>c.esg).length;
const unlockedConcsRaw=CONC_AREAS.filter(a=>concCountsFinal[a]>=3);
const unlockedConcs=track===“entrepreneurship”?unlockedConcsRaw.filter(a=>a!==“Innovation & Entrepreneurship”):unlockedConcsRaw;

useEffect(()=>{if(chosenConc&&!unlockedConcs.includes(chosenConc))setChosenConc(null)},[finals.size]);

const handleAsk=name=>{setChatOpen(true);setAskTrigger({name,t:Date.now()})};
const fmts=[“all”,“100% Online”,“Hybrid”,“In Person”];

const startGuided=()=>{
if(int.length===0)return;
setGuidedMode(true);
};

const finishGuided=(result)=>{
if(result){
setFinals(result);
result.forEach(id=>setStatuses(p=>({…p,[id]:“interested”})));
}
setGuidedMode(false);
};

if(!loaded) return (<LoadingScreen onDone={()=>setLoaded(true)}/>);

if(guidedMode){
const candidates=ALL.filter(c=>statuses[c.id]===“interested”);
return(
<div style={{height:“100vh”,fontFamily:”‘DM Sans’,sans-serif”,color:”#1e293b”}}>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"/>
<GuidedSelection candidates={candidates} alreadyFinal={finals} onFinish={finishGuided} targetECTS={targetECTS}/>
</div>
);
}

return(
<div style={{fontFamily:”‘DM Sans’,‘Segoe UI’,sans-serif”,display:“flex”,height:“100vh”,color:”#1e293b”}}>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"/>

```
  <div style={{flex:1,overflowY:"auto",padding:"10px 10px"}}>
    <div style={{textAlign:"center",marginBottom:8}}>
      <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:20,fontWeight:400,margin:0}}>PBS EMBA Electives 2025/26</h1>
      <p style={{fontSize:10,color:"#64748b",margin:"2px 0 0"}}>Round 1: 13–19 Abril · Mín. 15 alunos por curso</p>
    </div>

    {/* Target & Track selectors */}
    <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:8,padding:"8px 10px",borderRadius:8,background:"#f8fafc",border:"1px solid #e2e8f0"}}>
      <div style={{display:"flex",alignItems:"center",gap:4,flexWrap:"wrap"}}>
        <span style={{fontSize:10,color:"#64748b",fontWeight:600,minWidth:55}}>Electives:</span>
        {[5,6,7].map(n=>{
          const minN=track==="sustainability"?6:5;
          const disabled=n<minN;
          return(
            <button key={n} onClick={()=>!disabled&&setTargetN(n)} style={{
              padding:"3px 10px",borderRadius:5,cursor:disabled?"not-allowed":"pointer",fontSize:10,fontWeight:targetN===n?700:400,
              border:targetN===n?"2px solid #2563eb":"1px solid #d1d5db",
              background:targetN===n?"#eff6ff":disabled?"#f8f8f8":"#fff",
              color:targetN===n?"#2563eb":disabled?"#cbd5e1":"#64748b",
              opacity:disabled?0.5:1,
            }}>{n} ({n*2} ECTS){disabled?" ⛔":""}</button>
          );
        })}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:4,flexWrap:"wrap"}}>
        <span style={{fontSize:10,color:"#64748b",fontWeight:600,minWidth:55}}>Track:</span>
        <button onClick={()=>changeTrack("none")} style={{
          padding:"3px 10px",borderRadius:5,cursor:"pointer",fontSize:10,fontWeight:track==="none"?700:400,
          border:track==="none"?"2px solid #2563eb":"1px solid #d1d5db",
          background:track==="none"?"#eff6ff":"#fff",color:track==="none"?"#2563eb":"#64748b",
        }}>Standard</button>
        <button onClick={()=>changeTrack("entrepreneurship")} style={{
          padding:"3px 10px",borderRadius:5,cursor:"pointer",fontSize:10,fontWeight:track==="entrepreneurship"?700:400,
          border:track==="entrepreneurship"?"2px solid #b85c00":"1px solid #d1d5db",
          background:track==="entrepreneurship"?"#fff7ed":"#fff",color:track==="entrepreneurship"?"#b85c00":"#64748b",
        }}>🚀 Entrepreneurship</button>
        <button onClick={()=>changeTrack("sustainability")} style={{
          padding:"3px 10px",borderRadius:5,cursor:"pointer",fontSize:10,fontWeight:track==="sustainability"?700:400,
          border:track==="sustainability"?"2px solid #059669":"1px solid #d1d5db",
          background:track==="sustainability"?"#f0fdf4":"#fff",color:track==="sustainability"?"#059669":"#64748b",
        }}>🌱 Sustainability Certificate</button>
      </div>
      {track==="entrepreneurship"&&(
        <div style={{fontSize:9,color:"#b85c00",background:"#fff7ed",padding:"4px 8px",borderRadius:4,lineHeight:1.5}}>
          <strong>Entrepreneurship Track:</strong> Entrepreneurial Lab (4 ECTS, conta como 2 electives) é obrigatória e já foi adicionada. Precisas de selecionar pelo menos mais 1 elective da área Innovation & Entrepreneurship. Requer business idea pronta para pitch + grupo de 3+ pessoas.
        </div>
      )}
      {track==="sustainability"&&(
        <div style={{fontSize:9,color:"#059669",background:"#f0fdf4",padding:"4px 8px",borderRadius:4,lineHeight:1.5}}>
          <strong>Sustainability Certificate:</strong> Precisas de pelo menos 3 electives ESG (6 ECTS). As electives ESG estão marcadas com <span style={{fontWeight:700,background:"#d1fae5",color:"#065f46",padding:"0 3px",borderRadius:2}}>ESG</span> nos cards. Acompanha o progresso no tracker ESG abaixo.
        </div>
      )}
    </div>

    <div style={{display:"flex",gap:6,marginBottom:6,fontSize:10,flexWrap:"wrap",alignItems:"center"}}>
      <span style={{color:"#2563eb",fontWeight:600}}>✓{int.length}</span>
      <span style={{color:"#ef4444",fontWeight:600}}>✕{disc.length}</span>
      <span style={{color:"#94a3b8"}}>{und} ?</span>
      <span style={{color:"#059669",fontWeight:700}}>★ {fECTS}/{targetECTS} ECTS ({finals.size} electives)</span>
      <div style={{flex:1}}/>
      {int.length>0&&fECTS<targetECTS&&<button onClick={startGuided} style={{fontSize:10,padding:"4px 12px",borderRadius:6,cursor:"pointer",fontWeight:700,border:"none",background:"#059669",color:"#fff"}}>
        🚀 Seleção guiada ({int.length} candidatas)
      </button>}
      <button onClick={()=>setChatOpen(!chatOpen)} style={{fontSize:10,padding:"3px 10px",borderRadius:6,cursor:"pointer",fontWeight:600,border:"none",background:chatOpen?"#1e293b":"#2563eb",color:"#fff"}}>
        {chatOpen?"✕":"💬 Agente"}
      </button>
    </div>

    <div style={{display:"flex",gap:3,marginBottom:5,flexWrap:"wrap",alignItems:"center"}}>
      {fmts.map(f=><button key={f} onClick={()=>setFilter(f)} style={{fontSize:9,padding:"1px 7px",borderRadius:3,cursor:"pointer",border:filter===f?"1px solid #2563eb":"1px solid #d1d5db",background:filter===f?"#eff6ff":"#fff",color:filter===f?"#2563eb":"#64748b",fontWeight:filter===f?600:400}}>{f==="all"?"Todos":f}</button>)}
      <span style={{color:"#e2e8f0"}}>|</span>
      <button onClick={()=>setExpanded(new Set(ELECTIVES.map(g=>g.group)))} style={{fontSize:9,padding:"1px 7px",borderRadius:3,cursor:"pointer",border:"1px solid #d1d5db",background:"#fff",color:"#64748b"}}>▾ All</button>
      <button onClick={()=>setExpanded(new Set())} style={{fontSize:9,padding:"1px 7px",borderRadius:3,cursor:"pointer",border:"1px solid #d1d5db",background:"#fff",color:"#64748b"}}>▸ None</button>
      <span style={{color:"#e2e8f0"}}>|</span>
      <button onClick={()=>setShowDisc(!showDisc)} style={{fontSize:9,padding:"1px 7px",borderRadius:3,cursor:"pointer",border:"1px solid #fca5a5",background:showDisc?"#fef2f2":"#fff",color:"#ef4444"}}>{showDisc?"Ocultar ✕":`✕(${disc.length})`}</button>
    </div>

    <div style={{height:3,borderRadius:2,background:"#e2e8f0",marginBottom:6,overflow:"hidden",display:"flex"}}>
      <div style={{width:`${(int.length/TOTAL)*100}%`,background:"#2563eb",transition:"width .3s"}}/>
      <div style={{width:`${(disc.length/TOTAL)*100}%`,background:"#fca5a5",transition:"width .3s"}}/>
    </div>

    {/* Inline concentration tracker — always visible */}
    <div style={{marginBottom:8,padding:"6px 8px",borderRadius:6,background:"#f8fafc",border:"1px solid #e2e8f0"}}>
      <div style={{display:"flex",flexWrap:"wrap",gap:3,alignItems:"center"}}>
        <span style={{fontSize:9,color:"#64748b",fontWeight:600,marginRight:2}}>🎯</span>
        {CONC_AREAS.map(area=>{
          if(track==="entrepreneurship"&&area==="Innovation & Entrepreneurship")return null;
          const t=CONC_TAG[area];const count=concCounts[area];const unlocked=count>=3;
          return(<span key={area} style={{
            fontSize:8,padding:"2px 6px",borderRadius:3,fontWeight:700,
            background:unlocked?"#d1fae5":count>0?t.bg:"#f1f5f9",
            color:unlocked?"#059669":count>0?t.tx:"#cbd5e1",
            border:unlocked?"1.5px solid #059669":"none",
            transition:"all .2s",
          }}>{unlocked?"🔓 ":""}{t.label} {count}/3</span>);
        })}
        {(()=>{if(track==="sustainability")return null;const unlocked=esgCount>=3;
          return(<span key="esg" style={{fontSize:8,padding:"2px 6px",borderRadius:3,fontWeight:700,
            background:unlocked?"#d1fae5":esgCount>0?"#f1f5f9":"#f1f5f9",
            color:unlocked?"#059669":esgCount>0?"#065f46":"#cbd5e1",
            border:unlocked?"1.5px solid #059669":"none",
            transition:"all .2s"}}>{unlocked?"🔓 ":""}ESG {esgCount}/3</span>);
        })()}
        {track==="entrepreneurship"&&<span style={{fontSize:8,color:"#b85c00"}}>🚀 ET ativo</span>}
        {track==="sustainability"&&<span style={{fontSize:8,color:"#059669"}}>🌱 SC ativo</span>}
      </div>
      {/* Certificate picker inline */}
      {unlockedConcs.length>0&&fECTS>=targetECTS&&(
        <div style={{display:"flex",flexWrap:"wrap",gap:3,alignItems:"center",marginTop:4,paddingTop:4,borderTop:"1px solid #e2e8f0"}}>
          <span style={{fontSize:9,color:"#059669",fontWeight:700}}>🏆 Certificado:</span>
          {unlockedConcs.map(area=>{
            const t=CONC_TAG[area];const chosen=chosenConc===area;
            return(<button key={area} onClick={()=>setChosenConc(chosen?null:area)} style={{
              padding:"2px 8px",borderRadius:4,cursor:"pointer",fontSize:9,fontWeight:600,
              border:chosen?"2px solid #059669":"1px solid #d1d5db",
              background:chosen?t.bg:"#fff",color:chosen?t.tx:"#64748b",
            }}>{chosen?"🏆 ":""}{CONC_TAG[area].label}</button>);
          })}
          {chosenConc&&<span style={{fontSize:9,color:"#059669"}}>✓ {chosenConc}</span>}
          {!chosenConc&&<span style={{fontSize:8,color:"#b45309"}}>← escolhe 1</span>}
        </div>
      )}
    </div>

    {ELECTIVES.map(group=>{
      let fl=group.courses.filter(c=>{if(filter==="all")return true;if(filter==="In Person")return c.format.includes("In Person")||c.format.includes("In-Person");return c.format.includes(filter)});
      if(!showDisc)fl=fl.filter(c=>statuses[c.id]!=="discarded");
      const isOpen=expanded.has(group.group);
      const gi=group.courses.filter(c=>statuses[c.id]==="interested").length;const gf=group.courses.filter(c=>finals.has(c.id)).length;const gd=group.courses.filter(c=>statuses[c.id]==="discarded").length;
      return(<div key={group.group} style={{marginBottom:2}}>
        <button onClick={()=>togG(group.group)} style={{display:"flex",alignItems:"center",gap:6,width:"100%",background:"none",border:"none",cursor:"pointer",borderLeft:`3px solid ${group.color}`,paddingLeft:8,paddingTop:5,paddingBottom:5,textAlign:"left"}}>
          <span style={{fontSize:11,color:group.color,display:"inline-block",transform:isOpen?"rotate(90deg)":"rotate(0deg)",transition:"transform .12s"}}>▸</span>
          <span style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:14,color:group.color}}>{group.group}</span>
          <span style={{fontSize:9,color:"#94a3b8"}}>{group.courses.length}</span>
          <div style={{flex:1}}/>
          <div style={{display:"flex",gap:5,fontSize:9,marginRight:3}}>
            {gi>0&&<span style={{color:"#2563eb"}}>✓{gi}</span>}
            {gf>0&&<span style={{color:"#059669",fontWeight:700}}>★{gf}</span>}
            {gd>0&&<span style={{color:"#ef4444"}}>✕{gd}</span>}
          </div>
        </button>
        {isOpen&&<div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:5,padding:"3px 0 3px 4px"}}>
          {fl.length===0&&<div style={{fontSize:10,color:"#94a3b8",padding:"2px 8px",gridColumn:"1/-1"}}>Nenhuma</div>}
          {fl.map(c=><Card key={c.id} course={c} status={statuses[c.id]||"undecided"} onInterest={()=>setSt(c.id,"interested")} onDiscard={()=>{if(lockedIds.has(c.id))return;setSt(c.id,"discarded");setFinals(p=>{const n=new Set(p);n.delete(c.id);return n})}} onClear={()=>setSt(c.id,undefined)} isFinal={finals.has(c.id)} onToggleFinal={()=>togF(c.id)} canAddFinal={fECTS<targetECTS} onAsk={handleAsk} isLocked={lockedIds.has(c.id)}/>)}
        </div>}
      </div>);
    })}


    {/* Summary */}
    <div style={{marginTop:10,padding:10,borderRadius:8,background:"#f8fafc",border:"1px solid #e2e8f0"}}>
      <h3 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:14,fontWeight:400,margin:"0 0 6px"}}>Resumo</h3>
      {finals.size>0&&<div style={{marginBottom:8}}>
        <div style={{fontSize:10,fontWeight:700,color:"#059669",marginBottom:3}}>★ Final ({fECTS}/{targetECTS} ECTS · {finals.size} electives)</div>
        {fCourses.map((c,i)=><div key={c.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:10.5,padding:"1px 0"}}><span style={{fontWeight:500}}>{i+1}. {c.name} <span style={{color:"#94a3b8",fontWeight:400}}>{c.format}{c.note?" · "+c.note:""}</span></span><button onClick={()=>togF(c.id)} style={{background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:11,padding:"0 2px"}}>✕</button></div>)}
        {fECTS<targetECTS&&<div style={{fontSize:9,color:"#b45309",marginTop:3}}>⚠ Faltam {targetECTS-fECTS} ECTS</div>}
        {fECTS>=targetECTS&&<div style={{fontSize:9,color:"#059669",marginTop:3}}>✓ {targetECTS} ECTS</div>}
        {chosenConc&&<div style={{fontSize:9,color:"#059669",marginTop:2}}>🏆 Certificado: {chosenConc}</div>}
        {track==="entrepreneurship"&&(()=>{
          const innovFinals=fCourses.filter(c=>c.id!=="elab"&&c.concentrations.includes("Innovation & Entrepreneurship")).length;
          return innovFinals<1?<div style={{fontSize:9,color:"#b45309",marginTop:2}}>⚠ ET: falta pelo menos 1 elective de Innovation & Entrepreneurship (além do ELab)</div>
            :<div style={{fontSize:9,color:"#059669",marginTop:2}}>✓ ET: {innovFinals} elective{innovFinals>1?"s":""} de Innovation & Entrepreneurship</div>;
        })()}
        {track==="sustainability"&&(()=>{
          return esgCountFinal<3?<div style={{fontSize:9,color:"#b45309",marginTop:2}}>⚠ SC: {esgCountFinal}/3 electives ESG nos finais (precisas de 3)</div>
            :<div style={{fontSize:9,color:"#059669",marginTop:2}}>✓ SC: {esgCountFinal}/3 electives ESG — Sustainability Certificate elegível</div>;
        })()}
      </div>}
      {int.length>0&&<div><div style={{fontSize:10,fontWeight:600,color:"#2563eb",marginBottom:2}}>Interesse ({int.length})</div>{iCourses.map(c=><div key={c.id} style={{fontSize:10,color:"#475569",padding:"0.5px 0"}}>• {c.name} <span style={{color:"#94a3b8"}}>{c.format}</span>{finals.has(c.id)&&<span style={{color:"#059669",fontWeight:600,marginLeft:2}}>★</span>}</div>)}</div>}
      {int.length===0&&finals.size===0&&<p style={{fontSize:11,color:"#94a3b8"}}>Nenhuma seleção.</p>}
    </div>

    {/* PDF */}
    <div style={{marginTop:10,padding:10,borderRadius:8,background:"#fff",border:"1px solid #e2e8f0"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:6}}>
        <span style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:14}}>📄 Exportar Relatório</span>
        {!showName?<button onClick={()=>setShowName(true)} style={{padding:"5px 14px",borderRadius:6,border:"none",cursor:"pointer",background:"#1e293b",color:"#fff",fontSize:11,fontWeight:600}}>Gerar PDF</button>
        :<div style={{display:"flex",gap:6,alignItems:"center"}}>
          <input value={sName} onChange={e=>setSName(e.target.value)} placeholder="Nome (opcional)" style={{padding:"5px 8px",borderRadius:5,border:"1px solid #d1d5db",fontSize:11,outline:"none",width:160}}
            onKeyDown={e=>{if(e.key==="Enter"){if(unlockedConcs.length>0&&!chosenConc){setConcModal(true)}else{setReportHTML(buildReportHTML(fCourses,iCourses,fECTS,sName,chosenConc,targetECTS,track))}}}}/>
          <button onClick={()=>{if(unlockedConcs.length>0&&!chosenConc){setConcModal(true)}else{setReportHTML(buildReportHTML(fCourses,iCourses,fECTS,sName,chosenConc,targetECTS,track))}}} style={{padding:"5px 12px",borderRadius:5,border:"none",cursor:"pointer",background:"#1e293b",color:"#fff",fontSize:11,fontWeight:600}}>PDF</button>
          <button onClick={()=>setShowName(false)} style={{fontSize:10,color:"#94a3b8",background:"none",border:"none",cursor:"pointer"}}>✕</button>
        </div>}
      </div>
    </div>

    {/* Concentration selection modal */}
    {concModal&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100}} onClick={()=>setConcModal(false)}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:12,padding:20,maxWidth:420,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.2)"}}>
        <h3 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:18,fontWeight:400,margin:"0 0 4px"}}>🏆 Certificado de Concentração</h3>
        <p style={{fontSize:12,color:"#64748b",marginBottom:12}}>Tens {unlockedConcs.length} concentração{unlockedConcs.length>1?"ões":""} desbloqueada{unlockedConcs.length>1?"s":""}. A PBS atribui apenas 1 certificado. Escolhe qual incluir no relatório — ou nenhuma.</p>
        <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:12}}>
          {unlockedConcs.map(area=>{
            const t=CONC_TAG[area];
            return(<button key={area} onClick={()=>{setChosenConc(area);setConcModal(false);setReportHTML(buildReportHTML(fCourses,iCourses,fECTS,sName,area,targetECTS,track))}} style={{
              padding:"10px 14px",borderRadius:8,cursor:"pointer",fontSize:13,fontWeight:600,
              border:"2px solid "+t.tx,background:t.bg,color:t.tx,textAlign:"left",
            }}>🏆 {area} ({concCountsFinal[area]} cursos)</button>);
          })}
        </div>
        <div style={{display:"flex",gap:8}}>
          <button onClick={()=>{setConcModal(false);setReportHTML(buildReportHTML(fCourses,iCourses,fECTS,sName,null,targetECTS,track))}} style={{flex:1,padding:"8px 0",borderRadius:8,cursor:"pointer",fontSize:12,fontWeight:500,border:"1px solid #d1d5db",background:"#fff",color:"#64748b"}}>Sem certificado</button>
          <button onClick={()=>setConcModal(false)} style={{padding:"8px 16px",borderRadius:8,cursor:"pointer",fontSize:12,border:"1px solid #d1d5db",background:"#fff",color:"#94a3b8"}}>Cancelar</button>
        </div>
      </div>
    </div>}

    <div style={{textAlign:"center",padding:"14px 0 8px",fontSize:10,color:"#b0b8c4",fontStyle:"italic"}}>Página criada por José Ramos, com uso de AI</div>
  </div>

  {chatOpen&&<div style={{width:340,minWidth:260,borderLeft:"1px solid #e2e8f0",display:"flex",flexDirection:"column",background:"#fff"}}>
    <div style={{padding:"7px 10px",borderBottom:"1px solid #e2e8f0",fontSize:12,fontWeight:600}}>💬 Agente</div>
    <ChatPanel askTrigger={askTrigger}/>
  </div>}

  {/* Report overlay */}
  {reportHTML&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:200,display:"flex",flexDirection:"column",background:"#fff"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",borderBottom:"1px solid #e2e8f0",background:"#f8fafc",flexShrink:0}} className="no-print">
      <span style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:16}}>📄 Relatório PBS EMBA Electives</span>
      <div style={{display:"flex",gap:6}}>
        <button onClick={()=>{
          const blob=new Blob([reportHTML],{type:"text/html"});
          const url=URL.createObjectURL(blob);
          const a=document.createElement("a");
          a.href=url;a.download="pbs-electives-report.html";a.click();
          URL.revokeObjectURL(url);
        }} style={{padding:"5px 14px",borderRadius:6,border:"1px solid #d1d5db",cursor:"pointer",background:"#fff",color:"#1e293b",fontSize:11,fontWeight:600}}>
          ⬇ Download HTML
        </button>
        <button onClick={()=>window.print()} style={{padding:"5px 14px",borderRadius:6,border:"none",cursor:"pointer",background:"#1e293b",color:"#fff",fontSize:11,fontWeight:600}}>
          🖨 Imprimir / PDF
        </button>
        <button onClick={()=>setReportHTML(null)} style={{padding:"5px 10px",borderRadius:6,border:"1px solid #d1d5db",cursor:"pointer",background:"#fff",color:"#64748b",fontSize:13}}>✕</button>
      </div>
    </div>
    <iframe
      srcDoc={reportHTML}
      style={{flex:1,border:"none",width:"100%"}}
      title="Report"
    />
    <style dangerouslySetInnerHTML={{__html:`@media print{body>div>div:not([style*="position: fixed"]){display:none!important}.no-print{display:none!important}}`}}/>
  </div>}
</div>
```

);
}
