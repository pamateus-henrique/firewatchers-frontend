import { fields } from "./fields";

const modals = {
  declare_incident: {
    title: "Declare Incident",
    fields: [
      fields.title,
      fields.type,
      fields.severity,
      fields.summary,
      fields.impact,
      fields.source_of_the_incident,
      fields.products_affected,
      fields.areas_affected,
      fields.performance_indicators,
      fields.impact_started_at,
      fields.thread_on_slack,
    ],
    globalOptionsEndpoint: "/api/v1/utils/types",
    endpoint: "/api/v1/incidents",
    method: "POST",
  },
  update_lead: {
    title: "Edit Role Assignments",
    fields: [fields.incident_lead],
    globalOptionsEndpoint: "/api/v1/incidents/${id}/actions/update-lead",
    endpoint: "/api/v1/incidents/${id}/actions",
    method: "PATCH",
  },
  update_severity: {
    title: "Update Severity",
    fields: [fields.severity],
    endpoint: "/api/v1/incidents/${id}/actions/update-severity",
    method: "PATCH",
  },
};

export default modals;
