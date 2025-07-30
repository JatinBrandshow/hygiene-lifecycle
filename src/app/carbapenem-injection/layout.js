export default function CarbapenemLayout({ children }) {
  return (
    <main className="flex-grow">
      {/* Carbapenem-specific content */}
      {children}
    </main>
  );
}