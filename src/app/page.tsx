import { Connect, Connected } from "@/lib/wagmi";
import { Home } from "./components/Home";

export default function Page() {
  return (
    <div>
      <h2>Connect to wallet</h2>
      <Connect />
      <Connected>
        <h2>Connection Esatblished</h2>
      </Connected>
      <hr />
      <Home />
    </div>
  );
}
