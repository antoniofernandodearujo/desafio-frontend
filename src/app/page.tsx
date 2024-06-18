
import Banner from "@/components/Banner/Banner";
import HeaderPrimary from "@/components/Header/FirstHeader";
import HeaderSecondary from "@/components/Header/SecondHeader";
import Table from "@/components/Table/Table";
import RegisterForm from "@/components/Register/Register";

export default function Home() {
  return (
    <div>
      <HeaderPrimary />
      <HeaderSecondary />
      <Banner />
      <Table />
      <RegisterForm />
    </div>
    
  );
}
