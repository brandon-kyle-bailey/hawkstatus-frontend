export async function getServiceChecks(token: string) {
    const res = await fetch(`${process.env.API_URL}/service-check/list`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    });
    return await res.json();
}