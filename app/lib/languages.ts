// ─────────────────────────────────────────────────────────────────────────────
// Nexus Global Enterprise — Centralized Translation Dictionary
// Languages: English (en) | Español (es) | Português (pt)
// Consumed exclusively via LanguageProvider → useTranslation()
// ─────────────────────────────────────────────────────────────────────────────

export type Lang = "en" | "es" | "pt";

// ── Shape ─────────────────────────────────────────────────────────────────────

export interface Dictionary {
  nav: {
    brand: string;
    services: string;
    howItWorks: string;
    caseStudy: string;
    getHelp: string;
    submitCta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    paymentNote: string;
    stackLabel: string;
  };
  howItWorks: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };
  services: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    popularBadge: string;
    plans: [ServicePlan, ServicePlan, ServicePlan];
    disclaimer: string;
  };
  caseStudy: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    clientLabel: string;
    deliveryBadge: string;
    stackTable: {
      title: string;
      headers: [string, string, string];
      rows: Array<[string, string, string]>;
    };
    timeline: {
      title: string;
      items: Array<{ phase: string; label: string; detail: string }>;
    };
  };
  form: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    fullName:  { label: string; placeholder: string; error: string };
    email:     { label: string; placeholder: string; error: string };
    builders:  { label: string; error: string };
    hasGithub:  string;
    hasVercel:  string;
    hasSupabase: string;
    problem:   { label: string; placeholder: string; error: string };
    deadline:  { label: string; placeholder: string; error: string; options: Record<string, string> };
    discovery: { label: string; placeholder: string; options: Record<string, string> };
    yes: string;
    no:  string;
    submit:      string;
    submitting:  string;
    note:        string;
    networkError: string;
    success: { title: string; message: string; note: string };
  };
  footer: {
    tagline: string;
    services: { title: string; items: string[] };
    stack:    { title: string; items: string[] };
    policy:   { title: string; items: string[] };
    copyrightPrefix: string;
    disclaimer: string;
  };
}

export interface ServicePlan {
  name:     string;
  price:    string;
  unit:     string;
  tagline:  string;
  popular:  boolean;
  features: string[];
  cta:      string;
}

// ── English ───────────────────────────────────────────────────────────────────

const en: Dictionary = {
  nav: {
    brand:     "Nexus Global Enterprise",
    services:  "Services",
    howItWorks:"How It Works",
    caseStudy: "Case Study",
    getHelp:   "Get Help",
    submitCta: "Submit Your App",
  },

  hero: {
    badge: "Production-Ready Migrations · 24–72 Hour Turnaround",
    headline:
      "Your AI-Built App Is Failing in Production. We Architect the Fix.",
    subheadline:
      "We perform structural migrations from raw AI outputs — Lovable, Bolt, v0, Cursor — into production-hardened repositories deployed natively on Vercel and Supabase within a strict 24–72 hour operational window.",
    primaryCta:  "Submit Your App for Review",
    secondaryCta:"See How It Works",
    paymentNote: "Payment collected only after scope is confirmed.",
    stackLabel:  "Production stack we deploy to:",
  },

  howItWorks: {
    sectionLabel: "Process",
    headline:     "Simple. Transparent. Fast.",
    subheadline:  "Three structured steps from broken AI prototype to live production infrastructure.",
    steps: [
      {
        number: "01",
        title:  "Submit the Intake Form",
        description:
          "Provide details about your platform, what's broken, and your delivery deadline. No discovery calls required. The form takes three minutes.",
      },
      {
        number: "02",
        title:  "Scope Review & Confirmation",
        description:
          "We audit your submission and return a precise written scope: exact deliverables, fixed cost, and a confirmed delivery timeline. You approve before any work begins.",
      },
      {
        number: "03",
        title:  "Payment Cleared — We Deliver",
        description:
          "Once scope is approved, payment is requested. We begin immediately and ship a production-ready, fully deployed application within the agreed operational window.",
      },
    ],
  },

  services: {
    sectionLabel: "Services & Pricing",
    headline:     "Flat-Rate. Scoped Upfront. No Surprises.",
    subheadline:  "Exact scope confirmed in writing before payment is ever requested.",
    popularBadge: "Most Popular",
    plans: [
      {
        name:    "Infrastructure Deployment Fix",
        price:   "$150",
        unit:    "flat",
        tagline: "Your app is built. It will not deploy.",
        popular: false,
        features: [
          "Comprehensive audit of Vercel build container errors",
          "Debug and remap all unmapped process.env variables",
          "Resolve Next.js build-time compilation blocks",
          "Configure clean GitHub repository webhooks",
          "Route custom domains with managed SSL termination",
          "One full round of post-deploy validation",
        ],
        cta: "Get Started",
      },
      {
        name:    "End-to-End Core Migration",
        price:   "$250",
        unit:    "flat",
        tagline: "Move from raw AI export to production infrastructure.",
        popular: true,
        features: [
          "Everything in Infrastructure Deployment Fix",
          "Migrate AI repo export into Next.js 14 App Router",
          "Provision cloud-hosted Supabase PostgreSQL database",
          "Configure relational schemas and table relationships",
          "Establish version-controlled CI/CD deployment pipeline",
          "100% build optimization and Vercel production deployment",
          "48–72 hour delivery guarantee",
        ],
        cta: "Get Started",
      },
      {
        name:    "Enterprise App Stabilization",
        price:   "$400",
        unit:    "flat",
        tagline: "Live but fragile. We harden the entire stack.",
        popular: false,
        features: [
          "Everything in End-to-End Core Migration",
          "Integrate Supabase native JWT User Authentication",
          "Write strict database Row-Level Security (RLS) policies",
          "Debug and optimize Next.js serverless middleware",
          "Establish API rate-limit guards to prevent billing spikes",
          "Full performance audit and Core Web Vitals remediation",
          "30-day asynchronous support SLA",
        ],
        cta: "Get Started",
      },
    ],
    disclaimer:
      "All work is scoped and confirmed before payment is requested. No surprises.",
  },

  caseStudy: {
    sectionLabel:  "Case Study",
    headline:      "Real Work. Real Results.",
    subheadline:   "From un-deployed AI prototype to verified production stack in under 72 hours.",
    clientLabel:   "Client A — Confidential",
    deliveryBadge: "Delivered in < 72 Hours",
    stackTable: {
      title:   "Stack Transformation",
      headers: ["Layer", "Before", "After"],
      rows: [
        ["Framework",       "Lovable (AI-generated)",    "Next.js 14 App Router"],
        ["Database",        "None",                      "Supabase PostgreSQL"],
        ["Auth",            "Broken mock session",       "Supabase JWT Auth"],
        ["Hosting",         "Local only",                "Vercel (Production)"],
        ["Version Control", "None",                      "GitHub + CI/CD Pipeline"],
        ["Delivery",        "—",                         "Under 72 hours"],
      ],
    },
    timeline: {
      title: "Delivery Timeline",
      items: [
        {
          phase:  "Hour 0",
          label:  "Intake Received",
          detail: "Client submitted a Lovable-generated app — zero deployment config, no database, broken authentication routes throughout.",
        },
        {
          phase:  "Hour 4",
          label:  "Scope Confirmed",
          detail: "Full migration scope delivered and approved: Next.js 14 rewrite, Supabase schema provisioning, Vercel deployment pipeline.",
        },
        {
          phase:  "Hour 24",
          label:  "Migration Underway",
          detail: "Codebase migrated to Next.js App Router. Supabase database live with RLS policies enforced. GitHub repository initialized with webhooks.",
        },
        {
          phase:  "Hour 68",
          label:  "Live in Production",
          detail: "Application deployed to Vercel with custom domain, all environment variables mapped, and full smoke test suite passing.",
        },
      ],
    },
  },

  form: {
    sectionLabel: "Get Started",
    headline:     "Submit Your App for Review",
    subheadline:  "Fill this out and we'll respond within a few hours.",
    fullName: {
      label:       "Full Name",
      placeholder: "Jane Smith",
      error:       "Full name is required.",
    },
    email: {
      label:       "Email Address",
      placeholder: "jane@company.com",
      error:       "A valid email address is required.",
    },
    builders: {
      label: "What platform was your app built on?",
      error: "Please select at least one platform.",
    },
    hasGithub:  "GitHub repository?",
    hasVercel:  "Vercel account?",
    hasSupabase:"Supabase project?",
    problem: {
      label:       "What's broken or not working?",
      placeholder: "Describe the issue in detail. What were you trying to do? What error messages are you seeing?",
      error:       "Please describe the issue.",
    },
    deadline: {
      label:       "When do you need this resolved?",
      placeholder: "Select a timeline...",
      error:       "Please select a deadline.",
      options: {
        asap:     "ASAP — as fast as possible",
        "24h":    "Within 24 hours",
        "72h":    "Within 72 hours",
        "1w":     "Within 1 week",
        flexible: "Flexible",
      },
    },
    discovery: {
      label:       "How did you find us?",
      placeholder: "Select an option...",
      options: {
        google:       "Google Search",
        twitter:      "Twitter / X",
        reddit:       "Reddit",
        linkedin:     "LinkedIn",
        referral:     "Referral / Word of Mouth",
        "ai-builder": "AI Builder Community",
        other:        "Other",
      },
    },
    yes:          "Yes",
    no:           "No",
    submit:       "Submit for Review",
    submitting:   "Submitting…",
    note:         "No payment until scope is confirmed. We'll respond within a few hours.",
    networkError: "Network error. Please check your connection and try again.",
    success: {
      title:   "Request Received",
      message: "Got it. We'll review your submission and reach out within a few hours to confirm scope and next steps.",
      note:    "No payment will be requested until you approve the scope.",
    },
  },

  footer: {
    tagline:
      "Specialized in migrating AI-generated and no-code applications into production-grade infrastructure on Vercel and Supabase.",
    services: {
      title: "Services",
      items: [
        "Infrastructure Deployment Fix — $150",
        "End-to-End Core Migration — $250",
        "Enterprise App Stabilization — $400",
      ],
    },
    stack: {
      title: "Production Stack",
      items: ["Next.js 14", "Supabase", "Vercel", "GitHub"],
    },
    policy: {
      title: "Engagement Policy",
      items: ["Scope confirmed first", "No upfront payment", "24–72 hr turnaround"],
    },
    copyrightPrefix: "Nexus Global Enterprise. All rights reserved.",
    disclaimer:
      "All engagements are scoped and confirmed before payment is requested. 24–72 hour turnaround.",
  },
};

// ── Español ───────────────────────────────────────────────────────────────────

const es: Dictionary = {
  nav: {
    brand:      "Nexus Global Enterprise",
    services:   "Servicios",
    howItWorks: "Cómo Funciona",
    caseStudy:  "Caso de Estudio",
    getHelp:    "Obtener Ayuda",
    submitCta:  "Enviar Aplicación",
  },

  hero: {
    badge: "Migraciones Listas para Producción · Entrega en 24–72 Horas",
    headline:
      "Su aplicación creada con IA no funciona en producción. Nosotros la estructuramos.",
    subheadline:
      "Realizamos migraciones estructurales desde salidas brutas de IA — Lovable, Bolt, v0, Cursor — hacia repositorios reforzados para producción, desplegados nativamente en Vercel y Supabase dentro de una ventana operacional estricta de 24 a 72 horas.",
    primaryCta:   "Enviar Aplicación para Revisión",
    secondaryCta: "Ver Cómo Funciona",
    paymentNote:  "El pago se cobra únicamente después de confirmar el alcance.",
    stackLabel:   "Stack de producción donde desplegamos:",
  },

  howItWorks: {
    sectionLabel: "Proceso",
    headline:     "Simple. Transparente. Rápido.",
    subheadline:  "Tres pasos estructurados desde el prototipo de IA hasta la infraestructura de producción.",
    steps: [
      {
        number: "01",
        title:  "Complete el Formulario de Solicitud",
        description:
          "Proporcione detalles sobre su plataforma, qué está fallando y su fecha límite de entrega. No se requieren llamadas de descubrimiento. El formulario tarda tres minutos.",
      },
      {
        number: "02",
        title:  "Revisión y Confirmación del Alcance",
        description:
          "Auditamos su solicitud y devolvemos un alcance escrito preciso: entregables exactos, costo fijo y un cronograma de entrega confirmado. Usted aprueba antes de comenzar cualquier trabajo.",
      },
      {
        number: "03",
        title:  "Pago Aprobado — Nosotros Entregamos",
        description:
          "Una vez aprobado el alcance, se solicita el pago. Comenzamos de inmediato y entregamos una aplicación completamente desplegada y lista para producción dentro de la ventana operacional acordada.",
      },
    ],
  },

  services: {
    sectionLabel: "Servicios y Precios",
    headline:     "Tarifa Fija. Alcance Confirmado. Sin Sorpresas.",
    subheadline:  "El alcance exacto se confirma por escrito antes de solicitar cualquier pago.",
    popularBadge: "Más Popular",
    plans: [
      {
        name:    "Corrección de Despliegue de Infraestructura",
        price:   "$150",
        unit:    "tarifa fija",
        tagline: "Su aplicación está construida. No se despliega.",
        popular: false,
        features: [
          "Auditoría completa de errores en el contenedor de build de Vercel",
          "Depuración y remapeo de todas las variables process.env no asignadas",
          "Resolución de bloqueos de compilación en tiempo de build de Next.js",
          "Configuración limpia de webhooks del repositorio de GitHub",
          "Enrutamiento de dominios personalizados con terminación SSL gestionada",
          "Una ronda completa de validación post-despliegue",
        ],
        cta: "Comenzar",
      },
      {
        name:    "Migración Integral Completa",
        price:   "$250",
        unit:    "tarifa fija",
        tagline: "De exportación bruta de IA a infraestructura de producción.",
        popular: true,
        features: [
          "Todo lo incluido en Corrección de Despliegue",
          "Migración del repositorio de IA a Next.js 14 App Router",
          "Aprovisionamiento de base de datos Supabase PostgreSQL en la nube",
          "Configuración de esquemas relacionales y relaciones entre tablas",
          "Establecimiento de pipeline CI/CD con control de versiones",
          "100% de optimización del build y despliegue en producción en Vercel",
          "Garantía de entrega en 48–72 horas",
        ],
        cta: "Comenzar",
      },
      {
        name:    "Estabilización de Aplicación Empresarial",
        price:   "$400",
        unit:    "tarifa fija",
        tagline: "En producción pero frágil. Reforzamos todo el stack.",
        popular: false,
        features: [
          "Todo lo incluido en Migración Integral",
          "Integración de Autenticación JWT nativa de Supabase",
          "Escritura de políticas estrictas de Row-Level Security (RLS)",
          "Depuración y optimización del middleware serverless de Next.js",
          "Guardas de límite de tasa de API para prevenir picos de facturación",
          "Auditoría de rendimiento completa y corrección de Core Web Vitals",
          "SLA de soporte asíncrono por 30 días",
        ],
        cta: "Comenzar",
      },
    ],
    disclaimer:
      "Todo el trabajo es delimitado y confirmado antes de solicitar el pago. Sin sorpresas.",
  },

  caseStudy: {
    sectionLabel:  "Caso de Estudio",
    headline:      "Trabajo Real. Resultados Reales.",
    subheadline:   "De prototipo de IA no desplegado a stack de producción verificado en menos de 72 horas.",
    clientLabel:   "Cliente A — Confidencial",
    deliveryBadge: "Entregado en < 72 Horas",
    stackTable: {
      title:   "Transformación del Stack",
      headers: ["Capa", "Antes", "Después"],
      rows: [
        ["Framework",          "Lovable (generado por IA)",   "Next.js 14 App Router"],
        ["Base de datos",      "Ninguna",                     "Supabase PostgreSQL"],
        ["Autenticación",      "Sesión simulada rota",        "JWT de Supabase"],
        ["Alojamiento",        "Solo local",                  "Vercel (Producción)"],
        ["Control de versiones","Ninguno",                    "GitHub + Pipeline CI/CD"],
        ["Entrega",            "—",                           "Menos de 72 horas"],
      ],
    },
    timeline: {
      title: "Cronograma de Entrega",
      items: [
        {
          phase:  "Hora 0",
          label:  "Solicitud Recibida",
          detail: "El cliente envió una aplicación generada por Lovable — sin configuración de despliegue, sin base de datos, rutas de autenticación rotas.",
        },
        {
          phase:  "Hora 4",
          label:  "Alcance Confirmado",
          detail: "Alcance de migración completo entregado y aprobado: reescritura en Next.js 14, aprovisionamiento del esquema de Supabase, pipeline de despliegue en Vercel.",
        },
        {
          phase:  "Hora 24",
          label:  "Migración en Curso",
          detail: "Base de código migrada a Next.js App Router. Base de datos de Supabase activa con políticas RLS aplicadas. Repositorio de GitHub inicializado con webhooks.",
        },
        {
          phase:  "Hora 68",
          label:  "En Producción",
          detail: "Aplicación desplegada en Vercel con dominio personalizado, todas las variables de entorno mapeadas y suite completa de pruebas funcionales aprobadas.",
        },
      ],
    },
  },

  form: {
    sectionLabel: "Comenzar",
    headline:     "Envíe Su Aplicación para Revisión",
    subheadline:  "Complete este formulario y responderemos en pocas horas.",
    fullName: {
      label:       "Nombre Completo",
      placeholder: "Juan García",
      error:       "El nombre completo es obligatorio.",
    },
    email: {
      label:       "Correo Electrónico",
      placeholder: "juan@empresa.com",
      error:       "Se requiere una dirección de correo válida.",
    },
    builders: {
      label: "¿En qué plataforma fue construida su aplicación?",
      error: "Seleccione al menos una plataforma.",
    },
    hasGithub:   "¿Repositorio en GitHub?",
    hasVercel:   "¿Cuenta de Vercel?",
    hasSupabase: "¿Proyecto en Supabase?",
    problem: {
      label:       "¿Qué está roto o no funciona?",
      placeholder: "Describa el problema en detalle. ¿Qué intentaba hacer? ¿Qué mensajes de error está viendo?",
      error:       "Por favor describa el problema.",
    },
    deadline: {
      label:       "¿Cuándo necesita que esté resuelto?",
      placeholder: "Seleccione un plazo...",
      error:       "Por favor seleccione una fecha límite.",
      options: {
        asap:     "Lo antes posible",
        "24h":    "Dentro de 24 horas",
        "72h":    "Dentro de 72 horas",
        "1w":     "Dentro de 1 semana",
        flexible: "Flexible",
      },
    },
    discovery: {
      label:       "¿Cómo nos encontró?",
      placeholder: "Seleccione una opción...",
      options: {
        google:       "Búsqueda en Google",
        twitter:      "Twitter / X",
        reddit:       "Reddit",
        linkedin:     "LinkedIn",
        referral:     "Referido / Boca a boca",
        "ai-builder": "Comunidad de constructores de IA",
        other:        "Otro",
      },
    },
    yes:          "Sí",
    no:           "No",
    submit:       "Enviar para Revisión",
    submitting:   "Enviando…",
    note:         "Sin pago hasta que se confirme el alcance. Responderemos en pocas horas.",
    networkError: "Error de red. Verifique su conexión e intente de nuevo.",
    success: {
      title:   "Solicitud Recibida",
      message: "Recibido. Revisaremos su solicitud y nos pondremos en contacto en pocas horas para confirmar el alcance y los próximos pasos.",
      note:    "No se solicitará pago hasta que apruebe el alcance.",
    },
  },

  footer: {
    tagline:
      "Especializados en migrar aplicaciones generadas por IA y sin código hacia infraestructura de nivel empresarial en Vercel y Supabase.",
    services: {
      title: "Servicios",
      items: [
        "Corrección de Despliegue — $150",
        "Migración Integral — $250",
        "Estabilización Empresarial — $400",
      ],
    },
    stack: {
      title: "Stack de Producción",
      items: ["Next.js 14", "Supabase", "Vercel", "GitHub"],
    },
    policy: {
      title: "Política de Compromiso",
      items: ["Alcance confirmado primero", "Sin pago por adelantado", "Entrega en 24–72 horas"],
    },
    copyrightPrefix: "Nexus Global Enterprise. Todos los derechos reservados.",
    disclaimer:
      "Todos los compromisos se delimitan y confirman antes de solicitar el pago. Entrega en 24–72 horas.",
  },
};

// ── Português ─────────────────────────────────────────────────────────────────

const pt: Dictionary = {
  nav: {
    brand:      "Nexus Global Enterprise",
    services:   "Serviços",
    howItWorks: "Como Funciona",
    caseStudy:  "Caso de Estudo",
    getHelp:    "Obter Ajuda",
    submitCta:  "Enviar Aplicativo",
  },

  hero: {
    badge: "Migrações Prontas para Produção · Entrega em 24–72 Horas",
    headline:
      "Seu aplicativo desenvolvido com IA não funciona em produção. Nós estruturamos a solução.",
    subheadline:
      "Realizamos migrações estruturais de saídas brutas de IA — Lovable, Bolt, v0, Cursor — para repositórios endurecidos para produção, implantados nativamente no Vercel e Supabase dentro de uma janela operacional rigorosa de 24 a 72 horas.",
    primaryCta:   "Enviar Aplicativo para Revisão",
    secondaryCta: "Ver Como Funciona",
    paymentNote:  "Pagamento cobrado somente após a confirmação do escopo.",
    stackLabel:   "Stack de produção em que implantamos:",
  },

  howItWorks: {
    sectionLabel: "Processo",
    headline:     "Simples. Transparente. Rápido.",
    subheadline:  "Três etapas estruturadas do protótipo de IA à infraestrutura de produção.",
    steps: [
      {
        number: "01",
        title:  "Preencha o Formulário de Solicitação",
        description:
          "Forneça detalhes sobre sua plataforma, o que está com problema e seu prazo de entrega. Não são necessárias chamadas de descoberta. O formulário leva três minutos.",
      },
      {
        number: "02",
        title:  "Revisão e Confirmação do Escopo",
        description:
          "Auditamos sua solicitação e retornamos um escopo escrito preciso: entregas exatas, custo fixo e cronograma de entrega confirmado. Você aprova antes de qualquer trabalho começar.",
      },
      {
        number: "03",
        title:  "Pagamento Aprovado — Nós Entregamos",
        description:
          "Após a aprovação do escopo, o pagamento é solicitado. Começamos imediatamente e entregamos um aplicativo totalmente implantado e pronto para produção dentro da janela operacional acordada.",
      },
    ],
  },

  services: {
    sectionLabel: "Serviços e Preços",
    headline:     "Tarifa Fixa. Escopo Definido. Sem Surpresas.",
    subheadline:  "O escopo exato é confirmado por escrito antes que qualquer pagamento seja solicitado.",
    popularBadge: "Mais Popular",
    plans: [
      {
        name:    "Correção de Implantação de Infraestrutura",
        price:   "$150",
        unit:    "tarifa fixa",
        tagline: "Seu aplicativo está desenvolvido. Mas não implanta.",
        popular: false,
        features: [
          "Auditoria abrangente de erros no contêiner de build do Vercel",
          "Depuração e remapeamento de todas as variáveis process.env não mapeadas",
          "Resolução de bloqueios de compilação em tempo de build do Next.js",
          "Configuração limpa de webhooks do repositório GitHub",
          "Roteamento de domínios personalizados com terminação SSL gerenciada",
          "Uma rodada completa de validação pós-implantação",
        ],
        cta: "Começar",
      },
      {
        name:    "Migração Completa de Ponta a Ponta",
        price:   "$250",
        unit:    "tarifa fixa",
        tagline: "Da exportação bruta de IA à infraestrutura de produção.",
        popular: true,
        features: [
          "Tudo incluído na Correção de Implantação",
          "Migração do repositório de IA para o Next.js 14 App Router",
          "Provisionamento de banco de dados Supabase PostgreSQL na nuvem",
          "Configuração de esquemas relacionais e relacionamentos entre tabelas",
          "Estabelecimento de pipeline CI/CD com controle de versão",
          "100% de otimização de build e implantação em produção no Vercel",
          "Garantia de entrega em 48–72 horas",
        ],
        cta: "Começar",
      },
      {
        name:    "Estabilização Empresarial de Aplicativo",
        price:   "$400",
        unit:    "tarifa fixa",
        tagline: "Em produção mas frágil. Nós endurecemos toda a stack.",
        popular: false,
        features: [
          "Tudo incluído na Migração Completa",
          "Integração de Autenticação JWT nativa do Supabase",
          "Criação de políticas rígidas de Row-Level Security (RLS)",
          "Depuração e otimização do middleware serverless do Next.js",
          "Guardas de limite de taxa de API para prevenir picos de cobrança",
          "Auditoria completa de desempenho e correção de Core Web Vitals",
          "SLA de suporte assíncrono por 30 dias",
        ],
        cta: "Começar",
      },
    ],
    disclaimer:
      "Todo o trabalho é delimitado e confirmado antes que o pagamento seja solicitado. Sem surpresas.",
  },

  caseStudy: {
    sectionLabel:  "Caso de Estudo",
    headline:      "Trabalho Real. Resultados Reais.",
    subheadline:   "De protótipo de IA não implantado a stack de produção verificada em menos de 72 horas.",
    clientLabel:   "Cliente A — Confidencial",
    deliveryBadge: "Entregue em < 72 Horas",
    stackTable: {
      title:   "Transformação da Stack",
      headers: ["Camada", "Antes", "Depois"],
      rows: [
        ["Framework",          "Lovable (gerado por IA)",      "Next.js 14 App Router"],
        ["Banco de dados",     "Nenhum",                       "Supabase PostgreSQL"],
        ["Autenticação",       "Sessão simulada quebrada",     "JWT do Supabase"],
        ["Hospedagem",         "Somente local",                "Vercel (Produção)"],
        ["Controle de versão", "Nenhum",                       "GitHub + Pipeline CI/CD"],
        ["Entrega",            "—",                            "Menos de 72 horas"],
      ],
    },
    timeline: {
      title: "Cronograma de Entrega",
      items: [
        {
          phase:  "Hora 0",
          label:  "Solicitação Recebida",
          detail: "O cliente enviou um aplicativo gerado pelo Lovable — sem configuração de implantação, sem banco de dados, rotas de autenticação quebradas.",
        },
        {
          phase:  "Hora 4",
          label:  "Escopo Confirmado",
          detail: "Escopo completo de migração entregue e aprovado: reescrita no Next.js 14, provisionamento do esquema Supabase, pipeline de implantação no Vercel.",
        },
        {
          phase:  "Hora 24",
          label:  "Migração em Andamento",
          detail: "Base de código migrada para o Next.js App Router. Banco de dados Supabase ativo com políticas RLS aplicadas. Repositório GitHub inicializado com webhooks.",
        },
        {
          phase:  "Hora 68",
          label:  "Em Produção",
          detail: "Aplicativo implantado no Vercel com domínio personalizado, todas as variáveis de ambiente mapeadas e suite completa de testes funcionais aprovados.",
        },
      ],
    },
  },

  form: {
    sectionLabel: "Começar",
    headline:     "Envie Seu Aplicativo para Revisão",
    subheadline:  "Preencha este formulário e responderemos em poucas horas.",
    fullName: {
      label:       "Nome Completo",
      placeholder: "João Silva",
      error:       "O nome completo é obrigatório.",
    },
    email: {
      label:       "Endereço de E-mail",
      placeholder: "joao@empresa.com",
      error:       "Um endereço de e-mail válido é obrigatório.",
    },
    builders: {
      label: "Em qual plataforma seu aplicativo foi desenvolvido?",
      error: "Selecione pelo menos uma plataforma.",
    },
    hasGithub:   "Repositório no GitHub?",
    hasVercel:   "Conta no Vercel?",
    hasSupabase: "Projeto no Supabase?",
    problem: {
      label:       "O que está quebrado ou não está funcionando?",
      placeholder: "Descreva o problema em detalhes. O que você tentou fazer? Quais mensagens de erro está vendo?",
      error:       "Por favor descreva o problema.",
    },
    deadline: {
      label:       "Quando você precisa que isso esteja resolvido?",
      placeholder: "Selecione um prazo...",
      error:       "Por favor selecione um prazo.",
      options: {
        asap:     "O mais rápido possível",
        "24h":    "Dentro de 24 horas",
        "72h":    "Dentro de 72 horas",
        "1w":     "Dentro de 1 semana",
        flexible: "Flexível",
      },
    },
    discovery: {
      label:       "Como nos encontrou?",
      placeholder: "Selecione uma opção...",
      options: {
        google:       "Pesquisa no Google",
        twitter:      "Twitter / X",
        reddit:       "Reddit",
        linkedin:     "LinkedIn",
        referral:     "Indicação / Boca a boca",
        "ai-builder": "Comunidade de desenvolvedores de IA",
        other:        "Outro",
      },
    },
    yes:          "Sim",
    no:           "Não",
    submit:       "Enviar para Revisão",
    submitting:   "Enviando…",
    note:         "Sem pagamento até que o escopo seja confirmado. Responderemos em poucas horas.",
    networkError: "Erro de rede. Verifique sua conexão e tente novamente.",
    success: {
      title:   "Solicitação Recebida",
      message: "Recebemos. Revisaremos sua solicitação e entraremos em contato em poucas horas para confirmar o escopo e os próximos passos.",
      note:    "Nenhum pagamento será solicitado até que você aprove o escopo.",
    },
  },

  footer: {
    tagline:
      "Especializados em migrar aplicativos gerados por IA e sem código para infraestrutura de nível empresarial no Vercel e Supabase.",
    services: {
      title: "Serviços",
      items: [
        "Correção de Implantação — $150",
        "Migração Completa — $250",
        "Estabilização Empresarial — $400",
      ],
    },
    stack: {
      title: "Stack de Produção",
      items: ["Next.js 14", "Supabase", "Vercel", "GitHub"],
    },
    policy: {
      title: "Política de Engajamento",
      items: ["Escopo confirmado primeiro", "Sem pagamento antecipado", "Entrega em 24–72 horas"],
    },
    copyrightPrefix: "Nexus Global Enterprise. Todos os direitos reservados.",
    disclaimer:
      "Todos os compromissos são delimitados e confirmados antes que o pagamento seja solicitado. Entrega em 24–72 horas.",
  },
};

// ── Exported API ──────────────────────────────────────────────────────────────

export const dictionaries: Record<Lang, Dictionary> = { en, es, pt };

export function getT(lang: Lang): Dictionary {
  return dictionaries[lang];
}
