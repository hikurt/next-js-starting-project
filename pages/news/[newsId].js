import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return (
    <Fragment>
      <h1>This is a DetailPage</h1>
      <p>{newsId}</p>
    </Fragment>
  );
}

export default DetailPage;