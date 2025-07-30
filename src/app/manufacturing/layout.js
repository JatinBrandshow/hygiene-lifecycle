import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata = {
  title: "Manufacturing",
  description: "Manufacturing page description",
};

export default function ManufacturingLayout({ children }) {
  return (
    <div className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
      {children}
    </div>
  );
}