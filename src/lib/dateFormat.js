export function formatInsightMonthYear(dateInput) {
  if (!dateInput) return ''
  const date = new Date(dateInput)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' }).toUpperCase()
}

export function formatBlogDate(dateInput) {
  if (!dateInput) return ''
  const date = new Date(dateInput)
  if (Number.isNaN(date.getTime())) return ''
  return date
    .toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })
    .toUpperCase()
}

