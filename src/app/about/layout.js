
import "../../styles/globals.css";



export const metadata = {
  title: "About Page",
  description: "About our company",
};

export default function AboutLayout({ children }) {
  return (
    <div className="about-layout-specific-styles">
      {/* Optional: Add about page specific components */}
      {children}
    </div>
  );
}
