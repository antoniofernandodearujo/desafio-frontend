import HeaderPrimary from "@/components/Header/FirstHeader";
import HeaderSecondary from "@/components/Header/SecondHeader";
import RegisterForm from "@/components/Register/Register";

export default function UserNew() {
  return (
    <div>
      <HeaderPrimary />
      <HeaderSecondary content="new_user"/>
      <RegisterForm />
    </div>
  );
}
