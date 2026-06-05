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

  blog: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    readArticle: string;
    backToBlog: string;
    ctaHeadline: string;
    ctaSubheadline: string;
    ctaButton: string;
    posts: Array<{
      slug: string;
      date: string;
      tag: string;
      title: string;
      excerpt: string;
      body: string[];
    }>;
  };

  legal: {
    label: string;
    effectiveDate: string;
    terms: {
      title: string;
      sections: Array<{ heading: string; paras: string[]; items?: string[] }>;
      contactNote: string;
    };
    privacy: {
      title: string;
      subtitle: string;
      dataTable: { cols: [string, string, string]; rows: Array<[string, string, string]> };
      sections: Array<{
        heading: string;
        paras: string[];
        items?: string[];
        cookieBox?: { title: string; body: string };
      }>;
      contactNote: string;
    };
    refunds: {
      title: string;
      alert: string;
      sections: Array<{ heading: string; paras: string[]; items?: string[] }>;
      relatedLabel: string;
      contactNote: string;
    };
    footer: { home: string; blog: string; terms: string; privacy: string; copyright: string };
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

  blog: {
    sectionLabel: "Engineering Journal",
    headline:     "Production Infrastructure Insights",
    subheadline:  "Technical writeups on migrating AI-generated applications to hardened production infrastructure. Real deployments, real failures, real fixes.",
    readArticle:  "Read article",
    backToBlog:   "← Back to Blog",
    ctaHeadline:   "Stop debugging. Start deploying.",
    ctaSubheadline:"Submit your repository in three minutes. Receive a written scope and fixed price within 12 hours.",
    ctaButton:     "Submit Your App for Review →",
    posts: [
      {
        slug:    "why-ai-builders-fail-at-deployment",
        date:    "May 28, 2026",
        tag:     "Infrastructure",
        title:   "Why AI Builders Fail at Deployment (And What Actually Fixes It)",
        excerpt: "Lovable, Bolt, and v0 generate impressive frontend code. But they generate zero production infrastructure. Here is the exact gap between a local preview and a live, hardened deployment — and why closing it requires engineering judgment, not more prompts.",
        body: [
          "Every AI builder we have worked with produces the same class of output: a visually complete, locally runnable application with no production infrastructure attached. The code compiles. The dev server runs. The UI looks finished. Then the founder tries to deploy it and everything stops.",
          "The gap is not a bug in the AI tool. It is a fundamental scope boundary. AI builders are trained to produce interface code — components, routes, styles, and basic logic. They are not trained to produce the surrounding infrastructure that a live production application requires. That infrastructure is a separate engineering discipline entirely.",
          "Here is what is typically missing when a Lovable, Bolt, or v0 export arrives for a production migration: a properly structured GitHub repository with branch protection, a configured deployment pipeline connecting the repository to a hosting provider, correctly scoped environment variables that work in both local and production contexts, a provisioned external database with real schemas and access control policies, and an authentication system that persists sessions correctly across server and client boundaries.",
          "The common failure pattern is that founders attempt to close this gap themselves using the same AI tools that produced the code. They prompt their way through Vercel deployment errors, ask for environment variable help, and try to get the AI to write database provisioning scripts. This generates more code — more configuration fragments, more partial solutions — that layer on top of the original structural problem without resolving it.",
          "The resolution requires an infrastructure audit, not more generation. Every repository we take on starts with a systematic read-through: every configuration file, every environment reference, every routing pattern, every database call. The audit identifies the specific failures. The migration resolves them in a single structured pass. The result is a production deployment that actually runs — not a prototype that looks like one.",
        ],
      },
      {
        slug:    "supabase-rls-the-silent-killer",
        date:    "May 22, 2026",
        tag:     "Database Security",
        title:   "Supabase RLS: The Silent Killer in AI-Generated Backends",
        excerpt: "Row-Level Security is the single most important layer in a Supabase deployment. AI tools almost never configure it correctly. This is what a broken RLS policy looks like in production, and how we audit and patch it before your data is exposed.",
        body: [
          "Row-Level Security is Supabase's mechanism for enforcing data access control at the database level. It determines which rows a given user can read, write, update, or delete. When configured correctly, it is a powerful and elegant security layer. When configured incorrectly — or not configured at all — it is one of the most dangerous vulnerabilities a production application can have.",
          "AI-generated Supabase backends almost universally ship with RLS disabled or misconfigured. The reason is straightforward: enabling RLS and writing correct policies requires understanding the application's authentication model, user roles, and data ownership patterns. That understanding requires reading the whole system. AI tools generate components in isolation. They do not reason about the whole system.",
          "The most common failure mode we encounter is a database with RLS enabled but no INSERT policy on a table that the application writes to. The app crashes on any form submission. The developer disables RLS entirely to make it work. The application now runs — and every row in every table is readable and writable by any anonymous request.",
          "The second most common failure is an overly permissive SELECT policy. A policy written as `using (true)` allows any authenticated user to read all rows regardless of ownership. In a multi-user application, this means every user can read every other user's data. The application appears functional. The data exposure is invisible until someone looks.",
          "Correct RLS policy design starts with a clear ownership model: every row belongs to a user, and users can only access their own rows unless explicitly granted access to others. The service role key — used only on the server side — bypasses RLS entirely, which is correct for administrative operations. The anon key — which must never appear in client-side code — maps to the anonymous role and should have minimal permissions. Every policy we write is tested against both authenticated and unauthenticated requests before handoff.",
        ],
      },
      {
        slug:    "vercel-env-vars-the-right-way",
        date:    "May 15, 2026",
        tag:     "Deployment",
        title:   "Vercel Environment Variables: The Right Way to Structure a Production Secret",
        excerpt: "NEXT_PUBLIC_ prefixes, service-role keys leaking into client bundles, and missing variable declarations at build time. These are the three most common environment variable failures in AI-generated Next.js apps — and every one of them is preventable.",
        body: [
          "Environment variables are the single most common source of production deployment failures in AI-generated Next.js applications. The failures fall into three distinct categories, each with a different root cause and a different resolution.",
          "The first category is prefix confusion. Next.js distinguishes between server-side variables and client-side variables using the NEXT_PUBLIC_ prefix. Variables without this prefix are available only in server-side code — API routes, server components, middleware. Variables with this prefix are embedded into the client-side JavaScript bundle and accessible in the browser. AI tools frequently generate code that uses NEXT_PUBLIC_ on variables that should remain server-side — database credentials, service role keys, API secrets — exposing them to every visitor who inspects the page source.",
          "The second category is build-time unavailability. Vercel's build container does not inherit variables from your local machine. Every variable your application references must be explicitly declared in the Vercel project settings. AI tools generate code that works locally — where the developer has a .env.local file — but fails immediately in the build container where that file does not exist. The error appears as a build failure or a runtime crash on the first request.",
          "The third category is scope misconfiguration. Vercel allows variables to be scoped to Production, Preview, and Development environments independently. AI-generated deployment guides frequently instruct developers to add variables only to Production, causing Preview branch deployments to fail. Alternatively, they instruct adding variables to all environments, which can cause development-environment credentials to appear in production builds.",
          "The correct structure: server-side secrets (database service role keys, third-party API keys, JWT signing secrets) are declared without the NEXT_PUBLIC_ prefix, scoped only to the environments where they are needed. Client-side configuration (public API endpoints, feature flags, analytics IDs) uses the NEXT_PUBLIC_ prefix and is treated as public information. Every variable is documented in a .env.example file committed to the repository so the requirement is visible to any future developer.",
        ],
      },
      {
        slug:    "next-js-app-router-migration-guide",
        date:    "May 8, 2026",
        tag:     "Architecture",
        title:   "Migrating an AI Export to Next.js 14 App Router: A Real-World Playbook",
        excerpt: "The Pages Router and the App Router are not interchangeable. When AI tools output a mix of both, or default to patterns that break under the App Router, the result is a build that compiles locally and crashes in production. Here is the migration playbook we run on every client codebase.",
        body: [
          "Next.js 14 ships with two routing systems: the Pages Router, which has existed since Next.js 9, and the App Router, introduced in Next.js 13 and the recommended approach for new applications. They are not interchangeable. They have different file conventions, different data fetching patterns, different component models, and different deployment behaviors. An application that mixes them without understanding the boundaries will fail in unpredictable ways.",
          "AI tools frequently produce hybrid outputs. A codebase generated by Lovable or Bolt may contain pages/ directory files alongside app/ directory files, or App Router conventions applied to Pages Router file structures. The local development server is lenient about some of these conflicts. The production build container is not.",
          "The migration playbook starts with a structural audit. We identify every file in the routing directories and classify it: pure App Router, pure Pages Router, or hybrid. We identify every data fetching pattern — getServerSideProps, getStaticProps, useEffect-based fetching, server components — and map them to their App Router equivalents. We identify every API route and verify its file path and handler signature match the expected convention.",
          "The most disruptive migration is from getServerSideProps to server component data fetching. In the Pages Router, getServerSideProps runs on every request and passes props to a client component. In the App Router, server components fetch data directly and render on the server by default. The pattern looks different but the outcome is equivalent — and the App Router version is faster, simpler, and more composable.",
          "Once the routing structure is clean, we address the client/server boundary. Every component that uses React hooks, browser APIs, or event handlers requires the 'use client' directive. Every component that can remain a server component should. The goal is to push interactivity as far toward the leaves of the component tree as possible, minimizing the JavaScript sent to the browser and maximizing server-side rendering.",
        ],
      },
      {
        slug:    "ci-cd-for-non-technical-founders",
        date:    "April 30, 2026",
        tag:     "CI/CD",
        title:   "CI/CD for Non-Technical Founders: What You Actually Need on Day One",
        excerpt: "You do not need a Kubernetes cluster. You need a branch protection rule, a working build check, and a deployment that does not break when you push a typo. Here is the minimum viable CI/CD stack for a solo founder shipping on Vercel.",
        body: [
          "Continuous integration and continuous deployment — CI/CD — is frequently presented as a complex DevOps discipline requiring dedicated infrastructure engineers and significant tooling investment. For a solo founder or small team shipping a web application on Vercel, the reality is much simpler. The minimum viable CI/CD stack requires three things: a version-controlled repository, an automated build check, and a deployment pipeline.",
          "The repository is GitHub. Every change to your application goes through a commit and a pull request. This is not bureaucracy — it is the mechanism by which you can reverse any change, understand what changed when something breaks, and review code before it reaches your users. A repository without branch protection is a repository where a typo pushed directly to main can take your application offline.",
          "The build check is Vercel's automatic build verification. Every pull request triggers a preview deployment. If the build fails, you see it on the pull request before it merges. If it succeeds, you get a live preview URL to test the change. This costs nothing additional on Vercel's free tier and catches the majority of deployment failures before they reach production.",
          "The deployment pipeline is the GitHub-Vercel integration. Merging a pull request to main automatically deploys to production. There is no manual step, no SSH session, no FTP upload. The deployment is atomic — if it fails, the previous deployment remains live. If it succeeds, the new version goes live within sixty seconds of the merge.",
          "This stack — GitHub repository with branch protection, Vercel preview deployments on pull requests, automatic production deployment on merge — is sufficient for the vast majority of early-stage web applications. It takes approximately thirty minutes to configure correctly from scratch. It is the exact stack we establish on every End-to-End Core Migration engagement, and it is what makes every subsequent change to your application safe to ship.",
        ],
      },
    ],
  },

  legal: {
    label: "Legal",
    effectiveDate: "June 1, 2026",
    terms: {
      title: "Terms of Service",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          paras: ["By submitting an intake form, engaging our services via email, or making any payment to Nexus Global Enterprise, you unconditionally agree to be bound by these Terms of Service. If you do not agree, do not use our services."],
        },
        {
          heading: "2. All Sales Are Absolute and Final",
          paras: [
            "All payments made to Nexus Global Enterprise are non-refundable and non-reversible. Once payment has been collected following written scope confirmation, no refunds, chargebacks, or partial credits will be issued under any circumstances, including but not limited to:",
            "Disputes initiated via payment processor chargebacks without prior written communication to Nexus Global Enterprise will be contested in full.",
          ],
          items: [
            "Change of mind after scope confirmation.",
            "Dissatisfaction with the speed of delivery within the agreed operational window.",
            "Discovery of additional technical issues outside the confirmed scope.",
            "Inability to access or operate the delivered infrastructure.",
            "Third-party platform outages (Vercel, Supabase, GitHub, or similar).",
          ],
        },
        {
          heading: "3. \"As-Is\" Production Infrastructure Handoff Delivery Shield",
          paras: [
            "All deliverables — including but not limited to migrated repositories, provisioned database instances, configured deployment pipelines, and any written architectural documentation — are delivered \"As-Is\" at the time of handoff.",
            "Nexus Global Enterprise warrants that all confirmed scope items have been completed and validated against the specifications agreed upon in writing prior to payment. Beyond this, no additional warranties, express or implied, are provided.",
            "The client assumes full operational responsibility for the delivered infrastructure upon handoff. Nexus Global Enterprise bears no liability for degradation, outages, data loss, or security failures occurring after the delivery window has closed.",
          ],
        },
        {
          heading: "4. Scope of Work & Delivery Windows",
          paras: [
            "All work is scoped and confirmed in writing before any payment is requested. The confirmed scope document constitutes the full and complete definition of deliverables. No verbal agreements, informal chat messages, or implied expectations extend the scope.",
            "Delivery windows (24-hour, 48-hour, 72-hour, or custom sprint) begin upon payment clearance. Delays caused by client-side access restrictions, late credential provision, or third-party platform outages do not constitute a breach of our delivery commitment.",
          ],
        },
        {
          heading: "5. Production Oversight Retainer — Boundary Terms",
          paras: [
            "Monthly retainer clients receive one (1) scheduled technical audit window per calendar week, conducted within a fixed time slot confirmed at retainer activation. This constitutes the entirety of the scheduled service.",
            "Infrastructure interventions requested outside the designated weekly window are classified as emergency off-schedule priority work and are billed separately at a rate of $150 USD per hour, invoiced immediately upon request. Retainer billing is monthly, in advance, and non-refundable for any partial month of service.",
          ],
        },
        {
          heading: "6. Co-Architecture Bespoke Engagements",
          paras: ["Bespoke Co-Architecture engagements require execution of a Mutual Responsibility Release Framework prior to commencement. This document defines shared obligations, intellectual property ownership, confidentiality terms, and liability boundaries specific to the engagement. No Co-Architecture work begins without full legal sign-off from both parties."],
        },
        {
          heading: "7. Intellectual Property",
          paras: ["Upon receipt of final payment, the client receives full ownership of all custom code, configurations, and infrastructure assets delivered within the confirmed scope. Nexus Global Enterprise retains no claim over client repositories, databases, or deployment pipelines following handoff. Nexus Global Enterprise retains the right to reference engagements in marketing materials in anonymized, non-identifying form unless otherwise agreed in writing."],
        },
        {
          heading: "8. Limitation of Liability",
          paras: ["To the maximum extent permitted by applicable law, Nexus Global Enterprise shall not be liable for any indirect, incidental, consequential, punitive, or special damages arising from the use of, or inability to use, our services — including lost revenue, lost data, or business interruption. Our total aggregate liability shall not exceed the total amount paid by the client for the specific engagement giving rise to the claim."],
        },
        {
          heading: "9. Governing Law",
          paras: ["These Terms are governed by the laws of the jurisdiction in which Nexus Global Enterprise is registered. Any disputes shall be resolved through binding arbitration before a mutually agreed arbitrator, with each party bearing its own legal costs."],
        },
        {
          heading: "10. Modifications",
          paras: ["Nexus Global Enterprise reserves the right to update these Terms at any time. Updated Terms are effective upon publication at this URL. Continued use of our services after publication constitutes acceptance."],
        },
      ],
      contactNote: "Questions regarding these Terms? Contact us at info@nexusge.com. We respond to all legal inquiries within 48 business hours.",
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Plain English. No legal obscuration. Here is exactly what data we collect, why we collect it, and what we do — and do not do — with it.",
      dataTable: {
        cols: ["Data Type", "Why We Collect It", "Retention"],
        rows: [
          ["Name & Email", "To identify your intake request and communicate scope, invoicing, and delivery confirmations.", "Duration of engagement + 90 days"],
          ["Phone (optional)", "Provided voluntarily for urgent communication if requested.", "Duration of engagement"],
          ["Project scope description", "To audit your application, define a written scope, and deliver the confirmed work.", "Duration of engagement + 90 days"],
          ["Selected service tier", "To route your request to the correct delivery workflow.", "Duration of engagement"],
          ["IP address (server log)", "Standard server-side request logging via Vercel infrastructure. Not used for tracking.", "30 days, automated rotation"],
        ],
      },
      sections: [
        {
          heading: "1. Who We Are",
          paras: ["Nexus Global Enterprise is a B2B infrastructure engineering firm that migrates AI-generated applications into production-grade deployments. We operate this website at nexusge.com and accept client intake through the forms hosted here. If you have questions about this policy, email us at info@nexusge.com."],
        },
        {
          heading: "2. What Data We Collect",
          paras: ["We collect only what is strictly necessary to deliver our services."],
        },
        {
          heading: "3. What We Do Not Collect",
          paras: [],
          items: [
            "We do not use advertising trackers, pixel tracking, or third-party analytics scripts.",
            "We do not build user profiles or behavioral datasets.",
            "We do not sell, rent, or share your personal information with any third party for marketing purposes.",
            "We do not use session recording, heatmap tools, or conversion tracking software.",
            "We do not require account creation, passwords, or social login.",
          ],
        },
        {
          heading: "4. How We Store Your Data",
          paras: [
            "Intake form submissions are stored in a Supabase PostgreSQL database hosted in the United States (us-east-1 region). Access is restricted to service-role credentials used exclusively by our server-side API route. No client-side code can read submission data. Row-Level Security policies block all anonymous read access.",
            "Email notifications triggered by form submissions are delivered via Resend. Resend processes your name and email to route the notification to our inbox. No submission data is stored by Resend beyond standard email delivery logs, which expire per their own retention policy.",
          ],
        },
        {
          heading: "5. Cookies & Browser Storage",
          paras: ["Vercel, our hosting provider, may set infrastructure-level cookies for routing and performance (e.g., edge network affinity). These are strictly technical in nature, contain no personally identifiable information, and are outside our control. You can inspect and clear them via your browser's developer tools at any time."],
          cookieBox: {
            title: "Zero-Cookie Policy",
            body:  "This website sets no first-party cookies, no tracking cookies, and no persistent browser storage. No cookie consent banner is required because there is nothing to consent to.",
          },
        },
        {
          heading: "6. Data Minimization Protocol",
          paras: [
            "We apply a strict minimization standard: if we do not need a piece of data to deliver your confirmed scope, we do not ask for it, store it, or process it.",
            "After 90 days following engagement close, intake submission records are permanently deleted from our database. No archive copies are retained. Email thread records remain in our inbox only as long as operationally necessary and are governed by our email provider's standard retention settings.",
          ],
        },
        {
          heading: "7. Your Rights",
          paras: [
            "Regardless of your jurisdiction, you may at any time:",
            "To exercise any of these rights, email info@nexusge.com with the subject line \"Data Request.\" We will respond within 5 business days.",
          ],
          items: [
            "Request a copy of any personal data we hold about you.",
            "Request correction of inaccurate data.",
            "Request permanent deletion of your submission record.",
            "Withdraw consent for any ongoing communication.",
          ],
        },
        {
          heading: "8. Changes to This Policy",
          paras: ["If we materially change how we handle personal data, we will update the effective date at the top of this page. We will not retroactively apply weaker protections to data collected under a previous version of this policy."],
        },
      ],
      contactNote: "Privacy questions? Contact info@nexusge.com. We do not route privacy inquiries through third-party ticketing systems.",
    },
    refunds: {
      title: "Refund Policy",
      alert: "All sales are absolute and final. No refunds, credits, or chargebacks are issued under any circumstances once payment has been collected.",
      sections: [
        {
          heading: "1. All Sales Are Absolute and Final",
          paras: ["All payments made to Nexus Global Enterprise are non-refundable and non-reversible. Once payment has been collected following written scope confirmation, no refunds, chargebacks, or partial credits will be issued under any circumstances, including but not limited to:"],
          items: [
            "Change of mind after scope confirmation and payment.",
            "Dissatisfaction with the speed of delivery within the agreed operational window.",
            "Discovery of additional technical issues outside the confirmed scope of work.",
            "Inability to access, operate, or understand the delivered infrastructure.",
            "Third-party platform outages (Vercel, Supabase, GitHub, or any other provider).",
            "Business closure, pivot, or abandonment of the project after delivery.",
            "Failure to provide required credentials, repository access, or environment variables within the delivery window.",
          ],
        },
        {
          heading: "2. Payment Is Collected After Scope Confirmation Only",
          paras: [
            "We never collect payment before delivering a written scope document. The scope document details exactly what will be delivered, at what fixed cost, and within what confirmed delivery window. By proceeding with payment, you explicitly acknowledge that you have reviewed and approved the scope.",
            "If you have a concern about the scope before payment, that is the appropriate time to raise it. Once payment is submitted, the scope is locked and work begins immediately.",
          ],
        },
        {
          heading: "3. \"As-Is\" Production Infrastructure Handoff Delivery Shield",
          paras: [
            "All deliverables are handed off \"As-Is\" at the time of confirmed scope delivery. Nexus Global Enterprise warrants that every item listed in the written scope document has been completed and validated at the time of handoff.",
            "Beyond this explicit warranty, no additional warranties — express or implied — are provided. The client assumes full operational responsibility for all delivered infrastructure upon handoff.",
            "Issues arising after the handoff window closes — including but not limited to infrastructure degradation, third-party API changes, platform updates, or new bugs introduced by the client — are outside the scope of the original engagement and are not grounds for a refund.",
          ],
        },
        {
          heading: "4. Scope Disputes",
          paras: [
            "If you believe a confirmed scope item was not delivered, you must raise the dispute in writing to info@nexusge.com within 5 business days of the delivery notification.",
            "Disputes raised outside this window will not be considered. If a legitimate scope omission is confirmed on our end, we will complete the missing deliverable at no additional cost. Monetary refunds are not available under any scenario, including confirmed scope disputes.",
          ],
        },
        {
          heading: "5. Chargebacks & Payment Disputes",
          paras: [
            "Chargebacks initiated via payment processors (Stripe, PayPal, credit card networks) without prior written communication to Nexus Global Enterprise will be contested in full with all available documentation, including the signed scope confirmation, delivery records, and communication logs.",
            "We maintain complete records of all scope confirmations, delivery timestamps, and client communications. Unjustified chargebacks will be reported to relevant credit bureaus and payment networks where permitted by applicable law.",
          ],
        },
        {
          heading: "6. Retainer Cancellation",
          paras: ["Monthly retainer agreements may be cancelled at any time with written notice. Cancellation takes effect at the end of the current billing cycle. No partial refunds are issued for unused days within a billing period. All retainer fees collected for the current billing cycle are non-refundable upon cancellation."],
        },
        {
          heading: "7. Questions",
          paras: ["Questions about this policy should be directed to info@nexusge.com with the subject line \"Refund Policy Inquiry\". We respond to all legal correspondence within 48 business hours."],
        },
      ],
      relatedLabel: "Related Policies",
      contactNote:  "Questions? Email info@nexusge.com with subject \"Refund Policy Inquiry\".",
    },
    footer: {
      home:      "Home",
      blog:      "Blog",
      terms:     "Terms of Service",
      privacy:   "Privacy Policy",
      copyright: "Nexus Global Enterprise. All rights reserved.",
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

  blog: {
    sectionLabel: "Diario de Ingeniería",
    headline:     "Perspectivas de Infraestructura de Producción",
    subheadline:  "Artículos técnicos sobre la migración de aplicaciones generadas por IA a infraestructura de producción reforzada. Despliegues reales, fallos reales, soluciones reales.",
    readArticle:  "Leer artículo",
    backToBlog:   "← Volver al Blog",
    ctaHeadline:   "Deja de depurar. Empieza a desplegar.",
    ctaSubheadline:"Envía tu repositorio en tres minutos. Recibe un alcance escrito y precio fijo en 12 horas.",
    ctaButton:     "Enviar Aplicación para Revisión →",
    posts: [
      {
        slug:    "why-ai-builders-fail-at-deployment",
        date:    "28 de mayo de 2026",
        tag:     "Infraestructura",
        title:   "Por Qué los Constructores de IA Fallan en el Despliegue (Y Qué lo Soluciona)",
        excerpt: "Lovable, Bolt y v0 generan código frontend impresionante. Pero no generan infraestructura de producción. Aquí está la brecha exacta entre una vista previa local y un despliegue en vivo reforzado.",
        body: [
          "Cada constructor de IA con el que hemos trabajado produce la misma clase de resultado: una aplicación visualmente completa, ejecutable localmente, sin infraestructura de producción adjunta. El código compila. El servidor de desarrollo corre. La interfaz parece terminada. Luego el fundador intenta desplegarlo y todo se detiene.",
          "La brecha no es un error en la herramienta de IA. Es un límite de alcance fundamental. Los constructores de IA están entrenados para producir código de interfaz — componentes, rutas, estilos y lógica básica. No están entrenados para producir la infraestructura circundante que una aplicación de producción en vivo requiere.",
          "Aquí está lo que típicamente falta cuando llega una exportación de Lovable, Bolt o v0 para una migración de producción: un repositorio de GitHub correctamente estructurado con protección de ramas, un pipeline de despliegue configurado que conecte el repositorio a un proveedor de alojamiento, variables de entorno correctamente delimitadas, una base de datos externa aprovisionada con esquemas reales y políticas de control de acceso, y un sistema de autenticación que persiste las sesiones correctamente.",
          "El patrón de fallo común es que los fundadores intentan cerrar esta brecha ellos mismos usando las mismas herramientas de IA que produjeron el código. Generan más código — más fragmentos de configuración, más soluciones parciales — que se superponen al problema estructural original sin resolverlo.",
          "La resolución requiere una auditoría de infraestructura, no más generación. Cada repositorio que tomamos comienza con una lectura sistemática: cada archivo de configuración, cada referencia de entorno, cada patrón de enrutamiento. La auditoría identifica los fallos específicos. La migración los resuelve en un único paso estructurado.",
        ],
      },
      {
        slug:    "supabase-rls-the-silent-killer",
        date:    "22 de mayo de 2026",
        tag:     "Seguridad de Bases de Datos",
        title:   "Supabase RLS: El Asesino Silencioso en los Backends Generados por IA",
        excerpt: "Row-Level Security es la capa más importante en un despliegue de Supabase. Las herramientas de IA casi nunca lo configuran correctamente. Así es como auditamos y parcheamos esto antes de que sus datos queden expuestos.",
        body: [
          "Row-Level Security es el mecanismo de Supabase para aplicar control de acceso a datos a nivel de base de datos. Determina qué filas puede leer, escribir, actualizar o eliminar un usuario determinado. Cuando se configura correctamente, es una capa de seguridad poderosa y elegante. Cuando se configura incorrectamente — o no se configura en absoluto — es una de las vulnerabilidades más peligrosas que puede tener una aplicación de producción.",
          "Los backends de Supabase generados por IA casi universalmente se envían con RLS deshabilitado o mal configurado. La razón es directa: habilitar RLS y escribir políticas correctas requiere comprender el modelo de autenticación de la aplicación, los roles de usuario y los patrones de propiedad de datos.",
          "El modo de fallo más común que encontramos es una base de datos con RLS habilitado pero sin política INSERT en una tabla que la aplicación escribe. La aplicación falla en cualquier envío de formulario. El desarrollador deshabilita RLS por completo para que funcione. La aplicación ahora corre — y cada fila en cada tabla es legible y escribible por cualquier solicitud anónima.",
          "El segundo modo de fallo más común es una política SELECT demasiado permisiva. Una política escrita como `using (true)` permite que cualquier usuario autenticado lea todas las filas independientemente de la propiedad. En una aplicación multiusuario, esto significa que cada usuario puede leer los datos de todos los demás usuarios.",
          "El diseño correcto de políticas RLS comienza con un modelo de propiedad claro: cada fila pertenece a un usuario, y los usuarios solo pueden acceder a sus propias filas a menos que se les otorgue acceso explícito a otras. Cada política que escribimos se prueba contra solicitudes autenticadas y no autenticadas antes de la entrega.",
        ],
      },
      {
        slug:    "vercel-env-vars-the-right-way",
        date:    "15 de mayo de 2026",
        tag:     "Despliegue",
        title:   "Variables de Entorno en Vercel: La Forma Correcta de Estructurar un Secreto de Producción",
        excerpt: "Prefijos NEXT_PUBLIC_, claves de rol de servicio filtrándose a paquetes del cliente, y declaraciones de variables faltantes en tiempo de build. Estos son los tres fallos más comunes de variables de entorno.",
        body: [
          "Las variables de entorno son la fuente más común de fallos de despliegue de producción en aplicaciones Next.js generadas por IA. Los fallos caen en tres categorías distintas, cada una con una causa raíz diferente y una resolución diferente.",
          "La primera categoría es la confusión de prefijos. Next.js distingue entre variables del lado del servidor y variables del lado del cliente usando el prefijo NEXT_PUBLIC_. Las variables sin este prefijo están disponibles solo en código del lado del servidor. Las variables con este prefijo se incrustan en el paquete JavaScript del lado del cliente. Las herramientas de IA frecuentemente generan código que usa NEXT_PUBLIC_ en variables que deberían permanecer del lado del servidor — credenciales de base de datos, claves de rol de servicio, secretos de API.",
          "La segunda categoría es la indisponibilidad en tiempo de build. El contenedor de build de Vercel no hereda variables de su máquina local. Cada variable que su aplicación referencia debe declararse explícitamente en la configuración del proyecto de Vercel.",
          "La tercera categoría es la configuración incorrecta del alcance. Vercel permite que las variables se delimiten a entornos de Producción, Vista Previa y Desarrollo de forma independiente. Los guías generados por IA frecuentemente instruyen a los desarrolladores a agregar variables solo a Producción, causando que los despliegues de ramas de Vista Previa fallen.",
          "La estructura correcta: los secretos del lado del servidor se declaran sin el prefijo NEXT_PUBLIC_, delimitados solo a los entornos donde se necesitan. La configuración del lado del cliente usa el prefijo NEXT_PUBLIC_ y se trata como información pública. Cada variable está documentada en un archivo .env.example comprometido en el repositorio.",
        ],
      },
      {
        slug:    "next-js-app-router-migration-guide",
        date:    "8 de mayo de 2026",
        tag:     "Arquitectura",
        title:   "Migrando una Exportación de IA al App Router de Next.js 14: Un Manual del Mundo Real",
        excerpt: "El Pages Router y el App Router no son intercambiables. Cuando las herramientas de IA producen una mezcla de ambos, el resultado es un build que compila localmente y falla en producción.",
        body: [
          "Next.js 14 incluye dos sistemas de enrutamiento: el Pages Router, que existe desde Next.js 9, y el App Router, introducido en Next.js 13 y el enfoque recomendado para nuevas aplicaciones. No son intercambiables. Tienen diferentes convenciones de archivos, diferentes patrones de obtención de datos, diferentes modelos de componentes y diferentes comportamientos de despliegue.",
          "Las herramientas de IA frecuentemente producen salidas híbridas. Un código generado por Lovable o Bolt puede contener archivos del directorio pages/ junto con archivos del directorio app/, o convenciones del App Router aplicadas a estructuras de archivos del Pages Router.",
          "El manual de migración comienza con una auditoría estructural. Identificamos cada archivo en los directorios de enrutamiento y lo clasificamos: App Router puro, Pages Router puro o híbrido. Identificamos cada patrón de obtención de datos — getServerSideProps, getStaticProps, obtención basada en useEffect, componentes de servidor — y los mapeamos a sus equivalentes del App Router.",
          "La migración más disruptiva es de getServerSideProps a la obtención de datos de componentes de servidor. En el Pages Router, getServerSideProps se ejecuta en cada solicitud y pasa props a un componente cliente. En el App Router, los componentes de servidor obtienen datos directamente y renderizan en el servidor por defecto.",
          "Una vez que la estructura de enrutamiento está limpia, abordamos el límite cliente/servidor. Cada componente que usa hooks de React, APIs del navegador o manejadores de eventos requiere la directiva 'use client'. El objetivo es empujar la interactividad lo más hacia las hojas del árbol de componentes como sea posible.",
        ],
      },
      {
        slug:    "ci-cd-for-non-technical-founders",
        date:    "30 de abril de 2026",
        tag:     "CI/CD",
        title:   "CI/CD para Fundadores No Técnicos: Lo Que Realmente Necesitas el Día Uno",
        excerpt: "No necesitas un clúster de Kubernetes. Necesitas una regla de protección de ramas, una verificación de build que funcione y un despliegue que no se rompa cuando cometes un error tipográfico.",
        body: [
          "Integración continua y despliegue continuo — CI/CD — se presenta frecuentemente como una disciplina DevOps compleja. Para un fundador en solitario o un equipo pequeño que entrega una aplicación web en Vercel, la realidad es mucho más simple. El stack mínimo viable de CI/CD requiere tres cosas: un repositorio con control de versiones, una verificación de build automatizada y un pipeline de despliegue.",
          "El repositorio es GitHub. Cada cambio en tu aplicación pasa por un commit y un pull request. Esto no es burocracia — es el mecanismo por el cual puedes revertir cualquier cambio, entender qué cambió cuando algo se rompe y revisar el código antes de que llegue a tus usuarios.",
          "La verificación de build es la verificación automática de build de Vercel. Cada pull request activa un despliegue de vista previa. Si el build falla, lo ves en el pull request antes de que se fusione. Si tiene éxito, obtienes una URL de vista previa en vivo para probar el cambio.",
          "El pipeline de despliegue es la integración GitHub-Vercel. Fusionar un pull request a main despliega automáticamente a producción. No hay paso manual, no hay sesión SSH. El despliegue es atómico — si falla, el despliegue anterior permanece activo.",
          "Este stack — repositorio GitHub con protección de ramas, despliegues de vista previa de Vercel en pull requests, despliegue automático a producción en la fusión — es suficiente para la gran mayoría de aplicaciones web en etapa inicial. Es exactamente el stack que establecemos en cada compromiso de Migración Integral.",
        ],
      },
    ],
  },

  legal: {
    label: "Legal",
    effectiveDate: "1 de junio de 2026",
    terms: {
      title: "Términos de Servicio",
      sections: [
        {
          heading: "1. Aceptación de los Términos",
          paras: ["Al enviar un formulario de solicitud, contratar nuestros servicios por correo electrónico o realizar cualquier pago a Nexus Global Enterprise, usted acepta incondicionalmente estar vinculado por estos Términos de Servicio. Si no está de acuerdo, no utilice nuestros servicios."],
        },
        {
          heading: "2. Todas las Ventas Son Absolutas y Definitivas",
          paras: [
            "Todos los pagos realizados a Nexus Global Enterprise son no reembolsables e irreversibles. Una vez que se ha cobrado el pago tras la confirmación del alcance por escrito, no se emitirán reembolsos, contracargos ni créditos parciales bajo ninguna circunstancia, incluidos pero no limitados a:",
            "Las disputas iniciadas a través de contracargos del procesador de pago sin comunicación escrita previa a Nexus Global Enterprise serán impugnadas en su totalidad.",
          ],
          items: [
            "Cambio de opinión después de la confirmación del alcance.",
            "Insatisfacción con la velocidad de entrega dentro de la ventana operacional acordada.",
            "Descubrimiento de problemas técnicos adicionales fuera del alcance confirmado.",
            "Incapacidad para acceder u operar la infraestructura entregada.",
            "Interrupciones de plataformas de terceros (Vercel, Supabase, GitHub o similares).",
          ],
        },
        {
          heading: "3. Escudo de Entrega de Infraestructura de Producción \"Tal Como Está\"",
          paras: [
            "Todos los entregables — incluidos entre otros repositorios migrados, instancias de base de datos aprovisionadas, pipelines de despliegue configurados y cualquier documentación arquitectónica escrita — se entregan \"Tal Como Están\" en el momento de la transferencia.",
            "Nexus Global Enterprise garantiza que todos los elementos del alcance confirmado han sido completados y validados según las especificaciones acordadas por escrito antes del pago. Más allá de esto, no se proporcionan garantías adicionales, expresas ni implícitas.",
            "El cliente asume plena responsabilidad operativa sobre la infraestructura entregada tras la transferencia. Nexus Global Enterprise no asume ninguna responsabilidad por degradación, interrupciones, pérdida de datos o fallos de seguridad que ocurran después de que se cierre la ventana de entrega.",
          ],
        },
        {
          heading: "4. Alcance del Trabajo y Ventanas de Entrega",
          paras: [
            "Todo el trabajo es delimitado y confirmado por escrito antes de solicitar cualquier pago. El documento de alcance confirmado constituye la definición completa e íntegra de los entregables. Ningún acuerdo verbal, mensaje de chat informal o expectativa implícita amplía el alcance.",
            "Las ventanas de entrega (24 horas, 48 horas, 72 horas o sprint personalizado) comienzan al confirmarse el pago. Los retrasos causados por restricciones de acceso del cliente, provisión tardía de credenciales o interrupciones de plataformas de terceros no constituyen un incumplimiento de nuestro compromiso de entrega.",
          ],
        },
        {
          heading: "5. Términos del Retenedor de Supervisión de Producción",
          paras: [
            "Los clientes del retenedor mensual reciben una (1) ventana de auditoría técnica programada por semana calendario, realizada dentro de un horario fijo confirmado en la activación del retenedor. Esto constituye la totalidad del servicio programado.",
            "Las intervenciones de infraestructura solicitadas fuera de la ventana semanal designada se clasifican como trabajo de prioridad de emergencia fuera de horario y se facturan por separado a $150 USD por hora, con factura inmediata. La facturación del retenedor es mensual, por adelantado, y no reembolsable para ningún mes parcial de servicio.",
          ],
        },
        {
          heading: "6. Contratos de Co-Arquitectura a Medida",
          paras: ["Los contratos de Co-Arquitectura a Medida requieren la ejecución de un Marco de Liberación de Responsabilidad Mutua antes del inicio. Este documento define obligaciones compartidas, propiedad intelectual, términos de confidencialidad y límites de responsabilidad específicos del contrato. Ningún trabajo de Co-Arquitectura comienza sin la aprobación legal completa de ambas partes."],
        },
        {
          heading: "7. Propiedad Intelectual",
          paras: ["Tras la recepción del pago final, el cliente recibe la propiedad completa de todo el código personalizado, configuraciones y activos de infraestructura entregados dentro del alcance confirmado. Nexus Global Enterprise no retiene ninguna reclamación sobre repositorios, bases de datos o pipelines de despliegue del cliente tras la transferencia. Nexus Global Enterprise retiene el derecho de referenciar contratos en materiales de marketing de forma anonimizada y no identificable, salvo que se acuerde lo contrario por escrito."],
        },
        {
          heading: "8. Limitación de Responsabilidad",
          paras: ["En la máxima medida permitida por la ley aplicable, Nexus Global Enterprise no será responsable de ningún daño indirecto, incidental, consecuente, punitivo o especial derivado del uso o la imposibilidad de usar nuestros servicios — incluidos ingresos perdidos, pérdida de datos o interrupción del negocio. Nuestra responsabilidad total agregada no superará el monto total pagado por el cliente para el contrato específico que dio lugar al reclamo."],
        },
        {
          heading: "9. Ley Aplicable",
          paras: ["Estos Términos se rigen por las leyes de la jurisdicción en la que está registrada Nexus Global Enterprise. Cualquier disputa se resolverá mediante arbitraje vinculante ante un árbitro de mutuo acuerdo, con cada parte asumiendo sus propios costos legales."],
        },
        {
          heading: "10. Modificaciones",
          paras: ["Nexus Global Enterprise se reserva el derecho de actualizar estos Términos en cualquier momento. Los Términos actualizados son efectivos al publicarse en esta URL. El uso continuado de nuestros servicios después de la publicación constituye la aceptación."],
        },
      ],
      contactNote: "¿Preguntas sobre estos Términos? Contáctenos en info@nexusge.com. Respondemos todas las consultas legales en 48 horas hábiles.",
    },
    privacy: {
      title: "Política de Privacidad",
      subtitle: "Inglés sencillo. Sin oscuridades legales. Aquí exactamente qué datos recopilamos, por qué los recopilamos y qué hacemos — y no hacemos — con ellos.",
      dataTable: {
        cols: ["Tipo de Dato", "Por Qué lo Recopilamos", "Retención"],
        rows: [
          ["Nombre y Correo", "Para identificar su solicitud y comunicar alcance, facturación y confirmaciones de entrega.", "Duración del contrato + 90 días"],
          ["Teléfono (opcional)", "Proporcionado voluntariamente para comunicación urgente si se solicita.", "Duración del contrato"],
          ["Descripción del alcance del proyecto", "Para auditar su aplicación, definir un alcance escrito y entregar el trabajo confirmado.", "Duración del contrato + 90 días"],
          ["Nivel de servicio seleccionado", "Para dirigir su solicitud al flujo de trabajo de entrega correcto.", "Duración del contrato"],
          ["Dirección IP (registro del servidor)", "Registro de solicitudes estándar del lado del servidor a través de la infraestructura Vercel. No se utiliza para seguimiento.", "30 días, rotación automática"],
        ],
      },
      sections: [
        {
          heading: "1. Quiénes Somos",
          paras: ["Nexus Global Enterprise es una empresa de ingeniería de infraestructura B2B que migra aplicaciones generadas por IA a implementaciones de nivel empresarial. Operamos este sitio web en nexusge.com y aceptamos solicitudes de clientes a través de los formularios aquí alojados. Si tiene preguntas sobre esta política, envíenos un correo a info@nexusge.com."],
        },
        {
          heading: "2. Qué Datos Recopilamos",
          paras: ["Solo recopilamos lo estrictamente necesario para prestar nuestros servicios."],
        },
        {
          heading: "3. Qué No Recopilamos",
          paras: [],
          items: [
            "No usamos rastreadores de publicidad, seguimiento de píxeles ni scripts de análisis de terceros.",
            "No creamos perfiles de usuario ni conjuntos de datos de comportamiento.",
            "No vendemos, alquilamos ni compartimos su información personal con ningún tercero con fines de marketing.",
            "No usamos grabación de sesiones, mapas de calor ni software de seguimiento de conversiones.",
            "No requerimos creación de cuenta, contraseñas ni inicio de sesión social.",
          ],
        },
        {
          heading: "4. Cómo Almacenamos Sus Datos",
          paras: [
            "Los envíos del formulario de solicitud se almacenan en una base de datos Supabase PostgreSQL alojada en los Estados Unidos (región us-east-1). El acceso está restringido a credenciales de rol de servicio utilizadas exclusivamente por nuestra ruta API del lado del servidor. Ningún código del lado del cliente puede leer los datos de los envíos. Las políticas de Row-Level Security bloquean todo acceso de lectura anónimo.",
            "Las notificaciones de correo electrónico activadas por los envíos del formulario se entregan a través de Resend. Resend procesa su nombre y correo electrónico para dirigir la notificación a nuestra bandeja de entrada. Ningún dato de envío es almacenado por Resend más allá de los registros estándar de entrega de correo electrónico, que expiran según su propia política de retención.",
          ],
        },
        {
          heading: "5. Cookies y Almacenamiento del Navegador",
          paras: ["Vercel, nuestro proveedor de alojamiento, puede establecer cookies a nivel de infraestructura para enrutamiento y rendimiento. Estas son estrictamente técnicas, no contienen información de identificación personal y están fuera de nuestro control. Puede inspeccionarlas y eliminarlas en cualquier momento a través de las herramientas de desarrollo de su navegador."],
          cookieBox: {
            title: "Política de Cero Cookies",
            body:  "Este sitio web no establece cookies propias, cookies de seguimiento ni almacenamiento persistente del navegador. No se requiere ningún banner de consentimiento de cookies porque no hay nada a lo que dar consentimiento.",
          },
        },
        {
          heading: "6. Protocolo de Minimización de Datos",
          paras: [
            "Aplicamos un estándar de minimización estricto: si no necesitamos un dato para entregar su alcance confirmado, no lo solicitamos, almacenamos ni procesamos.",
            "Después de 90 días tras el cierre del contrato, los registros de envío del formulario se eliminan permanentemente de nuestra base de datos. No se conservan copias de archivo. Los registros de hilos de correo electrónico permanecen en nuestra bandeja de entrada solo mientras sea operativamente necesario y se rigen por la configuración de retención estándar de nuestro proveedor de correo electrónico.",
          ],
        },
        {
          heading: "7. Sus Derechos",
          paras: [
            "Independientemente de su jurisdicción, puede en cualquier momento:",
            "Para ejercer cualquiera de estos derechos, envíe un correo a info@nexusge.com con el asunto \"Solicitud de Datos\". Responderemos en 5 días hábiles.",
          ],
          items: [
            "Solicitar una copia de cualquier dato personal que tengamos sobre usted.",
            "Solicitar la corrección de datos inexactos.",
            "Solicitar la eliminación permanente de su registro de envío.",
            "Retirar el consentimiento para cualquier comunicación en curso.",
          ],
        },
        {
          heading: "8. Cambios en Esta Política",
          paras: ["Si cambiamos materialmente cómo manejamos los datos personales, actualizaremos la fecha de vigencia en la parte superior de esta página. No aplicaremos retroactivamente protecciones más débiles a los datos recopilados bajo una versión anterior de esta política."],
        },
      ],
      contactNote: "¿Preguntas sobre privacidad? Contacte info@nexusge.com. No enrutamos consultas de privacidad a través de sistemas de tickets de terceros.",
    },
    refunds: {
      title: "Política de Reembolsos",
      alert: "Todas las ventas son absolutas y definitivas. No se emiten reembolsos, créditos ni contracargos bajo ninguna circunstancia una vez que se ha cobrado el pago.",
      sections: [
        {
          heading: "1. Todas las Ventas Son Absolutas y Definitivas",
          paras: ["Todos los pagos realizados a Nexus Global Enterprise son no reembolsables e irreversibles. Una vez que se ha cobrado el pago tras la confirmación del alcance por escrito, no se emitirán reembolsos, contracargos ni créditos parciales bajo ninguna circunstancia, incluidos pero no limitados a:"],
          items: [
            "Cambio de opinión después de la confirmación del alcance y el pago.",
            "Insatisfacción con la velocidad de entrega dentro de la ventana operacional acordada.",
            "Descubrimiento de problemas técnicos adicionales fuera del alcance confirmado.",
            "Incapacidad para acceder, operar o comprender la infraestructura entregada.",
            "Interrupciones de plataformas de terceros (Vercel, Supabase, GitHub o cualquier otro proveedor).",
            "Cierre del negocio, cambio de dirección o abandono del proyecto después de la entrega.",
            "No proporcionar las credenciales, el acceso al repositorio o las variables de entorno necesarias dentro de la ventana de entrega.",
          ],
        },
        {
          heading: "2. El Pago Se Cobra Solo Después de la Confirmación del Alcance",
          paras: [
            "Nunca cobramos el pago antes de entregar un documento de alcance escrito. El documento de alcance detalla exactamente qué se entregará, a qué costo fijo y dentro de qué ventana de entrega confirmada. Al proceder con el pago, usted reconoce explícitamente haber revisado y aprobado el alcance.",
            "Si tiene alguna preocupación sobre el alcance antes del pago, ese es el momento adecuado para plantearlo. Una vez enviado el pago, el alcance queda bloqueado y el trabajo comienza de inmediato.",
          ],
        },
        {
          heading: "3. Escudo de Entrega de Infraestructura \"Tal Como Está\"",
          paras: [
            "Todos los entregables se transfieren \"Tal Como Están\" en el momento de la entrega del alcance confirmado. Nexus Global Enterprise garantiza que cada elemento enumerado en el documento de alcance escrito ha sido completado y validado en el momento de la transferencia.",
            "Más allá de esta garantía explícita, no se proporcionan garantías adicionales, expresas ni implícitas. El cliente asume plena responsabilidad operativa sobre toda la infraestructura entregada tras la transferencia.",
            "Los problemas que surjan después de que se cierre la ventana de entrega — incluidos entre otros la degradación de la infraestructura, cambios en API de terceros, actualizaciones de plataformas o nuevos errores introducidos por el cliente — están fuera del alcance del contrato original y no son motivo de reembolso.",
          ],
        },
        {
          heading: "4. Disputas de Alcance",
          paras: [
            "Si cree que un elemento del alcance confirmado no fue entregado, debe plantear la disputa por escrito a info@nexusge.com dentro de 5 días hábiles desde la notificación de entrega.",
            "Las disputas planteadas fuera de este plazo no serán consideradas. Si se confirma una omisión de alcance legítima por nuestra parte, completaremos el entregable faltante sin costo adicional. Los reembolsos monetarios no están disponibles bajo ningún escenario, incluidas las disputas de alcance confirmadas.",
          ],
        },
        {
          heading: "5. Contracargos y Disputas de Pago",
          paras: [
            "Los contracargos iniciados a través de procesadores de pago (Stripe, PayPal, redes de tarjetas de crédito) sin comunicación escrita previa a Nexus Global Enterprise serán impugnados en su totalidad con toda la documentación disponible.",
            "Mantenemos registros completos de todas las confirmaciones de alcance, marcas de tiempo de entrega y comunicaciones con clientes. Los contracargos injustificados serán reportados a los burós de crédito relevantes y redes de pago donde lo permita la ley aplicable.",
          ],
        },
        {
          heading: "6. Cancelación del Retenedor",
          paras: ["Los acuerdos de retenedor mensual pueden cancelarse en cualquier momento con aviso escrito. La cancelación tiene efecto al final del ciclo de facturación actual. No se emiten reembolsos parciales por días no utilizados dentro de un período de facturación. Todas las tarifas del retenedor cobradas para el ciclo de facturación actual son no reembolsables al cancelar."],
        },
        {
          heading: "7. Preguntas",
          paras: ["Las preguntas sobre esta política deben dirigirse a info@nexusge.com con el asunto \"Consulta sobre Política de Reembolsos\". Respondemos toda la correspondencia legal en 48 horas hábiles."],
        },
      ],
      relatedLabel: "Políticas Relacionadas",
      contactNote:  "¿Preguntas? Envíe un correo a info@nexusge.com con el asunto \"Consulta sobre Política de Reembolsos\".",
    },
    footer: {
      home:      "Inicio",
      blog:      "Blog",
      terms:     "Términos de Servicio",
      privacy:   "Política de Privacidad",
      copyright: "Nexus Global Enterprise. Todos los derechos reservados.",
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

  blog: {
    sectionLabel: "Diário de Engenharia",
    headline:     "Perspectivas de Infraestrutura de Produção",
    subheadline:  "Artigos técnicos sobre a migração de aplicativos gerados por IA para infraestrutura de produção reforçada. Implantações reais, falhas reais, correções reais.",
    readArticle:  "Ler artigo",
    backToBlog:   "← Voltar ao Blog",
    ctaHeadline:   "Pare de depurar. Comece a implantar.",
    ctaSubheadline:"Envie seu repositório em três minutos. Receba um escopo escrito e preço fixo em 12 horas.",
    ctaButton:     "Enviar Aplicativo para Revisão →",
    posts: [
      {
        slug:    "why-ai-builders-fail-at-deployment",
        date:    "28 de maio de 2026",
        tag:     "Infraestrutura",
        title:   "Por Que os Construtores de IA Falham na Implantação (E O Que Realmente Resolve)",
        excerpt: "Lovable, Bolt e v0 geram código frontend impressionante. Mas não geram infraestrutura de produção. Aqui está a lacuna exata entre uma visualização local e uma implantação ao vivo reforçada.",
        body: [
          "Cada construtor de IA com o qual trabalhamos produz a mesma classe de resultado: um aplicativo visualmente completo, executável localmente, sem infraestrutura de produção anexada. O código compila. O servidor de desenvolvimento roda. A interface parece finalizada. Em seguida, o fundador tenta implantá-lo e tudo para.",
          "A lacuna não é um bug na ferramenta de IA. É um limite de escopo fundamental. Os construtores de IA são treinados para produzir código de interface — componentes, rotas, estilos e lógica básica. Eles não são treinados para produzir a infraestrutura circundante que um aplicativo de produção ao vivo requer.",
          "Aqui está o que normalmente está faltando quando uma exportação do Lovable, Bolt ou v0 chega para uma migração de produção: um repositório GitHub corretamente estruturado com proteção de branch, um pipeline de implantação configurado conectando o repositório a um provedor de hospedagem, variáveis de ambiente corretamente delimitadas, um banco de dados externo provisionado com esquemas reais e políticas de controle de acesso.",
          "O padrão de falha comum é que os fundadores tentam fechar essa lacuna usando as mesmas ferramentas de IA que produziram o código. Elas geram mais código — mais fragmentos de configuração, mais soluções parciais — que se sobrepõem ao problema estrutural original sem resolvê-lo.",
          "A resolução requer uma auditoria de infraestrutura, não mais geração. Cada repositório que assumimos começa com uma leitura sistemática: cada arquivo de configuração, cada referência de ambiente, cada padrão de roteamento. A auditoria identifica as falhas específicas. A migração as resolve em uma única passagem estruturada.",
        ],
      },
      {
        slug:    "supabase-rls-the-silent-killer",
        date:    "22 de maio de 2026",
        tag:     "Segurança de Banco de Dados",
        title:   "Supabase RLS: O Assassino Silencioso em Backends Gerados por IA",
        excerpt: "Row-Level Security é a camada mais importante em uma implantação do Supabase. As ferramentas de IA quase nunca a configuram corretamente. Veja como auditamos e corrigimos isso antes que seus dados fiquem expostos.",
        body: [
          "Row-Level Security é o mecanismo do Supabase para aplicar controle de acesso a dados no nível do banco de dados. Determina quais linhas um determinado usuário pode ler, gravar, atualizar ou excluir. Quando configurado corretamente, é uma camada de segurança poderosa e elegante. Quando configurado incorretamente — ou não configurado — é uma das vulnerabilidades mais perigosas que um aplicativo de produção pode ter.",
          "Backends do Supabase gerados por IA quase universalmente são entregues com RLS desabilitado ou mal configurado. A razão é direta: habilitar RLS e escrever políticas corretas requer entender o modelo de autenticação do aplicativo, as funções dos usuários e os padrões de propriedade dos dados.",
          "O modo de falha mais comum que encontramos é um banco de dados com RLS habilitado, mas sem política INSERT em uma tabela que o aplicativo escreve. O aplicativo falha em qualquer envio de formulário. O desenvolvedor desabilita o RLS completamente para fazê-lo funcionar. O aplicativo agora roda — e cada linha em cada tabela é legível e gravável por qualquer solicitação anônima.",
          "O segundo modo de falha mais comum é uma política SELECT excessivamente permissiva. Uma política escrita como `using (true)` permite que qualquer usuário autenticado leia todas as linhas independentemente da propriedade. Em um aplicativo multiusuário, isso significa que cada usuário pode ler os dados de todos os outros usuários.",
          "O design correto de políticas RLS começa com um modelo de propriedade claro: cada linha pertence a um usuário, e os usuários só podem acessar suas próprias linhas, a menos que recebam acesso explícito a outras. Cada política que escrevemos é testada contra solicitações autenticadas e não autenticadas antes da entrega.",
        ],
      },
      {
        slug:    "vercel-env-vars-the-right-way",
        date:    "15 de maio de 2026",
        tag:     "Implantação",
        title:   "Variáveis de Ambiente no Vercel: A Forma Correta de Estruturar um Segredo de Produção",
        excerpt: "Prefixos NEXT_PUBLIC_, chaves de função de serviço vazando para pacotes do cliente e declarações de variáveis ausentes no momento do build. Estas são as três falhas mais comuns de variáveis de ambiente.",
        body: [
          "As variáveis de ambiente são a fonte mais comum de falhas de implantação de produção em aplicativos Next.js gerados por IA. As falhas se enquadram em três categorias distintas, cada uma com uma causa raiz diferente e uma resolução diferente.",
          "A primeira categoria é a confusão de prefixos. O Next.js distingue entre variáveis do lado do servidor e variáveis do lado do cliente usando o prefixo NEXT_PUBLIC_. As variáveis sem esse prefixo estão disponíveis apenas em código do lado do servidor. As variáveis com esse prefixo são incorporadas ao pacote JavaScript do lado do cliente. As ferramentas de IA frequentemente geram código que usa NEXT_PUBLIC_ em variáveis que deveriam permanecer do lado do servidor.",
          "A segunda categoria é a indisponibilidade no momento do build. O container de build do Vercel não herda variáveis da sua máquina local. Cada variável que seu aplicativo referencia deve ser declarada explicitamente nas configurações do projeto Vercel.",
          "A terceira categoria é a configuração incorreta do escopo. O Vercel permite que variáveis sejam delimitadas aos ambientes de Produção, Prévia e Desenvolvimento de forma independente. Os guias gerados por IA frequentemente instruem os desenvolvedores a adicionar variáveis apenas à Produção, fazendo com que as implantações de branches de Prévia falhem.",
          "A estrutura correta: segredos do lado do servidor são declarados sem o prefixo NEXT_PUBLIC_, delimitados apenas aos ambientes onde são necessários. A configuração do lado do cliente usa o prefixo NEXT_PUBLIC_ e é tratada como informação pública. Cada variável está documentada em um arquivo .env.example comprometido no repositório.",
        ],
      },
      {
        slug:    "next-js-app-router-migration-guide",
        date:    "8 de maio de 2026",
        tag:     "Arquitetura",
        title:   "Migrando uma Exportação de IA para o App Router do Next.js 14: Um Manual do Mundo Real",
        excerpt: "O Pages Router e o App Router não são intercambiáveis. Quando as ferramentas de IA produzem uma mistura de ambos, o resultado é um build que compila localmente e falha em produção.",
        body: [
          "O Next.js 14 inclui dois sistemas de roteamento: o Pages Router, que existe desde o Next.js 9, e o App Router, introduzido no Next.js 13 e a abordagem recomendada para novos aplicativos. Eles não são intercambiáveis. Têm diferentes convenções de arquivos, diferentes padrões de busca de dados, diferentes modelos de componentes e diferentes comportamentos de implantação.",
          "As ferramentas de IA frequentemente produzem saídas híbridas. Um código gerado pelo Lovable ou Bolt pode conter arquivos do diretório pages/ junto com arquivos do diretório app/, ou convenções do App Router aplicadas a estruturas de arquivos do Pages Router.",
          "O manual de migração começa com uma auditoria estrutural. Identificamos cada arquivo nos diretórios de roteamento e o classificamos: App Router puro, Pages Router puro ou híbrido. Identificamos cada padrão de busca de dados e os mapeamos para seus equivalentes do App Router.",
          "A migração mais disruptiva é de getServerSideProps para a busca de dados de componentes de servidor. No Pages Router, getServerSideProps é executado em cada solicitação e passa props para um componente cliente. No App Router, os componentes de servidor buscam dados diretamente e renderizam no servidor por padrão.",
          "Uma vez que a estrutura de roteamento está limpa, abordamos o limite cliente/servidor. Cada componente que usa hooks do React, APIs do navegador ou manipuladores de eventos requer a diretiva 'use client'. O objetivo é empurrar a interatividade o mais longe possível em direção às folhas da árvore de componentes.",
        ],
      },
      {
        slug:    "ci-cd-for-non-technical-founders",
        date:    "30 de abril de 2026",
        tag:     "CI/CD",
        title:   "CI/CD para Fundadores Não Técnicos: O Que Você Realmente Precisa no Dia Um",
        excerpt: "Você não precisa de um cluster Kubernetes. Você precisa de uma regra de proteção de branch, uma verificação de build funcionando e uma implantação que não quebre quando você comete um erro de digitação.",
        body: [
          "Integração contínua e implantação contínua — CI/CD — é frequentemente apresentada como uma disciplina DevOps complexa. Para um fundador solo ou equipe pequena entregando um aplicativo web no Vercel, a realidade é muito mais simples. O stack mínimo viável de CI/CD requer três coisas: um repositório com controle de versão, uma verificação de build automatizada e um pipeline de implantação.",
          "O repositório é o GitHub. Cada mudança no seu aplicativo passa por um commit e um pull request. Isso não é burocracia — é o mecanismo pelo qual você pode reverter qualquer mudança, entender o que mudou quando algo quebra e revisar o código antes de chegar aos seus usuários.",
          "A verificação de build é a verificação automática de build do Vercel. Cada pull request aciona uma implantação de prévia. Se o build falhar, você vê isso no pull request antes de ser mesclado. Se for bem-sucedido, você recebe uma URL de prévia ao vivo para testar a mudança.",
          "O pipeline de implantação é a integração GitHub-Vercel. Mesclar um pull request ao main implanta automaticamente na produção. Não há etapa manual, nenhuma sessão SSH. A implantação é atômica — se falhar, a implantação anterior permanece ativa.",
          "Este stack — repositório GitHub com proteção de branch, implantações de prévia do Vercel em pull requests, implantação automática de produção na mesclagem — é suficiente para a grande maioria dos aplicativos web em estágio inicial. É exatamente o stack que estabelecemos em cada compromisso de Migração Principal.",
        ],
      },
    ],
  },

  legal: {
    label: "Legal",
    effectiveDate: "1 de junho de 2026",
    terms: {
      title: "Termos de Serviço",
      sections: [
        {
          heading: "1. Aceitação dos Termos",
          paras: ["Ao enviar um formulário de intake, contratar nossos serviços por e-mail ou realizar qualquer pagamento à Nexus Global Enterprise, você concorda incondicionalmente em estar vinculado a estes Termos de Serviço. Se não concordar, não utilize nossos serviços."],
        },
        {
          heading: "2. Todas as Vendas São Absolutas e Definitivas",
          paras: [
            "Todos os pagamentos feitos à Nexus Global Enterprise são não reembolsáveis e irreversíveis. Uma vez que o pagamento foi cobrado após a confirmação do escopo por escrito, nenhum reembolso, estorno ou crédito parcial será emitido sob quaisquer circunstâncias, incluindo mas não se limitando a:",
            "Disputas iniciadas por meio de estornos de processadores de pagamento sem comunicação prévia por escrito à Nexus Global Enterprise serão contestadas na íntegra.",
          ],
          items: [
            "Mudança de opinião após a confirmação do escopo.",
            "Insatisfação com a velocidade de entrega dentro da janela operacional acordada.",
            "Descoberta de problemas técnicos adicionais fora do escopo confirmado.",
            "Incapacidade de acessar ou operar a infraestrutura entregue.",
            "Interrupções de plataformas de terceiros (Vercel, Supabase, GitHub ou similares).",
          ],
        },
        {
          heading: "3. Escudo de Entrega de Infraestrutura de Produção \"No Estado Em Que Se Encontra\"",
          paras: [
            "Todos os entregáveis — incluindo mas não se limitando a repositórios migrados, instâncias de banco de dados provisionadas, pipelines de implantação configurados e qualquer documentação arquitetônica escrita — são entregues \"No Estado Em Que Se Encontram\" no momento da transferência.",
            "A Nexus Global Enterprise garante que todos os itens do escopo confirmado foram concluídos e validados conforme as especificações acordadas por escrito antes do pagamento. Além disso, nenhuma garantia adicional, expressa ou implícita, é fornecida.",
            "O cliente assume plena responsabilidade operacional pela infraestrutura entregue após a transferência. A Nexus Global Enterprise não assume responsabilidade por degradação, interrupções, perda de dados ou falhas de segurança que ocorram após o fechamento da janela de entrega.",
          ],
        },
        {
          heading: "4. Escopo do Trabalho e Janelas de Entrega",
          paras: [
            "Todo o trabalho é delimitado e confirmado por escrito antes de qualquer pagamento ser solicitado. O documento de escopo confirmado constitui a definição completa e integral dos entregáveis. Nenhum acordo verbal, mensagem informal de chat ou expectativa implícita amplia o escopo.",
            "As janelas de entrega (24 horas, 48 horas, 72 horas ou sprint personalizado) começam após a liberação do pagamento. Atrasos causados por restrições de acesso do cliente, fornecimento tardio de credenciais ou interrupções de plataformas de terceiros não constituem violação do nosso compromisso de entrega.",
          ],
        },
        {
          heading: "5. Termos do Contrato de Supervisão de Produção",
          paras: [
            "Os clientes de retenção mensal recebem uma (1) janela de auditoria técnica agendada por semana civil, realizada dentro de um horário fixo confirmado na ativação da retenção. Isso constitui a totalidade do serviço agendado.",
            "As intervenções de infraestrutura solicitadas fora da janela semanal designada são classificadas como trabalho de prioridade de emergência fora do horário e são cobradas separadamente a R$150 USD por hora, com fatura imediata. A cobrança da retenção é mensal, antecipada e não reembolsável para qualquer mês parcial de serviço.",
          ],
        },
        {
          heading: "6. Contratos de Co-Arquitetura Personalizados",
          paras: ["Os contratos de Co-Arquitetura Personalizada exigem a execução de um Marco de Liberação de Responsabilidade Mútua antes do início. Este documento define obrigações compartilhadas, propriedade intelectual, termos de confidencialidade e limites de responsabilidade específicos do contrato. Nenhum trabalho de Co-Arquitetura começa sem aprovação legal completa de ambas as partes."],
        },
        {
          heading: "7. Propriedade Intelectual",
          paras: ["Após o recebimento do pagamento final, o cliente recebe a propriedade total de todo o código personalizado, configurações e ativos de infraestrutura entregues dentro do escopo confirmado. A Nexus Global Enterprise não retém nenhuma reivindicação sobre repositórios, bancos de dados ou pipelines de implantação do cliente após a transferência. A Nexus Global Enterprise retém o direito de referenciar contratos em materiais de marketing de forma anonimizada e não identificável, salvo acordo contrário por escrito."],
        },
        {
          heading: "8. Limitação de Responsabilidade",
          paras: ["Na máxima extensão permitida pela lei aplicável, a Nexus Global Enterprise não será responsável por quaisquer danos indiretos, incidentais, consequentes, punitivos ou especiais decorrentes do uso ou da impossibilidade de usar nossos serviços — incluindo receita perdida, perda de dados ou interrupção dos negócios. Nossa responsabilidade total agregada não excederá o valor total pago pelo cliente pelo contrato específico que deu origem à reivindicação."],
        },
        {
          heading: "9. Lei Aplicável",
          paras: ["Estes Termos são regidos pelas leis da jurisdição em que a Nexus Global Enterprise está registrada. Quaisquer disputas serão resolvidas por arbitragem vinculante perante um árbitro de mútuo acordo, com cada parte arcando com seus próprios custos legais."],
        },
        {
          heading: "10. Modificações",
          paras: ["A Nexus Global Enterprise reserva o direito de atualizar estes Termos a qualquer momento. Os Termos atualizados entram em vigor na publicação nesta URL. O uso continuado de nossos serviços após a publicação constitui aceitação."],
        },
      ],
      contactNote: "Dúvidas sobre estes Termos? Entre em contato em info@nexusge.com. Respondemos a todas as consultas legais em 48 horas úteis.",
    },
    privacy: {
      title: "Política de Privacidade",
      subtitle: "Linguagem clara. Sem obscuridade jurídica. Aqui está exatamente quais dados coletamos, por que os coletamos e o que fazemos — e não fazemos — com eles.",
      dataTable: {
        cols: ["Tipo de Dado", "Por Que Coletamos", "Retenção"],
        rows: [
          ["Nome e E-mail", "Para identificar sua solicitação e comunicar escopo, faturamento e confirmações de entrega.", "Duração do contrato + 90 dias"],
          ["Telefone (opcional)", "Fornecido voluntariamente para comunicação urgente, se solicitado.", "Duração do contrato"],
          ["Descrição do escopo do projeto", "Para auditar seu aplicativo, definir um escopo escrito e entregar o trabalho confirmado.", "Duração do contrato + 90 dias"],
          ["Nível de serviço selecionado", "Para direcionar sua solicitação ao fluxo de trabalho de entrega correto.", "Duração do contrato"],
          ["Endereço IP (log do servidor)", "Registro padrão de solicitações do lado do servidor via infraestrutura Vercel. Não usado para rastreamento.", "30 dias, rotação automática"],
        ],
      },
      sections: [
        {
          heading: "1. Quem Somos",
          paras: ["A Nexus Global Enterprise é uma empresa de engenharia de infraestrutura B2B que migra aplicativos gerados por IA para implantações de nível empresarial. Operamos este site em nexusge.com e aceitamos solicitações de clientes pelos formulários aqui hospedados. Se tiver dúvidas sobre esta política, envie um e-mail para info@nexusge.com."],
        },
        {
          heading: "2. Quais Dados Coletamos",
          paras: ["Coletamos apenas o estritamente necessário para prestar nossos serviços."],
        },
        {
          heading: "3. O Que Não Coletamos",
          paras: [],
          items: [
            "Não usamos rastreadores de publicidade, rastreamento de pixels ou scripts de análise de terceiros.",
            "Não criamos perfis de usuário ou conjuntos de dados comportamentais.",
            "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing.",
            "Não usamos gravação de sessões, mapas de calor ou software de rastreamento de conversões.",
            "Não exigimos criação de conta, senhas ou login social.",
          ],
        },
        {
          heading: "4. Como Armazenamos Seus Dados",
          paras: [
            "Os envios do formulário de intake são armazenados em um banco de dados Supabase PostgreSQL hospedado nos Estados Unidos (região us-east-1). O acesso é restrito às credenciais de função de serviço usadas exclusivamente pela nossa rota de API do lado do servidor. Nenhum código do lado do cliente pode ler os dados de envio. As políticas de Row-Level Security bloqueiam todo acesso de leitura anônimo.",
            "As notificações de e-mail acionadas pelos envios do formulário são entregues via Resend. O Resend processa seu nome e e-mail para direcionar a notificação para nossa caixa de entrada. Nenhum dado de envio é armazenado pelo Resend além dos logs padrão de entrega de e-mail, que expiram conforme sua própria política de retenção.",
          ],
        },
        {
          heading: "5. Cookies e Armazenamento do Navegador",
          paras: ["A Vercel, nosso provedor de hospedagem, pode definir cookies de nível de infraestrutura para roteamento e desempenho. Esses são estritamente técnicos, não contêm informações de identificação pessoal e estão fora do nosso controle. Você pode inspecioná-los e limpá-los a qualquer momento pelas ferramentas de desenvolvimento do seu navegador."],
          cookieBox: {
            title: "Política Zero Cookies",
            body:  "Este site não define cookies próprios, cookies de rastreamento nem armazenamento persistente do navegador. Nenhum banner de consentimento de cookies é necessário porque não há nada para consentir.",
          },
        },
        {
          heading: "6. Protocolo de Minimização de Dados",
          paras: [
            "Aplicamos um padrão de minimização estrito: se não precisamos de um dado para entregar seu escopo confirmado, não o solicitamos, armazenamos nem processamos.",
            "Após 90 dias do fechamento do contrato, os registros de envio do formulário são permanentemente excluídos do nosso banco de dados. Nenhuma cópia de arquivo é mantida. Os registros de threads de e-mail permanecem em nossa caixa de entrada apenas enquanto operacionalmente necessário e são regidos pelas configurações de retenção padrão do nosso provedor de e-mail.",
          ],
        },
        {
          heading: "7. Seus Direitos",
          paras: [
            "Independentemente de sua jurisdição, você pode a qualquer momento:",
            "Para exercer qualquer um desses direitos, envie um e-mail para info@nexusge.com com o assunto \"Solicitação de Dados\". Responderemos em 5 dias úteis.",
          ],
          items: [
            "Solicitar uma cópia de quaisquer dados pessoais que tenhamos sobre você.",
            "Solicitar a correção de dados imprecisos.",
            "Solicitar a exclusão permanente do seu registro de envio.",
            "Retirar o consentimento para qualquer comunicação em andamento.",
          ],
        },
        {
          heading: "8. Alterações nesta Política",
          paras: ["Se alterarmos materialmente como tratamos dados pessoais, atualizaremos a data de vigência no topo desta página. Não aplicaremos retroativamente proteções mais fracas aos dados coletados sob uma versão anterior desta política."],
        },
      ],
      contactNote: "Dúvidas sobre privacidade? Contate info@nexusge.com. Não encaminhamos consultas de privacidade por sistemas de tickets de terceiros.",
    },
    refunds: {
      title: "Política de Reembolsos",
      alert: "Todas as vendas são absolutas e definitivas. Nenhum reembolso, crédito ou estorno é emitido sob quaisquer circunstâncias após o pagamento ter sido cobrado.",
      sections: [
        {
          heading: "1. Todas as Vendas São Absolutas e Definitivas",
          paras: ["Todos os pagamentos feitos à Nexus Global Enterprise são não reembolsáveis e irreversíveis. Uma vez que o pagamento foi cobrado após a confirmação do escopo por escrito, nenhum reembolso, estorno ou crédito parcial será emitido sob quaisquer circunstâncias, incluindo mas não se limitando a:"],
          items: [
            "Mudança de opinião após a confirmação do escopo e o pagamento.",
            "Insatisfação com a velocidade de entrega dentro da janela operacional acordada.",
            "Descoberta de problemas técnicos adicionais fora do escopo confirmado.",
            "Incapacidade de acessar, operar ou entender a infraestrutura entregue.",
            "Interrupções de plataformas de terceiros (Vercel, Supabase, GitHub ou qualquer outro provedor).",
            "Encerramento do negócio, pivô ou abandono do projeto após a entrega.",
            "Não fornecer as credenciais, acesso ao repositório ou variáveis de ambiente necessárias dentro da janela de entrega.",
          ],
        },
        {
          heading: "2. O Pagamento é Cobrado Somente Após a Confirmação do Escopo",
          paras: [
            "Nunca cobramos o pagamento antes de entregar um documento de escopo escrito. O documento de escopo detalha exatamente o que será entregue, a qual custo fixo e dentro de qual janela de entrega confirmada. Ao prosseguir com o pagamento, você reconhece explicitamente ter revisado e aprovado o escopo.",
            "Se você tiver alguma preocupação sobre o escopo antes do pagamento, esse é o momento adequado para levantá-la. Uma vez enviado o pagamento, o escopo é bloqueado e o trabalho começa imediatamente.",
          ],
        },
        {
          heading: "3. Escudo de Entrega de Infraestrutura \"No Estado Em Que Se Encontra\"",
          paras: [
            "Todos os entregáveis são transferidos \"No Estado Em Que Se Encontram\" no momento da entrega do escopo confirmado. A Nexus Global Enterprise garante que cada item listado no documento de escopo escrito foi concluído e validado no momento da transferência.",
            "Além desta garantia explícita, nenhuma garantia adicional — expressa ou implícita — é fornecida. O cliente assume plena responsabilidade operacional por toda a infraestrutura entregue após a transferência.",
            "Problemas que surjam após o fechamento da janela de entrega — incluindo mas não se limitando a degradação de infraestrutura, mudanças em APIs de terceiros, atualizações de plataformas ou novos bugs introduzidos pelo cliente — estão fora do escopo do contrato original e não são motivo de reembolso.",
          ],
        },
        {
          heading: "4. Disputas de Escopo",
          paras: [
            "Se você acreditar que um item do escopo confirmado não foi entregue, deverá levantar a disputa por escrito para info@nexusge.com dentro de 5 dias úteis após a notificação de entrega.",
            "Disputas levantadas fora deste prazo não serão consideradas. Se uma omissão de escopo legítima for confirmada por nossa parte, completaremos o entregável ausente sem custo adicional. Reembolsos monetários não estão disponíveis sob nenhum cenário, incluindo disputas de escopo confirmadas.",
          ],
        },
        {
          heading: "5. Estornos e Disputas de Pagamento",
          paras: [
            "Os estornos iniciados por meio de processadores de pagamento (Stripe, PayPal, redes de cartão de crédito) sem comunicação prévia por escrito à Nexus Global Enterprise serão contestados na íntegra com toda a documentação disponível.",
            "Mantemos registros completos de todas as confirmações de escopo, carimbos de data/hora de entrega e comunicações com clientes. Estornos injustificados serão reportados aos órgãos de crédito relevantes e redes de pagamento onde permitido pela lei aplicável.",
          ],
        },
        {
          heading: "6. Cancelamento da Retenção",
          paras: ["Os contratos de retenção mensal podem ser cancelados a qualquer momento com aviso por escrito. O cancelamento entra em vigor no final do ciclo de faturamento atual. Nenhum reembolso parcial é emitido por dias não utilizados dentro de um período de faturamento. Todas as taxas de retenção cobradas para o ciclo de faturamento atual são não reembolsáveis no cancelamento."],
        },
        {
          heading: "7. Dúvidas",
          paras: ["Dúvidas sobre esta política devem ser direcionadas para info@nexusge.com com o assunto \"Consulta sobre Política de Reembolsos\". Respondemos toda a correspondência legal em 48 horas úteis."],
        },
      ],
      relatedLabel: "Políticas Relacionadas",
      contactNote:  "Dúvidas? Envie um e-mail para info@nexusge.com com o assunto \"Consulta sobre Política de Reembolsos\".",
    },
    footer: {
      home:      "Início",
      blog:      "Blog",
      terms:     "Termos de Serviço",
      privacy:   "Política de Privacidade",
      copyright: "Nexus Global Enterprise. Todos os direitos reservados.",
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
