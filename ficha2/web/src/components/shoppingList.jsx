export default function ShoppingList({
  element,
  setElement,
  shoppingList,
  setShoppingList,
}) {
  function addElement() {
    setShoppingList((prev) => [...prev, element]);
    setElement("");
  }
  return (
    <div className="border-t-2 py-2">
      <h4 className="font-bold">Shopping list</h4>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={item} className="flex gap-2">
            {item}
            <button
              className="underline cursor-pointer"
              type="button"
              onClick={() => {
                setShoppingList((prev) => prev.filter((_, i) => i !== index));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addElement();
        }}
        className="flex w-[200px] gap-2"
      >
        <input
          className="border-1 border-gray-300 rounded-md"
          type="text"
          onChange={(e) => setElement(e.target.value)}
          value={element}
        />
        <button
          className="bg-zinc-600 hover:bg-zinc-500 text-white rounded-md px-4 cursor-pointer"
          type="submit"
        >
          add
        </button>
      </form>
    </div>
  );
}
