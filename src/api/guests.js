import { API } from "../constant";

export async function getGuests() {
  try {
    const response = await fetch(API + "/guests");
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getGuest(id) {
  try {
    const response = await fetch(API + "/guests/" + id);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
