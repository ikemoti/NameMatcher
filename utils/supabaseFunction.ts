import { supabase } from "./supabase";

export type Post = {
    name: string,
}

export const fetchTodoList = async (): Promise<Post[]> => {
    const { data, error } = await supabase.from('post').select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data as Post[];
};

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
