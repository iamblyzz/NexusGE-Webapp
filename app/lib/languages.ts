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
    plans: [ServicePlan, ServicePlan, ServicePlan, ServicePlan, ServicePlan];
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

  pages: {
    services: {
      hero: { sectionLabel: string; headline: string; subheadline: string };
      retainerLabel: string;
      ctaHeadline: string;
      ctaSubheadline: string;
    };
    process: {
      hero: { sectionLabel: string; headline: string; subheadline: string };
      step4: { number: string; title: string; description: string; detail: string[] };
      audit: {
        sectionLabel: string;
        headline: string;
        subheadline: string;
        layers: Array<{ title: string; items: string[] }>;
      };
      ctaHeadline: string;
      ctaSubheadline: string;
    };
    caseStudies: {
      hero: { sectionLabel: string; headline: string; subheadline: string };
      tax: {
        sectionLabel: string;
        headline: string;
        subheadline: string;
        cols: { symptom: string; cause: string; impact: string };
        patterns: Array<{ title: string; symptom: string; cause: string; impact: string }>;
      };
      case001: {
        id: string;
        title: string;
        situationLabel: string;
        situation: string[];
        brokenLabel: string;
        brokenIntro: string;
        brokenItems: string[];
        quoteText: string;
        quoteAttribution: string;
        takeawayLabel: string;
        takeawayHeadline: string;
        takeawayBody: string;
      };
      ctaHeadline: string;
      ctaSubheadline: string;
    };
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
        price:   "$250",
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
        price:   "$450",
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
        price:   "$750",
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
      {
        name:    "Production Oversight & Architecture Guard",
        price:   "$99",
        unit:    "/ month",
        tagline: "Ongoing infrastructure vigilance — strict SLA boundaries apply.",
        popular: false,
        features: [
          "Weekly Repository & Pipeline Audit (1 scheduled technical check-in window per week)",
          "Strict Weekly Rotation: Issues arising outside your designated day are patched during your next scheduled weekly window.",
          "Off-Schedule Emergency Priority: Request an immediate intervention link for a $150/hour priority surge fee.",
          "Pre-emptive Deployment Conflict Identification & Dependency Verification",
          "Rolling 30-day Backup Monitoring (Supabase & Vercel integrity tracking)",
          "Direct Email/Ticket Support for Architectural Advice (Standard 48-hour SLA)",
        ],
        cta: "Start Retainer",
      },
      {
        name:    "Bespoke Co-Architecture & System Blueprint",
        price:   "$2,500+",
        unit:    "flat rate / sprint",
        tagline: "Custom infrastructure design for teams building at scale.",
        popular: false,
        features: [
          "Dedicated 1-on-1 strategic infrastructure design mapping and consulting",
          "Full relational schema validation and custom Supabase relational planning",
          "Secure multi-tenant architecture and access control layout",
          "Signed Mutual Responsibility Release Framework (Full legal sign-off required)",
          "Includes option for integrated 3rd-party security compliance APIs",
        ],
        cta: "Request Blueprint Consultation",
      },
    ],
    disclaimer:
      "All work is scoped and confirmed before payment is requested. No surprises.",
  },

  caseStudy: {
    sectionLabel:  "Case Study",
    headline:      "Real Work. Real Results.",
    subheadline:   "From an un-deployed AI prototype to a verified production stack in under 24 hours.",
    clientLabel:   "Client A — Confidential (Lovable Build Rescue)",
    deliveryBadge: "Delivered in < 24 Hours",
    stackTable: {
      title:   "Stack Transformation",
      headers: ["Layer", "Before", "After"],
      rows: [
        ["Framework",       "Lovable (AI-generated)",    "Next.js 14 App Router"],
        ["Database",        "None",                      "Supabase PostgreSQL"],
        ["Auth",            "Broken mock session",       "Supabase JWT Auth"],
        ["Hosting",         "Local only",                "Vercel (Production)"],
        ["Version Control", "None",                      "GitHub + CI/CD Pipeline"],
        ["Delivery",        "—",                         "Under 24 hours"],
      ],
    },
    timeline: {
      title: "Delivery Timeline",
      items: [
        {
          phase:  "Hour 0",
          label:  "Intake Received",
          detail: "Client submitted an AI-generated app after spending 10+ hours completely stuck in deployment loops. Codebase lacked version control, database mapping, and production configuration.",
        },
        {
          phase:  "Hour 2",
          label:  "Scope Confirmed",
          detail: "Infrastructure blueprint mapped and approved: Initialize Git version control, provision cloud database schemas, and establish a continuous hosting deployment pipeline.",
        },
        {
          phase:  "Hour 6",
          label:  "Migration Complete",
          detail: "Codebase structurally migrated to a secure GitHub repository. Cloud database provisioned with active schemas, and continuous pipeline connected.",
        },
        {
          phase:  "Hour 12",
          label:  "Live in Production",
          detail: "Application fully live and operational on a production URL. Client went from 10 hours of failure to a functioning deployment in under a day. Client Quote: \"How did you do that? I've been working on this for 10 hours.\"",
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

  pages: {
    services: {
      hero: {
        sectionLabel: "Services & Pricing",
        headline:     "Flat-Rate. Scoped Upfront. No Surprises.",
        subheadline:  "Every engagement starts with a written scope confirmation. Payment is only requested once you approve exactly what will be delivered and when.",
      },
      retainerLabel: "Monthly Retainer",
      ctaHeadline:   "Ready to get started?",
      ctaSubheadline:"Submit your app for a scope review. We return a precise written breakdown — exact deliverables, fixed cost, confirmed timeline.",
    },
    process: {
      hero: {
        sectionLabel: "Our Process",
        headline:     "Simple. Transparent. Fast.",
        subheadline:  "Four structured steps from broken AI prototype to live production infrastructure. No guesswork, no retros, no hidden fees.",
      },
      step4: {
        number: "04",
        title:  "Hardened Handoff & Validation",
        description: "Delivery is not a zip file. We hand off a fully deployed, validated production stack — live URL, repository access, and a written summary of every change made.",
        detail: [
          "Live production URL verified and tested across devices",
          "Full repository access transferred to your GitHub account",
          "Environment variable documentation for all secrets and keys",
          "Written handoff summary — every change, every decision, every configuration",
          "30-day async support window included on Core Migration and above",
        ],
      },
      audit: {
        sectionLabel: "Audit Methodology",
        headline:     "What We Check in Every Repository",
        subheadline:  "Before a single line of production work begins, we run a systematic audit across three infrastructure layers.",
        layers: [
          {
            title: "Build Container Audit",
            items: [
              "Vercel build log analysis — every error code traced to its source",
              "Next.js configuration validation (next.config.js, tsconfig.json, package.json)",
              "Dependency tree inspection for version conflicts and deprecated packages",
              "Environment variable mapping — every process.env reference verified",
            ],
          },
          {
            title: "Database & Auth Layer",
            items: [
              "Supabase schema review — table structure, relationships, and data types",
              "Row-Level Security policy audit — every policy tested against authenticated and anonymous roles",
              "JWT authentication flow validation — sign-in, sign-out, session persistence",
              "API key exposure check — service role keys never in client bundles",
            ],
          },
          {
            title: "Deployment Pipeline",
            items: [
              "GitHub repository structure — branch protection, webhook configuration",
              "Vercel project settings — root directory, build command, output directory",
              "Custom domain DNS configuration and SSL certificate verification",
              "Edge function and serverless route testing",
            ],
          },
        ],
      },
      ctaHeadline:   "Ready to start the process?",
      ctaSubheadline:"Submit your app in three minutes. Receive a written scope and fixed price within 12 hours.",
    },
    caseStudies: {
      hero: {
        sectionLabel: "Case Studies",
        headline:     "The Infrastructure Failures AI Builders Leave Behind",
        subheadline:  "Every engagement we take starts with a broken deployment. This is a documented account of the patterns we see, the conditions that create them, and what a professional resolution looks like.",
      },
      tax: {
        sectionLabel: "Failure Taxonomy",
        headline:     "Five Infrastructure Failure Patterns We Resolve on Every Engagement",
        subheadline:  "These are not edge cases. They are the predictable output of applying AI code generation tools to production infrastructure problems the tools were never designed to solve.",
        cols: { symptom: "Symptom", cause: "Root Cause", impact: "Business Impact" },
        patterns: [
          {
            title:   "Environment Variable Collapse",
            symptom: "The application builds and runs perfectly on a local machine. The moment it is pushed to a cloud deployment container, it crashes immediately. Error logs reference variables that are clearly defined in the codebase but somehow unavailable at runtime.",
            cause:   "AI builders generate code that references environment variables but never establish the boundary between local development secrets and production deployment configuration. The two environments require distinct variable scoping — a distinction no AI tool currently handles automatically.",
            impact:  "Complete deployment failure. Founders spend hours adding variables manually, in the wrong scope, to the wrong environment, without understanding why none of it works.",
          },
          {
            title:   "Router Architecture Collision",
            symptom: "Navigation works on some routes and silently fails on others. Pages load blank with no visible error. Server logs show 404s on routes that clearly exist in the codebase.",
            cause:   "Modern Next.js uses two fundamentally different routing systems — Pages Router and App Router — with incompatible conventions. AI generators frequently produce hybrid outputs that mix both patterns, creating routing conflicts that are invisible to the builder but fatal in production.",
            impact:  "Partial application functionality at best. Authentication flows, API routes, and dynamic pages are the most commonly affected. Debugging without knowing the root cause consumes days.",
          },
          {
            title:   "Database Security Misconfiguration",
            symptom: "User data is accessible to unauthenticated requests. Admin endpoints respond to public API calls. Sensitive records appear in browser network tabs without authentication.",
            cause:   "AI-generated backends frequently provision a database with zero Row-Level Security policies. The application may appear to function correctly in local testing while being completely open to arbitrary read and write operations from anyone with the project URL.",
            impact:  "A live security vulnerability. Depending on the data stored, this ranges from a compliance violation to a critical breach risk.",
          },
          {
            title:   "Authentication State Persistence Failure",
            symptom: "Users log in successfully and are immediately redirected to a login screen. Session cookies are written and discarded within the same request cycle. Protected routes are either always accessible or always blocked regardless of authentication state.",
            cause:   "AI tools frequently generate authentication scaffolding that is structurally correct but environment-specific. JWT signing keys, callback URLs, and session cookie domains all require production-specific configuration that development builds never validate.",
            impact:  "The authentication layer is the security perimeter of the entire application. A broken auth flow means every user-facing feature gated behind a login is either inaccessible or unsecured.",
          },
          {
            title:   "Build Pipeline Structural Failure",
            symptom: "The CI/CD pipeline triggers on every commit but fails at the build step. Error messages reference missing modules, type mismatches, or configuration files that exist in the repository but are not found by the build container.",
            cause:   "AI-generated projects frequently include configuration files that work in a local environment with specific global dependencies installed but fail in a clean, isolated build container where only the declared project dependencies are available.",
            impact:  "No deployments ever complete. The development loop breaks entirely — every code change must be tested locally with no production validation path.",
          },
        ],
      },
      case001: {
        id:             "Case 001 — Confidential · Lovable Build Rescue",
        title:          "Ten-Hour Deployment Deadlock. Resolved in Under 24.",
        situationLabel: "The Situation",
        situation: [
          "A non-technical founder built a complete SaaS product using Lovable — a well-known AI application builder. The interface was functional. The user flows were polished. The application had genuine value.",
          "What the AI builder did not provide — and what no AI builder currently provides — was any path to production infrastructure. No repository. No deployment configuration. No database. No environment management.",
          "After ten consecutive hours of attempting self-directed deployment, the founder had made no measurable progress. Every attempt produced a different error. Each error felt like it was the final obstacle. None of them were.",
        ],
        brokenLabel: "What Was Actually Broken",
        brokenIntro: "The audit identified four distinct infrastructure failures, each one independent, each one sufficient to prevent deployment on its own.",
        brokenItems: [
          "Environment variable scope mismatch between local and production environments",
          "Routing architecture collision between two incompatible Next.js patterns",
          "Database access credentials incorrectly placed in client-accessible code",
          "Deployment container configuration missing required output specification",
        ],
        quoteText:        "How did you do that so fast? I've been hitting a wall with this setup for over 10 hours straight.",
        quoteAttribution: "Client, Anonymized · Lovable Build Rescue · June 2026",
        takeawayLabel:    "The Pattern",
        takeawayHeadline: "The client was not inexperienced. The problem was not solvable through more effort or better prompting.",
        takeawayBody:     "The failures were structural — built into the output of the AI tool itself. No amount of documentation reading, forum searching, or trial-and-error would have resolved all four simultaneously without a systematic infrastructure audit. This is the gap between AI-generated code and production-ready software. It is not a skill gap. It is an infrastructure gap. And it is resolvable.",
      },
      ctaHeadline:   "Recognize any of these patterns?",
      ctaSubheadline:"Submit your app in three minutes. We audit your codebase and return a written fix plan with a fixed price and confirmed delivery window.",
    },
  },

  footer: {
    tagline:
      "Specialized in migrating AI-generated and no-code applications into production-grade infrastructure on Vercel and Supabase.",
    services: {
      title: "Services",
      items: [
        "Infrastructure Deployment Fix — $250",
        "End-to-End Core Migration — $450",
        "Enterprise App Stabilization — $750",
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
        price:   "$250",
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
        price:   "$450",
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
        price:   "$750",
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
      {
        name:    "Supervisión de Producción y Guardia de Arquitectura",
        price:   "$99",
        unit:    "/ mes",
        tagline: "Vigilancia continua de infraestructura — sin depuración diaria.",
        popular: false,
        features: [
          "Auditoría semanal de repositorio y pipeline (1 revisión fija por semana — no monitoreo en tiempo real)",
          "Verificación de dependencias y esquemas generados por IA",
          "Identificación preventiva de conflictos de despliegue",
          "Monitoreo de respaldo continuo de 30 días (Supabase y Vercel)",
          "Soporte directo por email/ticket para asesoramiento arquitectónico (SLA de 48 horas)",
        ],
        cta: "Iniciar Contrato",
      },
      {
        name:    "Co-Arquitectura a Medida y Blueprint de Sistema",
        price:   "$2,500+",
        unit:    "tarifa fija / sprint",
        tagline: "Diseño de infraestructura personalizado para equipos que escalan.",
        popular: false,
        features: [
          "Mapeo y consultoría estratégica de infraestructura dedicada 1-a-1",
          "Validación completa de esquema relacional y planificación de Supabase personalizada",
          "Arquitectura multi-tenant segura y diseño de control de acceso",
          "Marco de Responsabilidad Mutua Firmado (Requiere aprobación legal completa)",
          "Incluye opción para APIs de cumplimiento de seguridad de terceros integradas",
        ],
        cta: "Solicitar Consultoría Blueprint",
      },
    ],
    disclaimer:
      "Todo el trabajo es delimitado y confirmado antes de solicitar el pago. Sin sorpresas.",
  },

  caseStudy: {
    sectionLabel:  "Caso de Estudio",
    headline:      "Trabajo Real. Resultados Reales.",
    subheadline:   "De un prototipo de IA sin desplegar a un stack de producción verificado en menos de 24 horas.",
    clientLabel:   "Cliente A — Confidencial (Rescate de Build en Lovable)",
    deliveryBadge: "Entregado en < 24 Horas",
    stackTable: {
      title:   "Transformación del Stack",
      headers: ["Capa", "Antes", "Después"],
      rows: [
        ["Framework",          "Lovable (generado por IA)",   "Next.js 14 App Router"],
        ["Base de datos",      "Ninguna",                     "Supabase PostgreSQL"],
        ["Autenticación",      "Sesión simulada rota",        "JWT de Supabase"],
        ["Alojamiento",        "Solo local",                  "Vercel (Producción)"],
        ["Control de versiones","Ninguno",                    "GitHub + Pipeline CI/CD"],
        ["Entrega",            "—",                           "Menos de 24 horas"],
      ],
    },
    timeline: {
      title: "Cronograma de Entrega",
      items: [
        {
          phase:  "Hora 0",
          label:  "Solicitud Recibida",
          detail: "El cliente envió una aplicación generada por IA tras pasar más de 10 horas completamente atascado en bucles de despliegue. El código carecía de control de versiones, mapeo de base de datos y configuración de producción.",
        },
        {
          phase:  "Hora 2",
          label:  "Alcance Confirmado",
          detail: "Plano de infraestructura mapeado y aprobado: inicializar control de versiones con Git, aprovisionar esquemas de base de datos en la nube y establecer un pipeline de despliegue continuo.",
        },
        {
          phase:  "Hora 6",
          label:  "Migración Completada",
          detail: "Código migrado estructuralmente a un repositorio seguro en GitHub. Base de datos en la nube aprovisionada con esquemas activos y pipeline continuo conectado.",
        },
        {
          phase:  "Hora 12",
          label:  "En Producción",
          detail: "Aplicación completamente activa y operativa en una URL de producción. El cliente pasó de 10 horas de fallos a un despliegue funcional en menos de un día. Cita del cliente: \"¿Cómo lo hiciste? Llevo 10 horas trabajando en esto.\"",
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

  pages: {
    services: {
      hero: {
        sectionLabel: "Servicios y Precios",
        headline:     "Tarifa Fija. Alcance Confirmado. Sin Sorpresas.",
        subheadline:  "Cada compromiso comienza con una confirmación de alcance por escrito. El pago solo se solicita una vez que apruebe exactamente lo que se entregará y cuándo.",
      },
      retainerLabel: "Retenedor Mensual",
      ctaHeadline:   "¿Listo para comenzar?",
      ctaSubheadline:"Envíe su aplicación para una revisión de alcance. Devolvemos un desglose escrito preciso — entregables exactos, costo fijo, cronograma confirmado.",
    },
    process: {
      hero: {
        sectionLabel: "Nuestro Proceso",
        headline:     "Simple. Transparente. Rápido.",
        subheadline:  "Cuatro pasos estructurados desde el prototipo de IA hasta la infraestructura de producción en vivo. Sin suposiciones, sin retrocesos, sin cargos ocultos.",
      },
      step4: {
        number: "04",
        title:  "Entrega Reforzada y Validación",
        description: "La entrega no es un archivo comprimido. Entregamos un stack de producción completamente desplegado y validado — URL en vivo, acceso al repositorio y un resumen escrito de cada cambio realizado.",
        detail: [
          "URL de producción en vivo verificada y probada en múltiples dispositivos",
          "Acceso completo al repositorio transferido a su cuenta de GitHub",
          "Documentación de variables de entorno para todos los secretos y claves",
          "Resumen de entrega escrito — cada cambio, cada decisión, cada configuración",
          "Ventana de soporte asíncrono de 30 días incluida en Migración Integral y superiores",
        ],
      },
      audit: {
        sectionLabel: "Metodología de Auditoría",
        headline:     "Qué Verificamos en Cada Repositorio",
        subheadline:  "Antes de que comience una sola línea de trabajo de producción, ejecutamos una auditoría sistemática en tres capas de infraestructura.",
        layers: [
          {
            title: "Auditoría del Contenedor de Build",
            items: [
              "Análisis del registro de build de Vercel — cada código de error rastreado hasta su fuente",
              "Validación de configuración de Next.js (next.config.js, tsconfig.json, package.json)",
              "Inspección del árbol de dependencias para conflictos de versión y paquetes obsoletos",
              "Mapeo de variables de entorno — cada referencia process.env verificada",
            ],
          },
          {
            title: "Capa de Base de Datos y Autenticación",
            items: [
              "Revisión del esquema de Supabase — estructura de tablas, relaciones y tipos de datos",
              "Auditoría de políticas de Row-Level Security — cada política probada contra roles autenticados y anónimos",
              "Validación del flujo de autenticación JWT — inicio de sesión, cierre de sesión, persistencia de sesión",
              "Verificación de exposición de claves API — las claves de rol de servicio nunca en paquetes del cliente",
            ],
          },
          {
            title: "Pipeline de Despliegue",
            items: [
              "Estructura del repositorio de GitHub — protección de ramas, configuración de webhooks",
              "Configuración del proyecto en Vercel — directorio raíz, comando de build, directorio de salida",
              "Configuración DNS de dominio personalizado y verificación de certificado SSL",
              "Prueba de funciones edge y rutas serverless",
            ],
          },
        ],
      },
      ctaHeadline:   "¿Listo para iniciar el proceso?",
      ctaSubheadline:"Envíe su aplicación en tres minutos. Reciba un alcance escrito y precio fijo en 12 horas.",
    },
    caseStudies: {
      hero: {
        sectionLabel: "Casos de Estudio",
        headline:     "Los Fallos de Infraestructura que los Constructores de IA Dejan Atrás",
        subheadline:  "Cada compromiso que tomamos comienza con un despliegue fallido. Este es un relato documentado de los patrones que vemos, las condiciones que los crean y cómo se ve una resolución profesional.",
      },
      tax: {
        sectionLabel: "Taxonomía de Fallos",
        headline:     "Cinco Patrones de Fallo de Infraestructura que Resolvemos en Cada Compromiso",
        subheadline:  "Estos no son casos extremos. Son el resultado predecible de aplicar herramientas de generación de código IA a problemas de infraestructura de producción para los que las herramientas nunca fueron diseñadas.",
        cols: { symptom: "Síntoma", cause: "Causa Raíz", impact: "Impacto en el Negocio" },
        patterns: [
          {
            title:   "Colapso de Variables de Entorno",
            symptom: "La aplicación compila y funciona perfectamente en una máquina local. En el momento en que se envía a un contenedor de despliegue en la nube, falla inmediatamente. Los registros de errores hacen referencia a variables claramente definidas en el código pero de alguna manera no disponibles en tiempo de ejecución.",
            cause:   "Los constructores de IA generan código que hace referencia a variables de entorno pero nunca establecen el límite entre los secretos del desarrollo local y la configuración de despliegue de producción.",
            impact:  "Fallo total de despliegue. Los fundadores pasan horas agregando variables manualmente, en el alcance incorrecto, al entorno incorrecto, sin entender por qué nada funciona.",
          },
          {
            title:   "Colisión de Arquitectura de Enrutador",
            symptom: "La navegación funciona en algunas rutas y falla silenciosamente en otras. Las páginas se cargan en blanco sin error visible. Los registros del servidor muestran errores 404 en rutas que claramente existen en el código.",
            cause:   "Next.js moderno usa dos sistemas de enrutamiento fundamentalmente diferentes — Pages Router y App Router — con convenciones incompatibles. Los generadores de IA frecuentemente producen resultados híbridos que mezclan ambos patrones.",
            impact:  "Funcionalidad parcial de la aplicación en el mejor caso. Los flujos de autenticación, rutas de API y páginas dinámicas son los más comúnmente afectados.",
          },
          {
            title:   "Configuración Incorrecta de Seguridad de Base de Datos",
            symptom: "Los datos del usuario son accesibles a solicitudes no autenticadas. Los endpoints de administrador responden a llamadas de API públicas. Los registros sensibles aparecen en las pestañas de red del navegador sin autenticación.",
            cause:   "Los backends generados por IA frecuentemente aprovisionan una base de datos con cero políticas de Row-Level Security. La aplicación puede parecer funcionar correctamente en pruebas locales mientras está completamente abierta a operaciones arbitrarias de lectura y escritura.",
            impact:  "Una vulnerabilidad de seguridad en vivo. Dependiendo de los datos almacenados, esto varía desde una violación de cumplimiento hasta un riesgo crítico de brecha.",
          },
          {
            title:   "Fallo en la Persistencia del Estado de Autenticación",
            symptom: "Los usuarios inician sesión exitosamente y son inmediatamente redirigidos a la pantalla de inicio de sesión. Las cookies de sesión se escriben y descartan dentro del mismo ciclo de solicitud.",
            cause:   "Las herramientas de IA frecuentemente generan andamiaje de autenticación que es estructuralmente correcto pero específico del entorno. Las claves de firma JWT, las URL de devolución y los dominios de cookies de sesión requieren configuración específica de producción.",
            impact:  "La capa de autenticación es el perímetro de seguridad de toda la aplicación. Un flujo de autenticación roto significa que cada función orientada al usuario protegida por un inicio de sesión es inaccesible o no está asegurada.",
          },
          {
            title:   "Fallo Estructural del Pipeline de Build",
            symptom: "El pipeline CI/CD se activa en cada commit pero falla en el paso de build. Los mensajes de error hacen referencia a módulos faltantes, incompatibilidades de tipo o archivos de configuración que existen en el repositorio pero no son encontrados por el contenedor de build.",
            cause:   "Los proyectos generados por IA frecuentemente incluyen archivos de configuración que funcionan en un entorno local con dependencias globales específicas instaladas pero fallan en un contenedor de build limpio y aislado.",
            impact:  "Ningún despliegue se completa jamás. El ciclo de desarrollo se rompe por completo — cada cambio de código debe probarse localmente sin ruta de validación de producción.",
          },
        ],
      },
      case001: {
        id:             "Caso 001 — Confidencial · Rescate de Build en Lovable",
        title:          "Bloqueo de Despliegue de Diez Horas. Resuelto en Menos de 24.",
        situationLabel: "La Situación",
        situation: [
          "Una fundadora no técnica construyó un producto SaaS completo usando Lovable — un conocido constructor de aplicaciones de IA. La interfaz era funcional. Los flujos de usuario estaban pulidos. La aplicación tenía valor genuino.",
          "Lo que el constructor de IA no proporcionó — y lo que ningún constructor de IA proporciona actualmente — fue ningún camino hacia la infraestructura de producción. Sin repositorio. Sin configuración de despliegue. Sin base de datos. Sin gestión de entorno.",
          "Después de diez horas consecutivas de intentar el despliegue autodidacta, la fundadora no había avanzado de manera mensurable. Cada intento producía un error diferente. Cada error parecía ser el obstáculo final. Ninguno lo era.",
        ],
        brokenLabel: "Qué Estaba Realmente Roto",
        brokenIntro: "La auditoría identificó cuatro fallos de infraestructura distintos, cada uno independiente, cada uno suficiente para prevenir el despliegue por sí solo.",
        brokenItems: [
          "Discrepancia de alcance de variables de entorno entre entornos local y de producción",
          "Colisión de arquitectura de enrutamiento entre dos patrones de Next.js incompatibles",
          "Credenciales de acceso a la base de datos incorrectamente colocadas en código accesible al cliente",
          "Configuración del contenedor de despliegue sin la especificación de salida requerida",
        ],
        quoteText:        "¿Cómo lo hiciste tan rápido? He estado golpeando una pared con esta configuración durante más de 10 horas.",
        quoteAttribution: "Cliente, Anonimizado · Rescate de Build en Lovable · Junio 2026",
        takeawayLabel:    "El Patrón",
        takeawayHeadline: "El cliente no era inexperto. El problema no era solucionable con más esfuerzo o mejores indicaciones.",
        takeawayBody:     "Los fallos fueron estructurales — incorporados en el resultado de la herramienta de IA misma. Ninguna cantidad de lectura de documentación, búsqueda en foros o ensayo y error habría resuelto los cuatro simultáneamente sin una auditoría de infraestructura sistemática. Esta es la brecha entre el código generado por IA y el software listo para producción. No es una brecha de habilidades. Es una brecha de infraestructura. Y es resoluble.",
      },
      ctaHeadline:   "¿Reconoce alguno de estos patrones?",
      ctaSubheadline:"Envíe su aplicación en tres minutos. Auditamos su código y devolvemos un plan de corrección escrito con precio fijo y ventana de entrega confirmada.",
    },
  },

  footer: {
    tagline:
      "Especializados en migrar aplicaciones generadas por IA y sin código hacia infraestructura de nivel empresarial en Vercel y Supabase.",
    services: {
      title: "Servicios",
      items: [
        "Corrección de Despliegue — $250",
        "Migración Integral — $450",
        "Estabilización Empresarial — $750",
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
        price:   "R$ 2.500",
        unit:    "valor fixo",
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
        cta: "Solicitar Análise",
      },
      {
        name:    "Migração Completa de Ponta a Ponta",
        price:   "R$ 7.500",
        unit:    "valor fixo",
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
        cta: "Solicitar Análise",
      },
      {
        name:    "Estabilização Empresarial de Aplicativo",
        price:   "R$ 17.500+",
        unit:    "valor fixo",
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
        cta: "Solicitar Análise",
      },
      {
        name:    "Supervisão de Produção e Guarda de Arquitetura",
        price:   "R$ 499",
        unit:    "/ mês",
        tagline: "Vigilância contínua de infraestrutura — sem depuração diária.",
        popular: false,
        features: [
          "Auditoria semanal de repositório e pipeline (1 verificação fixa por semana — sem monitoramento em tempo real)",
          "Verificação de dependências e esquemas gerados por IA",
          "Identificação preventiva de conflitos de implantação",
          "Monitoramento de backup contínuo de 30 dias (Supabase e Vercel)",
          "Suporte direto por email/ticket para consultoria arquitetônica (SLA de 48 horas)",
        ],
        cta: "Iniciar Contrato",
      },
      {
        name:    "Co-Arquitetura Personalizada e Blueprint de Sistema",
        price:   "R$ 12.500+",
        unit:    "taxa fixa / sprint",
        tagline: "Design de infraestrutura personalizado para equipes que escalam.",
        popular: false,
        features: [
          "Mapeamento e consultoria estratégica de infraestrutura dedicada 1-a-1",
          "Validação completa de esquema relacional e planejamento personalizado do Supabase",
          "Arquitetura multi-tenant segura e layout de controle de acesso",
          "Framework de Responsabilidade Mútua Assinado (Aprovação legal completa necessária)",
          "Inclui opção para APIs de conformidade de segurança de terceiros integradas",
        ],
        cta: "Solicitar Consultoria Blueprint",
      },
    ],
    disclaimer:
      "Todo o trabalho é delimitado e confirmado antes que o pagamento seja solicitado. Sem surpresas.",
  },

  caseStudy: {
    sectionLabel:  "Caso de Estudo",
    headline:      "Trabalho Real. Resultados Reais.",
    subheadline:   "De um protótipo de IA não implantado a uma stack de produção verificada em menos de 24 horas.",
    clientLabel:   "Cliente A — Confidencial (Resgate de Build no Lovable)",
    deliveryBadge: "Entregue em < 24 Horas",
    stackTable: {
      title:   "Transformação da Stack",
      headers: ["Camada", "Antes", "Depois"],
      rows: [
        ["Framework",          "Lovable (gerado por IA)",      "Next.js 14 App Router"],
        ["Banco de dados",     "Nenhum",                       "Supabase PostgreSQL"],
        ["Autenticação",       "Sessão simulada quebrada",     "JWT do Supabase"],
        ["Hospedagem",         "Somente local",                "Vercel (Produção)"],
        ["Controle de versão", "Nenhum",                       "GitHub + Pipeline CI/CD"],
        ["Entrega",            "—",                            "Menos de 24 horas"],
      ],
    },
    timeline: {
      title: "Cronograma de Entrega",
      items: [
        {
          phase:  "Hora 0",
          label:  "Solicitação Recebida",
          detail: "O cliente enviou um aplicativo gerado por IA após passar mais de 10 horas completamente preso em loops de implantação. O código não tinha controle de versão, mapeamento de banco de dados nem configuração de produção.",
        },
        {
          phase:  "Hora 2",
          label:  "Escopo Confirmado",
          detail: "Plano de infraestrutura mapeado e aprovado: inicializar controle de versão com Git, provisionar esquemas de banco de dados na nuvem e estabelecer um pipeline de implantação contínua.",
        },
        {
          phase:  "Hora 6",
          label:  "Migração Concluída",
          detail: "Código migrado estruturalmente para um repositório seguro no GitHub. Banco de dados na nuvem provisionado com esquemas ativos e pipeline contínuo conectado.",
        },
        {
          phase:  "Hora 12",
          label:  "Em Produção",
          detail: "Aplicativo totalmente ativo e operacional em uma URL de produção. O cliente passou de 10 horas de falhas para uma implantação funcional em menos de um dia. Citação do cliente: \"Como você fez isso? Estou trabalhando nisso há 10 horas.\"",
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

  pages: {
    services: {
      hero: {
        sectionLabel: "Serviços e Preços",
        headline:     "Taxa Fixa. Escopo Confirmado. Sem Surpresas.",
        subheadline:  "Cada compromisso começa com uma confirmação de escopo por escrito. O pagamento só é solicitado depois que você aprovar exatamente o que será entregue e quando.",
      },
      retainerLabel: "Retenção Mensal",
      ctaHeadline:   "Pronto para começar?",
      ctaSubheadline:"Envie seu aplicativo para uma revisão de escopo. Retornamos um detalhamento escrito preciso — entregáveis exatos, custo fixo, cronograma confirmado.",
    },
    process: {
      hero: {
        sectionLabel: "Nosso Processo",
        headline:     "Simples. Transparente. Rápido.",
        subheadline:  "Quatro etapas estruturadas desde o protótipo de IA até a infraestrutura de produção ao vivo. Sem suposições, sem retrocessos, sem taxas ocultas.",
      },
      step4: {
        number: "04",
        title:  "Entrega Reforçada e Validação",
        description: "A entrega não é um arquivo compactado. Entregamos um stack de produção totalmente implantado e validado — URL ao vivo, acesso ao repositório e um resumo escrito de cada alteração feita.",
        detail: [
          "URL de produção ao vivo verificada e testada em vários dispositivos",
          "Acesso completo ao repositório transferido para sua conta do GitHub",
          "Documentação de variáveis de ambiente para todos os segredos e chaves",
          "Resumo de entrega escrito — cada alteração, cada decisão, cada configuração",
          "Janela de suporte assíncrono de 30 dias incluída na Migração Principal e acima",
        ],
      },
      audit: {
        sectionLabel: "Metodologia de Auditoria",
        headline:     "O Que Verificamos em Cada Repositório",
        subheadline:  "Antes de uma única linha de trabalho de produção começar, executamos uma auditoria sistemática em três camadas de infraestrutura.",
        layers: [
          {
            title: "Auditoria do Container de Build",
            items: [
              "Análise do log de build do Vercel — cada código de erro rastreado até sua fonte",
              "Validação da configuração do Next.js (next.config.js, tsconfig.json, package.json)",
              "Inspeção da árvore de dependências para conflitos de versão e pacotes obsoletos",
              "Mapeamento de variáveis de ambiente — cada referência process.env verificada",
            ],
          },
          {
            title: "Camada de Banco de Dados e Autenticação",
            items: [
              "Revisão do esquema do Supabase — estrutura de tabelas, relacionamentos e tipos de dados",
              "Auditoria de políticas de Row-Level Security — cada política testada contra funções autenticadas e anônimas",
              "Validação do fluxo de autenticação JWT — login, logout, persistência de sessão",
              "Verificação de exposição de chaves de API — chaves de função de serviço nunca em bundles do cliente",
            ],
          },
          {
            title: "Pipeline de Implantação",
            items: [
              "Estrutura do repositório GitHub — proteção de branch, configuração de webhook",
              "Configurações do projeto Vercel — diretório raiz, comando de build, diretório de saída",
              "Configuração de DNS de domínio personalizado e verificação de certificado SSL",
              "Teste de funções edge e rotas serverless",
            ],
          },
        ],
      },
      ctaHeadline:   "Pronto para iniciar o processo?",
      ctaSubheadline:"Envie seu aplicativo em três minutos. Receba um escopo escrito e preço fixo em 12 horas.",
    },
    caseStudies: {
      hero: {
        sectionLabel: "Estudos de Caso",
        headline:     "As Falhas de Infraestrutura que os Construtores de IA Deixam Para Trás",
        subheadline:  "Cada compromisso que assumimos começa com uma implantação quebrada. Este é um relato documentado dos padrões que vemos, as condições que os criam e como é uma resolução profissional.",
      },
      tax: {
        sectionLabel: "Taxonomia de Falhas",
        headline:     "Cinco Padrões de Falha de Infraestrutura que Resolvemos em Cada Compromisso",
        subheadline:  "Estes não são casos extremos. São o resultado previsível de aplicar ferramentas de geração de código IA a problemas de infraestrutura de produção para os quais as ferramentas nunca foram projetadas.",
        cols: { symptom: "Sintoma", cause: "Causa Raiz", impact: "Impacto no Negócio" },
        patterns: [
          {
            title:   "Colapso de Variáveis de Ambiente",
            symptom: "O aplicativo compila e executa perfeitamente em uma máquina local. No momento em que é enviado para um container de implantação na nuvem, ele falha imediatamente. Os logs de erro fazem referência a variáveis claramente definidas no código, mas de alguma forma indisponíveis em tempo de execução.",
            cause:   "Os construtores de IA geram código que faz referência a variáveis de ambiente, mas nunca estabelecem o limite entre os segredos de desenvolvimento local e a configuração de implantação de produção.",
            impact:  "Falha total de implantação. Os fundadores passam horas adicionando variáveis manualmente, no escopo errado, no ambiente errado, sem entender por que nada funciona.",
          },
          {
            title:   "Colisão de Arquitetura de Roteador",
            symptom: "A navegação funciona em algumas rotas e falha silenciosamente em outras. As páginas carregam em branco sem erro visível. Os logs do servidor mostram erros 404 em rotas que claramente existem no código.",
            cause:   "O Next.js moderno usa dois sistemas de roteamento fundamentalmente diferentes — Pages Router e App Router — com convenções incompatíveis. Os geradores de IA frequentemente produzem saídas híbridas que misturam ambos os padrões.",
            impact:  "Funcionalidade parcial do aplicativo, no melhor caso. Fluxos de autenticação, rotas de API e páginas dinâmicas são as mais comumente afetadas.",
          },
          {
            title:   "Configuração Incorreta de Segurança do Banco de Dados",
            symptom: "Os dados do usuário são acessíveis a solicitações não autenticadas. Os endpoints de administrador respondem a chamadas de API públicas. Registros sensíveis aparecem nas abas de rede do navegador sem autenticação.",
            cause:   "Os backends gerados por IA frequentemente provisionam um banco de dados com zero políticas de Row-Level Security. O aplicativo pode parecer funcionar corretamente em testes locais enquanto está completamente aberto a operações arbitrárias de leitura e escrita.",
            impact:  "Uma vulnerabilidade de segurança ao vivo. Dependendo dos dados armazenados, isso varia de uma violação de conformidade a um risco crítico de brecha.",
          },
          {
            title:   "Falha na Persistência do Estado de Autenticação",
            symptom: "Os usuários fazem login com sucesso e são imediatamente redirecionados para a tela de login. Os cookies de sessão são escritos e descartados dentro do mesmo ciclo de solicitação.",
            cause:   "As ferramentas de IA frequentemente geram andaimes de autenticação que são estruturalmente corretos, mas específicos do ambiente. Chaves de assinatura JWT, URLs de callback e domínios de cookies de sessão requerem configuração específica de produção.",
            impact:  "A camada de autenticação é o perímetro de segurança de todo o aplicativo. Um fluxo de autenticação quebrado significa que cada recurso voltado ao usuário protegido por um login é inacessível ou não está protegido.",
          },
          {
            title:   "Falha Estrutural do Pipeline de Build",
            symptom: "O pipeline CI/CD é acionado em cada commit, mas falha na etapa de build. As mensagens de erro fazem referência a módulos ausentes, incompatibilidades de tipo ou arquivos de configuração que existem no repositório, mas não são encontrados pelo container de build.",
            cause:   "Os projetos gerados por IA frequentemente incluem arquivos de configuração que funcionam em um ambiente local com dependências globais específicas instaladas, mas falham em um container de build limpo e isolado.",
            impact:  "Nenhuma implantação é concluída. O ciclo de desenvolvimento é completamente interrompido — cada alteração de código deve ser testada localmente sem nenhum caminho de validação de produção.",
          },
        ],
      },
      case001: {
        id:             "Caso 001 — Confidencial · Resgate de Build no Lovable",
        title:          "Bloqueio de Implantação de Dez Horas. Resolvido em Menos de 24.",
        situationLabel: "A Situação",
        situation: [
          "Uma fundadora não técnica construiu um produto SaaS completo usando o Lovable — um conhecido construtor de aplicativos de IA. A interface era funcional. Os fluxos de usuário eram polidos. O aplicativo tinha valor genuíno.",
          "O que o construtor de IA não forneceu — e o que nenhum construtor de IA atualmente fornece — foi qualquer caminho para a infraestrutura de produção. Sem repositório. Sem configuração de implantação. Sem banco de dados. Sem gerenciamento de ambiente.",
          "Após dez horas consecutivas tentando a implantação autodidata, a fundadora não tinha feito nenhum progresso mensurável. Cada tentativa produzia um erro diferente. Cada erro parecia ser o obstáculo final. Nenhum deles era.",
        ],
        brokenLabel: "O Que Estava Realmente Quebrado",
        brokenIntro: "A auditoria identificou quatro falhas de infraestrutura distintas, cada uma independente, cada uma suficiente para impedir a implantação por conta própria.",
        brokenItems: [
          "Incompatibilidade de escopo de variáveis de ambiente entre ambientes local e de produção",
          "Colisão de arquitetura de roteamento entre dois padrões incompatíveis do Next.js",
          "Credenciais de acesso ao banco de dados incorretamente colocadas em código acessível ao cliente",
          "Configuração do container de implantação sem a especificação de saída necessária",
        ],
        quoteText:        "Como você fez isso tão rápido? Estou batendo cabeça com essa configuração há mais de 10 horas.",
        quoteAttribution: "Cliente, Anonimizado · Resgate de Build no Lovable · Junho 2026",
        takeawayLabel:    "O Padrão",
        takeawayHeadline: "O cliente não era inexperiente. O problema não era solucionável com mais esforço ou melhores instruções.",
        takeawayBody:     "As falhas foram estruturais — incorporadas na saída da própria ferramenta de IA. Nenhuma quantidade de leitura de documentação, pesquisa em fóruns ou tentativa e erro teria resolvido todas as quatro simultaneamente sem uma auditoria sistemática de infraestrutura. Esta é a lacuna entre o código gerado por IA e o software pronto para produção. Não é uma lacuna de habilidades. É uma lacuna de infraestrutura. E é resolúvel.",
      },
      ctaHeadline:   "Reconhece algum desses padrões?",
      ctaSubheadline:"Envie seu aplicativo em três minutos. Auditamos seu código e retornamos um plano de correção escrito com preço fixo e janela de entrega confirmada.",
    },
  },

  footer: {
    tagline:
      "Especializados em migrar aplicativos gerados por IA e sem código para infraestrutura de nível empresarial no Vercel e Supabase.",
    services: {
      title: "Serviços",
      items: [
        "Correção de Implantação — R$ 2.500",
        "Migração Completa — R$ 7.500",
        "Estabilização Empresarial — R$ 17.500+",
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
