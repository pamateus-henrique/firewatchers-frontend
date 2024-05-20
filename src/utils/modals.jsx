const modals = {
  declare_incident: {
    title: "Declare Incident",
    fields: [
      {
        label: "Title",
        type: "text",
        name: "title",
        description:
          "Give a short description of what is happening. If you'd like to, you can leave it blank and change it later",
      },
      {
        label: "Type",
        type: "select",
        name: "type",
        isMult: false,
        dataPath: "types",
      },
      {
        name: "severity",
        type: "select",
        isMult: false,
        label: "Incident Severity",
        options: [
          { label: "No Costumer Impact", value: "No Costumer Impact" },
          { label: "Minor", value: "Minor" },
          { label: "Major", value: "Major" },
          { label: "Critical", value: "Critical" },
        ],
        isStatic: true,
        footerNote:
          "Issues with low impact, which can usually be handled within working hours. Most customers are unlikely to notice any problems. Examples include a slight drop in application performance.",
      },
      {
        name: "summary",
        type: "text",
        label: "Summary",
        description:
          "Your current understanding of what happened in the incident, and the impact it had. It's fine to go into detail here.",
      },
      {
        name: "impact",
        type: "text",
        label: "Impact",
        description:
          "How the incident impacted the company? And the customers? How many transactions/users were affected? Was there financial loss? Describe it.",
      },
      {
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
      {
        name: "products_affected",
        label: "Products Affected",
        type: "select",
        isMult: true,
        dataPath: "products",
      },
      {
        name: "areas_affected",
        label: "Areas Affected",
        type: "select",
        isMult: true,
        dataPath: "areas",
      },
      {
        name: "peformance_indicators",
        label: "Peformance Indicators",
        type: "select",
        isMult: true,
        dataPath: "performanceIndicators",
      },
      {
        name: "impact_started_at",
        type: "datetime",
        label: "Impact started at",
      },
      {
        name: "thread_on_slack",
        type: "text",
        label: "Slack thread",
        description: "Link for a thread on Slack with the topic.",
      },
    ],
    globalOptionsEndpoint: "/api/v1/utils/types",
    endpoint: "/api/v1/incidents",
    method: "POST",
  },
  update_lead: {
    title: "Edit Role Assignments",
    fields: [
      {
        label: "Incident Lead",
        type: "select",
        name: "lead",
        dataPath: "users",
        isMult: false,
        description:
          "The person currently coordinating the incident, tasked with driving it to resolution and ensuring clear internal and external communication with stakeholders and customers.",
      },
    ],
    globalOptionsEndpoint: "/api/v1/users/all-users",
    endpoint: "/api/v1/incidents/${id}",
    method: "PATCH",
  },
  update_severity: {
    title: "Update severity",
    fields: [
      {
        name: "severity",
        type: "select",
        isMult: false,
        label: "Incident Severity",
        options: [
          { label: "No Costumer Impact", value: "No Costumer Impact" },
          { label: "Minor", value: "Minor" },
          { label: "Major", value: "Major" },
          { label: "Critical", value: "Critical" },
        ],
        isStatic: true,
        footerNote:
          "Issues with low impact, which can usually be handled within working hours. Most customers are unlikely to notice any problems. Examples include a slight drop in application performance.",
      },
    ],
    endpoint: "/api/v1/incidents/${id}/actions/update-severity",
    method: "PATCH",
  },
};

export default modals;
