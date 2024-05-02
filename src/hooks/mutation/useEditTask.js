import { useMutation, useQueryClient } from "react-query";
import { GET_ALL_TASKS } from "../../constant/queryKey";
import axios from "axios";
const editTask = async ({ id, name, description, priority, status }) => {
  const { data } = await axios.patch(`https://nestjstodoapi.onrender.com/api/task


/${id}`, {
    name,
    description,
    priority,
    status,
  });
  return data;
};
const useEditTaskByID = (data) => {
  const queryClient = useQueryClient();
  return useMutation(editTask, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_ALL_TASKS]);
    },
  });
};
export { useEditTaskByID };
