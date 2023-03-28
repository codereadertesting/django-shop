import React from "react"
import { computeHistoryOnAllRecords } from "utils"

export function RecordsHistory() {
  const [history, setHistory] = React.useState([])
  setHistory(computeHistoryOnAllRecords())

  return (
    <>
      <h2>Records History</h2>
      {history.map((record) => {
        return (
          <div key={record.id}>
            <h3>{record.name}</h3>
            <p>{record.history}</p>
          </div>
        )
      })}
    </>
  )
}
