"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useAlertService, useCandidateService } from "_services";

export { AddEdit };

function AddEdit({ title, candidate }: { title: string; candidate?: any }) {
  const router = useRouter();
  const alertService = useAlertService();
  const candidateService = useCandidateService();

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: candidate,
  });
  const { errors } = formState;

  const fields = {
    firstName: register("firstName", { required: "First Name is required" }),
    lastName: register("lastName", { required: "Last Name is required" }),
    emailAddress: register("emailAddress", {
      required: "Email Address is required",
    }),
    username: register("username", { required: "Username is required" }),
    password: register("password", {
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
      // password only required in add mode
      validate: (value) =>
        !candidate && !value ? "Password is required" : undefined,
    }),
  };

  async function onSubmit(data: any) {
    alertService.clear();
    try {
      // create or update candidate based on candidate prop
      let message;
      if (candidate) {
        await candidateService.update(candidate.id, data);
        message = "Candidate updated";
      } else {
        await candidateService.create(data);
        message = "Candidate added";
      }

      // redirect to candidate list with success message
      router.push("/candidates");
      alertService.success(message, true);
    } catch (error: any) {
      alertService.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{title}</h1>
      <div className="row">
        <div className="col mb-3">
          <label className="form-label">First Name</label>
          <input
            {...fields.firstName}
            type="text"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            {errors.firstName?.message?.toString()}
          </div>
        </div>
        <div className="col mb-3">
          <label className="form-label">Last Name</label>
          <input
            {...fields.lastName}
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            {errors.lastName?.message?.toString()}
          </div>
        </div>
        <div className="col mb-3">
          <label className="form-label">Email Address</label>
          <input
            {...fields.emailAddress}
            type="text"
            className={`form-control ${
              errors.emailAddress ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.emailAddress?.message?.toString()}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-3">
          <label className="form-label">Username</label>
          <input
            {...fields.username}
            type="text"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            {errors.username?.message?.toString()}
          </div>
        </div>
        <div className="col mb-3">
          <label className="form-label">
            Password
            {candidate && (
              <em className="ms-1">(Leave blank to keep the same password)</em>
            )}
          </label>
          <input
            {...fields.password}
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            {errors.password?.message?.toString()}
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="btn btn-primary me-2"
        >
          {formState.isSubmitting && (
            <span className="spinner-border spinner-border-sm me-1"></span>
          )}
          Save
        </button>
        <button
          onClick={() => reset()}
          type="button"
          disabled={formState.isSubmitting}
          className="btn btn-secondary"
        >
          Reset
        </button>
        <Link href="/users" className="btn btn-link">
          Cancel
        </Link>
      </div>
    </form>
  );
}
