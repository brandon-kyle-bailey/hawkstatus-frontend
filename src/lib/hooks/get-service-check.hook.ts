export async function getServiceCheck(token: string, serviceCheckId: string) {
    const res = await fetch(`${process.env.API_URL}/service-check?${new URLSearchParams({ id: serviceCheckId })}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    });
    return await res.json();
}
