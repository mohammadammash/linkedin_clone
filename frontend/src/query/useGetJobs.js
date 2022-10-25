import { useQueries, useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../App";
//getAPI
import { getAllJobs } from "../services/getAllJobs.services";
import { LoginUserPostAPI } from "../services/register.services";
import authenticateCurrentUser from "../navigations/authentication.navigations";

export const ALL_JOBS_KEY = ["ALL_JOBS_KEY"];

export const useGetJobs = () =>
  useQuery({
    refetchOnWindowFocus: false,
    queryKey: ALL_JOBS_KEY,
    queryFn: () => getAllJobs(),
  });

export const useLoginUser = () =>
  useMutation({
    mutationFn: (values) => LoginUserPostAPI(values),
    onSuccess: (data) => {
      queryClient.setQueryData(["CURRENT_USER_KEY"], { ...data });
      authenticateCurrentUser(data.user_type, data.token);
    },
  });

// useMutation({
// mutationKey: ["LOGIN_USER"],
// mutationFn: () => LoginUserPostAPI(values),
// onSuccess: (data) => {
//   console.log(values);
//   return;
// },
