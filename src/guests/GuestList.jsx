import { getGuests } from "../api/guests";
import { useState, useEffect } from "react";

export default function GuestList({ setGuestId }) {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const syncGuests = async () => {
      const data = await getGuests();
      setGuests(data);
    };
    syncGuests();
  }, []);

  return (
    <>
      <h1>GuestList</h1>
      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thread>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id} onClick={() => setGuestId(guest.id)}>
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Select a guest to find out more</p>
    </>
  );
}
