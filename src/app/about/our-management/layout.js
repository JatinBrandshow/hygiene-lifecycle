export default function ManagementLayout({ children }) {
  return (
    <section className="management-layout">
      {/* Optional: Add management-specific header/navigation here */}
      {children}
      {/* Optional: Add management-specific footer here */}
    </section>
  );
}