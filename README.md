# Botify AI 🚀
> An enterprise-grade, multi-tenant AI automation & conversational sales platform powered by n8n workflows, Meta WhatsApp Cloud API, and a realtime interactive dashboard.

---

## 📌 Overview
**Botify AI** integrates intelligent conversation pipelines with a management dashboard to automate customer support, qualify leads, and close sales around the clock. By combining event-driven workflow automation with a responsive user interface, it bridges incoming customer communications with actionable business operations.

---

## 🏗️ System Architecture

```text
                       [ Customer (WhatsApp) ]
                                  │
                                  ▼  (Webhook Event)
                      [ Meta WhatsApp Cloud API ]
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │   n8n Automation Engine   │
                    └─────────────┬─────────────┘
                                  │
            ┌─────────────────────┴─────────────────────┐
            ▼                                           ▼
  [ LLM Inference & Agents ]                 [ PostgreSQL / Supabase ]
  - Groq / Gemini / OpenAI                   - Multi-tenant data
  - Prompt chains & Tool calling             - Chat logs & Leads
            │                                           ▲
            ▼                                           │
  [ Dynamic WhatsApp Response ]                         │ (Realtime Sync)
                                                        │
                                                        ▼
                                            [ React Admin Dashboard ]
                                            - Analytics & Conversion
                                            - Tenant Management
✨ Key Features
Multi-Tenant Architecture: Isolated environments and custom configurations for distinct business accounts.

Event-Driven AI Automation: Incoming message processing, context extraction, and dynamic automated responses via n8n.

WhatsApp Cloud Integration: End-to-end messaging pipeline utilizing Meta's official API for scale and reliability.

Context-Aware LLM Inference: Intent identification, prompt chain evaluation, and automated tool execution.

Realtime Dashboard: Comprehensive metrics tracking active sessions, conversion funnels, and agent intervention states.

Human Escalation Handling: Seamless handoff triggers from automated agents to human operators when edge cases arise.

🛠️ Tech Stack
Automation & AI Engine
Orchestration: n8n (Self-hosted / Cloud)

AI Models: Groq / Google Gemini / OpenAI APIs

Channels: Meta WhatsApp Cloud API (Webhooks)

Dashboard & Frontend
Framework: React.js / Vite

Styling & Components: Tailwind CSS, Lucide Icons

Backend & Storage
Database: PostgreSQL / Supabase

Security: Row Level Security (RLS) policies & encrypted environment configs

📁 Repository Structure
Plaintext
├── automation/               # n8n workflows and JSON orchestration templates
│   ├── workflows/            # Exported pipeline JSONs (WhatsApp handler, Lead parser)
│   └── README.md             # Specific workflow import instructions
├── dashboard/                # Frontend web application source code
│   ├── src/                  # React components, pages, and hooks
│   ├── package.json
│   └── vite.config.js
└── docs/                     # Architectural diagrams, schema definitions, and assets
🚀 Setup & Deployment
1. Automation Engine Setup (/automation)
Import the workflow templates from /automation/workflows/ into your n8n instance.

Configure credentials in n8n for:

Meta WhatsApp Cloud API (Token, Phone Number ID)

LLM Provider (Groq / Gemini API Keys)

Supabase / Database access (API URL & Service Key)

Set your Production Webhook URL inside the Meta Developer Console.

2. Dashboard Setup (/dashboard)
Navigate to the dashboard directory:

Bash
cd dashboard
Install dependencies:

Bash
npm install
Create a .env file based on .env.example:

Bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
Start the local development server:

Bash
npm run dev
🔒 Security Best Practices
Credential Decoupling: Sensitive credentials, tokens, and keys are strictly managed via environment variables.

Data Segregation: Database tables employ Row Level Security to prevent unauthorized access across tenants.

Payload Validation: Verification protocols enabled for all incoming webhook signatures.

👨‍💻 Author
Youssef Mohamed

GitHub: @yst2009
