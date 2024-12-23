function generateCalendar(year, month) {
  const calendarElement = document.getElementById('calendar');

  // Clear previous content
  calendarElement.innerHTML = '';

  // Days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Add day headers
  daysOfWeek.forEach(day => {
      const header = document.createElement('div');
      header.className = 'header';
      header.textContent = day;
      calendarElement.appendChild(header);
  });

  // Get the first day of the month and the number of days in the month
  const firstDay = new Date(year, month, 1).getDay();
  const numDays = new Date(year, month + 1, 0).getDate();

  // Add empty cells for the days before the 1st of the month
  for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'day empty';
      calendarElement.appendChild(emptyCell);
  }

  // Add days of the month
  for (let day = 1; day <= numDays; day++) {
      const dayCell = document.createElement('div');
      dayCell.className = 'day';
      dayCell.textContent = day;
      calendarElement.appendChild(dayCell);
  }
}

// Generate calendar for September 2024
generateCalendar(2024, 8); // Month is 0-indexed (0 = January, 8 = September)
