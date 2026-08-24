function formatId(id: string | number): string {
  if (typeof id === "string") {
    return `ID:${id}`;
  } else {
    return `ID:${id}`;
  }
}

console.log(formatId(101));

console.log(formatId("EMP-101"));
