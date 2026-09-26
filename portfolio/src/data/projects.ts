export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  positioning: string;
  problem: string;
  engineeringGoals: string[];
  architecture: string[];
  keyEngineeringDecisions: string[];
  controls: string[];
  validation: string[];
  demonstrates: string[];
  repositoryUrl?: string;
  repositoryLabel: string;
};

export const projects: Project[] = [
  {
    slug: "breakwater",
    title: "Breakwater",
    subtitle: "Secure AKS Platform Blueprint",
    summary:
      "A production-oriented AKS reference architecture demonstrating infrastructure-as-code, secure identity, GitOps, policy-as-code, software supply-chain controls and SRE practices.",
    positioning:
      "Secure platform foundations from infrastructure provisioning through workload delivery.",
    problem:
      "Platform teams need secure, repeatable AKS foundations that cover identity, deployment guardrails, supply-chain checks and operational reliability without relying on ad-hoc manual steps.",
    engineeringGoals: [
      "Codify AKS, ACR, identity and Key Vault integration with reusable Terraform modules.",
      "Enforce secure workload guardrails before deployment.",
      "Keep delivery Git-native and auditable with environment-specific GitOps manifests.",
      "Include reliability and security checks as blocking CI gates.",
    ],
    architecture: [
      "Terraform modules for AKS, ACR, Key Vault, managed identity and RBAC.",
      "Helm chart for secure workload runtime defaults and observability resources.",
      "Argo CD applications for dev/prod environment reconciliation.",
      "Kyverno policies for workload, runtime and supply-chain admission controls.",
    ],
    keyEngineeringDecisions: [
      "Use GitHub OIDC workflow design for Azure authentication without long-lived client secrets.",
      "Bind Kubernetes ServiceAccount identity to Azure UAMI through workload identity federation.",
      "Model policy-as-code with positive and negative test fixtures in CI.",
      "Treat high/critical vulnerability scanning as fail-closed by default with explicit, time-bound exceptions.",
    ],
    controls: [
      "Kyverno rules for privileged containers, host namespace usage, latest tags and unapproved registries.",
      "Trivy IaC/filesystem/image scans and CycloneDX SBOM generation.",
      "Immutable image digest support in Helm deployment values.",
      "Prometheus SLI/SLO recording rules and burn-rate alert tests via promtool.",
    ],
    validation: [
      "terraform fmt/init(validate backend=false)/validate for dev and prod.",
      "tflint checks against shared Terraform lint policy.",
      "helm lint and rendered manifest checks.",
      "kyverno test and promtool test rules in CI-compatible flow.",
    ],
    demonstrates: [
      "Platform engineering foundations for AKS.",
      "Secure delivery and policy enforcement discipline.",
      "Operational reliability thinking with measurable SLOs.",
    ],
    repositoryUrl: "https://github.com/Lawrencechew/breakwater",
    repositoryLabel: "View repository",
  },
  {
    slug: "slipway",
    title: "Slipway",
    subtitle: "Git-native Golden Paths for Platform Engineering",
    summary:
      "A developer-platform reference implementation exploring self-service workflows, approval controls, governance, auditability and deterministic execution.",
    positioning:
      "How developers consume platform capabilities through a governed golden path.",
    problem:
      "Self-service delivery can fail without strong workflow controls. Slipway models deterministic planning, policy decisions, approval gates and execution evidence.",
    engineeringGoals: [
      "Model a request-to-plan-to-approval lifecycle with reproducible state transitions.",
      "Keep policy decisions deterministic and server-side enforceable.",
      "Persist governance and execution evidence for auditability.",
    ],
    architecture: [
      "FastAPI backend with PostgreSQL persistence and migration-driven schema evolution.",
      "React frontend for request submission, plan review and controlled execution.",
      "Lifecycle entities for requests, plans, policy decisions, approvals, executions and audit events.",
    ],
    keyEngineeringDecisions: [
      "Separate planning, approval and execution concerns with explicit state checks.",
      "Use deterministic fingerprints and idempotency keys for replay-safe operations.",
      "Persist both successful and failed execution receipts for traceability.",
    ],
    controls: [
      "Server-side policy and approval enforcement.",
      "Stale decision invalidation when inputs change.",
      "Execution immutability via API boundaries.",
    ],
    validation: [
      "Backend tests for policy, approval, execution and audit flows.",
      "Migration checks and frontend production build validation.",
      "CI-backed PostgreSQL lifecycle tests.",
    ],
    demonstrates: [
      "Internal developer platform workflow design.",
      "Governance with deterministic control-state logic.",
      "Developer experience balanced with operational controls.",
    ],
    repositoryUrl: "https://github.com/Lawrencechew/slipway",
    repositoryLabel: "View repository",
  },
  {
    slug: "regbridge",
    title: "RegBridge",
    subtitle: "Regulatory Workflow Platform",
    summary:
      "A multi-tenant regulatory evidence workflow platform designed around deterministic processing, traceability and secure organisation-scoped workflows.",
    positioning: "Private Product · Architecture & Engineering Case Study.",
    problem:
      "Regulatory workflows often degrade into low-traceability handoffs and inconsistent approval logic. RegBridge focuses on deterministic workflow state, auditability and tenant-safe boundaries.",
    engineeringGoals: [
      "Design secure organisation-scoped workflow boundaries.",
      "Guarantee deterministic lifecycle transitions with idempotent operations.",
      "Support operational visibility and evidence-first regulatory processing.",
    ],
    architecture: [
      "React/Vite frontend, FastAPI backend and PostgreSQL persistence.",
      "Microsoft Entra-backed identity integration patterns.",
      "Server-side workflow controls with optimistic concurrency and audit trails.",
    ],
    keyEngineeringDecisions: [
      "Keep workflow critical paths deterministic and explicit.",
      "Prioritise idempotency and traceable decision surfaces.",
      "Use strong role and tenancy boundaries for data safety.",
    ],
    controls: [
      "Organisation-scoped RBAC patterns.",
      "Server-side session and workflow state validation.",
      "Auditability and lifecycle trace reconstruction.",
    ],
    validation: [
      "Case-study level architecture and engineering validation only.",
      "No public source code or live demo claims on this site.",
    ],
    demonstrates: [
      "Product-level workflow architecture.",
      "Secure multi-tenant system design.",
      "Engineering communication without exposing proprietary implementation.",
    ],
    repositoryLabel: "Private source code",
  },
];

export const featuredProjectOrder = ["breakwater", "slipway", "regbridge"] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
