export const fields = {
  title: {
    label: "Title",
    type: "text",
    name: "title",
    description:
      "Give a short description of what is happening. If you'd like to, you can leave it blank and change it later",
  },
  type: {
    label: "Type",
    type: "select",
    name: "type",
    isMult: false,
    dataPath: "types",
  },
  severity: {
    name: "severity",
    type: "select",
    isMult: false,
    label: "Incident Severity",
    options: [
      { label: "No Customer Impact", value: "No Customer Impact" },
      { label: "Minor", value: "Minor" },
      { label: "Major", value: "Major" },
      { label: "Critical", value: "Critical" },
    ],
    isStatic: true,
    footerNote:
      "Issues with low impact, which can usually be handled within working hours. Most customers are unlikely to notice any problems. Examples include a slight drop in application performance.",
  },
  summary: {
    name: "summary",
    type: "text",
    label: "Summary",
    description:
      "Your current understanding of what happened in the incident, and the impact it had. It's fine to go into detail here.",
  },
  impact: {
    name: "impact",
    type: "text",
    label: "Impact",
    description:
      "How the incident impacted the company? And the customers? How many transactions/users were affected? Was there financial loss? Describe it.",
  },
  source_of_the_incident: {
    name: "source_of_the_incident",
    label: "Incident Source",
    type: "select",
    isMult: false,
    isStatic: true,
    options: [
      { label: "External", value: "External" },
      { label: "Internal", value: "Internal" },
    ],
  },
  products_affected: {
    name: "products_affected",
    label: "Products Affected",
    type: "select",
    isMult: true,
    dataPath: "products",
  },
  areas_affected: {
    name: "areas_affected",
    label: "Areas Affected",
    type: "select",
    isMult: true,
    dataPath: "areas",
  },
  performance_indicators: {
    name: "performance_indicators",
    label: "Performance Indicators",
    type: "select",
    isMult: true,
    dataPath: "performanceIndicators",
  },
  impact_started_at: {
    name: "impact_started_at",
    type: "datetime",
    label: "Impact started at",
  },
  thread_on_slack: {
    name: "thread_on_slack",
    type: "text",
    label: "Slack thread",
    description: "Link for a thread on Slack with the topic.",
  },
  incident_lead: {
    label: "Incident Lead",
    type: "select",
    name: "lead",
    dataPath: "users",
    isMult: false,
    description:
      "The person currently coordinating the incident, tasked with driving it to resolution and ensuring clear internal and external communication with stakeholders and customers.",
  },
  // status: {
  //   label: "Status",
  //   type: 'radio',
  //   label: "status",
  //   footerNote:
  // },
};
