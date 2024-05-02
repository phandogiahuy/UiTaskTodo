import { useMutation, useQueryClient } from "react-query";
import { GET_ALL_TASKS } from "../../constant/queryKey";
import axios from "axios";

const deleteTasktById = async (id) => {
  const { data } = await axios.delete(`https://nestjstodoapi.onrender.com/api/task


/${id}`);
  return data;
};
const useDeleteTaskById = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTasktById, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_ALL_TASKS]);
    },
  });
};

export { useDeleteTaskById };
