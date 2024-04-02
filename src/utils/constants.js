export const INCIDENT_CATEGORY = {
  ACTIVE: "Active",
  RESOLVED: "Resolved",
};

export const INCIDENT_TYPE = {
  AUTHORIZATION: "Authorization",
  INFINITECARD: "InfiniteCard",
  APP: "App",
};

export const INCIDENT_SEVERITY = {
  MAJOR: "Major",
  MINOR: "Minor",
  CRITICAL: "Critical",
  NO_CUSTOMER: "No customer impact",
};

export const INCIDENT_SOURCE = {
  EXTERNAL: "External",
  INTERNAL: "Internal",
};

export const PRODUCTS_AFECTED = {
  APP: "App",
  AUTHORIZATION: "Authorization",
  BANKING: "Banking",
};

export const AREAS_AFFECTED = {
  MASTER: "Master",
  VISA: "Visa",
  ELO: "Elo",
  NOTHING: "",
};

export const PERFORMANCE_INDICATORS = {
  APPROVAL_RATE: "Approval Rate",
  FAILURE_RATE: "Failure Rate",
};

export const options = [
  { value: "App", label: "App" },
  { value: "Authorization", label: "Authorization" },
  { value: "Banking", label: "Banking" },
];

export const USERS = {
  MATEUS: "Mateus Henrique Pereira",
  THAIS: "Thais Menezes",
  EVERTON: "Éverton Matheus",
  GEISON: "Geison Santos",
};
