import HeaderPrimary from "@/components/Header/FirstHeader";
import HeaderSecondary from "@/components/Header/SecondHeader";
import Table from "@/components/Table/Table";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeaderPrimary />
      <HeaderSecondary content="default"/>
      <Table />
      <Footer />
    </div>
    
  );
}
