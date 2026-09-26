export type SkillGroup = {
  name: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Cloud & Platform",
    skills: ["Azure", "AKS", "Kubernetes", "Docker", "Helm", "Key Vault", "Managed Identity"],
  },
  {
    name: "DevOps & GitOps",
    skills: ["Azure DevOps", "GitHub Actions", "Git", "Argo CD", "CI/CD"],
  },
  {
    name: "Infrastructure & Automation",
    skills: ["Terraform", "Python", "Bash", "PowerShell"],
  },
  {
    name: "Security",
    skills: ["Checkmarx", "SAST", "SCA / OSA", "SBOM", "Trivy", "Kyverno", "Secure SDLC"],
  },
  {
    name: "Observability & SRE",
    skills: ["Grafana", "Prometheus", "Azure Monitor", "Log Analytics", "SLI/SLO", "Incident Response"],
  },
  {
    name: "Software Engineering",
    skills: ["Go", "Python", "Java", "SQL", "PostgreSQL/PostGIS", "Kafka", "Redis", "MQTT"],
  },
];
