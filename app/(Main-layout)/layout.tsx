
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
