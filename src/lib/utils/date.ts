  export const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-es', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }
