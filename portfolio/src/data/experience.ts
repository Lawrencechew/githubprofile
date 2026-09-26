export type RoleEntry = {
  role: string;
  organisation: string;
  period: string;
  highlights: string[];
};

export const currentRoles: RoleEntry[] = [
  {
    role: "DevSecOps Engineer",
    organisation: "Maritime and Port Authority of Singapore",
    period: "2026 - Present",
    highlights: [
      "Azure DevOps platform administration and CI/CD operations.",
      "AKS operations, upgrades and Kubernetes workload troubleshooting.",
      "Managed Identity, Key Vault and Secret Store CSI Driver integration.",
      "Platform observability with Azure Monitor, Managed Prometheus and Grafana.",
      "Software and supply-chain security controls, SBOM and vulnerability management.",
      "Operational automation with Python, Bash and PowerShell.",
    ],
  },
  {
    role: "Digital Twin Engineer",
    organisation: "Maritime and Port Authority of Singapore",
    period: "Oct 2024 - 2026",
    highlights: [
      "Built and operated digital twin components using Unity 3D and ArcGIS Enterprise.",
      "Worked across Go services and real-time operational data integration patterns.",
      "Contributed to platform reliability across PostgreSQL/PostGIS, Redis, Kafka and MQTT based flows.",
    ],
  },
  {
    role: "Geospatial Engineer",
    organisation: "Maritime and Port Authority of Singapore",
    period: "Jun 2022 - Sep 2024",
    highlights: [
      "Developed geospatial processing and data integration workflows for operational use cases.",
      "Worked on GIS platform engineering concerns with ArcGIS and cloud-native service components.",
    ],
  },
  {
    role: "System Analyst",
    organisation: "Maritime and Port Authority of Singapore",
    period: "Jun 2021 - May 2022",
    highlights: [
      "Supported system operations, integrations and technical analysis across enterprise platforms.",
      "Built foundations for later platform and cloud engineering responsibilities.",
    ],
  },
];

export const earlierExperience: RoleEntry[] = [
  {
    role: "Digital Planning Lab Intern",
    organisation: "Urban Redevelopment Authority",
    period: "Earlier experience",
    highlights: ["GIS-oriented automation and geospatial workflow support."],
  },
  {
    role: "Research Intern",
    organisation: "National University of Singapore",
    period: "Earlier experience",
    highlights: ["Research and analytics support for applied technical studies."],
  },
];
