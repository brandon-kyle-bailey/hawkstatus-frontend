export async function getIncidents(token: string, serviceCheckId: string) {
    const res = await fetch(`${process.env.API_URL}/incident/list?${new URLSearchParams({ serviceCheckId })}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    });
    const result = await res.json();
    return result;
}