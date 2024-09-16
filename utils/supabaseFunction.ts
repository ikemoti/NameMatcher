import { supabase } from "./supabase";

// export const fetchTodoList = async () => {
//     const todoItems = await supabase.from('todo_items').select('*');
//     return todoItems.data;
// };

export const addTodoItem = async (name: string) => {
  await supabase.from("post").insert({ name: name });
};

// export const deleteTodoItem = async ( name: string) => {
//     await supabase.from('post').delete().eq('name', name);
// };
//
// export const checkTodoItem = async (id: number, status: boolean) => {
//     await supabase.from('todo_items').update({ status: !status }).eq('id', id);
// };
