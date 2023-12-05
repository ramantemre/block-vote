import { create } from "zustand";
import { useRouter, useSearchParams } from "next/navigation";

import { useAlertService } from "_services";
import { useFetch } from "_helpers/client";

export { useCandidateService };

// user state store
const initialState = {
  candidates: undefined,
  candidate: undefined,
  currentCandidate: undefined,
};
const candidateStore = create<ICandidateStore>(() => initialState);

function useCandidateService(): ICandidateService {
  const alertService = useAlertService();
  const fetch = useFetch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { candidates, candidate, currentCandidate } = candidateStore();

  return {
    candidates,
    candidate,
    currentCandidate,
    login: async (username, password) => {
      alertService.clear();
      try {
        const currentCandidate = await fetch.post("/api/account/login", {
          username,
          password,
        });
        candidateStore.setState({ ...initialState, currentCandidate });

        // get return url from query parameters or default to '/'
        const returnUrl = searchParams.get("returnUrl") || "/";
        router.push(returnUrl);
      } catch (error: any) {
        alertService.error(error);
      }
    },
    logout: async () => {
      await fetch.post("/api/account/logout");
      router.push("/account/login");
    },
    register: async (user) => {
      try {
        await fetch.post("/api/account/register", user);
        alertService.success("Registration successful", true);
        router.push("/account/login");
      } catch (error: any) {
        alertService.error(error);
      }
    },
    getAll: async () => {
      candidateStore.setState({
        candidates: await fetch.get("/api/candidates"),
      });
    },
    getById: async (id) => {
      candidateStore.setState({ candidate: undefined });
      try {
        candidateStore.setState({
          candidate: await fetch.get(`/api/candidates/${id}`),
        });
      } catch (error: any) {
        alertService.error(error);
      }
    },
    getCurrent: async () => {
      if (!currentCandidate) {
        candidateStore.setState({
          currentCandidate: await fetch.get("/api/candidates/current"),
        });
      }
    },
    create: async (candidate) => {
      await fetch.post("/api/candidates", candidate);
    },
    update: async (id, params) => {
      await fetch.put(`/api/candidates/${id}`, params);

      // update current candidate if the candidate updated their own record
      if (id === currentCandidate?.id) {
        candidateStore.setState({
          currentCandidate: { ...currentCandidate, ...params },
        });
      }
    },
    delete: async (id) => {
      // set isDeleting prop to true on candidate
      candidateStore.setState({
        candidates: candidates!.map((x) => {
          if (x.id === id) {
            x.isDeleting = true;
          }
          return x;
        }),
      });

      // delete candidate
      const response = await fetch.delete(`/api/candidates/${id}`);

      // remove deleted candidate from state
      candidateStore.setState({
        candidates: candidates!.filter((x) => x.id !== id),
      });

      // logout if the candidate deleted their own record
      if (response.deletedSelf) {
        router.push("/account/login");
      }
    },
  };
}

// interfaces

interface ICandidate {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  username: string;
  password: string;
  isDeleting?: boolean;
}

interface ICandidateStore {
  candidates?: ICandidate[];
  candidate?: ICandidate;
  currentCandidate?: ICandidate;
}

interface ICandidateService extends ICandidateStore {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (candidate: ICandidate) => Promise<void>;
  getAll: () => Promise<void>;
  getById: (id: string) => Promise<void>;
  getCurrent: () => Promise<void>;
  create: (candidate: ICandidate) => Promise<void>;
  update: (id: string, params: Partial<ICandidate>) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
