const BASE_URL = "http://www.ies-azarquiel.es/paco/apikl/"

export async function getTeams() {
  const response = await fetch(BASE_URL + "team")
  const json = await response.json();
  return json.teams
}