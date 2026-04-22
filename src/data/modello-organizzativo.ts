/**
 * Modello organizzativo — contenuti in dati, così si aggiornano ruoli e processi
 * senza toccare il layout della pagina.
 */
export const modelloOrganizzativo = {
  introBox:
    'NexStudio opera da Bangkok. I numeri tra parentesi nelle voci sotto sono orientativi (early stage): formalizzate nomine e deleghe e aggiornate a ogni crescita di team.',
  perimetro:
    "Documento su ruoli, ritmi di governo e controlli «lean» per la Società, con LexAura (Legal Tech) e MediAura (Health Tech) come linee prodotto. Non sostituisce modelli 231, statuti o pareri legali: allineatelo a entità giuridica, consiglio e consulenti.",
} as const;

export const modelloOrganizzativoRuoli = [
  {
    label: 'Founder / CEO (1)',
    text: 'strategia, approvazione delle policy, contatti con board e investitori, accountability complessiva verso legge e contratti.',
  },
  {
    label: 'CTO / Head of Product (1)',
    text: 'architettura, roadmap, quality gate di prodotto, responsabilità tecnica end-to-end.',
  },
  {
    label: 'Lead Engineer (1–2)',
    text: 'sviluppo, code review, CI/CD, qualità del codice in reparto.',
  },
  {
    label: 'DevOps / Platform (1, oppure outsourcing)',
    text: 'deploy, KMS, backup e disaster recovery, governo ambiente di produzione.',
  },
  {
    label: 'Security & Privacy Lead (1, ibrido o contractor)',
    text: 'sicurezza operativa, vulnerabilità, allineamento con DPO e rilasci sensibili.',
  },
  {
    label: 'DPO / Privacy responsible (frazionale o outsourcing)',
    text: 'DPIA, diritti degli interessati, coerenza informativa e register dei trattamenti.',
  },
  {
    label: 'Legal & compliance (frazionale o esterno)',
    text: 'contratti, NDA, normative di settore pertinenza Legal Tech e Health Tech.',
  },
  {
    label: 'Product / domain advisor (part-time o consulente)',
    text: 'convalida funzionalità ad impatto su decisioni mediche o legali, avvertenze d’uso.',
  },
  {
    label: 'Customer success / support (1)',
    text: 'onboarding, richieste, escalation verso tecnica e governance.',
  },
  {
    label: 'Operations / HR (1, part-time)',
    text: 'onboarding personale, formazione, canali segnalazioni e whistleblowing interno.',
  },
  {
    label: 'Finance (1, part-time o outsourcing)',
    text: 'contabilità, incassi, policy fornitori.',
  },
] as const;

export const modelloOrganizzativoGovernance = [
  {
    nome: 'Weekly tactical',
    partecipanti: 'Founder, CTO, Security/privacy, customer success',
    nota: 'priorità, incidenti aperti, rilasci critici.',
  },
  {
    nome: 'Product sync (bisettimanale)',
    partecipanti: 'CTO, lead engineer, domain advisor',
    nota: 'backlog, release, checkpoint compliance di prodotto (per linea ove serva).',
  },
  {
    nome: 'Compliance check (mensile)',
    partecipanti: 'CEO, legal, DPO, security',
    nota: 'DPIA, vendor ad alto rischio, sintesi incidenti e correzioni.',
  },
  {
    nome: 'Review trimestrale',
    partecipanti: 'board o founders',
    nota: 'strategia, budget, rischi e capacity.',
  },
] as const;

export const modelloOrganizzativoResponsabilitaSintesi: readonly string[] = [
  "Codice etico e policy: owner legal & compliance; approvazione CEO.",
  "Sicurezza operativa e incident response: owner security lead; esecuzione tecnica CTO.",
  "Privacy, trattamenti sensibili, DPIA: owner DPO; supporto legal.",
  "Rilasci in produzione: accountable CTO; responsible lead engineer; consulted security, DPO, domain advisor.",
  "Fornitori e sub-processori: owner operations e legal; due diligence security e DPO.",
  "Richieste interessati (DSR): owner DPO; operatività customer success ove applicabile.",
  "Segnalazioni e whistleblowing: owner operations/HR; supporto investigativo legal.",
] as const;

export const modelloOrganizzativoControlliLean: readonly string[] = [
  'IAM con MFA per accesso a produzione e a segreti.',
  'CI/CD con SAST e scansione dipendenze in pipeline.',
  'SBOM per ogni release.',
  'TLS in transito; cifratura a riposo per dati sensibili.',
  'Backup giornalieri; test DR trimestrale con ripristino documentato.',
  "Log e alerting su anomalie (SIEM o servizio gestito).",
  "Checklist pre-release security/privacy con traccia d'approvazione.",
] as const;

export const modelloOrganizzativoKpi = [
  { area: 'Security', testo: 'patch critiche entro SLA; MTTD e MTTR su incidenti.' },
  { area: 'Privacy', testo: 'tempo risposta DSR; DPIA aperte vs completate per perimetro (Legale, Sanitario, piattaforma).' },
  { area: 'Product', testo: 'lead time deploy; copertura test sui moduli critici (per linea prodotto).' },
  { area: 'Operations', testo: 'uptime su SLA; tempo risposta support; segnalazioni chiuse nel periodo.' },
] as const;

export const modelloOrganizzativoDocumentazione: readonly string[] = [
  'Codice etico, adesioni in registro.',
  'Informativa privacy, DPA, condizioni d’uso.',
  'DPIA per trattamenti critici (riferire per perimetro, come nel codice etico).',
  "Trust/security brief per clienti e audit (1–2 pagine).",
  "Playbook incident response (versione eseguibile).",
  "SBOM e registro fornitori e sub-processori.",
  "Checklist pre-release e log approvazioni.",
] as const;

export const modelloOrganizzativoPiano30: readonly { quando: string; testo: string }[] = [
  {
    quando: 'Giorni 0–3',
    testo: 'nomine scritte su security, DPO e legal frazionali, con deleghe.',
  },
  {
    quando: 'Giorni 4–10',
    testo: "checklist pre-release in pipeline; MFA e policy IAM al minimo sopra.",
  },
  {
    quando: 'Giorni 11–17',
    testo:
      'avviare o aggiornare una DPIA sul trattamento più critico (es. perimetro MediAura o LexAura); due diligence fornitori ad alto rischio.',
  },
  {
    quando: 'Giorni 18–24',
    testo:
      'Trust center di base: link a codice etico, canali DPO/security, materiali privacy/DPA se disponibili.',
  },
  {
    quando: 'Giorni 25–30',
    testo: 'esercitazione su incident; test rollback e backup; formazione security/privacy obbligatoria iniziale.',
  },
] as const;

export const modelloOrganizzativoOutsourcing: readonly { titolo: string; testo: string }[] = [
  {
    titolo: 'Security ops / SOC',
    testo: 'log, alerting, penetration test periodici.',
  },
  {
    titolo: 'DPO e legal',
    testo: "consulenti con PDPA, GDPR e contesto medico-legale dei mercati in cui servite i clienti.",
  },
  {
    titolo: 'DevOps / platform',
    testo: "servizi cloud gestiti (KMS, database gestiti) per ridurre toil interno.",
  },
] as const;

export const modelloOrganizzativoNote: readonly string[] = [
  "Separazione dei compiti: chi approva in produzione non è l’unico a concedere accessi amministrativi.",
  'Automatizzare controlli ripetitivi (SAST, SBOM, scan dipendenze).',
  "Documentare su ticketing accettazione rischio e decisioni per audit e post-mortem.",
  'Per LexAura e MediAura: convalida esterna su funzionalità ad alto rischio di dominio.',
  'Revisione trimestrale del modello; aggiornare le voci in questo documento e le deleghe scritte.',
] as const;

export const modelloOrganizzativoFlussiDecisionali: readonly { titolo: string; testo: string }[] = [
  {
    titolo: 'Decisione tecnica ordinaria',
    testo: "lead engineer → CTO (ticket con nota se impatta rischi privacy/sicurezza o contrattuali).",
  },
  {
    titolo: "Rilascio con impatto privacy o sicurezza",
    testo: "via libera di security lead e DPO, target 48 ore lavorative salvo deroga motivata scritta.",
  },
  {
    titolo: "Incident P0 (es. data breach probabile o confermato)",
    testo: "security notifica entro 4h CEO, DPO e legal; board se impatto su clienti, regolatori o classi di dati sensibili elevato.",
  },
] as const;
