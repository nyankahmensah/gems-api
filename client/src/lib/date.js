export function generateDate({ dateString }) {
  const createdDate = new Date(dateString);
  const month = createdDate.toLocaleDateString('en-US', {
    month: 'short',
  });

  const day = createdDate.toLocaleDateString('en-US', {
    day: 'numeric',
  });

  const time = createdDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `${month} ${day}, ${createdDate.getFullYear()} at ${time}`;
}

export function generateTime({ dateString }) {
  const createdDate = new Date(dateString);

  const parsedTime = createdDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return parsedTime;
}
