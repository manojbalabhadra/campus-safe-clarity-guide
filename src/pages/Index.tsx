import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReportForm from "@/components/ReportForm";
import TrackingSection from "@/components/TrackingSection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ReportForm />
      <TrackingSection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
