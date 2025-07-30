export default function DomesticCustomersLayout({ children }) {
  return (
    <main className="flex-grow">
      {/* Domestic Customers-specific content */}
      {children}
    </main>
  );
}