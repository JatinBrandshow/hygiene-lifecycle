export default function GlobalPresenceLayout({ children }) {
  return (
    <main className="flex-grow">
      {/* Global Presence-specific content */}
      {children}
    </main>
  );
}