"use client";

import CustomInput from "../components/CustomInput";

export default function Voter() {
  const voterList = [
    {
      id: 1,
      name: "John",
      email: "john@yopmail.com",
      voterId: "869",
    },
    {
      id: 2,
      name: "max",
      email: "max@yopmail.com",
      voterId: "870",
    },
    {
      id: 3,
      name: "herry",
      email: "herry@yopmail.com",
      voterId: "871",
    },
    {
      id: 4,
      name: "Roy",
      email: "roy@yopmail.com",
      voterId: "872",
    },
  ];
  const formInputs = [
    {
      inputType: "text",
      inputName: "firstName",
      inputLabel: "First Name",
    },
    {
      inputType: "text",
      inputName: "lastName",
      inputLabel: "Last Name",
    },
    {
      inputType: "email",
      inputName: "email",
      inputLabel: "Email address",
    },
    {
      inputType: "text",
      inputName: "description",
      inputLabel: "Description",
    },
  ];

  const handleChange = (event: React.SyntheticEvent) => {
    console.log("on change handling ==>", event.currentTarget);
  };
  const renderInputs = () => {
    return formInputs.map((val, idx) => (
      <CustomInput
        key={idx}
        type={val.inputType as CustomInputPropType["type"]}
        name={val.inputName}
        label={val.inputLabel}
        onChange={handleChange}
        placeholder={val.inputLabel}
        textSize="small"
        className=""
      />
    ));
  };
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Voters List
      </h2>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {voterList.map((data) => (
              <div key={data.id} className="group relative">
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {data.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{data.email}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {data.voterId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Register Voter
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {renderInputs()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
