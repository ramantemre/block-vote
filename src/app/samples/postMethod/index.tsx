"use client";
import { useState, useEffect } from "react";

export default function FormSubmit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const submitData = { name, age };

    try {
      const res = await fetch("http://localhost:3000/api/voter", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });

      console.log(res);
      if (res.ok) {
        console.log("Yeai!");
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }
    setName("");
    setAge("");
  };

  return (
    <div className=" flex w-full flex-col items-center justify-center p-8 ">
      <h1 className=" m-4 w-full text-center text-lg font-semibold ">
        GET & POST Request in NextJS Stable App Router
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" flex w-full flex-col items-center justify-center "
      >
        <div className=" flex w-1/2 items-center justify-center gap-4 ">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter the name"
            onChange={(e) => setName(e.target.value)}
            className=" rounded border p-2 px-4 outline-none "
          />
          <input
            type="number"
            name="age"
            value={age}
            placeholder="Enter the age"
            onChange={(e) => setAge(e.target.value)}
            className=" rounded border p-2 px-4 outline-none "
          />
          <button
            type="submit"
            className=" rounded-md border-blue-500 bg-blue-500 p-2 px-4 text-white "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
