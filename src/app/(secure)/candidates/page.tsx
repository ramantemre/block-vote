"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Spinner } from "_components";
import { useCandidateService } from "_services";

export default Candidates;

function Candidates() {
  const candidatesService = useCandidateService();
  const candidates = candidatesService.candidates;

  useEffect(() => {
    candidatesService.getAll();
  }, []);

  return (
    <>
      <h1>Candidates</h1>
      <Link href="/candidates/add" className="btn btn-sm btn-success mb-2">
        Add Candidate
      </Link>
      <table className="table-striped table">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>First Name</th>
            <th style={{ width: "30%" }}>Last Name</th>
            <th style={{ width: "30%" }}>Email Address</th>
            <th style={{ width: "30%" }}>Username</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </table>
    </>
  );

  function TableBody() {
    if (candidates?.length) {
      return candidates.map((candidate) => (
        <tr key={candidate.id}>
          <td>{candidate.firstName}</td>
          <td>{candidate.lastName}</td>
          <td>{candidate.emailAddress}</td>
          <td>{candidate.username}</td>
          <td style={{ whiteSpace: "nowrap" }}>
            <Link
              href={`/candidates/edit/${candidate.id}`}
              className="btn btn-sm btn-primary me-1"
            >
              Edit
            </Link>
            <button
              onClick={() => candidatesService.delete(candidate.id)}
              className="btn btn-sm btn-danger btn-delete-candidate"
              style={{ width: "60px" }}
              disabled={candidate.isDeleting}
            >
              {candidate.isDeleting ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                <span>Delete</span>
              )}
            </button>
          </td>
        </tr>
      ));
    }

    if (!candidates) {
      return (
        <tr>
          <td colSpan={4}>
            <Spinner />
          </td>
        </tr>
      );
    }

    if (candidates?.length === 0) {
      return (
        <tr>
          <td colSpan={4} className="text-center">
            <div className="p-2">No Candidates To Display</div>
          </td>
        </tr>
      );
    }
  }
}
