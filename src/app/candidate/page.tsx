export default function Candidate() {
  const candidateList = [
    {
      id: 1,
      name: "BJP",
    },
    {
      id: 2,
      name: "Congress",
    },
  ];
  return (
    <div>
      <h2>Candidates List</h2>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {candidateList.map((data) => (
              <div key={data.id} className="group relative">
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {data.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Cast your Vote</p>
                  </div>
                  <button className="text-sm font-medium text-gray-900">
                    Vote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
