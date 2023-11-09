import Image from "next/image";

export const Home = () => {
  return (
    <main className="container">
      <section className="grid grid-flow-row justify-center">
        <div className="p-8">
          <h2 className="text-lg">Block-Vote</h2>
        </div>
      </section>
      <section className="grid grid-flow-col justify-around">
        <div className="p-8">
          <h2 className="text-lg">company login</h2>
        </div>
        <div className="p-8">
          <h2 className="text-lg">voter login</h2>
        </div>
      </section>
    </main>
  );
};
