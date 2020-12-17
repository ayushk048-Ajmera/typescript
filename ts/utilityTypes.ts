// Utility Types

//partial type

interface todo {
  id: number;
  todo: string;
  description: string;
  complete: boolean;
}

function updateTodo(todo: todo, updateField: Partial<todo>) {
  const t = { ...todo, ...updateField };
  return t;
}

let t: todo = {
  id: 1,
  todo: "Utility types",
  description: "learning Utility types in typescript",
  complete: true,
};
console.log("before ", t);

t = updateTodo(t, {
  complete: false,
});

console.log("after ", t);

//readonly

let t2: Readonly<todo> = {
  id: 2,
  todo: "Utility types",
  description: "learning Utility types in typescript",
  complete: true,
};

console.log(t2);

//Record<Keys,Type>
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};

console.log(nav.contact);

type TodoPreview = Pick<todo, "todo" | "complete">;

const todo: TodoPreview = {
  todo: "Clean room",
  complete: false,
};

console.log(todo);

type TodoPreview1 = Omit<todo, "description">;

const todo1: TodoPreview1 = {
  id: 4,
  todo: "Clean room",
  complete: false,
};
console.log(todo1);

//Exclude use for un-matched litrels

type T1 = Exclude<"a" | "b" | "c" | "z", "a" | "b">;

let x: T1 = "c";

//extract use for matched litrels

type T0 = Extract<"a" | "b" | "c", "a" | "f">;

let y: T0 = "a";

console.log(x);

//notnullable

type T3 = NonNullable<string | number | undefined>;

let z: T3 = 1;
