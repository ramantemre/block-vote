import Link from "next/link";

export default function Main() {
  return (
    <div className="m-auto">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Link href={"/voter"}>
            <h2>Voter: 4</h2>
          </Link>
        </div>
        <div>
          <Link href={"/candidate"}>
            <h2>Candidates: 2</h2>
          </Link>
        </div>
        <div>
          <h2>Total Votes: 3</h2>
        </div>
      </div>
    </div>
  );
}
