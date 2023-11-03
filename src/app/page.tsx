import { Connect } from "@/components/Connect";
import { Connected } from "@/components/Connected";
import { Home } from "@/components/Home";
import Login from "@/components/Login";
import { Signup } from "@/components/Signup";

export default function Page() {
  return (
    <div>
      <Home />
      <h2>Connect to wallet</h2>
      <Connect />
      <Connected>
        <h2>Connection Esatblished</h2>
      </Connected>
      <hr />
      <Login />
      {/* <hr />
      <Signup /> */}
    </div>
  );
}
