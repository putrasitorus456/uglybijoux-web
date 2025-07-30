// lib/guest.ts
export function getGuestId() {
  if (typeof window !== 'undefined') {
    let guestId = localStorage.getItem('guest_id');
    if (!guestId) {
      guestId = crypto.randomUUID();
      localStorage.setItem('guest_id', guestId);
    }
    return guestId;
  }
  return null;
}