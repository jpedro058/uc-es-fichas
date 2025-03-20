import { useState } from "react";

export default function Component1() {
  const [text, setText] = useState("");
  return (
    <div>
      <h4 className="font-bold">Exercicio 1</h4>
      <textarea
        className="border-1 p-1"
        id="input"
        placeholder="Escreva aqui o seu texto..."
        onChange={(e) => setText(e.target.value)}
      />
      <p className="underline">{text}</p>
    </div>
  );
}
