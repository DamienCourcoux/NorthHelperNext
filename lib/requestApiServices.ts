const BASE_URL = "https://north-helper.vercel.app";

// all services
export const getServices = async () => {
    const response = await fetch(`${BASE_URL}/api/services`);
    const json = await response.json();
    return json;
}

// single service
export const getService = async (serviceId: string) => {
    const response = await fetch(`${BASE_URL}/api/services/${serviceId}`);
    const json = await response.json();
    if (json) return json;
    return {};
}

// posting a new service
export async function addService(formData: Object) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/services`, Options);
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

// update a new service
export async function updateService(serviceId: string, formData: Object) {
    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    const response = await fetch(`${BASE_URL}/api/services/${serviceId}`, Options);
    const json = await response.json();
    return json;
}

// delete service
export async function deleteService(serviceId: string) {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(`${BASE_URL}/api/services/${serviceId}`, Options);
    const json = await response.json();
    return json;
}