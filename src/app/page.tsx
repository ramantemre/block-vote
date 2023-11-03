import { Connect } from "@/components/Connect";
import { Connected } from "@/components/Connected";

export default function Home() {
  return (
    <div>
      <div>Home Page</div>
      <hr />
      <h2>Connect to wallet</h2>
      <Connect />
      <Connected>
        <h2>Connection Esatblished</h2>
      </Connected>
    </div>
  );
}
