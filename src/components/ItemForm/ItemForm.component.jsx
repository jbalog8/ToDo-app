export function ItemForm(props) {
  return (
    <form onSubmit={props.onSubmit} autoComplete="off">
      <input type="text" placeholder="TODO: Buy milk"
        name="item" value={props.value} onChange={props.onChange}
        
      />
        <button type="submit" disabled={!props.value}>Submit</button>
    </form>
  );
}