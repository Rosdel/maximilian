import react from "react"
import "./ExpenseForm.css"

const ExpenseForm = () => {
  return (
    <form>
      <div className="new_expense__controls">
        <div className="new_expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
      </div>
    </form>
  )
}
export default ExpenseForm
