"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { AddEdit } from "_components/candidates";
import { Spinner } from "_components";
import { useCandidateService } from "_services";

export default Edit;

function Edit({ params: { id } }: any) {
  const router = useRouter();
  const candidateService = useCandidateService();
  const candidate = candidateService.candidate;

  useEffect(() => {
    if (!id) return;

    // fetch candidate for add/edit form
    candidateService.getById(id);
  }, [router]);

  return candidate ? (
    <AddEdit title="Edit Candidate" candidate={candidate} />
  ) : (
    <Spinner />
  );
}
