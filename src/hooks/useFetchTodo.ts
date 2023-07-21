import axios from "axios";
import useSWR from "swr";

const todoFetcher = async (id) => {
  const data = await axios.get(`/api/todos/${id}`);
  return data;
};

const useFetchTodo = (id) => {
  const { data: todos, mutate } = useSWR(id ? id : null, todoFetcher);
  return { todos, mutate };
};

export default useFetchTodo;
