import { useState } from 'react';

//default config
let defaultConfig = {
  name: 'invoiceTable',
  page_count: 5,
  use_pagination: true,
};

//paginate
function paginate({ per_page, items, current_page }) {
  let total_pages = Math.ceil(items.length / per_page);
  let offset = (current_page - 1) * per_page;
  let paginatedItems = items.slice(offset).slice(0, per_page);

  return {
    total_pages,
    data: paginatedItems,
    next_page: total_pages > current_page ? current_page + 1 : null,
    prev_page: current_page - 1 ? current_page - 1 : null,
    total: items.length,
  };
}

//useTable
function useTable({ rows, config = defaultConfig }) {
  const [current_page, setCurrentPage] = useState(1);

  const { total_pages, data, next_page, prev_page, total } = paginate({
    per_page: config.page_count,
    items: rows,
    current_page,
  });

  function goToNextPage() {
    console.log('nextPage', next_page);

    let nextPage = current_page + 1;
    setCurrentPage(nextPage);
    paginate({
      per_page: config.page_count,
      items: rows,
      current_page,
    });
  }

  function goToPrePage() {
    let prevPage = current_page - 1;
    setCurrentPage(prevPage);

    paginate({
      per_page: config.page_count,
      items: rows,
      current_page,
    });
  }

  function goToPage(page) {
    setCurrentPage(page);

    paginate({
      per_page: config.page_count,
      items: rows,
      current_page,
    });
  }

  return {
    rows: data,
    total_pages,
    next_page,
    prev_page,
    goToNextPage,
    goToPrePage,
    goToPage,
    total,
  };
}

export default useTable;
